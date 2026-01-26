// JavaScript (JS) — handler pour l'import WASM nexus.timer.setTimeout/clearTimeout
// Utilisé par WASM pour timers universels
export function setTimeout(cbPtr, ms) {
  // TODO: retrouver le callback exporté par WASM via cbPtr et l'appeler
  return globalThis.setTimeout(() => {
    // (interop avancée à compléter)
  }, ms);
}
export function clearTimeout(id) {
  return globalThis.clearTimeout(id);
}
