  export class Size {
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum LampArrayEffectCompletionBehavior {
    clearState,
    keepState,
  }

  export enum LampArrayEffectStartMode {
    sequential,
    simultaneous,
  }

  export enum LampArrayRepetitionMode {
    occurrences,
    forever,
  }

  export class ILampArrayEffect {
    zIndex: Number;
    constructor();

  }

  export class LampArrayBitmapEffect {
    updateInterval: Number;
    startDelay: Number;
    duration: Number;
    suggestedBitmapSize: Object;
    zIndex: Number;
    constructor();
    constructor(lampArray: Object, lampIndexes: Array<Number>);

    addListener(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    on(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    off(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LampArrayBitmapRequestedEventArgs {
    sinceStarted: Number;
    constructor();

    updateBitmap(bitmap: Object): void;

  }

  export class LampArrayBlinkEffect {
    sustainDuration: Number;
    startDelay: Number;
    repetitionMode: LampArrayRepetitionMode;
    repetitionDelay: Number;
    occurrences: Number;
    decayDuration: Number;
    color: Object;
    attackDuration: Number;
    zIndex: Number;
    constructor();
    constructor(lampArray: Object, lampIndexes: Array<Number>);

  }

  export class LampArrayColorRampEffect {
    startDelay: Number;
    rampDuration: Number;
    completionBehavior: LampArrayEffectCompletionBehavior;
    color: Object;
    zIndex: Number;
    constructor();
    constructor(lampArray: Object, lampIndexes: Array<Number>);

  }

  export class LampArrayCustomEffect {
    updateInterval: Number;
    duration: Number;
    zIndex: Number;
    constructor();
    constructor(lampArray: Object, lampIndexes: Array<Number>);

    addListener(type: "UpdateRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "UpdateRequested", listener: (ev: Event) => void): void ;
    on(type: "UpdateRequested", listener: (ev: Event) => void): void ;
    off(type: "UpdateRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LampArrayEffectPlaylist {
    repetitionMode: LampArrayRepetitionMode;
    occurrences: Number;
    effectStartMode: LampArrayEffectStartMode;
    constructor();

    static startAll(value: Object): void;


    static stopAll(value: Object): void;


    static pauseAll(value: Object): void;


    append(effect: ILampArrayEffect): void;

    overrideZIndex(zIndex: Number): void;

    start(): void;

    stop(): void;

    pause(): void;

    getAt(index: Number): ILampArrayEffect;

    indexOf(value: ILampArrayEffect, index: Number): Boolean;

    getMany();
    first(): Object;

  }

  export class LampArraySolidEffect {
    zIndex: Number;
    startDelay: Number;
    duration: Number;
    completionBehavior: LampArrayEffectCompletionBehavior;
    color: Object;
    constructor();
    constructor(lampArray: Object, lampIndexes: Array<Number>);

  }

  export class LampArrayUpdateRequestedEventArgs {
    sinceStarted: Number;
    constructor();

    setColor(desiredColor: Object): void;

    setColorForIndex(lampIndex: Number, desiredColor: Object): void;

    setSingleColorForIndices(desiredColor: Object, lampIndexes: Array<Number>): void;

    setColorsForIndices(desiredColors: Array<Object>, lampIndexes: Array<Number>): void;

  }

