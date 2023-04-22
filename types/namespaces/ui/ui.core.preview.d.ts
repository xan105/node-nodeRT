  export class SystemNavigationCloseRequestedPreviewEventArgs {
    handled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class SystemNavigationManagerPreview {
    constructor();

    static getForCurrentView(): SystemNavigationManagerPreview;


    addListener(type: "CloseRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CloseRequested", listener: (ev: Event) => void): void ;
    on(type: "CloseRequested", listener: (ev: Event) => void): void ;
    off(type: "CloseRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

