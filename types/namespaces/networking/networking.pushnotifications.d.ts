  export enum PushNotificationType {
    toast,
    tile,
    badge,
    raw,
    tileFlyout,
  }

  export class PushNotificationChannel {
    expirationTime: Date;
    uri: String;
    constructor();

    close(): void;

    addListener(type: "PushNotificationReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "PushNotificationReceived", listener: (ev: Event) => void): void ;
    on(type: "PushNotificationReceived", listener: (ev: Event) => void): void ;
    off(type: "PushNotificationReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PushNotificationChannelManager {
    constructor();

    static createPushNotificationChannelForApplicationAsync(callback: (error: Error, result: PushNotificationChannel) => void): void ;
    static createPushNotificationChannelForApplicationAsync(applicationId: String, callback: (error: Error, result: PushNotificationChannel) => void): void ;


    static createPushNotificationChannelForSecondaryTileAsync(tileId: String, callback: (error: Error, result: PushNotificationChannel) => void): void ;


    static getDefault(): PushNotificationChannelManagerForUser;


    static getForUser(user: Object): PushNotificationChannelManagerForUser;


    addListener(type: "ChannelsRevoked", listener: (ev: Event) => void): void ;
    removeListener(type: "ChannelsRevoked", listener: (ev: Event) => void): void ;
    on(type: "ChannelsRevoked", listener: (ev: Event) => void): void ;
    off(type: "ChannelsRevoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PushNotificationChannelManagerForUser {
    user: Object;
    constructor();

    createPushNotificationChannelForApplicationAsync(callback: (error: Error, result: PushNotificationChannel) => void): void ;
    createPushNotificationChannelForApplicationAsync(applicationId: String, callback: (error: Error, result: PushNotificationChannel) => void): void ;

    createPushNotificationChannelForSecondaryTileAsync(tileId: String, callback: (error: Error, result: PushNotificationChannel) => void): void ;

    createRawPushNotificationChannelWithAlternateKeyForApplicationAsync(appServerKey: Object, channelId: String, callback: (error: Error, result: PushNotificationChannel) => void): void ;
    createRawPushNotificationChannelWithAlternateKeyForApplicationAsync(appServerKey: Object, channelId: String, appId: String, callback: (error: Error, result: PushNotificationChannel) => void): void ;

  }

  export class PushNotificationChannelsRevokedEventArgs {
    constructor();

  }

  export class PushNotificationReceivedEventArgs {
    cancel: Boolean;
    badgeNotification: Object;
    notificationType: PushNotificationType;
    rawNotification: RawNotification;
    tileNotification: Object;
    toastNotification: Object;
    constructor();

  }

  export class RawNotification {
    content: String;
    channelId: String;
    headers: Object;
    contentBytes: Object;
    constructor();

  }

