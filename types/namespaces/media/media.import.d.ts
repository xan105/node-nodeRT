  export class PhotoImportProgress {
    itemsImported: number;
    totalItemsToImport: number;
    bytesImported: number;
    totalBytesToImport: number;
    importProgress: number;
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
    batteryLevelPercent: number;
    connectionProtocol: string;
    connectionTransport: PhotoImportConnectionTransport;
    dateTime: Date;
    description: string;
    displayName: string;
    id: string;
    isLocked: boolean;
    isMassStorage: boolean;
    manufacturer: string;
    model: string;
    powerSource: PhotoImportPowerSource;
    serialNumber: string;
    storageMedia: Object;
    thumbnail: Object;
    type: PhotoImportSourceType;
    constructor();

    static fromIdAsync(sourceId: string, callback: (error: Error, result: PhotoImportSource) => void): void ;


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

    static isSupportedAsync(callback: (error: Error, result: boolean) => void): void ;


    static findAllSourcesAsync(callback: (error: Error, result: Object) => void): void ;


    static getPendingOperations(): Object;


  }

  export class PhotoImportSession {
    subfolderCreationMode: PhotoImportSubfolderCreationMode;
    destinationFolder: Object;
    destinationFileNamePrefix: string;
    appendSessionDateToDestinationFolder: boolean;
    sessionId: string;
    source: PhotoImportSource;
    subfolderDateFormat: PhotoImportSubfolderDateFormat;
    rememberDeselectedItems: boolean;
    constructor();

    findItemsAsync(contentTypeFilter: PhotoImportContentTypeFilter, itemSelectionMode: PhotoImportItemSelectionMode, callback: (error: Error, result: PhotoImportFindItemsResult) => void): void ;

    close(): void;
  }

  export class PhotoImportFindItemsResult {
    foundItems: Object;
    hasSucceeded: boolean;
    importMode: PhotoImportImportMode;
    photosCount: number;
    photosSizeInBytes: number;
    selectedPhotosCount: number;
    selectedPhotosSizeInBytes: number;
    selectedSiblingsCount: number;
    selectedSiblingsSizeInBytes: number;
    selectedSidecarsCount: number;
    selectedSidecarsSizeInBytes: number;
    selectedTotalCount: number;
    selectedTotalSizeInBytes: number;
    selectedVideosCount: number;
    selectedVideosSizeInBytes: number;
    session: PhotoImportSession;
    siblingsCount: number;
    siblingsSizeInBytes: number;
    sidecarsCount: number;
    sidecarsSizeInBytes: number;
    totalCount: number;
    totalSizeInBytes: number;
    videosCount: number;
    videosSizeInBytes: number;
    constructor();

    selectNewAsync(callback: (error: Error) => void): void ;

    importItemsAsync(callback: (error: Error, result: PhotoImportImportItemsResult) => void): void ;

    selectAll(): void;

    selectNone(): void;

    setImportMode(value: PhotoImportImportMode): void;

    addItemsInDateRangeToSelection(rangeStart: Date, rangeLength: number): void;

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
    hasSucceeded: boolean;
    importedItems: Object;
    photosCount: number;
    photosSizeInBytes: number;
    session: PhotoImportSession;
    siblingsCount: number;
    siblingsSizeInBytes: number;
    sidecarsCount: number;
    sidecarsSizeInBytes: number;
    totalCount: number;
    totalSizeInBytes: number;
    videosCount: number;
    videosSizeInBytes: number;
    constructor();

    deleteImportedItemsFromSourceAsync(callback: (error: Error, result: PhotoImportDeleteImportedItemsFromSourceResult) => void): void ;

  }

  export class PhotoImportDeleteImportedItemsFromSourceResult {
    deletedItems: Object;
    hasSucceeded: boolean;
    photosCount: number;
    photosSizeInBytes: number;
    session: PhotoImportSession;
    siblingsCount: number;
    siblingsSizeInBytes: number;
    sidecarsCount: number;
    sidecarsSizeInBytes: number;
    totalCount: number;
    totalSizeInBytes: number;
    videosCount: number;
    videosSizeInBytes: number;
    constructor();

  }

  export class PhotoImportStorageMedium {
    availableSpaceInBytes: number;
    capacityInBytes: number;
    description: string;
    name: string;
    serialNumber: string;
    storageMediumType: PhotoImportStorageMediumType;
    supportedAccessMode: PhotoImportAccessMode;
    constructor();

    refresh(): void;

  }

  export class PhotoImportSidecar {
    date: Date;
    name: string;
    sizeInBytes: number;
    constructor();

  }

  export class PhotoImportVideoSegment {
    date: Date;
    name: string;
    sibling: PhotoImportSidecar;
    sidecars: Object;
    sizeInBytes: number;
    constructor();

  }

  export class PhotoImportItem {
    isSelected: boolean;
    contentType: PhotoImportContentType;
    date: Date;
    deletedFileNames: Object;
    importedFileNames: Object;
    itemKey: number;
    name: string;
    sibling: PhotoImportSidecar;
    sidecars: Object;
    sizeInBytes: number;
    thumbnail: Object;
    videoSegments: Object;
    constructor();

  }

  export class PhotoImportSelectionChangedEventArgs {
    isSelectionEmpty: boolean;
    constructor();

  }

  export class PhotoImportItemImportedEventArgs {
    importedItem: PhotoImportItem;
    constructor();

  }

