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
    isPrimaryCommand: boolean;
    constructor();

  }

  export class IWebUICommandBarElement {
    constructor();

  }

  export class IWebUICommandBarIcon {
    constructor();

  }

  export class WebUICommandBarIconButton {
    label: string;
    isToggleButton: boolean;
    isChecked: boolean;
    icon: IWebUICommandBarIcon;
    enabled: boolean;
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
    text: string;
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
    symbol: string;
    constructor();
    constructor(symbol: string);

  }

  export class WebUICommandBarSizeChangedEventArgs {
    size: Object;
    constructor();

  }

  export class WebUICommandBar {
    visible: boolean;
    opacity: number;
    isOpen: boolean;
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

