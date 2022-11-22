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
    groupName: String;
    displayName: String;
    description: String;
    arguments: String;
    kind: JumpListItemKind;
    removedByUser: Boolean;
    constructor();

    static createWithArguments(arguments: String, displayName: String): JumpListItem;


    static createSeparator(): JumpListItem;


  }

  export class JumpList {
    systemGroupKind: JumpListSystemGroupKind;
    items: Object;
    constructor();

    static loadCurrentAsync(callback: (error: Error, result: JumpList) => void): void ;


    static isSupported(): Boolean;


    saveAsync(callback: (error: Error) => void): void ;

  }

  export class SecondaryTileVisualElements {
    square150x150Logo: Object;
    showNameOnWide310x150Logo: Boolean;
    showNameOnSquare310x310Logo: Boolean;
    showNameOnSquare150x150Logo: Boolean;
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
    shortName: String;
    logo: Object;
    tileId: String;
    lockScreenDisplayBadgeAndTileText: Boolean;
    lockScreenBadgeLogo: Object;
    arguments: String;
    foregroundText: ForegroundText;
    displayName: String;
    backgroundColor: Object;
    wideLogo: Object;
    tileOptions: TileOptions;
    smallLogo: Object;
    roamingEnabled: Boolean;
    phoneticName: String;
    visualElements: SecondaryTileVisualElements;
    constructor();
    constructor(tileId: String, displayName: String, arguments: String, square150x150Logo: Object, desiredSize: TileSize);
    constructor(tileId: String, shortName: String, displayName: String, arguments: String, tileOptions: TileOptions, logoReference: Object);
    constructor(tileId: String, shortName: String, displayName: String, arguments: String, tileOptions: TileOptions, logoReference: Object, wideLogoReference: Object);
    constructor(tileId: String);

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;
    static findAllAsync(applicationId: String, callback: (error: Error, result: Object) => void): void ;


    static findAllForPackageAsync(callback: (error: Error, result: Object) => void): void ;


    static exists(tileId: String): Boolean;


    requestCreateAsync(callback: (error: Error, result: Boolean) => void): void ;
    requestCreateAsync(invocationPoint: Object, callback: (error: Error, result: Boolean) => void): void ;

    requestCreateForSelectionAsync(selection: Object, callback: (error: Error, result: Boolean) => void): void ;
    requestCreateForSelectionAsync(selection: Object, preferredPlacement: Number, callback: (error: Error, result: Boolean) => void): void ;

    requestDeleteAsync(callback: (error: Error, result: Boolean) => void): void ;
    requestDeleteAsync(invocationPoint: Object, callback: (error: Error, result: Boolean) => void): void ;

    requestDeleteForSelectionAsync(selection: Object, callback: (error: Error, result: Boolean) => void): void ;
    requestDeleteForSelectionAsync(selection: Object, preferredPlacement: Number, callback: (error: Error, result: Boolean) => void): void ;

    updateAsync(callback: (error: Error, result: Boolean) => void): void ;

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


    containsAppListEntryAsync(appListEntry: Object, callback: (error: Error, result: Boolean) => void): void ;

    requestAddAppListEntryAsync(appListEntry: Object, callback: (error: Error, result: Boolean) => void): void ;

    supportsAppListEntry(appListEntry: Object): Boolean;

  }

