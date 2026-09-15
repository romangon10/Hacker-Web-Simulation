import { createSimulation } from './simulation.js';
const canvas = document.getElementById('matrix'), ctx = canvas.getContext('2d');
const log = document.getElementById('terminal'), balance = document.getElementById('balance');
const toggle = document.getElementById('toggle'), reset = document.getElementById('reset');
const status = document.getElementById('status');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const model = createSimulation();
let paused = reduced.matches, frame = 0, last = 0, elapsed = 0, drops = [];
const messages = ['Inicializando entorno de demostración…', 'Preparando nodos ficticios…', 'Simulando canal de comunicación…', 'Cargando contador de prueba…', 'Simulación activa. No hay minería ni conexiones a billeteras.'];
function resize() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(innerWidth * ratio); canvas.height = Math.round(innerHeight * ratio);
  canvas.style.width = innerWidth + 'px'; canvas.style.height = innerHeight + 'px';
  ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);
  drops = Array(Math.ceil(innerWidth / 18)).fill(1);
}
function sync() {
  toggle.textContent = paused ? 'Reanudar' : 'Pausar';
  toggle.setAttribute('aria-pressed', String(paused));
  status.classList.toggle('paused', paused);
  status.lastChild.textContent = paused ? 'PAUSADA' : 'ACTIVA';
}
function append(text) { const p = document.createElement('p'); p.textContent = '> ' + text; log.append(p); }
function animate(now) {
  frame = 0;
  if (paused || document.hidden) return;
  const delta = last ? Math.min(now - last, 100) : 0; last = now; elapsed += delta;
  if (elapsed >= 60) {
    if (ctx && !reduced.matches) {
      ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.fillRect(0, 0, innerWidth, innerHeight);
      ctx.fillStyle = '#729e83'; ctx.font = '14px monospace';
      drops.forEach((y, i) => { ctx.fillText(Math.random() > .5 ? '1' : '0', i * 18, y * 18); drops[i] = y * 18 > innerHeight && Math.random() > .975 ? 0 : y + 1; });
    }
    elapsed = 0;
  }
  const events = model.advance(delta);
  for (const index of events.lines) append(messages[index]);
  balance.textContent = events.balance.toFixed(5) + ' BTC ficticios';
  frame = requestAnimationFrame(animate);
}
function start() { last = 0; if (!frame && !paused && !document.hidden) frame = requestAnimationFrame(animate); sync(); }
function stop() { cancelAnimationFrame(frame); frame = 0; last = 0; }
toggle.addEventListener('click', () => { paused = !paused; if (paused) stop(); else start(); sync(); });
reset.addEventListener('click', () => { stop(); model.reset(); log.replaceChildren(); balance.textContent = '0.00000 BTC ficticios'; elapsed = 0; start(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
window.addEventListener('resize', resize);
window.addEventListener('pagehide', stop);
window.addEventListener('pageshow', start);
reduced.addEventListener('change', () => {
  if (reduced.matches) { paused = true; stop(); ctx?.clearRect(0,0,innerWidth,innerHeight); }
  sync();
});
resize(); start();
