  export enum CurrencyFormatterMode {
    useSymbol,
    useCurrencyCode,
  }

  export enum RoundingAlgorithm {
    none,
    roundDown,
    roundUp,
    roundTowardsZero,
    roundAwayFromZero,
    roundHalfDown,
    roundHalfUp,
    roundHalfTowardsZero,
    roundHalfAwayFromZero,
    roundHalfToEven,
    roundHalfToOdd,
  }

  export class CurrencyFormatter {
    currency: String;
    mode: CurrencyFormatterMode;
    numeralSystem: String;
    isGrouped: Boolean;
    isDecimalPointAlwaysDisplayed: Boolean;
    integerDigits: Number;
    fractionDigits: Number;
    geographicRegion: String;
    resolvedGeographicRegion: String;
    resolvedLanguage: String;
    languages: Object;
    numberRounder: INumberRounder;
    isZeroSigned: Boolean;
    significantDigits: Number;
    constructor();
    constructor(currencyCode: String);
    constructor(currencyCode: String, languages: Object, geographicRegion: String);

    format(value: Number): String;
    format(value: Number): String;
    format(value: Number): String;

    formatInt(value: Number): String;

    formatUInt(value: Number): String;

    formatDouble(value: Number): String;

    parseInt(text: String): Number;

    parseUInt(text: String): Number;

    parseDouble(text: String): Number;

    applyRoundingForCurrency(roundingAlgorithm: RoundingAlgorithm): void;

  }

  export class DecimalFormatter {
    isDecimalPointAlwaysDisplayed: Boolean;
    integerDigits: Number;
    isGrouped: Boolean;
    numeralSystem: String;
    fractionDigits: Number;
    geographicRegion: String;
    languages: Object;
    resolvedGeographicRegion: String;
    resolvedLanguage: String;
    numberRounder: INumberRounder;
    isZeroSigned: Boolean;
    significantDigits: Number;
    constructor();
    constructor(languages: Object, geographicRegion: String);

    format(value: Number): String;
    format(value: Number): String;
    format(value: Number): String;

    formatInt(value: Number): String;

    formatUInt(value: Number): String;

    formatDouble(value: Number): String;

    parseInt(text: String): Number;

    parseUInt(text: String): Number;

    parseDouble(text: String): Number;

  }

  export class INumberFormatter {
    constructor();

    format(value: Number): String;
    format(value: Number): String;
    format(value: Number): String;

  }

  export class INumberFormatter2 {
    constructor();

    formatInt(value: Number): String;

    formatUInt(value: Number): String;

    formatDouble(value: Number): String;

  }

  export class INumberFormatterOptions {
    fractionDigits: Number;
    geographicRegion: String;
    integerDigits: Number;
    isDecimalPointAlwaysDisplayed: Boolean;
    isGrouped: Boolean;
    languages: Object;
    numeralSystem: String;
    resolvedGeographicRegion: String;
    resolvedLanguage: String;
    constructor();

  }

  export class INumberParser {
    constructor();

    parseInt(text: String): Number;

    parseUInt(text: String): Number;

    parseDouble(text: String): Number;

  }

  export class INumberRounder {
    constructor();

    roundInt32(value: Number): Number;

    roundUInt32(value: Number): Number;

    roundInt64(value: Number): Number;

    roundUInt64(value: Number): Number;

    roundSingle(value: Number): Number;

    roundDouble(value: Number): Number;

  }

  export class INumberRounderOption {
    numberRounder: INumberRounder;
    constructor();

  }

  export class ISignedZeroOption {
    isZeroSigned: Boolean;
    constructor();

  }

  export class ISignificantDigitsOption {
    significantDigits: Number;
    constructor();

  }

  export class IncrementNumberRounder {
    roundingAlgorithm: RoundingAlgorithm;
    increment: Number;
    constructor();

    roundInt32(value: Number): Number;

    roundUInt32(value: Number): Number;

    roundInt64(value: Number): Number;

    roundUInt64(value: Number): Number;

    roundSingle(value: Number): Number;

    roundDouble(value: Number): Number;

  }

  export class NumeralSystemTranslator {
    numeralSystem: String;
    languages: Object;
    resolvedLanguage: String;
    constructor();
    constructor(languages: Object);

    translateNumerals(value: String): String;

  }

  export class PercentFormatter {
    isDecimalPointAlwaysDisplayed: Boolean;
    integerDigits: Number;
    isGrouped: Boolean;
    numeralSystem: String;
    fractionDigits: Number;
    geographicRegion: String;
    languages: Object;
    resolvedGeographicRegion: String;
    resolvedLanguage: String;
    numberRounder: INumberRounder;
    isZeroSigned: Boolean;
    significantDigits: Number;
    constructor();
    constructor(languages: Object, geographicRegion: String);

    format(value: Number): String;
    format(value: Number): String;
    format(value: Number): String;

    formatInt(value: Number): String;

    formatUInt(value: Number): String;

    formatDouble(value: Number): String;

    parseInt(text: String): Number;

    parseUInt(text: String): Number;

    parseDouble(text: String): Number;

  }

  export class PermilleFormatter {
    isDecimalPointAlwaysDisplayed: Boolean;
    integerDigits: Number;
    isGrouped: Boolean;
    numeralSystem: String;
    fractionDigits: Number;
    geographicRegion: String;
    languages: Object;
    resolvedGeographicRegion: String;
    resolvedLanguage: String;
    numberRounder: INumberRounder;
    isZeroSigned: Boolean;
    significantDigits: Number;
    constructor();
    constructor(languages: Object, geographicRegion: String);

    format(value: Number): String;
    format(value: Number): String;
    format(value: Number): String;

    formatInt(value: Number): String;

    formatUInt(value: Number): String;

    formatDouble(value: Number): String;

    parseInt(text: String): Number;

    parseUInt(text: String): Number;

    parseDouble(text: String): Number;

  }

  export class SignificantDigitsNumberRounder {
    significantDigits: Number;
    roundingAlgorithm: RoundingAlgorithm;
    constructor();

    roundInt32(value: Number): Number;

    roundUInt32(value: Number): Number;

    roundInt64(value: Number): Number;

    roundUInt64(value: Number): Number;

    roundSingle(value: Number): Number;

    roundDouble(value: Number): Number;

  }

