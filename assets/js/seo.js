/* ==========================================================================
   OSOLUTIONS ACADEMY — SEO layer
   Canonical, hreflang, Open Graph, Twitter cards and JSON-LD graphs.
   Runs per page and re-runs on language change.
   ========================================================================== */
(function (w, d) {
  'use strict';

  /* Set at build/deploy time. Kept here so every generated URL is absolute. */
  const SITE = (w.OSO_SITE_URL || 'https://mohamed-sr-designer.github.io/osolutions-academy').replace(/\/$/, '');
  const BRAND = 'Osolutions Academy';
  const LOGO = SITE + '/assets/img/logo.svg';
  const OG = SITE + '/assets/img/og.png';

  function page() {
    const p = location.pathname.split('/').pop();
    return (!p || p === '') ? 'index.html' : p;
  }
  /* canonical keeps only the params that identify a distinct page */
  function absUrl() {
    const q = new URLSearchParams(location.search);
    const keep = new URLSearchParams();
    ['id'].forEach(k => { if (q.get(k)) keep.set(k, q.get(k)); });
    const s = keep.toString();
    return SITE + '/' + page() + (s ? '?' + s : '');
  }

  function meta(attr, key, val) {
    if (!val) return;
    let el = d.head.querySelector(attr + '="' + key + '"]');
    if (!el) {
      el = d.createElement('meta');
      el.setAttribute(attr.indexOf('property') > -1 ? 'property' : 'name', key);
      d.head.appendChild(el);
    }
    el.setAttribute('content', val);
  }
  function link(rel, href, extra) {
    let sel = 'link[rel="' + rel + '"]' + (extra && extra.hreflang ? '[hreflang="' + extra.hreflang + '"]' : '');
    let el = d.head.querySelector(sel);
    if (!el) {
      el = d.createElement('link');
      el.setAttribute('rel', rel);
      if (extra && extra.hreflang) el.setAttribute('hreflang', extra.hreflang);
      d.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  function ld(id, obj) {
    let el = d.getElementById(id);
    if (!el) {
      el = d.createElement('script');
      el.type = 'application/ld+json';
      el.id = id;
      d.head.appendChild(el);
    }
    el.textContent = JSON.stringify(obj);
  }

  const org = () => ({
    '@type': 'EducationalOrganization',
    '@id': SITE + '/#org',
    name: BRAND,
    alternateName: 'أكاديمية أوسوليوشنز',
    url: SITE + '/',
    logo: { '@type': 'ImageObject', url: LOGO },
    description: 'The in-house academy of Osolutions, a creative and performance agency in Cairo. Courses in design systems, motion, brand identity, AI workflows and performance creative.',
    address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
    areaServed: ['EG', 'SA', 'AE', 'KW', 'QA', 'BH', 'OM', 'JO'],
    email: 'hello@osolutions.academy',
    parentOrganization: { '@type': 'Organization', name: 'Osolutions' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '180', bestRating: '5' },
    sameAs: []
  });

  const site = () => ({
    '@type': 'WebSite',
    '@id': SITE + '/#website',
    url: SITE + '/',
    name: BRAND,
    inLanguage: w.I18n ? w.I18n.lang : 'en',
    publisher: { '@id': SITE + '/#org' },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: SITE + '/courses.html?q={search_term_string}' },
      'query-input': 'required name=search_term_string'
    }
  });

  function crumbs(items) {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: items.map((x, i) => ({
        '@type': 'ListItem', position: i + 1, name: x.n, item: SITE + '/' + x.u
      }))
    };
  }

  function courseLd(c) {
    const T = w.I18n;
    const inst = w.LMS.instructor(c.instructor);
    const totalMin = c.curriculum.reduce((a, m) => a + m.l.reduce((b, l) => b + l.d, 0), 0);
    return {
      '@type': 'Course',
      '@id': SITE + '/course.html?id=' + c.id + '#course',
      name: T.pick(c.title),
      description: T.pick(c.desc),
      url: SITE + '/course.html?id=' + c.id,
      image: SITE + '/' + c.cover,
      inLanguage: ['ar', 'en'],
      isAccessibleForFree: false,
      educationalLevel: c.level,
      teaches: c.skills.map(s => T.pick(s)),
      provider: { '@id': SITE + '/#org' },
      offers: c.plans.map(p => ({
        '@type': 'Offer',
        name: T.pick(p.name),
        price: String(p.price),
        priceCurrency: 'EGP',
        availability: c.seats.left > 0 ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
        url: SITE + '/checkout.html?id=' + c.id + '&plan=' + p.id,
        category: 'Paid'
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(c.rating), reviewCount: String(c.reviews), bestRating: '5'
      },
      review: c.reviews_.map(r => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: T.pick(r.name) },
        reviewRating: { '@type': 'Rating', ratingValue: String(r.r), bestRating: '5' },
        reviewBody: T.pick(r.txt)
      })),
      hasCourseInstance: [{
        '@type': 'CourseInstance',
        courseMode: c.badges.indexOf('live') > -1 ? ['online', 'blended'] : 'online',
        courseWorkload: 'PT' + Math.round(totalMin / 60) + 'H',
        startDate: c.start,
        instructor: { '@type': 'Person', name: T.pick(inst.name), jobTitle: T.pick(inst.role) },
        location: { '@type': 'VirtualLocation', url: SITE + '/learn.html?id=' + c.id }
      }],
      syllabusSections: c.curriculum.map(m => ({
        '@type': 'Syllabus',
        name: T.pick(m.t),
        description: T.pick(m.s),
        timeRequired: 'PT' + Math.max(1, Math.round(m.l.reduce((a, l) => a + l.d, 0) / 60)) + 'H'
      }))
    };
  }

  function faqLd(list) {
    const T = w.I18n;
    return {
      '@type': 'FAQPage',
      mainEntity: list.map(f => ({
        '@type': 'Question',
        name: T.pick(f.q),
        acceptedAnswer: { '@type': 'Answer', text: T.pick(f.a) }
      }))
    };
  }

  function itemListLd(courses) {
    const T = w.I18n;
    return {
      '@type': 'ItemList',
      name: 'Osolutions Academy course catalog',
      numberOfItems: courses.length,
      itemListElement: courses.map((c, i) => ({
        '@type': 'ListItem', position: i + 1,
        url: SITE + '/course.html?id=' + c.id,
        name: T.pick(c.title)
      }))
    };
  }

  const SEO = {
    site: SITE,

    init() {
      const T = w.I18n, L = w.LMS;
      if (!T) return;
      const p = page();
      const url = absUrl();
      const lang = T.lang;

      /* --- canonical + hreflang --- */
      link('canonical', url);
      link('alternate', url, { hreflang: 'en' });
      link('alternate', url, { hreflang: 'ar' });
      link('alternate', url, { hreflang: 'x-default' });

      /* --- base meta --- */
      const title = d.title;
      const descEl = d.head.querySelector('meta[name="description"]');
      const desc = descEl ? descEl.getAttribute('content') : '';

      meta('meta[name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
      meta('meta[name', 'author', BRAND);
      meta('meta[name', 'theme-color', d.documentElement.getAttribute('data-theme') === 'dark' ? '#0B1726' : '#0A1729');
      meta('meta[property', 'og:type', p === 'course.html' ? 'article' : 'website');
      meta('meta[property', 'og:site_name', BRAND);
      meta('meta[property', 'og:locale', lang === 'ar' ? 'ar_EG' : 'en_US');
      meta('meta[property', 'og:locale:alternate', lang === 'ar' ? 'en_US' : 'ar_EG');
      meta('meta[property', 'og:title', title);
      meta('meta[property', 'og:description', desc);
      meta('meta[property', 'og:url', url);
      meta('meta[property', 'og:image', OG);
      meta('meta[property', 'og:image:width', '1200');
      meta('meta[property', 'og:image:height', '630');
      meta('meta[name', 'twitter:card', 'summary_large_image');
      meta('meta[name', 'twitter:title', title);
      meta('meta[name', 'twitter:description', desc);
      meta('meta[name', 'twitter:image', OG);

      /* --- JSON-LD graph --- */
      const graph = [org(), site()];
      const home = { n: T.t('nav.home'), u: 'index.html' };

      if (p === 'index.html') {
        graph.push(itemListLd(L.COURSES));
      } else if (p === 'courses.html') {
        graph.push(crumbs([home, { n: T.t('nav.courses'), u: 'courses.html' }]));
        graph.push(itemListLd(L.COURSES));
      } else if (p === 'course.html') {
        const c = L.byId(new URLSearchParams(location.search).get('id')) || L.COURSES[0];
        graph.push(crumbs([home, { n: T.t('nav.courses'), u: 'courses.html' }, { n: T.pick(c.title), u: 'course.html?id=' + c.id }]));
        graph.push(courseLd(c));
        graph.push(faqLd(c.faq));
        /* keep the OG image on the course cover for shares */
        meta('meta[property', 'og:image', SITE + '/' + c.cover);
        meta('meta[name', 'twitter:image', SITE + '/' + c.cover);
      } else if (p === 'about.html') {
        graph.push(crumbs([home, { n: T.t('nav.about'), u: 'about.html' }]));
      }

      /* the homepage FAQ block is rendered by home.js */
      if (p === 'index.html' && w.HOME_FAQ) graph.push(faqLd(w.HOME_FAQ));

      ld('ld-graph', { '@context': 'https://schema.org', '@graph': graph });
    }
  };

  w.SEO = SEO;
})(window, document);
