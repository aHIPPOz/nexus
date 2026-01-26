// AssemblyScript (AS) — utilisé comme import externe JS pour fetch universel
import { js_fetch } from "./extern";

export declare class NexusFetch {
  static fetch(url: string, callback: (response: string) => void): void {
    const ptr = changetype<usize>(String.UTF8.encode(url));
    // On suppose que le callback est une fonction exportée, on passe son pointeur
    const cbPtr = 0; // TODO: gestion avancée des callbacks
    js_fetch(ptr, url.length, cbPtr);
  }
}
