  export enum ByteOrder {
    littleEndian,
    bigEndian,
  }

  export enum UnicodeEncoding {
    utf8,
    utf16LE,
    utf16BE,
  }

  export enum InputStreamOptions {
    none,
    partial,
    readAhead,
  }

  export enum FileOpenDisposition {
    openExisting,
    openAlways,
    createNew,
    createAlways,
    truncateExisting,
  }

  export class DataReaderLoadOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): number;

    cancel(): void;

    close(): void;

  }

  export class IDataReader {
    byteOrder: ByteOrder;
    inputStreamOptions: InputStreamOptions;
    unconsumedBufferLength: number;
    unicodeEncoding: UnicodeEncoding;
    constructor();

    loadAsync(count: number, callback: (error: Error, result: number) => void): void ;

    readByte(): number;

    readBytes();
    readBuffer(length: number): IBuffer;

    readBoolean(): boolean;

    readGuid(): string;

    readInt16(): number;

    readInt32(): number;

    readInt64(): number;

    readUInt16(): number;

    readUInt32(): number;

    readUInt64(): number;

    readSingle(): number;

    readDouble(): number;

    readString(codeUnitCount: number): string;

    readDateTime(): Date;

    readTimeSpan(): number;

    detachBuffer(): IBuffer;

    detachStream(): IInputStream;

  }

  export class DataReader {
    unicodeEncoding: UnicodeEncoding;
    inputStreamOptions: InputStreamOptions;
    byteOrder: ByteOrder;
    unconsumedBufferLength: number;
    constructor();
    constructor(inputStream: IInputStream);

    static fromBuffer(buffer: IBuffer): DataReader;


    loadAsync(count: number, callback: (error: Error, result: number) => void): void ;

    readByte(): number;

    readBytes();
    readBuffer(length: number): IBuffer;

    readBoolean(): boolean;

    readGuid(): string;

    readInt16(): number;

    readInt32(): number;

    readInt64(): number;

    readUInt16(): number;

    readUInt32(): number;

    readUInt64(): number;

    readSingle(): number;

    readDouble(): number;

    readString(codeUnitCount: number): string;

    readDateTime(): Date;

    readTimeSpan(): number;

    detachBuffer(): IBuffer;

    detachStream(): IInputStream;

    close(): void;
  }

  export class DataWriterStoreOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): number;

    cancel(): void;

    close(): void;

  }

  export class IDataWriter {
    byteOrder: ByteOrder;
    unicodeEncoding: UnicodeEncoding;
    unstoredBufferLength: number;
    constructor();

    storeAsync(callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    writeByte(value: number): void;

    writeBytes(value: Array<number>): void;

    writeBuffer(buffer: IBuffer): void;
    writeBuffer(buffer: IBuffer, start: number, count: number): void;

    writeBoolean(value: boolean): void;

    writeGuid(value: string): void;

    writeInt16(value: number): void;

    writeInt32(value: number): void;

    writeInt64(value: number): void;

    writeUInt16(value: number): void;

    writeUInt32(value: number): void;

    writeUInt64(value: number): void;

    writeSingle(value: number): void;

    writeDouble(value: number): void;

    writeDateTime(value: Date): void;

    writeTimeSpan(value: number): void;

    writeString(value: string): number;

    measureString(value: string): number;

    detachBuffer(): IBuffer;

    detachStream(): IOutputStream;

  }

  export class DataWriter {
    unicodeEncoding: UnicodeEncoding;
    byteOrder: ByteOrder;
    unstoredBufferLength: number;
    constructor();
    constructor(outputStream: IOutputStream);

    storeAsync(callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    writeByte(value: number): void;

    writeBytes(value: Array<number>): void;

    writeBuffer(buffer: IBuffer): void;
    writeBuffer(buffer: IBuffer, start: number, count: number): void;

    writeBoolean(value: boolean): void;

    writeGuid(value: string): void;

    writeInt16(value: number): void;

    writeInt32(value: number): void;

    writeInt64(value: number): void;

    writeUInt16(value: number): void;

    writeUInt32(value: number): void;

    writeUInt64(value: number): void;

    writeSingle(value: number): void;

    writeDouble(value: number): void;

    writeDateTime(value: Date): void;

    writeTimeSpan(value: number): void;

    writeString(value: string): number;

    measureString(value: string): number;

    detachBuffer(): IBuffer;

    detachStream(): IOutputStream;

    close(): void;
  }

  export class Buffer {
    length: number;
    capacity: number;
    constructor();
    constructor(capacity: number);

    static createCopyFromMemoryBuffer(input: Object): Buffer;


    static createMemoryBufferOverIBuffer(input: IBuffer): Object;


  }

  export class IBuffer {
    capacity: number;
    length: number;
    constructor();

  }

  export class IContentTypeProvider {
    contentType: string;
    constructor();

  }

  export class IInputStream {
    constructor();

    readAsync(buffer: IBuffer, count: number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

  }

  export class IOutputStream {
    constructor();

    writeAsync(buffer: IBuffer, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

  }

  export class IRandomAccessStream {
    canRead: boolean;
    canWrite: boolean;
    position: number;
    size: number;
    constructor();

    getInputStreamAt(position: number): IInputStream;

    getOutputStreamAt(position: number): IOutputStream;

    seek(position: number): void;

    cloneStream(): IRandomAccessStream;

  }

  export class IRandomAccessStreamWithContentType {
    constructor();

  }

  export class IRandomAccessStreamReference {
    constructor();

    openReadAsync(callback: (error: Error, result: IRandomAccessStreamWithContentType) => void): void ;

  }

  export class RandomAccessStream {
    constructor();

    static copyAsync(source: IInputStream, destination: IOutputStream, callback: (error: Error, result: number) => void): void ;
    static copyAsync(source: IInputStream, destination: IOutputStream, bytesToCopy: number, callback: (error: Error, result: number) => void): void ;


    static copyAndCloseAsync(source: IInputStream, destination: IOutputStream, callback: (error: Error, result: number) => void): void ;


  }

  export class IInputStreamReference {
    constructor();

    openSequentialReadAsync(callback: (error: Error, result: IInputStream) => void): void ;

  }

  export class RandomAccessStreamReference {
    constructor();

    static createFromFile(file: Object): RandomAccessStreamReference;


    static createFromUri(uri: Object): RandomAccessStreamReference;


    static createFromStream(stream: IRandomAccessStream): RandomAccessStreamReference;


    openReadAsync(callback: (error: Error, result: IRandomAccessStreamWithContentType) => void): void ;

  }

  export class FileRandomAccessStream {
    size: number;
    canRead: boolean;
    canWrite: boolean;
    position: number;
    constructor();

    static openAsync(filePath: string, accessMode: number, callback: (error: Error, result: IRandomAccessStream) => void): void ;
    static openAsync(filePath: string, accessMode: number, sharingOptions: number, openDisposition: FileOpenDisposition, callback: (error: Error, result: IRandomAccessStream) => void): void ;


    static openTransactedWriteAsync(filePath: string, callback: (error: Error, result: Object) => void): void ;
    static openTransactedWriteAsync(filePath: string, openOptions: number, openDisposition: FileOpenDisposition, callback: (error: Error, result: Object) => void): void ;


    static openForUserAsync(user: Object, filePath: string, accessMode: number, callback: (error: Error, result: IRandomAccessStream) => void): void ;
    static openForUserAsync(user: Object, filePath: string, accessMode: number, sharingOptions: number, openDisposition: FileOpenDisposition, callback: (error: Error, result: IRandomAccessStream) => void): void ;


    static openTransactedWriteForUserAsync(user: Object, filePath: string, callback: (error: Error, result: Object) => void): void ;
    static openTransactedWriteForUserAsync(user: Object, filePath: string, openOptions: number, openDisposition: FileOpenDisposition, callback: (error: Error, result: Object) => void): void ;


    readAsync(buffer: IBuffer, count: number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    writeAsync(buffer: IBuffer, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    getInputStreamAt(position: number): IInputStream;

    getOutputStreamAt(position: number): IOutputStream;

    seek(position: number): void;

    cloneStream(): IRandomAccessStream;

    close(): void;
  }

  export class FileInputStream {
    constructor();

    readAsync(buffer: IBuffer, count: number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    close(): void;
  }

  export class FileOutputStream {
    constructor();

    writeAsync(buffer: IBuffer, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    close(): void;
  }

  export class RandomAccessStreamOverStream {
    size: number;
    canRead: boolean;
    canWrite: boolean;
    position: number;
    constructor();

    readAsync(buffer: IBuffer, count: number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    writeAsync(buffer: IBuffer, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    getInputStreamAt(position: number): IInputStream;

    getOutputStreamAt(position: number): IOutputStream;

    seek(position: number): void;

    cloneStream(): IRandomAccessStream;

    close(): void;
  }

  export class InputStreamOverStream {
    constructor();

    readAsync(buffer: IBuffer, count: number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    close(): void;
  }

  export class OutputStreamOverStream {
    constructor();

    writeAsync(buffer: IBuffer, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    close(): void;
  }

  export class InMemoryRandomAccessStream {
    size: number;
    canRead: boolean;
    canWrite: boolean;
    position: number;
    constructor();

    readAsync(buffer: IBuffer, count: number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    writeAsync(buffer: IBuffer, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    getInputStreamAt(position: number): IInputStream;

    getOutputStreamAt(position: number): IOutputStream;

    seek(position: number): void;

    cloneStream(): IRandomAccessStream;

    close(): void;
  }

