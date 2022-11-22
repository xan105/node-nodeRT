  export enum CompressAlgorithm {
    invalidAlgorithm,
    nullAlgorithm,
    mszip,
    xpress,
    xpressHuff,
    lzms,
  }

  export class Compressor {
    constructor();
    constructor(underlyingStream: Object);
    constructor(underlyingStream: Object, algorithm: CompressAlgorithm, blockSize: Number);

    finishAsync(callback: (error: Error, result: Boolean) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    detachStream(): Object;

    close(): void;
  }

  export class Decompressor {
    constructor();
    constructor(underlyingStream: Object);

    readAsync(buffer: Object, count: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    detachStream(): Object;

    close(): void;
  }

