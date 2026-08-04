/* Nav gets a background once the page scrolls under it */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });
}

/* ===========================================================
   I18N — Ukrainian (default), English, Dutch.
   Static copy is swapped via [data-i18n] / [data-i18n-alt].
   Dynamic bits used by the timer demo (Start/Stop, coaching
   messages, ready/done state) are handled separately below,
   since they're set imperatively while the demo is running.
   =========================================================== */
const I18N = {
  uk: {
    'meta.title': 'Plank — таймер планки з AI-тренером',
    'meta.description': 'Plank — таймер планки для Android із AI-тренером, статистикою, серіями та Health Connect. Постав планку, все інше програма порахує сама.',

    'nav.features': 'Можливості',
    'nav.screens': 'Екрани',
    'nav.levels': 'Рівні',
    'nav.cta': 'Завантажити APK',

    'hero.badge': 'Таймер планки · Android',
    'hero.h1.plain': 'Сильніше',
    'hero.h1.neon': 'щодня.',
    'hero.lede': 'Таймер тримає час підходу, AI-тренер щодня оцінює форму за сном і пульсом, а серія рахує кожен день поспіль. Постав планку — решту програма порахує сама.',
    'hero.btnText': 'Всі можливості ↓',

    'demo.eyebrow': 'Спробуй прямо зараз',
    'demo.noteLabel': 'Рекорд цієї сесії:',

    'features.eyebrow': 'Можливості',
    'features.h2': 'П\u2019ять екранів. Одна звичка.',
    'features.p': 'Стільки ж вкладок, скільки й у самій програмі — кожна відповідає за свою частину звички.',

    'feature.1.title': 'Тренування',
    'feature.1.desc': 'Постав ціль у секундах і кількість підходів, тримай форму за таймером — або обери вільне тренування без ліміту й спробуй побити власний рекорд.',
    'feature.2.title': 'Статистика',
    'feature.2.desc': 'Кращий час, кількість тренувань і спалені калорії за 7, 30, 90 днів чи весь час — з графіками, які показують, куди рухається прогрес.',
    'feature.3.title': 'Нагороди',
    'feature.3.desc': 'Відкривай бейджі за перше тренування, тижневі серії та рівні майстерності — від Новачка до Атлета.',
    'feature.4.title': 'Рейтинг',
    'feature.4.desc': 'Порівнюй свою серію тренувань із друзями та іншими користувачами й тримай позицію в загальному заліку.',
    'feature.5.title': 'AI Тренер',
    'feature.5.desc': 'Щодня отримуй оцінку форми від 0 до 100 на основі сну, кроків і пульсу спокою — з поясненням, що саме на неї вплинуло.',
    'feature.6.title': 'Серії',
    'feature.6.desc': 'Тренуйся щодня, щоб не перервати серію. Один пропущений день — і лічильник починає спочатку.',
    'feature.6.tab': 'Серія',

    'integration.title': 'Health Connect',
    'integration.desc': 'Синхронізуй кроки, сон і пульс із Android Health Connect — AI-тренер враховує ці дані в кожній щоденній оцінці форми.',

    'screens.eyebrow': 'Екрани',
    'screens.h2': 'Як це виглядає',
    'screens.p': 'Реальні скріншоти програми — гортай вбік.',

    'screen.1.alt': 'Екран таймера тренування з відліком часу',
    'screen.1.caption': 'Таймер тренування',
    'screen.2.alt': 'Тижнева статистика та дані Health Connect',
    'screen.2.caption': 'Тижнева статистика',
    'screen.3.alt': 'Детальна аналітика прогресу та стабільності',
    'screen.3.caption': 'Детальна аналітика',
    'screen.4.alt': 'Нагороди за серії тренувань',
    'screen.4.caption': 'Нагороди за серії',
    'screen.5.alt': 'Рівні майстерності від Новачка до Атлета',
    'screen.5.caption': 'Рівні майстерності',
    'screen.6.alt': 'AI-тренер показує оцінку форми 80 зі 100',
    'screen.6.caption': 'Оцінка від AI-тренера',
    'screen.7.alt': 'Розбір факторів оцінки: сон, кроки, пульс',
    'screen.7.caption': 'Сон, кроки, пульс',

    'levels.eyebrow': 'Рівні майстерності',
    'levels.h2': 'Шлях від новачка до атлета',
    'levels.p': 'Рівень залежить від загального часу планки — не від одного рекордного підходу.',

    'level.1.name': 'Новачок', 'level.1.req': '1 хв+',
    'level.2.name': 'Початківець', 'level.2.req': '3 хв+',
    'level.3.name': 'Стажер', 'level.3.req': '6 хв+',
    'level.4.name': 'Аматор', 'level.4.req': '10 хв+',
    'level.5.name': 'Практик', 'level.5.req': 'далі',
    'level.6.name': 'Атлет', 'level.6.req': 'максимум',

    'badge.1.title': 'Перший крок', 'badge.1.desc': 'Заверши перше тренування',
    'badge.2.title': '3 дні поспіль', 'badge.2.desc': 'Тренуйся 3 дні підряд',
    'badge.3.title': 'Тижневий воїн', 'badge.3.desc': '7 днів підряд',
    'badge.4.title': 'Два тижні', 'badge.4.desc': '14 днів безперервних тренувань',
    'badge.5.title': 'Чемпіон', 'badge.5.desc': '30 днів підряд',
    'badge.6.title': 'Залізна воля', 'badge.6.desc': '60 днів підряд',

    'download.eyebrow': 'Завантаження',
    'download.h2': 'Готовий тримати планку?',
    'download.p': 'Один APK-файл, без Google Play. Встанови й почни серію вже сьогодні.',
    'download.version': 'Версія 3.13.0 · Android',
    'download.note': 'Якщо Android попередить про невідоме джерело — дозволь встановлення в Налаштуваннях → Безпека і спробуй ще раз.',
    'download.contact': 'Питання чи пропозиції? Пишіть на',

    'footer.meta': '© 2026 Plank · зроблено з 🔥',
  },

  en: {
    'meta.title': 'Plank — plank timer with an AI coach',
    'meta.description': 'Plank — an Android plank timer with an AI coach, stats, streaks, and Health Connect. Set your plank, the app tracks the rest.',

    'nav.features': 'Features',
    'nav.screens': 'Screens',
    'nav.levels': 'Levels',
    'nav.cta': 'Download APK',

    'hero.badge': 'Plank timer · Android',
    'hero.h1.plain': 'Stronger',
    'hero.h1.neon': 'every day.',
    'hero.lede': 'The timer tracks your hold, the AI coach rates your form every day from sleep and heart rate, and your streak counts every day in a row. Set your plank — the app handles the rest.',
    'hero.btnText': 'See all features ↓',

    'demo.eyebrow': 'Try it right now',
    'demo.noteLabel': 'Best time this session:',

    'features.eyebrow': 'Features',
    'features.h2': 'Five screens. One habit.',
    'features.p': 'As many tabs as the app itself — each one covers its own part of the habit.',

    'feature.1.title': 'Training',
    'feature.1.desc': 'Set a goal in seconds and a number of sets, hold your form against the timer — or pick free training with no limit and try to beat your own record.',
    'feature.2.title': 'Stats',
    'feature.2.desc': 'Best time, number of workouts, and calories burned over 7, 30, 90 days or all time — with charts that show where your progress is heading.',
    'feature.3.title': 'Rewards',
    'feature.3.desc': 'Unlock badges for your first workout, weekly streaks, and mastery levels — from Beginner to Athlete.',
    'feature.4.title': 'Leaderboard',
    'feature.4.desc': 'Compare your training streak with friends and other users and hold your spot on the leaderboard.',
    'feature.5.title': 'AI Coach',
    'feature.5.desc': 'Get a form score from 0 to 100 every day based on sleep, steps, and resting heart rate — with an explanation of what shaped it.',
    'feature.6.title': 'Streaks',
    'feature.6.desc': 'Train every day to keep your streak alive. Miss one day and the counter starts over.',
    'feature.6.tab': 'Streak',

    'integration.title': 'Health Connect',
    'integration.desc': 'Sync steps, sleep, and heart rate from Android Health Connect — the AI coach factors this data into every daily form score.',

    'screens.eyebrow': 'Screens',
    'screens.h2': 'What it looks like',
    'screens.p': 'Real screenshots from the app — swipe sideways.',

    'screen.1.alt': 'Workout timer screen with a countdown',
    'screen.1.caption': 'Workout timer',
    'screen.2.alt': 'Weekly stats and Health Connect data',
    'screen.2.caption': 'Weekly stats',
    'screen.3.alt': 'Detailed progress and consistency analytics',
    'screen.3.caption': 'Detailed analytics',
    'screen.4.alt': 'Rewards for training streaks',
    'screen.4.caption': 'Streak rewards',
    'screen.5.alt': 'Mastery levels from Beginner to Athlete',
    'screen.5.caption': 'Mastery levels',
    'screen.6.alt': 'AI coach showing a form score of 80 out of 100',
    'screen.6.caption': 'AI coach score',
    'screen.7.alt': 'Score breakdown: sleep, steps, heart rate',
    'screen.7.caption': 'Sleep, steps, heart rate',

    'levels.eyebrow': 'Mastery levels',
    'levels.h2': 'The path from beginner to athlete',
    'levels.p': 'Your level depends on your total plank time — not a single record hold.',

    'level.1.name': 'Beginner', 'level.1.req': '1 min+',
    'level.2.name': 'Starter', 'level.2.req': '3 min+',
    'level.3.name': 'Intern', 'level.3.req': '6 min+',
    'level.4.name': 'Amateur', 'level.4.req': '10 min+',
    'level.5.name': 'Practitioner', 'level.5.req': 'next',
    'level.6.name': 'Athlete', 'level.6.req': 'max',

    'badge.1.title': 'First step', 'badge.1.desc': 'Finish your first workout',
    'badge.2.title': '3 days running', 'badge.2.desc': 'Train 3 days in a row',
    'badge.3.title': 'Week warrior', 'badge.3.desc': '7 days in a row',
    'badge.4.title': 'Two weeks', 'badge.4.desc': '14 days of unbroken training',
    'badge.5.title': 'Champion', 'badge.5.desc': '30 days in a row',
    'badge.6.title': 'Iron will', 'badge.6.desc': '60 days in a row',

    'download.eyebrow': 'Download',
    'download.h2': 'Ready to hold the plank?',
    'download.p': 'One APK file, no Google Play. Install it and start your streak today.',
    'download.version': 'Version 3.13.0 · Android',
    'download.note': 'If Android warns about an unknown source — allow installs in Settings → Security and try again.',
    'download.contact': 'Questions or feedback? Email',

    'footer.meta': '© 2026 Plank · made with 🔥',
  },

  nl: {
    'meta.title': 'Plank — plankstaande timer met AI-coach',
    'meta.description': 'Plank — een plankstaande timer voor Android met AI-coach, statistieken, reeksen en Health Connect. Stel je plank in, de app telt de rest.',

    'nav.features': 'Functies',
    'nav.screens': 'Schermen',
    'nav.levels': 'Niveaus',
    'nav.cta': 'APK downloaden',

    'hero.badge': 'Plankstaande timer · Android',
    'hero.h1.plain': 'Sterker',
    'hero.h1.neon': 'elke dag.',
    'hero.lede': 'De timer houdt je tijd bij, de AI-coach beoordeelt dagelijks je vorm op basis van slaap en hartslag, en je reeks telt elke dag op rij. Stel je plank in — de rest regelt de app.',
    'hero.btnText': 'Alle functies ↓',

    'demo.eyebrow': 'Probeer het nu meteen',
    'demo.noteLabel': 'Beste tijd deze sessie:',

    'features.eyebrow': 'Functies',
    'features.h2': 'Vijf schermen. Eén gewoonte.',
    'features.p': 'Evenveel tabbladen als in de app zelf — elk verzorgt zijn deel van de gewoonte.',

    'feature.1.title': 'Training',
    'feature.1.desc': 'Stel een doel in seconden en een aantal sets in, houd je vorm vast met de timer — of kies vrije training zonder limiet en probeer je eigen record te verbreken.',
    'feature.2.title': 'Statistieken',
    'feature.2.desc': 'Beste tijd, aantal trainingen en verbrande calorieën over 7, 30, 90 dagen of altijd — met grafieken die laten zien waar je voortgang naartoe gaat.',
    'feature.3.title': 'Beloningen',
    'feature.3.desc': 'Ontgrendel badges voor je eerste training, wekelijkse reeksen en meesterschapsniveaus — van Beginner tot Atleet.',
    'feature.4.title': 'Ranglijst',
    'feature.4.desc': 'Vergelijk je trainingsreeks met vrienden en andere gebruikers en behoud je plek in het klassement.',
    'feature.5.title': 'AI-coach',
    'feature.5.desc': 'Krijg dagelijks een vormscore van 0 tot 100 op basis van slaap, stappen en rusthartslag — met uitleg over wat die precies beïnvloedde.',
    'feature.6.title': 'Reeksen',
    'feature.6.desc': 'Train elke dag om je reeks levend te houden. Eén gemiste dag en de teller begint opnieuw.',
    'feature.6.tab': 'Reeks',

    'integration.title': 'Health Connect',
    'integration.desc': 'Synchroniseer stappen, slaap en hartslag met Android Health Connect — de AI-coach gebruikt deze gegevens in elke dagelijkse vormscore.',

    'screens.eyebrow': 'Schermen',
    'screens.h2': 'Zo ziet het eruit',
    'screens.p': 'Echte screenshots van de app — veeg opzij.',

    'screen.1.alt': 'Trainingstimer-scherm met aftellen',
    'screen.1.caption': 'Trainingstimer',
    'screen.2.alt': 'Wekelijkse statistieken en Health Connect-gegevens',
    'screen.2.caption': 'Wekelijkse statistieken',
    'screen.3.alt': 'Gedetailleerde analyse van voortgang en consistentie',
    'screen.3.caption': 'Gedetailleerde analyse',
    'screen.4.alt': 'Beloningen voor trainingsreeksen',
    'screen.4.caption': 'Beloningen voor reeksen',
    'screen.5.alt': 'Meesterschapsniveaus van Beginner tot Atleet',
    'screen.5.caption': 'Meesterschapsniveaus',
    'screen.6.alt': 'AI-coach toont een vormscore van 80 van de 100',
    'screen.6.caption': 'Score van de AI-coach',
    'screen.7.alt': 'Uitsplitsing van de score: slaap, stappen, hartslag',
    'screen.7.caption': 'Slaap, stappen, hartslag',

    'levels.eyebrow': 'Meesterschapsniveaus',
    'levels.h2': 'Het pad van beginner tot atleet',
    'levels.p': 'Je niveau hangt af van je totale planktijd — niet van één recordpoging.',

    'level.1.name': 'Beginner', 'level.1.req': '1 min+',
    'level.2.name': 'Starter', 'level.2.req': '3 min+',
    'level.3.name': 'Stagiair', 'level.3.req': '6 min+',
    'level.4.name': 'Amateur', 'level.4.req': '10 min+',
    'level.5.name': 'Beoefenaar', 'level.5.req': 'volgende',
    'level.6.name': 'Atleet', 'level.6.req': 'maximum',

    'badge.1.title': 'Eerste stap', 'badge.1.desc': 'Rond je eerste training af',
    'badge.2.title': '3 dagen op rij', 'badge.2.desc': 'Train 3 dagen achter elkaar',
    'badge.3.title': 'Weekkrijger', 'badge.3.desc': '7 dagen op rij',
    'badge.4.title': 'Twee weken', 'badge.4.desc': '14 dagen onafgebroken trainen',
    'badge.5.title': 'Kampioen', 'badge.5.desc': '30 dagen op rij',
    'badge.6.title': 'IJzeren wil', 'badge.6.desc': '60 dagen op rij',

    'download.eyebrow': 'Download',
    'download.h2': 'Klaar om de plank te houden?',
    'download.p': 'Eén APK-bestand, geen Google Play. Installeer en begin vandaag je reeks.',
    'download.version': 'Versie 3.13.0 · Android',
    'download.note': 'Als Android waarschuwt voor een onbekende bron — sta installatie toe bij Instellingen → Beveiliging en probeer het opnieuw.',
    'download.contact': 'Vragen of feedback? Mail naar',

    'footer.meta': '© 2026 Plank · gemaakt met 🔥',
  },
};

