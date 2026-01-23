# Architecture Nexus

- **Cœur** : AssemblyScript → WebAssembly (core-wasm)
- **Glue JS** : runtime-js (chargement, extensions, mapping ABI)
- **Types** : types TS exposés à l’utilisateur
- **WASIX** : ABI centrale, extension POSIX/WASI
- **Interop** : tout JS accessible depuis WASM via Nexus

## Packages

- `core-wasm` : logique, structs, POSIX/WASI/WASIX
- `runtime-js` : loader, mapping, extensions JS
- `types` : types partagés

## Loader universel

- `wasm-loader.browser.ts` : navigateur
- `wasm-loader.node.ts` : Node/Deno/Bun

## Roadmap

Voir README.md
