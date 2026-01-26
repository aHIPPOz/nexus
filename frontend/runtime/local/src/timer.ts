// nexus.setTimeout, setInterval, clearTimeout, clearInterval
export function setTimeout(fn, ms, ...args) {
  // TODO: brancher sur WASM/AS ou fallback natif
  return globalThis.setTimeout(fn, ms, ...args);
}
export function setInterval(fn, ms, ...args) {
  return globalThis.setInterval(fn, ms, ...args);
}
export function clearTimeout(id) {
  return globalThis.clearTimeout(id);
}
export function clearInterval(id) {
  return globalThis.clearInterval(id);
}
