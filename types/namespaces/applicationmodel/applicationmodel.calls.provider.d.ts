  export class PhoneCallOrigin {
    location: String;
    categoryDescription: String;
    category: String;
    displayName: String;
    displayPicture: Object;
    constructor();

  }

  export class PhoneCallOriginManager {
    static isCurrentAppActiveCallOriginApp: Boolean;
    static isSupported: Boolean;
    constructor();

    static requestSetAsActiveCallOriginAppAsync(callback: (error: Error, result: Boolean) => void): void ;


    static showPhoneCallOriginSettingsUI(): void;


    static setCallOrigin(requestId: String, callOrigin: PhoneCallOrigin): void;


  }

