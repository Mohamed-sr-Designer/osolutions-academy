/* Instructor studio */
(function (w, d) {
  'use strict';

  const NAV = [
    { id: 'overview',  k: 'ins.overview',  i: 'grid' },
    { id: 'courses',   k: 'ins.courses',   i: 'book' },
    { id: 'students',  k: 'ins.students',  i: 'users' },
    { id: 'grading',   k: 'ins.grading',   i: 'edit' },
    { id: 'analytics', k: 'ins.analytics', i: 'chart' },
    { id: 'announce',  k: 'ins.announce',  i: 'bell' }
  ];

  const STATE = {
    ahead:   { k: 'ins.ahead',   tone: 'green' },
    ontrack: { k: 'ins.onTrack', tone: 'cyan' },
    risk:    { k: 'ins.atRisk',  tone: 'amber' }
  };

  let pane = 'overview';
  let posted = [];

  function setPane(id) {
    pane = id;
    d.querySelectorAll('[data-pane]').forEach(p => p.classList.toggle('is-on', p.dataset.pane === id));
    d.querySelectorAll('[data-nav] button').forEach(b => b.classList.toggle('is-on', b.dataset.go === id));
    history.replaceState(null, '', '#' + id);
    w.scrollTo({ top: 0, behavior: 'smooth' });
    w.App.reveal();
  }

  function av(p, A) {
    return p.av
      ? '<img src="' + p.av + '" alt="" loading="lazy">'
      : '<span class="av-ini" style="width:30px;height:30px;font-size:.66rem">' + A.esc(p.ini || '') + '</span>';
  }

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS, K = L.TEACH;
    const me = L.instructor(K.who);
    const _h1 = d.querySelector('[data-page-h1]'); if (_h1) _h1.textContent = T.t('ins.title');


    /* sidebar */
    d.querySelector('[data-who]').innerHTML =
      '<img class="av av--md" src="' + me.img + '" alt="">' +
      '<span><b>' + A.esc(T.pick(me.name)) + '</b><small>' + A.esc(T.pick(me.role)) + '</small></span>';

    const counts = { courses: K.courses.length, students: K.students.length, grading: K.queue.length };
    d.querySelector('[data-nav]').innerHTML = NAV.map(n =>
      '<button data-go="' + n.id + '" class="' + (n.id === pane ? 'is-on' : '') + '">' +
      A.icon(n.i) + '<span>' + A.esc(T.t(n.k)) + '</span>' +
      (counts[n.id] ? '<span class="n">' + T.num(counts[n.id]) + '</span>' : '') + '</button>').join('');
    d.querySelectorAll('[data-nav] button').forEach(b => b.onclick = () => setPane(b.dataset.go));

    d.querySelector('[data-side-cta]').innerHTML =
      '<h4>' + A.esc(T.pick({ en: 'Review backlog', ar: 'متأخرات المراجعة' })) + '</h4>' +
      '<p style="font-size:.83rem">' + A.esc(T.pick({
        en: K.kpi.queue + ' submissions are waiting. The promise to learners is a reply inside 48 hours.',
        ar: 'في ' + K.kpi.queue + ' تسليم مستني. الوعد للمتعلّمين هو رد خلال ٤٨ ساعة.' })) + '</p>' +
      '<button class="btn btn--primary btn--sm" data-goto="grading">' + A.esc(T.t('ins.grading')) + '</button>';

    /* KPIs */
    const kpis = [
      { v: T.num(K.kpi.students), k: 'ins.kpiStudents', i: 'users',  c: 'c' },
      { v: T.num(K.kpi.queue),    k: 'ins.kpiQueue',    i: 'edit',   c: 'o' },
      { v: K.kpi.rating.toFixed(1), k: 'ins.kpiRating', i: 'star',   c: 'v' },
      { v: T.money(K.kpi.revenue), k: 'ins.kpiRevenue', i: 'money',  c: 'g' }
    ];
    const kpiHtml = kpis.map(x =>
      '<div class="card kpi kpi--' + x.c + ' rv"><div class="kpi__top">' +
      '<span class="kpi__val" style="font-size:' + (String(x.v).length > 7 ? '1.35rem' : '1.75rem') + '">' + x.v + '</span>' +
      '<span class="kpi__ico">' + A.icon(x.i) + '</span></div>' +
      '<span class="kpi__lbl">' + A.esc(T.t(x.k)) + '</span></div>').join('');
    d.querySelector('[data-ins-kpis]').innerHTML = kpiHtml;
    d.querySelector('[data-ins-kpis2]').innerHTML = kpiHtml;

    /* funnel */
    const worst = K.funnel.reduce((a, b, i, arr) =>
      (i > 0 && (arr[i - 1].pct - b.pct) > (arr[a - 1] ? arr[a - 1].pct - arr[a].pct : 0)) ? i : a, 1);
    const funnelHtml = K.funnel.map((f, i) =>
      '<div class="funnel__row' + (i === worst ? ' dip' : '') + '">' +
      '<div><div class="funnel__lbl">' + A.esc(T.pick(f.m)) + '</div>' +
      '<div class="bar"><span style="width:' + f.pct + '%"></span></div></div>' +
      '<span class="funnel__pct">' + T.num(f.pct) + '%</span></div>').join('');
    d.querySelector('[data-ins-funnel]').innerHTML = funnelHtml;
    d.querySelector('[data-ins-funnel2]').innerHTML = funnelHtml;
    d.querySelector('[data-ins-funnel-course]').textContent = T.pick(L.byId('social-systems').title);
    d.querySelector('[data-ins-funnel-note]').innerHTML = A.icon('bolt') + '<span>' + A.esc(T.pick(K.funnelNote)) + '</span>';

    /* queue rows */
    function queueRow(q, full) {
      const c = L.byId(q.course);
      return '<div class="' + (full ? 'card panel' : '') + '">' +
        '<div class="row" style="' + (full ? 'padding:0;border:0' : '') + '">' +
          '<span class="row__ico" style="overflow:hidden;padding:0">' + av(q, A).replace('<img', '<img style="width:100%;height:100%;object-fit:cover"') + '</span>' +
          '<span class="row__main"><b>' + A.esc(T.pick(q.n)) + '</b>' +
          '<small>' + A.esc(T.pick(q.a)) + ' · ' + A.esc(T.pick(c.title)) + '</small></span>' +
          '<span class="row__side"><span class="badge badge--ghost">' + T.dateShort(q.on) + '</span>' +
          (full ? '<button class="btn btn--ghost btn--sm" data-open>' + A.esc(T.t('ins.openWork')) + '</button>' : '') +
          '</span>' +
        '</div>' +
        (full ? '<div style="display:grid;gap:.7rem;margin-top:1rem">' +
          '<div class="field"><label>' + A.esc(T.t('ins.score')) + '</label>' +
          '<input class="input" type="number" min="0" max="100" value="" style="max-width:120px"></div>' +
          '<div class="field"><textarea class="textarea" placeholder="' + A.esc(T.t('ins.fbPh')) + '"></textarea></div>' +
          '<div style="display:flex;justify-content:flex-end"><button class="btn btn--primary btn--sm" data-send>' +
          A.esc(T.t('ins.sendFb')) + '</button></div></div>' : '') +
        '</div>';
    }
    d.querySelector('[data-ins-queue-preview]').innerHTML = K.queue.slice(0, 4).map(q => queueRow(q, false)).join('');
    d.querySelector('[data-ins-queue]').innerHTML = K.queue.map(q => queueRow(q, true)).join('');
    d.querySelectorAll('[data-send]').forEach(b => b.onclick = () => {
      const box = b.closest('.panel');
      const txt = box.querySelector('textarea').value.trim();
      if (!txt) { A.toast(T.lang === 'ar' ? 'اكتب ملاحظة الأول.' : 'Write the feedback first.', 'edit'); return; }
      box.style.transition = 'opacity .3s'; box.style.opacity = '.45';
      b.disabled = true;
      A.toast(T.lang === 'ar' ? 'الملاحظات اتبعتت للطالب.' : 'Feedback sent to the learner.', 'check');
    });
    d.querySelectorAll('[data-open]').forEach(b => b.onclick = () =>
      A.toast(T.lang === 'ar' ? 'ملف التسليم بيفتح في عارض الشغل.' : 'The submission opens in the work viewer.', 'folder'));

    /* courses table */
    d.querySelector('[data-ins-courses]').innerHTML =
      '<thead><tr><th>' + A.esc(T.t('ins.course')) + '</th><th>' + A.esc(T.t('ins.status')) + '</th>' +
      '<th>' + A.esc(T.t('ins.enrollment')) + '</th><th>' + A.esc(T.t('ins.completion')) + '</th>' +
      '<th>' + A.esc(T.t('ins.rating')) + '</th><th>' + A.esc(T.t('ins.kpiRevenue')) + '</th><th></th></tr></thead><tbody>' +
      K.courses.map(x => {
        const c = L.byId(x.id);
        return '<tr><td><div class="who"><img src="' + c.cover + '" alt="" style="border-radius:7px;width:44px;height:28px;object-fit:cover">' +
          '<span><b>' + A.esc(T.pick(c.title)) + '</b><small>' + A.esc(T.pick(c.catName)) + '</small></span></div></td>' +
          '<td><span class="badge badge--' + (x.state === 'live' ? 'green' : 'ghost') + '">' +
            A.esc(T.t(x.state === 'live' ? 'ins.publish' : 'ins.draft')) + '</span></td>' +
          '<td>' + T.num(x.enrolled) + '</td>' +
          '<td><div style="display:flex;align-items:center;gap:.55rem"><span class="bar" style="width:64px"><span style="width:' + x.completion + '%"></span></span>' +
            '<span style="font-family:var(--font-mono);font-size:.74rem">' + T.num(x.completion) + '%</span></div></td>' +
          '<td>' + (x.rating ? x.rating.toFixed(1) : '—') + '</td>' +
          '<td>' + (x.revenue ? T.money(x.revenue) : '—') + '</td>' +
          '<td><a class="btn btn--ghost btn--sm" href="course.html?id=' + c.id + '">' + A.esc(T.t('ins.manage')) + '</a></td></tr>';
      }).join('') + '</tbody>';

    /* students table */
    d.querySelector('[data-ins-students]').innerHTML =
      '<thead><tr><th>' + A.esc(T.t('ins.student')) + '</th><th>' + A.esc(T.t('ins.course')) + '</th>' +
      '<th>' + A.esc(T.t('ins.progress')) + '</th><th>' + A.esc(T.t('ins.lastSeen')) + '</th>' +
      '<th>' + A.esc(T.t('ins.status')) + '</th><th></th></tr></thead><tbody>' +
      K.students.map(s => {
        const c = L.byId(s.course), st = STATE[s.state];
        return '<tr><td><div class="who">' + av(s, A) + '<span><b>' + A.esc(T.pick(s.n)) + '</b></span></div></td>' +
          '<td>' + A.esc(T.pick(c.title)) + '</td>' +
          '<td><div style="display:flex;align-items:center;gap:.55rem"><span class="bar" style="width:64px"><span style="width:' + s.pct + '%"></span></span>' +
            '<span style="font-family:var(--font-mono);font-size:.74rem">' + T.num(s.pct) + '%</span></div></td>' +
          '<td>' + T.dateShort(s.seen) + '</td>' +
          '<td><span class="badge badge--' + st.tone + '">' + A.esc(T.t(st.k)) + '</span></td>' +
          '<td><button class="btn btn--ghost btn--sm" data-msg>' + A.esc(T.t('ins.message')) + '</button></td></tr>';
      }).join('') + '</tbody>';
    d.querySelectorAll('[data-msg]').forEach(b => b.onclick = () =>
      A.toast(T.lang === 'ar' ? 'الرسالة بتتبعت لصندوق الطالب في الأكاديمية.' : 'The message goes to the learner inbox in the academy.', 'chat'));

    /* analytics extras */
    const enr = [18, 24, 31, 27, 38, 44, 39, 52, 47, 58, 61, 55];
    const maxE = Math.max.apply(null, enr);
    d.querySelector('[data-ins-spark]').innerHTML = enr.map((v, i) =>
      '<i class="' + (i >= 9 ? 'on' : '') + '" style="height:' + Math.round(v / maxE * 100) + '%" title="' + v + '"></i>').join('');
    d.querySelector('[data-ins-sparkx]').innerHTML =
      '<span>' + A.esc(T.pick({ en: '12 months ago', ar: 'من ١٢ شهر' })) + '</span>' +
      '<span>' + A.esc(T.pick({ en: 'This month', ar: 'الشهر ده' })) + '</span>';

    const dist = [[5, 74], [4, 19], [3, 5], [2, 1], [1, 1]];
    d.querySelector('[data-ins-ratings]').innerHTML = dist.map(r =>
      '<div style="display:flex;align-items:center;gap:.7rem;padding:.35rem 0">' +
      '<span style="display:inline-flex;align-items:center;gap:.25rem;font-size:.8rem;width:38px">' + T.num(r[0]) + A.icon('star', 'star-i') + '</span>' +
      '<span class="bar" style="flex:1"><span style="width:' + r[1] + '%"></span></span>' +
      '<span style="font-family:var(--font-mono);font-size:.72rem;color:var(--text-3);width:34px;text-align:end">' + T.num(r[1]) + '%</span></div>').join('');

    /* announcements */
    function paintAnn() {
      d.querySelector('[data-ins-announce]').innerHTML = posted.concat(K.announcements).map(a =>
        '<div class="card card--pad rv"><div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.55rem;flex-wrap:wrap">' +
        '<span class="badge badge--orange">' + A.esc(T.pick(L.byId(a.course).title)) + '</span>' +
        '<span class="mono" style="color:var(--text-3)">' + T.date(a.on) + '</span></div>' +
        '<h4 style="margin-bottom:.35rem">' + A.esc(T.pick(a.t)) + '</h4>' +
        '<p style="font-size:.88rem">' + A.esc(T.pick(a.b)) + '</p></div>').join('');
      A.reveal();
    }
    paintAnn();

    d.querySelector('[data-ann-post]').onclick = () => {
      const box = d.querySelector('[data-ann-input]');
      const v = box.value.trim();
      if (!v) { A.toast(T.lang === 'ar' ? 'اكتب الإعلان الأول.' : 'Write the announcement first.', 'edit'); return; }
      const today = new Date().toISOString().slice(0, 10);
      posted.unshift({
        on: today, course: 'social-systems',
        t: { en: v.split('\n')[0].slice(0, 60), ar: v.split('\n')[0].slice(0, 60) },
        b: { en: v, ar: v }
      });
      box.value = '';
      paintAnn();
      A.toast(T.lang === 'ar' ? 'الإعلان اتنشر للدفعة.' : 'Announcement posted to the cohort.', 'bell');
    };

    d.querySelector('[data-new]').onclick = () =>
      A.toast(T.lang === 'ar' ? 'باني الكورس بيفتح على خطوة المنهج.' : 'The course builder opens on the curriculum step.', 'book');

    const hash = (location.hash || '').replace('#', '');
    if (NAV.some(n => n.id === hash)) pane = hash;
    setPane(pane);
    d.querySelectorAll('[data-goto]').forEach(b => b.onclick = () => setPane(b.dataset.goto));
  }

  w.App.init(render);
})(window, document);
