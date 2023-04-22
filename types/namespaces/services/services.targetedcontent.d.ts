  export class TargetedContentContract {
    constructor();
  }

  export enum TargetedContentInteraction {
    impression,
    clickThrough,
    hover,
    like,
    dislike,
    dismiss,
    ineligible,
    accept,
    decline,
    defer,
    canceled,
    conversion,
    opportunity,
  }

  export enum TargetedContentValueKind {
    string,
    uri,
    number,
    boolean,
    file,
    imageFile,
    action,
    strings,
    uris,
    numbers,
    booleans,
    files,
    imageFiles,
    actions,
  }

  export enum TargetedContentObjectKind {
    collection,
    item,
    value,
  }

  export enum TargetedContentAvailability {
    none,
    partial,
    all,
  }

  export enum TargetedContentAppInstallationState {
    notApplicable,
    notInstalled,
    installed,
  }

  export class TargetedContentSubscription {
    id: string;
    constructor();

    static getAsync(subscriptionId: string, callback: (error: Error, result: TargetedContentSubscription) => void): void ;


    static getOptions(subscriptionId: string): TargetedContentSubscriptionOptions;


    getContentContainerAsync(callback: (error: Error, result: TargetedContentContainer) => void): void ;

    addListener(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContentChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentChanged", listener: (ev: Event) => void): void ;
    on(type: "ContentChanged", listener: (ev: Event) => void): void ;
    off(type: "ContentChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TargetedContentSubscriptionOptions {
    allowPartialContentAvailability: boolean;
    cloudQueryParameters: Object;
    localFilters: Object;
    subscriptionId: string;
    constructor();

    update(): void;

  }

  export class TargetedContentContainer {
    availability: TargetedContentAvailability;
    content: TargetedContentCollection;
    id: string;
    timestamp: Date;
    constructor();

    static getAsync(contentId: string, callback: (error: Error, result: TargetedContentContainer) => void): void ;


    selectSingleObject(path: string): TargetedContentObject;

  }

  export class TargetedContentChangedEventArgs {
    hasPreviousContentExpired: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class TargetedContentAvailabilityChangedEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class TargetedContentStateChangedEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class TargetedContentCollection {
    collections: Object;
    id: string;
    items: Object;
    path: string;
    properties: Object;
    constructor();

    reportInteraction(interaction: TargetedContentInteraction): void;

    reportCustomInteraction(customInteractionName: string): void;

  }

  export class TargetedContentObject {
    collection: TargetedContentCollection;
    item: TargetedContentItem;
    objectKind: TargetedContentObjectKind;
    value: TargetedContentValue;
    constructor();

  }

  export class TargetedContentItem {
    collections: Object;
    path: string;
    properties: Object;
    state: TargetedContentItemState;
    constructor();

    reportInteraction(interaction: TargetedContentInteraction): void;

    reportCustomInteraction(customInteractionName: string): void;

  }

  export class TargetedContentValue {
    action: TargetedContentAction;
    actions: Object;
    boolean: boolean;
    booleans: Object;
    file: TargetedContentFile;
    files: Object;
    imageFile: TargetedContentImage;
    imageFiles: Object;
    number: number;
    numbers: Object;
    path: string;
    string: string;
    strings: Object;
    uri: Object;
    uris: Object;
    valueKind: TargetedContentValueKind;
    constructor();

  }

  export class TargetedContentItemState {
    appInstallationState: TargetedContentAppInstallationState;
    shouldDisplay: boolean;
    constructor();

  }

  export class TargetedContentFile {
    constructor();

    openReadAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class TargetedContentImage {
    height: number;
    width: number;
    constructor();

    openReadAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class TargetedContentAction {
    constructor();

    invokeAsync(callback: (error: Error) => void): void ;

  }

