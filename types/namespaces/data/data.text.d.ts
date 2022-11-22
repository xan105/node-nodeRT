  export class TextSegment {
    startPosition: Number;
    length: Number;
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
    constructor(aqsFilter: String);
    constructor(aqsFilter: String, filterLanguage: String);

    find(content: String): Object;

    findInProperty(propertyContent: String, propertyName: String): Object;

  }

  export class UnicodeCharacters {
    constructor();

    static getCodepointFromSurrogatePair(highSurrogate: Number, lowSurrogate: Number): Number;


    static getSurrogatePairFromCodepoint(codepoint: Number, highSurrogate: String, lowSurrogate: String): void;


    static isHighSurrogate(codepoint: Number): Boolean;


    static isLowSurrogate(codepoint: Number): Boolean;


    static isSupplementary(codepoint: Number): Boolean;


    static isNoncharacter(codepoint: Number): Boolean;


    static isWhitespace(codepoint: Number): Boolean;


    static isAlphabetic(codepoint: Number): Boolean;


    static isCased(codepoint: Number): Boolean;


    static isUppercase(codepoint: Number): Boolean;


    static isLowercase(codepoint: Number): Boolean;


    static isIdStart(codepoint: Number): Boolean;


    static isIdContinue(codepoint: Number): Boolean;


    static isGraphemeBase(codepoint: Number): Boolean;


    static isGraphemeExtend(codepoint: Number): Boolean;


    static getNumericType(codepoint: Number): UnicodeNumericType;


    static getGeneralCategory(codepoint: Number): UnicodeGeneralCategory;


  }

  export class AlternateWordForm {
    alternateText: String;
    normalizationFormat: AlternateNormalizationFormat;
    sourceTextSegment: TextSegment;
    constructor();

  }

  export class WordSegment {
    alternateForms: Object;
    sourceTextSegment: TextSegment;
    text: String;
    constructor();

  }

  export class WordsSegmenter {
    resolvedLanguage: String;
    constructor();
    constructor(language: String);

    getTokenAt(text: String, startIndex: Number): WordSegment;

    getTokens(text: String): Object;

    tokenize(text: String, startIndex: Number, handler: Object): void;

  }

  export class SelectableWordSegment {
    sourceTextSegment: TextSegment;
    text: String;
    constructor();

  }

  export class SelectableWordsSegmenter {
    resolvedLanguage: String;
    constructor();
    constructor(language: String);

    getTokenAt(text: String, startIndex: Number): SelectableWordSegment;

    getTokens(text: String): Object;

    tokenize(text: String, startIndex: Number, handler: Object): void;

  }

  export class TextPredictionGenerator {
    languageAvailableButNotInstalled: Boolean;
    resolvedLanguage: String;
    constructor();
    constructor(languageTag: String);

    getCandidatesAsync(input: String, callback: (error: Error, result: Object) => void): void ;
    getCandidatesAsync(input: String, maxCandidates: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class TextConversionGenerator {
    languageAvailableButNotInstalled: Boolean;
    resolvedLanguage: String;
    constructor();
    constructor(languageTag: String);

    getCandidatesAsync(input: String, callback: (error: Error, result: Object) => void): void ;
    getCandidatesAsync(input: String, maxCandidates: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class TextReverseConversionGenerator {
    languageAvailableButNotInstalled: Boolean;
    resolvedLanguage: String;
    constructor();
    constructor(languageTag: String);

    convertBackAsync(input: String, callback: (error: Error, result: String) => void): void ;

    getPhonemesAsync(input: String, callback: (error: Error, result: Object) => void): void ;

  }

  export class TextPhoneme {
    displayText: String;
    readingText: String;
    constructor();

  }

