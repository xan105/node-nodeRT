  export class PhotoImportProgress {
    itemsImported: Number;
    totalItemsToImport: Number;
    bytesImported: Number;
    totalBytesToImport: Number;
    importProgress: Number;
    constructor();
  }

  export enum PhotoImportStage {
    notStarted,
    findingItems,
    importingItems,
    deletingImportedItemsFromSource,
  }

  export enum PhotoImportAccessMode {
    readWrite,
    readOnly,
    readAndDelete,
  }

  export enum PhotoImportImportMode {
    importEverything,
    ignoreSidecars,
    ignoreSiblings,
    ignoreSidecarsAndSiblings,
  }

  export enum PhotoImportSourceType {
    generic,
    camera,
    mediaPlayer,
    phone,
    video,
    personalInfoManager,
    audioRecorder,
  }

  export enum PhotoImportContentType {
    unknown,
    image,
    video,
  }

  export enum PhotoImportPowerSource {
    unknown,
    battery,
    external,
  }

  export enum PhotoImportStorageMediumType {
    undefined,
    fixed,
    removable,
  }

  export enum PhotoImportContentTypeFilter {
    onlyImages,
    onlyVideos,
    imagesAndVideos,
  }

  export enum PhotoImportItemSelectionMode {
    selectAll,
    selectNone,
    selectNew,
  }

  export enum PhotoImportSubfolderDateFormat {
    year,
    yearMonth,
    yearMonthDay,
  }

  export enum PhotoImportConnectionTransport {
    unknown,
    usb,
    iP,
    bluetooth,
  }

  export enum PhotoImportSubfolderCreationMode {
    doNotCreateSubfolders,
    createSubfoldersFromFileDate,
    createSubfoldersFromExifDate,
    keepOriginalFolderStructure,
  }

  export class PhotoImportSource {
    batteryLevelPercent: Number;
    connectionProtocol: String;
    connectionTransport: PhotoImportConnectionTransport;
    dateTime: Date;
    description: String;
    displayName: String;
    id: String;
    isLocked: Boolean;
    isMassStorage: Boolean;
    manufacturer: String;
    model: String;
    powerSource: PhotoImportPowerSource;
    serialNumber: String;
    storageMedia: Object;
    thumbnail: Object;
    type: PhotoImportSourceType;
    constructor();

    static fromIdAsync(sourceId: String, callback: (error: Error, result: PhotoImportSource) => void): void ;


    static fromFolderAsync(sourceRootFolder: Object, callback: (error: Error, result: PhotoImportSource) => void): void ;


    createImportSession(): PhotoImportSession;

  }

  export class PhotoImportOperation {
    continueDeletingImportedItemsFromSourceAsync: Object;
    continueFindingItemsAsync: Object;
    continueImportingItemsAsync: Object;
    session: PhotoImportSession;
    stage: PhotoImportStage;
    constructor();

  }

  export class PhotoImportManager {
    constructor();

    static isSupportedAsync(callback: (error: Error, result: Boolean) => void): void ;


    static findAllSourcesAsync(callback: (error: Error, result: Object) => void): void ;


    static getPendingOperations(): Object;


  }

  export class PhotoImportSession {
    subfolderCreationMode: PhotoImportSubfolderCreationMode;
    destinationFolder: Object;
    destinationFileNamePrefix: String;
    appendSessionDateToDestinationFolder: Boolean;
    sessionId: String;
    source: PhotoImportSource;
    subfolderDateFormat: PhotoImportSubfolderDateFormat;
    rememberDeselectedItems: Boolean;
    constructor();

    findItemsAsync(contentTypeFilter: PhotoImportContentTypeFilter, itemSelectionMode: PhotoImportItemSelectionMode, callback: (error: Error, result: PhotoImportFindItemsResult) => void): void ;

    close(): void;
  }

  export class PhotoImportFindItemsResult {
    foundItems: Object;
    hasSucceeded: Boolean;
    importMode: PhotoImportImportMode;
    photosCount: Number;
    photosSizeInBytes: Number;
    selectedPhotosCount: Number;
    selectedPhotosSizeInBytes: Number;
    selectedSiblingsCount: Number;
    selectedSiblingsSizeInBytes: Number;
    selectedSidecarsCount: Number;
    selectedSidecarsSizeInBytes: Number;
    selectedTotalCount: Number;
    selectedTotalSizeInBytes: Number;
    selectedVideosCount: Number;
    selectedVideosSizeInBytes: Number;
    session: PhotoImportSession;
    siblingsCount: Number;
    siblingsSizeInBytes: Number;
    sidecarsCount: Number;
    sidecarsSizeInBytes: Number;
    totalCount: Number;
    totalSizeInBytes: Number;
    videosCount: Number;
    videosSizeInBytes: Number;
    constructor();

    selectNewAsync(callback: (error: Error) => void): void ;

    importItemsAsync(callback: (error: Error, result: PhotoImportImportItemsResult) => void): void ;

    selectAll(): void;

    selectNone(): void;

    setImportMode(value: PhotoImportImportMode): void;

    addItemsInDateRangeToSelection(rangeStart: Date, rangeLength: Number): void;

    addListener(type: "ItemImported", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemImported", listener: (ev: Event) => void): void ;
    on(type: "ItemImported", listener: (ev: Event) => void): void ;
    off(type: "ItemImported", listener: (ev: Event) => void): void ;
    
    addListener(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    on(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    off(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhotoImportImportItemsResult {
    hasSucceeded: Boolean;
    importedItems: Object;
    photosCount: Number;
    photosSizeInBytes: Number;
    session: PhotoImportSession;
    siblingsCount: Number;
    siblingsSizeInBytes: Number;
    sidecarsCount: Number;
    sidecarsSizeInBytes: Number;
    totalCount: Number;
    totalSizeInBytes: Number;
    videosCount: Number;
    videosSizeInBytes: Number;
    constructor();

    deleteImportedItemsFromSourceAsync(callback: (error: Error, result: PhotoImportDeleteImportedItemsFromSourceResult) => void): void ;

  }

  export class PhotoImportDeleteImportedItemsFromSourceResult {
    deletedItems: Object;
    hasSucceeded: Boolean;
    photosCount: Number;
    photosSizeInBytes: Number;
    session: PhotoImportSession;
    siblingsCount: Number;
    siblingsSizeInBytes: Number;
    sidecarsCount: Number;
    sidecarsSizeInBytes: Number;
    totalCount: Number;
    totalSizeInBytes: Number;
    videosCount: Number;
    videosSizeInBytes: Number;
    constructor();

  }

  export class PhotoImportStorageMedium {
    availableSpaceInBytes: Number;
    capacityInBytes: Number;
    description: String;
    name: String;
    serialNumber: String;
    storageMediumType: PhotoImportStorageMediumType;
    supportedAccessMode: PhotoImportAccessMode;
    constructor();

    refresh(): void;

  }

  export class PhotoImportSidecar {
    date: Date;
    name: String;
    sizeInBytes: Number;
    constructor();

  }

  export class PhotoImportVideoSegment {
    date: Date;
    name: String;
    sibling: PhotoImportSidecar;
    sidecars: Object;
    sizeInBytes: Number;
    constructor();

  }

  export class PhotoImportItem {
    isSelected: Boolean;
    contentType: PhotoImportContentType;
    date: Date;
    deletedFileNames: Object;
    importedFileNames: Object;
    itemKey: Number;
    name: String;
    sibling: PhotoImportSidecar;
    sidecars: Object;
    sizeInBytes: Number;
    thumbnail: Object;
    videoSegments: Object;
    constructor();

  }

  export class PhotoImportSelectionChangedEventArgs {
    isSelectionEmpty: Boolean;
    constructor();

  }

  export class PhotoImportItemImportedEventArgs {
    importedItem: PhotoImportItem;
    constructor();

  }

