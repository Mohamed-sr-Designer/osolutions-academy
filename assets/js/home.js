/* ==========================================================================
   Osolutions Academy — homepage
   All homepage copy lives here as {en, ar}.
   ========================================================================== */
(function (w, d) {
  'use strict';

  const C = {
    /* 1 · hero */
    pill:  { en: 'Osolutions Academy', ar: 'أكاديمية أوسوليوشنز' },
    title: {
      en: ['Creative Education Built Inside a ', 'Working Agency', ', for the ', 'Middle East'],
      ar: ['تعليم إبداعي اتبنى جوه ', 'وكالة شغّالة', '، في ', 'الشرق الأوسط']
    },
    sub: {
      en: 'Powered by Osolutions, a Cairo creative and performance agency running twelve live client accounts.',
      ar: 'مدعومة من أوسوليوشنز، وكالة كرييتف وأداء في القاهرة بتدير اتناشر حساب عميل شغّال.'
    },
    cta:  { en: 'Explore our courses', ar: 'تصفّح كورساتنا' },
    cta2: { en: 'How a cohort runs', ar: 'الدفعة بتمشي إزاي' },
    proof: { en: 'learners across Egypt and the Gulf', ar: 'متعلّم في مصر والخليج' },
    heroStats: [
      { n: '6,400+', l: { en: 'Learners since 2022', ar: 'متعلّم من ٢٠٢٢' } },
      { n: '8',      l: { en: 'Live programmes', ar: 'برنامج شغّال' } },
      { n: '4.8',    l: { en: 'Average rating', ar: 'متوسط التقييم' } },
      { n: '12',     l: { en: 'Client accounts behind the material', ar: 'حساب عميل ورا المادة' } }
    ],
    revN: '180+',
    rev:  { en: 'reviews', ar: 'تقييم' },
    from: { en: 'from', ar: 'من' },
    logos: ['ABAQ', 'Boxaway', 'Guilt Free', 'The Hub', 'UNICEM', 'Dora', 'Al Rawda', 'Bassem Ragab', 'Riyadh Al Ebdaa', 'IHS'],

    /* 2 · immediate impact */
    impactPill: { en: 'Osolutions Academy', ar: 'أكاديمية أوسوليوشنز' },
    impactH: { en: 'Our Courses Are Built for Monday Morning', ar: 'كورساتنا متبنية لصباح يوم الاتنين' },
    impactP: {
      en: 'Nothing here is written for a slide deck. What you learn on Sunday is a system we used on a client account last week, taught by the person who ran it.',
      ar: 'مفيش حاجة هنا متكتبة لعرض تقديمي. اللي بتتعلمه يوم الأحد هو نظام استخدمناه على حساب عميل الأسبوع اللي فات، وبيشرحه الشخص اللي شغّله.'
    },
    showTag: { en: 'Inside the studio', ar: 'من جوه الاستوديو' },
    showH: { en: 'You get the working file, not the theory', ar: 'بتاخد ملف الشغل نفسه، مش النظرية' },
    showP: {
      en: 'Every module ends with the same thing our team hands over on a live account: a file another designer can open, understand and continue without a phone call.',
      ar: 'كل موديول بينتهي بنفس اللي فريقنا بيسلّمه على حساب شغّال: ملف مصمم تاني يقدر يفتحه ويفهمه ويكمّله من غير مكالمة.'
    },
    showList: [
      { en: 'Real grids, real type scales, real export presets', ar: 'جريدات حقيقية وسلالم خطوط حقيقية وإعدادات تصدير حقيقية' },
      { en: 'One brief per module, read and answered by a human', ar: 'بريف واحد لكل موديول، حد حقيقي بيقراه ويرد عليه' },
      { en: 'A handover pack you can hand to your own team', ar: 'باكدج تسليم تقدر تسلّمه لفريقك' }
    ],

    /* 3 · why trust */
    trustPill: { en: 'Why trust us', ar: 'ليه تثق فينا' },
    trustH: { en: 'Why Trust Osolutions Academy?', ar: 'ليه تثق في أكاديمية أوسوليوشنز؟' },
    trustBody: [
      { en: 'Because it started as our own onboarding folder. Every designer who joined the studio got the same three weeks of files, shadowing and review, and the folder kept growing because the same questions kept coming back.', ar: 'لأنها بدأت كفولدر تدريب داخلي عندنا. كل مصمم بينضم للاستوديو كان بياخد نفس التلات أسابيع من الملفات والمتابعة والمراجعة، والفولدر فضل يكبر لأن نفس الأسئلة كانت بترجع.' },
      { en: 'Seven years and twelve client accounts later, we teach the same systems we ship, in Arabic, with English materials. Nothing is written by a content team, and nothing is taught by someone who does not still run accounts.', ar: 'بعد سبع سنين واتناشر حساب عميل، بنعلّم نفس الأنظمة اللي بنشتغل بيها، بالعربي وبمواد إنجليزي. مفيش حاجة بيكتبها فريق محتوى، ومفيش حد بيشرح وهو مش لسه بيدير حسابات.' }
    ],
    trustCta: { en: 'Explore our courses', ar: 'تصفّح كورساتنا' },

    /* 3b · how a cohort runs */
    howPill: { en: 'How a cohort runs', ar: 'الدفعة بتمشي إزاي' },
    howH: { en: 'Four weeks in, you are working differently', ar: 'بعد أربع أسابيع هتلاقي نفسك بتشتغل بطريقة مختلفة' },
    howP: {
      en: 'Not a playlist you finish alone. A cohort with a start date, a weekly room and a person who reads your work.',
      ar: 'مش بلاي ليست بتخلّصها لوحدك. دفعة ليها تاريخ بداية وأوضة أسبوعية وحد بيقرا شغلك.'
    },
    how: [
      { k: { en: 'Week one', ar: 'الأسبوع الأول' },
        t: { en: 'You audit your own last thirty pieces', ar: 'بتدقّق آخر تلاتين شغلانة ليك' },
        p: { en: 'Uncomfortable and necessary. Before anyone teaches you a system, you see exactly which four rules you are already breaking and what they cost you in hours.', ar: 'مش مريح وضروري. قبل ما حد يعلّمك نظام، بتشوف بالظبط أنهي أربع قواعد بتكسرها فعلاً وبتكلفك كام ساعة.' } },
      { k: { en: 'Every week', ar: 'كل أسبوع' },
        t: { en: 'One live room, not a webinar', ar: 'أوضة مباشرة واحدة، مش ويبينار' },
        p: { en: 'Sixty minutes with the instructor who wrote the module. You bring a file that is stuck, it goes on screen, and it gets fixed in front of the group.', ar: 'ستين دقيقة مع المدرب اللي كتب الموديول. بتجيب ملف واقف، بيتحط على الشاشة، وبيتصلّح قدام المجموعة.' } },
      { k: { en: 'Every module', ar: 'كل موديول' },
        t: { en: 'A brief a human actually reads', ar: 'بريف حد حقيقي بيقراه' },
        p: { en: 'No auto grading and no participation badges. You submit work, and the notes name the craft skill and the fix, not a score out of ten.', ar: 'مفيش تصحيح آلي ولا شارات حضور. بتسلّم شغل، والملاحظات بتسمّي المهارة والتعديل، مش درجة من عشرة.' } },
      { k: { en: 'Last week', ar: 'الأسبوع الأخير' },
        t: { en: 'You hand over, out loud', ar: 'بتسلّم، بصوت عالي' },
        p: { en: 'Every course ends the same way: you present your system to the room and hand over the files, because a system nobody else can follow is not a system.', ar: 'كل كورس بينتهي بنفس الطريقة: بتعرض نظامك على الأوضة وتسلّم الملفات، لأن النظام اللي محدش تاني يقدر يمشي عليه مش نظام.' } }
    ],

    /* 4 · numbers */
    numPill: { en: 'Academy numbers', ar: 'أرقام الأكاديمية' },
    numH: { en: 'By the Numbers', ar: 'بالأرقام' },
    nums: [
      { n: '280+', l: { en: 'Bite sized lessons', ar: 'درس قصير' } },
      { n: '160+', l: { en: 'Templates and working files', ar: 'تمبلت وملف شغل' } },
      { n: '140+', l: { en: 'Hours of live and recorded training', ar: 'ساعة تدريب مباشر ومسجّل' } },
      { n: '6,400+', l: { en: 'Alumni across MENA', ar: 'خرّيج في المنطقة' } }
    ],
    numNote: {
      en: 'Trusted by design and marketing teams in 18+ industries. From the first grid to the final handover, every system taught here has already shipped on a real account.',
      ar: 'محل ثقة فرق التصميم والتسويق في أكتر من ١٨ مجال. من أول جريد لآخر تسليم، كل نظام بيتشرح هنا اشتغل فعلاً على حساب حقيقي.'
    },

    /* 5 · courses */
    crsPill: { en: 'The catalog', ar: 'الكتالوج' },
    crsH: { en: 'Courses Running This Season', ar: 'الكورسات الشغّالة الموسم ده' },
    crsP: {
      en: 'Eight programmes across design, motion, brand, AI and performance. Seats are capped so every brief gets reviewed.',
      ar: 'تمن برامج في التصميم والموشن والهوية والذكاء الاصطناعي والأداء. الأماكن محدودة عشان كل بريف ياخد مراجعة.'
    },
    crsAll: { en: 'View all courses', ar: 'كل الكورسات' },
    enrollNow: { en: 'Enroll today', ar: 'سجّل النهارده' },
    liveCourse: { en: 'Live course', ar: 'كورس مباشر' },
    selfPaced: { en: 'Self paced', ar: 'حسب وقتك' },

    /* 6 · different */
    diffPill: { en: 'Osolutions Academy', ar: 'أكاديمية أوسوليوشنز' },
    diffH: { en: 'What Makes Osolutions Academy Different?', ar: 'إيه اللي بيميّز أكاديمية أوسوليوشنز؟' },
    diffP: {
      en: 'Built by a working agency. Every template, file and review method here is used on campaigns that ship, and now they are yours.',
      ar: 'متبنية من وكالة شغّالة. كل تمبلت وملف وطريقة مراجعة هنا بتتستخدم في شغل بيتسلّم فعلاً، ودلوقتي بقت بتاعتك.'
    },
    diff: [
      { i: 'bolt', t: { en: 'Working playbooks', ar: 'بلاي بوكس شغّالة' },
        p: { en: 'Real sprints from real accounts. You learn the grid, the type scale and the review loop we use to keep twelve accounts consistent.', ar: 'سبرنتات حقيقية من حسابات حقيقية. بتتعلم الجريد وسلم الخطوط ودورة المراجعة اللي بنستخدمها عشان نخلي اتناشر حساب متسقين.' } },
      { i: 'sparkle', t: { en: 'AI ready assets', ar: 'أصول جاهزة للـ AI' },
        p: { en: 'Done for you files and prompt structures, from moodboard pipelines to retouch chains. Built to cut days out of your week, not to replace your taste.', ar: 'ملفات جاهزة وهياكل برومبت، من بايبلاين المود بورد لسلاسل الريتاتش. متعمولة توفّر أيام من أسبوعك، مش تستبدل ذوقك.' } },
      { i: 'chat', t: { en: 'Weekly review clinics', ar: 'عيادات مراجعة أسبوعية' },
        p: { en: 'One live session every week with the instructor who wrote the module. Bring a stuck file and leave with a decision, not a maybe.', ar: 'جلسة مباشرة كل أسبوع مع المدرب اللي كتب الموديول. هات ملف واقف واخرج بقرار مش بـ يمكن.' } },
      { i: 'network', t: { en: 'Lifetime studio access', ar: 'وصول دائم للاستوديو' },
        p: { en: 'Your cohort channel stays open after the last session. Alumni post briefs, critiques and freelance work we cannot take ourselves.', ar: 'قناة دفعتك بتفضل مفتوحة بعد آخر جلسة. الخريجين بينشروا بريفات ومراجعات وشغل فريلانس مش قادرين ناخده.' } }
    ],
    diffCta: { en: 'Explore our courses', ar: 'تصفّح كورساتنا' },

    /* 7 · graduates */
    gradPill: { en: 'Graduation projects', ar: 'مشاريع التخرج' },
    gradH: { en: 'See Our Graduates in Action', ar: 'شوف خرّيجينا وهما بيشتغلوا' },
    gradP: {
      en: 'Real systems, campaigns and identities built by Osolutions Academy cohorts and shipped at their own companies.',
      ar: 'أنظمة وحملات وهويات حقيقية بناها خرّيجو دفعات أكاديمية أوسوليوشنز واتسلّمت في شركاتهم.'
    },
    grads: [
      { av: 'assets/img/people/s1.webp', n: { en: 'Mariam Adel', ar: 'مريم عادل' },
        r: { en: 'Social Design Lead', ar: 'قائدة تصميم سوشيال' }, o: 'Boxaway', c: 'social-systems' },
      { av: 'assets/img/people/s2.webp', n: { en: 'Ahmed Salah', ar: 'أحمد صلاح' },
        r: { en: 'Art Director', ar: 'مخرج فني' }, o: 'The Hub', c: 'brand-systems' },
      { av: 'assets/img/people/s3.webp', n: { en: 'Farida Mostafa', ar: 'فريدة مصطفى' },
        r: { en: 'Senior Designer', ar: 'مصممة أولى' }, o: 'Guilt Free', c: 'vector-craft' },
      { av: 'assets/img/people/s4.webp', n: { en: 'Omar Kamal', ar: 'عمر كمال' },
        r: { en: 'Motion Designer', ar: 'مصمم موشن' }, o: 'ABAQ', c: 'motion-brand' },
      { av: 'assets/img/people/s5.webp', n: { en: 'Nada Hisham', ar: 'ندى هشام' },
        r: { en: 'Performance Creative', ar: 'كرييتف أداء' }, o: 'Dora', c: 'perf-creative' },
      { av: 'assets/img/people/s6.webp', n: { en: 'Salma Refaie', ar: 'سلمى رفاعي' },
        r: { en: 'Brand Manager', ar: 'مديرة براند' }, o: 'UNICEM', c: 'brand-systems' },
      { av: 'assets/img/people/s7.webp', n: { en: 'Tarek Habib', ar: 'طارق حبيب' },
        r: { en: 'Creative Technologist', ar: 'كرييتف تكنولوجيست' }, o: 'Al Rawda', c: 'ai-creative' },
      { av: 'assets/img/people/s8.webp', n: { en: 'Hana Yousri', ar: 'هنا يسري' },
        r: { en: 'Junior Designer', ar: 'مصممة جونيور' }, o: 'Bassem Ragab', c: 'story-concept' }
    ],
    gradNote: {
      en: 'Graduate photographs on this build are AI generated placeholders and will be replaced with real cohort photography before launch.',
      ar: 'صور الخرّيجين في النسخة دي مولّدة بالذكاء الاصطناعي كبدائل مؤقتة، وهتتبدل بتصوير حقيقي للدفعات قبل الإطلاق.'
    },

    /* 8 · success stories */
    revPill: { en: 'Success stories', ar: 'قصص نجاح' },
    revH: { en: 'What Our Graduates Are Saying', ar: 'خرّيجينا بيقولوا إيه' },
    revP: {
      en: 'Real feedback from people who changed how they work, and in a few cases what they charge.',
      ar: 'آراء حقيقية من ناس غيّرت طريقة شغلها، وفي حالات كتير غيّرت أسعارها كمان.'
    },
    mqFoot: { en: 'More than 6,400 learners have finished a cohort with us.', ar: 'أكتر من ٦٤٠٠ متعلّم خلّصوا دفعة معانا.' },

    /* 9 · band */
    bandPill: { en: 'Osolutions Academy', ar: 'أكاديمية أوسوليوشنز' },
    bandH: { en: 'Tell us where the work is stuck. We will point you at the right cohort.', ar: 'قولنا الشغل واقف فين. وإحنا هنوجّهك للدفعة المناسبة.' },
    bandP: {
      en: 'Built by a working agency, every tool, file and review method here is used on accounts that ship. Pick a course and start with this cohort.',
      ar: 'متبنية من وكالة شغّالة، وكل أداة وملف وطريقة مراجعة هنا بتتستخدم على حسابات بتتسلّم. اختار كورس وابدأ مع الدفعة دي.'
    },
    bandCta: { en: 'Explore our courses', ar: 'تصفّح كورساتنا' },

    /* 10 · FAQ */
    faqPill: { en: 'We have got you covered', ar: 'إحنا مغطينك' },
    faqH: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
    faqP: { en: 'A comprehensive collection of commonly asked questions.', ar: 'مجموعة شاملة للأسئلة اللي بتتكرر.' },
    faq: [
      { q: { en: 'What is Osolutions Academy?', ar: 'إيه هي أكاديمية أوسوليوشنز؟' },
        a: { en: 'It is the training arm of Osolutions, a creative and performance agency in Cairo. We teach the systems our own team uses on live client accounts, in short recorded lessons with one live review session every week.', ar: 'هي الذراع التدريبي لأوسوليوشنز، وكالة كرييتف وأداء في القاهرة. بنعلّم الأنظمة اللي فريقنا بيستخدمها على حسابات عملاء شغّالة، في دروس قصيرة مسجّلة مع جلسة مراجعة مباشرة كل أسبوع.' } },
      { q: { en: 'What makes it different from other design courses?', ar: 'إيه اللي بيميّزها عن كورسات التصميم التانية؟' },
        a: { en: 'Three things. The material comes from accounts that are running right now, every module ends with a brief a human reads and answers, and the final module of every course is handover, so you leave with files another person can use.', ar: 'تلات حاجات. المادة جاية من حسابات شغّالة دلوقتي، وكل موديول بينتهي ببريف حد حقيقي بيقراه ويرد عليه، وآخر موديول في كل كورس هو التسليم، فبتخرج بملفات حد تاني يقدر يستخدمها.' } },
      { q: { en: 'Who are the courses for?', ar: 'الكورسات دي لمين؟' },
        a: { en: 'Designers, motion designers, art directors, brand managers and marketers who can already use the main tool and want a system instead of a habit. Each course page states the level and names who it is not for.', ar: 'مصممين ومصممي موشن ومخرجين فنيين ومديري براند ومسوّقين بيعرفوا يستخدموا البرنامج الأساسي وعايزين نظام بدل عادة. كل صفحة كورس مكتوب فيها المستوى ومكتوب كمان هو مش لمين.' } },
      { q: { en: 'How are the courses delivered?', ar: 'الكورسات بتتقدّم إزاي؟' },
        a: { en: 'Lessons are recorded and short, so you watch on your own time. One live session each week covers review and questions at 8 PM Cairo time, and it is recorded and posted the same day.', ar: 'الدروس مسجّلة وقصيرة، فبتتفرج في وقتك. جلسة مباشرة واحدة كل أسبوع للمراجعة والأسئلة الساعة ٨ مساءً بتوقيت القاهرة، وبتتسجّل وتتنشر في نفس اليوم.' } },
      { q: { en: 'Do I get a certificate?', ar: 'هاخد شهادة؟' },
        a: { en: 'Yes. Complete every module and submit the final brief and you get a verifiable certificate with a credential ID that links to a public page listing what the course covered.', ar: 'أيوه. خلّص كل الموديولات وسلّم البريف النهائي وهتاخد شهادة موثّقة برقم تحقّق بيوصل لصفحة عامة موضّح فيها الكورس غطّى إيه.' } },
      { q: { en: 'Can my company enroll a whole team?', ar: 'ممكن شركتي تسجّل فريق كامل؟' },
        a: { en: 'Yes. The Double Seat package covers two people, and for three or more we issue a company invoice with a team rate and a shared workspace for assignments. Write to team@osolutions.academy.', ar: 'أيوه. باقة المقعدين بتغطي شخصين، ولتلاتة أو أكتر بنصدر فاتورة للشركة بسعر فريق ومساحة عمل مشتركة للتسليمات. ابعت لـ team@osolutions.academy.' } }
    ]
  };

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS;
    const set = (sel, txt) => { const el = d.querySelector(sel); if (el) el.textContent = txt; };
    const html = (sel, s) => { const el = d.querySelector(sel); if (el) el.innerHTML = s; };
    const arrow = '<span class="cta-round__ico">' + A.icon('arrow') + '</span>';

    /* 1 · hero */
    set('[data-h-pill]', T.pick(C.pill));
    const t = C.title[T.lang] || C.title.en;
    html('[data-h-title]', A.esc(t[0]) + '<span class="hl">' + A.esc(t[1]) + '</span>' +
      A.esc(t[2]) + '<span class="hl">' + A.esc(t[3]) + '</span>');
    set('[data-h-sub]', T.pick(C.sub));
    html('[data-h-cta]', '<span>' + A.esc(T.pick(C.cta)) + '</span>' + arrow);
    html('[data-h-cta2]', '<span>' + A.esc(T.pick(C.cta2)) + '</span>' +
      '<span class="cta-round__ico">' + A.icon('chev') + '</span>');

    html('[data-h-proof]',
      '<span class="av-stack">' + ['s1','s4','s3','s7','s5'].map(function (k) {
        return '<img class="av av--sm" src="assets/img/people/' + k + '.webp" alt="" loading="lazy">';
      }).join('') + '</span>' +
      A.stars(4.8) +
      '<span class="t"><b>4.8</b> ' + A.esc(T.pick(C.from)) + ' <b>' + C.revN + '</b> ' +
      A.esc(T.pick(C.rev)) + ' · <b>6,400+</b> ' + A.esc(T.pick(C.proof)) + '</span>');

    html('[data-h-herostats]', C.heroStats.map(function (x) {
      return '<div><b>' + A.esc(x.n) + '</b><span>' + A.esc(T.pick(x.l)) + '</span></div>';
    }).join(''));
    set('[data-h-scroll]', T.pick({ en: 'Scroll', ar: 'انزل' }));
    html('[data-h-logos]', C.logos.concat(C.logos).map(x => '<span>' + A.esc(x) + '</span>').join(''));

    /* 2 · impact + showcase */
    set('[data-h-impactPill]', T.pick(C.impactPill));
    set('[data-h-impactH]', T.pick(C.impactH));
    set('[data-h-impactP]', T.pick(C.impactP));
    html('[data-h-showcase]',
      '<span class="pill pill--on-dark" style="align-self:flex-start">' + A.esc(T.pick(C.showTag)) + '</span>' +
      '<h3>' + A.esc(T.pick(C.showH)) + '</h3>' +
      '<p>' + A.esc(T.pick(C.showP)) + '</p>' +
      '<ul class="showcase__list">' + C.showList.map(x =>
        '<li>' + A.icon('check') + '<span>' + A.esc(T.pick(x)) + '</span></li>').join('') + '</ul>');

    /* 3 · trust */
    set('[data-h-trustPill]', T.pick(C.trustPill));
    set('[data-h-trustH]', T.pick(C.trustH));
    html('[data-h-trustBody]', C.trustBody.map(p => '<p>' + A.esc(T.pick(p)) + '</p>').join(''));
    html('[data-h-trustCta]', '<span>' + A.esc(T.pick(C.trustCta)) + '</span>' + arrow);

    /* 3b · how a cohort runs */
    set('[data-h-howPill]', T.pick(C.howPill));
    set('[data-h-howH]', T.pick(C.howH));
    set('[data-h-howP]', T.pick(C.howP));
    html('[data-h-how]', C.how.map((s, i) =>
      '<div class="story__step' + (i === 0 ? ' is-on' : '') + '">' +
      '<span class="mono">' + A.esc(T.pick(s.k)) + '</span>' +
      '<h3>' + A.esc(T.pick(s.t)) + '</h3>' +
      '<p>' + A.esc(T.pick(s.p)) + '</p></div>').join(''));

    /* 4 · numbers */
    set('[data-h-numPill]', T.pick(C.numPill));
    set('[data-h-numH]', T.pick(C.numH));
    html('[data-h-nums]', C.nums.map(x =>
      '<div class="num" data-spot><b>' + A.esc(x.n) + '</b><span>' + A.esc(T.pick(x.l)) + '</span></div>').join(''));
    set('[data-h-numNote]', T.pick(C.numNote));

    /* 5 · courses */
    set('[data-h-crsPill]', T.pick(C.crsPill));
    set('[data-h-crsH]', T.pick(C.crsH));
    set('[data-h-crsP]', T.pick(C.crsP));
    html('[data-h-crsAll]', '<span>' + A.esc(T.pick(C.crsAll)) + '</span>' + arrow);
    html('[data-h-courses]', L.COURSES.map(c => {
      const live = c.badges.indexOf('live') > -1;
      const ins = L.instructor(c.instructor);
      return '<a class="dcard" data-spot href="course.html?id=' + c.id + '">' +
        '<div class="dcard__art">' +
          '<img src="' + c.cover + '" alt="" loading="lazy" width="1600" height="1000">' +
          '<div class="dcard__top">' +
            '<span class="dcard__enroll">' + A.esc(T.pick(C.enrollNow)) + '</span>' +
            '<span class="dcard__live">' + (live ? '<i></i>' : '') +
              A.esc(T.pick(live ? C.liveCourse : C.selfPaced)) + '</span>' +
          '</div>' +
          '<img class="dcard__face" src="' + ins.img + '" alt="" loading="lazy">' +
        '</div>' +
        '<div class="dcard__body">' +
          '<span class="dcard__cat">' + A.esc(T.pick(c.catName)) + '</span>' +
          '<h3>' + A.esc(T.pick(c.title)) + '</h3>' +
          '<div class="dcard__meta">' +
            '<span>' + T.num(c.weeks) + ' ' + A.esc(T.t('crs.weeks')) + ' · ' + T.num(c.lessonCount) + ' ' + A.esc(T.t('crs.lessons')) + '</span>' +
            '<b>' + T.money(c.price) + '</b>' +
          '</div>' +
        '</div></a>';
    }).join(''));

    /* 6 · different */
    set('[data-h-diffPill]', T.pick(C.diffPill));
    set('[data-h-diffH]', T.pick(C.diffH));
    set('[data-h-diffP]', T.pick(C.diffP));
    html('[data-h-diff]', C.diff.map((x, i) =>
      '<div class="diff__i" data-spot><span class="diff__ico">' + A.icon(x.i) + '</span>' +
      '<h4>' + A.esc(T.pick(x.t)) + '</h4><p>' + A.esc(T.pick(x.p)) + '</p></div>').join(''));
    html('[data-h-diffCta]', '<span>' + A.esc(T.pick(C.diffCta)) + '</span>' + arrow);

    /* 7 · graduates */
    set('[data-h-gradPill]', T.pick(C.gradPill));
    set('[data-h-gradH]', T.pick(C.gradH));
    set('[data-h-gradP]', T.pick(C.gradP));
    html('[data-h-grads]', C.grads.map((g, i) => {
      const c = L.byId(g.c);
      return '<a class="grad" href="course.html?id=' + g.c + '">' +
        '<span class="grad__tag">' + A.esc(T.pick(c.catName)) + '</span>' +
        '<img src="' + g.av + '" alt="" loading="lazy">' +
        '<span class="grad__veil"></span>' +
        '<span class="grad__in"><b>' + A.esc(T.pick(g.n)) + '</b>' +
        '<small>' + A.esc(T.pick(g.r)) + ' · ' + A.esc(g.o) + '</small>' +
        '<em>' + A.esc(T.pick(c.title)) + '</em></span></a>';
    }).join(''));
    set('[data-h-gradNote]', T.pick(C.gradNote));

    /* 8 · success stories — pulled from every course review in data.js */
    set('[data-h-revPill]', T.pick(C.revPill));
    set('[data-h-revH]', T.pick(C.revH));
    set('[data-h-revP]', T.pick(C.revP));
    const all = [];
    L.COURSES.forEach(c => c.reviews_.forEach(r => all.push({ r: r, c: c })));
    const card = x =>
      '<div class="tq" data-spot>' + A.stars(x.r.r) +
      '<p class="tq__txt">' + A.esc(T.pick(x.r.txt)) + '</p>' +
      '<div class="tq__by"><img class="av av--sm" src="' + x.r.av + '" alt="" loading="lazy">' +
      '<span><b>' + A.esc(T.pick(x.r.name)) + '</b>' +
      '<small>' + A.esc(T.pick(x.r.role)) + ' · ' + A.esc(T.pick(x.c.title)) + '</small></span></div></div>';
    const row1 = all.filter((x, i) => i % 2 === 0);
    const row2 = all.filter((x, i) => i % 2 === 1);
    html('[data-h-mq1]', row1.concat(row1).map(card).join(''));
    html('[data-h-mq2]', row2.concat(row2).map(card).join(''));
    html('[data-h-mqFoot]',
      '<span class="av-stack">' + ['s1', 's4', 's3', 's7', 's5'].map(k =>
        '<img class="av av--sm" src="assets/img/people/' + k + '.webp" alt="" loading="lazy">').join('') + '</span>' +
      '<span><b>' + A.esc(T.pick(C.mqFoot)) + '</b></span>');

    /* 9 · band */
    set('[data-h-bandPill]', T.pick(C.bandPill));
    set('[data-h-bandH]', T.pick(C.bandH));
    set('[data-h-bandP]', T.pick(C.bandP));
    set('[data-h-bandCd]', T.t('cro.cohortIn'));
    html('[data-h-bandCta]', '<span>' + A.esc(T.pick(C.bandCta)) + '</span>' + arrow);

    /* 10 · FAQ */
    set('[data-h-faqPill]', T.pick(C.faqPill));
    set('[data-h-faqH]', T.pick(C.faqH));
    set('[data-h-faqP]', T.pick(C.faqP));
    html('[data-h-faq]', C.faq.map((f, i) =>
      '<div class="acc faqn' + (i === 0 ? ' is-open' : '') + '">' +
      '<button class="acc__head" aria-expanded="' + (i === 0) + '">' +
      '<span class="acc__num">' + T.num(i + 1) + '.</span>' +
      '<span class="acc__title">' + A.esc(T.pick(f.q)) + '</span>' +
      '<span class="acc__ico">' + A.icon('chev') + '</span></button>' +
      '<div class="acc__body"><div><div class="acc__inner"><p>' + A.esc(T.pick(f.a)) + '</p></div></div></div></div>').join(''));
    /* expose the FAQ so the SEO layer can emit FAQPage markup */
    w.HOME_FAQ = C.faq;
    if (w.SEO) w.SEO.init();
    A.bindAccordions();
  }

  /* the header stays dark while the hero is behind it */
  function darkHead() {
    const hero = d.querySelector('.hero2');
    if (!hero) return;
    const sync = () => {
      const navH = parseFloat(getComputedStyle(d.documentElement).getPropertyValue('--nav-h')) || 68;
      d.body.classList.toggle('dark-head', w.scrollY < hero.offsetHeight - navH);
    };
    sync();
    w.addEventListener('scroll', sync, { passive: true });
    w.addEventListener('resize', sync);
  }

  w.App.init(render);
  darkHead();
})(window, document);
