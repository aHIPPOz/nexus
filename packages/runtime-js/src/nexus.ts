export class Nexus {
  constructor(private wasm: any) {}

  createStruct(size: number) {
    return this.wasm.Struct.new(size);
  }
}
