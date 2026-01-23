import { loadNexusWasm } from '../packages/runtime-js/src/wasm-loader.browser.js';

(async () => {
  const wasm = await loadNexusWasm();
  // TODO: Utilisation des APIs Nexus
  console.log('Nexus WASM chargé:', wasm);
})();
