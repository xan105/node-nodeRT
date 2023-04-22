  export class IAdaptiveCard {
    constructor();

    toJson(): string;

  }

  export class IAdaptiveCardBuilderStatics {
    constructor();

    createAdaptiveCardFromJson(value: string): IAdaptiveCard;

  }

  export class AdaptiveCardBuilder {
    constructor();

    static createAdaptiveCardFromJson(value: string): IAdaptiveCard;


  }

  export class TaskbarManager {
    isPinningAllowed: boolean;
    isSupported: boolean;
    constructor();

    static getDefault(): TaskbarManager;


    isCurrentAppPinnedAsync(callback: (error: Error, result: boolean) => void): void ;

    isAppListEntryPinnedAsync(appListEntry: Object, callback: (error: Error, result: boolean) => void): void ;

    requestPinCurrentAppAsync(callback: (error: Error, result: boolean) => void): void ;

    requestPinAppListEntryAsync(appListEntry: Object, callback: (error: Error, result: boolean) => void): void ;

  }

