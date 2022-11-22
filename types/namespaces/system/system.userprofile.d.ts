  export class UserProfileContract {
    constructor();
  }

  export class UserProfileLockScreenContract {
    constructor();
  }

  export enum AccountPictureKind {
    smallImage,
    largeImage,
    video,
  }

  export enum SetAccountPictureResult {
    success,
    changeDisabled,
    largeOrDynamicError,
    videoFrameSizeError,
    fileSizeError,
    failure,
  }

  export enum SetImageFeedResult {
    success,
    changeDisabled,
    userCanceled,
  }

  export class AdvertisingManagerForUser {
    advertisingId: String;
    user: Object;
    constructor();

  }

  export class AdvertisingManager {
    static advertisingId: String;
    constructor();

    static getForUser(user: Object): AdvertisingManagerForUser;


  }

  export class DiagnosticsSettings {
    canUseDiagnosticsToTailorExperiences: Boolean;
    user: Object;
    constructor();

    static getDefault(): DiagnosticsSettings;


    static getForUser(user: Object): DiagnosticsSettings;


  }

  export class UserProfilePersonalizationSettings {
    static current: UserProfilePersonalizationSettings;
    constructor();

    static isSupported(): Boolean;


    trySetLockScreenImageAsync(imageFile: Object, callback: (error: Error, result: Boolean) => void): void ;

    trySetWallpaperImageAsync(imageFile: Object, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class GlobalizationPreferencesForUser {
    calendars: Object;
    clocks: Object;
    currencies: Object;
    homeGeographicRegion: String;
    languages: Object;
    user: Object;
    weekStartsOn: Number;
    constructor();

  }

  export class GlobalizationPreferences {
    static calendars: Object;
    static clocks: Object;
    static currencies: Object;
    static homeGeographicRegion: String;
    static languages: Object;
    static weekStartsOn: Number;
    constructor();

    static getForUser(user: Object): GlobalizationPreferencesForUser;


    static trySetHomeGeographicRegion(region: String): Boolean;


    static trySetLanguages(languageTags: Object): Boolean;


  }

  export class FirstSignInSettings {
    constructor();

    static getDefault(): FirstSignInSettings;


    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class UserInformation {
    static accountPictureChangeEnabled: Boolean;
    static nameAccessAllowed: Boolean;
    constructor();

    static setAccountPictureAsync(image: Object, callback: (error: Error, result: SetAccountPictureResult) => void): void ;


    static setAccountPicturesAsync(smallImage: Object, largeImage: Object, video: Object, callback: (error: Error, result: SetAccountPictureResult) => void): void ;


    static setAccountPictureFromStreamAsync(image: Object, callback: (error: Error, result: SetAccountPictureResult) => void): void ;


    static setAccountPicturesFromStreamsAsync(smallImage: Object, largeImage: Object, video: Object, callback: (error: Error, result: SetAccountPictureResult) => void): void ;


    static getDisplayNameAsync(callback: (error: Error, result: String) => void): void ;


    static getFirstNameAsync(callback: (error: Error, result: String) => void): void ;


    static getLastNameAsync(callback: (error: Error, result: String) => void): void ;


    static getPrincipalNameAsync(callback: (error: Error, result: String) => void): void ;


    static getSessionInitiationProtocolUriAsync(callback: (error: Error, result: Object) => void): void ;


    static getDomainNameAsync(callback: (error: Error, result: String) => void): void ;


    static getAccountPicture(kind: AccountPictureKind): Object;


    addListener(type: "AccountPictureChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AccountPictureChanged", listener: (ev: Event) => void): void ;
    on(type: "AccountPictureChanged", listener: (ev: Event) => void): void ;
    off(type: "AccountPictureChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LockScreen {
    static originalImageFile: Object;
    constructor();

    static requestSetImageFeedAsync(syndicationFeedUri: Object, callback: (error: Error, result: SetImageFeedResult) => void): void ;


    static setImageFileAsync(value: Object, callback: (error: Error) => void): void ;


    static setImageStreamAsync(value: Object, callback: (error: Error) => void): void ;


    static tryRemoveImageFeed(): Boolean;


    static getImageStream(): Object;


  }

