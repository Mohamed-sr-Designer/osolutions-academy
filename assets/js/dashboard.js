/* Student dashboard */
(function (w, d) {
  'use strict';

  const NAV = [
    { id: 'overview',    k: 'dash.overview',    i: 'grid' },
    { id: 'courses',     k: 'dash.myCourses',   i: 'book' },
    { id: 'schedule',    k: 'dash.schedule',    i: 'cal' },
    { id: 'assignments', k: 'dash.assignments', i: 'folder' },
    { id: 'badges',      k: 'dash.badges',      i: 'trophy' },
    { id: 'certs',       k: 'dash.certs',       i: 'cap' }
  ];

  const STATE_BADGE = {
    open:       { k: 'dash.submit',     tone: 'orange' },
    notstarted: { k: 'dash.notStarted', tone: 'ghost' },
    review:     { k: 'dash.inReview',   tone: 'cyan' },
    graded:     { k: 'dash.graded',     tone: 'green' },
    overdue:    { k: 'dash.overdue',    tone: 'red' }
  };

  let pane = 'overview';

  function ring(pct, size, stroke, A) {
    const r = (size - stroke) / 2, c = 2 * Math.PI * r;
    return '<div class="ring" style="width:' + size + 'px;height:' + size + 'px">' +
      '<svg width="' + size + '" height="' + size + '">' +
      '<circle class="track" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke + '"/>' +
      '<circle class="fill" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke + '" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - pct / 100)).toFixed(1) + '"/></svg>' +
      '<span class="ring__val" style="font-size:' + (size / 4.2).toFixed(0) + 'px">' + Math.round(pct) + '%</span></div>';
  }

  function setPane(id) {
    pane = id;
    d.querySelectorAll('[data-pane]').forEach(p => p.classList.toggle('is-on', p.dataset.pane === id));
    d.querySelectorAll('[data-nav] button').forEach(b => b.classList.toggle('is-on', b.dataset.go === id));
    history.replaceState(null, '', '#' + id);
    w.scrollTo({ top: 0, behavior: 'smooth' });
    w.App.reveal();
  }

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS, S = L.STUDENT;
    const _h1 = d.querySelector('[data-page-h1]'); if (_h1) _h1.textContent = T.t('nav.dashboard');


    /* --- sidebar --- */
    d.querySelector('[data-who]').innerHTML =
      '<span class="av-ini av--md">' + A.esc(S.initials) + '</span>' +
      '<span><b>' + A.esc(T.pick(S.name)) + '</b><small>' + A.esc(T.pick(S.role)) + '</small></span>';

    const counts = {
      courses: S.enrolled.length,
      assignments: S.assignments.filter(a => a.state === 'open' || a.state === 'notstarted').length,
      badges: L.ACHIEVEMENTS.filter(b => b.earned).length,
      certs: S.certificates.length
    };
    d.querySelector('[data-nav]').innerHTML = NAV.map(n =>
      '<button data-go="' + n.id + '" class="' + (n.id === pane ? 'is-on' : '') + '">' +
      A.icon(n.i) + '<span>' + A.esc(T.t(n.k)) + '</span>' +
      (counts[n.id] ? '<span class="n">' + T.num(counts[n.id]) + '</span>' : '') + '</button>').join('');
    d.querySelectorAll('[data-nav] button').forEach(b => b.onclick = () => setPane(b.dataset.go));

    d.querySelector('[data-side-cta]').innerHTML =
      '<h4>' + A.esc(T.pick({ en: 'Keep the streak', ar: 'حافظ على السلسلة' })) + '</h4>' +
      '<p style="font-size:.83rem">' + A.esc(T.pick({
        en: 'You are on a ' + S.streak + ' day streak. One lesson today keeps it alive.',
        ar: 'إنت في سلسلة ' + S.streak + ' يوم. درس واحد النهارده يخليها مستمرة.' })) + '</p>' +
      '<a class="btn btn--primary btn--sm" href="learn.html?id=' + S.enrolled[0].id + '">' + A.esc(T.t('dash.resume')) + '</a>' +
      '<a class="btn btn--ghost btn--sm" href="courses.html">' + A.esc(T.t('dash.explore')) + '</a>';

    /* --- overview --- */
    d.querySelector('[data-ov-hi]').textContent = T.t('dash.hi') + ', ' + T.pick(S.name).split(' ')[0] + '.';

    const kpis = [
      { v: S.streak, k: 'dash.kpiStreak', i: 'flame', c: 'o', d: T.pick({ en: 'personal best', ar: 'أفضل رقم ليك' }) },
      { v: S.hours,  k: 'dash.kpiHours',  i: 'clock', c: 'c' },
      { v: S.done,   k: 'dash.kpiDone',   i: 'check', c: 'g' },
      { v: counts.badges, k: 'dash.kpiBadges', i: 'trophy', c: 'v' }
    ];
    d.querySelector('[data-ov-kpis]').innerHTML = kpis.map(x =>
      '<div class="card kpi kpi--' + x.c + ' rv">' +
      '<div class="kpi__top"><span class="kpi__val">' + T.num(x.v) + '</span>' +
      '<span class="kpi__ico">' + A.icon(x.i) + '</span></div>' +
      '<span class="kpi__lbl">' + A.esc(T.t(x.k)) + '</span>' +
      (x.d ? '<span class="kpi__delta up">' + A.esc(x.d) + '</span>' : '') + '</div>').join('');

    /* continue card — the least finished active course */
    const active = S.enrolled.filter(e => e.pct < 100).sort((a, b) => b.pct - a.pct)[0] || S.enrolled[0];
    const ac = L.byId(active.id);
    d.querySelector('[data-ov-continue]').innerHTML =
      '<div class="card cont rv">' +
        '<div class="cont__art"><img src="' + ac.cover + '" alt="" loading="lazy"></div>' +
        '<div class="cont__body">' +
          '<span class="ccard__cat">' + A.esc(T.pick(ac.catName)) + '</span>' +
          '<h3>' + A.esc(T.pick(ac.title)) + '</h3>' +
          '<p class="cont__next">' + A.esc(T.t('room.next')) + ': <b>' + A.esc(T.pick(active.next)) + '</b></p>' +
          '<div class="cont__foot">' +
            '<div class="bar"><span style="width:' + active.pct + '%"></span></div>' +
            '<span class="cont__pct">' + T.num(active.pct) + '%</span>' +
            '<a class="btn btn--primary btn--sm" href="learn.html?id=' + ac.id + '">' + A.esc(T.t('dash.resume')) + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* activity spark */
    const max = Math.max.apply(null, S.activity);
    d.querySelector('[data-ov-spark]').innerHTML = S.activity.map((v, i) =>
      '<i class="' + (i >= S.activity.length - 4 ? 'on' : '') + '" style="height:' +
      Math.max(6, Math.round(v / max * 100)) + '%" title="' + v + 'h"></i>').join('');
    d.querySelector('[data-ov-sparkx]').innerHTML =
      '<span>' + A.esc(T.pick({ en: '12 weeks ago', ar: 'من ١٢ أسبوع' })) + '</span>' +
      '<span>' + A.esc(T.pick({ en: 'This week', ar: 'الأسبوع ده' })) + '</span>';

    /* weekly goal */
    const gp = Math.min(100, Math.round(S.weekDoneHours / S.weekGoalHours * 100));
    d.querySelector('[data-ov-goal]').innerHTML = ring(gp, 104, 9, A) +
      '<div class="goal__txt"><b>' + T.num(S.weekDoneHours) + ' / ' + T.num(S.weekGoalHours) + ' ' + A.esc(T.t('crs.hours')) + '</b>' +
      '<small>' + A.esc(gp >= 100 ? T.t('dash.goalMet') : T.t('dash.ofGoal')) + '</small></div>';

    /* sessions */
    function sessionRow(s) {
      const c = L.byId(s.course);
      return '<div class="row"><span class="row__date"><b>' + T.num(new Date(s.on + 'T00:00:00').getDate()) + '</b>' +
        '<small>' + new Date(s.on + 'T00:00:00').toLocaleDateString(T.lang === 'ar' ? 'ar-EG' : 'en-GB', { month: 'short' }) + '</small></span>' +
        '<span class="row__main"><b>' + A.esc(T.pick(s.t)) + '</b>' +
        '<small>' + A.esc(T.pick(c.title)) + ' · ' + s.time + ' · ' + T.num(s.mins) + ' ' + A.esc(T.t('g.min')) + '</small></span>' +
        '<span class="row__side"><span class="badge badge--red badge--pulse">' + A.esc(T.t('b.live')) + '</span></span></div>';
    }
    d.querySelector('[data-ov-sessions]').innerHTML = S.sessions.map(sessionRow).join('');

    /* due */
    function dueRow(a) {
      const c = L.byId(a.course), sb = STATE_BADGE[a.state];
      return '<div class="row"><span class="row__ico">' + A.icon('folder') + '</span>' +
        '<span class="row__main"><b>' + A.esc(T.pick(a.t)) + '</b>' +
        '<small>' + A.esc(T.pick(c.title)) + ' · ' + A.esc(T.t('dash.due')) + ' ' + T.dateShort(a.due) + '</small></span>' +
        '<span class="row__side"><span class="badge badge--' + sb.tone + '">' + A.esc(T.t(sb.k)) + '</span></span></div>';
    }
    d.querySelector('[data-ov-due]').innerHTML =
      S.assignments.filter(a => a.state === 'open' || a.state === 'notstarted' || a.state === 'review').map(dueRow).join('');

    /* --- my courses --- */
    d.querySelector('[data-my-courses]').innerHTML = S.enrolled.map(e =>
      A.courseCard(L.byId(e.id), { progress: e.pct, hidePrice: true })).join('');

    /* --- schedule --- */
    d.querySelector('[data-schedule]').innerHTML =
      '<div class="panel__head"><h3>' + A.esc(T.t('dash.upcoming')) + '</h3>' +
      '<button class="btn btn--ghost btn--sm" data-cal>' + A.icon('cal') + '<span>' + A.esc(T.t('dash.addCal')) + '</span></button></div>' +
      S.sessions.map(sessionRow).join('');
    d.querySelector('[data-cal]').onclick = () =>
      A.toast(T.lang === 'ar' ? 'ملف التقويم بيتبعت على إيميلك.' : 'The calendar file is emailed to you.', 'cal');

    /* --- assignments --- */
    d.querySelector('[data-assignments]').innerHTML = S.assignments.map(a => {
      const c = L.byId(a.course), sb = STATE_BADGE[a.state];
      const graded = a.state === 'graded';
      return '<div style="padding:1rem 0;border-bottom:1px solid var(--line)">' +
        '<div class="row" style="padding:0;border:0">' +
          '<span class="row__ico">' + A.icon(graded ? 'check' : 'folder') + '</span>' +
          '<span class="row__main"><b>' + A.esc(T.pick(a.t)) + '</b>' +
          '<small>' + A.esc(T.pick(c.title)) + ' · ' + A.esc(T.t('dash.due')) + ' ' + T.date(a.due) + '</small></span>' +
          '<span class="row__side">' +
            (graded ? '<span class="badge badge--green badge--lg">' + T.num(a.score) + ' / 100</span>' : '') +
            '<span class="badge badge--' + sb.tone + '">' + A.esc(T.t(sb.k)) + '</span>' +
            (a.state === 'open' || a.state === 'notstarted'
              ? '<button class="btn btn--primary btn--sm" data-submit>' + A.esc(T.t('dash.submit')) + '</button>' : '') +
          '</span>' +
        '</div>' +
        (graded ? '<div class="note-box" style="background:var(--bg-2);border-color:var(--line);margin-top:.85rem">' +
          A.icon('chat') + '<span><b style="display:block;margin-bottom:.25rem">' + A.esc(T.pick(L.instructor(c.instructor).name)) + '</b>' +
          A.esc(T.pick(a.fb)) + '</span></div>' : '') +
        '</div>';
    }).join('');
    d.querySelectorAll('[data-submit]').forEach(b => b.onclick = () =>
      A.toast(T.lang === 'ar' ? 'التسليم بيتفتح جوه الفصل، في تبويب البريف.' : 'Submitting happens inside the classroom, in the brief tab.', 'edit'));

    /* --- badges --- */
    d.querySelector('[data-badges]').innerHTML = L.ACHIEVEMENTS.map(b =>
      '<div class="card btile rv ' + (b.earned ? 'on' : 'off') + '" data-tone="' + b.tone + '">' +
      (b.earned ? '' : '<span class="btile__lock">' + A.icon('lock') + '</span>') +
      '<span class="btile__medal">' + A.icon(b.icon) + '</span>' +
      '<b>' + A.esc(T.pick(b.t)) + '</b>' +
      '<small>' + A.esc(T.pick(b.d)) + '</small>' +
      '<span class="btile__on">' + (b.earned ? T.dateShort(b.on) : A.esc(T.t('dash.locked'))) + '</span></div>').join('');

    /* --- certificates --- */
    const cw = d.querySelector('[data-certs]');
    cw.innerHTML = S.certificates.length ? S.certificates.map(x => {
      const c = L.byId(x.course);
      return '<div class="cert rv">' +
        '<div class="cert__top"><img src="assets/img/logo.svg" alt="Osolutions">' +
        '<span class="badge badge--solid">' + A.esc(T.t('b.cert')) + '</span></div>' +
        '<p style="font-family:var(--font-mono);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.7rem">' +
          A.esc(T.pick({ en: 'Certificate of completion', ar: 'شهادة إتمام' })) + '</p>' +
        '<h3>' + A.esc(T.pick(c.title)) + '</h3>' +
        '<p>' + A.esc(T.pick(S.name)) + ' · ' + T.date(x.on) + '</p>' +
        '<div class="cert__foot"><div><span class="cert__id">' + A.esc(T.t('dash.certId')) + ': ' + x.id + '</span>' +
        '<div style="margin-top:.8rem"><button class="btn btn--primary btn--sm" data-cert>' + A.esc(T.t('dash.certView')) + '</button></div></div>' +
        '<span class="cert__seal">' + A.icon('cap') + '</span></div></div>';
    }).join('') :
      '<div class="empty card"><span class="ico">' + A.icon('cap') + '</span><p>' + A.esc(T.t('dash.noCert')) + '</p></div>';
    cw.querySelectorAll('[data-cert]').forEach(b => b.onclick = () =>
      A.toast(T.lang === 'ar' ? 'الشهادة بتفتح على صفحة تحقّق عامة.' : 'The certificate opens on a public verification page.', 'cap'));

    /* pane routing */
    const hash = (location.hash || '').replace('#', '');
    if (NAV.some(n => n.id === hash)) pane = hash;
    setPane(pane);
    d.querySelectorAll('[data-goto]').forEach(b => b.onclick = () => setPane(b.dataset.goto));
  }

  w.App.init(render);
})(window, document);
