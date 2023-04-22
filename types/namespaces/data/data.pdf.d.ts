  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class Size {
    constructor();
  }

  export enum PdfPageRotation {
    normal,
    rotate90,
    rotate180,
    rotate270,
  }

  export class PdfPageRenderOptions {
    sourceRect: Object;
    isIgnoringHighContrast: boolean;
    destinationWidth: number;
    destinationHeight: number;
    bitmapEncoderId: string;
    backgroundColor: Object;
    constructor();

  }

  export class PdfPageDimensions {
    artBox: Object;
    bleedBox: Object;
    cropBox: Object;
    mediaBox: Object;
    trimBox: Object;
    constructor();

  }

  export class PdfPage {
    dimensions: PdfPageDimensions;
    index: number;
    preferredZoom: number;
    rotation: PdfPageRotation;
    size: Object;
    constructor();

    renderToStreamAsync(outputStream: Object, callback: (error: Error) => void): void ;
    renderToStreamAsync(outputStream: Object, options: PdfPageRenderOptions, callback: (error: Error) => void): void ;

    preparePageAsync(callback: (error: Error) => void): void ;

    close(): void;
  }

  export class PdfDocument {
    isPasswordProtected: boolean;
    pageCount: number;
    constructor();

    static loadFromFileAsync(file: Object, callback: (error: Error, result: PdfDocument) => void): void ;
    static loadFromFileAsync(file: Object, password: string, callback: (error: Error, result: PdfDocument) => void): void ;


    static loadFromStreamAsync(inputStream: Object, callback: (error: Error, result: PdfDocument) => void): void ;
    static loadFromStreamAsync(inputStream: Object, password: string, callback: (error: Error, result: PdfDocument) => void): void ;


    getPage(pageIndex: number): PdfPage;

  }

