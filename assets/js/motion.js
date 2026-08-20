/* ==========================================================================
   OSOLUTIONS ACADEMY — motion + interaction engine
   Pointer-aware, scroll-aware, and fully disabled under reduced motion.
   ========================================================================== */
(function (w, d) {
  'use strict';

  const reduced = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = w.matchMedia && w.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* rAF batching so scroll handlers never stack */
  let ticking = false;
  const scrollJobs = [];
  function onScroll(fn) {
    scrollJobs.push(fn);
    if (scrollJobs.length === 1) {
      w.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { scrollJobs.forEach(j => j()); ticking = false; });
      }, { passive: true });
    }
    fn();
  }

  /* ---------- 1 · scroll progress ---------- */
  function progress() {
    const bar = d.createElement('div');
    bar.className = 'progress';
    bar.innerHTML = '<div class="progress__fill"></div>';
    bar.setAttribute('aria-hidden', 'true');
    d.body.appendChild(bar);
    const fill = bar.firstElementChild;
    onScroll(() => {
      const h = d.documentElement.scrollHeight - w.innerHeight;
      fill.style.width = (h > 0 ? Math.min(100, (w.scrollY / h) * 100) : 0) + '%';
    });
  }

  /* ---------- 2 · split-text headline reveal ---------- */
  function split(root) {
    (root || d).querySelectorAll('[data-split]:not([data-split-done])').forEach(el => {
      el.setAttribute('data-split-done', '1');
      el.classList.add('sp');
      const walk = node => {
        Array.prototype.slice.call(node.childNodes).forEach(n => {
          if (n.nodeType === 3) {
            const frag = d.createDocumentFragment();
            const parts = n.textContent.split(/(\s+)/);
            parts.forEach(p => {
              if (!p) return;
              if (/^\s+$/.test(p)) { frag.appendChild(d.createTextNode(p)); return; }
              const span = d.createElement('span');
              span.className = 'sp-w';
              const i = d.createElement('i');
              i.textContent = p;
              span.appendChild(i);
              frag.appendChild(span);
            });
            node.replaceChild(frag, n);
          } else if (n.nodeType === 1 && !n.classList.contains('sp-w')) {
            walk(n);
          }
        });
      };
      walk(el);
      el.querySelectorAll('.sp-w > i').forEach((i, idx) => i.style.setProperty('--i', idx));
    });
  }

  /* ---------- 3 · reveal observer (split + stagger + .rv) ---------- */
  function reveal(root) {
    const sel = '.rv:not(.in), .sp:not(.in), [data-stagger]:not(.in)';
    const nodes = (root || d).querySelectorAll(sel);
    if (!('IntersectionObserver' in w)) {
      nodes.forEach(n => n.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.05 });
    nodes.forEach(n => io.observe(n));
  }

  /* ---------- 4 · parallax ---------- */
  function parallax() {
    if (reduced) return;
    const els = Array.prototype.slice.call(d.querySelectorAll('[data-parallax]'));
    if (!els.length) return;
    onScroll(() => {
      const vh = w.innerHeight;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const mid = r.top + r.height / 2 - vh / 2;
        el.style.transform = 'translate3d(0,' + (-mid * speed).toFixed(2) + 'px,0)';
      });
    });
  }

  /* ---------- 5 · spotlight ---------- */
  function spotlight() {
    if (!fine || reduced) return;
    d.addEventListener('pointermove', e => {
      const card = e.target.closest && e.target.closest('[data-spot]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    }, { passive: true });
  }

  /* ---------- 6 · 3D tilt ---------- */
  function tilt() {
    if (!fine || reduced) return;
    d.querySelectorAll('[data-tilt]').forEach(el => {
      if (el.dataset.tiltBound) return;
      el.dataset.tiltBound = '1';
      const max = parseFloat(el.dataset.tilt) || 7;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        el.classList.add('is-tilting');
        el.style.transform =
          'perspective(900px) rotateY(' + (px * max).toFixed(2) + 'deg) rotateX(' + (-py * max).toFixed(2) + 'deg)';
      });
      el.addEventListener('pointerleave', () => {
        el.classList.remove('is-tilting');
        el.style.transform = '';
      });
    });
  }

  /* ---------- 7 · magnetic buttons ---------- */
  function magnetic() {
    if (!fine || reduced) return;
    d.querySelectorAll('[data-magnet]').forEach(el => {
      if (el.dataset.magBound) return;
      el.dataset.magBound = '1';
      const pull = parseFloat(el.dataset.magnet) || 0.22;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * pull;
        const y = (e.clientY - (r.top + r.height / 2)) * pull;
        el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- 8 · scroll-linked story ---------- */
  function story() {
    const host = d.querySelector('[data-story]');
    if (!host) return;
    let cur = -1;
    /* elements are re-queried every tick so a language re-render cannot orphan them */
    onScroll(() => {
      const steps = host.querySelectorAll('.story__step');
      if (!steps.length) return;
      const shots = host.querySelectorAll('.story__vis img');
      const numEl = host.querySelector('[data-story-num]');
      const mid = w.innerHeight * 0.45;
      let best = 0, bestD = Infinity;
      steps.forEach((s, i) => {
        const r = s.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestD) { bestD = dist; best = i; }
      });
      if (best === cur && steps[best].classList.contains('is-on')) return;
      cur = best;
      steps.forEach((s, n) => s.classList.toggle('is-on', n === best));
      shots.forEach((s, n) => s.classList.toggle('is-on', n === best));
      if (numEl) numEl.textContent = String(best + 1).padStart(2, '0') + ' / ' + String(steps.length).padStart(2, '0');
    });
  }

  /* ---------- 9 · marquee duplication guard ---------- */
  function marquee() {
    d.querySelectorAll('.mq__track, .lstrip__track').forEach(t => {
      if (t.dataset.mqReady) return;
      t.dataset.mqReady = '1';
      /* content is already duplicated by the renderer; pause when offscreen */
      if (!('IntersectionObserver' in w)) return;
      const io = new IntersectionObserver(es => es.forEach(e => {
        t.style.animationPlayState = e.isIntersecting ? 'running' : 'paused';
      }), { threshold: 0 });
      io.observe(t);
    });
  }

  /* ---------- 10 · counters ---------- */
  function counters(root) {
    (root || d).querySelectorAll('[data-count]:not([data-counted])').forEach(el => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.dec || '0', 10);
      const suffix = el.dataset.suffix || '';
      const lang = (w.I18n && w.I18n.lang === 'ar') ? 'ar-EG' : 'en-US';
      const done = () => {
        el.textContent = (dec ? target.toFixed(dec) : Math.round(target).toLocaleString(lang)) + suffix;
      };
      if (reduced) { el.dataset.counted = '1'; done(); return; }
      if (!('IntersectionObserver' in w)) { el.dataset.counted = '1'; done(); return; }
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          el.dataset.counted = '1'; io.disconnect();
          const dur = 1250, t0 = performance.now();
          (function tick(now) {
            const p = Math.min(1, (now - t0) / dur);
            const v = target * (1 - Math.pow(1 - p, 3));
            el.textContent = (dec ? v.toFixed(dec) : Math.round(v).toLocaleString(lang)) + suffix;
            if (p < 1) requestAnimationFrame(tick); else done();
          })(t0);
        });
      }, { threshold: .35 });
      io.observe(el);
    });
  }

  /* ---------- 11 · anchor smooth scroll with header offset ---------- */
  function anchors() {
    d.addEventListener('click', e => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = d.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = parseFloat(getComputedStyle(d.documentElement).getPropertyValue('--nav-h')) || 68;
      const y = target.getBoundingClientRect().top + w.scrollY - navH - 20;
      w.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    });
  }

  const Motion = {
    reduced: reduced,
    onScroll: onScroll,
    refresh(root) {
      split(root);
      reveal(root);
      tilt();
      magnetic();
      marquee();
      counters(root);
    },
    init() {
      d.body.classList.add('page-in');
      progress();
      split(); reveal(); parallax(); spotlight(); tilt(); magnetic(); story(); marquee(); counters(); anchors();
    }
  };

  w.Motion = Motion;
})(window, document);
