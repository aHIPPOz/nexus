// AssemblyScript (AS) — utilisé comme import externe JS pour timers universels
import { js_setTimeout, js_clearTimeout } from "./extern";

export declare class NexusTimer {
  static setTimeout(callback: () => void, ms: i32): i32 {
    // TODO: gestion avancée des callbacks (pointeur)
    const cbPtr = 0;
    return js_setTimeout(cbPtr, ms);
  }
  static clearTimeout(id: i32): void {
    js_clearTimeout(id);
  }
}
