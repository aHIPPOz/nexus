export declare class WasiEnv {
  environPtr: i32;
  environLen: i32;

  constructor(environPtr: i32, environLen: i32) {
    this.environPtr = environPtr;
    this.environLen = environLen;
  }

  getEnv(): string {
    // Décodage de l'environnement depuis la mémoire linéaire
    return String.UTF8.decodeUnsafe(this.environPtr, this.environLen);
  }

  // Stub pour clock
  clock(): i64 {
    // Appel à l'host JS ou WASIX ici
    return 0;
  }
}
