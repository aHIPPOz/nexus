// Loader universel pour Node.js/Deno/Bun
import { readFile } from "fs/promises";
import * as nexusConsole from './console.js';
import * as nexusFetch from './fetch.js';
import * as nexusTimer from './timer.js';
import * as nexusCrypto from './crypto.js';

export async function loadNexusWasm(wasmPath = "../../core-wasm/build/nexus.wasm", hostBindings = {}) {
  const buffer = await readFile(wasmPath);
  const imports = {
    'nexus.console': nexusConsole,
    'nexus.fetch': nexusFetch,
    'nexus.timer': nexusTimer,
    'nexus.crypto': nexusCrypto,
    ...hostBindings
  };
  const wasm = await WebAssembly.instantiate(buffer, imports);
  globalThis.nexusWasmMemory = wasm.instance.exports.memory;
  return wasm.instance.exports;
}
