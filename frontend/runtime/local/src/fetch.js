// JavaScript (JS) — handler pour l'import WASM nexus.fetch.fetch
// Utilisé par WASM pour effectuer des requêtes réseau universelles
import { TextDecoder, TextEncoder } from './encoding.js';

export function fetch(ptr, len, cbPtr) {
  // Décoder l'URL depuis la mémoire WASM
  const mem = globalThis.nexusWasmMemory;
  const url = new TextDecoder('utf-8').decode(new Uint8Array(mem.buffer, ptr, len));
  // Effectuer le fetch natif
  globalThis.fetch(url).then(async resp => {
    const text = await resp.text();
    // TODO: écrire la réponse dans la mémoire WASM et appeler le callback cbPtr
    // (interop avancée à compléter)
  });
}
