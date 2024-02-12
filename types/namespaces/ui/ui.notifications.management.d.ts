  export enum UserNotificationListenerAccessStatus {
    unspecified,
    allowed,
    denied,
  }

  export class UserNotificationListener {
    static current: UserNotificationListener;
    constructor();

    requestAccessAsync(callback: (error: Error, result: UserNotificationListenerAccessStatus) => void): void ;

    getNotificationsAsync(kinds: Number, callback: (error: Error, result: Object) => void): void ;

    getAccessStatus(): UserNotificationListenerAccessStatus;

    getNotification(notificationId: Number): Object;

    clearNotifications(): void;

    removeNotification(notificationId: Number): void;

    addListener(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    on(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    off(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

