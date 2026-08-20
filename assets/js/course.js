/* Course detail page */
(function (w, d) {
  'use strict';

  const TYPE_ICON = { lesson: 'play', workshop: 'edit', live: 'chat', quiz: 'target', brief: 'folder' };
  const TYPE_LBL = {
    lesson:   { en: 'Lesson',   ar: 'درس' },
    workshop: { en: 'Workshop', ar: 'ورشة' },
    live:     { en: 'Live',     ar: 'مباشر' },
    quiz:     { en: 'Checkpoint', ar: 'اختبار' },
    brief:    { en: 'Brief',    ar: 'بريف' }
  };

  let course = null;

  function meta(T) {
    const c = course;
    return [
      { k: 'crs.starts',   v: T.date(c.start) },
      { k: 'crs.format',   v: (c.badges.indexOf('live') > -1 ? T.t('b.live') : T.t('b.recorded')) },
      { k: 'crs.duration', v: T.num(c.weeks) + ' ' + T.t('crs.weeks') + ' · ' + T.num(c.hours) + ' ' + T.t('crs.hours') },
      { k: 'crs.language', v: T.pick(c.langNote) }
    ];
  }

  function buyCard(T, A) {
    const c = course, enrolled = A.isEnrolled(c.id), saved = A.state.saved.indexOf(c.id) > -1;
    const seatPct = Math.round((1 - c.seats.left / c.seats.total) * 100);

    return '<div class="buy__art">' +
        '<img src="' + c.cover + '" alt="" width="1600" height="900">' +
        '<button class="buy__play" data-preview aria-label="' + A.esc(T.t('crs.preview')) + '">' + A.icon('play') + '</button>' +
      '</div>' +
      '<div class="buy__body">' +
        '<div class="buy__price"><b>' + T.money(c.price) + '</b></div>' +
        '<p style="font-size:.78rem;color:var(--text-3)">' + A.esc(T.t('crs.perSeat')) + ' · ' + A.esc(T.t('b.cert')) + '</p>' +
        '<div style="margin-top:1rem">' +
          '<span class="mono" style="color:var(--text-3);display:block;margin-bottom:.5rem">' + A.esc(T.t('cro.cohortIn')) + '</span>' +
          '<div data-countdown="' + c.start + '"></div>' +
        '</div>' +
        '<div class="buy__seats">' + A.icon('users') +
          '<span><b style="color:inherit">' + T.num(c.seats.left) + '</b> ' + A.esc(T.t('crs.seatsLeft')) +
          '<span style="display:block;margin-top:.35rem"><span class="bar bar--thin" style="background:rgba(181,118,8,.2)"><span style="width:' + seatPct + '%;background:var(--amber)"></span></span></span></span>' +
        '</div>' +
        (enrolled
          ? '<a class="btn btn--navy btn--block btn--lg" href="learn.html?id=' + c.id + '">' + A.esc(T.t('crs.continue')) + '</a>'
          : '<a class="btn btn--primary btn--block btn--lg" href="checkout.html?id=' + c.id + '&plan=premium">' + A.esc(T.t('crs.enroll')) + '</a>') +
        '<div class="buy__mini">' +
          '<button class="btn btn--ghost btn--sm" data-save>' + A.icon(saved ? 'check' : 'flag') +
            '<span>' + A.esc(T.t(saved ? 'crs.saved' : 'crs.save')) + '</span></button>' +
          '<button class="btn btn--ghost btn--sm" data-share>' + A.icon('network') + '<span>' + A.esc(T.t('crs.share')) + '</span></button>' +
        '</div>' +
        '<ul class="buy__list">' +
          [T.num(c.lessonCount) + ' ' + T.t('crs.lessons') + ' · ' + T.num(c.hours) + ' ' + T.t('crs.hours'),
           T.pick({ en: 'One live review session every week', ar: 'جلسة مراجعة مباشرة كل أسبوع' }),
           T.pick({ en: 'Every brief read and answered by a human', ar: 'كل بريف بيتقرا ويترد عليه من إنسان' }),
           T.pick({ en: 'Lifetime access and free updates', ar: 'وصول مدى الحياة وتحديثات مجانية' }),
           T.pick({ en: 'Verifiable certificate with a credential ID', ar: 'شهادة موثّقة برقم تحقّق' })
          ].map(x => '<li>' + A.icon('check') + '<span>' + A.esc(x) + '</span></li>').join('') +
        '</ul>' +
        '<p class="buy__note">' + A.icon('check') + '<span>' + A.esc(T.t('cro.guarantee')) + '</span></p>' +
      '</div>';
  }

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS;
    const id = A.param('id') || 'social-systems';
    course = L.byId(id) || L.COURSES[0];
    const c = course, inst = L.instructor(c.instructor);

    d.title = T.pick(c.title) + ' — Osolutions Academy';

    d.querySelector('[data-c-cat]').textContent = T.pick(c.catName);
    d.querySelector('[data-c-badges]').innerHTML = A.badges(c.badges, { lg: true }) + A.levelBadge(c.level, true);
    d.querySelector('[data-c-title]').textContent = T.pick(c.title);
    d.querySelector('[data-c-tagline]').textContent = T.pick(c.tagline);
    d.querySelector('[data-c-rating]').innerHTML =
      A.stars(c.rating) + '<b>' + c.rating.toFixed(1) + '</b><span>(' + T.num(c.reviews) + ' ' + T.t('crs.reviews') + ')</span>';
    d.querySelector('[data-c-enrolled]').textContent = T.num(c.students) + ' ' + T.t('crs.enrolled');

    d.querySelector('[data-c-meta]').innerHTML = meta(T).map(m =>
      '<div><dt>' + A.esc(T.t(m.k)) + '</dt><dd>' + A.esc(m.v) + '</dd></div>').join('');

    /* session chips + quick wins + instructor row — these fill the hero column
       so the sticky buy card never leaves a dead gap beside it */
    d.querySelector('[data-c-ses]').innerHTML = A.sessionBadges(c.sessions, { lg: true });

    d.querySelector('[data-c-quick]').innerHTML = c.outcomes.slice(0, 4).map(o =>
      '<li>' + A.icon('check') + '<span>' + A.esc(T.pick(o)) + '</span></li>').join('');

    d.querySelector('[data-c-by]').innerHTML =
      '<img src="' + inst.img + '" alt="" loading="lazy">' +
      '<span><b>' + A.esc(T.pick(inst.name)) + '</b>' +
      '<small>' + A.esc(T.pick(inst.role)) + '</small></span>' +
      '<span class="rating" style="margin-inline-start:auto">' + A.stars(inst.stats.rating) +
      '<b>' + inst.stats.rating.toFixed(1) + '</b></span>';

    /* session type cards */
    d.querySelector('[data-c-sessions]').innerHTML = A.SESSION_ORDER.map(id => {
      const s = A.SESSION[id];
      const on = c.sessions.indexOf(id) > -1;
      return '<div class="card ses-card ses-card--' + id + (on ? '' : ' is-off') + '" data-spot>' +
        '<div class="ses-card__top">' +
          '<span class="ses-card__ico">' + A.icon(s.i) + '</span>' +
          '<span class="ses-card__state ' + (on ? 'on' : 'off') + '">' +
            A.esc(on ? T.pick({ en: 'Available', ar: 'متاح' }) : T.pick({ en: 'Not on this course', ar: 'مش في الكورس ده' })) +
          '</span>' +
        '</div>' +
        '<h4>' + A.esc(T.t(s.k)) + '</h4>' +
        '<p>' + A.esc(T.t(s.d)) + '</p></div>';
    }).join('');

    /* buy card */
    const buy = d.querySelector('[data-c-buy]');
    buy.innerHTML = buyCard(T, A);
    bindBuy();
    function bindBuy() {
      buy.querySelector('[data-preview]').addEventListener('click', () =>
        A.toast(T.lang === 'ar' ? 'المعاينة بتفتح أول درس مجاني في الفصل.' : 'Preview opens the first free lesson in the classroom.', 'playC'));
      buy.querySelector('[data-save]').addEventListener('click', () => {
        const on = A.toggleSave(c.id);
        A.toast(T.t(on ? 'crs.saved' : 'crs.save'), on ? 'check' : 'flag');
        buy.innerHTML = buyCard(T, A); bindBuy();
        if (w.CRO) w.CRO.mount();
      });
      buy.querySelector('[data-share]').addEventListener('click', () => {
        if (navigator.clipboard) navigator.clipboard.writeText(location.href);
        A.toast(T.lang === 'ar' ? 'الرابط اتنسخ.' : 'Link copied.', 'check');
      });
    }

    /* outcomes */
    d.querySelector('[data-c-outcomes]').innerHTML = c.outcomes.map(o =>
      '<li><span class="ico">' + A.icon('check') + '</span><span>' + A.esc(T.pick(o)) + '</span></li>').join('');

    /* curriculum */
    d.querySelector('[data-c-curriculum]').innerHTML = c.curriculum.map((m, i) => {
      const mins = m.l.reduce((a, x) => a + x.d, 0);
      const lessons = m.l.map(l =>
        '<li><span class="ico">' + A.icon(TYPE_ICON[l.ty] || 'play') + '</span>' +
        '<span class="t">' + A.esc(T.pick(l.t)) +
          (l.free ? ' <span class="badge badge--green" style="margin-inline-start:.4rem">' + A.esc(T.t('crs.preview')) + '</span>' : '') +
        '</span>' +
        '<span class="d">' + (l.d ? T.num(l.d) + ' ' + T.t('g.min') : A.esc(T.pick(TYPE_LBL[l.ty]))) + '</span></li>').join('');

      return '<div class="acc' + (i === 0 ? ' is-open' : '') + '">' +
        '<button class="acc__head" aria-expanded="' + (i === 0) + '">' +
          '<span class="acc__num">' + A.esc(T.t('crs.week')) + ' ' + T.num(m.w) + '</span>' +
          '<span class="acc__title">' + A.esc(T.pick(m.t)) + '</span>' +
          '<span class="acc__meta">' + T.num(m.l.length) + ' ' + T.t('crs.lessons') + ' · ' + T.num(Math.round(mins / 60 * 10) / 10) + ' ' + T.t('crs.hours') + '</span>' +
          '<span class="acc__ico">' + A.icon('chev') + '</span>' +
        '</button>' +
        '<div class="acc__body"><div><div class="acc__inner">' +
          '<p style="font-size:.87rem;margin-bottom:.9rem">' + A.esc(T.pick(m.s)) + '</p>' +
          '<ul class="lesson-list">' + lessons + '</ul>' +
        '</div></div></div>' +
      '</div>';
    }).join('');
    A.bindAccordions();

    const exp = d.querySelector('[data-expand]');
    exp.onclick = () => {
      const accs = d.querySelectorAll('[data-c-curriculum] .acc');
      const anyClosed = Array.prototype.some.call(accs, a => !a.classList.contains('is-open'));
      accs.forEach(a => a.classList.toggle('is-open', anyClosed));
      exp.textContent = T.t(anyClosed ? 'crs.collapseAll' : 'crs.expandAll');
    };
    d.querySelector('[data-syllabus]').onclick = () =>
      A.toast(T.lang === 'ar' ? 'المنهج بيتبعت على إيميلك بعد التسجيل.' : 'The syllabus is emailed to you after enrollment.', 'download');

    /* who */
    d.querySelector('[data-c-who]').innerHTML = c.who.map((x, i) =>
      '<div class="card card--pad who-card rv rv-d' + (i + 1) + '">' +
      '<span class="ico">' + A.icon('user') + '</span>' +
      '<h4>' + A.esc(T.pick(x.t)) + '</h4><p>' + A.esc(T.pick(x.d)) + '</p></div>').join('');

    /* skills */
    d.querySelector('[data-c-skills]').innerHTML = c.skills.map(s =>
      '<li>' + A.icon('check') + '<span>' + A.esc(T.pick(s)) + '</span></li>').join('');

    /* instructor */
    d.querySelector('[data-c-instructor]').innerHTML =
      '<div class="inst-block">' +
        '<img class="av av--xl" src="' + inst.img + '" alt="" loading="lazy">' +
        '<div>' +
          '<h3>' + A.esc(T.pick(inst.name)) + '</h3>' +
          '<p style="color:var(--orange);font-weight:560;font-size:.88rem;margin-block:.25rem .9rem">' + A.esc(T.pick(inst.role)) + '</p>' +
          '<p style="font-size:.93rem;line-height:1.68">' + A.esc(T.pick(inst.bio)) + '</p>' +
          '<div class="badge-row" style="margin-top:1rem">' + inst.tags.map(t =>
            '<span class="badge badge--ghost">' + A.esc(T.pick(t)) + '</span>').join('') + '</div>' +
          '<div class="inst-block__stats">' +
            '<div><b>' + T.num(inst.stats.students) + '</b><small>' + A.esc(T.t('crs.enrolled')) + '</small></div>' +
            '<div><b>' + inst.stats.rating.toFixed(1) + '</b><small>' + A.esc(T.t('ins.rating')) + '</small></div>' +
            '<div><b>' + T.num(inst.stats.courses) + '</b><small>' + A.esc(T.t('nav.courses')) + '</small></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* reviews */
    d.querySelector('[data-c-reviews]').innerHTML = c.reviews_.map((r, i) =>
      '<div class="card card--pad quote rv rv-d' + (i + 1) + '">' + A.stars(r.r) +
      '<p class="quote__txt">' + A.esc(T.pick(r.txt)) + '</p>' +
      '<div class="quote__by"><img class="av av--sm" src="' + r.av + '" alt="" loading="lazy">' +
      '<span><b>' + A.esc(T.pick(r.name)) + '</b><small>' + A.esc(T.pick(r.role)) + '</small></span></div></div>').join('');

    /* plans */
    d.querySelector('[data-c-plans]').innerHTML = c.plans.map(p => {
      const flag = p.badge === 'popular' ? '<span class="badge badge--solid badge--lg plan__flag">' + A.esc(T.t('crs.popular')) + '</span>'
                 : p.badge === 'value'   ? '<span class="badge badge--ink badge--lg plan__flag">' + A.esc(T.t('crs.bestValue')) + '</span>' : '';
      const save = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;
      const perSeat = Math.round(p.price / p.seats);
      return '<div class="card plan' + (p.badge === 'popular' ? ' plan--featured' : '') + ' rv" data-spot>' + flag +
        '<div class="plan__head">' +
          '<span class="plan__seats">' + A.icon('users') +
            (p.seats > 1
              ? T.num(p.seats) + ' ' + A.esc(T.pick({ en: 'seats', ar: 'مقاعد' }))
              : T.num(1) + ' ' + A.esc(T.pick({ en: 'seat', ar: 'مقعد' }))) + '</span>' +
          '<h3>' + A.esc(T.pick(p.name)) + '</h3>' +
          '<p class="plan__note">' + A.esc(T.pick(p.note)) + '</p>' +
        '</div>' +
        '<div class="plan__price"><b>' + T.money(p.price) + '</b>' +
          (p.was ? '<s>' + T.money(p.was) + '</s><span class="plan__save">−' + save + '%</span>' : '') + '</div>' +
        '<p class="plan__per">' + A.esc(
          p.seats > 1
            ? T.num(perSeat) + ' ' + T.t('g.egp') + ' ' + T.t('crs.perSeat')
            : T.t('crs.perSeat')) + '</p>' +
        '<a class="btn ' + (p.badge === 'popular' ? 'btn--primary' : 'btn--ghost') + ' btn--block" href="checkout.html?id=' + c.id + '&plan=' + p.id + '">' +
          A.esc(T.t('crs.choose')) + '</a>' +
        '<div class="plan__feats"><span class="plan__lbl">' + A.esc(T.t('crs.includes')) + '</span>' +
        p.features.map(f =>
          '<li class="' + (f.on ? '' : 'off') + '">' +
          (f.on ? '<span class="yes">' + A.icon('check') + '</span>' : '<span class="no">' + A.icon('x') + '</span>') +
          '<span>' + A.esc(T.pick(f)) + '</span></li>').join('') +
        '</div></div>';
    }).join('');

    /* value */
    d.querySelector('[data-c-value]').innerHTML = c.value.map((v, i) =>
      '<div class="value-card rv rv-d' + (i + 1) + '"><span class="ico">' + A.icon(v.icon) + '</span>' +
      '<div><h4>' + A.esc(T.pick(v.t)) + '</h4><p>' + A.esc(T.pick(v.d)) + '</p></div></div>').join('');

    /* faq */
    d.querySelector('[data-c-faq]').innerHTML = c.faq.map((f, i) =>
      '<div class="acc"><button class="acc__head" aria-expanded="false">' +
      '<span class="acc__num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span class="acc__title">' + A.esc(T.pick(f.q)) + '</span>' +
      '<span class="acc__ico">' + A.icon('chev') + '</span></button>' +
      '<div class="acc__body"><div><div class="acc__inner"><p style="font-size:.9rem;line-height:1.68">' +
      A.esc(T.pick(f.a)) + '</p></div></div></div></div>').join('');
    A.bindAccordions();

    /* related */
    const rel = L.COURSES.filter(x => x.id !== c.id).sort((a, b) => b.students - a.students).slice(0, 3);
    d.querySelector('[data-c-related]').innerHTML = rel.map(x => A.courseCard(x)).join('');

    /* sticky mobile bar */
    const bar = d.querySelector('[data-buybar]');
    bar.innerHTML = '<div><b>' + T.money(c.price) + '</b><small>' + A.esc(T.pick(c.title)) + '</small></div>' +
      (A.isEnrolled(c.id)
        ? '<a class="btn btn--navy btn--sm" href="learn.html?id=' + c.id + '">' + A.esc(T.t('crs.continue')) + '</a>'
        : '<a class="btn btn--primary btn--sm" href="checkout.html?id=' + c.id + '&plan=premium">' + A.esc(T.t('crs.enroll')) + '</a>');
    const onScroll = () => bar.classList.toggle('is-on', w.scrollY > 520);
    w.removeEventListener('scroll', w.__buybar || (() => {}));
    w.__buybar = onScroll;
    w.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  w.App.init(render);
})(window, document);
