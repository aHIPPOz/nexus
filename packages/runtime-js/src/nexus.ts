export class Nexus {
  constructor(private wasm: any) {}

  createStruct(size: number) {
    return this.wasm.Struct.new(size);
  }

  createFile(fd: number, path: string) {
    // TODO: Allocation du chemin dans la mémoire WASM
    // Appel du constructeur File côté WASM
    return this.wasm.File.new(fd, /*ptr*/, /*len*/);
  }

  createDir(fd: number, path: string, entries: string[]) {
    // TODO: Allocation du chemin et des entrées dans la mémoire WASM
    // Appel du constructeur Dir côté WASM
    return this.wasm.Dir.new(fd, /*ptr*/, /*len*/, /*entriesPtr*/, /*entriesLen*/);
  }

  allocString(str: string): { ptr: number, len: number } {
    // Encode la chaîne en UTF-8 et alloue dans la mémoire WASM
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    const ptr = this.wasm.__alloc(bytes.length);
    // TODO: copier les bytes dans la mémoire WASM
    return { ptr, len: bytes.length };
  }
}
