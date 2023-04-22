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
    constructor(underlyingStream: Object, algorithm: CompressAlgorithm, blockSize: number);

    finishAsync(callback: (error: Error, result: boolean) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    detachStream(): Object;

    close(): void;
  }

  export class Decompressor {
    constructor();
    constructor(underlyingStream: Object);

    readAsync(buffer: Object, count: number, options: number, callback: (error: Error, result: Object) => void): void ;

    detachStream(): Object;

    close(): void;
  }

