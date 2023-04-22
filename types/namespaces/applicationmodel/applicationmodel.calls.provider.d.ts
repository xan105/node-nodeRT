  export class PhoneCallOrigin {
    location: string;
    categoryDescription: string;
    category: string;
    displayName: string;
    displayPicture: Object;
    constructor();

  }

  export class PhoneCallOriginManager {
    static isCurrentAppActiveCallOriginApp: boolean;
    constructor();

    static requestSetAsActiveCallOriginAppAsync(callback: (error: Error, result: boolean) => void): void ;


    static showPhoneCallOriginSettingsUI(): void;


    static setCallOrigin(requestId: string, callOrigin: PhoneCallOrigin): void;


  }

