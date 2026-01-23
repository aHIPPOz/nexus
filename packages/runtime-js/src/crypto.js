// JavaScript (JS) — handler pour l'import WASM nexus.crypto.getRandomValues
// Utilisé par WASM pour crypto universelle
export function getRandomValues(ptr, len) {
  const mem = globalThis.nexusWasmMemory;
  const arr = new Uint8Array(mem.buffer, ptr, len);
  globalThis.crypto.getRandomValues(arr);
}
