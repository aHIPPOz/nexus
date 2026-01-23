// Loader universel pour Node.js/Deno/Bun
import { readFile } from "fs/promises";

export async function loadNexusWasm(wasmPath = "../../core-wasm/build/nexus.wasm", hostBindings = {}) {
  const buffer = await readFile(wasmPath);
  const wasm = await WebAssembly.instantiate(buffer, {
    nexus: hostBindings
  });
  return wasm.instance.exports;
}
