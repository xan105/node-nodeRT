  export enum PhoneNumberFormat {
    e164,
    international,
    national,
    rfc3966,
  }

  export enum PredictedPhoneNumberKind {
    fixedLine,
    mobile,
    fixedLineOrMobile,
    tollFree,
    premiumRate,
    sharedCost,
    voip,
    personalNumber,
    pager,
    universalAccountNumber,
    voicemail,
    unknown,
  }

  export enum PhoneNumberParseResult {
    valid,
    notANumber,
    invalidCountryCode,
    tooShort,
    tooLong,
  }

  export enum PhoneNumberMatchResult {
    noMatch,
    shortNationalSignificantNumberMatch,
    nationalSignificantNumberMatch,
    exactMatch,
  }

  export class PhoneNumberInfo {
    countryCode: number;
    phoneNumber: string;
    constructor();
    constructor(number: string);

    static tryParse(input: string, phoneNumber: Object): PhoneNumberParseResult;
    static tryParse(input: string, regionCode: string, phoneNumber: Object): PhoneNumberParseResult;


    getLengthOfGeographicalAreaCode(): number;

    getNationalSignificantNumber(): string;

    getLengthOfNationalDestinationCode(): number;

    predictNumberKind(): PredictedPhoneNumberKind;

    getGeographicRegionCode(): string;

    checkNumberMatch(otherNumber: PhoneNumberInfo): PhoneNumberMatchResult;

    toString(): string;

  }

  export class PhoneNumberFormatter {
    constructor();

    static tryCreate(regionCode: string, phoneNumber: Object): void;


    static getCountryCodeForRegion(regionCode: string): number;


    static getNationalDirectDialingPrefixForRegion(regionCode: string, stripNonDigit: boolean): string;


    static wrapWithLeftToRightMarkers(number: string): string;


    format(number: PhoneNumberInfo): string;
    format(number: PhoneNumberInfo, numberFormat: PhoneNumberFormat): string;

    formatPartialString(number: string): string;

    formatString(number: string): string;

    formatStringWithLeftToRightMarkers(number: string): string;

  }

