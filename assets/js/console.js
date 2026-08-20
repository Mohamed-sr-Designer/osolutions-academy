/* ==========================================================================
   OSOLUTIONS ACADEMY — business console
   Executive / finance / marketing / product views.
   Figures are a modelled sample set for the build, flagged in the UI.
   ========================================================================== */
(function (w, d) {
  'use strict';

  const MONTHS = {
    en: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    ar: ['سبت', 'أكت', 'نوف', 'ديس', 'ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس']
  };

  /* ---------------- modelled dataset ---------------- */
  const M = {
    revenue:  [186, 212, 241, 198, 264, 289, 318, 296, 344, 381, 402, 438].map(x => x * 1000),
    target:   [200, 215, 230, 245, 260, 275, 290, 305, 320, 335, 350, 365].map(x => x * 1000),
    cash:     [310, 356, 402, 388, 441, 498, 556, 572, 641, 712, 780, 861].map(x => x * 1000),
    burn:     [148, 152, 161, 158, 166, 172, 181, 186, 190, 196, 201, 207].map(x => x * 1000),
    enrol:    [42, 48, 55, 44, 61, 66, 74, 68, 79, 88, 93, 101],

    mix: [
      { k: { en: 'Live cohorts',    ar: 'دفعات مباشرة' }, v: 58, c: '#F76302' },
      { k: { en: 'Self paced',      ar: 'حسب الوقت' },   v: 22, c: '#11253E' },
      { k: { en: 'Team invoices',   ar: 'فواتير الفرق' }, v: 15, c: '#0E7C93' },
      { k: { en: 'Mentor sessions', ar: 'جلسات إرشاد' },  v: 5,  c: '#B57608' }
    ],

    sources: [
      { k: { en: 'Organic search', ar: 'بحث عضوي' },  v: 34, c: '#F76302' },
      { k: { en: 'Instagram',      ar: 'إنستجرام' },   v: 26, c: '#11253E' },
      { k: { en: 'Referral & alumni', ar: 'إحالات وخريجين' }, v: 18, c: '#12855C' },
      { k: { en: 'LinkedIn',       ar: 'لينكدإن' },     v: 13, c: '#0E7C93' },
      { k: { en: 'Direct',         ar: 'مباشر' },       v: 9,  c: '#B57608' }
    ],

    funnel: [
      { k: { en: 'Sessions',        ar: 'زيارات' },        v: 48200 },
      { k: { en: 'Course page view', ar: 'مشاهدة كورس' },   v: 16940 },
      { k: { en: 'Lead captured',   ar: 'ليد متسجّل' },     v: 4310 },
      { k: { en: 'Checkout started', ar: 'بدء الدفع' },     v: 1180 },
      { k: { en: 'Enrolled',        ar: 'تسجيل مكتمل' },    v: 486 }
    ],

    channels: [
      { n: 'Meta · retargeting',  spend: 42000,  leads: 890, enrol: 118, rev: 512000 },
      { n: 'Google · brand',      spend: 12000,  leads: 410, enrol: 96,  rev: 438000 },
      { n: 'Google · non-brand',  spend: 58000,  leads: 720, enrol: 74,  rev: 331000 },
      { n: 'Instagram · organic', spend: 0,      leads: 640, enrol: 88,  rev: 396000 },
      { n: 'Alumni referral',     spend: 18000,  leads: 310, enrol: 71,  rev: 348000 },
      { n: 'LinkedIn · B2B',      spend: 34000,  leads: 240, enrol: 39,  rev: 268000 }
    ],

    pl: [
      { l: { en: 'Course revenue',      ar: 'إيراد الكورسات' }, v: 3569000, t: 'rev' },
      { l: { en: 'Team invoices',       ar: 'فواتير الفرق' },   v: 642000,  t: 'rev', sub: true },
      { l: { en: 'Refunds',             ar: 'مبالغ مرتجعة' },   v: -96000,  t: 'rev', sub: true },
      { l: { en: 'Net revenue',         ar: 'صافي الإيراد' },   v: 4115000, t: 'sum' },
      { l: { en: 'Instructor fees',     ar: 'أتعاب المدربين' }, v: -1234000, t: 'cost' },
      { l: { en: 'Production & editing', ar: 'إنتاج ومونتاج' }, v: -486000,  t: 'cost' },
      { l: { en: 'Platform & hosting',  ar: 'المنصة والاستضافة' }, v: -142000, t: 'cost' },
      { l: { en: 'Gross profit',        ar: 'إجمالي الربح' },   v: 2253000, t: 'sum' },
      { l: { en: 'Paid acquisition',    ar: 'تسويق مدفوع' },    v: -724000, t: 'cost' },
      { l: { en: 'Salaries & ops',      ar: 'رواتب وتشغيل' },   v: -968000, t: 'cost' },
      { l: { en: 'Operating profit',    ar: 'الربح التشغيلي' }, v: 561000,  t: 'sum' }
    ],

    ue: [
      { l: { en: 'Blended CAC', ar: 'تكلفة اكتساب العميل' }, v: '1,490 EGP', n: { en: 'Paid spend divided by all enrollments', ar: 'الإنفاق المدفوع على كل التسجيلات' } },
      { l: { en: 'Average order value', ar: 'متوسط قيمة الطلب' }, v: '8,470 EGP', n: { en: 'Across all plans and courses', ar: 'عبر كل الباقات والكورسات' } },
      { l: { en: 'Lifetime value', ar: 'القيمة مدى الحياة' }, v: '14,200 EGP', n: { en: '1.7 courses per learner on average', ar: '١٫٧ كورس لكل متعلّم في المتوسط' } },
      { l: { en: 'LTV to CAC', ar: 'نسبة القيمة للتكلفة' }, v: '9.5x', n: { en: 'Healthy above 3x', ar: 'صحية فوق ٣ أضعاف' } },
      { l: { en: 'Gross margin', ar: 'هامش الربح الإجمالي' }, v: '54.8%', n: { en: 'After instructor and production cost', ar: 'بعد تكلفة المدرب والإنتاج' } },
      { l: { en: 'CAC payback', ar: 'استرداد تكلفة الاكتساب' }, v: '< 1 cohort', n: { en: 'Recovered on the first enrollment', ar: 'بيترد من أول تسجيل' } }
    ],

    watch: [
      { s: 'hi', t: { en: 'Week four completion is the whole funnel', ar: 'إكمال الأسبوع الرابع هو الفانل كله' },
        p: { en: 'Completion drops 23 points at the auto layout lesson in the flagship course. Learners who stall there rarely return, and they are the same learners who do not buy a second course.', ar: 'الإكمال بينزل ٢٣ نقطة عند درس الأوتو لاي أوت في الكورس الرئيسي. اللي بيقف هناك نادراً بيرجع، وهما نفس الناس اللي مبيشتروش كورس تاني.' }, o: 'Product' },
      { s: 'md', t: { en: 'Non brand search is buying the wrong learner', ar: 'البحث غير المرتبط بالبراند بيجيب المتعلّم الغلط' },
        p: { en: 'Google non-brand spends the most and converts the least. Either the landing intent is wrong or the keyword set is too broad for a paid cohort.', ar: 'جوجل غير البراند بينفق الأكتر وبيحوّل الأقل. يا إما نية اللاندنج غلط يا إما الكلمات واسعة أوي لدفعة مدفوعة.' }, o: 'Marketing' },
      { s: 'md', t: { en: 'Two instructors carry 62% of revenue', ar: 'مدربين اتنين بيحملوا ٦٢٪ من الإيراد' },
        p: { en: 'Concentration risk. A third senior instructor should be brought into the flagship course as co-teacher this quarter.', ar: 'خطر تركّز. لازم مدرب سينيور تالت يدخل الكورس الرئيسي كمدرب مشارك الربع ده.' }, o: 'Executive' },
      { s: 'lo', t: { en: 'Alumni referral is the cheapest channel', ar: 'إحالات الخريجين أرخص قناة' },
        p: { en: 'Lowest cost per enrollment and the highest completion rate. Worth a formal referral credit before it saturates.', ar: 'أقل تكلفة لكل تسجيل وأعلى نسبة إكمال. تستاهل نظام إحالة رسمي قبل ما تتشبع.' }, o: 'Growth' }
    ],

    ux: [
      { s: 'hi', t: { en: 'Time to first lesson is 3 days', ar: 'الوقت لأول درس ٣ أيام' },
        p: { en: 'Learners who start within 24 hours finish at more than twice the rate. The post-checkout screen should open the classroom, not the dashboard.', ar: 'اللي بيبدأ خلال ٢٤ ساعة بيخلّص بضعف النسبة تقريباً. شاشة ما بعد الدفع لازم تفتح الفصل مش الداشبورد.' }, o: 'UX' },
      { s: 'md', t: { en: 'Mobile carries 61% of sessions', ar: 'الموبايل بياخد ٦١٪ من الزيارات' },
        p: { en: 'But only 38% of enrollments. The plan comparison is the drop point on small screens and needs a single-column rewrite.', ar: 'بس ٣٨٪ بس من التسجيلات. مقارنة الباقات هي نقطة الفقد على الشاشات الصغيرة ومحتاجة تتعاد بعمود واحد.' }, o: 'UX' },
      { s: 'lo', t: { en: 'Arabic sessions convert 1.4x better', ar: 'الجلسات العربية بتحوّل ١٫٤ ضعف' },
        p: { en: 'Visitors who switch the interface to Arabic enrol at a higher rate. Arabic should be the default for Egyptian and Gulf traffic.', ar: 'الزوار اللي بيحوّلوا الواجهة للعربي بيسجّلوا بنسبة أعلى. العربي المفروض يكون الافتراضي للترافيك المصري والخليجي.' }, o: 'Growth' }
    ]
  };

  /* ---------------- tiny chart helpers ---------------- */
  function lineChart(series, opts) {
    const o = Object.assign({ w: 640, h: 220, pad: 28, labels: [] }, opts || {});
    const all = series.reduce((a, s) => a.concat(s.data), []);
    const max = Math.max.apply(null, all) * 1.08;
    const min = 0;
    const iw = o.w - o.pad * 2, ih = o.h - o.pad * 2;
    const x = i => o.pad + (i / (series[0].data.length - 1)) * iw;
    const y = v => o.pad + ih - ((v - min) / (max - min)) * ih;

    let svg = '<svg class="chart" viewBox="0 0 ' + o.w + ' ' + o.h + '" preserveAspectRatio="none" role="img">' +
      '<defs><linearGradient id="gOrange" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#F76302" stop-opacity=".26"/>' +
      '<stop offset="100%" stop-color="#F76302" stop-opacity="0"/></linearGradient></defs>';

    for (let g = 0; g <= 4; g++) {
      const gy = o.pad + (ih / 4) * g;
      svg += '<line class="grid-l" x1="' + o.pad + '" y1="' + gy + '" x2="' + (o.w - o.pad) + '" y2="' + gy + '"/>';
    }

    series.forEach((s, si) => {
      const pts = s.data.map((v, i) => x(i).toFixed(1) + ',' + y(v).toFixed(1));
      if (s.area) {
        svg += '<path class="ar" d="M' + pts.join(' L') + ' L' + x(s.data.length - 1).toFixed(1) + ',' +
          (o.pad + ih) + ' L' + o.pad + ',' + (o.pad + ih) + ' Z"/>';
      }
      svg += '<path class="' + (si === 0 ? 'ln' : 'ln2') + '" d="M' + pts.join(' L') + '"/>';
      if (si === 0) {
        const li = s.data.length - 1;
        svg += '<circle class="dot" cx="' + x(li).toFixed(1) + '" cy="' + y(s.data[li]).toFixed(1) + '" r="4"/>';
      }
    });

    o.labels.forEach((lb, i) => {
      if (i % 2) return;
      svg += '<text class="axis-t" x="' + x(i).toFixed(1) + '" y="' + (o.h - 6) + '" text-anchor="middle">' + lb + '</text>';
    });
    return svg + '</svg>';
  }

  function barChart(data, labels, opts) {
    const o = Object.assign({ w: 640, h: 200, pad: 26, dip: -1 }, opts || {});
    const max = Math.max.apply(null, data) * 1.08;
    const iw = o.w - o.pad * 2, ih = o.h - o.pad * 2;
    const bw = iw / data.length * 0.62;
    let svg = '<svg class="chart" viewBox="0 0 ' + o.w + ' ' + o.h + '" preserveAspectRatio="none" role="img">';
    for (let g = 0; g <= 3; g++) {
      const gy = o.pad + (ih / 3) * g;
      svg += '<line class="grid-l" x1="' + o.pad + '" y1="' + gy + '" x2="' + (o.w - o.pad) + '" y2="' + gy + '"/>';
    }
    data.forEach((v, i) => {
      const bh = (v / max) * ih;
      const bx = o.pad + (iw / data.length) * i + (iw / data.length - bw) / 2;
      const by = o.pad + ih - bh;
      svg += '<rect class="' + (i === o.dip ? 'bar-r' : 'bar-g') + '" x="' + bx.toFixed(1) + '" y="' + by.toFixed(1) +
        '" width="' + bw.toFixed(1) + '" height="' + Math.max(2, bh).toFixed(1) + '" rx="4"/>';
      svg += '<text class="axis-t" x="' + (bx + bw / 2).toFixed(1) + '" y="' + (o.h - 6) + '" text-anchor="middle">' + labels[i] + '</text>';
    });
    return svg + '</svg>';
  }

  function donut(items, size) {
    const s = size || 158, r = s / 2 - 14, cx = s / 2, cy = s / 2, C = 2 * Math.PI * r;
    let off = 0;
    let svg = '<svg width="' + s + '" height="' + s + '" viewBox="0 0 ' + s + ' ' + s + '" role="img">' +
      '<g transform="rotate(-90 ' + cx + ' ' + cy + ')">';
    items.forEach(it => {
      const len = (it.v / 100) * C;
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + it.c +
        '" stroke-width="16" stroke-dasharray="' + len.toFixed(2) + ' ' + (C - len).toFixed(2) +
        '" stroke-dashoffset="' + (-off).toFixed(2) + '" stroke-linecap="butt"/>';
      off += len;
    });
    return svg + '</g></svg>';
  }

  function spark(data, up) {
    const wd = 120, ht = 34;
    const max = Math.max.apply(null, data), min = Math.min.apply(null, data);
    const pts = data.map((v, i) =>
      ((i / (data.length - 1)) * wd).toFixed(1) + ',' + (ht - ((v - min) / ((max - min) || 1)) * ht).toFixed(1));
    return '<svg viewBox="0 0 ' + wd + ' ' + ht + '" preserveAspectRatio="none">' +
      '<path d="M' + pts.join(' L') + '" fill="none" stroke="' + (up ? 'var(--green)' : 'var(--red)') +
      '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* ---------------- copy ---------------- */
  const C = {
    demo: { en: 'Sample dataset', ar: 'بيانات نموذجية' },
    nav: [
      { id: 'exec', i: 'trophy', t: { en: 'Executive', ar: 'تنفيذي' } },
      { id: 'fin',  i: 'money',  t: { en: 'Finance',   ar: 'مالي' } },
      { id: 'mkt',  i: 'trending', t: { en: 'Marketing', ar: 'تسويق' } },
      { id: 'prod', i: 'chart',  t: { en: 'Product & UX', ar: 'المنتج والتجربة' } }
    ],
    sideNote: {
      t: { en: 'How to read this', ar: 'إزاي تقرا ده' },
      p: { en: 'Every figure here is a modelled sample built to exercise the interface. Wire the same shapes to your billing and analytics sources and nothing in the layout changes.', ar: 'كل رقم هنا نموذج مبني عشان يشغّل الواجهة. اربط نفس الأشكال بمصادر الفوترة والتحليلات عندك ومفيش حاجة في اللاي أوت هتتغير.' }
    },

    x: { h: { en: 'Executive overview', ar: 'نظرة تنفيذية' },
         p: { en: 'The four numbers the academy is run against, and the things most likely to break them.', ar: 'الأربع أرقام اللي الأكاديمية بتتدار عليها، والحاجات اللي ممكن تكسرها.' },
         revH: { en: 'Revenue against target', ar: 'الإيراد مقابل الهدف' },
         revSub: { en: 'Last 12 months · EGP', ar: 'آخر ١٢ شهر · جنيه' },
         mixH: { en: 'Revenue mix', ar: 'توزيع الإيراد' },
         watchH: { en: 'What needs a decision', ar: 'اللي محتاج قرار' },
         watchSub: { en: 'Ranked by revenue at risk', ar: 'مرتّب حسب الإيراد المعرّض للخطر' } },

    f: { h: { en: 'Finance', ar: 'المالية' },
         p: { en: 'Twelve month profit and loss, unit economics and the cash position.', ar: 'أرباح وخسائر ١٢ شهر، اقتصاديات الوحدة، وموقف الكاش.' },
         plH: { en: 'Profit and loss', ar: 'الأرباح والخسائر' },
         plSub: { en: 'Trailing 12 months · EGP', ar: 'آخر ١٢ شهر · جنيه' },
         ueH: { en: 'Unit economics', ar: 'اقتصاديات الوحدة' },
         ueNote: { en: 'The academy funds itself from the first enrollment. The risk is not acquisition cost, it is completion: a learner who does not finish does not buy a second course, and the second course is where the margin is.', ar: 'الأكاديمية بتموّل نفسها من أول تسجيل. الخطر مش في تكلفة الاكتساب، الخطر في الإكمال: اللي مبيخلّصش مبيشتريش كورس تاني، والكورس التاني هو مكان الهامش.' },
         cashH: { en: 'Cash and burn', ar: 'الكاش والحرق' },
         cashSub: { en: 'Closing balance vs monthly cost', ar: 'الرصيد الختامي مقابل التكلفة الشهرية' } },

    m: { h: { en: 'Marketing', ar: 'التسويق' },
         p: { en: 'Where learners come from, where they fall out, and what each channel actually returns.', ar: 'المتعلّمين جايين منين، وبيقعوا فين، وكل قناة بترجّع إيه فعلاً.' },
         fnlH: { en: 'Acquisition funnel', ar: 'قمع الاكتساب' },
         fnlSub: { en: 'Last 90 days', ar: 'آخر ٩٠ يوم' },
         srcH: { en: 'Traffic sources', ar: 'مصادر الزيارات' },
         chH: { en: 'Channel performance', ar: 'أداء القنوات' },
         chSub: { en: 'Spend, enrollments and return', ar: 'الإنفاق والتسجيلات والعائد' } },

    p: { h: { en: 'Product and UX', ar: 'المنتج والتجربة' },
         p: { en: 'Course health, where learners stall, and the interface problems behind it.', ar: 'حالة الكورسات، المتعلّمين بيقفوا فين، ومشاكل الواجهة ورا ده.' },
         hlthH: { en: 'Course health', ar: 'حالة الكورسات' },
         hlthSub: { en: 'Enrollment, completion and rating', ar: 'التسجيل والإكمال والتقييم' },
         dropH: { en: 'Completion by module', ar: 'الإكمال حسب الموديول' },
         dropNote: { en: 'Week four is the cliff across every long course. It is always the densest tooling lesson, and it is always the one learners try to watch once. Splitting it into two shorter parts recovered 9 points on the last cohort.', ar: 'الأسبوع الرابع هو الهاوية في كل كورس طويل. دايماً بيكون أكتف درس أدوات، ودايماً هو اللي المتعلّمين بيحاولوا يتفرجوا عليه مرة واحدة. تقسيمه لجزئين أقصر رجّع ٩ نقاط في آخر دفعة.' },
         uxH: { en: 'Experience findings', ar: 'ملاحظات التجربة' } }
  };

  let pane = 'exec';

  function setPane(id) {
    pane = id;
    d.querySelectorAll('[data-pane]').forEach(p => p.classList.toggle('is-on', p.dataset.pane === id));
    d.querySelectorAll('[data-nav] button').forEach(b => b.classList.toggle('is-on', b.dataset.go === id));
    history.replaceState(null, '', '#' + id);
    w.scrollTo({ top: 0, behavior: 'smooth' });
    if (w.Motion) w.Motion.refresh();
  }

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS;
    const set = (s, v) => { const e = d.querySelector(s); if (e) e.textContent = v; };
    const html = (s, v) => { const e = d.querySelector(s); if (e) e.innerHTML = v; };
    const money = n => T.num(Math.round(n)) + ' ' + T.t('g.egp');
    const short = n => (Math.abs(n) >= 1e6 ? (n / 1e6).toFixed(2) + 'M' : Math.round(n / 1e3) + 'k');
    const mo = MONTHS[T.lang] || MONTHS.en;

    d.querySelectorAll('[data-demo-chip]').forEach(e => {
      e.innerHTML = A.icon('bolt') + A.esc(T.pick(C.demo));
    });

    /* sidebar */
    html('[data-who]',
      '<span class="av-ini av--md">OA</span>' +
      '<span><b>' + A.esc(T.pick({ en: 'Osolutions Academy', ar: 'أكاديمية أوسوليوشنز' })) + '</b>' +
      '<small>' + A.esc(T.pick({ en: 'Owner view', ar: 'عرض المالك' })) + '</small></span>');
    html('[data-nav]', C.nav.map(n =>
      '<button data-go="' + n.id + '" class="' + (n.id === pane ? 'is-on' : '') + '">' +
      A.icon(n.i) + '<span>' + A.esc(T.pick(n.t)) + '</span></button>').join(''));
    d.querySelectorAll('[data-nav] button').forEach(b => b.onclick = () => setPane(b.dataset.go));
    html('[data-side-note]',
      '<h4>' + A.esc(T.pick(C.sideNote.t)) + '</h4>' +
      '<p style="font-size:.82rem;line-height:1.6">' + A.esc(T.pick(C.sideNote.p)) + '</p>');

    const kpi = (lbl, val, delta, dir, spk, note, ico) =>
      '<div class="card mkpi rv" data-spot>' +
        '<span class="mkpi__lbl">' + A.icon(ico) + A.esc(lbl) + '</span>' +
        '<div class="mkpi__row"><span class="mkpi__val">' + val + '</span>' +
        '<span class="mkpi__d ' + dir + '">' + A.icon(dir === 'down' ? 'chev' : 'trending') + delta + '</span></div>' +
        (spk ? '<div class="mkpi__spark">' + spk + '</div>' : '') +
        (note ? '<span class="mkpi__note">' + A.esc(note) + '</span>' : '') +
      '</div>';

    /* ---------- executive ---------- */
    set('[data-x-h]', T.pick(C.x.h));
    set('[data-x-p]', T.pick(C.x.p));
    html('[data-x-kpis]', [
      kpi(T.pick({ en: 'Net revenue, 12 mo', ar: 'صافي الإيراد ١٢ شهر' }), short(4115000) + ' EGP', '+21.4%', 'up', spark(M.revenue, true), T.pick({ en: 'Above plan for four months', ar: 'فوق الخطة من أربع شهور' }), 'money'),
      kpi(T.pick({ en: 'Active learners', ar: 'متعلّمين نشطين' }), T.num(1842), '+12.8%', 'up', spark(M.enrol, true), T.pick({ en: 'Enrolled in a live cohort', ar: 'مسجّلين في دفعة مباشرة' }), 'users'),
      kpi(T.pick({ en: 'Completion rate', ar: 'نسبة الإكمال' }), '71%', '−4 pts', 'down', spark([78, 77, 75, 76, 74, 73, 72, 71, 71, 72, 71, 71], false), T.pick({ en: 'Week four is the cause', ar: 'الأسبوع الرابع هو السبب' }), 'target'),
      kpi(T.pick({ en: 'Learner NPS', ar: 'رضا المتعلّمين' }), '+62', '+6', 'up', spark([48, 51, 53, 52, 56, 58, 57, 59, 60, 61, 61, 62], true), T.pick({ en: 'Measured at course end', ar: 'بيتقاس في نهاية الكورس' }), 'star')
    ].join(''));

    set('[data-x-revH]', T.pick(C.x.revH));
    set('[data-x-revSub]', T.pick(C.x.revSub));
    html('[data-x-revChart]', lineChart(
      [{ data: M.revenue, area: true }, { data: M.target }],
      { labels: mo, h: 230 }));
    html('[data-x-revLegend]',
      '<span><i class="a"></i>' + A.esc(T.pick({ en: 'Actual revenue', ar: 'الإيراد الفعلي' })) + '</span>' +
      '<span><i class="b"></i>' + A.esc(T.pick({ en: 'Target', ar: 'الهدف' })) + '</span>');

    set('[data-x-mixH]', T.pick(C.x.mixH));
    html('[data-x-mix]', donut(M.mix) +
      '<div class="donut__key">' + M.mix.map(m =>
        '<div><i style="background:' + m.c + '"></i>' + A.esc(T.pick(m.k)) + '<b>' + m.v + '%</b></div>').join('') + '</div>');

    set('[data-x-watchH]', T.pick(C.x.watchH));
    set('[data-x-watchSub]', T.pick(C.x.watchSub));
    html('[data-x-watch]', M.watch.map(x =>
      '<div class="watch__i ' + x.s + '"><span class="dot"></span>' +
      '<div><b>' + A.esc(T.pick(x.t)) + '</b><p>' + A.esc(T.pick(x.p)) + '</p></div>' +
      '<span class="own">' + A.esc(x.o) + '</span></div>').join(''));

    /* ---------- finance ---------- */
    set('[data-f-h]', T.pick(C.f.h));
    set('[data-f-p]', T.pick(C.f.p));
    html('[data-f-kpis]', [
      kpi(T.pick({ en: 'Gross margin', ar: 'هامش الربح الإجمالي' }), '54.8%', '+2.1 pts', 'up', null, T.pick({ en: 'After instructor and production', ar: 'بعد المدرب والإنتاج' }), 'chart'),
      kpi(T.pick({ en: 'Operating profit', ar: 'الربح التشغيلي' }), short(561000) + ' EGP', '+34%', 'up', null, T.pick({ en: '13.6% operating margin', ar: 'هامش تشغيلي ١٣٫٦٪' }), 'money'),
      kpi(T.pick({ en: 'Cash on hand', ar: 'الكاش المتاح' }), short(861000) + ' EGP', '+10.4%', 'up', spark(M.cash, true), T.pick({ en: 'Roughly 4.2 months of cost', ar: 'حوالي ٤٫٢ شهر تكاليف' }), 'money'),
      kpi(T.pick({ en: 'Refund rate', ar: 'نسبة الاسترجاع' }), '2.3%', '−0.4 pts', 'up', null, T.pick({ en: 'Refunds close before session three', ar: 'الاسترجاع بيتقفل قبل الجلسة التالتة' }), 'refresh')
    ].join(''));

    set('[data-f-plH]', T.pick(C.f.plH));
    set('[data-f-plSub]', T.pick(C.f.plSub));
    html('[data-f-pl]',
      '<thead><tr><th>' + A.esc(T.pick({ en: 'Line', ar: 'البند' })) + '</th>' +
      '<th>' + A.esc(T.pick({ en: 'Amount', ar: 'المبلغ' })) + '</th>' +
      '<th>' + A.esc(T.pick({ en: '% of revenue', ar: '٪ من الإيراد' })) + '</th></tr></thead><tbody>' +
      M.pl.map(r =>
        '<tr class="' + (r.t === 'sum' ? 'sum' : '') + (r.sub ? ' sub' : '') + '">' +
        '<td>' + A.esc(T.pick(r.l)) + '</td>' +
        '<td class="' + (r.v < 0 ? 'neg' : 'pos') + '">' + (r.v < 0 ? '−' : '') + money(Math.abs(r.v)) + '</td>' +
        '<td>' + (Math.abs(r.v) / 4115000 * 100).toFixed(1) + '%</td></tr>').join('') +
      '</tbody>');

    set('[data-f-ueH]', T.pick(C.f.ueH));
    html('[data-f-ue]', M.ue.map(u =>
      '<div class="ue__i"><small>' + A.esc(T.pick(u.l)) + '</small><b>' + A.esc(u.v) + '</b>' +
      '<span>' + A.esc(T.pick(u.n)) + '</span></div>').join(''));
    html('[data-f-ueNote]', A.icon('bolt') + '<span>' + A.esc(T.pick(C.f.ueNote)) + '</span>');

    set('[data-f-cashH]', T.pick(C.f.cashH));
    set('[data-f-cashSub]', T.pick(C.f.cashSub));
    html('[data-f-cashChart]', lineChart(
      [{ data: M.cash, area: true }, { data: M.burn }], { labels: mo, h: 220 }));
    html('[data-f-cashLegend]',
      '<span><i class="a"></i>' + A.esc(T.pick({ en: 'Cash balance', ar: 'رصيد الكاش' })) + '</span>' +
      '<span><i class="b"></i>' + A.esc(T.pick({ en: 'Monthly cost', ar: 'التكلفة الشهرية' })) + '</span>');

    /* ---------- marketing ---------- */
    set('[data-m-h]', T.pick(C.m.h));
    set('[data-m-p]', T.pick(C.m.p));
    const visits = M.funnel[0].v, enrols = M.funnel[4].v;
    html('[data-m-kpis]', [
      kpi(T.pick({ en: 'Sessions, 90 days', ar: 'زيارات ٩٠ يوم' }), T.num(visits), '+18%', 'up', null, T.pick({ en: '61% on mobile', ar: '٦١٪ من الموبايل' }), 'globe'),
      kpi(T.pick({ en: 'Visit to enrollment', ar: 'من زيارة لتسجيل' }), (enrols / visits * 100).toFixed(2) + '%', '+0.21 pts', 'up', null, T.pick({ en: 'Lead capture is the lever', ar: 'التقاط الليدز هو الرافعة' }), 'target'),
      kpi(T.pick({ en: 'Blended CAC', ar: 'تكلفة الاكتساب' }), '1,490 EGP', '−8%', 'up', null, T.pick({ en: 'Falling as referral grows', ar: 'بتقل مع نمو الإحالات' }), 'money'),
      kpi(T.pick({ en: 'Lead to enroll', ar: 'من ليد لتسجيل' }), (enrols / M.funnel[2].v * 100).toFixed(1) + '%', '+1.4 pts', 'up', null, T.pick({ en: 'Free module drives it', ar: 'الموديول المجاني بيحركها' }), 'trending')
    ].join(''));

    set('[data-m-fnlH]', T.pick(C.m.fnlH));
    set('[data-m-fnlSub]', T.pick(C.m.fnlSub));
    html('[data-m-fnl]', M.funnel.map((f, i) => {
      const pct = f.v / M.funnel[0].v * 100;
      const step = i === 0 ? 100 : (f.v / M.funnel[i - 1].v * 100);
      return '<div class="fnl__r"><span class="fnl__l">' + A.esc(T.pick(f.k)) + '</span>' +
        '<span class="fnl__bar"><span style="width:' + Math.max(6, pct).toFixed(1) + '%"></span>' +
        '<em>' + pct.toFixed(1) + '%</em></span>' +
        '<span class="fnl__v"><b>' + T.num(f.v) + '</b>' + (i ? step.toFixed(1) + '%' : '—') + '</span></div>';
    }).join(''));

    set('[data-m-srcH]', T.pick(C.m.srcH));
    html('[data-m-src]', donut(M.sources) +
      '<div class="donut__key">' + M.sources.map(m =>
        '<div><i style="background:' + m.c + '"></i>' + A.esc(T.pick(m.k)) + '<b>' + m.v + '%</b></div>').join('') + '</div>');

    set('[data-m-chH]', T.pick(C.m.chH));
    set('[data-m-chSub]', T.pick(C.m.chSub));
    html('[data-m-ch]',
      '<thead><tr><th>' + A.esc(T.pick({ en: 'Channel', ar: 'القناة' })) + '</th>' +
      '<th>' + A.esc(T.pick({ en: 'Spend', ar: 'الإنفاق' })) + '</th>' +
      '<th>' + A.esc(T.pick({ en: 'Leads', ar: 'ليدز' })) + '</th>' +
      '<th>' + A.esc(T.pick({ en: 'Enrolled', ar: 'تسجيلات' })) + '</th>' +
      '<th>' + A.esc(T.pick({ en: 'Cost per enroll', ar: 'تكلفة التسجيل' })) + '</th>' +
      '<th>' + A.esc(T.pick({ en: 'Return', ar: 'العائد' })) + '</th></tr></thead><tbody>' +
      M.channels.map(c => {
        const cpe = c.spend ? c.spend / c.enrol : 0;
        const roas = c.spend ? c.rev / c.spend : Infinity;
        const cls = roas === Infinity || roas >= 8 ? 'good' : roas >= 4 ? 'ok' : 'bad';
        return '<tr><td><b style="color:var(--navy)">' + A.esc(c.n) + '</b></td>' +
          '<td>' + (c.spend ? money(c.spend) : '—') + '</td>' +
          '<td>' + T.num(c.leads) + '</td>' +
          '<td>' + T.num(c.enrol) + '</td>' +
          '<td>' + (cpe ? money(Math.round(cpe)) : '—') + '</td>' +
          '<td><b class="' + cls + '">' + (roas === Infinity ? '∞' : roas.toFixed(1) + 'x') + '</b></td></tr>';
      }).join('') + '</tbody>');

    /* ---------- product ---------- */
    set('[data-p-h]', T.pick(C.p.h));
    set('[data-p-p]', T.pick(C.p.p));
    html('[data-p-kpis]', [
      kpi(T.pick({ en: 'Avg completion', ar: 'متوسط الإكمال' }), '71%', '−4 pts', 'down', null, T.pick({ en: 'Long courses drag it', ar: 'الكورسات الطويلة بتنزّلها' }), 'target'),
      kpi(T.pick({ en: 'Time to first lesson', ar: 'الوقت لأول درس' }), '3.1 ' + T.pick({ en: 'days', ar: 'يوم' }), '−0.4', 'up', null, T.pick({ en: 'Under 24h doubles completion', ar: 'أقل من ٢٤ ساعة بيضاعف الإكمال' }), 'clock'),
      kpi(T.pick({ en: 'Brief submission', ar: 'تسليم البريفات' }), '64%', '+3 pts', 'up', null, T.pick({ en: 'Of enrolled learners', ar: 'من المتعلّمين المسجّلين' }), 'folder'),
      kpi(T.pick({ en: 'Avg course rating', ar: 'متوسط تقييم الكورسات' }), '4.8', '+0.1', 'up', null, T.pick({ en: 'Across 8 programmes', ar: 'عبر تمن برامج' }), 'star')
    ].join(''));

    set('[data-p-hlthH]', T.pick(C.p.hlthH));
    set('[data-p-hlthSub]', T.pick(C.p.hlthSub));
    const comp = { 'social-systems': 74, 'motion-brand': 69, 'brand-systems': 66, 'ai-creative': 88,
                   'perf-creative': 72, 'art-direction': 63, 'vector-craft': 81, 'story-concept': 76 };
    html('[data-p-hlth]',
      '<thead><tr><th>' + A.esc(T.t('ins.course')) + '</th>' +
      '<th>' + A.esc(T.t('ins.enrollment')) + '</th>' +
      '<th>' + A.esc(T.t('ins.completion')) + '</th>' +
      '<th>' + A.esc(T.t('ins.rating')) + '</th>' +
      '<th>' + A.esc(T.pick({ en: 'Revenue', ar: 'الإيراد' })) + '</th></tr></thead><tbody>' +
      L.COURSES.map(c => {
        const cp = comp[c.id] || 70;
        return '<tr><td><div class="who"><img src="' + c.cover + '" alt="" style="border-radius:7px;width:44px;height:28px;object-fit:cover">' +
          '<span><b>' + A.esc(T.pick(c.title)) + '</b><small>' + A.esc(T.pick(c.catName)) + '</small></span></div></td>' +
          '<td>' + T.num(c.students) + '</td>' +
          '<td><div style="display:flex;align-items:center;gap:.55rem"><span class="bar" style="width:64px"><span style="width:' + cp + '%"></span></span>' +
          '<span style="font-family:var(--font-mono);font-size:.74rem">' + cp + '%</span></div></td>' +
          '<td>' + c.rating.toFixed(1) + '</td>' +
          '<td>' + money(c.students * c.price * 0.42) + '</td></tr>';
      }).join('') + '</tbody>');

    set('[data-p-dropH]', T.pick(C.p.dropH));
    const dropData = L.TEACH.funnel.map(f => f.pct);
    html('[data-p-dropChart]', barChart(dropData,
      dropData.map((_, i) => (T.lang === 'ar' ? 'أ' : 'W') + (i + 1)), { dip: 3, h: 210 }));
    html('[data-p-dropNote]', A.icon('bolt') + '<span>' + A.esc(T.pick(C.p.dropNote)) + '</span>');

    set('[data-p-uxH]', T.pick(C.p.uxH));
    html('[data-p-ux]', M.ux.map(x =>
      '<div class="watch__i ' + x.s + '"><span class="dot"></span>' +
      '<div><b>' + A.esc(T.pick(x.t)) + '</b><p>' + A.esc(T.pick(x.p)) + '</p></div>' +
      '<span class="own">' + A.esc(x.o) + '</span></div>').join(''));

    const hash = (location.hash || '').replace('#', '');
    if (C.nav.some(n => n.id === hash)) pane = hash;
    setPane(pane);
  }

  w.App.init(render);
})(window, document);
