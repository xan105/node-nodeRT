  export enum LocalLocationFinderStatus {
    success,
    unknownError,
    invalidCredentials,
    invalidCategory,
    invalidSearchTerm,
    invalidSearchArea,
    networkFailure,
    notSupported,
  }

  export class LocalCategories {
    static all: String;
    static bankAndCreditUnions: String;
    static eatDrink: String;
    static hospitals: String;
    static hotelsAndMotels: String;
    static parking: String;
    static seeDo: String;
    static shop: String;
    constructor();

  }

  export class LocalLocation {
    address: Object;
    dataAttribution: String;
    description: String;
    displayName: String;
    identifier: String;
    phoneNumber: String;
    point: Object;
    category: String;
    hoursOfOperation: Object;
    ratingInfo: LocalLocationRatingInfo;
    constructor();

  }

  export class LocalLocationFinder {
    constructor();

    static findLocalLocationsAsync(searchTerm: String, searchArea: Object, localCategory: String, maxResults: Number, callback: (error: Error, result: LocalLocationFinderResult) => void): void ;


  }

  export class LocalLocationFinderResult {
    localLocations: Object;
    status: LocalLocationFinderStatus;
    constructor();

  }

  export class LocalLocationHoursOfOperationItem {
    day: Number;
    span: Number;
    start: Number;
    constructor();

  }

  export class LocalLocationRatingInfo {
    aggregateRating: Number;
    providerIdentifier: String;
    ratingCount: Number;
    constructor();

  }

  export class PlaceInfoHelper {
    constructor();

    static createFromLocalLocation(location: LocalLocation): Object;


  }

