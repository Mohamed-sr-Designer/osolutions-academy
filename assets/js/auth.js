/* Demo sign in — role picker only, nothing is sent anywhere */
(function (w, d) {
  'use strict';

  function render() {
    const T = w.I18n, A = w.App;

    d.querySelector('[data-roles]').innerHTML = [
      { go: 'dashboard.html', i: 'cap', t: T.t('auth.asStudent'),
        s: T.pick({ en: 'Courses, progress, badges and certificates', ar: 'كورسات وتقدم وشارات وشهادات' }) },
      { go: 'instructor.html', i: 'edit', t: T.t('auth.asInstructor'),
        s: T.pick({ en: 'Cohorts, grading queue and course health', ar: 'دفعات وقائمة تصحيح وحالة الكورسات' }) }
    ].map(r =>
      '<a class="role-btn" href="' + r.go + '"><span class="ico">' + A.icon(r.i) + '</span>' +
      '<span><b>' + A.esc(r.t) + '</b><small>' + A.esc(r.s) + '</small></span>' + A.icon('chevR') + '</a>').join('');

    d.querySelector('[data-signin]').onclick = () => {
      A.toast(T.lang === 'ar' ? 'دي نسخة تجريبية. اختار دور من فوق.' : 'This is a demo build. Pick a role above.', 'user');
    };
  }

  w.App.init(render);
})(window, document);
