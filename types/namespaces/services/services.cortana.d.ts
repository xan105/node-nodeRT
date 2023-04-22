  export enum CortanaPermissionsChangeResult {
    success,
    unavailable,
    disabledByPolicy,
  }

  export enum CortanaPermission {
    browsingHistory,
    calendar,
    callHistory,
    contacts,
    email,
    inputPersonalization,
    location,
    messaging,
    microphone,
    personalization,
    phoneCall,
  }

  export class CortanaPermissionsManager {
    constructor();

    static getDefault(): CortanaPermissionsManager;


    arePermissionsGrantedAsync(permissions: Object, callback: (error: Error, result: boolean) => void): void ;

    grantPermissionsAsync(permissions: Object, callback: (error: Error, result: CortanaPermissionsChangeResult) => void): void ;

    revokePermissionsAsync(permissions: Object, callback: (error: Error, result: CortanaPermissionsChangeResult) => void): void ;

    isSupported(): boolean;

  }

  export class CortanaSettings {
    isVoiceActivationEnabled: boolean;
    hasUserConsentToVoiceActivation: boolean;
    constructor();

    static isSupported(): boolean;


    static getDefault(): CortanaSettings;


  }

