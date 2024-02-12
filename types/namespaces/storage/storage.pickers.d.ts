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

  export enum PickerViewMode {
    list,
    thumbnail,
  }

  export class FileExtensionVector {
    constructor();

    getAt(index: Number): String;

    getView(): Object;

    indexOf(value: String, index: Number): Boolean;

    setAt(index: Number, value: String): void;

    insertAt(index: Number, value: String): void;

    removeAt(index: Number): void;

    append(value: String): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<String>): void;

    first(): Object;

  }

  export class FileOpenPicker {
    viewMode: PickerViewMode;
    suggestedStartLocation: PickerLocationId;
    settingsIdentifier: String;
    commitButtonText: String;
    fileTypeFilter: Object;
    continuationData: Object;
    user: Object;
    constructor();

    static resumePickSingleFileAsync(callback: (error: Error, result: Object) => void): void ;


    static createForUser(user: Object): FileOpenPicker;


    pickSingleFileAsync(pickerOperationId: String, callback: (error: Error, result: Object) => void): void ;
    pickSingleFileAsync(callback: (error: Error, result: Object) => void): void ;

    pickMultipleFilesAsync(callback: (error: Error, result: Object) => void): void ;

    pickSingleFileAndContinue(): void;

    pickMultipleFilesAndContinue(): void;

  }

  export class FilePickerFileTypesOrderedMap {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class FilePickerSelectedFilesArray {
    constructor();

    getAt(index: Number): Object;

    indexOf(value: Object, index: Number): Boolean;

    getMany();
    first(): Object;

  }

  export class FileSavePicker {
    suggestedStartLocation: PickerLocationId;
    suggestedSaveFile: Object;
    suggestedFileName: String;
    settingsIdentifier: String;
    defaultFileExtension: String;
    commitButtonText: String;
    fileTypeChoices: Object;
    continuationData: Object;
    enterpriseId: String;
    user: Object;
    constructor();

    static createForUser(user: Object): FileSavePicker;


    pickSaveFileAsync(callback: (error: Error, result: Object) => void): void ;

    pickSaveFileAndContinue(): void;

  }

  export class FolderPicker {
    viewMode: PickerViewMode;
    suggestedStartLocation: PickerLocationId;
    settingsIdentifier: String;
    commitButtonText: String;
    fileTypeFilter: Object;
    continuationData: Object;
    user: Object;
    constructor();

    static createForUser(user: Object): FolderPicker;


    pickSingleFolderAsync(callback: (error: Error, result: Object) => void): void ;

    pickFolderAndContinue(): void;

  }

export const PickerLocationId: any;
export const PickerViewMode: any;
export const FileExtensionVector: any;
export const FileOpenPicker: any;
export const FilePickerFileTypesOrderedMap: any;
export const FilePickerSelectedFilesArray: any;
export const FileSavePicker: any;
export const FolderPicker: any;
export * as provider from "./storage.pickers.provider.js";
