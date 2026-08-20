/* Classroom — lesson stage, notes, resources, checkpoint, discussion */
(function (w, d) {
  'use strict';

  const TYPE_LBL = {
    lesson:   { en: 'Lesson',     ar: 'درس' },
    workshop: { en: 'Workshop',   ar: 'ورشة عملية' },
    live:     { en: 'Live session', ar: 'جلسة مباشرة' },
    quiz:     { en: 'Checkpoint', ar: 'اختبار قصير' },
    brief:    { en: 'Brief',      ar: 'بريف' }
  };
  const TYPE_TONE = { lesson: 'navy', workshop: 'orange', live: 'red', quiz: 'violet', brief: 'green' };

  /* Written notes for the opening lesson of each course. Everything else
     composes a real page from the module summary and the course skills. */
  const NOTES = {
    'social-systems': {
      lead: { en: 'Most social design does not fail on taste. It fails because every post is a fresh decision, so the thirtieth post costs the same as the first and nothing compounds.', ar: 'أغلب تصميم السوشيال مش بيفشل بسبب الذوق. بيفشل لأن كل بوست قرار جديد، فالبوست التلاتين بيكلّف زي الأول ومفيش حاجة بتتراكم.' },
      body: [
        { en: 'A system is not a template folder. A template folder is a place you keep files. A system is a set of decisions that are already made, written down, and hard to break by accident.', ar: 'النظام مش فولدر تمبلتات. الفولدر مكان بتحط فيه ملفات. النظام مجموعة قرارات متاخدة خلاص، ومكتوبة، وصعب تتكسر بالغلط.' },
        { en: 'There are exactly four places a social system breaks: the grid drifts, the type scale grows, the colour roles blur, and the export settings vary. Every mess you have ever inherited is one of those four.', ar: 'في أربع أماكن بالظبط نظام السوشيال بيتكسر فيها: الجريد بينحرف، وسلم الخطوط بيكبر، وأدوار اللون بتضيع، وإعدادات التصدير بتختلف. أي فوضى ورثتها هي واحدة من الأربعة دول.' }
      ],
      quoteBy: 'i1',
      quote: { en: 'If a junior cannot get it right on a Thursday afternoon, you did not build a system. You built a habit that only lives in your head.', ar: 'لو الجونيور مش هيعملها صح يوم خميس الضهر، يبقى إنت مبنتش نظام. بنيت عادة عايشة في دماغك بس.' }
    },
    'motion-brand': {
      lead: { en: 'Timing is the whole craft. Before a single effect, before a plugin, the difference between motion that feels cheap and motion that feels expensive is what happens in two frames.', ar: 'التوقيت هو الحرفة كلها. قبل أي إفكت وقبل أي بلج إن، الفرق بين حركة حاسة إنها رخيصة وحركة حاسة إنها غالية هو اللي بيحصل في فريمين.' },
      body: [
        { en: 'A default linear move reads as a computer moving a rectangle. An eased move with a small overshoot reads as an object with weight. The maths did not change, the intent did.', ar: 'الحركة الخطية الافتراضية بتتقري كأن كمبيوتر بيحرك مستطيل. الحركة بإيز وأوفرشوت صغير بتتقري كجسم ليه وزن. الرياضيات ما اتغيرتش، النية هي اللي اتغيرت.' },
        { en: 'Watch reference at quarter speed. You are not looking for what moves, you are looking for when it starts and how long it takes to stop.', ar: 'اتفرج على الريفرنس بربع السرعة. إنت مش بتدور على اللي بيتحرك، إنت بتدور على إمتى بيبدأ وبياخد قد إيه عشان يقف.' }
      ],
      quoteBy: 'i3',
      quote: { en: 'Nobody notices good timing. Everybody notices bad timing, they just call it something else.', ar: 'محدش بيلاحظ التوقيت الكويس. الكل بيلاحظ التوقيت الوحش، بس بيسمّيه حاجة تانية.' }
    },
    'brand-systems': {
      lead: { en: 'A positioning line is not a slogan. It is the sentence that lets you say no to a good idea because it belongs to a different brand.', ar: 'سطر التموضع مش شعار. هو الجملة اللي بتخليك تقول لأ لفكرة كويسة لأنها بتخص براند تاني.' },
      body: [
        { en: 'If your positioning line would work for the competitor down the road, it is not a positioning line, it is a category description.', ar: 'لو سطر التموضع بتاعك ينفع للمنافس اللي في الشارع، يبقى مش سطر تموضع، ده وصف للفئة.' },
        { en: 'Write it before you open a design tool. Everything you draw after this page is either evidence for it or noise around it.', ar: 'اكتبه قبل ما تفتح أي برنامج تصميم. أي حاجة هترسمها بعد الصفحة دي يا إما دليل عليه يا إما ضوضاء حواليه.' }
      ],
      quoteBy: 'i2',
      quote: { en: 'An identity that cannot survive a junior designer on a Thursday afternoon is not an identity. It is a poster.', ar: 'الهوية اللي مش هتصمد مع مصمم جونيور يوم خميس الضهر مش هوية. دي بوستر.' }
    },
    'ai-creative': {
      lead: { en: 'Your prompts are not failing because you lack the magic words. They fail because you are describing a result instead of specifying a job.', ar: 'برومبتاتك مش بتفشل لأنك ناقصك الكلمات السحرية. بتفشل لأنك بتوصف نتيجة بدل ما تحدد شغلانة.' },
      body: [
        { en: 'Write in three layers. Subject: what is in frame. Craft: how it was made, lens, light, medium. Constraint: what must not happen. When a result is wrong you now know which layer to fix.', ar: 'اكتب بتلات طبقات. الموضوع: إيه اللي في الكادر. الحرفة: اتعمل إزاي، عدسة، ضوء، وسيط. القيد: إيه اللي ممنوع يحصل. لما النتيجة تطلع غلط هتعرف تصلّح أنهي طبقة.' },
        { en: 'A reference image carries more information than forty adjectives, and it carries it without ambiguity. Reach for a reference before you reach for another word.', ar: 'صورة الريفرنس بتشيل معلومات أكتر من أربعين صفة، وبتشيلها من غير غموض. امسك ريفرنس قبل ما تمسك كلمة زيادة.' }
      ],
      quoteBy: 'i4',
      quote: { en: 'It drafts, you direct. The moment you let it direct, the work stops being yours and starts looking like everyone else.', ar: 'هو بيسوّد وإنت بتخرج. اللحظة اللي تسيبه يخرج فيها، الشغل بيبطل يكون بتاعك ويبدأ يبقى شبه أي حد.' }
    },
    'perf-creative': {
      lead: { en: 'The first two seconds are not an introduction. They are the entire negotiation for the next twenty eight.', ar: 'أول ثانيتين مش مقدمة. دول المفاوضة كلها على الـ ٢٨ ثانية اللي بعدهم.' },
      body: [
        { en: 'A hook is a mechanism, not a style. It either creates a gap the viewer wants closed, or it does not. Everything else is decoration on top of that decision.', ar: 'الهوك آلية مش استايل. يا إما بيخلق فجوة المشاهد عايز يقفلها يا إما لأ. أي حاجة تانية زينة فوق القرار ده.' },
        { en: 'Watch your own ad with the sound off on a phone held at arm length. That is the real viewing condition, and it kills most first frames.', ar: 'اتفرج على إعلانك بصوت مقفول على موبايل بعيد عن وشك. دي ظروف المشاهدة الحقيقية، وبتقتل أغلب الفريمات الأولى.' }
      ],
      quoteBy: 'i5',
      quote: { en: 'Design it so you can test it. If two versions cannot be told apart by a number, you made one ad twice.', ar: 'صمّمه بحيث تقدر تختبره. لو نسختين مش هتفرق بينهم برقم، يبقى عملت إعلان واحد مرتين.' }
    },
    'art-direction': {
      lead: { en: 'A shot list is not a wish list. It is the document that decides whether the shoot day is calm or expensive.', ar: 'لستة اللقطات مش لستة أمنيات. دي الورقة اللي بتقرر يوم التصوير هيبقى هادي ولا غالي.' },
      body: [
        { en: 'Every line should name what is in frame, why it is there, and what the shot has to prove. If a line only says "lifestyle shot", you have written nothing.', ar: 'كل سطر لازم يقول إيه في الكادر، وليه موجود، واللقطة لازم تثبت إيه. لو السطر بيقول «لقطة لايف ستايل» بس، يبقى إنت مكتبتش حاجة.' },
        { en: 'Give the photographer constraints, not adjectives. "Warm" is an argument. "Single source from camera left, no fill, hard shadow on the wall" is a setup.', ar: 'ادّي المصور قيود مش صفات. «دافي» دي مناقشة. «مصدر واحد من شمال الكاميرا، من غير فيل، وظل حاد على الحيطة» ده إعداد.' }
      ],
      quoteBy: 'i6',
      quote: { en: 'Most bad photos are briefing problems. The camera did exactly what somebody asked it to do.', ar: 'أغلب الصور الوحشة مشكلتها في البريف. الكاميرا عملت بالظبط اللي حد طلبه منها.' }
    },
    'vector-craft': {
      lead: { en: 'Every extra anchor point is a decision you will have to make again later, usually at the worst moment.', ar: 'كل نقطة أنكور زيادة هي قرار هتضطر تاخده تاني بعدين، وغالباً في أسوأ وقت.' },
      body: [
        { en: 'A circle needs four points. A smooth S curve needs three. If your shape has fourteen, you are not drawing, you are tracing your own mistakes.', ar: 'الدايرة محتاجة أربع نقط. منحنى S ناعم محتاج تلاتة. لو شكلك فيه أربعتاشر، إنت مش بترسم، إنت بتقلّد أخطاءك.' },
        { en: 'Place points at the extremes: top, bottom, left, right. Curves behave, files shrink, and the next person can actually edit your artwork.', ar: 'حط النقط عند الأطراف: فوق، تحت، شمال، يمين. المنحنيات بتتصرف صح، والملفات بتصغّر، واللي بعدك يقدر يعدّل شغلك فعلاً.' }
      ],
      quoteBy: 'i1',
      quote: { en: 'Clean paths are not a personality trait. They are the reason someone can open your file in two years and change one thing.', ar: 'الباثات النضيفة مش صفة شخصية. دي السبب إن حد يقدر يفتح ملفك بعد سنتين ويغيّر حاجة واحدة.' }
    },
    'story-concept': {
      lead: { en: 'A brief tells you what the client asked for. Your job in the first hour is to find what they actually need, which is rarely the same sentence.', ar: 'البريف بيقولك العميل طلب إيه. شغلك في أول ساعة إنك تلاقي هو محتاج إيه فعلاً، ودي نادراً ما تكون نفس الجملة.' },
      body: [
        { en: 'Read the brief twice. The first read is for the ask. The second read is for the fear underneath it, because that is what the idea has to answer.', ar: 'اقرا البريف مرتين. القراية الأولى للطلب. القراية التانية للخوف اللي تحته، لأن ده اللي الفكرة لازم ترد عليه.' },
        { en: 'If you cannot say the idea in one sentence that a stranger can repeat back, it is not an idea yet. It is a mood.', ar: 'لو مش قادر تقول الفكرة في جملة واحدة حد غريب يقدر يعيدها، يبقى دي مش فكرة لسه. دي مود.' }
      ],
      quoteBy: 'i6',
      quote: { en: 'Three routes get you a decision. One route gets you a debate.', ar: 'تلات طرق بتجيبلك قرار. طريق واحد بيجيبلك مناقشة.' }
    }
  };

  const QUIZ = {
    'social-systems': {
      q: { en: 'A junior applies your template and the headline sits two pixels off the grid. What does that tell you?', ar: 'جونيور طبّق التمبلت والعنوان قعد بعيد بكسلين عن الجريد. ده بيقولك إيه؟' },
      o: [
        { t: { en: 'The junior needs more training', ar: 'الجونيور محتاج تدريب أكتر' } },
        { t: { en: 'The system allows a wrong state, so the file is the problem', ar: 'النظام سامح بحالة غلط، يبقى الملف هو المشكلة' }, ok: true },
        { t: { en: 'Two pixels does not matter at this size', ar: 'كسلين مش فارقين في المقاس ده' } },
        { t: { en: 'The grid should be looser', ar: 'الجريد المفروض يبقى أوسع' } }
      ]
    },
    'motion-brand': {
      q: { en: 'A logo animation feels cheap even though the artwork is good. Where do you look first?', ar: 'أنيميشن لوجو حاسه إنه رخيص رغم إن الشغل حلو. تبص فين الأول؟' },
      o: [
        { t: { en: 'Add a glow and a light sweep', ar: 'تضيف جلو ولمعة' } },
        { t: { en: 'The easing curves and how long the move takes to stop', ar: 'منحنيات الإيز والحركة بتاخد قد إيه عشان تقف' }, ok: true },
        { t: { en: 'Change the font', ar: 'تغيّر الخط' } },
        { t: { en: 'Render at a higher bitrate', ar: 'ترندر ببت ريت أعلى' } }
      ]
    },
    'ai-creative': {
      q: { en: 'A generated set is inconsistent across six images. What is the strongest fix?', ar: 'مجموعة مولّدة مش متسقة عبر ست صور. إيه أقوى حل؟' },
      o: [
        { t: { en: 'Write a longer prompt with more adjectives', ar: 'تكتب برومبت أطول بصفات أكتر' } },
        { t: { en: 'Lock a reference image and keep the craft layer identical', ar: 'تثبّت صورة ريفرنس وتخلي طبقة الحرفة زي ما هي' }, ok: true },
        { t: { en: 'Regenerate until it matches', ar: 'تعيد التوليد لحد ما يتطابق' } },
        { t: { en: 'Upscale all six', ar: 'تكبّر الستة كلهم' } }
      ]
    },
    'default': {
      q: { en: 'What has to be true before you call a piece of work finished?', ar: 'إيه اللي لازم يكون صح قبل ما تقول إن الشغل خلص؟' },
      o: [
        { t: { en: 'It looks good on your screen', ar: 'شكله حلو على شاشتك' } },
        { t: { en: 'Someone else can pick it up and continue it correctly', ar: 'حد تاني يقدر يمسكه ويكمّله صح' }, ok: true },
        { t: { en: 'The client has not complained', ar: 'العميل ماشتكاش' } },
        { t: { en: 'It matches the reference exactly', ar: 'مطابق للريفرنس بالظبط' } }
      ]
    }
  };

  const DISCUSSION = [
    { av: 'assets/img/people/s1.webp', n: { en: 'Mariam Adel', ar: 'مريم عادل' }, ago: { en: '2 days ago', ar: 'من يومين' },
      p: { en: 'The four break points made this click for me. I went back to an account I inherited and every problem was the export settings, not the design.', ar: 'الأربع نقاط كسر دي خلّت الموضوع يوضحلي. رجعت لحساب ورثته ولقيت كل المشاكل في إعدادات التصدير مش في التصميم.' } },
    { av: 'assets/img/people/s2.webp', n: { en: 'Ahmed Salah', ar: 'أحمد صلاح' }, ago: { en: '1 day ago', ar: 'من يوم' },
      p: { en: 'Question: how do you handle a client who approves the post but not the system? I keep getting sign off on individual work only.', ar: 'سؤال: بتتعامل إزاي مع عميل بيعتمد البوست بس مش النظام؟ أنا دايماً بجيب موافقة على الشغل الفردي بس.' } },
    { av: null, ini: 'KA', instructor: true, n: { en: 'Karim Adel', ar: 'كريم عادل' }, ago: { en: '22 hours ago', ar: 'من ٢٢ ساعة' },
      p: { en: 'Ahmed, that is week five. Short version: never present the system on its own. Present three finished posts, then show the one page that made them repeatable. Approval follows the work, not the rules.', ar: 'أحمد، ده الأسبوع الخامس. باختصار: متعرضش النظام لوحده أبداً. اعرض تلات بوستات نهائية، وبعدين ورّي الصفحة اللي خلّتهم قابلين للتكرار. الموافقة بتيجي ورا الشغل، مش ورا القواعد.' } }
  ];

  let course, wi = 0, li = 0;

  function key() { return wi + '-' + li; }
  function doneMap() {
    const s = w.App.state;
    if (!s.done[course.id]) s.done[course.id] = {};
    return s.done[course.id];
  }
  function flat() {
    const out = [];
    course.curriculum.forEach((m, mi) => m.l.forEach((l, li2) => out.push({ m: m, l: l, mi: mi, li: li2 })));
    return out;
  }
  function pct() {
    const all = flat(), dm = doneMap();
    const n = all.filter(x => dm[x.mi + '-' + x.li]).length;
    return Math.round(n / all.length * 100);
  }

  function ring(p, A) {
    const size = 52, stroke = 5, r = (size - stroke) / 2, c = 2 * Math.PI * r;
    return '<div class="ring" style="width:' + size + 'px;height:' + size + 'px;flex:none">' +
      '<svg width="' + size + '" height="' + size + '">' +
      '<circle class="track" cx="26" cy="26" r="' + r + '" stroke-width="' + stroke + '"/>' +
      '<circle class="fill" cx="26" cy="26" r="' + r + '" stroke-width="' + stroke + '" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - p / 100)).toFixed(1) + '"/></svg>' +
      '<span class="ring__val" style="font-size:11px">' + p + '</span></div>';
  }

  function paintLesson() {
    const T = w.I18n, A = w.App, L = w.LMS;
    const m = course.curriculum[wi], l = m.l[li];
    const isDone = !!doneMap()[key()];
    const inst = L.instructor(course.instructor);

    d.querySelector('[data-lesson-badges]').innerHTML =
      '<span class="badge badge--' + TYPE_TONE[l.ty] + '">' + A.esc(T.pick(TYPE_LBL[l.ty])) + '</span>' +
      '<span class="badge badge--ghost">' + A.esc(T.t('crs.week')) + ' ' + T.num(m.w) + '</span>' +
      (l.d ? '<span class="badge badge--ghost">' + T.num(l.d) + ' ' + A.esc(T.t('g.min')) + '</span>' : '') +
      (isDone ? '<span class="badge badge--green">' + A.icon('check') + A.esc(T.t('room.done')) + '</span>' : '');
    d.querySelector('[data-lesson-title]').textContent = T.pick(l.t);

    /* stage — poster still, no video asset */
    const poster = l.ty === 'live' ? 'assets/img/scenes/live-session.webp'
                 : l.ty === 'brief' ? 'assets/img/scenes/critique.webp'
                 : course.cover;
    d.querySelector('[data-stage]').innerHTML =
      '<img src="' + poster + '" alt="">' +
      '<div class="stage__center"><button class="stage__play" data-play aria-label="play">' + A.icon('play') + '</button></div>' +
      '<div class="stage__ui">' +
        '<span class="stage__tag badge badge--' + TYPE_TONE[l.ty] + '">' + A.esc(T.pick(TYPE_LBL[l.ty])) + '</span>' +
        '<div class="stage__bar"><span class="mono">00:00</span>' +
        '<span class="bar"><span style="width:0%"></span></span>' +
        '<span class="mono">' + (l.d ? String(l.d).padStart(2, '0') + ':00' : '--:--') + '</span></div>' +
      '</div>';
    d.querySelector('[data-play]').onclick = () =>
      A.toast(T.lang === 'ar' ? 'مشغّل الفيديو بيتوصّل بمنصة الاستضافة عند الإطلاق.' : 'The player connects to the hosting platform at launch.', 'playC');

    /* done button */
    const doneBtn = d.querySelector('[data-done]');
    doneBtn.innerHTML = A.icon('check') + '<span>' + A.esc(T.t(isDone ? 'room.done' : 'room.markDone')) + '</span>';
    doneBtn.className = 'btn btn--sm ' + (isDone ? 'btn--ghost' : 'btn--primary');
    doneBtn.onclick = () => {
      const dm = doneMap();
      if (dm[key()]) delete dm[key()]; else dm[key()] = true;
      A.save(); paintLesson(); paintToc(); paintProgress();
      if (dm[key()]) A.toast(T.lang === 'ar' ? 'اتعلّم كمكتمل.' : 'Marked complete.', 'check');
    };

    /* tabs */
    const tabs = [
      { id: 'notes',      k: 'dash.overview' },
      { id: 'mynotes',    k: 'room.notes' },
      { id: 'resources',  k: 'room.resources' },
      { id: 'quiz',       k: 'room.quiz' },
      { id: 'discussion', k: 'room.discussion' }
    ];
    const tw = d.querySelector('[data-tabs]');
    tw.innerHTML = tabs.map((t, i) =>
      '<button data-tab="' + t.id + '" class="' + (i === 0 ? 'is-on' : '') + '">' + A.esc(T.t(t.k)) + '</button>').join('');

    /* pane content */
    const n = NOTES[course.id] || NOTES['social-systems'];
    const skills = course.skills;
    const pick3 = [skills[(wi * 2) % skills.length], skills[(wi * 2 + 1) % skills.length], skills[(wi * 2 + 2) % skills.length]];
    const qn = QUIZ[course.id] || QUIZ['default'];
    const isOpener = wi === 0 && li === 0;

    const notesHtml = '<div class="prose">' +
      '<p style="font-size:1.02rem;color:var(--navy);font-weight:560">' + A.esc(T.pick(isOpener ? n.lead : m.s)) + '</p>' +
      (isOpener ? n.body.map(p => '<p>' + A.esc(T.pick(p)) + '</p>').join('') : '') +
      '<h4>' + A.esc(T.pick({ en: 'What this lesson covers', ar: 'الدرس ده بيغطي إيه' })) + '</h4>' +
      '<ul>' +
        '<li>' + A.esc(T.pick(l.t)) + '</li>' +
        '<li>' + A.esc(T.pick({ en: 'Where it fits in ', ar: 'مكانه في ' })) + A.esc(T.pick(m.t)) + '</li>' +
        '<li>' + A.esc(T.pick({ en: 'The mistake to avoid, shown on real work', ar: 'الغلطة اللي تتجنبها، معروضة على شغل حقيقي' })) + '</li>' +
      '</ul>' +
      '<h4>' + A.esc(T.pick({ en: 'You will practise', ar: 'هتتمرّن على' })) + '</h4>' +
      '<ul>' + pick3.map(s => '<li>' + A.esc(T.pick(s)) + '</li>').join('') + '</ul>' +
      (isOpener ? '<blockquote>' + A.esc(T.pick(n.quote)) + '<br><span style="font-style:normal;font-size:.82rem;color:var(--text-3)">— ' +
        A.esc(T.pick(L.instructor(n.quoteBy).name)) + '</span></blockquote>' : '') +
      '</div>';

    const savedNote = (w.App.state.notes[course.id] || {})[key()] || '';
    const myNotesHtml =
      '<div class="field"><textarea class="textarea" data-note>' + A.esc(savedNote) + '</textarea></div>' +
      '<div style="display:flex;justify-content:flex-end;margin-top:.8rem">' +
      '<button class="btn btn--primary btn--sm" data-note-save>' + A.esc(T.t('room.noteSave')) + '</button></div>';

    const files = [
      { n: { en: 'Working file for this lesson', ar: 'ملف الشغل للدرس ده' }, t: 'FIG · 4.2 MB' },
      { n: { en: 'Checklist PDF', ar: 'تشيك ليست PDF' }, t: 'PDF · 180 KB' },
      { n: { en: 'Reference set', ar: 'مجموعة الريفرنس' }, t: 'ZIP · 22 MB' }
    ];
    const resHtml = files.map(f =>
      '<div class="res"><span class="res__ico">' + A.icon('file') + '</span>' +
      '<span class="res__m"><b>' + A.esc(T.pick(f.n)) + '</b><small>' + f.t + '</small></span>' +
      '<button class="btn btn--ghost btn--sm" data-dl>' + A.icon('download') + '<span>' + A.esc(T.t('room.download')) + '</span></button></div>').join('');

    const quizHtml = '<div class="prose"><p style="font-weight:560;color:var(--navy)">' + A.esc(T.pick(qn.q)) + '</p></div>' +
      '<div class="qz" data-qz>' + qn.o.map((o, i) =>
        '<label class="qz__opt" data-ok="' + (o.ok ? '1' : '0') + '"><input type="radio" name="qz"><span>' +
        A.esc(T.pick(o.t)) + '</span></label>').join('') + '</div>' +
      '<div style="margin-top:1rem"><button class="btn btn--primary btn--sm" data-qz-check>' + A.esc(T.t('room.check')) + '</button></div>';

    const discHtml = DISCUSSION.map(x =>
      '<div class="disc">' +
      (x.av ? '<img class="av av--sm" src="' + x.av + '" alt="" loading="lazy">'
            : '<span class="av-ini av--sm">' + A.esc(x.ini) + '</span>') +
      '<div class="disc__b"><div class="who"><b>' + A.esc(T.pick(x.n)) + '</b>' +
      (x.instructor ? '<span class="badge badge--orange">' + A.esc(T.t('crs.instTag')) + '</span>' : '') +
      '<small>' + A.esc(T.pick(x.ago)) + '</small></div>' +
      '<p>' + A.esc(T.pick(x.p)) + '</p></div></div>').join('') +
      '<div class="field" style="margin-top:1.25rem"><textarea class="textarea" data-reply placeholder="' + A.esc(T.t('room.replyPh')) + '"></textarea></div>' +
      '<div style="display:flex;justify-content:flex-end;margin-top:.8rem">' +
      '<button class="btn btn--primary btn--sm" data-reply-post>' + A.esc(T.t('room.postReply')) + '</button></div>';

    d.querySelector('[data-tabpanes]').innerHTML =
      '<div class="tabpane is-on" data-tp="notes">' + notesHtml + '</div>' +
      '<div class="tabpane" data-tp="mynotes">' + myNotesHtml + '</div>' +
      '<div class="tabpane" data-tp="resources">' + resHtml + '</div>' +
      '<div class="tabpane" data-tp="quiz">' + quizHtml + '</div>' +
      '<div class="tabpane" data-tp="discussion">' + discHtml + '</div>';

    tw.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
      tw.querySelectorAll('[data-tab]').forEach(x => x.classList.toggle('is-on', x === b));
      d.querySelectorAll('[data-tp]').forEach(p => p.classList.toggle('is-on', p.dataset.tp === b.dataset.tab));
    });

    d.querySelector('[data-note-save]').onclick = () => {
      const s = w.App.state;
      if (!s.notes[course.id]) s.notes[course.id] = {};
      s.notes[course.id][key()] = d.querySelector('[data-note]').value;
      A.save();
      A.toast(T.lang === 'ar' ? 'الملاحظة اتحفظت.' : 'Note saved.', 'check');
    };
    d.querySelectorAll('[data-dl]').forEach(b => b.onclick = () =>
      A.toast(T.lang === 'ar' ? 'الملفات بتتحمّل من مكتبة الكورس.' : 'Files download from the course library.', 'download'));
    d.querySelector('[data-qz-check]').onclick = () => {
      const opts = d.querySelectorAll('[data-qz] .qz__opt');
      let picked = null;
      opts.forEach(o => { if (o.querySelector('input').checked) picked = o; });
      if (!picked) return;
      opts.forEach(o => o.classList.remove('right', 'wrong'));
      const ok = picked.dataset.ok === '1';
      picked.classList.add(ok ? 'right' : 'wrong');
      if (!ok) opts.forEach(o => { if (o.dataset.ok === '1') o.classList.add('right'); });
      A.toast(T.t(ok ? 'room.correct' : 'room.wrong'), ok ? 'check' : 'x');
    };
    d.querySelector('[data-reply-post]').onclick = () => {
      const box = d.querySelector('[data-reply]');
      if (!box.value.trim()) return;
      box.value = '';
      A.toast(T.lang === 'ar' ? 'ردك اتنشر في نقاش الدرس.' : 'Your reply is posted to the lesson thread.', 'chat');
    };

    /* prev / next */
    const all = flat();
    const idx = all.findIndex(x => x.mi === wi && x.li === li);
    const pb = d.querySelector('[data-prev]'), nb = d.querySelector('[data-next]');
    pb.innerHTML = A.icon('arrowL') + '<span>' + A.esc(T.t('room.prev')) + '</span>';
    nb.innerHTML = '<span>' + A.esc(T.t('room.next')) + '</span>' + A.icon('arrow');
    pb.classList.toggle('is-disabled', idx <= 0);
    nb.classList.toggle('is-disabled', idx >= all.length - 1);
    pb.onclick = () => { if (idx > 0) { wi = all[idx - 1].mi; li = all[idx - 1].li; go(); } };
    nb.onclick = () => { if (idx < all.length - 1) { wi = all[idx + 1].mi; li = all[idx + 1].li; go(); } };
  }

  function go() {
    history.replaceState(null, '', '?id=' + course.id + '&w=' + wi + '&l=' + li);
    paintLesson(); paintToc(); paintProgress();
    d.querySelector('.room__main').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function paintProgress() {
    const T = w.I18n, A = w.App;
    const p = pct();
    d.querySelector('[data-room-progress]').innerHTML = ring(p, A) +
      '<div><b style="display:block;font-size:.9rem;color:var(--navy)">' + A.esc(T.pick(course.title)) + '</b>' +
      '<small style="font-size:.76rem;color:var(--text-3)">' + T.num(p) + '% ' + A.esc(T.t('room.progress')) + '</small></div>';
  }

  function paintToc() {
    const T = w.I18n, A = w.App;
    const dm = doneMap();
    d.querySelector('[data-toc]').innerHTML = course.curriculum.map((m, mi) =>
      '<div class="toc__mod' + (mi === wi ? ' is-open' : '') + '">' +
        '<button class="toc__modhead" data-mod="' + mi + '">' +
          '<span>' + A.esc(T.t('crs.week')) + ' ' + T.num(m.w) + ' · ' + A.esc(T.pick(m.t)) + '</span>' +
          '<span class="mono">' + T.num(m.l.filter((x, i) => dm[mi + '-' + i]).length) + '/' + T.num(m.l.length) + '</span>' +
          A.icon('chev') +
        '</button>' +
        '<div class="toc__list">' + m.l.map((l, li2) =>
          '<button class="toc__item' + (dm[mi + '-' + li2] ? ' done' : '') + (mi === wi && li2 === li ? ' is-on' : '') + '" ' +
          'data-w="' + mi + '" data-l="' + li2 + '">' +
          '<span class="tick">' + A.icon('check') + '</span>' +
          '<span>' + A.esc(T.pick(l.t)) + '</span>' +
          '<span class="d">' + (l.d ? T.num(l.d) + 'm' : '—') + '</span></button>').join('') +
        '</div>' +
      '</div>').join('');

    d.querySelectorAll('[data-mod]').forEach(b => b.onclick = () =>
      b.closest('.toc__mod').classList.toggle('is-open'));
    d.querySelectorAll('[data-w]').forEach(b => b.onclick = () => {
      wi = +b.dataset.w; li = +b.dataset.l; go();
    });
  }

  function render() {
    const T = w.I18n, A = w.App, L = w.LMS;
    const id = A.param('id') || 'social-systems';
    course = L.byId(id) || L.COURSES[0];
    wi = Math.min(Math.max(0, +(A.param('w') || 0)), course.curriculum.length - 1);
    li = Math.min(Math.max(0, +(A.param('l') || 0)), course.curriculum[wi].l.length - 1);

    d.title = T.pick(course.title) + ' — Osolutions Academy';
    const back = d.querySelector('[data-back-link]');
    back.textContent = T.pick(course.title);
    back.href = 'course.html?id=' + course.id;

    paintLesson(); paintToc(); paintProgress();
  }

  w.App.init(render);
})(window, document);
