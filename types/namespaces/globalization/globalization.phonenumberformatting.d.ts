  export enum PhoneNumberFormat {
    e164,
    international,
    national,
    rfc3966,
  }

  export enum PhoneNumberMatchResult {
    noMatch,
    shortNationalSignificantNumberMatch,
    nationalSignificantNumberMatch,
    exactMatch,
  }

  export enum PhoneNumberParseResult {
    valid,
    notANumber,
    invalidCountryCode,
    tooShort,
    tooLong,
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

  export class PhoneNumberFormatter {
    constructor();

    static tryCreate(regionCode: String, phoneNumber: Object): void;


    static getCountryCodeForRegion(regionCode: String): Number;


    static getNationalDirectDialingPrefixForRegion(regionCode: String, stripNonDigit: Boolean): String;


    static wrapWithLeftToRightMarkers(number: String): String;


    format(number: PhoneNumberInfo): String;
    format(number: PhoneNumberInfo, numberFormat: PhoneNumberFormat): String;

    formatPartialString(number: String): String;

    formatString(number: String): String;

    formatStringWithLeftToRightMarkers(number: String): String;

  }

  export class PhoneNumberInfo {
    countryCode: Number;
    phoneNumber: String;
    constructor();
    constructor(number: String);

    static tryParse(input: String, phoneNumber: Object): PhoneNumberParseResult;
    static tryParse(input: String, regionCode: String, phoneNumber: Object): PhoneNumberParseResult;


    getLengthOfGeographicalAreaCode(): Number;

    getNationalSignificantNumber(): String;

    getLengthOfNationalDestinationCode(): Number;

    predictNumberKind(): PredictedPhoneNumberKind;

    getGeographicRegionCode(): String;

    checkNumberMatch(otherNumber: PhoneNumberInfo): PhoneNumberMatchResult;

    toString(): String;

  }

