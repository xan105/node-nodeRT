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

  export enum CortanaPermissionsChangeResult {
    success,
    unavailable,
    disabledByPolicy,
  }

  export class CortanaActionableInsights {
    user: Object;
    constructor();

    static getDefault(): CortanaActionableInsights;


    static getForUser(user: Object): CortanaActionableInsights;


    isAvailableAsync(callback: (error: Error, result: Boolean) => void): void ;

    showInsightsForImageAsync(imageStream: Object, callback: (error: Error) => void): void ;
    showInsightsForImageAsync(imageStream: Object, options: CortanaActionableInsightsOptions, callback: (error: Error) => void): void ;

    showInsightsForTextAsync(text: String, callback: (error: Error) => void): void ;
    showInsightsForTextAsync(text: String, options: CortanaActionableInsightsOptions, callback: (error: Error) => void): void ;

    showInsightsAsync(datapackage: Object, callback: (error: Error) => void): void ;
    showInsightsAsync(datapackage: Object, options: CortanaActionableInsightsOptions, callback: (error: Error) => void): void ;

  }

  export class CortanaActionableInsightsOptions {
    surroundingText: String;
    contentSourceWebLink: Object;
    constructor();

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

