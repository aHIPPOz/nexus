import * as nexusConsole from './console.js';
import * as nexusFetch from './fetch.js';
import * as nexusTimer from './timer.js';
import * as nexusCrypto from './crypto.js';

export async function loadNexusWasm(wasmUrl = "../../core-wasm/build/nexus.wasm", hostBindings = {}) {
  const response = await fetch(wasmUrl);
  // Prépare la table d'import pour WASM
  const imports = {
    'nexus.console': nexusConsole,
    'nexus.fetch': nexusFetch,
    'nexus.timer': nexusTimer,
    'nexus.crypto': nexusCrypto,
    ...hostBindings
  };
  const wasm = await WebAssembly.instantiateStreaming(response, imports);
  // Expose la mémoire pour l'interop
  globalThis.nexusWasmMemory = wasm.instance.exports.memory;
  return wasm.instance.exports;
}
