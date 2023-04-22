  export class Color {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class SpatialBoundingBox {
    center: Vector3;
    extents: Vector3;
    constructor();
  }

  export enum JumpListSystemGroupKind {
    none,
    frequent,
    recent,
  }

  export enum JumpListItemKind {
    arguments,
    separator,
  }

  export enum TileOptions {
    none,
    showNameOnLogo,
    showNameOnWideLogo,
    copyOnDeployment,
  }

  export enum TileSize {
    default,
    square30x30,
    square70x70,
    square150x150,
    wide310x150,
    square310x310,
    square71x71,
    square44x44,
  }

  export enum ForegroundText {
    dark,
    light,
  }

  export enum TileMixedRealityModelActivationBehavior {
    default,
    none,
  }

  export class JumpListItem {
    logo: Object;
    groupName: string;
    displayName: string;
    description: string;
    arguments: string;
    kind: JumpListItemKind;
    removedByUser: boolean;
    constructor();

    static createWithArguments(arguments: string, displayName: string): JumpListItem;


    static createSeparator(): JumpListItem;


  }

  export class JumpList {
    systemGroupKind: JumpListSystemGroupKind;
    items: Object;
    constructor();

    static loadCurrentAsync(callback: (error: Error, result: JumpList) => void): void ;


    static isSupported(): boolean;


    saveAsync(callback: (error: Error) => void): void ;

  }

  export class SecondaryTileVisualElements {
    square150x150Logo: Object;
    showNameOnWide310x150Logo: boolean;
    showNameOnSquare310x310Logo: boolean;
    showNameOnSquare150x150Logo: boolean;
    foregroundText: ForegroundText;
    backgroundColor: Object;
    wide310x150Logo: Object;
    square70x70Logo: Object;
    square310x310Logo: Object;
    square30x30Logo: Object;
    square71x71Logo: Object;
    square44x44Logo: Object;
    mixedRealityModel: TileMixedRealityModel;
    constructor();

  }

  export class SecondaryTile {
    shortName: string;
    logo: Object;
    tileId: string;
    lockScreenDisplayBadgeAndTileText: boolean;
    lockScreenBadgeLogo: Object;
    arguments: string;
    foregroundText: ForegroundText;
    displayName: string;
    backgroundColor: Object;
    wideLogo: Object;
    tileOptions: TileOptions;
    smallLogo: Object;
    roamingEnabled: boolean;
    phoneticName: string;
    visualElements: SecondaryTileVisualElements;
    constructor();
    constructor(tileId: string, displayName: string, arguments: string, square150x150Logo: Object, desiredSize: TileSize);
    constructor(tileId: string, shortName: string, displayName: string, arguments: string, tileOptions: TileOptions, logoReference: Object);
    constructor(tileId: string, shortName: string, displayName: string, arguments: string, tileOptions: TileOptions, logoReference: Object, wideLogoReference: Object);
    constructor(tileId: string);

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;
    static findAllAsync(applicationId: string, callback: (error: Error, result: Object) => void): void ;


    static findAllForPackageAsync(callback: (error: Error, result: Object) => void): void ;


    static exists(tileId: string): boolean;


    requestCreateAsync(callback: (error: Error, result: boolean) => void): void ;
    requestCreateAsync(invocationPoint: Object, callback: (error: Error, result: boolean) => void): void ;

    requestCreateForSelectionAsync(selection: Object, callback: (error: Error, result: boolean) => void): void ;
    requestCreateForSelectionAsync(selection: Object, preferredPlacement: number, callback: (error: Error, result: boolean) => void): void ;

    requestDeleteAsync(callback: (error: Error, result: boolean) => void): void ;
    requestDeleteAsync(invocationPoint: Object, callback: (error: Error, result: boolean) => void): void ;

    requestDeleteForSelectionAsync(selection: Object, callback: (error: Error, result: boolean) => void): void ;
    requestDeleteForSelectionAsync(selection: Object, preferredPlacement: number, callback: (error: Error, result: boolean) => void): void ;

    updateAsync(callback: (error: Error, result: boolean) => void): void ;

    addListener(type: "VisualElementsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "VisualElementsRequested", listener: (ev: Event) => void): void ;
    on(type: "VisualElementsRequested", listener: (ev: Event) => void): void ;
    off(type: "VisualElementsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VisualElementsRequestedEventArgs {
    request: VisualElementsRequest;
    constructor();

  }

  export class TileMixedRealityModel {
    uri: Object;
    boundingBox: SpatialBoundingBox;
    activationBehavior: TileMixedRealityModelActivationBehavior;
    constructor();

  }

  export class VisualElementsRequest {
    alternateVisualElements: Object;
    deadline: Date;
    visualElements: SecondaryTileVisualElements;
    constructor();

    getDeferral(): VisualElementsRequestDeferral;

  }

  export class VisualElementsRequestDeferral {
    constructor();

    complete(): void;

  }

  export class StartScreenManager {
    user: Object;
    constructor();

    static getDefault(): StartScreenManager;


    static getForUser(user: Object): StartScreenManager;


    containsAppListEntryAsync(appListEntry: Object, callback: (error: Error, result: boolean) => void): void ;

    requestAddAppListEntryAsync(appListEntry: Object, callback: (error: Error, result: boolean) => void): void ;

    supportsAppListEntry(appListEntry: Object): boolean;

  }

