  export enum UserNotificationListenerAccessStatus {
    unspecified,
    allowed,
    denied,
  }

  export class UserNotificationListener {
    static current: UserNotificationListener;
    constructor();

    requestAccessAsync(callback: (error: Error, result: UserNotificationListenerAccessStatus) => void): void ;

    getNotificationsAsync(kinds: number, callback: (error: Error, result: Object) => void): void ;

    getAccessStatus(): UserNotificationListenerAccessStatus;

    getNotification(notificationId: number): Object;

    clearNotifications(): void;

    removeNotification(notificationId: number): void;

    addListener(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    on(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    off(type: "NotificationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

