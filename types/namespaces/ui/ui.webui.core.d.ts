  export class Size {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class WebUICommandBarContract {
    constructor();
  }

  export enum WebUICommandBarClosedDisplayMode {
    default,
    minimal,
    compact,
  }

  export class WebUICommandBarItemInvokedEventArgs {
    isPrimaryCommand: Boolean;
    constructor();

  }

  export class IWebUICommandBarElement {
    constructor();

  }

  export class IWebUICommandBarIcon {
    constructor();

  }

  export class WebUICommandBarIconButton {
    label: String;
    isToggleButton: Boolean;
    isChecked: Boolean;
    icon: IWebUICommandBarIcon;
    enabled: Boolean;
    constructor();

    addListener(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    on(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    off(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebUICommandBarConfirmationButton {
    text: String;
    constructor();

    addListener(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    on(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    off(type: "ItemInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebUICommandBarBitmapIcon {
    uri: Object;
    constructor();
    constructor(uri: Object);

  }

  export class WebUICommandBarSymbolIcon {
    symbol: String;
    constructor();
    constructor(symbol: String);

  }

  export class WebUICommandBarSizeChangedEventArgs {
    size: Object;
    constructor();

  }

  export class WebUICommandBar {
    visible: Boolean;
    opacity: Number;
    isOpen: Boolean;
    foregroundColor: Object;
    closedDisplayMode: WebUICommandBarClosedDisplayMode;
    backgroundColor: Object;
    primaryCommands: Object;
    secondaryCommands: Object;
    size: Object;
    constructor();

    static getForCurrentView(): WebUICommandBar;


    addListener(type: "MenuClosed", listener: (ev: Event) => void): void ;
    removeListener(type: "MenuClosed", listener: (ev: Event) => void): void ;
    on(type: "MenuClosed", listener: (ev: Event) => void): void ;
    off(type: "MenuClosed", listener: (ev: Event) => void): void ;
    
    addListener(type: "MenuOpened", listener: (ev: Event) => void): void ;
    removeListener(type: "MenuOpened", listener: (ev: Event) => void): void ;
    on(type: "MenuOpened", listener: (ev: Event) => void): void ;
    off(type: "MenuOpened", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

