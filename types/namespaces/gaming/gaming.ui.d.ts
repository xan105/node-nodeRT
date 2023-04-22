  export class GameChatOverlayContract {
    constructor();
  }

  export class GamingUIProviderContract {
    constructor();
  }

  export enum GameChatOverlayPosition {
    bottomCenter,
    bottomLeft,
    bottomRight,
    middleRight,
    middleLeft,
    topCenter,
    topLeft,
    topRight,
  }

  export enum GameChatMessageOrigin {
    voice,
    text,
  }

  export enum GameMonitoringPermission {
    allowed,
    deniedByUser,
    deniedBySystem,
  }

  export class GameBar {
    static isInputRedirected: boolean;
    static visible: boolean;
    constructor();

    addListener(type: "IsInputRedirectedChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsInputRedirectedChanged", listener: (ev: Event) => void): void ;
    on(type: "IsInputRedirectedChanged", listener: (ev: Event) => void): void ;
    off(type: "IsInputRedirectedChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    on(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    off(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GameChatOverlay {
    desiredPosition: GameChatOverlayPosition;
    constructor();

    static getDefault(): GameChatOverlay;


    addMessage(sender: string, message: string, origin: GameChatMessageOrigin): void;

  }

  export class GameMonitor {
    constructor();

    static getDefault(): GameMonitor;


    requestPermissionAsync(callback: (error: Error, result: GameMonitoringPermission) => void): void ;

  }

  export class GameChatOverlayMessageSource {
    constructor();

    setDelayBeforeClosingAfterMessageReceived(value: number): void;

    addListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    on(type: "MessageReceived", listener: (ev: Event) => void): void ;
    off(type: "MessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GameChatMessageReceivedEventArgs {
    appDisplayName: string;
    appId: string;
    message: string;
    origin: GameChatMessageOrigin;
    senderName: string;
    constructor();

  }

  export class GameUIProviderActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    gameUIArgs: Object;
    constructor();

    reportCompleted(results: Object): void;

  }

