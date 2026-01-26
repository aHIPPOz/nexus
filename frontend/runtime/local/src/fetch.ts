// nexus.fetch : fetch universel piloté WASM
export async function fetch(input, init) {
  // TODO: brancher sur WASM/AS ou fallback natif
  return globalThis.fetch(input, init);
}
