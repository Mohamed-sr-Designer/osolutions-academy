/* Enrollment / checkout — demo only, no payment is taken */
(function (w, d) {
  'use strict';

  const CODES = { 'OSO10': 10, 'TEAM15': 15, 'ALUMNI20': 20 };
  let course, planId = 'premium', discount = 0;

  function plan() { return course.plans.find(p => p.id === planId) || course.plans[1]; }

  function paintSummary() {
    const T = w.I18n, A = w.App;
    const p = plan();
    const sub = p.price;
    const off = Math.round(sub * discount / 100);

    d.querySelector('[data-sum-course]').innerHTML =
      '<div class="row" style="padding-top:0">' +
      '<span class="row__ico" style="width:52px;height:34px;border-radius:8px;overflow:hidden;padding:0">' +
      '<img src="' + course.cover + '" alt="" style="width:100%;height:100%;object-fit:cover"></span>' +
      '<span class="row__main"><b>' + A.esc(T.pick(course.title)) + '</b>' +
      '<small>' + A.esc(T.pick(plan().name)) + ' · ' + A.esc(T.t('crs.starts')) + ' ' + T.dateShort(course.start) + '</small></span></div>';

    d.querySelector('[data-sum-rows]').innerHTML =
      '<div class="sum-row"><span>' + A.esc(T.t('chk.subtotal')) + '</span><span>' + T.money(sub) + '</span></div>' +
      (off ? '<div class="sum-row"><span style="color:var(--green)">' + A.esc(T.t('chk.discount')) + ' (' + discount + '%)</span>' +
        '<span style="color:var(--green)">− ' + T.money(off) + '</span></div>' : '') +
      '<div class="sum-row total"><span>' + A.esc(T.t('chk.total')) + '</span><b>' + T.money(sub - off) + '</b></div>';
  }

  function paintPlans() {
    const T = w.I18n, A = w.App;
    d.querySelector('[data-plan-pick]').innerHTML = course.plans.map(p =>
      '<button class="role-btn" data-plan="' + p.id + '" style="' +
      (p.id === planId ? 'border-color:var(--orange);box-shadow:var(--sh-2)' : '') + '">' +
      '<span class="ico">' + A.icon(p.id === 'duo' ? 'users' : p.id === 'premium' ? 'star' : 'play') + '</span>' +
      '<span style="min-width:0"><b>' + A.esc(T.pick(p.name)) + '</b><small>' + A.esc(T.pick(p.note)) + '</small></span>' +
      '<span style="margin-inline-start:auto;font-family:var(--font-display);font-weight:700;color:var(--navy);white-space:nowrap">' +
      T.money(p.price) + '</span></button>').join('');
    d.querySelectorAll('[data-plan]').forEach(b => b.onclick = () => {
      planId = b.dataset.plan; paintPlans(); paintSummary();
    });
  }

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS;
    course = L.byId(A.param('id')) || L.COURSES[0];
    const p = A.param('plan');
    if (p && course.plans.some(x => x.id === p)) planId = p;

    d.title = T.t('chk.title') + ' — Osolutions Academy';
    d.querySelector('[data-learner-h]').textContent = T.pick({ en: 'Learner details', ar: 'بيانات المتعلّم' });
    d.querySelector('[data-lbl-name]').textContent = T.pick({ en: 'Full name', ar: 'الاسم كامل' });
    d.querySelector('[data-lbl-phone]').textContent = T.pick({ en: 'Phone number', ar: 'رقم الموبايل' });
    d.querySelector('[data-lbl-terms]').textContent = T.pick({
      en: 'I have read the refund policy and I know the seat is held for this cohort only.',
      ar: 'قريت سياسة الاسترجاع وعارف إن المقعد محجوز للدفعة دي بس.' });
    d.querySelector('[data-f-name]').value = T.pick(L.STUDENT.name);
    d.querySelector('[data-done-ico]').innerHTML = A.icon('check');

    paintPlans(); paintSummary();

    d.querySelector('[data-promo-go]').onclick = () => {
      const v = (d.querySelector('[data-promo]').value || '').trim().toUpperCase();
      if (CODES[v]) { discount = CODES[v]; paintSummary(); A.toast(T.t('chk.promoOk'), 'check'); }
      else { discount = 0; paintSummary(); A.toast(T.t('chk.promoBad'), 'x'); }
    };

    d.querySelector('[data-pay]').onclick = () => {
      A.enroll(course.id);
      d.querySelector('[data-step-form]').hidden = true;
      const done = d.querySelector('[data-step-done]');
      done.hidden = false;
      d.querySelector('[data-done-cta]').innerHTML =
        '<a class="btn btn--primary btn--lg" href="learn.html?id=' + course.id + '">' + A.esc(T.t('chk.goRoom')) + '</a>' +
        '<a class="btn btn--ghost btn--lg" href="dashboard.html">' + A.esc(T.t('nav.dashboard')) + '</a>';
      w.scrollTo({ top: 0, behavior: 'smooth' });
      A.toast(T.lang === 'ar' ? 'تم التسجيل. مقعدك محجوز.' : 'Enrolled. Your seat is reserved.', 'check');
    };
  }

  w.App.init(render);
})(window, document);
