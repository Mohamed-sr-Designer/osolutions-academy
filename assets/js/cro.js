/* ==========================================================================
   OSOLUTIONS ACADEMY — conversion layer
   Cohort countdowns, a single well-behaved lead capture, and UTM attribution.
   Shown once per visitor, dismissible, and never on the checkout flow.
   ========================================================================== */
(function (w, d) {
  'use strict';

  const KEY = 'osoAcademy.cro';
  let store = { leadSeen: false, leadDone: false, utm: null, firstSeen: null };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) store = Object.assign(store, JSON.parse(raw));
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {}
  }

  /* ---------- attribution ---------- */
  function attribution() {
    const q = new URLSearchParams(location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const found = {};
    keys.forEach(k => { if (q.get(k)) found[k] = q.get(k); });
    if (Object.keys(found).length && !store.utm) {
      found.landing = location.pathname;
      found.referrer = d.referrer || 'direct';
      found.at = new Date().toISOString();
      store.utm = found;
      save();
    }
    if (!store.firstSeen) { store.firstSeen = new Date().toISOString(); save(); }
  }

  /* ---------- countdown ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }

  function countdown(host, iso, dark) {
    const T = w.I18n;
    const target = new Date(iso + 'T18:00:00+02:00').getTime();
    host.className = 'cdown' + (dark ? ' cdown--dark' : '');
    const units = [['cro.d', 0], ['cro.h', 0], ['cro.m', 0], ['cro.s', 0]];
    host.innerHTML = units.map(u =>
      '<span class="cdown__u"><b>00</b><small>' + w.App.esc(T.t(u[0])) + '</small></span>').join('');
    const bs = host.querySelectorAll('b');

    function tick() {
      let diff = Math.max(0, target - Date.now());
      const dd = Math.floor(diff / 864e5); diff -= dd * 864e5;
      const hh = Math.floor(diff / 36e5);  diff -= hh * 36e5;
      const mm = Math.floor(diff / 6e4);   diff -= mm * 6e4;
      const ss = Math.floor(diff / 1e3);
      bs[0].textContent = pad(dd);
      bs[1].textContent = pad(hh);
      bs[2].textContent = pad(mm);
      bs[3].textContent = pad(ss);
    }
    tick();
    clearInterval(host._t);
    host._t = setInterval(tick, 1000);
  }

  function mountCountdowns() {
    d.querySelectorAll('[data-countdown]').forEach(el => {
      const iso = el.getAttribute('data-countdown');
      if (iso) countdown(el, iso, el.hasAttribute('data-countdown-dark'));
    });
  }

  /* ---------- lead capture ---------- */
  function leadModal() {
    const T = w.I18n, A = w.App;
    const page = location.pathname.split('/').pop() || 'index.html';
    if (['checkout.html', 'learn.html', 'login.html', 'console.html'].indexOf(page) > -1) return;
    if (store.leadDone || store.leadSeen) return;

    const el = d.createElement('div');
    el.className = 'modal';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML =
      '<div class="modal__box" style="overflow:hidden">' +
        '<div class="lead__art">' +
          '<img src="assets/img/scenes/mentoring.webp" alt="" loading="lazy">' +
          '<span class="badge badge--solid badge--lg">' + A.esc(T.t('g.free')) + '</span>' +
        '</div>' +
        '<div class="modal__body">' +
          '<h3>' + A.esc(T.t('cro.leadH')) + '</h3>' +
          '<p style="margin-top:.6rem;font-size:.9rem">' + A.esc(T.t('cro.leadP')) + '</p>' +
          '<ul class="lead__perk">' +
            ['cro.perk1', 'cro.perk2', 'cro.perk3'].map(k =>
              '<li>' + A.icon('check') + '<span>' + A.esc(T.t(k)) + '</span></li>').join('') +
          '</ul>' +
          '<form data-lead-form novalidate>' +
            '<div style="display:flex;gap:.5rem;flex-wrap:wrap">' +
              '<input class="input" type="email" required data-lead-email style="flex:1;min-width:200px" placeholder="' + A.esc(T.t('cro.leadPh')) + '">' +
              '<button class="btn btn--primary" type="submit">' + A.esc(T.t('cro.leadCta')) + '</button>' +
            '</div>' +
            '<p data-lead-err style="color:var(--red);font-size:.78rem;margin-top:.5rem" hidden></p>' +
          '</form>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1rem;flex-wrap:wrap">' +
            '<small style="font-size:.74rem;color:var(--text-3)">' + A.esc(T.t('auth.demoNote')) + '</small>' +
            '<button class="btn btn--quiet btn--sm" data-lead-close>' + A.esc(T.t('cro.later')) + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    d.body.appendChild(el);

    const open = () => {
      if (store.leadSeen || store.leadDone) return;
      store.leadSeen = true; save();
      el.classList.add('is-open');
      d.body.classList.add('is-locked');
      setTimeout(() => { const i = el.querySelector('[data-lead-email]'); if (i) i.focus(); }, 250);
    };
    const close = () => {
      el.classList.remove('is-open');
      d.body.classList.remove('is-locked');
    };

    el.querySelector('[data-lead-close]').onclick = close;
    el.addEventListener('click', e => { if (e.target === el) close(); });
    d.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    el.querySelector('[data-lead-form]').addEventListener('submit', e => {
      e.preventDefault();
      const input = el.querySelector('[data-lead-email]');
      const err = el.querySelector('[data-lead-err]');
      const v = (input.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        err.hidden = false;
        err.textContent = T.t('cro.leadBad');
        input.focus();
        return;
      }
      err.hidden = true;
      store.leadDone = true; save();
      close();
      A.toast(T.t('cro.leadOk'), 'check');
    });

    /* trigger: 55% scroll depth, 30s dwell, or exit intent — whichever lands first */
    let fired = false;
    const fire = () => { if (fired) return; fired = true; open(); };

    const onScroll = () => {
      const h = d.documentElement.scrollHeight - w.innerHeight;
      if (h > 0 && w.scrollY / h > 0.55) fire();
    };
    w.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(fire, 30000);
    d.addEventListener('mouseout', e => {
      if (!e.relatedTarget && e.clientY <= 0) fire();
    });
  }

  const CRO = {
    get data() { return store; },
    countdown: countdown,
    mount: mountCountdowns,

    init() {
      load();
      attribution();
      mountCountdowns();
      /* let the page settle before arming the lead capture */
      setTimeout(leadModal, 1200);
    }
  };

  w.CRO = CRO;
})(window, document);
