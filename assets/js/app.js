/* ==========================================================================
   OSOLUTIONS ACADEMY — shared runtime
   Header, footer, theme, language, badges, cards, toasts, local state.
   ========================================================================== */
(function (w, d) {
  'use strict';

  const T = () => w.I18n;

  /* ---------------- Icons ---------------- */
  const ICON = {
    arrow:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL:   '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    chev:     '<path d="M6 9l6 6 6-6"/>',
    chevR:    '<path d="M9 18l6-6-6-6"/>',
    check:    '<path d="M20 6L9 17l-5-5"/>',
    x:        '<path d="M18 6L6 18M6 6l12 12"/>',
    star:     '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" stroke="none"/>',
    play:     '<path d="M6 4l14 8-14 8V4z" fill="currentColor" stroke="none"/>',
    playC:    '<circle cx="12" cy="12" r="10"/><path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none"/>',
    file:     '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/>',
    folder:   '<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>',
    download: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    clock:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    cal:      '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    users:    '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0119 7a4 4 0 01-3 3.87"/>',
    user:     '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    cap:      '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>',
    globe:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z"/>',
    flame:    '<path d="M12 22c4 0 7-2.7 7-6.5 0-4.5-4-6.5-4-10.5 0 0-2 1.5-2 4-1.5-1-2-3-2-3s-6 3.5-6 9.5C5 19.3 8 22 12 22z"/>',
    flag:     '<path d="M4 22V4a6 6 0 018 0 6 6 0 008 0v10a6 6 0 01-8 0 6 6 0 00-8 0z"/>',
    target:   '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>',
    trophy:   '<path d="M8 21h8M12 17v4M6 4h12v5a6 6 0 01-12 0V4z"/><path d="M6 6H4a2 2 0 000 4h2M18 6h2a2 2 0 010 4h-2"/>',
    moon:     '<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>',
    sun:      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    chat:     '<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.9 8.9 0 01-4-.9L3 21l1.9-4.5A8.4 8.4 0 013 11.5a8.4 8.4 0 019-8.4 8.4 8.4 0 019 8.4z"/>',
    layers:   '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
    refresh:  '<path d="M21 12a9 9 0 11-2.6-6.4M21 3v6h-6"/>',
    trending: '<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
    network:  '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v4M12 12L6.5 16.5M12 12l5.5 4.5"/>',
    sparkle:  '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/>',
    lock:     '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
    search:   '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    menu:     '<path d="M3 6h18M3 12h18M3 18h18"/>',
    bolt:     '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    bell:     '<path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 01-3.4 0"/>',
    grid:     '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    book:     '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
    edit:     '<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    chart:    '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
    money:    '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.7-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 2 3 2 3 .8 3 2-1.3 2-3 2c-1.3 0-2.5-.5-3-1.5M12 6v12"/>',
    ig:       '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
    li:       '<path d="M4 9h4v12H4zM6 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="currentColor" stroke="none"/><path d="M11 9h4v2a4.5 4.5 0 018 2.8V21h-4v-6a2 2 0 10-4 0v6h-4z" fill="currentColor" stroke="none"/>',
    be:       '<path d="M2 6h6.5a3.2 3.2 0 010 6.4H2z"/><path d="M2 12.4h7a3.3 3.3 0 010 6.6H2z"/><path d="M15 15.5h7a3.5 3.5 0 10-7 0v.5a3.5 3.5 0 006.2 2.2"/>',
    yt:       '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none"/>'
  };

  function icon(name, cls) {
    const p = ICON[name] || '';
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  /* ---------------- Badge registry ---------------- */
  const BADGE = {
    bestseller: { k: 'b.bestseller', tone: 'orange', i: 'star' },
    new:        { k: 'b.new',        tone: 'green',  i: 'sparkle' },
    live:       { k: 'b.live',       tone: 'red',    i: null, pulse: true },
    recorded:   { k: 'b.recorded',   tone: 'navy',   i: 'play' },
    cert:       { k: 'b.cert',       tone: 'violet', i: 'cap' },
    arabic:     { k: 'b.arabic',     tone: 'cyan',   i: 'globe' },
    seats:      { k: 'b.seats',      tone: 'amber',  i: 'users' },
    mentor:     { k: 'b.mentor',     tone: 'violet', i: 'chat' },
    portfolio:  { k: 'b.portfolio',  tone: 'navy',   i: 'folder' },
    team:       { k: 'b.team',       tone: 'cyan',   i: 'users' },
    updated:    { k: 'b.updated',    tone: 'green',  i: 'refresh' }
  };

  function badge(id, opts) {
    const b = BADGE[id];
    if (!b) return '';
    const o = opts || {};
    const cls = 'badge badge--' + b.tone + (b.pulse ? ' badge--pulse' : '') + (o.lg ? ' badge--lg' : '');
    return '<span class="' + cls + '">' + (b.i ? icon(b.i) : '') + T().t(b.k) + '</span>';
  }

  function badges(list, opts) {
    return (list || []).map(id => badge(id, opts)).join('');
  }

  /* ---------------- Session delivery types ---------------- */
  const SESSION = {
    offline:  { k: 'ses.offline',  d: 'ses.offlineD',  tone: 'violet', i: 'users' },
    online:   { k: 'ses.online',   d: 'ses.onlineD',   tone: 'red',    i: 'chat' },
    recorded: { k: 'ses.recorded', d: 'ses.recordedD', tone: 'navy',   i: 'play' }
  };
  const SESSION_ORDER = ['offline', 'online', 'recorded'];

  function sessionBadge(id, opts) {
    const s = SESSION[id];
    if (!s) return '';
    const o = opts || {};
    return '<span class="badge badge--' + s.tone + (o.lg ? ' badge--lg' : '') + '">' +
      icon(s.i) + T().t(s.k) + '</span>';
  }
  function sessionBadges(list, opts) {
    return SESSION_ORDER.filter(id => (list || []).indexOf(id) > -1)
      .map(id => sessionBadge(id, opts)).join('');
  }

  const LVL = { beginner: 1, intermediate: 2, advanced: 3 };
  function levelBadge(level, lg) {
    const n = LVL[level] || 1;
    let pips = '';
    for (let i = 1; i <= 3; i++) pips += '<i class="' + (i <= n ? 'on' : '') + '"></i>';
    return '<span class="badge badge--ghost' + (lg ? ' badge--lg' : '') + '">' +
      '<span class="pips">' + pips + '</span>' + T().t('lvl.' + level) + '</span>';
  }

  function stars(r) {
    let s = '';
    for (let i = 0; i < 5; i++) s += icon('star');
    return '<span class="stars" aria-hidden="true">' + s + '</span>';
  }

  /* ---------------- Local state ---------------- */
  const KEY = 'osoAcademy.state';
  const defaults = { role: 'guest', enrolled: [], saved: [], done: {}, notes: {}, theme: null };
  let state = Object.assign({}, defaults);

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) state = Object.assign({}, defaults, JSON.parse(raw));
    } catch (e) {}
    /* the demo student always starts with their three courses */
    if (state.role === 'guest' && !state.enrolled.length) {
      state.enrolled = w.LMS ? w.LMS.STUDENT.enrolled.map(e => e.id) : [];
    }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------------- Theme ---------------- */
  function setTheme(mode) {
    const m = mode === 'dark' ? 'dark' : 'light';
    d.documentElement.setAttribute('data-theme', m);
    state.theme = m; save();
    const btn = d.querySelector('[data-theme-btn]');
    if (btn) btn.innerHTML = icon(m === 'dark' ? 'sun' : 'moon');
  }
  function initTheme() {
    let m = state.theme;
    if (!m) m = w.matchMedia && w.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(m);
  }

  /* ---------------- Toast ---------------- */
  function toast(msg, ico) {
    let host = d.querySelector('.toast-host');
    if (!host) { host = d.createElement('div'); host.className = 'toast-host'; d.body.appendChild(host); }
    const el = d.createElement('div');
    el.className = 'toast';
    el.innerHTML = icon(ico || 'check') + '<span></span>';
    el.querySelector('span').textContent = msg;
    host.appendChild(el);
    setTimeout(() => { el.classList.add('is-out'); setTimeout(() => el.remove(), 320); }, 3200);
  }

  /* ---------------- Header / footer ---------------- */
  const NAV = [
    { href: 'index.html',      k: 'nav.home' },
    { href: 'courses.html',    k: 'nav.courses' },
    { href: 'dashboard.html',  k: 'nav.dashboard' },
    { href: 'instructor.html', k: 'nav.teach' },
    { href: 'about.html',      k: 'nav.about' }
  ];

  function here() {
    const p = location.pathname.split('/').pop();
    return (!p || p === '') ? 'index.html' : p;
  }

  function header() {
    const host = d.querySelector('[data-app-header]');
    if (!host) return;
    const cur = here();
    const links = NAV.map(n =>
      '<a class="hdr__link' + (n.href === cur ? ' is-active' : '') + '" href="' + n.href + '" data-i18n="' + n.k + '"></a>'
    ).join('');
    const drawerLinks = NAV.map(n =>
      '<a href="' + n.href + '"><span data-i18n="' + n.k + '"></span>' + icon('chevR') + '</a>'
    ).join('');

    host.className = 'hdr';
    host.innerHTML =
      '<div class="shell shell--wide hdr__in">' +
        '<a class="hdr__brand" href="index.html">' +
          '<img src="assets/img/logo.svg" alt="Osolutions">' +
          '<b data-i18n="brand.academy"></b>' +
        '</a>' +
        '<nav class="hdr__nav">' + links + '</nav>' +
        '<div class="hdr__tools">' +
          '<button class="iconbtn" data-cmdk-open data-i18n-label="nav.search">' + icon('search') + '</button>' +
          '<button class="iconbtn iconbtn--txt" data-lang-btn data-i18n-label="nav.lang"></button>' +
          '<button class="iconbtn" data-theme-btn data-i18n-label="nav.theme"></button>' +
          '<a class="btn btn--primary btn--sm" href="courses.html" data-i18n="nav.enroll"></a>' +
          '<button class="iconbtn hdr__burger" data-burger data-i18n-label="nav.menu">' + icon('menu') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="drawer" data-drawer>' +
        '<div class="shell">' + drawerLinks +
          '<a class="btn btn--primary btn--block" href="courses.html" data-i18n="nav.enroll" style="justify-content:center"></a>' +
        '</div>' +
      '</div>';

    const themeBtn = host.querySelector('[data-theme-btn]');
    themeBtn.innerHTML = icon(d.documentElement.getAttribute('data-theme') === 'dark' ? 'sun' : 'moon');

    const langBtn = host.querySelector('[data-lang-btn]');
    langBtn.textContent = T().lang === 'en' ? 'ع' : 'EN';
    langBtn.addEventListener('click', () => T().toggle());
    host.querySelector('[data-theme-btn]').addEventListener('click', () => {
      setTheme(d.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
    const drawer = host.querySelector('[data-drawer]');
    host.querySelector('[data-burger]').addEventListener('click', function () {
      const open = drawer.classList.toggle('is-open');
      d.body.classList.toggle('is-locked', open);
      this.innerHTML = icon(open ? 'x' : 'menu');
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      drawer.classList.remove('is-open'); d.body.classList.remove('is-locked');
      host.querySelector('[data-burger]').innerHTML = icon('menu');
    }));
    T().apply(host);
  }

  function footer() {
    const host = d.querySelector('[data-app-footer]');
    if (!host) return;
    const courseLinks = (w.LMS ? w.LMS.COURSES.slice(0, 5) : []).map(c =>
      '<li><a href="course.html?id=' + c.id + '">' + esc(T().pick(c.title)) + '</a></li>'
    ).join('');

    host.className = 'ftr';
    host.innerHTML =
      '<div class="shell shell--wide">' +
        '<div class="ftr__grid">' +
          '<div class="ftr__brand">' +
            '<img src="assets/img/logo.svg" alt="Osolutions">' +
            '<p data-i18n="ftr.tagline"></p>' +
            '<div class="ftr__social" style="margin-top:1.25rem">' +
              /* swap data-social hrefs for the real handles at launch */
              '<a href="about.html#contact" data-social="instagram" aria-label="Instagram">' + icon('ig') + '</a>' +
              '<a href="about.html#contact" data-social="linkedin" aria-label="LinkedIn">' + icon('li') + '</a>' +
              '<a href="about.html#contact" data-social="behance" aria-label="Behance">' + icon('be') + '</a>' +
              '<a href="about.html#contact" data-social="youtube" aria-label="YouTube">' + icon('yt') + '</a>' +
            '</div>' +
          '</div>' +
          '<div><h5 data-i18n="ftr.learn"></h5><ul>' + courseLinks +
            '<li><a href="courses.html" data-i18n="g.viewAll"></a></li></ul></div>' +
          '<div><h5 data-i18n="ftr.company"></h5><ul>' +
            '<li><a href="about.html" data-i18n="nav.about"></a></li>' +
            '<li><a href="about.html#instructors" data-i18n="nav.instructors"></a></li>' +
            '<li><a href="instructor.html" data-i18n="nav.teach"></a></li>' +
            '<li><a href="console.html" data-i18n="nav.console"></a></li>' +
            '<li><a href="about.html#contact" data-i18n="nav.contact"></a></li>' +
          '</ul></div>' +
          '<div><h5 data-i18n="ftr.support"></h5><ul>' +
            '<li><a href="help.html" data-i18n="ftr.help"></a></li>' +
            '<li><a href="privacy.html" data-i18n="ftr.privacy"></a></li>' +
            '<li><a href="terms.html" data-i18n="ftr.terms"></a></li>' +
            '<li><a href="refunds.html" data-i18n="ftr.refund"></a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="ftr__bottom">' +
          '<span>© ' + new Date().getFullYear() + ' <span data-i18n="ftr.rights"></span></span>' +
          '<span class="mono" data-i18n="g.demo"></span>' +
        '</div>' +
      '</div>';
    T().apply(host);
  }

  /* ---------------- Course card ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function courseCard(c, opts) {
    const o = opts || {};
    const i = w.LMS.instructor(c.instructor);
    const t = T();
    const top = (c.badges || []).slice(0, 2);
    const prog = o.progress;

    return '<a class="card card--hover ccard rv" data-spot href="course.html?id=' + c.id + '">' +
      '<div class="thumb thumb--slim">' +
        '<img src="' + c.cover + '" alt="" loading="lazy" width="1600" height="900">' +
        '<div class="thumb__badges">' + badges(top) + '</div>' +
        '<span class="thumb__meta">' + t.num(c.weeks) + ' ' + t.t('crs.weeks') + ' · ' + t.num(c.lessonCount) + ' ' + t.t('crs.lessons') + '</span>' +
        '<img class="ccard__face" src="' + i.img + '" alt="' + esc(t.pick(i.name)) + '" loading="lazy">' +
      '</div>' +
      '<div class="ccard__body">' +
        '<span class="ccard__cat">' + esc(t.pick(c.catName)) + '</span>' +
        '<h3 class="ccard__title">' + esc(t.pick(c.title)) + '</h3>' +
        '<p class="ccard__desc">' + esc(t.pick(c.tagline)) + '</p>' +
        '<div class="badge-row">' + sessionBadges(c.sessions) + levelBadge(c.level) + '</div>' +
        (prog != null
          ? '<div style="margin-top:.35rem"><div class="bar"><span style="width:' + prog + '%"></span></div>' +
            '<small style="display:block;margin-top:.45rem;font-size:.74rem;color:var(--text-3)">' +
            t.num(prog) + '% ' + t.t('g.complete') + '</small></div>'
          : '') +
        '<div class="ccard__foot">' +
          '<span class="ccard__by"><span>' + esc(t.pick(i.name)) + '</span>' +
            '<span class="rating">' + stars(c.rating) + '<b>' + c.rating.toFixed(1) + '</b></span></span>' +
          (o.hidePrice ? '' : '<span class="ccard__price">' + t.money(c.price) + '</span>') +
        '</div>' +
      '</div>' +
    '</a>';
  }

  /* ---------------- Reveal (delegates to the motion engine) ---------------- */
  function reveal(root) {
    if (w.Motion) { w.Motion.refresh(root); return; }
    const nodes = (root || d).querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in w)) { nodes.forEach(n => n.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    nodes.forEach(n => io.observe(n));
  }

  /* ---------------- Accordion ---------------- */
  function bindAccordions(root) {
    (root || d).querySelectorAll('.acc__head').forEach(h => {
      if (h.dataset.bound) return;
      h.dataset.bound = '1';
      h.addEventListener('click', () => {
        const acc = h.closest('.acc');
        const open = acc.classList.toggle('is-open');
        h.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  /* ---------------- Counters ---------------- */
  function countUp(root) {
    (root || d).querySelectorAll('[data-count]').forEach(el => {
      if (el.dataset.counted) return;
      const target = parseFloat(el.dataset.count);
      const dec = (el.dataset.dec | 0);
      const suffix = el.dataset.suffix || '';
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          el.dataset.counted = '1'; io.disconnect();
          const dur = 1200, t0 = performance.now();
          (function tick(now) {
            const p = Math.min(1, (now - t0) / dur);
            const v = target * (1 - Math.pow(1 - p, 3));
            el.textContent = (dec ? v.toFixed(dec) : Math.round(v).toLocaleString(T().lang === 'ar' ? 'ar-EG' : 'en-US')) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          })(t0);
        });
      }, { threshold: .4 });
      io.observe(el);
    });
  }

  /* ---------------- Skip link ---------------- */
  function skipLink() {
    if (d.querySelector('.skip')) return;
    const a = d.createElement('a');
    a.className = 'skip';
    a.href = '#main';
    a.textContent = T().lang === 'ar' ? 'تخطَّ إلى المحتوى' : 'Skip to content';
    d.body.insertBefore(a, d.body.firstChild);
    const main = d.querySelector('main');
    if (main && !main.id) { main.id = 'main'; main.setAttribute('tabindex', '-1'); }
  }

  /* ---------------- Command palette ---------------- */
  function commandPalette() {
    if (d.querySelector('.cmdk')) return;
    const T_ = T();
    const box = d.createElement('div');
    box.className = 'cmdk';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML =
      '<div class="cmdk__box">' +
        '<div class="cmdk__field">' + icon('search') +
          '<input type="text" data-cmdk-input aria-label="Search">' +
          '<span class="cmdk__hint">ESC</span>' +
        '</div>' +
        '<div class="cmdk__list" data-cmdk-list></div>' +
      '</div>';
    d.body.appendChild(box);

    const input = box.querySelector('[data-cmdk-input]');
    const list = box.querySelector('[data-cmdk-list]');
    let items = [], sel = 0;

    function build() {
      const t = T();
      const nav = [
        { g: 'nav', i: 'grid',   b: t.t('nav.home'),      s: 'index.html',      href: 'index.html' },
        { g: 'nav', i: 'book',   b: t.t('nav.courses'),   s: 'courses.html',    href: 'courses.html' },
        { g: 'nav', i: 'cap',    b: t.t('nav.dashboard'), s: 'dashboard.html',  href: 'dashboard.html' },
        { g: 'nav', i: 'edit',   b: t.t('nav.teach'),     s: 'instructor.html', href: 'instructor.html' },
        { g: 'nav', i: 'chart',  b: t.t('nav.console'),   s: 'console.html',    href: 'console.html' },
        { g: 'nav', i: 'users',  b: t.t('nav.about'),     s: 'about.html',      href: 'about.html' }
      ];
      const courses = (w.LMS ? w.LMS.COURSES : []).map(c => ({
        g: 'course', i: 'play', b: t.pick(c.title), s: t.pick(c.catName), href: 'course.html?id=' + c.id
      }));
      const actions = [
        { g: 'action', i: 'moon', b: t.t('nav.theme'), s: '', act: () =>
          setTheme(d.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark') },
        { g: 'action', i: 'globe', b: t.t('nav.lang'), s: '', act: () => t.toggle() }
      ];
      return nav.concat(courses).concat(actions);
    }

    function paint(q) {
      const t = T();
      const all = build();
      const needle = (q || '').trim().toLowerCase();
      items = needle
        ? all.filter(x => (x.b + ' ' + x.s).toLowerCase().indexOf(needle) > -1)
        : all;
      sel = 0;
      if (!items.length) {
        list.innerHTML = '<div class="cmdk__empty">' + esc(t.t('cat.none')) + '</div>';
        return;
      }
      const groups = { nav: t.t('cmd.pages'), course: t.t('nav.courses'), action: t.t('cmd.actions') };
      let html = '', last = null;
      items.forEach((x, i) => {
        if (x.g !== last) { html += '<div class="cmdk__group">' + esc(groups[x.g]) + '</div>'; last = x.g; }
        html += '<button class="cmdk__item' + (i === 0 ? ' is-sel' : '') + '" data-i="' + i + '">' +
          '<span class="ico">' + icon(x.i) + '</span>' +
          '<span><b>' + esc(x.b) + '</b>' + (x.s ? '<small>' + esc(x.s) + '</small>' : '') + '</span></button>';
      });
      list.innerHTML = html;
      list.querySelectorAll('[data-i]').forEach(b => {
        b.onclick = () => run(parseInt(b.dataset.i, 10));
        b.onmouseenter = () => mark(parseInt(b.dataset.i, 10));
      });
    }

    function mark(i) {
      sel = i;
      list.querySelectorAll('[data-i]').forEach(b => b.classList.toggle('is-sel', +b.dataset.i === i));
    }
    function run(i) {
      const x = items[i];
      if (!x) return;
      close();
      if (x.act) x.act(); else location.href = x.href;
    }
    function open() {
      box.classList.add('is-open');
      d.body.classList.add('is-locked');
      input.value = '';
      input.placeholder = T().t('cmd.ph');
      paint('');
      setTimeout(() => input.focus(), 40);
    }
    function close() {
      box.classList.remove('is-open');
      d.body.classList.remove('is-locked');
    }

    input.addEventListener('input', () => paint(input.value));
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); mark(Math.min(items.length - 1, sel + 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); mark(Math.max(0, sel - 1)); }
      else if (e.key === 'Enter') { e.preventDefault(); run(sel); }
    });
    box.addEventListener('click', e => { if (e.target === box) close(); });
    d.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); }
      else if (e.key === 'Escape') close();
    });
    d.addEventListener('click', e => {
      if (e.target.closest && e.target.closest('[data-cmdk-open]')) { e.preventDefault(); open(); }
    });
  }

  /* ---------------- Public API ---------------- */
  const App = {
    icon, badge, badges, levelBadge, stars, esc, toast, courseCard, reveal,
    sessionBadge, sessionBadges, SESSION, SESSION_ORDER,
    bindAccordions, countUp, setTheme, save,
    get state() { return state; },
    isEnrolled(id) { return state.enrolled.indexOf(id) > -1; },
    enroll(id) { if (!this.isEnrolled(id)) { state.enrolled.push(id); save(); } },
    toggleSave(id) {
      const i = state.saved.indexOf(id);
      if (i > -1) state.saved.splice(i, 1); else state.saved.push(id);
      save(); return i === -1;
    },
    param(k) { return new URLSearchParams(location.search).get(k); },
    init(onReady) {
      load();
      T().init();
      initTheme();
      header();
      footer();
      if (onReady) onReady();
      T().apply(d);
      skipLink();
      commandPalette();
      bindAccordions();
      if (w.Motion) w.Motion.init(); else { reveal(); countUp(); }
      if (w.SEO) w.SEO.init();
      if (w.CRO) w.CRO.init();

      d.addEventListener('lang:change', () => {
        const lb = d.querySelector('[data-lang-btn]');
        if (lb) lb.textContent = T().lang === 'en' ? 'ع' : 'EN';
        header(); footer();
        if (onReady) onReady();
        T().apply(d);
        /* content is replaced wholesale — show it rather than re-animating in place */
        d.querySelectorAll('.rv, .sp, [data-stagger]').forEach(n => n.classList.add('in'));
        bindAccordions();
        if (w.Motion) w.Motion.refresh();
        if (w.SEO) w.SEO.init();
        const sk = d.querySelector('.skip');
        if (sk) sk.textContent = T().lang === 'ar' ? 'تخطَّ إلى المحتوى' : 'Skip to content';
      });
    }
  };

  /* progressive install + offline shell */
  if ('serviceWorker' in navigator) {
    w.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js', { scope: './' }).catch(function () {});
    });
  }

  w.App = App;
})(window, document);
