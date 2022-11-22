  export class IAdaptiveCard {
    constructor();

    toJson(): String;

  }

  export class IAdaptiveCardBuilderStatics {
    constructor();

    createAdaptiveCardFromJson(value: String): IAdaptiveCard;

  }

  export class AdaptiveCardBuilder {
    constructor();

    static createAdaptiveCardFromJson(value: String): IAdaptiveCard;


  }

  export class TaskbarManager {
    isPinningAllowed: Boolean;
    isSupported: Boolean;
    constructor();

    static getDefault(): TaskbarManager;


    isCurrentAppPinnedAsync(callback: (error: Error, result: Boolean) => void): void ;

    isAppListEntryPinnedAsync(appListEntry: Object, callback: (error: Error, result: Boolean) => void): void ;

    requestPinCurrentAppAsync(callback: (error: Error, result: Boolean) => void): void ;

    requestPinAppListEntryAsync(appListEntry: Object, callback: (error: Error, result: Boolean) => void): void ;

  }

