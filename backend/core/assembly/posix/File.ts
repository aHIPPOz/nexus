export declare class File {
  fd: i32;
  pathPtr: i32;
  pathLen: i32;

  constructor(fd: i32, pathPtr: i32, pathLen: i32) {
    this.fd = fd;
    this.pathPtr = pathPtr;
    this.pathLen = pathLen;
  }

  // Méthode pour lire le chemin depuis la mémoire linéaire
  getPath(): string {
    return String.UTF8.decodeUnsafe(this.pathPtr, this.pathLen);
  }

  // Stub pour lecture (à relier à l'ABI WASIX/JS)
  read(bufferPtr: i32, length: i32): i32 {
    // Appel à l'host JS ou WASIX ici
    return 0;
  }

  // Stub pour écriture
  write(bufferPtr: i32, length: i32): i32 {
    // Appel à l'host JS ou WASIX ici
    return 0;
  }
}

export declare class Dir extends File {
  entriesPtr: i32;
  entriesLen: i32;

  constructor(fd: i32, pathPtr: i32, pathLen: i32, entriesPtr: i32, entriesLen: i32) {
    super(fd, pathPtr, pathLen);
    this.entriesPtr = entriesPtr;
    this.entriesLen = entriesLen;
  }

  // Méthode pour lire les entrées du dossier
  getEntries(): string[] {
    // Décodage des entrées depuis la mémoire linéaire
    // TODO: à relier à l'ABI WASIX/JS
    return [];
  }
}
