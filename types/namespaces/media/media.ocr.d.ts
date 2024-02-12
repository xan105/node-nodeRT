  export class Rect {
    constructor();
  }

  export class OcrEngine {
    static availableRecognizerLanguages: Object;
    static maxImageDimension: Number;
    recognizerLanguage: Object;
    constructor();

    static isLanguageSupported(language: Object): Boolean;


    static tryCreateFromLanguage(language: Object): OcrEngine;


    static tryCreateFromUserProfileLanguages(): OcrEngine;


    recognizeAsync(bitmap: Object, callback: (error: Error, result: OcrResult) => void): void ;

  }

  export class OcrLine {
    text: String;
    words: Object;
    constructor();

  }

  export class OcrResult {
    lines: Object;
    text: String;
    textAngle: Number;
    constructor();

  }

  export class OcrWord {
    boundingRect: Object;
    text: String;
    constructor();

  }

