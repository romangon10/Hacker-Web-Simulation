export function createSimulation(random = Math.random) {
  let time = 0, line = 0, ticks = 0, balance = 0;
  return {
    reset() { time = 0; line = 0; ticks = 0; balance = 0; },
    advance(delta) {
      if (!Number.isFinite(delta) || delta < 0) throw new RangeError('delta must be finite and nonnegative');
      time += delta;
      const lines = [];
      while (line < 5 && time >= (line + 1) * 1200) lines.push(line++);
      const target = Math.max(0, Math.floor((time - 6000) / 800));
      while (ticks < target) { balance += random() * .01; ticks++; }
      return { lines, balance };
    }
  };
}
