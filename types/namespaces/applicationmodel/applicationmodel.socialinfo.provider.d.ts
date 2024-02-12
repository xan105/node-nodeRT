  export class SocialDashboardItemUpdater {
    timestamp: Date;
    thumbnail: Object;
    targetUri: Object;
    content: Object;
    ownerRemoteId: String;
    constructor();

    commitAsync(callback: (error: Error) => void): void ;

  }

  export class SocialFeedUpdater {
    items: Object;
    kind: Number;
    ownerRemoteId: String;
    constructor();

    commitAsync(callback: (error: Error) => void): void ;

  }

  export class SocialInfoProviderManager {
    constructor();

    static createSocialFeedUpdaterAsync(kind: Number, mode: Number, ownerRemoteId: String, callback: (error: Error, result: SocialFeedUpdater) => void): void ;


    static createDashboardItemUpdaterAsync(ownerRemoteId: String, callback: (error: Error, result: SocialDashboardItemUpdater) => void): void ;


    static provisionAsync(callback: (error: Error, result: Boolean) => void): void ;


    static deprovisionAsync(callback: (error: Error) => void): void ;


    static updateBadgeCountValue(itemRemoteId: String, newCount: Number): void;


    static reportNewContentAvailable(contactRemoteId: String, kind: Number): void;


  }

