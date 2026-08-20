/* ==========================================================================
   OSOLUTIONS ACADEMY — content layer
   Single source of truth. Every user-facing string is {en, ar}.
   NOTE: instructor portraits are AI-generated placeholders for the build.
   Swap assets/img/people/*.webp with real team photos before going live.
   ========================================================================== */
(function (w) {
  'use strict';

  /* ---------------- Categories ---------------- */
  const CATS = [
    { id: 'design',      name: { en: 'Social & Digital Design', ar: 'تصميم سوشيال وديجيتال' } },
    { id: 'motion',      name: { en: 'Motion & Video',          ar: 'موشن وفيديو' } },
    { id: 'brand',       name: { en: 'Brand & Identity',        ar: 'الهوية والبراند' } },
    { id: 'ai',          name: { en: 'AI & Creative Tech',      ar: 'الذكاء الاصطناعي' } },
    { id: 'performance', name: { en: 'Performance Creative',    ar: 'كرييتف الأداء' } },
    { id: 'photo',       name: { en: 'Art Direction & Photo',   ar: 'إخراج فني وتصوير' } },
    { id: 'illustration',name: { en: 'Illustration & Vector',   ar: 'رسم وفيكتور' } },
    { id: 'concept',     name: { en: 'Concept & Storytelling',  ar: 'الفكرة والسرد' } }
  ];

  /* ---------------- Instructors ---------------- */
  const INSTRUCTORS = {
    i1: {
      id: 'i1', img: 'assets/img/people/i1.webp',
      name: { en: 'Karim Adel', ar: 'كريم عادل' },
      role: { en: 'Creative Director, Osolutions', ar: 'مدير إبداعي، أوسوليوشنز' },
      bio: {
        en: 'Karim has run creative for twelve years across Egypt, Saudi Arabia and the UAE. He built the design system that Osolutions uses on twelve live client accounts, and he still reviews every key visual that leaves the studio. He teaches the way he reviews: the craft first, the taste second.',
        ar: 'كريم بيدير الشغل الإبداعي من اتناشر سنة في مصر والسعودية والإمارات. هو اللي بنى نظام التصميم اللي أوسوليوشنز بتشتغل بيه على اتناشر حساب عميل، ولسه بيراجع كل كي فيجوال بيخرج من الاستوديو. بيعلّم بنفس طريقة مراجعته: الحرفة الأول، والذوق بعدها.'
      },
      stats: { students: 3120, courses: 2, rating: 4.9 },
      tags: [
        { en: 'Design systems', ar: 'أنظمة التصميم' },
        { en: 'Art direction', ar: 'إخراج فني' },
        { en: 'Team leadership', ar: 'قيادة الفرق' }
      ]
    },
    i2: {
      id: 'i2', img: 'assets/img/people/i2.webp',
      name: { en: 'Nour Hassan', ar: 'نور حسن' },
      role: { en: 'Head of Brand', ar: 'رئيس قسم البراند' },
      bio: {
        en: 'Nour has taken eleven brands from a naming workshop to a full identity manual, including four in real estate and two in education. She is strict about one thing: an identity that cannot survive a junior designer on a Thursday afternoon is not an identity, it is a poster.',
        ar: 'نور خدت إحدى عشر براند من ورشة التسمية لحد المانيوال الكامل، منهم أربعة في العقارات واتنين في التعليم. متشددة في حاجة واحدة: الهوية اللي مش هتصمد مع مصمم جونيور يوم خميس الضهر مش هوية، دي بوستر.'
      },
      stats: { students: 1840, courses: 1, rating: 4.9 },
      tags: [
        { en: 'Identity systems', ar: 'أنظمة الهوية' },
        { en: 'Brand strategy', ar: 'استراتيجية البراند' },
        { en: 'Guidelines', ar: 'الجايدلاينز' }
      ]
    },
    i3: {
      id: 'i3', img: 'assets/img/people/i3.webp',
      name: { en: 'Salma Refaat', ar: 'سلمى رفعت' },
      role: { en: 'Senior Motion Designer', ar: 'مصممة موشن سينيور' },
      bio: {
        en: 'Salma animates for brands that need the same idea to work as a six second bumper and a forty second explainer. She came from print, which is why her motion has typography that actually holds. She teaches timing as a craft, not a preset.',
        ar: 'سلمى بتعمل موشن لبراندات محتاجة نفس الفكرة تشتغل كـ بامبر ٦ ثواني وكـ إكسبلينر ٤٠ ثانية. جاية من البرنت، وده سبب إن التايبوجرافي في الموشن بتاعها بتثبت فعلاً. بتعلّم التوقيت كحرفة، مش كبريست.'
      },
      stats: { students: 1460, courses: 1, rating: 4.8 },
      tags: [
        { en: 'After Effects', ar: 'أفتر إفكتس' },
        { en: 'Kinetic type', ar: 'تايبوجرافي متحركة' },
        { en: 'Timing', ar: 'التوقيت' }
      ]
    },
    i4: {
      id: 'i4', img: 'assets/img/people/i4.webp',
      name: { en: 'Yassin Fouad', ar: 'ياسين فؤاد' },
      role: { en: 'Creative Technology Lead', ar: 'قائد التكنولوجيا الإبداعية' },
      bio: {
        en: 'Yassin built the AI workflow that cut the studio research and mockup stage from days to hours. He is the person on the team who reads the model release notes so nobody else has to. His rule for AI is simple: it drafts, you direct.',
        ar: 'ياسين بنى الـ workflow بتاع الذكاء الاصطناعي اللي قصّر مرحلة البحث والموك أب من أيام لساعات. هو الشخص اللي بيقرا نوتس الموديلات عشان محدش تاني يعملها. قاعدته في الـ AI بسيطة: هو بيسوّد، وإنت بتخرج.'
      },
      stats: { students: 2260, courses: 1, rating: 4.7 },
      tags: [
        { en: 'Generative workflow', ar: 'الشغل التوليدي' },
        { en: 'Prompt craft', ar: 'صياغة البرومبت' },
        { en: 'Retouch & upscale', ar: 'ريتاتش وتكبير' }
      ]
    },
    i5: {
      id: 'i5', img: 'assets/img/people/i5.webp',
      name: { en: 'Dina Sherif', ar: 'دينا شريف' },
      role: { en: 'Performance Creative Lead', ar: 'قائدة كرييتف الأداء' },
      bio: {
        en: 'Dina sits between the media buyer and the designer, which is the least comfortable and most useful seat in the agency. She has shipped over four hundred ad variants and can tell you within a day which hook is dying. She teaches creative as a testable system.',
        ar: 'دينا قاعدة بين الميديا باير والمصمم، وده أقل مكان مريح وأكتر مكان مفيد في الوكالة. طلّعت أكتر من أربعمية إعلان مختلف وتقدر تقولك في يوم واحد أنهي هوك بيموت. بتعلّم الكرييتف كنظام قابل للاختبار.'
      },
      stats: { students: 1980, courses: 1, rating: 4.8 },
      tags: [
        { en: 'Ad creative', ar: 'كرييتف الإعلانات' },
        { en: 'Hook testing', ar: 'اختبار الهوكس' },
        { en: 'UGC direction', ar: 'إخراج الـ UGC' }
      ]
    },
    i6: {
      id: 'i6', img: 'assets/img/people/i6.webp',
      name: { en: 'Hisham Nabil', ar: 'هشام نبيل' },
      role: { en: 'Art Director & Photographer', ar: 'مخرج فني ومصور' },
      bio: {
        en: 'Hisham has directed shoots for food, real estate and hospitality clients across Cairo and Jeddah. He believes most bad photos are briefing problems, not camera problems, and he spends the first week of his course proving it.',
        ar: 'هشام أخرج تصويرات لعملاء في الأكل والعقارات والضيافة في القاهرة وجدة. مؤمن إن أغلب الصور الوحشة مشكلتها في البريف مش في الكاميرا، وبيقضي أول أسبوع في الكورس بيثبت ده.'
      },
      stats: { students: 1240, courses: 2, rating: 4.9 },
      tags: [
        { en: 'Shoot direction', ar: 'إخراج التصوير' },
        { en: 'Lighting', ar: 'الإضاءة' },
        { en: 'Casting & styling', ar: 'الكاستنج والاستايلنج' }
      ]
    }
  };

  /* ---------------- Shared plan template ----------------
     All three plans render the SAME ordered rows so the columns compare
     line for line. Only the on/off state and the seat count change.        */
  const PLAN_ROWS = [
    { en: 'Lifetime access to every recording',        ar: 'وصول مدى الحياة لكل التسجيلات' },
    { en: 'All downloadable templates and files',      ar: 'كل الملفات والقوالب القابلة للتحميل' },
    { en: 'Completion certificate',                    ar: 'شهادة إتمام' },
    { en: 'Free updates when the course is refreshed', ar: 'تحديثات مجانية لما الكورس يتحدّث' },
    { en: 'Community channel access',                  ar: 'الدخول لقناة المجتمع' },
    { en: 'Graded assignment reviews',                 ar: 'مراجعة وتصحيح التسليمات' },
    { en: 'Priority Q&A in live sessions',             ar: 'أولوية في الأسئلة بالجلسات المباشرة' },
    { en: 'One-to-one session with the instructor',    ar: 'جلسة فردية مع المدرب' },
    { en: 'Shared team workspace for assignments',     ar: 'مساحة عمل مشتركة للتسليمات' }
  ];

  function rows(mask) {
    return PLAN_ROWS.map((r, i) => ({ en: r.en, ar: r.ar, on: mask[i] === 1 }));
  }

  function plans(base) {
    return [
      {
        id: 'core',
        name: { en: 'The Core Access', ar: 'الوصول الأساسي' },
        note: { en: 'Self paced, full curriculum', ar: 'حسب وقتك، منهج كامل' },
        seats: 1, price: base, was: null, badge: null,
        features: rows([1,1,1,1,1,0,0,0,0])
      },
      {
        id: 'premium',
        name: { en: 'The Premium Package', ar: 'الباقة المميزة' },
        note: { en: 'Live cohort with full review', ar: 'دفعة مباشرة مع مراجعة كاملة' },
        seats: 1, price: Math.round(base * 1.5 / 100) * 100, was: null, badge: 'popular',
        features: rows([1,1,1,1,1,1,1,1,0])
      },
      {
        id: 'duo',
        name: { en: 'Double Seat Package', ar: 'باقة المقعدين' },
        note: { en: 'Two people from the same team', ar: 'شخصين من نفس الفريق' },
        seats: 2,
        price: Math.round(base * 2.6 / 100) * 100,
        was: Math.round(base * 3 / 100) * 100,
        badge: 'value',
        features: rows([1,1,1,1,1,1,1,1,1])
      }
    ];
  }

  /* ---------------- Shared FAQ ---------------- */
  const FAQ_BASE = [
    {
      q: { en: 'Do I need previous experience to join?', ar: 'محتاج خبرة سابقة عشان أدخل؟' },
      a: { en: 'You need to be comfortable in the main tool of the course. Everything past that is taught from the start. Each course page states the level, and the first module is a levelling week so nobody is left behind.', ar: 'محتاج تكون مرتاح في البرنامج الأساسي للكورس. أي حاجة بعد كده بتتشرح من الأول. كل صفحة كورس مكتوب فيها المستوى، وأول موديول أسبوع تسوية عشان محدش يتأخّر.' }
    },
    {
      q: { en: 'Are the sessions live or recorded?', ar: 'الجلسات مباشرة ولا مسجّلة؟' },
      a: { en: 'Both. The lessons are recorded so you can watch on your own time, and each week has one live session for review and questions. The live session is recorded too and posted the same day.', ar: 'الاتنين. الدروس مسجّلة عشان تتفرج في وقتك، وكل أسبوع فيه جلسة مباشرة للمراجعة والأسئلة. الجلسة المباشرة كمان بتتسجّل وبتتنشر في نفس اليوم.' }
    },
    {
      q: { en: 'What happens if I miss a week?', ar: 'لو فوّت أسبوع يحصل إيه؟' },
      a: { en: 'Nothing breaks. The recordings and files stay in your account forever, and the assignment deadline for that week extends automatically by seven days the first time you miss one.', ar: 'مفيش حاجة بتتقفل. التسجيلات والملفات بتفضل في حسابك للأبد، وموعد تسليم الأسبوع ده بيتمدّ أوتوماتيك سبع أيام أول مرة تفوّت.' }
    },
    {
      q: { en: 'Is there real practical work, or only watching?', ar: 'في شغل عملي حقيقي ولا فرجة بس؟' },
      a: { en: 'Every module ends with one brief. On the Premium plan a human reads your submission and writes back on the craft, not just a score. Most learners finish with three to five portfolio ready pieces.', ar: 'كل موديول بينتهي ببريف واحد. في الباقة المميزة حد بيقرا تسليمك ويرد عليك على الحرفة نفسها، مش مجرد درجة. أغلب المتعلّمين بيخلّصوا بـ ٣ لـ ٥ أعمال جاهزة للبورتفوليو.' }
    },
    {
      q: { en: 'Do I get a certificate?', ar: 'هاخد شهادة؟' },
      a: { en: 'Yes. You get a verifiable certificate with a credential ID once you complete every module and submit the final brief. It links to a public page listing what the course covered.', ar: 'أيوه. بتاخد شهادة موثّقة برقم تحقّق لما تخلّص كل الموديولات وتسلّم البريف النهائي. الشهادة بتوصل لصفحة عامة موضّح فيها الكورس غطّى إيه.' }
    },
    {
      q: { en: 'I am outside Egypt. Can I still join?', ar: 'أنا برّه مصر. أقدر أشترك؟' },
      a: { en: 'Yes. Live sessions run at 8 PM Cairo time, which works across the Gulf and most of Europe. All material is online and the recordings cover any session you cannot attend.', ar: 'أيوه. الجلسات المباشرة الساعة ٨ مساءً بتوقيت القاهرة، وده مناسب للخليج وأغلب أوروبا. كل المواد أونلاين والتسجيلات بتغطي أي جلسة متقدرش تحضرها.' }
    },
    {
      q: { en: 'Can my company pay for a team?', ar: 'ممكن الشركة تدفع لفريق كامل؟' },
      a: { en: 'Yes. The Double Seat package covers two people, and for three or more we issue a company invoice with a team rate. Write to team@osolutions.academy and we send it the same day.', ar: 'أيوه. باقة المقعدين بتغطي شخصين، ولتلاتة أو أكتر بنصدر فاتورة للشركة بسعر فريق. ابعت لـ team@osolutions.academy وهنبعتها في نفس اليوم.' }
    },
    {
      q: { en: 'What if the course is not right for me?', ar: 'لو الكورس مش مناسب ليا؟' },
      a: { en: 'Tell us before the third session and we refund the full amount, no forms and no questions. After that we move you to another course in the catalog instead.', ar: 'قولنا قبل الجلسة التالتة وهنرجّع المبلغ كامل، من غير استمارات ولا أسئلة. بعد كده بننقلك لكورس تاني من الكتالوج بدل الاسترجاع.' }
    }
  ];

  /* ---------------- Value props (shared) ---------------- */
  const VALUE = [
    {
      icon: 'refresh',
      t: { en: 'Lifetime updates', ar: 'تحديثات مدى الحياة' },
      d: { en: 'Tools change every quarter. When we re-record a module you get it, at no extra cost, for as long as the course exists.', ar: 'الأدوات بتتغير كل ربع سنة. لما نعيد تسجيل موديول بتاخده من غير أي تكلفة إضافية، طول ما الكورس موجود.' }
    },
    {
      icon: 'users',
      t: { en: 'A room that stays open', ar: 'أوضة بتفضل مفتوحة' },
      d: { en: 'Your cohort channel does not close when the course ends. Alumni post briefs, critiques and job openings in it every week.', ar: 'قناة دفعتك مبتتقفلش لما الكورس يخلص. الخريجين بينشروا فيها بريفات ومراجعات وفرص شغل كل أسبوع.' }
    },
    {
      icon: 'trending',
      t: { en: 'Work you can show', ar: 'شغل تقدر تعرضه' },
      d: { en: 'Every brief is written to be portfolio safe. Real problem, no client NDA, finished to a standard you can put in front of a hiring manager.', ar: 'كل بريف متكتوب عشان يبقى آمن للبورتفوليو. مشكلة حقيقية، من غير اتفاقية سرية، ومنفّذ بمستوى تقدر تحطه قدام مسؤول توظيف.' }
    },
    {
      icon: 'network',
      t: { en: 'Access to the studio', ar: 'وصول للاستوديو' },
      d: { en: 'Top performers each cohort get an introduction to the Osolutions team and first look at freelance briefs we cannot take.', ar: 'الأفضل في كل دفعة بياخدوا تعريف بفريق أوسوليوشنز وأولوية في البريفات الفريلانس اللي مش قادرين ناخدها.' }
    }
  ];

  /* ---------------- Courses ---------------- */
  const COURSES = [
    /* ============ 1. FLAGSHIP ============ */
    {
      id: 'social-systems', cat: 'design', level: 'intermediate',
      cover: 'assets/img/covers/social-design.webp',
      badges: ['bestseller', 'live', 'cert', 'arabic', 'seats'],
      instructor: 'i1',
      title: { en: 'Build a Social Design System That Scales', ar: 'ابني نظام تصميم سوشيال يكبر معاك' },
      tagline: { en: 'Stop redesigning every post. Build the system once, then ship a month of content in a week.', ar: 'بطّل تعيد تصميم كل بوست. ابني النظام مرة واحدة، وبعدها طلّع محتوى شهر في أسبوع.' },
      desc: { en: 'A six week programme that turns scattered post design into one governed system: grid, type scale, colour logic, templates and a handover file your whole team can use.', ar: 'برنامج ٦ أسابيع بيحوّل تصميم البوستات المبعثر لنظام واحد محكوم: جريد، سلم خطوط، منطق ألوان، تمبلتات، وملف تسليم فريقك كله يقدر يشتغل عليه.' },
      price: 8000, weeks: 6, hours: 26, lessonCount: 42,
      students: 1240, rating: 4.9, reviews: 186,
      start: '2026-09-14', seats: { total: 30, left: 7 },
      sessions: ['online','recorded','offline'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'A complete post template kit for six platform sizes, built on one master grid', ar: 'كيت تمبلتات كامل لستة مقاسات منصات، مبني على جريد واحد' },
        { en: 'A type scale and colour logic that a junior can apply without asking you', ar: 'سلم خطوط ومنطق ألوان الجونيور يقدر يطبّقه من غير ما يسألك' },
        { en: 'A monthly content grid you can plan and approve in one sitting', ar: 'جريد محتوى شهري تقدر تخططه وتعتمده في جلسة واحدة' },
        { en: 'A reusable Figma component library with variants and auto layout', ar: 'مكتبة كومبوننتس في فيجما بـ variants و auto layout' },
        { en: 'A one page brand-on-social rulebook for client approval', ar: 'صفحة واحدة قواعد البراند على السوشيال عشان اعتماد العميل' },
        { en: 'A handover pack that survives you leaving the account', ar: 'باكدج تسليم بيفضل شغال حتى لو سبت الحساب' },
        { en: 'A personal QA checklist that catches the errors that reach clients', ar: 'تشيك ليست شخصية بتمسك الأخطاء اللي بتوصل للعميل' }
      ],
      who: [
        { t: { en: 'The designer drowning in requests', ar: 'المصمم الغرقان في الطلبات' },
          d: { en: 'You make good posts but each one starts from nothing. You want a system so the next thirty take a fraction of the time.', ar: 'بتعمل بوستات كويسة بس كل واحد بيبدأ من الصفر. عايز نظام يخلي التلاتين اللي جايين ياخدوا وقت أقل بكتير.' } },
        { t: { en: 'The team lead who cannot scale quality', ar: 'قائد الفريق اللي مش قادر يوسّع الجودة' },
          d: { en: 'Your output doubled and consistency dropped. You need rules a growing team can follow without you in every review.', ar: 'شغلك اتضاعف والاتساق نزل. محتاج قواعد الفريق يمشي عليها من غير ما تكون في كل مراجعة.' } },
        { t: { en: 'The freelancer pitching retainers', ar: 'الفريلانسر اللي بيقدّم ريتينرز' },
          d: { en: 'You want to sell a monthly system, not loose posts. This gives you the deliverable and the language to price it.', ar: 'عايز تبيع نظام شهري مش بوستات متفرقة. ده هيديك المخرج واللغة اللي تسعّر بيها.' } }
      ],
      skills: [
        { en: 'Set a master grid that holds across square, story and landscape without redrawing', ar: 'تضبط جريد أساسي يشتغل على المربع والستوري واللاندسكيب من غير إعادة رسم' },
        { en: 'Build a type scale with real hierarchy instead of three random sizes', ar: 'تبني سلم خطوط بهيراركي حقيقي بدل تلات مقاسات عشوائية' },
        { en: 'Direct or select photography that fits the brand instead of fighting it', ar: 'تخرج أو تختار تصوير يناسب البراند بدل ما يتعارك معاه' },
        { en: 'Write a caption and layout pairing brief a copywriter can work from', ar: 'تكتب بريف يربط الكابشن باللاي أوت والكوبي رايتر يشتغل منه' },
        { en: 'Run a self review that catches spacing, contrast and export errors', ar: 'تعمل مراجعة ذاتية بتمسك أخطاء المسافات والتباين والتصدير' },
        { en: 'Hand a system to another designer and have it survive', ar: 'تسلّم النظام لمصمم تاني ويفضل شغال' }
      ],
      curriculum: [
        { w: 1, t: { en: 'Audit and the honest baseline', ar: 'التدقيق وخط البداية الصادق' },
          s: { en: 'Before you build anything, see exactly what is broken and why.', ar: 'قبل ما تبني أي حاجة، شوف بالظبط إيه اللي باظ وليه.' },
          l: [
            { t: { en: 'How a social system actually fails', ar: 'إزاي نظام السوشيال بيفشل فعلاً' }, d: 14, ty: 'lesson', free: true },
            { t: { en: 'Running a 30 post audit in 40 minutes', ar: 'تدقيق ٣٠ بوست في ٤٠ دقيقة' }, d: 22, ty: 'workshop' },
            { t: { en: 'Reading the brand book for what it does not say', ar: 'تقرا البراند بوك عشان اللي مقالوش' }, d: 17, ty: 'lesson' },
            { t: { en: 'Naming the five rules you are already breaking', ar: 'تسمّي الخمس قواعد اللي بتكسرها أصلاً' }, d: 15, ty: 'lesson' },
            { t: { en: 'Live: audit clinic on your own account', ar: 'مباشر: عيادة تدقيق على حسابك' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: the audit sheet', ar: 'اختبار: شيت التدقيق' }, d: 8, ty: 'quiz' }
          ] },
        { w: 2, t: { en: 'The master grid', ar: 'الجريد الأساسي' },
          s: { en: 'One geometry that carries every size you will ever export.', ar: 'هندسة واحدة بتشيل كل مقاس هتصدّره.' },
          l: [
            { t: { en: 'Margins, columns and the safe area myth', ar: 'الهوامش والأعمدة وخرافة المنطقة الآمنة' }, d: 19, ty: 'lesson', free: true },
            { t: { en: 'Building the 1080 master and deriving the rest', ar: 'تبني ماستر ١٠٨٠ وتشتق منه الباقي' }, d: 26, ty: 'workshop' },
            { t: { en: 'Story, reel cover and landscape without redrawing', ar: 'ستوري وكوفر ريل ولاندسكيب من غير إعادة رسم' }, d: 21, ty: 'workshop' },
            { t: { en: 'Optical alignment beats mathematical alignment', ar: 'المحاذاة البصرية بتغلب الحسابية' }, d: 16, ty: 'lesson' },
            { t: { en: 'Live: grid review and fixes', ar: 'مباشر: مراجعة الجريد والتعديلات' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 01: your master grid file', ar: 'بريف ١: ملف الجريد الأساسي' }, d: 0, ty: 'brief' }
          ] },
        { w: 3, t: { en: 'Type and colour as a system', ar: 'الخط واللون كنظام' },
          s: { en: 'Decisions a junior can repeat, not choices you make by feel.', ar: 'قرارات الجونيور يقدر يكررها، مش اختيارات بالإحساس.' },
          l: [
            { t: { en: 'Type scale: five steps, not fifteen', ar: 'سلم الخطوط: خمس درجات مش خمستاشر' }, d: 20, ty: 'lesson' },
            { t: { en: 'Arabic and Latin on one line without pain', ar: 'عربي ولاتيني في سطر واحد من غير وجع' }, d: 24, ty: 'workshop' },
            { t: { en: 'Colour roles: brand, surface, signal, mute', ar: 'أدوار اللون: براند، سطح، إشارة، هادي' }, d: 18, ty: 'lesson' },
            { t: { en: 'Contrast that passes on a phone in the sun', ar: 'تباين يعدّي على موبايل في الشمس' }, d: 14, ty: 'lesson' },
            { t: { en: 'Live: type and colour clinic', ar: 'مباشر: عيادة الخط واللون' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: scale and roles', ar: 'اختبار: السلم والأدوار' }, d: 8, ty: 'quiz' }
          ] },
        { w: 4, t: { en: 'Templates and components', ar: 'التمبلتات والكومبوننتس' },
          s: { en: 'Turn the rules into files other people can actually use.', ar: 'حوّل القواعد لملفات الناس التانية تقدر تستخدمها فعلاً.' },
          l: [
            { t: { en: 'Auto layout that does not collapse', ar: 'أوتو لاي أوت ما بينهارش' }, d: 25, ty: 'workshop' },
            { t: { en: 'Variants for the eight post types you repeat', ar: 'Variants للتمن أنواع بوستات بتتكرر' }, d: 27, ty: 'workshop' },
            { t: { en: 'Text styles, colour styles and why naming matters', ar: 'ستايلات النص واللون وليه التسمية مهمة' }, d: 16, ty: 'lesson' },
            { t: { en: 'Export presets and the file naming contract', ar: 'إعدادات التصدير وعقد تسمية الملفات' }, d: 13, ty: 'lesson' },
            { t: { en: 'Live: component library review', ar: 'مباشر: مراجعة مكتبة الكومبوننتس' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 02: the component library', ar: 'بريف ٢: مكتبة الكومبوننتس' }, d: 0, ty: 'brief' }
          ] },
        { w: 5, t: { en: 'Content planning and the monthly grid', ar: 'تخطيط المحتوى والجريد الشهري' },
          s: { en: 'Design the month, not the post.', ar: 'صمّم الشهر، مش البوست.' },
          l: [
            { t: { en: 'Pillars, rhythm and the nine square view', ar: 'الركائز والإيقاع ومنظر التسع مربعات' }, d: 18, ty: 'lesson' },
            { t: { en: 'Planning a month in one working session', ar: 'تخطيط شهر في جلسة شغل واحدة' }, d: 28, ty: 'workshop' },
            { t: { en: 'Working with a copywriter without ping pong', ar: 'الشغل مع الكوبي رايتر من غير بينج بونج' }, d: 17, ty: 'lesson' },
            { t: { en: 'Getting client approval on the system, not the post', ar: 'اعتماد العميل على النظام مش على البوست' }, d: 21, ty: 'lesson' },
            { t: { en: 'Live: monthly grid critique', ar: 'مباشر: نقد الجريد الشهري' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: planning logic', ar: 'اختبار: منطق التخطيط' }, d: 8, ty: 'quiz' }
          ] },
        { w: 6, t: { en: 'Handover, QA and defending the work', ar: 'التسليم والمراجعة والدفاع عن الشغل' },
          s: { en: 'A system nobody can follow is not a system.', ar: 'النظام اللي محدش يقدر يمشي عليه مش نظام.' },
          l: [
            { t: { en: 'The one page rulebook', ar: 'صفحة القواعد الواحدة' }, d: 19, ty: 'workshop' },
            { t: { en: 'A QA checklist that catches real errors', ar: 'تشيك ليست بتمسك أخطاء حقيقية' }, d: 15, ty: 'lesson' },
            { t: { en: 'Presenting a system to a non designer', ar: 'تعرض نظام على حد مش مصمم' }, d: 22, ty: 'lesson' },
            { t: { en: 'Handing over so the account survives you', ar: 'تسلّم بحيث الحساب يفضل شغال بعدك' }, d: 18, ty: 'lesson' },
            { t: { en: 'Live: final presentations', ar: 'مباشر: العروض النهائية' }, d: 90, ty: 'live' },
            { t: { en: 'Final brief: the full system pack', ar: 'البريف النهائي: باكدج النظام كامل' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s1.webp', name: { en: 'Mariam A.', ar: 'مريم ع.' }, role: { en: 'Social Designer', ar: 'مصممة سوشيال' }, r: 5,
          txt: { en: 'I came in making nice posts and left running a system. The week four component library alone cut my monthly delivery from nine days to four. Karim reviews like a director, not a teacher.', ar: 'دخلت بعمل بوستات حلوة وخرجت بأشغّل نظام. مكتبة الكومبوننتس في الأسبوع الرابع لوحدها قصّرت تسليمي الشهري من ٩ أيام لـ ٤. كريم بيراجع كمخرج، مش كمدرّس.' } },
        { av: 'assets/img/people/s2.webp', name: { en: 'Ahmed S.', ar: 'أحمد س.' }, role: { en: 'Art Director', ar: 'مخرج فني' }, r: 5,
          txt: { en: 'The honest part is week one. Auditing my own last thirty posts was uncomfortable and it was the most useful hour of the whole course. Everything after that had a reason.', ar: 'الجزء الصادق هو الأسبوع الأول. تدقيق آخر تلاتين بوست ليا كان مش مريح وكان أنفع ساعة في الكورس كله. كل حاجة بعد كده بقى ليها سبب.' } },
        { av: 'assets/img/people/s3.webp', name: { en: 'Farida M.', ar: 'فريدة م.' }, role: { en: 'Freelance Designer', ar: 'مصممة فريلانس' }, r: 5,
          txt: { en: 'I used the handover pack in a pitch two weeks after finishing and won a retainer with it. The course pays for itself if you actually do the briefs.', ar: 'استخدمت باكدج التسليم في بيتش بعد أسبوعين من الانتهاء وكسبت بيه ريتينر. الكورس بيرجّع فلوسه لو عملت البريفات فعلاً.' } }
      ]
    },

    /* ============ 2. MOTION ============ */
    {
      id: 'motion-brand', cat: 'motion', level: 'intermediate',
      cover: 'assets/img/covers/motion.webp',
      badges: ['live', 'cert', 'arabic', 'portfolio'],
      instructor: 'i3',
      title: { en: 'Motion Design for Brands', ar: 'موشن ديزاين للبراندات' },
      tagline: { en: 'Timing, type and restraint. Motion that carries a brand instead of decorating it.', ar: 'توقيت وخطوط وانضباط. موشن بيشيل البراند مش بيزوّقه.' },
      desc: { en: 'Five weeks in After Effects taking one idea from a six second bumper to a forty second explainer, with a motion language document you can hand to any editor.', ar: 'خمس أسابيع في أفتر إفكتس بتاخد فكرة واحدة من بامبر ٦ ثواني لإكسبلينر ٤٠ ثانية، مع دوكيومنت لغة موشن تقدر تسلّمه لأي مونتير.' },
      price: 9500, weeks: 5, hours: 24, lessonCount: 34,
      students: 860, rating: 4.8, reviews: 121,
      start: '2026-09-21', seats: { total: 24, left: 11 },
      sessions: ['online','recorded'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'A six second brand bumper finished to broadcast standard', ar: 'بامبر براند ٦ ثواني منفّذ بمستوى بث' },
        { en: 'A kinetic typography sequence in Arabic and Latin', ar: 'سيكوينس تايبوجرافي متحركة بالعربي واللاتيني' },
        { en: 'A reusable easing and timing library saved as presets', ar: 'مكتبة إيزينج وتوقيت محفوظة كبريستس' },
        { en: 'A motion language document that keeps editors consistent', ar: 'دوكيومنت لغة موشن بيخلي المونتيرين متسقين' },
        { en: 'A forty second explainer built from the same system', ar: 'إكسبلينر ٤٠ ثانية مبني من نفس النظام' },
        { en: 'A render and delivery setup that stops last minute panic', ar: 'إعداد رندر وتسليم بيمنع بهدلة آخر لحظة' }
      ],
      who: [
        { t: { en: 'The designer moving into motion', ar: 'المصمم اللي بيتحرك للموشن' },
          d: { en: 'You know layout and type. You want the same control in time, without learning by copying tutorials.', ar: 'عارف اللاي أوت والخط. عايز نفس التحكم في الزمن، من غير ما تتعلم بتقليد التوتوريالز.' } },
        { t: { en: 'The motion designer stuck on presets', ar: 'مصمم الموشن الواقف عند البريستس' },
          d: { en: 'Your work moves but it does not feel intentional. This is the week by week fix for timing and restraint.', ar: 'شغلك بيتحرك بس مش حاسس إنه مقصود. ده العلاج أسبوع بأسبوع للتوقيت والانضباط.' } },
        { t: { en: 'The team lead standardising output', ar: 'قائد الفريق اللي بيوحّد المخرجات' },
          d: { en: 'Three editors, three different feels. You need one motion language everyone can apply.', ar: 'تلات مونتيرين وتلات إحساسات مختلفة. محتاج لغة موشن واحدة الكل يطبّقها.' } }
      ],
      skills: [
        { en: 'Read a timing curve and know why a move feels cheap', ar: 'تقرا منحنى التوقيت وتعرف ليه الحركة حاسة إنها رخيصة' },
        { en: 'Animate Arabic type without breaking the letterforms', ar: 'تحرّك خط عربي من غير ما تكسر شكل الحروف' },
        { en: 'Build shape systems that scale to any duration', ar: 'تبني أنظمة أشكال بتشتغل على أي مدة' },
        { en: 'Cut sound and picture so they land on the same frame', ar: 'تقص الصوت والصورة عشان ينزلوا على نفس الفريم' },
        { en: 'Set up a project another editor can open and continue', ar: 'تجهّز بروجكت مونتير تاني يقدر يفتحه ويكمّل' },
        { en: 'Deliver every platform spec from one master comp', ar: 'تسلّم كل مقاسات المنصات من كومب ماستر واحد' }
      ],
      curriculum: [
        { w: 1, t: { en: 'Timing is the whole craft', ar: 'التوقيت هو الحرفة كلها' },
          s: { en: 'Before effects, before plugins: what makes a move feel expensive.', ar: 'قبل الإفكتس وقبل البلج إنز: إيه اللي بيخلي الحركة حاسة إنها غالية.' },
          l: [
            { t: { en: 'Ease, overshoot and the two frame rule', ar: 'الإيز والأوفرشوت وقاعدة الفريمين' }, d: 21, ty: 'lesson', free: true },
            { t: { en: 'Reading reference frame by frame', ar: 'تقرا الريفرنس فريم بفريم' }, d: 18, ty: 'workshop' },
            { t: { en: 'Building your own easing library', ar: 'تبني مكتبة إيزينج خاصة بيك' }, d: 24, ty: 'workshop' },
            { t: { en: 'Live: timing clinic', ar: 'مباشر: عيادة التوقيت' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: curves', ar: 'اختبار: المنحنيات' }, d: 8, ty: 'quiz' }
          ] },
        { w: 2, t: { en: 'The six second bumper', ar: 'بامبر الست ثواني' },
          s: { en: 'The hardest format. If the idea works here it works anywhere.', ar: 'أصعب فورمات. لو الفكرة نفعت هنا هتنفع في أي مكان.' },
          l: [
            { t: { en: 'Anatomy of a logo reveal that is not tired', ar: 'تشريح لوجو ريفيل مش مستهلك' }, d: 20, ty: 'lesson' },
            { t: { en: 'Shape layers, trims and masks in practice', ar: 'شيب لايرز وترِمز وماسكات عملياً' }, d: 26, ty: 'workshop' },
            { t: { en: 'Sound design for six seconds', ar: 'ساوند ديزاين لست ثواني' }, d: 17, ty: 'lesson' },
            { t: { en: 'Live: bumper review', ar: 'مباشر: مراجعة البامبر' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 01: brand bumper', ar: 'بريف ١: بامبر البراند' }, d: 0, ty: 'brief' }
          ] },
        { w: 3, t: { en: 'Kinetic type, Arabic and Latin', ar: 'تايبوجرافي متحركة، عربي ولاتيني' },
          s: { en: 'The part everyone gets wrong, taught by someone from print.', ar: 'الجزء اللي الكل بيغلط فيه، بتشرحه واحدة جاية من البرنت.' },
          l: [
            { t: { en: 'Why Arabic breaks in After Effects and how to win', ar: 'ليه العربي بيتكسر في أفتر إفكتس وإزاي تكسب' }, d: 25, ty: 'workshop' },
            { t: { en: 'Animating on the baseline, not the bounding box', ar: 'تحرّك على خط الأساس مش على الصندوق' }, d: 22, ty: 'workshop' },
            { t: { en: 'Reading speed and how long a line must hold', ar: 'سرعة القراءة والسطر لازم يقعد قد إيه' }, d: 15, ty: 'lesson' },
            { t: { en: 'Live: type in motion critique', ar: 'مباشر: نقد الخط في الحركة' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: legibility', ar: 'اختبار: وضوح القراءة' }, d: 8, ty: 'quiz' }
          ] },
        { w: 4, t: { en: 'The forty second explainer', ar: 'إكسبلينر الأربعين ثانية' },
          s: { en: 'Same system, longer form, no new tricks needed.', ar: 'نفس النظام، فورم أطول، من غير حيل جديدة.' },
          l: [
            { t: { en: 'Storyboarding for motion, not for film', ar: 'ستوري بورد للموشن مش للفيلم' }, d: 19, ty: 'lesson' },
            { t: { en: 'Transitions that carry meaning', ar: 'ترانزيشنز بتشيل معنى' }, d: 23, ty: 'workshop' },
            { t: { en: 'Pacing a script against a voiceover', ar: 'ضبط إيقاع سكريبت مع صوت معلّق' }, d: 21, ty: 'workshop' },
            { t: { en: 'Live: rough cut review', ar: 'مباشر: مراجعة المونتاج الأولي' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 02: explainer rough', ar: 'بريف ٢: نسخة أولية من الإكسبلينر' }, d: 0, ty: 'brief' }
          ] },
        { w: 5, t: { en: 'Systemise and deliver', ar: 'حوّله لنظام وسلّم' },
          s: { en: 'Make it repeatable by people who are not you.', ar: 'خليه قابل للتكرار من ناس مش إنت.' },
          l: [
            { t: { en: 'Writing a motion language document', ar: 'تكتب دوكيومنت لغة الموشن' }, d: 24, ty: 'workshop' },
            { t: { en: 'Project hygiene so another editor can continue', ar: 'ترتيب البروجكت عشان مونتير تاني يكمّل' }, d: 16, ty: 'lesson' },
            { t: { en: 'Render, compress and every platform spec', ar: 'رندر وضغط وكل مقاسات المنصات' }, d: 18, ty: 'lesson' },
            { t: { en: 'Live: final presentations', ar: 'مباشر: العروض النهائية' }, d: 90, ty: 'live' },
            { t: { en: 'Final brief: motion pack', ar: 'البريف النهائي: باكدج الموشن' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s4.webp', name: { en: 'Omar K.', ar: 'عمر ك.' }, role: { en: 'Motion Designer', ar: 'مصمم موشن' }, r: 5,
          txt: { en: 'Week three fixed a problem I have had for three years. Arabic type in After Effects finally behaves. I rebuilt two old projects the same weekend.', ar: 'الأسبوع التالت حلّ مشكلة قاعدة معايا تلات سنين. الخط العربي في أفتر إفكتس بقى بيتصرف صح. أعدت بناء مشروعين قدام في نفس الويك إند.' } },
        { av: 'assets/img/people/s5.webp', name: { en: 'Nada H.', ar: 'ندى ح.' }, role: { en: 'Video Editor', ar: 'مونتيرة' }, r: 5,
          txt: { en: 'Salma teaches restraint, which nobody teaches. My work got quieter and much better. The easing library is now in every project I open.', ar: 'سلمى بتعلّم الانضباط، وده محدش بيعلّمه. شغلي بقى أهدى وأحسن بكتير. مكتبة الإيزينج بقت في كل بروجكت بفتحه.' } },
        { av: 'assets/img/people/s2.webp', name: { en: 'Ziad R.', ar: 'زياد ر.' }, role: { en: 'Creative Lead', ar: 'قائد إبداعي' }, r: 4,
          txt: { en: 'The motion language document alone justified sending two people from my team. Our three editors finally produce work that looks related.', ar: 'دوكيومنت لغة الموشن لوحده كان مبرر إني أبعت اتنين من فريقي. تلات المونتيرين عندنا بقوا بيطلّعوا شغل شبه بعضه أخيراً.' } }
      ]
    },

    /* ============ 3. BRAND ============ */
    {
      id: 'brand-systems', cat: 'brand', level: 'advanced',
      cover: 'assets/img/covers/brand.webp',
      badges: ['bestseller', 'live', 'cert', 'mentor'],
      instructor: 'i2',
      title: { en: 'Brand Identity Systems', ar: 'أنظمة الهوية البصرية' },
      tagline: { en: 'From a mark to a manual. Build identities that hold up on a Thursday afternoon.', ar: 'من الشعار للمانيوال. ابني هويات تصمد يوم خميس الضهر.' },
      desc: { en: 'Six weeks taking a real brief through strategy, naming territory, mark, system, application and a manual another designer can execute without you.', ar: 'ستة أسابيع بتاخد بريف حقيقي من الاستراتيجية لمنطقة التسمية للشعار للنظام للتطبيق ولمانيوال مصمم تاني ينفّذه من غيرك.' },
      price: 11000, weeks: 6, hours: 28, lessonCount: 38,
      students: 640, rating: 4.9, reviews: 94,
      start: '2026-10-05', seats: { total: 20, left: 4 },
      sessions: ['offline','online','recorded'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'A written strategy page that survives client questions', ar: 'صفحة استراتيجية مكتوبة بتصمد قدام أسئلة العميل' },
        { en: 'A primary mark with a real construction logic', ar: 'شعار أساسي بمنطق بناء حقيقي' },
        { en: 'A full type and colour system with usage rules', ar: 'نظام خط ولون كامل بقواعد استخدام' },
        { en: 'Twelve applications from stationery to social', ar: 'اتناشر تطبيق من المطبوعات للسوشيال' },
        { en: 'A brand manual built as a working file, not a PDF nobody opens', ar: 'براند مانيوال كملف شغّال، مش PDF محدش بيفتحه' },
        { en: 'A presentation deck that sells the system, not the logo', ar: 'ديك بيبيع النظام، مش الشعار' }
      ],
      who: [
        { t: { en: 'The designer whose logos die in application', ar: 'المصمم اللي شعاراته بتموت في التطبيق' },
          d: { en: 'Your marks look great in the presentation and fall apart on a business card. This is the systems layer you are missing.', ar: 'شعاراتك حلوة في العرض وبتتفكك على كارت. ده طبقة النظام اللي ناقصاك.' } },
        { t: { en: 'The studio owner pricing identity work', ar: 'صاحب الاستوديو اللي بيسعّر شغل الهوية' },
          d: { en: 'You want to move from a logo fee to an identity engagement. This gives you the scope and the deliverables to charge for it.', ar: 'عايز تنقل من سعر شعار لمشروع هوية. ده هيديك النطاق والمخرجات اللي تسعّرها.' } },
        { t: { en: 'The in-house designer holding a brand alone', ar: 'المصمم الداخلي الماسك براند لوحده' },
          d: { en: 'Everyone edits the logo and nobody asks. You need rules with enough authority to point at.', ar: 'كل واحد بيعدّل في الشعار ومحدش بيسأل. محتاج قواعد ليها سلطة تشاور عليها.' } }
      ],
      skills: [
        { en: 'Run a positioning session that produces decisions, not sticky notes', ar: 'تدير جلسة تموضع بتطلّع قرارات، مش ورق لاصق' },
        { en: 'Construct a mark on a grid you can defend', ar: 'تبني شعار على جريد تقدر تدافع عنه' },
        { en: 'Choose type for a system, not for a mood board', ar: 'تختار خط لنظام، مش لمود بورد' },
        { en: 'Build colour with roles and accessibility built in', ar: 'تبني لون بأدوار وإتاحة من الأساس' },
        { en: 'Write usage rules a non designer will follow', ar: 'تكتب قواعد استخدام حد مش مصمم هيمشي عليها' },
        { en: 'Present identity work so it gets approved on the first pass', ar: 'تعرض شغل هوية عشان يتعتمد من أول مرة' }
      ],
      curriculum: [
        { w: 1, t: { en: 'Strategy before shapes', ar: 'الاستراتيجية قبل الأشكال' },
          s: { en: 'The page that decides everything you draw later.', ar: 'الصفحة اللي بتحدد كل حاجة هترسمها بعدين.' },
          l: [
            { t: { en: 'What a positioning line has to do', ar: 'سطر التموضع لازم يعمل إيه' }, d: 18, ty: 'lesson', free: true },
            { t: { en: 'Running the discovery workshop', ar: 'تدير ورشة الاستكشاف' }, d: 26, ty: 'workshop' },
            { t: { en: 'Competitive audit that is not a mood board', ar: 'تدقيق منافسين مش مود بورد' }, d: 21, ty: 'workshop' },
            { t: { en: 'Live: strategy page review', ar: 'مباشر: مراجعة صفحة الاستراتيجية' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 01: the one page strategy', ar: 'بريف ١: صفحة الاستراتيجية' }, d: 0, ty: 'brief' }
          ] },
        { w: 2, t: { en: 'Territory and the mark', ar: 'المنطقة والشعار' },
          s: { en: 'Three territories, one decision, then real construction.', ar: 'تلات مناطق، قرار واحد، وبعدين بناء حقيقي.' },
          l: [
            { t: { en: 'Building three honest territories', ar: 'تبني تلات مناطق صادقة' }, d: 22, ty: 'workshop' },
            { t: { en: 'Construction grids and optical correction', ar: 'جريدات البناء والتصحيح البصري' }, d: 28, ty: 'workshop' },
            { t: { en: 'The small size test that kills most marks', ar: 'اختبار المقاس الصغير اللي بيقتل أغلب الشعارات' }, d: 15, ty: 'lesson' },
            { t: { en: 'Live: mark critique', ar: 'مباشر: نقد الشعار' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: construction', ar: 'اختبار: البناء' }, d: 8, ty: 'quiz' }
          ] },
        { w: 3, t: { en: 'Type, colour and the system layer', ar: 'الخط واللون وطبقة النظام' },
          s: { en: 'Where an identity becomes usable by other people.', ar: 'المكان اللي الهوية بتبقى فيه قابلة للاستخدام من غيرك.' },
          l: [
            { t: { en: 'Pairing Arabic and Latin properly', ar: 'مزاوجة العربي واللاتيني صح' }, d: 24, ty: 'workshop' },
            { t: { en: 'Colour roles and accessibility from day one', ar: 'أدوار اللون والإتاحة من أول يوم' }, d: 20, ty: 'lesson' },
            { t: { en: 'Secondary elements that do the heavy lifting', ar: 'العناصر الثانوية اللي بتشيل الشغل' }, d: 19, ty: 'workshop' },
            { t: { en: 'Live: system review', ar: 'مباشر: مراجعة النظام' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: system logic', ar: 'اختبار: منطق النظام' }, d: 8, ty: 'quiz' }
          ] },
        { w: 4, t: { en: 'Application, twelve times', ar: 'التطبيق، اتناشر مرة' },
          s: { en: 'An identity is only proven in application.', ar: 'الهوية بتثبت في التطبيق بس.' },
          l: [
            { t: { en: 'Stationery and the boring items that matter', ar: 'المطبوعات والحاجات المملة المهمة' }, d: 20, ty: 'workshop' },
            { t: { en: 'Signage, packaging and physical constraints', ar: 'اللافتات والتغليف والقيود المادية' }, d: 23, ty: 'workshop' },
            { t: { en: 'Digital, social and the small screen', ar: 'الديجيتال والسوشيال والشاشة الصغيرة' }, d: 21, ty: 'workshop' },
            { t: { en: 'Live: application review', ar: 'مباشر: مراجعة التطبيقات' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 02: twelve applications', ar: 'بريف ٢: اتناشر تطبيق' }, d: 0, ty: 'brief' }
          ] },
        { w: 5, t: { en: 'The manual', ar: 'المانيوال' },
          s: { en: 'Written so a junior on a Thursday afternoon gets it right.', ar: 'مكتوب بحيث جونيور يوم خميس الضهر يعملها صح.' },
          l: [
            { t: { en: 'What a manual must contain and what to cut', ar: 'المانيوال لازم يحتوي إيه وتشيل إيه' }, d: 22, ty: 'lesson' },
            { t: { en: 'Writing rules people actually follow', ar: 'تكتب قواعد الناس فعلاً بتمشي عليها' }, d: 19, ty: 'workshop' },
            { t: { en: 'Building it as a living file', ar: 'تبنيه كملف حي' }, d: 25, ty: 'workshop' },
            { t: { en: 'Live: manual clinic', ar: 'مباشر: عيادة المانيوال' }, d: 60, ty: 'live' }
          ] },
        { w: 6, t: { en: 'Selling the system', ar: 'بيع النظام' },
          s: { en: 'Approval is a design problem too.', ar: 'الاعتماد كمان مشكلة تصميم.' },
          l: [
            { t: { en: 'Structuring the presentation', ar: 'هيكلة العرض' }, d: 21, ty: 'lesson' },
            { t: { en: 'Handling the four objections you will get', ar: 'التعامل مع الأربع اعتراضات اللي هتيجي' }, d: 18, ty: 'lesson' },
            { t: { en: 'Scoping and pricing identity work', ar: 'تحديد نطاق وتسعير شغل الهوية' }, d: 24, ty: 'lesson' },
            { t: { en: 'Live: final presentations', ar: 'مباشر: العروض النهائية' }, d: 90, ty: 'live' },
            { t: { en: 'Final brief: the identity pack', ar: 'البريف النهائي: باكدج الهوية' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s2.webp', name: { en: 'Youssef T.', ar: 'يوسف ت.' }, role: { en: 'Brand Designer', ar: 'مصمم هوية' }, r: 5,
          txt: { en: 'I have taken three identity courses. This is the only one that spent a whole week on the manual, which is the part clients actually live with.', ar: 'خدت تلات كورسات هوية. ده الوحيد اللي قضى أسبوع كامل على المانيوال، وده الجزء اللي العميل بيعيش بيه فعلاً.' } },
        { av: 'assets/img/people/s5.webp', name: { en: 'Rana E.', ar: 'رنا إ.' }, role: { en: 'Studio Owner', ar: 'صاحبة استوديو' }, r: 5,
          txt: { en: 'I raised my identity fee by sixty percent after this and closed the next two projects at the new rate. The scoping lesson in week six is worth the ticket.', ar: 'رفعت سعر الهوية عندي ستين في المية بعد الكورس وقفلت المشروعين الجايين بالسعر الجديد. درس تحديد النطاق في الأسبوع السادس لوحده يستاهل السعر.' } },
        { av: 'assets/img/people/s4.webp', name: { en: 'Kareem D.', ar: 'كريم د.' }, role: { en: 'In-house Designer', ar: 'مصمم داخلي' }, r: 5,
          txt: { en: 'Nour is direct in review. It stung for two weeks and then my work changed. That is the whole point.', ar: 'نور مباشرة في المراجعة. وجعت أسبوعين وبعدين شغلي اتغير. ودي الفكرة كلها.' } }
      ]
    },

    /* ============ 4. AI ============ */
    {
      id: 'ai-creative', cat: 'ai', level: 'beginner',
      cover: 'assets/img/covers/ai-creative.webp',
      badges: ['new', 'recorded', 'cert', 'updated', 'team'],
      instructor: 'i4',
      title: { en: 'AI for Creative Teams', ar: 'الذكاء الاصطناعي لفرق الكرييتف' },
      tagline: { en: 'It drafts, you direct. A working AI pipeline for a real studio, not a prompt list.', ar: 'هو بيسوّد وإنت بتخرج. بايبلاين AI شغّال لاستوديو حقيقي، مش لستة برومبتات.' },
      desc: { en: 'Three weeks building the exact generative workflow Osolutions uses for research, mockups, retouch and upscale, including where AI must not be used and why.', ar: 'تلات أسابيع بتبني نفس الـ workflow التوليدي اللي أوسوليوشنز بتستخدمه في البحث والموك أب والريتاتش والتكبير، وكمان إمتى ممنوع تستخدم AI وليه.' },
      price: 5500, weeks: 3, hours: 14, lessonCount: 26,
      students: 2260, rating: 4.7, reviews: 288,
      start: '2026-09-07', seats: { total: 60, left: 23 },
      sessions: ['recorded','online'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'A repeatable prompt structure that survives model updates', ar: 'هيكل برومبت متكرر بيصمد مع تحديثات الموديلات' },
        { en: 'A moodboard and research pipeline that takes hours instead of days', ar: 'بايبلاين مود بورد وبحث بياخد ساعات بدل أيام' },
        { en: 'A mockup workflow for pitches with no stock budget', ar: 'workflow موك أب للبيتشات من غير ميزانية ستوك' },
        { en: 'A retouch and upscale chain that keeps detail honest', ar: 'سلسلة ريتاتش وتكبير بتحافظ على التفاصيل' },
        { en: 'A written team policy on what AI may and may not touch', ar: 'سياسة فريق مكتوبة عن AI يلمس إيه وميلمسش إيه' },
        { en: 'A cost and time comparison you can show your manager', ar: 'مقارنة تكلفة ووقت تعرضها على مديرك' }
      ],
      who: [
        { t: { en: 'The designer who tried AI and stopped', ar: 'المصمم اللي جرّب AI ووقف' },
          d: { en: 'You got noisy results and went back to the old way. The problem was process, not talent.', ar: 'طلعت نتايج مشوشة ورجعت للطريقة القديمة. المشكلة كانت في العملية مش في الموهبة.' } },
        { t: { en: 'The team lead writing the rules', ar: 'قائد الفريق اللي بيكتب القواعد' },
          d: { en: 'Your team uses AI inconsistently and you have no policy. Week three is written for you.', ar: 'فريقك بيستخدم AI بشكل غير متسق ومفيش عندك سياسة. الأسبوع التالت متكتب ليك.' } },
        { t: { en: 'The freelancer competing on speed', ar: 'الفريلانسر اللي بيتنافس بالسرعة' },
          d: { en: 'You need to pitch more with the same hours. This is where the hours come from.', ar: 'محتاج تقدّم بيتشات أكتر بنفس الساعات. من هنا الساعات بتيجي.' } }
      ],
      skills: [
        { en: 'Structure a prompt in layers so you can debug it', ar: 'تبني برومبت بطبقات عشان تقدر تصلّحه' },
        { en: 'Use references properly instead of describing endlessly', ar: 'تستخدم الريفرنسز صح بدل الوصف اللانهائي' },
        { en: 'Keep a character or product consistent across a set', ar: 'تحافظ على ثبات شخصية أو منتج عبر مجموعة' },
        { en: 'Fix hands, text and edges without regenerating everything', ar: 'تصلّح الأيادي والنص والحواف من غير إعادة توليد الكل' },
        { en: 'Judge when a generated asset is not good enough to ship', ar: 'تحكم إمتى الأصل المولّد مش كويس كفاية للتسليم' },
        { en: 'Explain to a client what was generated and what was made', ar: 'تشرح للعميل إيه اللي اتولّد وإيه اللي اتعمل' }
      ],
      curriculum: [
        { w: 1, t: { en: 'The mental model', ar: 'النموذج الذهني' },
          s: { en: 'Why your prompts fail, in plain language.', ar: 'ليه البرومبتات بتاعتك بتفشل، بلغة بسيطة.' },
          l: [
            { t: { en: 'What the model is actually doing', ar: 'الموديل بيعمل إيه فعلاً' }, d: 16, ty: 'lesson', free: true },
            { t: { en: 'Prompting in layers: subject, craft, constraint', ar: 'برومبت بطبقات: الموضوع، الحرفة، القيد' }, d: 22, ty: 'workshop' },
            { t: { en: 'References beat adjectives, every time', ar: 'الريفرنسز بتغلب الصفات، في كل مرة' }, d: 19, ty: 'workshop' },
            { t: { en: 'Choosing a model for the job', ar: 'اختيار الموديل المناسب للشغلانة' }, d: 14, ty: 'lesson' },
            { t: { en: 'Checkpoint: prompt structure', ar: 'اختبار: هيكل البرومبت' }, d: 8, ty: 'quiz' }
          ] },
        { w: 2, t: { en: 'The studio pipeline', ar: 'بايبلاين الاستوديو' },
          s: { en: 'Research, mockup, retouch, upscale, deliver.', ar: 'بحث، موك أب، ريتاتش، تكبير، تسليم.' },
          l: [
            { t: { en: 'Moodboards and territory in one afternoon', ar: 'مود بوردز ومناطق في بعد ضهر واحد' }, d: 21, ty: 'workshop' },
            { t: { en: 'Product and character consistency across a set', ar: 'ثبات المنتج والشخصية عبر مجموعة' }, d: 26, ty: 'workshop' },
            { t: { en: 'Retouch, inpaint and the edges nobody checks', ar: 'ريتاتش وإنبينت والحواف اللي محدش بيراجعها' }, d: 23, ty: 'workshop' },
            { t: { en: 'Upscaling without inventing detail', ar: 'تكبير من غير اختراع تفاصيل' }, d: 17, ty: 'lesson' },
            { t: { en: 'Brief 01: a full pitch visual set', ar: 'بريف ١: مجموعة فيجوالز بيتش كاملة' }, d: 0, ty: 'brief' }
          ] },
        { w: 3, t: { en: 'Judgement and policy', ar: 'الحكم والسياسة' },
          s: { en: 'The part that keeps you out of trouble.', ar: 'الجزء اللي بيبعدك عن المشاكل.' },
          l: [
            { t: { en: 'When AI must not be used', ar: 'إمتى ممنوع تستخدم AI' }, d: 20, ty: 'lesson' },
            { t: { en: 'Likeness, ownership and client disclosure', ar: 'الشبه والملكية والإفصاح للعميل' }, d: 22, ty: 'lesson' },
            { t: { en: 'Writing your team policy', ar: 'تكتب سياسة فريقك' }, d: 24, ty: 'workshop' },
            { t: { en: 'Measuring the time you actually saved', ar: 'تقيس الوقت اللي وفّرته فعلاً' }, d: 15, ty: 'lesson' },
            { t: { en: 'Final brief: pipeline and policy', ar: 'البريف النهائي: البايبلاين والسياسة' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s3.webp', name: { en: 'Hana M.', ar: 'هنا م.' }, role: { en: 'Senior Designer', ar: 'مصممة سينيور' }, r: 5,
          txt: { en: 'The layered prompt structure was the unlock. I stopped writing paragraphs and started getting what I asked for on the second try instead of the twentieth.', ar: 'هيكل البرومبت بطبقات كان المفتاح. بطّلت أكتب فقرات وبقيت أوصل للي عايزاه من التانية بدل العشرين.' } },
        { av: 'assets/img/people/s2.webp', name: { en: 'Sherif A.', ar: 'شريف ع.' }, role: { en: 'Creative Director', ar: 'مدير إبداعي' }, r: 4,
          txt: { en: 'Week three is the reason I sent my whole team. Having a written policy ended a running argument we had all year.', ar: 'الأسبوع التالت هو سبب إني بعت فريقي كله. وجود سياسة مكتوبة أنهى خناقة قاعدة معانا السنة كلها.' } },
        { av: 'assets/img/people/s1.webp', name: { en: 'Laila F.', ar: 'ليلى ف.' }, role: { en: 'Junior Designer', ar: 'مصممة جونيور' }, r: 5,
          txt: { en: 'Short course, no filler. I did all three weeks in nine days and rebuilt my portfolio mockups with it.', ar: 'كورس قصير من غير حشو. عملت التلات أسابيع في تسع أيام وأعدت بناء الموك أبس في البورتفوليو بيه.' } }
      ]
    },

    /* ============ 5. PERFORMANCE ============ */
    {
      id: 'perf-creative', cat: 'performance', level: 'intermediate',
      cover: 'assets/img/covers/performance.webp',
      badges: ['bestseller', 'live', 'cert', 'seats'],
      instructor: 'i5',
      title: { en: 'Performance Creative That Converts', ar: 'كرييتف أداء بيحوّل' },
      tagline: { en: 'Design as a testable system. Build hooks, read the data, kill what is dying.', ar: 'التصميم كنظام قابل للاختبار. ابني هوكس، اقرا الداتا، واقتل اللي بيموت.' },
      desc: { en: 'Four weeks connecting the design desk to the media desk: hook libraries, variant systems, UGC direction and a reading habit that tells you what to make next.', ar: 'أربع أسابيع بتوصّل مكتب التصميم بمكتب الميديا: مكتبات هوكس، أنظمة variants، إخراج UGC، وعادة قراءة بتقولك تعمل إيه بعد كده.' },
      price: 8500, weeks: 4, hours: 20, lessonCount: 30,
      students: 980, rating: 4.8, reviews: 143,
      start: '2026-09-28', seats: { total: 28, left: 9 },
      sessions: ['online','recorded'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'A hook library of twenty openings sorted by why they work', ar: 'مكتبة هوكس فيها عشرين بداية مرتّبة حسب سبب نجاحها' },
        { en: 'A variant system that produces twelve ads from one concept', ar: 'نظام variants بيطلّع اتناشر إعلان من فكرة واحدة' },
        { en: 'A UGC brief a creator can shoot without a call', ar: 'بريف UGC الكرييتور يصوّر منه من غير مكالمة' },
        { en: 'A creative testing sheet you can run every week', ar: 'شيت اختبار كرييتف تشغّله كل أسبوع' },
        { en: 'A reading routine that separates signal from noise', ar: 'روتين قراءة بيفصل الإشارة عن الضوضاء' },
        { en: 'A creative report your media buyer will actually read', ar: 'تقرير كرييتف الميديا باير هيقراه فعلاً' }
      ],
      who: [
        { t: { en: 'The designer told to "make it perform"', ar: 'المصمم اللي بيتقاله «خليه يجيب نتيجة»' },
          d: { en: 'You get feedback in numbers you cannot read. This teaches the language so you can push back with evidence.', ar: 'بيجيلك فيدباك بأرقام مش بتعرف تقراها. ده بيعلّمك اللغة عشان ترد بأدلة.' } },
        { t: { en: 'The performance marketer briefing creative', ar: 'المسوّق الأدائي اللي بيبرّف الكرييتف' },
          d: { en: 'Your briefs get literal results. Learn to brief on the mechanism, not the layout.', ar: 'بريفاتك بتيجي حرفية. اتعلّم تبرّف على الآلية مش على اللاي أوت.' } },
        { t: { en: 'The founder running their own ads', ar: 'المؤسس اللي بيشغّل إعلاناته بنفسه' },
          d: { en: 'You have budget and no system. This gives you a weekly loop instead of guessing.', ar: 'عندك ميزانية ومفيش نظام. ده بيديك دورة أسبوعية بدل التخمين.' } }
      ],
      skills: [
        { en: 'Write a hook that earns the next two seconds', ar: 'تكتب هوك بيكسب الثانيتين الجايين' },
        { en: 'Build a variant matrix instead of guessing new ideas', ar: 'تبني مصفوفة variants بدل تخمين أفكار جديدة' },
        { en: 'Direct a creator without being on the shoot', ar: 'تخرج كرييتور من غير ما تكون في التصوير' },
        { en: 'Read a creative report and name the real problem', ar: 'تقرا تقرير كرييتف وتسمّي المشكلة الحقيقية' },
        { en: 'Design for sound off and thumb speed', ar: 'تصمم للصوت المقفول ولسرعة الصباع' },
        { en: 'Retire an ad before it drags the account down', ar: 'توقف إعلان قبل ما يجرّ الحساب لتحت' }
      ],
      curriculum: [
        { w: 1, t: { en: 'The mechanism, not the layout', ar: 'الآلية مش اللاي أوت' },
          s: { en: 'Why an ad works, stated in one sentence.', ar: 'ليه الإعلان بيشتغل، في جملة واحدة.' },
          l: [
            { t: { en: 'The first two seconds, frame by frame', ar: 'أول ثانيتين، فريم بفريم' }, d: 19, ty: 'lesson', free: true },
            { t: { en: 'Building your hook library', ar: 'تبني مكتبة الهوكس' }, d: 24, ty: 'workshop' },
            { t: { en: 'Sound off design and thumb speed', ar: 'تصميم للصوت المقفول وسرعة الصباع' }, d: 18, ty: 'lesson' },
            { t: { en: 'Live: hook teardown', ar: 'مباشر: تفكيك الهوكس' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: mechanisms', ar: 'اختبار: الآليات' }, d: 8, ty: 'quiz' }
          ] },
        { w: 2, t: { en: 'The variant system', ar: 'نظام الـ Variants' },
          s: { en: 'Twelve ads from one idea, on purpose.', ar: 'اتناشر إعلان من فكرة واحدة، بقصد.' },
          l: [
            { t: { en: 'The variant matrix explained', ar: 'شرح مصفوفة الـ variants' }, d: 21, ty: 'lesson' },
            { t: { en: 'Building it in one file', ar: 'تبنيها في ملف واحد' }, d: 27, ty: 'workshop' },
            { t: { en: 'Naming so the data comes back readable', ar: 'التسمية عشان الداتا ترجع مقروءة' }, d: 15, ty: 'lesson' },
            { t: { en: 'Live: matrix review', ar: 'مباشر: مراجعة المصفوفة' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 01: twelve variants', ar: 'بريف ١: اتناشر variant' }, d: 0, ty: 'brief' }
          ] },
        { w: 3, t: { en: 'UGC and creator direction', ar: 'الـ UGC وإخراج الكرييتورز' },
          s: { en: 'Get the footage you imagined, from someone else.', ar: 'توصل للقطات اللي في دماغك، من حد تاني.' },
          l: [
            { t: { en: 'Casting for the message, not the face', ar: 'الكاستنج للرسالة مش للوش' }, d: 18, ty: 'lesson' },
            { t: { en: 'Writing a shot-by-shot creator brief', ar: 'تكتب بريف كرييتور لقطة بلقطة' }, d: 25, ty: 'workshop' },
            { t: { en: 'Editing UGC so it keeps feeling real', ar: 'مونتاج الـ UGC وهو فاضل حقيقي' }, d: 22, ty: 'workshop' },
            { t: { en: 'Live: creator brief clinic', ar: 'مباشر: عيادة بريف الكرييتور' }, d: 60, ty: 'live' }
          ] },
        { w: 4, t: { en: 'Reading, killing, reporting', ar: 'القراءة والإيقاف والتقرير' },
          s: { en: 'The weekly loop that compounds.', ar: 'الدورة الأسبوعية اللي بتتراكم.' },
          l: [
            { t: { en: 'The four numbers a designer must read', ar: 'الأربع أرقام اللي المصمم لازم يقراها' }, d: 20, ty: 'lesson' },
            { t: { en: 'Deciding what to kill and when', ar: 'تقرر توقف إيه وإمتى' }, d: 17, ty: 'lesson' },
            { t: { en: 'Writing a creative report in one page', ar: 'تكتب تقرير كرييتف في صفحة' }, d: 21, ty: 'workshop' },
            { t: { en: 'Live: final presentations', ar: 'مباشر: العروض النهائية' }, d: 90, ty: 'live' },
            { t: { en: 'Final brief: the weekly loop', ar: 'البريف النهائي: الدورة الأسبوعية' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s4.webp', name: { en: 'Mostafa G.', ar: 'مصطفى ج.' }, role: { en: 'Performance Designer', ar: 'مصمم أداء' }, r: 5,
          txt: { en: 'The variant matrix changed how my week looks. I used to make three ads and hope. Now I make twelve on purpose and know which one to keep by Thursday.', ar: 'مصفوفة الـ variants غيّرت شكل أسبوعي. كنت أعمل تلات إعلانات وأتمنى. دلوقتي بعمل اتناشر بقصد وأعرف أنهي واحد أكمّل بيه يوم الخميس.' } },
        { av: 'assets/img/people/s5.webp', name: { en: 'Salma K.', ar: 'سلمى ك.' }, role: { en: 'Media Buyer', ar: 'ميديا باير' }, r: 5,
          txt: { en: 'I am not a designer and I took this to brief better. It worked. My briefs went from a paragraph to a mechanism and the creative got sharper immediately.', ar: 'أنا مش مصممة وخدت الكورس عشان أبرّف أحسن. نفع. بريفاتي بقت آلية بدل فقرة والكرييتف اتحسّن فوراً.' } },
        { av: 'assets/img/people/s2.webp', name: { en: 'Tamer H.', ar: 'تامر ح.' }, role: { en: 'Founder', ar: 'مؤسس' }, r: 4,
          txt: { en: 'Dina is blunt about what does not work, which saved me money in the first two weeks. Wish the course were six weeks, not four.', ar: 'دينا صريحة في اللي مش شغال، وده وفّر عليا فلوس في أول أسبوعين. كنت أتمنى الكورس يبقى ستة أسابيع مش أربعة.' } }
      ]
    },

    /* ============ 6. ART DIRECTION ============ */
    {
      id: 'art-direction', cat: 'photo', level: 'advanced',
      cover: 'assets/img/covers/art-direction.webp',
      badges: ['live', 'cert', 'mentor', 'portfolio'],
      instructor: 'i6',
      title: { en: 'Art Direction & Photo Production', ar: 'الإخراج الفني وإنتاج التصوير' },
      tagline: { en: 'Most bad photos are briefing problems. Fix the brief and the shoot fixes itself.', ar: 'أغلب الصور الوحشة مشكلتها في البريف. صلّح البريف والتصوير هيصلّح نفسه.' },
      desc: { en: 'Five weeks from a written shot list to a delivered set: casting, styling, lighting logic, on-set direction and a selection process that is not just taste.', ar: 'خمس أسابيع من لستة لقطات مكتوبة لمجموعة مسلّمة: كاستنج، استايلنج، منطق إضاءة، إخراج في اللوكيشن، وعملية اختيار مش مجرد ذوق.' },
      price: 10000, weeks: 5, hours: 25, lessonCount: 32,
      students: 520, rating: 4.9, reviews: 78,
      start: '2026-10-12', seats: { total: 18, left: 6 },
      sessions: ['offline','online','recorded'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'A shot list and mood direction any photographer can follow', ar: 'لستة لقطات وتوجيه مود أي مصور يقدر يمشي عليها' },
        { en: 'A casting and styling brief with real selection criteria', ar: 'بريف كاستنج واستايلنج بمعايير اختيار حقيقية' },
        { en: 'A lighting logic you can name, not just recognise', ar: 'منطق إضاءة تقدر تسمّيه، مش بس تعرفه لما تشوفه' },
        { en: 'A production schedule and budget sheet that holds', ar: 'جدول إنتاج وشيت ميزانية بيصمد' },
        { en: 'A selection and retouch direction pass on a full set', ar: 'اختيار وتوجيه ريتاتش على مجموعة كاملة' },
        { en: 'A finished set you can put in your portfolio', ar: 'مجموعة نهائية تحطها في بورتفوليوك' }
      ],
      who: [
        { t: { en: 'The designer who directs shoots badly', ar: 'المصمم اللي بيخرج تصوير بشكل ضعيف' },
          d: { en: 'You get back photos you cannot use and blame the photographer. Week one usually ends that habit.', ar: 'بيرجعلك صور متقدرش تستخدمها وبتلوم المصور. الأسبوع الأول عادة بينهي العادة دي.' } },
        { t: { en: 'The photographer who wants to art direct', ar: 'المصور اللي عايز يخرج فنياً' },
          d: { en: 'You can shoot. You want to own the concept, the casting and the selection too.', ar: 'إنت بتصوّر. عايز تمسك الفكرة والكاستنج والاختيار كمان.' } },
        { t: { en: 'The brand manager buying photography', ar: 'مدير البراند اللي بيشتري تصوير' },
          d: { en: 'You keep paying for shoots that miss. This teaches you what to ask for before the day.', ar: 'بتدفع لتصويرات بتفوّت الهدف. ده هيعلّمك تطلب إيه قبل اليوم نفسه.' } }
      ],
      skills: [
        { en: 'Write a shot list that removes ambiguity', ar: 'تكتب لستة لقطات بتشيل أي غموض' },
        { en: 'Name a lighting setup instead of pointing at a photo', ar: 'تسمّي إعداد إضاءة بدل ما تشاور على صورة' },
        { en: 'Cast and style for the brand, not for your taste', ar: 'تعمل كاستنج واستايلنج للبراند مش لذوقك' },
        { en: 'Run a set and keep it on schedule', ar: 'تدير لوكيشن وتحافظ على الجدول' },
        { en: 'Select from three hundred frames with a stated rule', ar: 'تختار من تلتمية فريم بقاعدة معلنة' },
        { en: 'Direct retouch in writing so it comes back right', ar: 'توجّه الريتاتش كتابةً عشان يرجع صح' }
      ],
      curriculum: [
        { w: 1, t: { en: 'The brief is the shoot', ar: 'البريف هو التصوير' },
          s: { en: 'Prove that the failure happened before the camera.', ar: 'أثبت إن الفشل حصل قبل الكاميرا.' },
          l: [
            { t: { en: 'Anatomy of a shot list', ar: 'تشريح لستة اللقطات' }, d: 20, ty: 'lesson', free: true },
            { t: { en: 'Mood direction without a Pinterest dump', ar: 'توجيه مود من غير كومة بنترست' }, d: 22, ty: 'workshop' },
            { t: { en: 'Writing what must be in frame', ar: 'تكتب اللي لازم يكون في الكادر' }, d: 18, ty: 'workshop' },
            { t: { en: 'Live: brief clinic', ar: 'مباشر: عيادة البريف' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 01: full shot list', ar: 'بريف ١: لستة لقطات كاملة' }, d: 0, ty: 'brief' }
          ] },
        { w: 2, t: { en: 'Casting, styling, location', ar: 'الكاستنج والاستايلنج واللوكيشن' },
          s: { en: 'The three decisions that set the ceiling.', ar: 'التلات قرارات اللي بتحدد السقف.' },
          l: [
            { t: { en: 'Casting criteria you can defend', ar: 'معايير كاستنج تقدر تدافع عنها' }, d: 21, ty: 'lesson' },
            { t: { en: 'Styling for a brand palette', ar: 'استايلنج على بالِت البراند' }, d: 19, ty: 'workshop' },
            { t: { en: 'Scouting and the recce checklist', ar: 'الاستكشاف وتشيك ليست المعاينة' }, d: 17, ty: 'lesson' },
            { t: { en: 'Live: casting board review', ar: 'مباشر: مراجعة بورد الكاستنج' }, d: 60, ty: 'live' }
          ] },
        { w: 3, t: { en: 'Lighting logic', ar: 'منطق الإضاءة' },
          s: { en: 'Name it, and you can ask for it.', ar: 'سمّيه، وساعتها تقدر تطلبه.' },
          l: [
            { t: { en: 'Key, fill, rim and what each one says', ar: 'الكي والفيل والريم وكل واحد بيقول إيه' }, d: 24, ty: 'lesson' },
            { t: { en: 'Product versus people versus space', ar: 'المنتج مقابل الناس مقابل المكان' }, d: 23, ty: 'workshop' },
            { t: { en: 'Matching light to a brand mood', ar: 'مطابقة الضوء لمود البراند' }, d: 20, ty: 'workshop' },
            { t: { en: 'Live: lighting breakdown', ar: 'مباشر: تفكيك الإضاءة' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: lighting language', ar: 'اختبار: لغة الإضاءة' }, d: 8, ty: 'quiz' }
          ] },
        { w: 4, t: { en: 'Production and the day', ar: 'الإنتاج ويوم التصوير' },
          s: { en: 'Schedule, budget and keeping the set calm.', ar: 'جدول وميزانية والحفاظ على هدوء اللوكيشن.' },
          l: [
            { t: { en: 'Building a call sheet and schedule', ar: 'تبني كول شيت وجدول' }, d: 22, ty: 'workshop' },
            { t: { en: 'Budgeting a shoot honestly', ar: 'تعمل ميزانية تصوير بصدق' }, d: 20, ty: 'workshop' },
            { t: { en: 'Directing on set without freezing the room', ar: 'الإخراج في اللوكيشن من غير ما تجمّد الجو' }, d: 19, ty: 'lesson' },
            { t: { en: 'Live: production plan review', ar: 'مباشر: مراجعة خطة الإنتاج' }, d: 60, ty: 'live' }
          ] },
        { w: 5, t: { en: 'Selection and finish', ar: 'الاختيار والتشطيب' },
          s: { en: 'Where a good shoot becomes a good set.', ar: 'المكان اللي تصوير كويس بيبقى فيه مجموعة كويسة.' },
          l: [
            { t: { en: 'Selecting with a stated rule', ar: 'الاختيار بقاعدة معلنة' }, d: 21, ty: 'workshop' },
            { t: { en: 'Writing retouch direction', ar: 'تكتب توجيه الريتاتش' }, d: 18, ty: 'workshop' },
            { t: { en: 'Delivering a set with a usage note', ar: 'تسلّم مجموعة مع ملاحظة استخدام' }, d: 16, ty: 'lesson' },
            { t: { en: 'Live: final presentations', ar: 'مباشر: العروض النهائية' }, d: 90, ty: 'live' },
            { t: { en: 'Final brief: the delivered set', ar: 'البريف النهائي: المجموعة المسلّمة' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s1.webp', name: { en: 'Menna R.', ar: 'منة ر.' }, role: { en: 'Art Director', ar: 'مخرجة فنية' }, r: 5,
          txt: { en: 'I had directed twelve shoots before this and I was doing half of it on instinct. Now I can write down why, which means I can teach it to my juniors.', ar: 'كنت أخرجت اتناشر تصوير قبل الكورس ونص شغلي كان بالإحساس. دلوقتي أقدر أكتب ليه، ومعنى كده إني أقدر أعلّمه للجونيورز.' } },
        { av: 'assets/img/people/s4.webp', name: { en: 'Adham L.', ar: 'أدهم ل.' }, role: { en: 'Photographer', ar: 'مصور' }, r: 5,
          txt: { en: 'Coming from behind the camera, the casting and selection weeks were the ones I needed. Booked my first full art direction job a month later.', ar: 'كمصور، أسابيع الكاستنج والاختيار كانت اللي محتاجها. حجزت أول شغلانة إخراج فني كاملة بعدها بشهر.' } },
        { av: 'assets/img/people/s3.webp', name: { en: 'Yara S.', ar: 'يارا س.' }, role: { en: 'Brand Manager', ar: 'مديرة براند' }, r: 5,
          txt: { en: 'I stopped paying for shoots that miss. Just knowing how to write the shot list changed what I get back completely.', ar: 'بطّلت أدفع لتصويرات بتفوّت. مجرد إني عرفت أكتب لستة اللقطات غيّر اللي بيرجعلي تماماً.' } }
      ]
    },

    /* ============ 7. VECTOR ============ */
    {
      id: 'vector-craft', cat: 'illustration', level: 'beginner',
      cover: 'assets/img/covers/vector.webp',
      badges: ['recorded', 'cert', 'arabic', 'updated'],
      instructor: 'i1',
      title: { en: 'Vector Craft in Illustrator', ar: 'حرفة الفيكتور في إليستريتور' },
      tagline: { en: 'Clean paths, real construction, files that open properly two years later.', ar: 'باثات نضيفة، بناء حقيقي، وملفات بتفتح صح بعد سنتين.' },
      desc: { en: 'Four weeks of pure craft: pen control, boolean construction, grids, icon systems and a production discipline that makes your files a pleasure to inherit.', ar: 'أربع أسابيع حرفة خالصة: تحكم في البن، بناء بالبوليان، جريدات، أنظمة أيقونات، وانضباط إنتاج بيخلي ملفاتك متعة لأي حد يورثها.' },
      price: 4900, weeks: 4, hours: 16, lessonCount: 28,
      students: 1720, rating: 4.8, reviews: 214,
      start: '2026-09-07', seats: { total: 60, left: 31 },
      sessions: ['recorded'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'Pen tool control that does not need cleaning up afterwards', ar: 'تحكم في البن مش محتاج تنضيف بعديه' },
        { en: 'A 24px icon system with consistent stroke and optical weight', ar: 'نظام أيقونات ٢٤ بكسل بستروك ووزن بصري متسق' },
        { en: 'Construction grids for marks and symbols', ar: 'جريدات بناء للشعارات والرموز' },
        { en: 'A file structure that other designers can open and use', ar: 'تنظيم ملفات مصممين تانيين يقدروا يفتحوه ويستخدموه' },
        { en: 'Export presets for web, print and app assets', ar: 'إعدادات تصدير للويب والطباعة والتطبيقات' },
        { en: 'A finished illustration set for your portfolio', ar: 'مجموعة رسومات نهائية للبورتفوليو' }
      ],
      who: [
        { t: { en: 'The self taught designer with messy files', ar: 'المصمم اللي علّم نفسه وملفاته مبعثرة' },
          d: { en: 'Your work looks fine and your files are chaos. This is the discipline layer nobody taught you.', ar: 'شغلك شكله كويس وملفاتك فوضى. دي طبقة الانضباط اللي محدش علّمهالك.' } },
        { t: { en: 'The junior building a portfolio', ar: 'الجونيور اللي بيبني بورتفوليو' },
          d: { en: 'You need craft pieces that show control, not just style. Four briefs, four finished sets.', ar: 'محتاج أعمال بتوري تحكم مش استايل بس. أربع بريفات، أربع مجموعات نهائية.' } },
        { t: { en: 'The motion or UI designer who avoids Illustrator', ar: 'مصمم الموشن أو الواجهات اللي بيتجنب إليستريتور' },
          d: { en: 'You work around vector because it feels slow. It is slow because nobody showed you the shortcuts that matter.', ar: 'بتلف حوالين الفيكتور لأنه حاسه بطيء. هو بطيء لأن محدش وراك الاختصارات المهمة.' } }
      ],
      skills: [
        { en: 'Draw a curve with the minimum number of points', ar: 'ترسم منحنى بأقل عدد نقاط' },
        { en: 'Build complex shapes from simple booleans', ar: 'تبني أشكال معقدة من بوليانات بسيطة' },
        { en: 'Keep stroke weight optically even at every size', ar: 'تحافظ على وزن الستروك بصرياً في كل مقاس' },
        { en: 'Set up artboards, layers and naming that scale', ar: 'تجهّز آرت بوردز وليَيرز وتسمية بتكبر معاك' },
        { en: 'Convert artwork for motion and for the web correctly', ar: 'تحوّل الشغل للموشن وللويب بشكل صحيح' },
        { en: 'Rescue and clean an inherited file fast', ar: 'تنقذ وتنضّف ملف ورثته بسرعة' }
      ],
      curriculum: [
        { w: 1, t: { en: 'Pen and path discipline', ar: 'انضباط البن والباث' },
          s: { en: 'The half hour that fixes five years of habits.', ar: 'النص ساعة اللي بتصلّح خمس سنين عادات.' },
          l: [
            { t: { en: 'Anchor points: fewer is always better', ar: 'نقاط الأنكور: الأقل دايماً أحسن' }, d: 17, ty: 'lesson', free: true },
            { t: { en: 'Curve drills that actually build control', ar: 'تمارين منحنيات بتبني تحكم فعلاً' }, d: 26, ty: 'workshop' },
            { t: { en: 'Corner handling and where curves break', ar: 'التعامل مع الأركان وفين المنحنيات بتتكسر' }, d: 19, ty: 'workshop' },
            { t: { en: 'Checkpoint: path economy', ar: 'اختبار: اقتصاد الباث' }, d: 8, ty: 'quiz' }
          ] },
        { w: 2, t: { en: 'Boolean construction', ar: 'البناء بالبوليان' },
          s: { en: 'Stop drawing shapes. Start building them.', ar: 'بطّل ترسم أشكال. ابدأ تبنيها.' },
          l: [
            { t: { en: 'Pathfinder, shape builder and when to use each', ar: 'الباث فايندر والشيب بيلدر وإمتى تستخدم كل واحد' }, d: 21, ty: 'workshop' },
            { t: { en: 'Building a mark from circles and squares only', ar: 'تبني شعار من دواير ومربعات بس' }, d: 25, ty: 'workshop' },
            { t: { en: 'Non destructive construction you can revisit', ar: 'بناء غير تدميري تقدر ترجعله' }, d: 18, ty: 'lesson' },
            { t: { en: 'Brief 01: geometric mark set', ar: 'بريف ١: مجموعة شعارات هندسية' }, d: 0, ty: 'brief' }
          ] },
        { w: 3, t: { en: 'The icon system', ar: 'نظام الأيقونات' },
          s: { en: 'Twenty four icons that look like one family.', ar: 'أربعة وعشرين أيقونة شكلهم عيلة واحدة.' },
          l: [
            { t: { en: 'The 24px grid and keyline shapes', ar: 'جريد الـ ٢٤ بكسل وأشكال الكي لاين' }, d: 20, ty: 'lesson' },
            { t: { en: 'Optical weight versus mathematical weight', ar: 'الوزن البصري مقابل الوزن الحسابي' }, d: 22, ty: 'workshop' },
            { t: { en: 'Drawing twenty four in one sitting', ar: 'ترسم أربعة وعشرين في جلسة واحدة' }, d: 28, ty: 'workshop' },
            { t: { en: 'Checkpoint: system consistency', ar: 'اختبار: اتساق النظام' }, d: 8, ty: 'quiz' }
          ] },
        { w: 4, t: { en: 'Production and handover', ar: 'الإنتاج والتسليم' },
          s: { en: 'Files nobody curses when they open them.', ar: 'ملفات محدش هيسب لما يفتحها.' },
          l: [
            { t: { en: 'Layers, artboards and naming that scale', ar: 'ليَيرز وآرت بوردز وتسمية بتكبر' }, d: 18, ty: 'lesson' },
            { t: { en: 'Export for web, print, motion and app', ar: 'التصدير للويب والطباعة والموشن والتطبيق' }, d: 21, ty: 'workshop' },
            { t: { en: 'Rescuing an inherited disaster file', ar: 'إنقاذ ملف كارثي ورثته' }, d: 19, ty: 'workshop' },
            { t: { en: 'Final brief: the illustration set', ar: 'البريف النهائي: مجموعة الرسومات' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s3.webp', name: { en: 'Basma N.', ar: 'بسمة ن.' }, role: { en: 'Junior Designer', ar: 'مصممة جونيور' }, r: 5,
          txt: { en: 'Week one was humbling. I have been drawing with twice the points I needed for years. My files are half the size now and open instantly.', ar: 'الأسبوع الأول كان صادم. كنت برسم بضعف النقط اللي محتاجاها لسنين. ملفاتي دلوقتي نص الحجم وبتفتح فوراً.' } },
        { av: 'assets/img/people/s2.webp', name: { en: 'Hossam A.', ar: 'حسام ع.' }, role: { en: 'UI Designer', ar: 'مصمم واجهات' }, r: 5,
          txt: { en: 'I avoided Illustrator for years. The icon system week made it the fastest tool in my week instead of the slowest.', ar: 'كنت بتجنب إليستريتور لسنين. أسبوع نظام الأيقونات خلّاه أسرع أداة في أسبوعي بدل ما كان أبطأ حاجة.' } },
        { av: 'assets/img/people/s5.webp', name: { en: 'Reem Z.', ar: 'ريم ز.' }, role: { en: 'Freelance Illustrator', ar: 'رسامة فريلانس' }, r: 4,
          txt: { en: 'Cheapest course in the catalog and the one I use every single day. The handover lesson alone stopped two client arguments.', ar: 'أرخص كورس في الكتالوج وهو اللي بستخدمه كل يوم. درس التسليم لوحده أنهى خناقتين مع عملاء.' } }
      ]
    },

    /* ============ 8. STORYBOARD ============ */
    {
      id: 'story-concept', cat: 'concept', level: 'intermediate',
      cover: 'assets/img/covers/storyboard.webp',
      badges: ['live', 'cert', 'arabic', 'portfolio'],
      instructor: 'i6',
      title: { en: 'Storyboarding & Campaign Concept', ar: 'الستوري بورد وفكرة الحملة' },
      tagline: { en: 'Sell the idea before anyone spends a pound producing it.', ar: 'ابيع الفكرة قبل ما حد يصرف جنيه على إنتاجها.' },
      desc: { en: 'Four weeks turning a brief into a defensible concept, a boarded film and a pitch that survives the room, even if you cannot draw.', ar: 'أربع أسابيع بتحوّل البريف لفكرة تقدر تدافع عنها، وفيلم مرسوم بورد، وبيتش بيصمد في الأوضة، حتى لو مش بترسم.' },
      price: 6500, weeks: 4, hours: 18, lessonCount: 27,
      students: 740, rating: 4.7, reviews: 96,
      start: '2026-10-19', seats: { total: 26, left: 14 },
      sessions: ['online','recorded'],
      langNote: { en: 'Arabic delivery, English materials', ar: 'شرح بالعربي، مواد بالإنجليزي' },
      outcomes: [
        { en: 'A concept written in one sentence that a client repeats back', ar: 'فكرة مكتوبة في جملة واحدة العميل بيعيدها' },
        { en: 'A boarded thirty second film, shot by shot', ar: 'فيلم تلاتين ثانية مرسوم بورد، لقطة بلقطة' },
        { en: 'A visual language board that guides production', ar: 'بورد لغة بصرية بيوجّه الإنتاج' },
        { en: 'A pitch deck built for the room, not for reading', ar: 'ديك بيتش متعمول للأوضة مش للقراءة' },
        { en: 'Three alternative routes so the meeting has options', ar: 'تلات طرق بديلة عشان الاجتماع يكون فيه اختيارات' },
        { en: 'A drawing shorthand that works even if you cannot draw', ar: 'اختزال رسم بيشتغل حتى لو مش بترسم' }
      ],
      who: [
        { t: { en: 'The designer moving toward concept work', ar: 'المصمم المتجه لشغل الأفكار' },
          d: { en: 'You execute well and want to own the idea. This teaches the thinking and the selling.', ar: 'بتنفّذ كويس وعايز تمسك الفكرة. ده بيعلّم التفكير والبيع.' } },
        { t: { en: 'The copywriter who needs to show it', ar: 'الكوبي رايتر اللي محتاج يوريها' },
          d: { en: 'You can write the idea but not present it visually. The shorthand in week two solves that.', ar: 'بتعرف تكتب الفكرة بس مش بتعرف تعرضها بصرياً. الاختزال في الأسبوع التاني بيحل ده.' } },
        { t: { en: 'The producer who briefs directors', ar: 'المنتج اللي بيبرّف المخرجين' },
          d: { en: 'You need boards that stop expensive misunderstandings on shoot day.', ar: 'محتاج بوردز بتمنع سوء فهم غالي يوم التصوير.' } }
      ],
      skills: [
        { en: 'Turn a brief into a single sentence idea', ar: 'تحوّل بريف لفكرة في جملة واحدة' },
        { en: 'Board a film with stick figures and still be clear', ar: 'ترسم بورد بأشكال بسيطة وتفضل واضح' },
        { en: 'Choose a shot for a reason you can name', ar: 'تختار لقطة لسبب تقدر تسمّيه' },
        { en: 'Build three routes instead of defending one', ar: 'تبني تلات طرق بدل ما تدافع عن واحدة' },
        { en: 'Present a concept in under six minutes', ar: 'تعرض فكرة في أقل من ست دقايق' },
        { en: 'Take a hard note without losing the idea', ar: 'تستقبل ملاحظة صعبة من غير ما تفقد الفكرة' }
      ],
      curriculum: [
        { w: 1, t: { en: 'From brief to idea', ar: 'من البريف للفكرة' },
          s: { en: 'One sentence, defensible, repeatable.', ar: 'جملة واحدة، تقدر تدافع عنها، وتتكرر.' },
          l: [
            { t: { en: 'Reading a brief for the real problem', ar: 'تقرا البريف عشان المشكلة الحقيقية' }, d: 19, ty: 'lesson', free: true },
            { t: { en: 'Twenty ideas before lunch', ar: 'عشرين فكرة قبل الغدا' }, d: 24, ty: 'workshop' },
            { t: { en: 'Killing your own favourite', ar: 'تقتل فكرتك المفضلة' }, d: 15, ty: 'lesson' },
            { t: { en: 'Live: idea clinic', ar: 'مباشر: عيادة الأفكار' }, d: 60, ty: 'live' },
            { t: { en: 'Brief 01: three routes', ar: 'بريف ١: تلات طرق' }, d: 0, ty: 'brief' }
          ] },
        { w: 2, t: { en: 'Boarding without drawing', ar: 'البورد من غير رسم' },
          s: { en: 'Clarity is the skill. Draughtsmanship is optional.', ar: 'الوضوح هو المهارة. الرسم اختياري.' },
          l: [
            { t: { en: 'The five frames every film needs', ar: 'الخمس فريمات اللي كل فيلم محتاجها' }, d: 21, ty: 'lesson' },
            { t: { en: 'Stick figure shorthand that reads', ar: 'اختزال بأشكال بسيطة بيتقرا' }, d: 25, ty: 'workshop' },
            { t: { en: 'Shot choice as meaning, not variety', ar: 'اختيار اللقطة كمعنى مش كتنويع' }, d: 20, ty: 'lesson' },
            { t: { en: 'Live: board review', ar: 'مباشر: مراجعة البورد' }, d: 60, ty: 'live' },
            { t: { en: 'Checkpoint: shot logic', ar: 'اختبار: منطق اللقطة' }, d: 8, ty: 'quiz' }
          ] },
        { w: 3, t: { en: 'Visual language', ar: 'اللغة البصرية' },
          s: { en: 'What the film looks like, decided on purpose.', ar: 'الفيلم شكله إيه، بقرار مقصود.' },
          l: [
            { t: { en: 'Building a language board that guides production', ar: 'تبني بورد لغة بيوجّه الإنتاج' }, d: 23, ty: 'workshop' },
            { t: { en: 'Colour, lens and pace as one decision', ar: 'اللون والعدسة والإيقاع كقرار واحد' }, d: 19, ty: 'lesson' },
            { t: { en: 'Sound as a storyboard layer', ar: 'الصوت كطبقة في الستوري بورد' }, d: 17, ty: 'lesson' },
            { t: { en: 'Live: language board critique', ar: 'مباشر: نقد بورد اللغة' }, d: 60, ty: 'live' }
          ] },
        { w: 4, t: { en: 'The pitch', ar: 'البيتش' },
          s: { en: 'Six minutes decides a three month project.', ar: 'ست دقايق بتحدد مشروع تلات شهور.' },
          l: [
            { t: { en: 'Structuring six minutes', ar: 'هيكلة ست دقايق' }, d: 20, ty: 'lesson' },
            { t: { en: 'Building the deck for the room', ar: 'تبني الديك للأوضة' }, d: 24, ty: 'workshop' },
            { t: { en: 'Taking a hard note without folding', ar: 'تستقبل ملاحظة صعبة من غير ما تنهار' }, d: 18, ty: 'lesson' },
            { t: { en: 'Live: final pitches', ar: 'مباشر: البيتشات النهائية' }, d: 90, ty: 'live' },
            { t: { en: 'Final brief: the boarded concept', ar: 'البريف النهائي: الفكرة المرسومة' }, d: 0, ty: 'brief' }
          ] }
      ],
      reviews_: [
        { av: 'assets/img/people/s4.webp', name: { en: 'Amr S.', ar: 'عمرو س.' }, role: { en: 'Senior Designer', ar: 'مصمم سينيور' }, r: 5,
          txt: { en: 'I cannot draw. I finished with boards a director could shoot from. The shorthand in week two is the whole trick.', ar: 'أنا مش برسم. خلّصت ببوردز مخرج يقدر يصوّر منها. الاختزال في الأسبوع التاني هو الحيلة كلها.' } },
        { av: 'assets/img/people/s1.webp', name: { en: 'Dalia W.', ar: 'داليا و.' }, role: { en: 'Copywriter', ar: 'كوبي رايتر' }, r: 5,
          txt: { en: 'Three routes instead of one changed how my meetings go. Clients pick instead of objecting. Obvious in hindsight, nobody taught me before.', ar: 'تلات طرق بدل واحدة غيّرت شكل اجتماعاتي. العملاء بيختاروا بدل ما يعترضوا. واضحة بعد ما تعرفها، بس محدش علّمهالي قبل كده.' } },
        { av: 'assets/img/people/s2.webp', name: { en: 'Karim B.', ar: 'كريم ب.' }, role: { en: 'Producer', ar: 'منتج' }, r: 4,
          txt: { en: 'Practical and fast. The boards we produce now save real money on shoot day because nobody argues about what the shot was.', ar: 'عملي وسريع. البوردز اللي بنطلّعها دلوقتي بتوفّر فلوس حقيقية يوم التصوير لأن محدش بيتخانق على اللقطة كانت إيه.' } }
      ]
    }
  ];

  /* attach shared blocks + derived fields */
  COURSES.forEach(c => {
    c.plans = plans(c.price);
    c.faq = FAQ_BASE;
    c.value = VALUE;
    c.catName = (CATS.find(x => x.id === c.cat) || {}).name || { en: '', ar: '' };
  });

  /* ---------------- Achievement badges ---------------- */
  const ACHIEVEMENTS = [
    { id: 'first-steps', icon: 'flag', tone: 'orange', earned: true, on: '2026-06-02',
      t: { en: 'First Steps', ar: 'أول خطوة' },
      d: { en: 'Finished your first lesson.', ar: 'خلّصت أول درس.' } },
    { id: 'streak-7', icon: 'flame', tone: 'red', earned: true, on: '2026-06-11',
      t: { en: 'Seven Day Streak', ar: 'سبع أيام متتالية' },
      d: { en: 'Learned something every day for a week.', ar: 'اتعلّمت حاجة كل يوم لمدة أسبوع.' } },
    { id: 'deep-work', icon: 'moon', tone: 'violet', earned: true, on: '2026-06-19',
      t: { en: 'Deep Work', ar: 'شغل عميق' },
      d: { en: 'Three focused hours in one sitting.', ar: 'تلات ساعات تركيز في جلسة واحدة.' } },
    { id: 'perfect-check', icon: 'target', tone: 'green', earned: true, on: '2026-06-24',
      t: { en: 'Perfect Checkpoint', ar: 'اختبار كامل' },
      d: { en: 'Full marks on a checkpoint, first attempt.', ar: 'الدرجة كاملة في اختبار من أول محاولة.' } },
    { id: 'on-time', icon: 'clock', tone: 'cyan', earned: true, on: '2026-07-03',
      t: { en: 'Always On Time', ar: 'دايماً في الميعاد' },
      d: { en: 'Five assignments submitted before the deadline.', ar: 'خمس تسليمات قبل الموعد.' } },
    { id: 'peer-helper', icon: 'chat', tone: 'navy', earned: true, on: '2026-07-15',
      t: { en: 'Peer Helper', ar: 'سند الزملاء' },
      d: { en: 'Ten replies marked helpful by other learners.', ar: 'عشر ردود اتعلّمت مفيدة من متعلّمين تانيين.' } },
    { id: 'portfolio', icon: 'folder', tone: 'amber', earned: false,
      t: { en: 'Portfolio Builder', ar: 'باني بورتفوليو' },
      d: { en: 'Three graded briefs scored 85 or above.', ar: 'تلات بريفات مصححة بدرجة ٨٥ أو أكتر.' } },
    { id: 'module-master', icon: 'layers', tone: 'orange', earned: false,
      t: { en: 'Module Master', ar: 'سيد الموديول' },
      d: { en: 'Complete an entire module inside one week.', ar: 'تخلّص موديول كامل في أسبوع واحد.' } },
    { id: 'graduate', icon: 'cap', tone: 'green', earned: false,
      t: { en: 'Graduate', ar: 'خرّيج' },
      d: { en: 'Finish every module and the final brief.', ar: 'تخلّص كل الموديولات والبريف النهائي.' } },
    { id: 'top-ten', icon: 'trophy', tone: 'violet', earned: false,
      t: { en: 'Top Ten Percent', ar: 'أفضل ١٠٪' },
      d: { en: 'Finish in the top tenth of your cohort.', ar: 'تخلّص في أفضل عُشر دفعتك.' } }
  ];

  /* ---------------- Demo student ---------------- */
  const STUDENT = {
    name: { en: 'Mohamed Tarek', ar: 'محمد طارق' },
    role: { en: 'Senior Designer, Team Lead', ar: 'مصمم أول وقائد فريق' },
    avatar: null,
    initials: 'MT',
    streak: 12, hours: 34, done: 61, badges: 6,
    weekGoalHours: 5, weekDoneHours: 3.5,
    enrolled: [
      { id: 'social-systems', pct: 68, lastLesson: { w: 4, l: 2 },
        next: { en: 'Variants for the eight post types you repeat', ar: 'Variants للتمن أنواع بوستات بتتكرر' } },
      { id: 'ai-creative', pct: 100, lastLesson: { w: 3, l: 5 }, completed: '2026-07-28',
        next: { en: 'Course complete', ar: 'الكورس مكتمل' } },
      { id: 'perf-creative', pct: 22, lastLesson: { w: 1, l: 2 },
        next: { en: 'Building your hook library', ar: 'تبني مكتبة الهوكس' } }
    ],
    activity: [2, 4, 3, 5, 1, 0, 4, 6, 3, 5, 4, 3.5],
    sessions: [
      { course: 'social-systems', on: '2026-08-24', time: '20:00', mins: 60,
        t: { en: 'Live: component library review', ar: 'مباشر: مراجعة مكتبة الكومبوننتس' } },
      { course: 'perf-creative', on: '2026-08-26', time: '20:00', mins: 60,
        t: { en: 'Live: hook teardown', ar: 'مباشر: تفكيك الهوكس' } },
      { course: 'social-systems', on: '2026-08-31', time: '20:00', mins: 60,
        t: { en: 'Live: monthly grid critique', ar: 'مباشر: نقد الجريد الشهري' } }
    ],
    assignments: [
      { course: 'social-systems', due: '2026-08-23', state: 'open',
        t: { en: 'Brief 02: the component library', ar: 'بريف ٢: مكتبة الكومبوننتس' } },
      { course: 'perf-creative', due: '2026-08-30', state: 'notstarted',
        t: { en: 'Brief 01: twelve variants', ar: 'بريف ١: اتناشر variant' } },
      { course: 'social-systems', due: '2026-08-09', state: 'review',
        t: { en: 'Brief 01: your master grid file', ar: 'بريف ١: ملف الجريد الأساسي' } },
      { course: 'ai-creative', due: '2026-07-26', state: 'graded', score: 92,
        t: { en: 'Final brief: pipeline and policy', ar: 'البريف النهائي: البايبلاين والسياسة' },
        fb: { en: 'Strong layered prompts and an honest policy page. The upscale chain still invents detail in the third image. Re-run it at a lower creativity setting and compare the edges.', ar: 'برومبتات بطبقات قوية وصفحة سياسة صادقة. سلسلة التكبير لسه بتخترع تفاصيل في الصورة التالتة. أعد تشغيلها بإعداد إبداع أقل وقارن الحواف.' } },
      { course: 'ai-creative', due: '2026-07-12', state: 'graded', score: 88,
        t: { en: 'Brief 01: a full pitch visual set', ar: 'بريف ١: مجموعة فيجوالز بيتش كاملة' },
        fb: { en: 'Good consistency across the set. Two frames drift in lighting direction, which reads as a different shoot. Lock the key light in the reference next time.', ar: 'اتساق كويس عبر المجموعة. فريمين بينحرفوا في اتجاه الإضاءة وده بيبان كأنه تصوير تاني. ثبّت الكي لايت في الريفرنس المرة الجاية.' } }
    ],
    certificates: [
      { course: 'ai-creative', on: '2026-07-28', id: 'OSO-AI-2026-0417' }
    ]
  };

  /* ---------------- Demo instructor panel ---------------- */
  const TEACH = {
    who: 'i1',
    kpi: { students: 412, queue: 9, rating: 4.9, revenue: 186400 },
    courses: [
      { id: 'social-systems', state: 'live', enrolled: 248, completion: 74, rating: 4.9, revenue: 118000 },
      { id: 'vector-craft', state: 'live', enrolled: 164, completion: 81, rating: 4.8, revenue: 68400 },
      { id: 'brand-systems', state: 'draft', enrolled: 0, completion: 0, rating: 0, revenue: 0 }
    ],
    funnel: [
      { m: { en: 'Week 1 · Audit', ar: 'أسبوع ١ · التدقيق' }, pct: 98 },
      { m: { en: 'Week 2 · Master grid', ar: 'أسبوع ٢ · الجريد' }, pct: 91 },
      { m: { en: 'Week 3 · Type & colour', ar: 'أسبوع ٣ · الخط واللون' }, pct: 84 },
      { m: { en: 'Week 4 · Components', ar: 'أسبوع ٤ · الكومبوننتس' }, pct: 61 },
      { m: { en: 'Week 5 · Planning', ar: 'أسبوع ٥ · التخطيط' }, pct: 58 },
      { m: { en: 'Week 6 · Handover', ar: 'أسبوع ٦ · التسليم' }, pct: 52 }
    ],
    funnelNote: {
      en: 'The drop at week four is the auto layout lesson. Learners who watch it twice finish; learners who skip it stall. It is being re-recorded in two shorter parts.',
      ar: 'الهبوط في الأسبوع الرابع هو درس الأوتو لاي أوت. اللي بيتفرج عليه مرتين بيخلّص، واللي بيعدّيه بيقف. بيتعاد تسجيله في جزئين أقصر.'
    },
    students: [
      { n: { en: 'Mariam Adel', ar: 'مريم عادل' }, av: 'assets/img/people/s1.webp', course: 'social-systems', pct: 92, seen: '2026-08-19', state: 'ahead' },
      { n: { en: 'Ahmed Salah', ar: 'أحمد صلاح' }, av: 'assets/img/people/s2.webp', course: 'social-systems', pct: 68, seen: '2026-08-18', state: 'ontrack' },
      { n: { en: 'Farida Mostafa', ar: 'فريدة مصطفى' }, av: 'assets/img/people/s3.webp', course: 'vector-craft', pct: 74, seen: '2026-08-19', state: 'ontrack' },
      { n: { en: 'Omar Kamal', ar: 'عمر كمال' }, av: 'assets/img/people/s4.webp', course: 'social-systems', pct: 31, seen: '2026-08-04', state: 'risk' },
      { n: { en: 'Nada Hisham', ar: 'ندى هشام' }, av: 'assets/img/people/s5.webp', course: 'vector-craft', pct: 88, seen: '2026-08-19', state: 'ahead' },
      { n: { en: 'Ziad Refaat', ar: 'زياد رفعت' }, av: null, ini: 'ZR', course: 'social-systems', pct: 47, seen: '2026-08-12', state: 'risk' }
    ],
    queue: [
      { n: { en: 'Mariam Adel', ar: 'مريم عادل' }, av: 'assets/img/people/s1.webp', course: 'social-systems', on: '2026-08-19',
        a: { en: 'Brief 02: the component library', ar: 'بريف ٢: مكتبة الكومبوننتس' } },
      { n: { en: 'Ahmed Salah', ar: 'أحمد صلاح' }, av: 'assets/img/people/s2.webp', course: 'social-systems', on: '2026-08-19',
        a: { en: 'Brief 02: the component library', ar: 'بريف ٢: مكتبة الكومبوننتس' } },
      { n: { en: 'Farida Mostafa', ar: 'فريدة مصطفى' }, av: 'assets/img/people/s3.webp', course: 'vector-craft', on: '2026-08-18',
        a: { en: 'Brief 01: geometric mark set', ar: 'بريف ١: مجموعة شعارات هندسية' } },
      { n: { en: 'Nada Hisham', ar: 'ندى هشام' }, av: 'assets/img/people/s5.webp', course: 'vector-craft', on: '2026-08-18',
        a: { en: 'Final brief: the illustration set', ar: 'البريف النهائي: مجموعة الرسومات' } },
      { n: { en: 'Ziad Refaat', ar: 'زياد رفعت' }, av: null, ini: 'ZR', course: 'social-systems', on: '2026-08-16',
        a: { en: 'Brief 01: your master grid file', ar: 'بريف ١: ملف الجريد الأساسي' } }
    ],
    announcements: [
      { on: '2026-08-18', course: 'social-systems',
        t: { en: 'Week 4 files are up', ar: 'ملفات الأسبوع الرابع اتنزلت' },
        b: { en: 'The component starter file is in Resources. Open it before Sunday so the live session is spent reviewing, not setting up.', ar: 'ملف بداية الكومبوننتس في الملفات. افتحه قبل الأحد عشان الجلسة المباشرة تتصرف في المراجعة مش في التجهيز.' } },
      { on: '2026-08-11', course: 'social-systems',
        t: { en: 'Deadline moved to Saturday', ar: 'الموعد اتأجّل للسبت' },
        b: { en: 'Brief 01 is now due Saturday night. Nobody loses marks for the change, and late submissions from this week are not counted.', ar: 'بريف ١ موعده بقى ليلة السبت. محدش هيخسر درجات بسبب التغيير، والتسليمات المتأخرة الأسبوع ده مش محسوبة.' } }
    ]
  };

  w.LMS = {
    CATS: CATS,
    INSTRUCTORS: INSTRUCTORS,
    COURSES: COURSES,
    ACHIEVEMENTS: ACHIEVEMENTS,
    STUDENT: STUDENT,
    TEACH: TEACH,
    byId: function (id) { return COURSES.find(c => c.id === id) || null; },
    instructor: function (id) { return INSTRUCTORS[id] || null; }
  };
})(window);
