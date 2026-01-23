import { loadNexusWasm } from '../packages/runtime-js/src/wasm-loader.browser.js';
import { Nexus } from '../packages/runtime-js/src/nexus.js';

import { NexusType, NexusStruct, NexusFunction, NexusBrand } from '../packages/runtime-js/src/index.js';

(async () => {
  const wasm = await loadNexusWasm();
  const nexus = new Nexus(wasm);

  // Création d'un File POSIX
  const path = '/tmp/test.txt';
  const { ptr, len } = nexus.allocString(path);
  const file = wasm.File.new(3, ptr, len);

  // Utilisation de l'API
  console.log('Nexus WASM chargé:', wasm);
  console.log('File:', file);
  // Lecture du chemin
  if (file.getPath) {
    console.log('Chemin du fichier:', file.getPath());
  }

  // Exemple NexusType
  const PointType = NexusType('Point', { x: 0, y: 0 }, { mimeType: 'application/point' });
  console.log('NexusType Point:', PointType);

  // Exemple NexusStruct
  const Point = new (NexusStruct('Point', { x: 0, y: 0 }));
  Point.x = 10; Point.y = 20;
  console.log('NexusStruct Point:', Point);

  // Exemple NexusFunction
  const add = NexusFunction('add', ['i32', 'i32'], 'i32', (a, b) => a + b);
  console.log('NexusFunction add(2,3):', add(2,3));

  // Exemple NexusBrand
  const user = NexusBrand({ name: 'Alice' }, 'User');
  console.log('NexusBrand User:', user);
})();
