/* Nav gets a background once the page scrolls under it */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });
}

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

  const MESSAGES = [
    [0, 'Тримай форму…'],
    [5, 'Дихай рівномірно'],
    [15, 'Не опускай стегна'],
    [30, 'Півхвилини. Тримай далі'],
    [60, 'Хвилина! Ти сильніший, ніж думаєш'],
    [90, 'Півтори хвилини. Це вже серйозно'],
    [120, 'Дві хвилини. Легенда'],
  ];

  let running = false;
  let startTime = 0;
  let bestSeconds = 0;
  let rafId = null;
  let lastMessage = '';

  const pad = n => String(n).padStart(2, '0');
  const formatTime = totalSeconds => `${pad(Math.floor(totalSeconds / 60))}:${pad(totalSeconds % 60)}`;

  const messageFor = seconds => {
    let msg = MESSAGES[0][1];
    for (const [threshold, text] of MESSAGES) {
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
    btn.textContent = 'Стоп';
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
      ? 'Гарна робота! Спробуй перевершити цей час.'
      : 'Готовий';
    btn.textContent = 'Старт';
    btn.classList.remove('is-running');
  }

  btn.addEventListener('click', () => (running ? stop() : start()));
})();
