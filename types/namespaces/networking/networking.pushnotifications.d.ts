  export enum PushNotificationType {
    toast,
    tile,
    badge,
    raw,
    tileFlyout,
  }

  export class PushNotificationChannel {
    expirationTime: Date;
    uri: string;
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

  export class PushNotificationChannelManagerForUser {
    user: Object;
    constructor();

    createPushNotificationChannelForApplicationAsync(callback: (error: Error, result: PushNotificationChannel) => void): void ;
    createPushNotificationChannelForApplicationAsync(applicationId: string, callback: (error: Error, result: PushNotificationChannel) => void): void ;

    createPushNotificationChannelForSecondaryTileAsync(tileId: string, callback: (error: Error, result: PushNotificationChannel) => void): void ;

    createRawPushNotificationChannelWithAlternateKeyForApplicationAsync(appServerKey: Object, channelId: string, callback: (error: Error, result: PushNotificationChannel) => void): void ;
    createRawPushNotificationChannelWithAlternateKeyForApplicationAsync(appServerKey: Object, channelId: string, appId: string, callback: (error: Error, result: PushNotificationChannel) => void): void ;

  }

  export class PushNotificationReceivedEventArgs {
    cancel: boolean;
    badgeNotification: Object;
    notificationType: PushNotificationType;
    rawNotification: RawNotification;
    tileNotification: Object;
    toastNotification: Object;
    constructor();

  }

  export class RawNotification {
    content: string;
    channelId: string;
    headers: Object;
    constructor();

  }

  export class PushNotificationChannelManager {
    constructor();

    static createPushNotificationChannelForApplicationAsync(callback: (error: Error, result: PushNotificationChannel) => void): void ;
    static createPushNotificationChannelForApplicationAsync(applicationId: string, callback: (error: Error, result: PushNotificationChannel) => void): void ;


    static createPushNotificationChannelForSecondaryTileAsync(tileId: string, callback: (error: Error, result: PushNotificationChannel) => void): void ;


    static getDefault(): PushNotificationChannelManagerForUser;


    static getForUser(user: Object): PushNotificationChannelManagerForUser;


  }

