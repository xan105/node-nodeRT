  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum PdfPageRotation {
    normal,
    rotate90,
    rotate180,
    rotate270,
  }

  export class PdfDocument {
    isPasswordProtected: Boolean;
    pageCount: Number;
    constructor();

    static loadFromFileAsync(file: Object, callback: (error: Error, result: PdfDocument) => void): void ;
    static loadFromFileAsync(file: Object, password: String, callback: (error: Error, result: PdfDocument) => void): void ;


    static loadFromStreamAsync(inputStream: Object, callback: (error: Error, result: PdfDocument) => void): void ;
    static loadFromStreamAsync(inputStream: Object, password: String, callback: (error: Error, result: PdfDocument) => void): void ;


    getPage(pageIndex: Number): PdfPage;

  }

  export class PdfPage {
    dimensions: PdfPageDimensions;
    index: Number;
    preferredZoom: Number;
    rotation: PdfPageRotation;
    size: Object;
    constructor();

    renderToStreamAsync(outputStream: Object, callback: (error: Error) => void): void ;
    renderToStreamAsync(outputStream: Object, options: PdfPageRenderOptions, callback: (error: Error) => void): void ;

    preparePageAsync(callback: (error: Error) => void): void ;

    close(): void;
  }

  export class PdfPageDimensions {
    artBox: Object;
    bleedBox: Object;
    cropBox: Object;
    mediaBox: Object;
    trimBox: Object;
    constructor();

  }

  export class PdfPageRenderOptions {
    sourceRect: Object;
    isIgnoringHighContrast: Boolean;
    destinationWidth: Number;
    destinationHeight: Number;
    bitmapEncoderId: String;
    backgroundColor: Object;
    constructor();

  }

