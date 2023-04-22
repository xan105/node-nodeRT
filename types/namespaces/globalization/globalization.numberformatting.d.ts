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

  export enum CurrencyFormatterMode {
    useSymbol,
    useCurrencyCode,
  }

  export class INumberRounder {
    constructor();

    roundInt32(value: number): number;

    roundUInt32(value: number): number;

    roundInt64(value: number): number;

    roundUInt64(value: number): number;

    roundSingle(value: number): number;

    roundDouble(value: number): number;

  }

  export class SignificantDigitsNumberRounder {
    significantDigits: number;
    roundingAlgorithm: RoundingAlgorithm;
    constructor();

    roundInt32(value: number): number;

    roundUInt32(value: number): number;

    roundInt64(value: number): number;

    roundUInt64(value: number): number;

    roundSingle(value: number): number;

    roundDouble(value: number): number;

  }

  export class IncrementNumberRounder {
    roundingAlgorithm: RoundingAlgorithm;
    increment: number;
    constructor();

    roundInt32(value: number): number;

    roundUInt32(value: number): number;

    roundInt64(value: number): number;

    roundUInt64(value: number): number;

    roundSingle(value: number): number;

    roundDouble(value: number): number;

  }

  export class INumberFormatter {
    constructor();

    format(value: number): string;
    format(value: number): string;
    format(value: number): string;

  }

  export class INumberFormatter2 {
    constructor();

    formatInt(value: number): string;

    formatUInt(value: number): string;

    formatDouble(value: number): string;

  }

  export class INumberParser {
    constructor();

    parseInt(text: string): number;

    parseUInt(text: string): number;

    parseDouble(text: string): number;

  }

  export class INumberFormatterOptions {
    fractionDigits: number;
    geographicRegion: string;
    integerDigits: number;
    isDecimalPointAlwaysDisplayed: boolean;
    isGrouped: boolean;
    languages: Object;
    numeralSystem: string;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    constructor();

  }

  export class ISignificantDigitsOption {
    significantDigits: number;
    constructor();

  }

  export class INumberRounderOption {
    numberRounder: INumberRounder;
    constructor();

  }

  export class ISignedZeroOption {
    isZeroSigned: boolean;
    constructor();

  }

  export class DecimalFormatter {
    isDecimalPointAlwaysDisplayed: boolean;
    integerDigits: number;
    isGrouped: boolean;
    numeralSystem: string;
    fractionDigits: number;
    geographicRegion: string;
    languages: Object;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    numberRounder: INumberRounder;
    isZeroSigned: boolean;
    significantDigits: number;
    constructor();
    constructor(languages: Object, geographicRegion: string);

    format(value: number): string;
    format(value: number): string;
    format(value: number): string;

    formatInt(value: number): string;

    formatUInt(value: number): string;

    formatDouble(value: number): string;

    parseInt(text: string): number;

    parseUInt(text: string): number;

    parseDouble(text: string): number;

  }

  export class PercentFormatter {
    isDecimalPointAlwaysDisplayed: boolean;
    integerDigits: number;
    isGrouped: boolean;
    numeralSystem: string;
    fractionDigits: number;
    geographicRegion: string;
    languages: Object;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    numberRounder: INumberRounder;
    isZeroSigned: boolean;
    significantDigits: number;
    constructor();
    constructor(languages: Object, geographicRegion: string);

    format(value: number): string;
    format(value: number): string;
    format(value: number): string;

    formatInt(value: number): string;

    formatUInt(value: number): string;

    formatDouble(value: number): string;

    parseInt(text: string): number;

    parseUInt(text: string): number;

    parseDouble(text: string): number;

  }

  export class PermilleFormatter {
    isDecimalPointAlwaysDisplayed: boolean;
    integerDigits: number;
    isGrouped: boolean;
    numeralSystem: string;
    fractionDigits: number;
    geographicRegion: string;
    languages: Object;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    numberRounder: INumberRounder;
    isZeroSigned: boolean;
    significantDigits: number;
    constructor();
    constructor(languages: Object, geographicRegion: string);

    format(value: number): string;
    format(value: number): string;
    format(value: number): string;

    formatInt(value: number): string;

    formatUInt(value: number): string;

    formatDouble(value: number): string;

    parseInt(text: string): number;

    parseUInt(text: string): number;

    parseDouble(text: string): number;

  }

  export class CurrencyFormatter {
    currency: string;
    mode: CurrencyFormatterMode;
    numeralSystem: string;
    isGrouped: boolean;
    isDecimalPointAlwaysDisplayed: boolean;
    integerDigits: number;
    fractionDigits: number;
    geographicRegion: string;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    languages: Object;
    numberRounder: INumberRounder;
    isZeroSigned: boolean;
    significantDigits: number;
    constructor();
    constructor(currencyCode: string);
    constructor(currencyCode: string, languages: Object, geographicRegion: string);

    format(value: number): string;
    format(value: number): string;
    format(value: number): string;

    formatInt(value: number): string;

    formatUInt(value: number): string;

    formatDouble(value: number): string;

    parseInt(text: string): number;

    parseUInt(text: string): number;

    parseDouble(text: string): number;

    applyRoundingForCurrency(roundingAlgorithm: RoundingAlgorithm): void;

  }

  export class NumeralSystemTranslator {
    numeralSystem: string;
    languages: Object;
    resolvedLanguage: string;
    constructor();
    constructor(languages: Object);

    translateNumerals(value: string): string;

  }

