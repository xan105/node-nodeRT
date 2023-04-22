  export class Rect {
    constructor();
  }

  export class OcrWord {
    boundingRect: Object;
    text: string;
    constructor();

  }

  export class OcrLine {
    text: string;
    words: Object;
    constructor();

  }

  export class OcrResult {
    lines: Object;
    text: string;
    textAngle: number;
    constructor();

  }

  export class OcrEngine {
    static availableRecognizerLanguages: Object;
    static maxImageDimension: number;
    recognizerLanguage: Object;
    constructor();

    static isLanguageSupported(language: Object): boolean;


    static tryCreateFromLanguage(language: Object): OcrEngine;


    static tryCreateFromUserProfileLanguages(): OcrEngine;


    recognizeAsync(bitmap: Object, callback: (error: Error, result: OcrResult) => void): void ;

  }

