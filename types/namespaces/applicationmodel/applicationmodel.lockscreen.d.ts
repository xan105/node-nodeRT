  export class LockApplicationHost {
    constructor();

    static getForCurrentView(): LockApplicationHost;


    requestUnlock(): void;

    addListener(type: "Unlocking", listener: (ev: Event) => void): void ;
    removeListener(type: "Unlocking", listener: (ev: Event) => void): void ;
    on(type: "Unlocking", listener: (ev: Event) => void): void ;
    off(type: "Unlocking", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LockScreenBadge {
    automationName: String;
    glyph: Object;
    logo: Object;
    number: Number;
    constructor();

    launchApp(): void;

  }

  export class LockScreenInfo {
    alarmIcon: Object;
    badges: Object;
    detailText: Object;
    lockScreenImage: Object;
    constructor();

    addListener(type: "AlarmIconChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AlarmIconChanged", listener: (ev: Event) => void): void ;
    on(type: "AlarmIconChanged", listener: (ev: Event) => void): void ;
    off(type: "AlarmIconChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "BadgesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BadgesChanged", listener: (ev: Event) => void): void ;
    on(type: "BadgesChanged", listener: (ev: Event) => void): void ;
    off(type: "BadgesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DetailTextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DetailTextChanged", listener: (ev: Event) => void): void ;
    on(type: "DetailTextChanged", listener: (ev: Event) => void): void ;
    off(type: "DetailTextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LockScreenImageChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LockScreenImageChanged", listener: (ev: Event) => void): void ;
    on(type: "LockScreenImageChanged", listener: (ev: Event) => void): void ;
    off(type: "LockScreenImageChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LockScreenUnlockingDeferral {
    constructor();

    complete(): void;

  }

  export class LockScreenUnlockingEventArgs {
    deadline: Date;
    constructor();

    getDeferral(): LockScreenUnlockingDeferral;

  }

