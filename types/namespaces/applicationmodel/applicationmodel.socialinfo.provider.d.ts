  export class SocialFeedUpdater {
    items: Object;
    kind: number;
    ownerRemoteId: string;
    constructor();

    commitAsync(callback: (error: Error) => void): void ;

  }

  export class SocialDashboardItemUpdater {
    timestamp: Date;
    thumbnail: Object;
    targetUri: Object;
    content: Object;
    ownerRemoteId: string;
    constructor();

    commitAsync(callback: (error: Error) => void): void ;

  }

  export class SocialInfoProviderManager {
    constructor();

    static createSocialFeedUpdaterAsync(kind: number, mode: number, ownerRemoteId: string, callback: (error: Error, result: SocialFeedUpdater) => void): void ;


    static createDashboardItemUpdaterAsync(ownerRemoteId: string, callback: (error: Error, result: SocialDashboardItemUpdater) => void): void ;


    static provisionAsync(callback: (error: Error, result: boolean) => void): void ;


    static deprovisionAsync(callback: (error: Error) => void): void ;


    static updateBadgeCountValue(itemRemoteId: string, newCount: number): void;


    static reportNewContentAvailable(contactRemoteId: string, kind: number): void;


  }

