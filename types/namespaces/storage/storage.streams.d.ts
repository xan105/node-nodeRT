  export enum ByteOrder {
    littleEndian,
    bigEndian,
  }

  export enum FileOpenDisposition {
    openExisting,
    openAlways,
    createNew,
    createAlways,
    truncateExisting,
  }

  export enum InputStreamOptions {
    none,
    partial,
    readAhead,
  }

  export enum UnicodeEncoding {
    utf8,
    utf16LE,
    utf16BE,
  }

  export class Buffer {
    length: Number;
    capacity: Number;
    constructor();
    constructor(capacity: Number);

    static createCopyFromMemoryBuffer(input: Object): Buffer;


    static createMemoryBufferOverIBuffer(input: IBuffer): Object;


  }

  export class DataReader {
    unicodeEncoding: UnicodeEncoding;
    inputStreamOptions: InputStreamOptions;
    byteOrder: ByteOrder;
    unconsumedBufferLength: Number;
    constructor();
    constructor(inputStream: IInputStream);

    static fromBuffer(buffer: IBuffer): DataReader;


    loadAsync(count: Number, callback: (error: Error, result: Number) => void): void ;

    readByte(): Number;

    readBytes();
    readBuffer(length: Number): IBuffer;

    readBoolean(): Boolean;

    readGuid(): String;

    readInt16(): Number;

    readInt32(): Number;

    readInt64(): Number;

    readUInt16(): Number;

    readUInt32(): Number;

    readUInt64(): Number;

    readSingle(): Number;

    readDouble(): Number;

    readString(codeUnitCount: Number): String;

    readDateTime(): Date;

    readTimeSpan(): Number;

    detachBuffer(): IBuffer;

    detachStream(): IInputStream;

    close(): void;
  }

  export class DataReaderLoadOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): Number;

    cancel(): void;

    close(): void;

  }

  export class DataWriter {
    unicodeEncoding: UnicodeEncoding;
    byteOrder: ByteOrder;
    unstoredBufferLength: Number;
    constructor();
    constructor(outputStream: IOutputStream);

    storeAsync(callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    writeByte(value: Number): void;

    writeBytes(value: Array<Number>): void;

    writeBuffer(buffer: IBuffer): void;
    writeBuffer(buffer: IBuffer, start: Number, count: Number): void;

    writeBoolean(value: Boolean): void;

    writeGuid(value: String): void;

    writeInt16(value: Number): void;

    writeInt32(value: Number): void;

    writeInt64(value: Number): void;

    writeUInt16(value: Number): void;

    writeUInt32(value: Number): void;

    writeUInt64(value: Number): void;

    writeSingle(value: Number): void;

    writeDouble(value: Number): void;

    writeDateTime(value: Date): void;

    writeTimeSpan(value: Number): void;

    writeString(value: String): Number;

    measureString(value: String): Number;

    detachBuffer(): IBuffer;

    detachStream(): IOutputStream;

    close(): void;
  }

  export class DataWriterStoreOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): Number;

    cancel(): void;

    close(): void;

  }

  export class FileInputStream {
    constructor();

    readAsync(buffer: IBuffer, count: Number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    close(): void;
  }

  export class FileOutputStream {
    constructor();

    writeAsync(buffer: IBuffer, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    close(): void;
  }

  export class FileRandomAccessStream {
    size: Number;
    canRead: Boolean;
    canWrite: Boolean;
    position: Number;
    constructor();

    static openAsync(filePath: String, accessMode: Number, callback: (error: Error, result: IRandomAccessStream) => void): void ;
    static openAsync(filePath: String, accessMode: Number, sharingOptions: Number, openDisposition: FileOpenDisposition, callback: (error: Error, result: IRandomAccessStream) => void): void ;


    static openTransactedWriteAsync(filePath: String, callback: (error: Error, result: Object) => void): void ;
    static openTransactedWriteAsync(filePath: String, openOptions: Number, openDisposition: FileOpenDisposition, callback: (error: Error, result: Object) => void): void ;


    static openForUserAsync(user: Object, filePath: String, accessMode: Number, callback: (error: Error, result: IRandomAccessStream) => void): void ;
    static openForUserAsync(user: Object, filePath: String, accessMode: Number, sharingOptions: Number, openDisposition: FileOpenDisposition, callback: (error: Error, result: IRandomAccessStream) => void): void ;


    static openTransactedWriteForUserAsync(user: Object, filePath: String, callback: (error: Error, result: Object) => void): void ;
    static openTransactedWriteForUserAsync(user: Object, filePath: String, openOptions: Number, openDisposition: FileOpenDisposition, callback: (error: Error, result: Object) => void): void ;


    readAsync(buffer: IBuffer, count: Number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    writeAsync(buffer: IBuffer, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    getInputStreamAt(position: Number): IInputStream;

    getOutputStreamAt(position: Number): IOutputStream;

    seek(position: Number): void;

    cloneStream(): IRandomAccessStream;

    close(): void;
  }

  export class IBuffer {
    capacity: Number;
    length: Number;
    constructor();

  }

  export class IContentTypeProvider {
    contentType: String;
    constructor();

  }

  export class IDataReader {
    byteOrder: ByteOrder;
    inputStreamOptions: InputStreamOptions;
    unconsumedBufferLength: Number;
    unicodeEncoding: UnicodeEncoding;
    constructor();

    loadAsync(count: Number, callback: (error: Error, result: Number) => void): void ;

    readByte(): Number;

    readBytes();
    readBuffer(length: Number): IBuffer;

    readBoolean(): Boolean;

    readGuid(): String;

    readInt16(): Number;

    readInt32(): Number;

    readInt64(): Number;

    readUInt16(): Number;

    readUInt32(): Number;

    readUInt64(): Number;

    readSingle(): Number;

    readDouble(): Number;

    readString(codeUnitCount: Number): String;

    readDateTime(): Date;

    readTimeSpan(): Number;

    detachBuffer(): IBuffer;

    detachStream(): IInputStream;

  }

  export class IDataWriter {
    byteOrder: ByteOrder;
    unicodeEncoding: UnicodeEncoding;
    unstoredBufferLength: Number;
    constructor();

    storeAsync(callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    writeByte(value: Number): void;

    writeBytes(value: Array<Number>): void;

    writeBuffer(buffer: IBuffer): void;
    writeBuffer(buffer: IBuffer, start: Number, count: Number): void;

    writeBoolean(value: Boolean): void;

    writeGuid(value: String): void;

    writeInt16(value: Number): void;

    writeInt32(value: Number): void;

    writeInt64(value: Number): void;

    writeUInt16(value: Number): void;

    writeUInt32(value: Number): void;

    writeUInt64(value: Number): void;

    writeSingle(value: Number): void;

    writeDouble(value: Number): void;

    writeDateTime(value: Date): void;

    writeTimeSpan(value: Number): void;

    writeString(value: String): Number;

    measureString(value: String): Number;

    detachBuffer(): IBuffer;

    detachStream(): IOutputStream;

  }

  export class IInputStream {
    constructor();

    readAsync(buffer: IBuffer, count: Number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

  }

  export class IInputStreamReference {
    constructor();

    openSequentialReadAsync(callback: (error: Error, result: IInputStream) => void): void ;

  }

  export class IOutputStream {
    constructor();

    writeAsync(buffer: IBuffer, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

  }

  export class IPropertySetSerializer {
    constructor();

    serialize(propertySet: Object): IBuffer;

    deserialize(propertySet: Object, buffer: IBuffer): void;

  }

  export class IRandomAccessStream {
    canRead: Boolean;
    canWrite: Boolean;
    position: Number;
    size: Number;
    constructor();

    getInputStreamAt(position: Number): IInputStream;

    getOutputStreamAt(position: Number): IOutputStream;

    seek(position: Number): void;

    cloneStream(): IRandomAccessStream;

  }

  export class IRandomAccessStreamReference {
    constructor();

    openReadAsync(callback: (error: Error, result: IRandomAccessStreamWithContentType) => void): void ;

  }

  export class IRandomAccessStreamWithContentType {
    constructor();

  }

  export class InMemoryRandomAccessStream {
    size: Number;
    canRead: Boolean;
    canWrite: Boolean;
    position: Number;
    constructor();

    readAsync(buffer: IBuffer, count: Number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    writeAsync(buffer: IBuffer, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    getInputStreamAt(position: Number): IInputStream;

    getOutputStreamAt(position: Number): IOutputStream;

    seek(position: Number): void;

    cloneStream(): IRandomAccessStream;

    close(): void;
  }

  export class InputStreamOverStream {
    constructor();

    readAsync(buffer: IBuffer, count: Number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    close(): void;
  }

  export class OutputStreamOverStream {
    constructor();

    writeAsync(buffer: IBuffer, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    close(): void;
  }

  export class RandomAccessStream {
    constructor();

    static copyAsync(source: IInputStream, destination: IOutputStream, callback: (error: Error, result: Number) => void): void ;
    static copyAsync(source: IInputStream, destination: IOutputStream, bytesToCopy: Number, callback: (error: Error, result: Number) => void): void ;


    static copyAndCloseAsync(source: IInputStream, destination: IOutputStream, callback: (error: Error, result: Number) => void): void ;


  }

  export class RandomAccessStreamOverStream {
    size: Number;
    canRead: Boolean;
    canWrite: Boolean;
    position: Number;
    constructor();

    readAsync(buffer: IBuffer, count: Number, options: InputStreamOptions, callback: (error: Error, result: IBuffer) => void): void ;

    writeAsync(buffer: IBuffer, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    getInputStreamAt(position: Number): IInputStream;

    getOutputStreamAt(position: Number): IOutputStream;

    seek(position: Number): void;

    cloneStream(): IRandomAccessStream;

    close(): void;
  }

  export class RandomAccessStreamReference {
    constructor();

    static createFromFile(file: Object): RandomAccessStreamReference;


    static createFromUri(uri: Object): RandomAccessStreamReference;


    static createFromStream(stream: IRandomAccessStream): RandomAccessStreamReference;


    openReadAsync(callback: (error: Error, result: IRandomAccessStreamWithContentType) => void): void ;

  }

