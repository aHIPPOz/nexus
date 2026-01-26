// AssemblyScript (AS) — utilisé comme import externe JS pour crypto universelle
import { js_getRandomValues } from "./extern";

export declare class NexusCrypto {
  static getRandomValues(buffer: Uint8Array): void {
    const ptr = buffer.dataStart;
    js_getRandomValues(ptr, buffer.length);
  }
}