const HTML_LANG = { uk: 'uk', en: 'en', nl: 'nl' };

function setLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = HTML_LANG[lang] || lang;

  const title = dict['meta.title'];
  if (title) document.title = title;
  const desc = dict['meta.description'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (desc && metaDesc) metaDesc.setAttribute('content', desc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  window.dispatchEvent(new CustomEvent('plank:langchange', { detail: { lang } }));
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

/* Ukrainian is the shipped default markup, but we still run this
   once so <title>/meta description/alt text/lang attr all line up
   through the same code path. */
setLanguage('uk');

/* ---------------------------------------------------------
   Live plank-timer demo in the hero.
   A real, working stopwatch — not a mock — so a visitor
   can feel the core mechanic before installing anything.
   --------------------------------------------------------- */
(() => {
  const btn = document.getElementById('demoBtn');
  const timeEl = document.getElementById('demoTime');
  const stateEl = document.getElementById('demoState');
  const bestEl = document.getElementById('demoBest');
  const ringFill = document.getElementById('ringFill');
  if (!btn || !timeEl || !stateEl || !ringFill) return;

  const RADIUS = 90;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const MESSAGES = {
    uk: [
      [0, 'Тримай форму…'],
      [5, 'Дихай рівномірно'],
      [15, 'Не опускай стегна'],
      [30, 'Півхвилини. Тримай далі'],
      [60, 'Хвилина! Ти сильніший, ніж думаєш'],
      [90, 'Півтори хвилини. Це вже серйозно'],
      [120, 'Дві хвилини. Легенда'],
    ],
    en: [
      [0, 'Hold your form…'],
      [5, 'Breathe steady'],
      [15, "Don't drop your hips"],
      [30, 'Halfway to a minute. Keep going'],
      [60, "One minute! You're stronger than you think"],
      [90, "Ninety seconds. Now it's serious"],
      [120, 'Two minutes. Legend'],
    ],
    nl: [
      [0, 'Houd je vorm vast…'],
      [5, 'Adem rustig'],
      [15, 'Laat je heupen niet zakken'],
      [30, 'Halverwege een minuut. Hou vol'],
      [60, 'Eén minuut! Je bent sterker dan je denkt'],
      [90, 'Anderhalve minuut. Nu wordt het serieus'],
      [120, 'Twee minuten. Legende'],
    ],
  };
  const READY_TEXT = { uk: 'Готовий', en: 'Ready', nl: 'Klaar' };
  const DONE_TEXT = {
    uk: 'Гарна робота! Спробуй перевершити цей час.',
    en: 'Nice work! Try to beat that time.',
    nl: 'Goed gedaan! Probeer deze tijd te verbreken.',
  };
  const BTN_TEXT = {
    uk: { start: 'Старт', stop: 'Стоп' },
    en: { start: 'Start', stop: 'Stop' },
    nl: { start: 'Start', stop: 'Stop' },
  };

  let lang = 'uk';
  let running = false;
  let startTime = 0;
  let bestSeconds = 0;
  let rafId = null;
  let lastMessage = '';

  const pad = n => String(n).padStart(2, '0');
  const formatTime = totalSeconds => `${pad(Math.floor(totalSeconds / 60))}:${pad(totalSeconds % 60)}`;

  const messageFor = seconds => {
    const list = MESSAGES[lang] || MESSAGES.uk;
    let msg = list[0][1];
    for (const [threshold, text] of list) {
      if (seconds >= threshold) msg = text; else break;
    }
    return msg;
  };

  function loop(now) {
    if (!running) return;
    const elapsedMs = now - startTime;
    const elapsedSec = Math.floor(elapsedMs / 1000);

    timeEl.textContent = formatTime(elapsedSec);

    const lapProgress = (elapsedMs % 60000) / 60000;
    ringFill.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - lapProgress));

    const msg = messageFor(elapsedSec);
    if (msg !== lastMessage) {
      stateEl.textContent = msg;
      lastMessage = msg;
    }

    rafId = requestAnimationFrame(loop);
  }

  function start() {
    running = true;
    startTime = performance.now();
    lastMessage = '';
    btn.textContent = (BTN_TEXT[lang] || BTN_TEXT.uk).stop;
    btn.classList.add('is-running');
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    const finalSeconds = Math.floor((performance.now() - startTime) / 1000);
    if (finalSeconds > bestSeconds) {
      bestSeconds = finalSeconds;
      bestEl.textContent = formatTime(bestSeconds);
    }
    stateEl.textContent = finalSeconds > 0
      ? (DONE_TEXT[lang] || DONE_TEXT.uk)
      : (READY_TEXT[lang] || READY_TEXT.uk);
    btn.textContent = (BTN_TEXT[lang] || BTN_TEXT.uk).start;
    btn.classList.remove('is-running');
  }

  btn.addEventListener('click', () => (running ? stop() : start()));

  /* Keep the demo's imperative bits (button label, ready/coaching
     text) in sync when a visitor switches language mid-session. */
  window.addEventListener('plank:langchange', (e) => {
    lang = e.detail.lang;
    if (running) {
      btn.textContent = (BTN_TEXT[lang] || BTN_TEXT.uk).stop;
      lastMessage = ''; // forces the next tick to re-set the coaching line in the new language
    } else {
      btn.textContent = (BTN_TEXT[lang] || BTN_TEXT.uk).start;
      stateEl.textContent = READY_TEXT[lang] || READY_TEXT.uk;
    }
  });
})();

