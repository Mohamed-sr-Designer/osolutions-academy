/* ==========================================================================
   OSOLUTIONS ACADEMY — support and legal pages
   Help centre, privacy, terms and refunds. One controller, four page keys.
   ========================================================================== */
(function (w) {
  'use strict';

  const P = ({ en, ar }) => ({ en, ar });

  const PAGES = {

    /* ------------------------------------------------ help ------------- */
    help: {
      crumb: { en: 'Help centre', ar: 'مركز المساعدة' },
      h:     { en: 'Help centre', ar: 'مركز المساعدة' },
      sub:   { en: 'Most questions land in one of these five places. If yours does not, a human answers hello@osolutions.academy inside one working day.', ar: 'أغلب الأسئلة بتقع في واحدة من الخمس مجموعات دي. لو سؤالك مش فيها، في حد حقيقي بيرد على hello@osolutions.academy خلال يوم عمل.' },
      type: 'help',
      groups: [
        { i: 'cap', t: { en: 'Enrolling', ar: 'التسجيل' },
          p: { en: 'Picking a course, choosing a plan and holding a seat.', ar: 'اختيار الكورس والباقة وحجز المقعد.' },
          links: [
            { t: { en: 'Which course fits me?', ar: 'أنهي كورس مناسب ليا؟' }, h: 'courses.html' },
            { t: { en: 'Compare the three plans', ar: 'قارن التلات باقات' }, h: 'course.html?id=social-systems#plans' },
            { t: { en: 'Pay for a team', ar: 'الدفع لفريق' }, h: 'about.html#contact' }
          ] },
        { i: 'chat', t: { en: 'Sessions', ar: 'الجلسات' },
          p: { en: 'On site, live online and recorded, and what happens if you miss one.', ar: 'حضوري وأونلاين مباشر ومسجّل، وإيه اللي بيحصل لو فوّت واحدة.' },
          links: [
            { t: { en: 'How the sessions run', ar: 'الجلسات بتشتغل إزاي' }, h: 'course.html?id=social-systems' },
            { t: { en: 'Missed a live session', ar: 'فوّت جلسة مباشرة' }, h: 'help.html#missed' },
            { t: { en: 'Session times by country', ar: 'مواعيد الجلسات حسب البلد' }, h: 'help.html#times' }
          ] },
        { i: 'folder', t: { en: 'Files and briefs', ar: 'الملفات والبريفات' },
          p: { en: 'Downloads, submissions and how feedback comes back.', ar: 'التحميلات والتسليمات وإزاي الملاحظات بترجع.' },
          links: [
            { t: { en: 'Where my files live', ar: 'ملفاتي فين' }, h: 'dashboard.html#courses' },
            { t: { en: 'Submitting a brief', ar: 'تسليم بريف' }, h: 'dashboard.html#assignments' },
            { t: { en: 'Reading your feedback', ar: 'قراءة الملاحظات' }, h: 'dashboard.html#assignments' }
          ] },
        { i: 'trophy', t: { en: 'Certificates', ar: 'الشهادات' },
          p: { en: 'What you have to finish, and how the credential is verified.', ar: 'لازم تخلّص إيه، وإزاي الشهادة بتتوثّق.' },
          links: [
            { t: { en: 'Certificate requirements', ar: 'شروط الشهادة' }, h: 'help.html#cert' },
            { t: { en: 'Find my certificate', ar: 'ألاقي شهادتي' }, h: 'dashboard.html#certs' },
            { t: { en: 'Badges and how they unlock', ar: 'الشارات وبتتفتح إزاي' }, h: 'dashboard.html#badges' }
          ] },
        { i: 'money', t: { en: 'Payments and refunds', ar: 'الدفع والاسترجاع' },
          p: { en: 'Invoices, promo codes and the refund window.', ar: 'الفواتير وأكواد الخصم ومدة الاسترجاع.' },
          links: [
            { t: { en: 'Refund policy', ar: 'سياسة الاسترجاع' }, h: 'refunds.html' },
            { t: { en: 'Company invoice', ar: 'فاتورة للشركة' }, h: 'about.html#contact' },
            { t: { en: 'Promo codes', ar: 'أكواد الخصم' }, h: 'help.html#promo' }
          ] },
        { i: 'user', t: { en: 'Account', ar: 'الحساب' },
          p: { en: 'Access, language, theme and leaving the platform.', ar: 'الدخول واللغة والوضع ومغادرة المنصة.' },
          links: [
            { t: { en: 'Switch language or theme', ar: 'تغيير اللغة أو الوضع' }, h: 'help.html#prefs' },
            { t: { en: 'Privacy policy', ar: 'سياسة الخصوصية' }, h: 'privacy.html' },
            { t: { en: 'Terms and conditions', ar: 'الشروط والأحكام' }, h: 'terms.html' }
          ] }
      ],
      after: [
        { id: 'missed', h: { en: 'If you miss a live session', ar: 'لو فوّت جلسة مباشرة' },
          p: [{ en: 'Nothing closes. The recording is posted the same evening and stays in your account for life. The first time you miss a week, the brief deadline for that week extends by seven days automatically, with no request needed.', ar: 'مفيش حاجة بتتقفل. التسجيل بيتنشر نفس الليلة وبيفضل في حسابك للأبد. أول مرة تفوّت أسبوع، موعد تسليم البريف بيتمدّ سبع أيام أوتوماتيك من غير ما تطلب.' }] },
        { id: 'times', h: { en: 'Session times', ar: 'مواعيد الجلسات' },
          p: [{ en: 'Live rooms run at 8 PM Cairo time. That is 9 PM in Riyadh and Kuwait, 10 PM in Dubai, and 7 PM in most of Western Europe. On site sessions run in the Osolutions studio in Cairo on Saturday afternoons.', ar: 'الأوض المباشرة الساعة ٨ مساءً بتوقيت القاهرة. يعني ٩ مساءً في الرياض والكويت، ١٠ مساءً في دبي، و٧ مساءً في أغلب أوروبا الغربية. الجلسات الحضورية في استوديو أوسوليوشنز بالقاهرة بعد ضهر السبت.' }] },
        { id: 'cert', h: { en: 'Certificate requirements', ar: 'شروط الشهادة' },
          p: [{ en: 'Complete every module and submit the final brief. The certificate carries a credential ID that links to a public page listing what the course covered, so anyone can check it without contacting us.', ar: 'خلّص كل الموديولات وسلّم البريف النهائي. الشهادة بتحمل رقم تحقّق بيوصل لصفحة عامة موضّح فيها الكورس غطّى إيه، فأي حد يقدر يتأكد من غير ما يكلّمنا.' }] },
        { id: 'promo', h: { en: 'Promo codes', ar: 'أكواد الخصم' },
          p: [{ en: 'Codes are entered at checkout and apply before tax. Alumni codes stack with nothing else, and a code cannot be applied after an enrollment is confirmed.', ar: 'الأكواد بتتكتب في صفحة الدفع وبتتطبّق قبل الضريبة. أكواد الخريجين مبتتجمعش مع أي خصم تاني، والكود مش بيتطبّق بعد ما التسجيل يتأكد.' }] },
        { id: 'prefs', h: { en: 'Language and theme', ar: 'اللغة والوضع' },
          p: [{ en: 'The globe button in the header switches the whole platform between English and Arabic, including direction. The moon and sun button switches between light and dark. Both choices are remembered on your device.', ar: 'زرار الكرة الأرضية في الهيدر بيحوّل المنصة كلها بين الإنجليزي والعربي، وبيغيّر الاتجاه كمان. زرار القمر والشمس بيبدّل بين الفاتح والغامق. الاختيارين بيتحفظوا على جهازك.' }] }
      ]
    },

    /* ------------------------------------------------ privacy ---------- */
    privacy: {
      crumb: { en: 'Privacy policy', ar: 'سياسة الخصوصية' },
      h:     { en: 'Privacy policy', ar: 'سياسة الخصوصية' },
      sub:   { en: 'Short version: we collect what an academy needs to teach you and invoice you, and nothing else.', ar: 'باختصار: بنجمع اللي الأكاديمية محتاجاه عشان تعلّمك وتصدرلك فاتورة، ومش أكتر.' },
      updated: '2026-08-20',
      sections: [
        { h: { en: 'What we collect', ar: 'بنجمع إيه' },
          li: [
            { en: 'Your name, email and phone number, given when you enroll.', ar: 'اسمك وإيميلك ورقم موبايلك، اللي بتديهم وقت التسجيل.' },
            { en: 'Your progress: lessons completed, briefs submitted, checkpoint answers.', ar: 'تقدمك: الدروس المكتملة والبريفات المسلّمة وإجابات الاختبارات.' },
            { en: 'The work you submit for review, kept until you ask us to delete it.', ar: 'الشغل اللي بتسلّمه للمراجعة، وبيفضل لحد ما تطلب حذفه.' },
            { en: 'Basic device and page data so we can find broken pages.', ar: 'بيانات جهاز وصفحات أساسية عشان نلاقي الصفحات المكسورة.' },
            { en: 'If you arrived from a campaign, the campaign tag that brought you.', ar: 'لو جيت من حملة، وسم الحملة اللي جابك.' }
          ] },
        { h: { en: 'What we never do', ar: 'اللي عمرنا ما بنعمله' },
          li: [
            { en: 'Sell or rent your details to anyone.', ar: 'نبيع أو نأجّر بياناتك لأي حد.' },
            { en: 'Publish your submitted work without asking you first.', ar: 'ننشر شغلك المسلّم من غير ما نسألك الأول.' },
            { en: 'Store card numbers. Payment is handled by the processor, not by us.', ar: 'نخزّن أرقام كروت. الدفع بيتم عند مزوّد الدفع مش عندنا.' }
          ] },
        { h: { en: 'How long we keep it', ar: 'بنحتفظ بيها قد إيه' },
          p: [
            { en: 'Account and progress data stays while your account is open, because your course access is for life. Invoices are kept for seven years, which Egyptian tax law requires. Everything else is deleted within thirty days of a deletion request.', ar: 'بيانات الحساب والتقدم بتفضل طول ما حسابك مفتوح، لأن وصولك للكورس مدى الحياة. الفواتير بتتحفظ سبع سنين حسب قانون الضرائب المصري. أي حاجة تانية بتتمسح خلال تلاتين يوم من طلب الحذف.' }
          ] },
        { h: { en: 'Your choices', ar: 'اختياراتك' },
          li: [
            { en: 'Ask for a copy of everything we hold about you.', ar: 'تطلب نسخة من كل حاجة عندنا عنك.' },
            { en: 'Ask us to correct anything that is wrong.', ar: 'تطلب تصحيح أي حاجة غلط.' },
            { en: 'Ask us to delete your account and your submitted work.', ar: 'تطلب حذف حسابك وشغلك المسلّم.' },
            { en: 'Unsubscribe from anything that is not about a course you are in.', ar: 'تلغي اشتراكك في أي حاجة مش خاصة بكورس أنت فيه.' }
          ] },
        { h: { en: 'Contact', ar: 'التواصل' },
          p: [
            { en: 'Write to privacy@osolutions.academy. A person reads it, and we answer inside one working day.', ar: 'ابعت لـ privacy@osolutions.academy. حد حقيقي بيقراها، وبنرد خلال يوم عمل واحد.' }
          ] }
      ]
    },

    /* ------------------------------------------------ terms ------------ */
    terms: {
      crumb: { en: 'Terms & conditions', ar: 'الشروط والأحكام' },
      h:     { en: 'Terms and conditions', ar: 'الشروط والأحكام' },
      sub:   { en: 'What you get when you enroll, what we expect back, and what happens if either side cannot deliver.', ar: 'بتاخد إيه لما تسجّل، وبنتوقع إيه منك، وإيه اللي بيحصل لو طرف مقدرش يلتزم.' },
      updated: '2026-08-20',
      sections: [
        { h: { en: 'Your seat', ar: 'مقعدك' },
          p: [{ en: 'A confirmed enrollment holds one seat in one named cohort. Seats are capped so every brief gets reviewed, which is why a seat is not transferable to another person after the cohort starts.', ar: 'التسجيل المؤكد بيحجز مقعد واحد في دفعة محددة بالاسم. المقاعد محدودة عشان كل بريف ياخد مراجعة، وعشان كده المقعد مش قابل للتحويل لشخص تاني بعد ما الدفعة تبدأ.' }] },
        { h: { en: 'What we owe you', ar: 'اللي علينا ليك' },
          li: [
            { en: 'Every module in the published curriculum, delivered in the stated format.', ar: 'كل موديول في المنهج المنشور، بيتسلّم بالصيغة المعلنة.' },
            { en: 'One live review room each week for the length of the course.', ar: 'أوضة مراجعة مباشرة كل أسبوع طول مدة الكورس.' },
            { en: 'A written reply to every brief you submit on a plan that includes review.', ar: 'رد مكتوب على كل بريف بتسلّمه في باقة فيها مراجعة.' },
            { en: 'Access to the recordings and files for as long as the course exists.', ar: 'وصول للتسجيلات والملفات طول ما الكورس موجود.' }
          ] },
        { h: { en: 'What we ask of you', ar: 'اللي بنطلبه منك' },
          li: [
            { en: 'Do not share your login, the recordings or the files outside your seat.', ar: 'متشاركش بيانات دخولك ولا التسجيلات ولا الملفات بره مقعدك.' },
            { en: 'Do not resell or re-teach the material as your own course.', ar: 'متبعش ولا تعيد تدريس المادة كأنها كورسك.' },
            { en: 'Keep the cohort room civil. We remove people who do not, without a refund.', ar: 'حافظ على احترام أوضة الدفعة. بنستبعد اللي مبيلتزمش، من غير استرجاع.' }
          ] },
        { h: { en: 'Your work stays yours', ar: 'شغلك ملكك' },
          p: [{ en: 'You own everything you make on the course. We ask separately, in writing, before showing any of it publicly, and a no costs you nothing.', ar: 'إنت بتملك كل حاجة بتعملها في الكورس. بنسأل بشكل منفصل وكتابةً قبل ما نعرض أي حاجة منها، ولو قلت لأ مش هيكلفك حاجة.' }] },
        { h: { en: 'If a cohort cannot run', ar: 'لو الدفعة مقدرتش تشتغل' },
          p: [{ en: 'If we cancel or postpone a cohort, you choose: a full refund, or a seat in the next one. If an individual live session cannot run, it is rescheduled within the same week and recorded either way.', ar: 'لو ألغينا أو أجّلنا دفعة، إنت تختار: استرجاع كامل، أو مقعد في اللي بعدها. لو جلسة مباشرة واحدة مقدرتش تتم، بتتأجل في نفس الأسبوع وبتتسجّل في الحالتين.' }] },
        { h: { en: 'Changes to these terms', ar: 'تغييرات على الشروط' },
          p: [{ en: 'If we change anything material, enrolled learners are emailed before it takes effect, and the change never applies backwards to a cohort already running.', ar: 'لو غيّرنا حاجة جوهرية، المتعلّمين المسجّلين بياخدوا إيميل قبل ما تسري، والتغيير عمره ما بيتطبّق بأثر رجعي على دفعة شغّالة.' }] }
      ]
    },

    /* ------------------------------------------------ refunds ---------- */
    refunds: {
      crumb: { en: 'Refund policy', ar: 'سياسة الاسترجاع' },
      h:     { en: 'Refund policy', ar: 'سياسة الاسترجاع' },
      sub:   { en: 'Tell us before the third session and you get everything back. No forms, no exit interview, no questions.', ar: 'قولنا قبل الجلسة التالتة وهترجع كل حاجة. من غير استمارات ولا مقابلة خروج ولا أسئلة.' },
      updated: '2026-08-20',
      sections: [
        { h: { en: 'The window', ar: 'المدة' },
          li: [
            { en: 'Before the cohort starts: full refund, always.', ar: 'قبل ما الدفعة تبدأ: استرجاع كامل، دايماً.' },
            { en: 'Before the third live session: full refund, no reason needed.', ar: 'قبل الجلسة المباشرة التالتة: استرجاع كامل، من غير سبب.' },
            { en: 'After the third session: we move you to another course in the catalog instead.', ar: 'بعد الجلسة التالتة: بننقلك لكورس تاني من الكتالوج بدل الاسترجاع.' },
            { en: 'Self paced plans: full refund inside fourteen days if you have finished under a quarter of the lessons.', ar: 'الباقات حسب الوقت: استرجاع كامل خلال أربعتاشر يوم لو خلّصت أقل من ربع الدروس.' }
          ] },
        { h: { en: 'How to ask', ar: 'إزاي تطلب' },
          p: [{ en: 'One line to refunds@osolutions.academy with the email you enrolled with. That is the whole process. We do not ask why, and asking does not affect anything else about your account.', ar: 'سطر واحد لـ refunds@osolutions.academy بالإيميل اللي سجّلت بيه. دي العملية كلها. مش بنسأل ليه، والطلب مش بيأثر على أي حاجة تانية في حسابك.' }] },
        { h: { en: 'How long it takes', ar: 'بياخد قد إيه' },
          p: [{ en: 'We approve the same working day. The money leaves us within three working days, and reaches your card or wallet within five to ten depending on your bank.', ar: 'بنوافق في نفس يوم العمل. الفلوس بتخرج مننا خلال تلات أيام عمل، وبتوصل للكارت أو المحفظة خلال خمسة لعشرة أيام حسب البنك.' }] },
        { h: { en: 'Team and double seats', ar: 'باقات الفرق والمقعدين' },
          p: [{ en: 'A double seat can be refunded as a whole or reduced to a single seat, priced at the single seat rate on the day you enrolled. Company invoices are credited back to the company, not to an individual.', ar: 'باقة المقعدين ممكن ترجع كاملة أو تتحوّل لمقعد واحد بسعر المقعد الواحد يوم ما سجّلت. فواتير الشركات بترجع للشركة مش للفرد.' }] },
        { h: { en: 'What is not refundable', ar: 'اللي مش بيترجع' },
          li: [
            { en: 'A certificate that has already been issued.', ar: 'شهادة اتصدرت خلاص.' },
            { en: 'A seat removed from the cohort for conduct.', ar: 'مقعد اتشال من الدفعة بسبب السلوك.' },
            { en: 'A course you have already completed in full.', ar: 'كورس خلّصته بالكامل.' }
          ] }
      ],
      ctaOverride: true
    }
  };

  w.SUPPORT_PAGES = PAGES;
})(window);
