import { TextDecoder } from './encoding.js';

// Handler appelé par WASM (interop)
export function log(ptr, len) {
  const msg = decodeWasmString(ptr, len);
  console.log('[Nexus]', msg);
}
export function info(ptr, len) {
  const msg = decodeWasmString(ptr, len);
  console.info('[Nexus]', msg);
}
export function warn(ptr, len) {
  const msg = decodeWasmString(ptr, len);
  console.warn('[Nexus]', msg);
}
export function error(ptr, len) {
  const msg = decodeWasmString(ptr, len);
  console.error('[Nexus]', msg);
}

// Décodage mémoire linéaire WASM → string JS
function decodeWasmString(ptr, len) {
  // @ts-ignore
  const mem = globalThis.nexusWasmMemory || globalThis.wasmMemory;
  if (!mem) throw new Error('WASM memory not found');
  const bytes = new Uint8Array(mem.buffer, ptr, len);
  return new TextDecoder('utf-8').decode(bytes);
}