/* ---------------------------------------------------------
   Scroll-reveal for feature cards, screenshots, level nodes
   and badges. Purely a progressive enhancement: skipped if
   the browser lacks IntersectionObserver or the visitor has
   asked for reduced motion.
   --------------------------------------------------------- */
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) return;

  const groups = [
    document.querySelectorAll('.feature-grid > .feature-card'),
    document.querySelectorAll('.screens-track > .screen-item'),
    document.querySelectorAll('.levels-track > .level-node'),
    document.querySelectorAll('.badge-grid > .badge-card'),
  ];

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  groups.forEach(list => {
    list.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${Math.min(i, 5) * 0.06}s`;
      io.observe(el);
    });
  });
})();

/* ---------------------------------------------------------
   One-time "this scrolls sideways" hint for the screenshots
   gallery: nudge right a little, then settle back. Only fires
   once, only if the visitor hasn't already grabbed the strip
   themselves in the meantime, and skipped under reduced motion.
   --------------------------------------------------------- */
(() => {
  const track = document.querySelector('.screens-track');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!track || prefersReduced || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      setTimeout(() => {
        track.scrollTo({ left: 56, behavior: 'smooth' });
        setTimeout(() => {
          if (Math.abs(track.scrollLeft - 56) < 40) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }, 550);
      }, 450);
    });
  }, { threshold: 0.4 });

  io.observe(track);
})();
