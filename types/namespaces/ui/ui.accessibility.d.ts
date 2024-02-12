  export class Rect {
    constructor();
  }

  export class ScreenReaderPositionChangedEventArgs {
    isReadingText: Boolean;
    screenPositionInRawPixels: Object;
    constructor();

  }

  export class ScreenReaderService {
    currentScreenReaderPosition: ScreenReaderPositionChangedEventArgs;
    constructor();

    addListener(type: "ScreenReaderPositionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ScreenReaderPositionChanged", listener: (ev: Event) => void): void ;
    on(type: "ScreenReaderPositionChanged", listener: (ev: Event) => void): void ;
    off(type: "ScreenReaderPositionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

