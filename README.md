a library than extend javascript and wasm with totaly interporability and wasix ABI
# Nexus

Meta-runtime WASM-first unifiant JS, WASIX, POSIX, WASI sous une ABI commune.

- Cœur en AssemblyScript → WebAssembly
- Glue JS universelle (browser, Node, Deno, Bun)
- Expose POSIX, WASI, WASIX, et APIs Nexus
- Remplace les fonctions natives du browser par des versions pilotées par WASM
- Extensible, modulaire, conçu pour Codespaces

## Structure

Voir `/packages` pour les modules principaux.

## Build rapide

```sh
cd packages/core-wasm
npm install
npm run build
```

## Exemple

Voir `/examples/basic.js`

## API rapide

- `Nexus` : wrapper JS pour WASM
- `File`, `Dir` : structs POSIX réelles
- `Nexus.allocString(str)` : allocation mémoire JS → WASM
- `wasm.File.new(fd, ptr, len)` : création d’un fichier POSIX
- `file.getPath()` : lecture du chemin

## Loader universel

- `wasm-loader.browser.ts` : navigateur
- `wasm-loader.node.ts` : Node/Deno/Bun

## Workflow

1. Build AssemblyScript → WASM
2. Charger WASM via JS
3. Utiliser les structs Nexus (File, Dir, etc.)
4. Étendre avec bindings POSIX/WASI/WASIX
