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

  export class LocalLocation {
    address: Object;
    dataAttribution: string;
    description: string;
    displayName: string;
    identifier: string;
    phoneNumber: string;
    point: Object;
    category: string;
    hoursOfOperation: Object;
    ratingInfo: LocalLocationRatingInfo;
    constructor();

  }

  export class LocalLocationFinderResult {
    localLocations: Object;
    status: LocalLocationFinderStatus;
    constructor();

  }

  export class LocalLocationRatingInfo {
    aggregateRating: number;
    providerIdentifier: string;
    ratingCount: number;
    constructor();

  }

  export class LocalLocationHoursOfOperationItem {
    day: number;
    span: number;
    start: number;
    constructor();

  }

  export class LocalLocationFinder {
    constructor();

    static findLocalLocationsAsync(searchTerm: string, searchArea: Object, localCategory: string, maxResults: number, callback: (error: Error, result: LocalLocationFinderResult) => void): void ;


  }

  export class LocalCategories {
    static all: string;
    static bankAndCreditUnions: string;
    static eatDrink: string;
    static hospitals: string;
    static hotelsAndMotels: string;
    static parking: string;
    static seeDo: string;
    static shop: string;
    constructor();

  }

  export class PlaceInfoHelper {
    constructor();

    static createFromLocalLocation(location: LocalLocation): Object;


  }

