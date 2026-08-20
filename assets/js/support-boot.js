/* Renders whichever support page window.PAGE_KEY names. */
(function (w, d) {
  'use strict';

  const CTA = {
    pill: { en: 'Still stuck?', ar: 'لسه واقف؟' },
    h:    { en: 'A person answers every message inside one working day.', ar: 'حد حقيقي بيرد على كل رسالة خلال يوم عمل واحد.' },
    p:    { en: 'Write to hello@osolutions.academy, or pick a course and ask the instructor directly in the cohort room.', ar: 'ابعت لـ hello@osolutions.academy، أو اختار كورس واسأل المدرب مباشرة في أوضة الدفعة.' },
    btn:  { en: 'Browse courses', ar: 'تصفّح الكورسات' }
  };

  function render() {
    const T = w.I18n, A = w.App;
    const key = w.PAGE_KEY;
    const P = (w.SUPPORT_PAGES || {})[key];
    if (!P) return;

    const set = (s, v) => { const e = d.querySelector(s); if (e) e.textContent = v; };
    const html = (s, v) => { const e = d.querySelector(s); if (e) e.innerHTML = v; };

    d.title = T.pick(P.h) + ' — Osolutions Academy';
    set('[data-pg-crumb]', T.pick(P.crumb));
    set('[data-pg-h]', T.pick(P.h));
    set('[data-pg-sub]', T.pick(P.sub));

    let body = '';

    if (P.type === 'help') {
      body += '<div class="help-grid" data-stagger>' + P.groups.map(g =>
        '<div class="card card--pad help-card" data-spot>' +
          '<span class="ico-box">' + A.icon(g.i) + '</span>' +
          '<h3 style="font-size:1.05rem">' + A.esc(T.pick(g.t)) + '</h3>' +
          '<p>' + A.esc(T.pick(g.p)) + '</p>' +
          '<ul>' + g.links.map(l =>
            '<li><a href="' + l.h + '">' + A.icon('chevR') + '<span>' + A.esc(T.pick(l.t)) + '</span></a></li>').join('') +
          '</ul>' +
        '</div>').join('') + '</div>';

      body += '<div class="legal" style="margin-top:clamp(3rem,6vw,5rem)">' +
        P.after.map(s =>
          '<div id="' + s.id + '" class="rv" style="scroll-margin-top:100px">' +
          '<h2>' + A.esc(T.pick(s.h)) + '</h2>' +
          s.p.map(x => '<p>' + A.esc(T.pick(x)) + '</p>').join('') + '</div>').join('') +
        '</div>';

    } else {
      const toc = P.sections.map((s, i) =>
        '<a class="pill" href="#s' + i + '" style="text-transform:none;letter-spacing:0;font-family:var(--font-body);font-size:.78rem">' +
        A.esc(T.pick(s.h)) + '</a>').join('');

      body = '<div class="legal">' +
        '<p class="legal__meta">' + A.esc(T.pick({ en: 'Last updated', ar: 'آخر تحديث' })) + ' · ' + T.date(P.updated) + '</p>' +
        '<div class="legal__toc">' + toc + '</div>' +
        P.sections.map((s, i) =>
          '<section id="s' + i + '" class="rv" style="scroll-margin-top:100px">' +
          '<h2>' + A.esc(T.pick(s.h)) + '</h2>' +
          (s.p ? s.p.map(x => '<p>' + A.esc(T.pick(x)) + '</p>').join('') : '') +
          (s.li ? '<ul>' + s.li.map(x => '<li>' + A.esc(T.pick(x)) + '</li>').join('') + '</ul>' : '') +
          '</section>').join('') +
        '</div>';
    }

    html('[data-pg-body]', body);

    set('[data-pg-ctaPill]', T.pick(CTA.pill));
    set('[data-pg-ctaH]', T.pick(CTA.h));
    set('[data-pg-ctaP]', T.pick(CTA.p));
    html('[data-pg-ctaBtn]', '<span>' + A.esc(T.pick(CTA.btn)) + '</span>' +
      '<span class="cta-round__ico">' + A.icon('arrow') + '</span>');
  }

  w.App.init(render);
})(window, document);
