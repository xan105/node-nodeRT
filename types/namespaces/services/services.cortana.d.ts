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


    arePermissionsGrantedAsync(permissions: Object, callback: (error: Error, result: Boolean) => void): void ;

    grantPermissionsAsync(permissions: Object, callback: (error: Error, result: CortanaPermissionsChangeResult) => void): void ;

    revokePermissionsAsync(permissions: Object, callback: (error: Error, result: CortanaPermissionsChangeResult) => void): void ;

    isSupported(): Boolean;

  }

  export class CortanaSettings {
    isVoiceActivationEnabled: Boolean;
    hasUserConsentToVoiceActivation: Boolean;
    constructor();

    static isSupported(): Boolean;


    static getDefault(): CortanaSettings;


  }

