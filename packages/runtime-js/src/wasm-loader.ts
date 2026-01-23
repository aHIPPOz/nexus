export async function loadNexusWasm(wasmUrl = "../../core-wasm/build/nexus.wasm", hostBindings = {}) {
  const response = await fetch(wasmUrl);
  const wasm = await WebAssembly.instantiateStreaming(response, {
    nexus: hostBindings
  });
  return wasm.instance.exports;
}
