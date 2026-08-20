/* Course catalog — search, category chips, level, sort */
(function (w, d) {
  'use strict';

  const filter = { q: '', cat: 'all', level: 'all', sort: 'popular' };

  function haystack(c, T) {
    return [
      T.pick(c.title), T.pick(c.tagline), T.pick(c.desc), T.pick(c.catName),
      T.pick(w.LMS.instructor(c.instructor).name)
    ].concat(c.skills.map(s => T.pick(s))).join(' ').toLowerCase();
  }

  function results() {
    const T = w.I18n;
    let list = w.LMS.COURSES.slice();
    if (filter.cat !== 'all') list = list.filter(c => c.cat === filter.cat);
    if (filter.level !== 'all') list = list.filter(c => c.level === filter.level);
    if (filter.q) {
      const q = filter.q.toLowerCase().trim();
      list = list.filter(c => haystack(c, T).indexOf(q) > -1);
    }
    const s = filter.sort;
    list.sort((a, b) =>
      s === 'rating'    ? b.rating - a.rating :
      s === 'priceUp'   ? a.price - b.price :
      s === 'priceDown' ? b.price - a.price :
      s === 'new'       ? String(b.start).localeCompare(String(a.start)) :
                          b.students - a.students
    );
    return list;
  }

  function paint() {
    const T = w.I18n, A = w.App;
    const list = results();
    const out = d.querySelector('[data-results]');
    const empty = d.querySelector('[data-empty]');

    out.innerHTML = list.map(c => A.courseCard(c)).join('');
    empty.hidden = list.length > 0;
    d.querySelector('[data-count-out]').textContent = T.num(list.length) + ' ' + T.t('cat.count');
    A.reveal(out);
  }

  function chips() {
    const T = w.I18n;
    const host = d.querySelector('[data-cats]');
    const all = [{ id: 'all', name: { en: T.t('cat.all'), ar: T.t('cat.all') } }].concat(w.LMS.CATS);
    host.innerHTML = all.map(c =>
      '<button class="chip' + (filter.cat === c.id ? ' is-on' : '') + '" data-cat="' + c.id + '">' +
      w.App.esc(T.pick(c.name)) + '</button>').join('');
    host.querySelectorAll('[data-cat]').forEach(b => b.addEventListener('click', () => {
      filter.cat = b.dataset.cat; chips(); paint();
    }));
  }

  function selects() {
    const T = w.I18n;
    const lv = d.querySelector('[data-level]');
    lv.innerHTML =
      '<option value="all">' + T.t('cat.level') + ': ' + T.t('cat.all') + '</option>' +
      ['beginner', 'intermediate', 'advanced'].map(l =>
        '<option value="' + l + '">' + T.t('lvl.' + l) + '</option>').join('');
    lv.value = filter.level;

    const so = d.querySelector('[data-sort]');
    so.innerHTML = [
      ['popular', 'cat.sortPopular'], ['new', 'cat.sortNew'], ['rating', 'cat.sortRating'],
      ['priceUp', 'cat.sortPriceUp'], ['priceDown', 'cat.sortPriceDown']
    ].map(p => '<option value="' + p[0] + '">' + T.t(p[1]) + '</option>').join('');
    so.value = filter.sort;
  }

  function bind() {
    const q = d.querySelector('[data-search]');
    if (!q.dataset.bound) {
      q.dataset.bound = '1';
      let t;
      q.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => { filter.q = q.value; paint(); }, 160);
      });
    }
    d.querySelector('[data-level]').onchange = e => { filter.level = e.target.value; paint(); };
    d.querySelector('[data-sort]').onchange  = e => { filter.sort  = e.target.value; paint(); };
    d.querySelector('[data-reset]').onclick = () => {
      filter.q = ''; filter.cat = 'all'; filter.level = 'all';
      d.querySelector('[data-search]').value = '';
      selects(); chips(); paint();
    };
  }

  function render() {
    /* deep link: courses.html?cat=motion */
    const c = w.App.param('cat');
    if (c && w.LMS.CATS.some(x => x.id === c)) filter.cat = c;
    selects(); chips(); bind(); paint();
  }

  w.App.init(render);
})(window, document);
