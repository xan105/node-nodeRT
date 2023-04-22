  export enum PickerViewMode {
    list,
    thumbnail,
  }

  export enum PickerLocationId {
    documentsLibrary,
    computerFolder,
    desktop,
    downloads,
    homeGroup,
    musicLibrary,
    picturesLibrary,
    videosLibrary,
    objects3D,
    unspecified,
  }

  export class FilePickerSelectedFilesArray {
    constructor();

    getAt(index: number): Object;

    indexOf(value: Object, index: number): boolean;

    getMany();
    first(): Object;

  }

  export class FilePickerFileTypesOrderedMap {
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

  }

  export class FileExtensionVector {
    constructor();

    getAt(index: number): string;

    getView(): Object;

    indexOf(value: string, index: number): boolean;

    setAt(index: number, value: string): void;

    insertAt(index: number, value: string): void;

    removeAt(index: number): void;

    append(value: string): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<string>): void;

    first(): Object;

  }

  export class FileOpenPicker {
    viewMode: PickerViewMode;
    suggestedStartLocation: PickerLocationId;
    settingsIdentifier: string;
    commitButtonText: string;
    fileTypeFilter: Object;
    continuationData: Object;
    constructor();

    static resumePickSingleFileAsync(callback: (error: Error, result: Object) => void): void ;


    pickSingleFileAsync(callback: (error: Error, result: Object) => void): void ;
    pickSingleFileAsync(pickerOperationId: string, callback: (error: Error, result: Object) => void): void ;

    pickMultipleFilesAsync(callback: (error: Error, result: Object) => void): void ;

    pickSingleFileAndContinue(): void;

    pickMultipleFilesAndContinue(): void;

  }

  export class FileSavePicker {
    suggestedStartLocation: PickerLocationId;
    suggestedSaveFile: Object;
    suggestedFileName: string;
    settingsIdentifier: string;
    defaultFileExtension: string;
    commitButtonText: string;
    fileTypeChoices: Object;
    continuationData: Object;
    enterpriseId: string;
    constructor();

    pickSaveFileAsync(callback: (error: Error, result: Object) => void): void ;

    pickSaveFileAndContinue(): void;

  }

  export class FolderPicker {
    viewMode: PickerViewMode;
    suggestedStartLocation: PickerLocationId;
    settingsIdentifier: string;
    commitButtonText: string;
    fileTypeFilter: Object;
    continuationData: Object;
    constructor();

    pickSingleFolderAsync(callback: (error: Error, result: Object) => void): void ;

    pickFolderAndContinue(): void;

  }

export * as provider from "./storage.pickers.provider.js";