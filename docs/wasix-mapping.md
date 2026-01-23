# Mapping WASIX ↔ JS/Nexus

| Concept  | WASIX     | Nexus           |
| -------- | --------- | --------------- |
| Fichiers | fd_*      | nexus.posix     |
| Temps    | clock_*   | nexus.time      |
| Threads  | thread_*  | nexus.scheduler |
| Env      | environ_* | nexus.env       |
| JS natif | ❌         | nexus.js.*      |

- Nexus étend WASIX, pas l’inverse.
- Import table unifiée :

```js
const imports = {
  wasi_snapshot_preview1: wasiImpl,
  wasix_32v1: wasixImpl,
  nexus: nexusImpl,
};
```

- Exposition JS dans WASM :

```ts
@external("nexus.js", "consoleLog")
declare function js_log(ptr: i32, len: i32): void;
```
