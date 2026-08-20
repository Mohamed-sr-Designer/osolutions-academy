/* About page */
(function (w, d) {
  'use strict';

  const C = {
    h1: { en: 'An agency that decided to teach', ar: 'وكالة قرّرت تعلّم' },
    sub: { en: 'Osolutions Academy is the training arm of Osolutions, a creative and performance agency in Cairo. We started teaching because we kept hiring people who could execute but had never been handed a system.', ar: 'أكاديمية أوسوليوشنز هي الذراع التدريبي لأوسوليوشنز، وكالة كرييتف وأداء في القاهرة. بدأنا نعلّم لأننا فضلنا نوظّف ناس بتنفّذ كويس بس محدش سلّمها نظام.' },
    storyTag: { en: 'The story', ar: 'الحكاية' },
    storyH: { en: 'It started as an internal onboarding folder', ar: 'بدأت كفولدر تدريب داخلي' },
    story: [
      { en: 'Every new designer who joined the studio got the same three weeks: read these files, watch how we review, then do it yourself. The folder kept growing because the questions kept repeating.', ar: 'كل مصمم جديد بينضم للاستوديو بياخد نفس التلات أسابيع: اقرا الملفات دي، اتفرج على طريقة مراجعتنا، وبعدين اعملها بنفسك. الفولدر كبر لأن الأسئلة فضلت تتكرر.' },
      { en: 'When freelancers we worked with started asking for the same folder, it stopped being an internal document and became a course. The first cohort was eleven people in a meeting room.', ar: 'لما الفريلانسرز اللي بنشتغل معاهم بدأوا يطلبوا نفس الفولدر، بطّل يكون ورقة داخلية وبقى كورس. أول دفعة كانت إحدى عشر شخص في أوضة اجتماعات.' },
      { en: 'The rule has not changed since then. We only teach systems that are running on a live client account, and every course is rewritten by the person who runs it, not by a content team.', ar: 'القاعدة ماتغيرتش من ساعتها. بنعلّم بس أنظمة شغّالة على حساب عميل حقيقي، وكل كورس بيتكتب من الشخص اللي بيديره مش من فريق محتوى.' }
    ],
    tl: [
      { y: '2019', t: { en: 'The onboarding folder', ar: 'فولدر التدريب' },
        p: { en: 'Three weeks of files and shadowing for every new designer at the studio.', ar: 'تلات أسابيع ملفات ومتابعة لكل مصمم جديد في الاستوديو.' } },
      { y: '2022', t: { en: 'First open cohort', ar: 'أول دفعة مفتوحة' },
        p: { en: 'Eleven people, one meeting room, one course on social design systems.', ar: 'إحدى عشر شخص، أوضة اجتماعات واحدة، وكورس واحد عن أنظمة تصميم السوشيال.' } },
      { y: '2024', t: { en: 'Online and bilingual', ar: 'أونلاين وبلغتين' },
        p: { en: 'Recorded lessons in Arabic with English materials, plus a weekly live review.', ar: 'دروس مسجّلة بالعربي بمواد إنجليزي، مع مراجعة مباشرة أسبوعية.' } },
      { y: '2026', t: { en: 'Eight programmes', ar: 'تمن برامج' },
        p: { en: 'Design, motion, brand, AI, performance, art direction, vector and concept.', ar: 'تصميم، موشن، هوية، ذكاء اصطناعي، أداء، إخراج فني، فيكتور، وأفكار.' } }
    ],
    stats: [
      { v: '6,400+', l: { en: 'Learners since 2022', ar: 'متعلّم من ٢٠٢٢' } },
      { v: '8',      l: { en: 'Programmes running', ar: 'برنامج شغّال' } },
      { v: '4.8',    l: { en: 'Average rating', ar: 'متوسط التقييم' } },
      { v: '12',     l: { en: 'Client accounts behind the material', ar: 'حساب عميل ورا المادة' } }
    ],
    contactH: { en: 'Talk to a human', ar: 'اتكلم مع حد حقيقي' },
    contactP: { en: 'Team pricing, invoices, a course that is not listed yet, or a question about which programme fits you. We answer inside one working day.', ar: 'أسعار الفرق، الفواتير، كورس لسه مش معروض، أو سؤال عن أنهي برنامج مناسب ليك. بنرد خلال يوم عمل واحد.' },
    contacts: [
      { i: 'chat',  t: 'hello@osolutions.academy' },
      { i: 'users', t: 'team@osolutions.academy' },
      { i: 'globe', t: { en: 'Cairo, Egypt · classes at 8 PM Cairo time', ar: 'القاهرة، مصر · الحصص ٨ مساءً بتوقيت القاهرة' } }
    ],
    lname: { en: 'Your name', ar: 'اسمك' },
    lmsg: { en: 'What do you need?', ar: 'محتاج إيه؟' },
    send: { en: 'Send the message', ar: 'ابعت الرسالة' },
    photonote: { en: 'Instructor photographs on this build are AI generated placeholders and will be replaced with real team photography before launch.', ar: 'صور المدربين في النسخة دي مولّدة بالذكاء الاصطناعي كبدائل مؤقتة، وهتتبدل بتصوير حقيقي للفريق قبل الإطلاق.' }
  };

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS;

    d.querySelector('[data-ab-h1]').textContent = T.pick(C.h1);
    d.querySelector('[data-ab-sub]').textContent = T.pick(C.sub);
    d.querySelector('[data-ab-storyTag]').textContent = T.pick(C.storyTag);
    d.querySelector('[data-ab-storyH]').textContent = T.pick(C.storyH);
    d.querySelector('[data-ab-story]').innerHTML = C.story.map(p =>
      '<p style="font-size:.95rem;line-height:1.7">' + A.esc(T.pick(p)) + '</p>').join('');

    d.querySelector('[data-ab-stats]').innerHTML = C.stats.map((s, i) =>
      '<div class="stat rv rv-d' + (i + 1) + '"><span class="stat__val">' + A.esc(s.v) + '</span>' +
      '<span class="stat__lbl">' + A.esc(T.pick(s.l)) + '</span></div>').join('');

    d.querySelector('[data-ab-tl]').innerHTML = C.tl.map(x =>
      '<div class="tl__item"><span class="tl__yr">' + x.y + '</span>' +
      '<div><h4>' + A.esc(T.pick(x.t)) + '</h4><p>' + A.esc(T.pick(x.p)) + '</p></div></div>').join('');

    d.querySelector('[data-ab-instructors]').innerHTML = Object.keys(L.INSTRUCTORS).map((k, i) => {
      const p = L.INSTRUCTORS[k];
      return '<div class="card card--pad icard rv rv-d' + ((i % 3) + 1) + '">' +
        '<img src="' + p.img + '" alt="" loading="lazy">' +
        '<h4>' + A.esc(T.pick(p.name)) + '</h4>' +
        '<span class="role">' + A.esc(T.pick(p.role)) + '</span>' +
        '<p>' + A.esc(T.pick(p.bio)) + '</p>' +
        '<div class="badge-row">' + p.tags.map(t =>
          '<span class="badge badge--ghost">' + A.esc(T.pick(t)) + '</span>').join('') + '</div></div>';
    }).join('');
    d.querySelector('[data-ab-photonote]').textContent = T.pick(C.photonote);

    d.querySelector('[data-ab-contactH]').textContent = T.pick(C.contactH);
    d.querySelector('[data-ab-contactP]').textContent = T.pick(C.contactP);
    d.querySelector('[data-ab-contacts]').innerHTML = C.contacts.map(c =>
      '<div style="display:flex;align-items:center;gap:.7rem;font-size:.89rem;color:var(--text-2)">' +
      '<span class="row__ico" style="width:34px;height:34px">' + A.icon(c.i) + '</span>' +
      '<span>' + A.esc(T.pick(c.t)) + '</span></div>').join('');

    d.querySelector('[data-ab-lname]').textContent = T.pick(C.lname);
    d.querySelector('[data-ab-lmsg]').textContent = T.pick(C.lmsg);
    const send = d.querySelector('[data-ab-send]');
    send.textContent = T.pick(C.send);
    send.onclick = () => A.toast(T.lang === 'ar' ? 'وصلتنا. بنرد خلال يوم عمل.' : 'Got it. We answer inside one working day.', 'check');
  }

  w.App.init(render);
})(window, document);
