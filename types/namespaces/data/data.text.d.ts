  export class TextSegment {
    startPosition: number;
    length: number;
    constructor();
  }

  export enum UnicodeGeneralCategory {
    uppercaseLetter,
    lowercaseLetter,
    titlecaseLetter,
    modifierLetter,
    otherLetter,
    nonspacingMark,
    spacingCombiningMark,
    enclosingMark,
    decimalDigitNumber,
    letterNumber,
    otherNumber,
    spaceSeparator,
    lineSeparator,
    paragraphSeparator,
    control,
    format,
    surrogate,
    privateUse,
    connectorPunctuation,
    dashPunctuation,
    openPunctuation,
    closePunctuation,
    initialQuotePunctuation,
    finalQuotePunctuation,
    otherPunctuation,
    mathSymbol,
    currencySymbol,
    modifierSymbol,
    otherSymbol,
    notAssigned,
  }

  export enum UnicodeNumericType {
    none,
    decimal,
    digit,
    numeric,
  }

  export enum AlternateNormalizationFormat {
    notNormalized,
    number,
    currency,
    date,
    time,
  }

  export class SemanticTextQuery {
    constructor();
    constructor(aqsFilter: string);
    constructor(aqsFilter: string, filterLanguage: string);

    find(content: string): Object;

    findInProperty(propertyContent: string, propertyName: string): Object;

  }

  export class UnicodeCharacters {
    constructor();

    static getCodepointFromSurrogatePair(highSurrogate: number, lowSurrogate: number): number;


    static getSurrogatePairFromCodepoint(codepoint: number, highSurrogate: string, lowSurrogate: string): void;


    static isHighSurrogate(codepoint: number): boolean;


    static isLowSurrogate(codepoint: number): boolean;


    static isSupplementary(codepoint: number): boolean;


    static isNoncharacter(codepoint: number): boolean;


    static isWhitespace(codepoint: number): boolean;


    static isAlphabetic(codepoint: number): boolean;


    static isCased(codepoint: number): boolean;


    static isUppercase(codepoint: number): boolean;


    static isLowercase(codepoint: number): boolean;


    static isIdStart(codepoint: number): boolean;


    static isIdContinue(codepoint: number): boolean;


    static isGraphemeBase(codepoint: number): boolean;


    static isGraphemeExtend(codepoint: number): boolean;


    static getNumericType(codepoint: number): UnicodeNumericType;


    static getGeneralCategory(codepoint: number): UnicodeGeneralCategory;


  }

  export class AlternateWordForm {
    alternateText: string;
    normalizationFormat: AlternateNormalizationFormat;
    sourceTextSegment: TextSegment;
    constructor();

  }

  export class WordSegment {
    alternateForms: Object;
    sourceTextSegment: TextSegment;
    text: string;
    constructor();

  }

  export class WordsSegmenter {
    resolvedLanguage: string;
    constructor();
    constructor(language: string);

    getTokenAt(text: string, startIndex: number): WordSegment;

    getTokens(text: string): Object;

    tokenize(text: string, startIndex: number, handler: Object): void;

  }

  export class SelectableWordSegment {
    sourceTextSegment: TextSegment;
    text: string;
    constructor();

  }

  export class SelectableWordsSegmenter {
    resolvedLanguage: string;
    constructor();
    constructor(language: string);

    getTokenAt(text: string, startIndex: number): SelectableWordSegment;

    getTokens(text: string): Object;

    tokenize(text: string, startIndex: number, handler: Object): void;

  }

  export class TextPredictionGenerator {
    languageAvailableButNotInstalled: boolean;
    resolvedLanguage: string;
    constructor();
    constructor(languageTag: string);

    getCandidatesAsync(input: string, callback: (error: Error, result: Object) => void): void ;
    getCandidatesAsync(input: string, maxCandidates: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class TextConversionGenerator {
    languageAvailableButNotInstalled: boolean;
    resolvedLanguage: string;
    constructor();
    constructor(languageTag: string);

    getCandidatesAsync(input: string, callback: (error: Error, result: Object) => void): void ;
    getCandidatesAsync(input: string, maxCandidates: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class TextReverseConversionGenerator {
    languageAvailableButNotInstalled: boolean;
    resolvedLanguage: string;
    constructor();
    constructor(languageTag: string);

    convertBackAsync(input: string, callback: (error: Error, result: string) => void): void ;

    getPhonemesAsync(input: string, callback: (error: Error, result: Object) => void): void ;

  }

  export class TextPhoneme {
    displayText: string;
    readingText: string;
    constructor();

  }

