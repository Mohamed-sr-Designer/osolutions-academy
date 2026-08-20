/* ==========================================================================
   OSOLUTIONS ACADEMY — i18n dictionary + engine
   Every chrome string lives here. Content strings live in data.js as {en, ar}.
   ========================================================================== */
(function (w) {
  'use strict';

  const DICT = {
    /* --- global chrome --- */
    'brand.academy':       { en: 'Academy',                 ar: 'الأكاديمية' },
    'nav.home':            { en: 'Home',                    ar: 'الرئيسية' },
    'nav.courses':         { en: 'Courses',                 ar: 'الكورسات' },
    'nav.tracks':          { en: 'Tracks',                  ar: 'المسارات' },
    'nav.instructors':     { en: 'Instructors',             ar: 'المدربين' },
    'nav.about':           { en: 'About us',                ar: 'من نحن' },
    'nav.contact':         { en: 'Contact us',              ar: 'اتصل بنا' },
    'nav.dashboard':       { en: 'My learning',             ar: 'تعلّمي' },
    'nav.teach':           { en: 'Instructor studio',       ar: 'استوديو المدرب' },
    'nav.enroll':          { en: 'Enroll today',            ar: 'سجّل اليوم' },
    'nav.signin':          { en: 'Sign in',                 ar: 'تسجيل الدخول' },
    'nav.menu':            { en: 'Menu',                    ar: 'القائمة' },
    'nav.theme':           { en: 'Switch theme',            ar: 'تبديل الوضع' },
    'nav.lang':            { en: 'Switch language',         ar: 'تغيير اللغة' },

    /* --- home --- */
    'home.eyebrow':        { en: 'Osolutions Academy',      ar: 'أكاديمية أوسوليوشنز' },
    'home.h1a':            { en: 'Learn the craft that ',   ar: 'اتعلّم الشغل اللي ' },
    'home.h1b':            { en: 'ships real work',         ar: 'بيتسلّم فعلاً' },
    'home.sub':            { en: 'A design and performance academy built inside a working agency. Every course is the exact system our team uses on live client accounts, taught by the people who run them.', ar: 'أكاديمية تصميم وأداء اتبنت جوه وكالة شغّالة. كل كورس هو نفس النظام اللي فريقنا بيشتغل بيه على حسابات عملاء حقيقية، بيشرحه الناس اللي بتديره.' },
    'home.cta1':           { en: 'Browse courses',          ar: 'تصفّح الكورسات' },
    'home.cta2':           { en: 'See how it works',        ar: 'إزاي بيشتغل' },
    'home.trust':          { en: 'Trusted by creative and marketing teams across Egypt and the Gulf', ar: 'محل ثقة فرق التصميم والتسويق في مصر والخليج' },
    'home.stat1':          { en: 'Active learners',         ar: 'متعلّم نشط' },
    'home.stat2':          { en: 'Courses & tracks',        ar: 'كورس ومسار' },
    'home.stat3':          { en: 'Average rating',          ar: 'متوسط التقييم' },
    'home.stat4':          { en: 'Completion rate',         ar: 'نسبة الإكمال' },
    'home.catalogTag':     { en: 'The catalog',             ar: 'الكتالوج' },
    'home.catalogH':       { en: 'Courses built from real client work', ar: 'كورسات مبنية من شغل عملاء حقيقي' },
    'home.catalogP':       { en: 'No theory decks. Every module ends with a deliverable you can put straight into your portfolio or your next brief.', ar: 'مفيش عروض نظرية. كل موديول بينتهي بمخرج تقدر تحطه في البورتفوليو أو في البريف اللي بعده.' },
    'home.viewAll':        { en: 'View all courses',        ar: 'كل الكورسات' },
    'home.howTag':         { en: 'How it works',            ar: 'إزاي بيشتغل' },
    'home.howH':           { en: 'Four weeks in, you are working differently', ar: 'بعد أربع أسابيع هتلاقي نفسك بتشتغل بطريقة مختلفة' },
    'home.whyTag':         { en: 'Why Osolutions',          ar: 'ليه أوسوليوشنز' },
    'home.whyH':           { en: 'An agency that decided to teach', ar: 'وكالة قرّرت تعلّم' },
    'home.instTag':        { en: 'The people',              ar: 'الفريق' },
    'home.instH':          { en: 'Taught by practitioners, not presenters', ar: 'بيشرحوا ناس بتشتغل، مش ناس بتقدّم' },
    'home.instP':          { en: 'Every instructor still runs live accounts. What they teach on Monday, they used on Sunday.', ar: 'كل مدرب لسه بيدير حسابات شغّالة. اللي بيشرحه النهارده استخدمه إمبارح.' },
    'home.revTag':         { en: 'Hear it from our participants', ar: 'من كلام المشاركين' },
    'home.revH':           { en: 'What learners say after the last session', ar: 'المتعلّمين بيقولوا إيه بعد آخر جلسة' },
    'home.ctaH':           { en: 'Your next brief deserves a better system', ar: 'البريف الجاي يستاهل نظام أحسن' },
    'home.ctaP':           { en: 'Seats are capped so every learner gets reviewed work. Pick a course and start this cohort.', ar: 'الأماكن محدودة عشان كل متعلّم ياخد مراجعة على شغله. اختار كورس وابدأ مع الدفعة دي.' },

    /* --- catalog --- */
    'cat.title':           { en: 'All courses',             ar: 'كل الكورسات' },
    'cat.sub':             { en: 'Eight programmes across design, motion, brand and performance. Filter by what you need next.', ar: 'تمن برامج في التصميم والموشن والهوية والأداء. فلتر على اللي محتاجه دلوقتي.' },
    'cat.search':          { en: 'Search courses, skills, tools…', ar: 'ابحث عن كورس أو مهارة أو أداة…' },
    'cat.all':             { en: 'All',                     ar: 'الكل' },
    'cat.level':           { en: 'Level',                   ar: 'المستوى' },
    'cat.sort':            { en: 'Sort by',                 ar: 'ترتيب حسب' },
    'cat.sortPopular':     { en: 'Most popular',            ar: 'الأكثر رواجاً' },
    'cat.sortNew':         { en: 'Newest',                  ar: 'الأحدث' },
    'cat.sortRating':      { en: 'Highest rated',           ar: 'الأعلى تقييماً' },
    'cat.sortPriceUp':     { en: 'Price: low to high',      ar: 'السعر: من الأقل' },
    'cat.sortPriceDown':   { en: 'Price: high to low',      ar: 'السعر: من الأعلى' },
    'cat.count':           { en: 'courses',                 ar: 'كورس' },
    'cat.none':            { en: 'No course matches these filters yet.', ar: 'مفيش كورس مطابق للفلاتر دي.' },
    'cat.reset':           { en: 'Clear filters',           ar: 'مسح الفلاتر' },

    /* --- course page --- */
    'crs.starts':          { en: 'Starting date',           ar: 'تاريخ البداية' },
    'crs.format':          { en: 'Format',                  ar: 'الصيغة' },
    'crs.language':        { en: 'Language',                ar: 'اللغة' },
    'crs.duration':        { en: 'Duration',                ar: 'المدة' },
    'crs.lessons':         { en: 'lessons',                 ar: 'درس' },
    'crs.hours':           { en: 'hours',                   ar: 'ساعة' },
    'crs.weeks':           { en: 'weeks',                   ar: 'أسابيع' },
    'crs.week':            { en: 'Week',                    ar: 'أسبوع' },
    'crs.reviews':         { en: 'reviews',                 ar: 'تقييم' },
    'crs.enrolled':        { en: 'enrolled',                ar: 'ملتحق' },
    'crs.learnTag':        { en: 'Outcomes',                ar: 'المخرجات' },
    'crs.learnH':          { en: 'What you will actually learn', ar: 'هتتعلّم إيه بالظبط' },
    'crs.learnP':          { en: 'Not topics. Deliverables you walk out holding.', ar: 'مش عناوين. مخرجات هتخرج وهي في إيدك.' },
    'crs.roadTag':         { en: 'Curriculum',              ar: 'المنهج' },
    'crs.roadH':           { en: 'Your roadmap, week by week', ar: 'خريطتك أسبوع بأسبوع' },
    'crs.expandAll':       { en: 'Expand all',              ar: 'فتح الكل' },
    'crs.collapseAll':     { en: 'Collapse all',            ar: 'إغلاق الكل' },
    'crs.whoTag':          { en: 'Audience',                ar: 'لمين' },
    'crs.whoH':            { en: 'Who is this course for?',  ar: 'الكورس ده لمين؟' },
    'crs.skillTag':        { en: 'Skills',                  ar: 'المهارات' },
    'crs.skillH':          { en: 'Practical skills you can use immediately', ar: 'مهارات عملية تقدر تستخدمها فوراً' },
    'crs.instTag':         { en: 'Instructor',              ar: 'المدرب' },
    'crs.instH':           { en: 'Meet your instructor',    ar: 'اتعرّف على مدربك' },
    'crs.revTag':          { en: 'Reviews',                 ar: 'التقييمات' },
    'crs.revH':            { en: 'Hear it from our participants', ar: 'من كلام المشاركين' },
    'crs.planTag':         { en: 'Enrollment',              ar: 'التسجيل' },
    'crs.planH':           { en: 'Choose your plan',        ar: 'اختار باقتك' },
    'crs.planP':           { en: 'Same curriculum in every plan. What changes is how much of us you get.', ar: 'نفس المنهج في كل الباقات. اللي بيتغير هو قد إيه هتاخد منّا.' },
    'crs.valueTag':        { en: 'Beyond the course',       ar: 'بعد الكورس' },
    'crs.valueH':          { en: 'Your real-world application', ar: 'التطبيق في الشغل الحقيقي' },
    'crs.faqTag':          { en: 'FAQ',                     ar: 'أسئلة شائعة' },
    'crs.faqH':            { en: 'We have got you covered', ar: 'إحنا مغطينك' },
    'crs.enroll':          { en: 'Enroll now',              ar: 'سجّل دلوقتي' },
    'crs.continue':        { en: 'Continue learning',       ar: 'كمّل التعلّم' },
    'crs.enrolled_':       { en: 'You are enrolled',        ar: 'أنت مسجّل' },
    'crs.syllabus':        { en: 'Download syllabus',       ar: 'حمّل المنهج' },
    'crs.seatsLeft':       { en: 'seats left in this cohort', ar: 'مكان متبقي في الدفعة' },
    'crs.includes':        { en: 'This plan includes',      ar: 'الباقة دي بتشمل' },
    'crs.choose':          { en: 'Choose this plan',        ar: 'اختار الباقة دي' },
    'crs.popular':         { en: 'Most popular',            ar: 'الأكثر اختياراً' },
    'crs.bestValue':       { en: 'Best value',              ar: 'أفضل قيمة' },
    'crs.perSeat':         { en: 'per seat',                ar: 'للمقعد' },
    'crs.related':         { en: 'Learners also took',      ar: 'المتعلّمين أخدوا كمان' },
    'crs.preview':         { en: 'Preview',                 ar: 'معاينة' },
    'crs.locked':          { en: 'Locked until enrollment', ar: 'مقفول لحد التسجيل' },
    'crs.share':           { en: 'Share',                   ar: 'مشاركة' },
    'crs.save':            { en: 'Save',                    ar: 'حفظ' },
    'crs.saved':           { en: 'Saved',                   ar: 'اتحفظ' },

    /* --- student dashboard --- */
    'dash.hi':             { en: 'Welcome back',            ar: 'أهلاً بعودتك' },
    'dash.sub':            { en: 'Here is where you left off.', ar: 'دي النقطة اللي وقفت عندها.' },
    'dash.overview':       { en: 'Overview',                ar: 'نظرة عامة' },
    'dash.myCourses':      { en: 'My courses',              ar: 'كورساتي' },
    'dash.schedule':       { en: 'Schedule',                ar: 'الجدول' },
    'dash.assignments':    { en: 'Assignments',             ar: 'التسليمات' },
    'dash.badges':         { en: 'Badges',                  ar: 'الشارات' },
    'dash.certs':          { en: 'Certificates',            ar: 'الشهادات' },
    'dash.continue':       { en: 'Pick up where you left off', ar: 'كمّل من حيث وقفت' },
    'dash.resume':         { en: 'Resume lesson',           ar: 'كمّل الدرس' },
    'dash.kpiStreak':      { en: 'Day streak',              ar: 'أيام متتالية' },
    'dash.kpiHours':       { en: 'Hours learned',           ar: 'ساعة تعلّم' },
    'dash.kpiDone':        { en: 'Lessons completed',       ar: 'درس مكتمل' },
    'dash.kpiBadges':      { en: 'Badges earned',           ar: 'شارة مكتسبة' },
    'dash.weekGoal':       { en: 'Weekly goal',             ar: 'هدف الأسبوع' },
    'dash.goalMet':        { en: 'Goal met. Nice run.',     ar: 'الهدف اتحقق. شغل حلو.' },
    'dash.ofGoal':         { en: 'of your 5h weekly goal',  ar: 'من هدف الـ ٥ ساعات الأسبوعي' },
    'dash.activity':       { en: 'Learning activity',       ar: 'نشاط التعلّم' },
    'dash.last12':         { en: 'Last 12 weeks',           ar: 'آخر ١٢ أسبوع' },
    'dash.upcoming':       { en: 'Upcoming live sessions',  ar: 'الجلسات المباشرة القادمة' },
    'dash.addCal':         { en: 'Add to calendar',         ar: 'أضف للتقويم' },
    'dash.due':            { en: 'Due',                     ar: 'التسليم' },
    'dash.submit':         { en: 'Submit work',             ar: 'سلّم شغلك' },
    'dash.graded':         { en: 'Graded',                  ar: 'اتصحح' },
    'dash.inReview':       { en: 'In review',               ar: 'تحت المراجعة' },
    'dash.notStarted':     { en: 'Not started',             ar: 'لم يبدأ' },
    'dash.overdue':        { en: 'Overdue',                 ar: 'متأخر' },
    'dash.feedback':       { en: 'Read feedback',           ar: 'اقرأ الملاحظات' },
    'dash.badgeH':         { en: 'Badges you have earned',  ar: 'الشارات اللي كسبتها' },
    'dash.badgeP':         { en: 'Badges unlock as you build habits, not just as you finish videos.', ar: 'الشارات بتتفتح لما تبني عادات، مش بس لما تخلّص دروس.' },
    'dash.locked':         { en: 'Locked',                  ar: 'مقفولة' },
    'dash.certH':          { en: 'Your certificates',       ar: 'شهاداتك' },
    'dash.certView':       { en: 'View certificate',        ar: 'عرض الشهادة' },
    'dash.certId':         { en: 'Credential ID',           ar: 'رقم الشهادة' },
    'dash.noCert':         { en: 'Finish a course to earn your first certificate.', ar: 'خلّص كورس عشان تاخد أول شهادة.' },
    'dash.explore':        { en: 'Explore more courses',    ar: 'اكتشف كورسات أكتر' },
    'dash.mentor':         { en: 'Book a mentor session',   ar: 'احجز جلسة مع مرشد' },

    /* --- classroom --- */
    'room.back':           { en: 'Back to course',          ar: 'رجوع للكورس' },
    'room.contents':       { en: 'Course contents',         ar: 'محتوى الكورس' },
    'room.notes':          { en: 'Notes',                   ar: 'ملاحظات' },
    'room.resources':      { en: 'Resources',               ar: 'الملفات' },
    'room.transcript':     { en: 'Transcript',              ar: 'النص' },
    'room.quiz':           { en: 'Checkpoint',              ar: 'اختبار قصير' },
    'room.discussion':     { en: 'Discussion',              ar: 'النقاش' },
    'room.markDone':       { en: 'Mark as complete',        ar: 'علّم كمكتمل' },
    'room.done':           { en: 'Completed',               ar: 'مكتمل' },
    'room.next':           { en: 'Next lesson',             ar: 'الدرس التالي' },
    'room.prev':           { en: 'Previous',                ar: 'السابق' },
    'room.noteSave':       { en: 'Save note',               ar: 'احفظ الملاحظة' },
    'room.notePh':         { en: 'Write what you want to remember from this lesson…', ar: 'اكتب اللي عايز تفتكره من الدرس ده…' },
    'room.noteEmpty':      { en: 'No notes on this lesson yet.', ar: 'مفيش ملاحظات على الدرس ده لسه.' },
    'room.download':       { en: 'Download',                ar: 'تحميل' },
    'room.check':          { en: 'Check answer',            ar: 'تحقّق من الإجابة' },
    'room.correct':        { en: 'Correct. Nice.',          ar: 'إجابة صحيحة.' },
    'room.wrong':          { en: 'Not quite. Try again.',   ar: 'مش بالظبط. جرّب تاني.' },
    'room.progress':       { en: 'course progress',         ar: 'من تقدم الكورس' },
    'room.postReply':      { en: 'Post reply',              ar: 'انشر ردك' },
    'room.replyPh':        { en: 'Ask the group or the instructor…', ar: 'اسأل المجموعة أو المدرب…' },

    /* --- instructor studio --- */
    'ins.title':           { en: 'Instructor studio',       ar: 'استوديو المدرب' },
    'ins.sub':             { en: 'Your cohorts, submissions and course health in one place.', ar: 'دفعاتك وتسليماتك وحالة كورساتك في مكان واحد.' },
    'ins.overview':        { en: 'Overview',                ar: 'نظرة عامة' },
    'ins.courses':         { en: 'My courses',              ar: 'كورساتي' },
    'ins.students':        { en: 'Students',                ar: 'الطلاب' },
    'ins.grading':         { en: 'Grading queue',           ar: 'قائمة التصحيح' },
    'ins.analytics':       { en: 'Analytics',               ar: 'التحليلات' },
    'ins.announce':        { en: 'Announcements',           ar: 'الإعلانات' },
    'ins.kpiStudents':     { en: 'Active students',         ar: 'طالب نشط' },
    'ins.kpiQueue':        { en: 'Awaiting review',         ar: 'في انتظار المراجعة' },
    'ins.kpiRating':       { en: 'Instructor rating',       ar: 'تقييم المدرب' },
    'ins.kpiRevenue':      { en: 'Revenue this month',      ar: 'إيراد الشهر' },
    'ins.newCourse':       { en: 'New course',              ar: 'كورس جديد' },
    'ins.publish':         { en: 'Published',               ar: 'منشور' },
    'ins.draft':           { en: 'Draft',                   ar: 'مسودة' },
    'ins.enrollment':      { en: 'Enrollment',              ar: 'التسجيلات' },
    'ins.completion':      { en: 'Completion',              ar: 'الإكمال' },
    'ins.rating':          { en: 'Rating',                  ar: 'التقييم' },
    'ins.manage':          { en: 'Manage',                  ar: 'إدارة' },
    'ins.student':         { en: 'Student',                 ar: 'الطالب' },
    'ins.course':          { en: 'Course',                  ar: 'الكورس' },
    'ins.progress':        { en: 'Progress',                ar: 'التقدم' },
    'ins.lastSeen':        { en: 'Last active',             ar: 'آخر نشاط' },
    'ins.status':          { en: 'Status',                  ar: 'الحالة' },
    'ins.onTrack':         { en: 'On track',                ar: 'منتظم' },
    'ins.atRisk':          { en: 'Needs a nudge',           ar: 'محتاج متابعة' },
    'ins.ahead':           { en: 'Ahead',                   ar: 'متقدم' },
    'ins.message':         { en: 'Message',                 ar: 'رسالة' },
    'ins.assignment':      { en: 'Assignment',              ar: 'التسليم' },
    'ins.submitted':       { en: 'Submitted',               ar: 'اتسلّم' },
    'ins.review':          { en: 'Review',                  ar: 'راجع' },
    'ins.openWork':        { en: 'Open submission',         ar: 'افتح التسليم' },
    'ins.score':           { en: 'Score',                   ar: 'الدرجة' },
    'ins.sendFb':          { en: 'Send feedback',           ar: 'ابعت الملاحظات' },
    'ins.fbPh':            { en: 'Be specific. Name the craft skill, then the fix…', ar: 'كن محدداً. اذكر المهارة، وبعدين التعديل…' },
    'ins.postAnn':         { en: 'Post announcement',       ar: 'انشر إعلان' },
    'ins.annPh':           { en: 'What should this cohort know today?', ar: 'الدفعة دي محتاجة تعرف إيه النهارده؟' },
    'ins.watchTag':        { en: 'Where learners drop',     ar: 'المتعلّمين بيقفوا فين' },
    'ins.watchP':          { en: 'Completion by module. The dip is where the lesson needs work.', ar: 'الإكمال حسب الموديول. الهبوط هو الدرس اللي محتاج شغل.' },

    /* --- auth + checkout --- */
    'auth.title':          { en: 'Sign in to your academy', ar: 'ادخل على أكاديميتك' },
    'auth.sub':            { en: 'Pick a demo role to explore the full system.', ar: 'اختار دور تجريبي عشان تستكشف النظام كامل.' },
    'auth.asStudent':      { en: 'Continue as student',     ar: 'ادخل كطالب' },
    'auth.asInstructor':   { en: 'Continue as instructor',  ar: 'ادخل كمدرب' },
    'auth.email':          { en: 'Email',                   ar: 'البريد الإلكتروني' },
    'auth.password':       { en: 'Password',                ar: 'كلمة المرور' },
    'auth.remember':       { en: 'Keep me signed in',       ar: 'خليني مسجّل' },
    'auth.demoNote':       { en: 'Demo build. No account is created and nothing is sent anywhere.', ar: 'نسخة تجريبية. مفيش حساب بيتعمل ولا بيانات بتتبعت لأي مكان.' },
    'auth.signout':        { en: 'Sign out',                ar: 'تسجيل الخروج' },

    'chk.title':           { en: 'Complete your enrollment', ar: 'أكمل تسجيلك' },
    'chk.summary':         { en: 'Order summary',           ar: 'ملخص الطلب' },
    'chk.plan':            { en: 'Plan',                    ar: 'الباقة' },
    'chk.subtotal':        { en: 'Subtotal',                ar: 'المجموع' },
    'chk.discount':        { en: 'Discount',                ar: 'الخصم' },
    'chk.total':           { en: 'Total',                   ar: 'الإجمالي' },
    'chk.promo':           { en: 'Promo code',              ar: 'كود الخصم' },
    'chk.apply':           { en: 'Apply',                   ar: 'تطبيق' },
    'chk.promoOk':         { en: 'Code applied.',           ar: 'الكود اتطبّق.' },
    'chk.promoBad':        { en: 'That code is not valid.', ar: 'الكود ده مش صحيح.' },
    'chk.pay':             { en: 'Confirm enrollment',      ar: 'تأكيد التسجيل' },
    'chk.payNote':         { en: 'This is a demo. No payment is taken and no card details are collected.', ar: 'دي نسخة تجريبية. مفيش دفع ولا بيانات كارت بتتجمع.' },
    'chk.doneH':           { en: 'You are in.',             ar: 'تمام، أنت معانا.' },
    'chk.doneP':           { en: 'Your seat is reserved. The classroom is open now.', ar: 'مقعدك محجوز. الفصل مفتوح دلوقتي.' },
    'chk.goRoom':          { en: 'Open the classroom',      ar: 'افتح الفصل' },

    /* --- misc --- */
    'g.min':               { en: 'min',                     ar: 'دقيقة' },
    'g.free':              { en: 'Free',                    ar: 'مجاني' },
    'g.egp':               { en: 'EGP',                     ar: 'جنيه' },
    'g.of':                { en: 'of',                      ar: 'من' },
    'g.complete':          { en: 'complete',                ar: 'مكتمل' },
    'g.viewAll':           { en: 'View all',                ar: 'عرض الكل' },
    'g.close':             { en: 'Close',                   ar: 'إغلاق' },
    'g.cancel':            { en: 'Cancel',                  ar: 'إلغاء' },
    'g.loading':           { en: 'Loading…',                ar: 'جاري التحميل…' },
    'g.demo':              { en: 'Demo build',              ar: 'نسخة تجريبية' },
    'ftr.tagline':         { en: 'The in-house academy of Osolutions. We teach the systems we ship.', ar: 'الأكاديمية الداخلية لأوسوليوشنز. بنعلّم الأنظمة اللي بنشتغل بيها.' },
    'ftr.learn':           { en: 'Learn',                   ar: 'تعلّم' },
    'ftr.company':         { en: 'Company',                 ar: 'الشركة' },
    'ftr.support':         { en: 'Support',                 ar: 'الدعم' },
    'ftr.privacy':         { en: 'Privacy policy',          ar: 'سياسة الخصوصية' },
    'ftr.terms':           { en: 'Terms & conditions',      ar: 'الشروط والأحكام' },
    'ftr.refund':          { en: 'Refund policy',           ar: 'سياسة الاسترجاع' },
    'ftr.help':            { en: 'Help centre',             ar: 'مركز المساعدة' },
    'ftr.rights':          { en: 'Osolutions Academy. All rights reserved.', ar: 'أكاديمية أوسوليوشنز. كل الحقوق محفوظة.' },

    /* --- badge names --- */
    'lvl.beginner':        { en: 'Beginner',                ar: 'مبتدئ' },
    'lvl.intermediate':    { en: 'Intermediate',            ar: 'متوسط' },
    'lvl.advanced':        { en: 'Advanced',                ar: 'متقدم' },
    'b.bestseller':        { en: 'Bestseller',              ar: 'الأكثر مبيعاً' },
    'b.new':               { en: 'New',                     ar: 'جديد' },
    'b.live':              { en: 'Live + recorded',         ar: 'مباشر + مسجّل' },
    'b.recorded':          { en: 'Self paced',              ar: 'حسب وقتك' },
    'b.cert':              { en: 'Certificate',             ar: 'شهادة' },
    'b.arabic':            { en: 'Arabic subtitles',        ar: 'ترجمة عربية' },
    'b.seats':             { en: 'Limited seats',           ar: 'أماكن محدودة' },
    'b.mentor':            { en: '1-to-1 mentoring',        ar: 'إرشاد فردي' },
    'b.portfolio':         { en: 'Portfolio piece',         ar: 'عمل للبورتفوليو' },
    'b.team':              { en: 'Team friendly',           ar: 'مناسب للفرق' },
    'b.updated':           { en: 'Updated 2026',            ar: 'محدّث ٢٠٢٦' },

    /* --- command palette --- */
    'nav.console':         { en: 'Business console',        ar: 'لوحة الأعمال' },
    'nav.search':          { en: 'Search',                  ar: 'بحث' },
    'cmd.pages':           { en: 'Pages',                   ar: 'الصفحات' },
    'cmd.actions':         { en: 'Actions',                 ar: 'إجراءات' },
    'cmd.ph':              { en: 'Search courses, pages, actions…', ar: 'ابحث في الكورسات والصفحات والإجراءات…' },

    /* --- conversion --- */
    'cro.cohortIn':        { en: 'Next cohort starts in',   ar: 'الدفعة الجاية بتبدأ خلال' },
    'cro.d':               { en: 'days',                    ar: 'يوم' },
    'cro.h':               { en: 'hrs',                     ar: 'ساعة' },
    'cro.m':               { en: 'min',                     ar: 'دقيقة' },
    'cro.s':               { en: 'sec',                     ar: 'ثانية' },
    'cro.leadH':           { en: 'Take the first module free', ar: 'خد أول موديول مجاناً' },
    'cro.leadP':           { en: 'We will send you the opening module of Build a Social Design System, plus the grid file we use on client accounts. No cost, no cohort commitment.', ar: 'هنبعتلك الموديول الأول من كورس بناء نظام تصميم سوشيال، ومعاه ملف الجريد اللي بنستخدمه على حسابات العملاء. من غير تكلفة ومن غير التزام بدفعة.' },
    'cro.leadCta':         { en: 'Send me the module',      ar: 'ابعتلي الموديول' },
    'cro.leadPh':          { en: 'you@company.com',         ar: 'you@company.com' },
    'cro.leadOk':          { en: 'On its way. Check your inbox in a minute.', ar: 'في الطريق. شوف الإيميل خلال دقيقة.' },
    'cro.leadBad':         { en: 'That email does not look right.', ar: 'الإيميل ده شكله مش مظبوط.' },
    'cro.perk1':           { en: 'The full opening module, not a trailer', ar: 'الموديول الأول كامل، مش تريلر' },
    'cro.perk2':           { en: 'The master grid working file',  ar: 'ملف الجريد الأساسي' },
    'cro.perk3':           { en: 'The QA checklist we run before delivery', ar: 'تشيك ليست المراجعة اللي بنعملها قبل التسليم' },
    'cro.later':           { en: 'Not now',                  ar: 'مش دلوقتي' },
    'cro.guarantee':       { en: 'Full refund before the third session, no forms asked.', ar: 'استرجاع كامل قبل الجلسة التالتة، من غير أي استمارات.' },
    'cro.seatsFast':       { en: 'seats went this week',     ar: 'مقعد اتحجز الأسبوع ده' },

    /* --- 404 --- */
    'nf.h':                { en: 'That page is not here',    ar: 'الصفحة دي مش موجودة' },
    'nf.p':                { en: 'The link may be old, or the course may have been renamed. The catalog is the fastest way back.', ar: 'الرابط ممكن يكون قديم، أو الكورس اتغير اسمه. الكتالوج أسرع طريق للرجوع.' },
    'nf.cta':              { en: 'Back to courses',          ar: 'رجوع للكورسات' }
  };

  const LS_KEY = 'osoAcademy.lang';

  const I18n = {
    dict: DICT,
    lang: 'en',

    t(key) {
      const row = DICT[key];
      if (!row) return key;
      return row[this.lang] || row.en;
    },

    /* pick the right side of a {en, ar} content object */
    pick(val) {
      if (val == null) return '';
      if (typeof val === 'string') return val;
      return val[this.lang] != null ? val[this.lang] : (val.en || '');
    },

    num(n) {
      if (n == null) return '';
      return Number(n).toLocaleString(this.lang === 'ar' ? 'ar-EG' : 'en-US');
    },

    money(n) {
      return this.num(n) + ' ' + this.t('g.egp');
    },

    date(iso) {
      const d = new Date(iso + 'T00:00:00');
      if (isNaN(d)) return iso;
      return d.toLocaleDateString(this.lang === 'ar' ? 'ar-EG' : 'en-GB',
        { day: 'numeric', month: 'long', year: 'numeric' });
    },

    dateShort(iso) {
      const d = new Date(iso + 'T00:00:00');
      if (isNaN(d)) return iso;
      return d.toLocaleDateString(this.lang === 'ar' ? 'ar-EG' : 'en-GB',
        { day: 'numeric', month: 'short' });
    },

    /* rewrite every [data-i18n] node in the tree */
    apply(root) {
      (root || document).querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = this.t(el.getAttribute('data-i18n'));
      });
      (root || document).querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.setAttribute('placeholder', this.t(el.getAttribute('data-i18n-ph')));
      });
      (root || document).querySelectorAll('[data-i18n-label]').forEach(el => {
        el.setAttribute('aria-label', this.t(el.getAttribute('data-i18n-label')));
      });
    },

    set(lang, opts) {
      this.lang = (lang === 'ar') ? 'ar' : 'en';
      try { localStorage.setItem(LS_KEY, this.lang); } catch (e) {}
      const html = document.documentElement;
      html.lang = this.lang;
      html.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
      this.apply(document);
      if (!opts || !opts.silent) {
        document.dispatchEvent(new CustomEvent('lang:change', { detail: { lang: this.lang } }));
      }
    },

    init() {
      let saved = null;
      try { saved = localStorage.getItem(LS_KEY); } catch (e) {}
      this.set(saved || 'en', { silent: true });
    },

    toggle() { this.set(this.lang === 'en' ? 'ar' : 'en'); }
  };

  w.I18n = I18n;
})(window);
