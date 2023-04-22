  export enum AddFileResult {
    added,
    alreadyAdded,
    notAllowed,
    unavailable,
  }

  export enum FileSelectionMode {
    single,
    multiple,
  }

  export enum SetFileNameResult {
    succeeded,
    notAllowed,
    unavailable,
  }

  export class FileRemovedEventArgs {
    id: string;
    constructor();

  }

  export class FileOpenPickerUI {
    title: string;
    allowedFileTypes: Object;
    selectionMode: FileSelectionMode;
    settingsIdentifier: string;
    constructor();

    addFile(id: string, file: Object): AddFileResult;

    removeFile(id: string): void;

    containsFile(id: string): boolean;

    canAddFile(file: Object): boolean;

    addListener(type: "Closing", listener: (ev: Event) => void): void ;
    removeListener(type: "Closing", listener: (ev: Event) => void): void ;
    on(type: "Closing", listener: (ev: Event) => void): void ;
    off(type: "Closing", listener: (ev: Event) => void): void ;
    
    addListener(type: "FileRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "FileRemoved", listener: (ev: Event) => void): void ;
    on(type: "FileRemoved", listener: (ev: Event) => void): void ;
    off(type: "FileRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PickerClosingEventArgs {
    closingOperation: PickerClosingOperation;
    isCanceled: boolean;
    constructor();

  }

  export class PickerClosingOperation {
    deadline: Date;
    constructor();

    getDeferral(): PickerClosingDeferral;

  }

  export class PickerClosingDeferral {
    constructor();

    complete(): void;

  }

  export class FileSavePickerUI {
    title: string;
    allowedFileTypes: Object;
    fileName: string;
    settingsIdentifier: string;
    constructor();

    trySetFileName(value: string): SetFileNameResult;

    addListener(type: "FileNameChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "FileNameChanged", listener: (ev: Event) => void): void ;
    on(type: "FileNameChanged", listener: (ev: Event) => void): void ;
    off(type: "FileNameChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "TargetFileRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "TargetFileRequested", listener: (ev: Event) => void): void ;
    on(type: "TargetFileRequested", listener: (ev: Event) => void): void ;
    off(type: "TargetFileRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TargetFileRequestedEventArgs {
    request: TargetFileRequest;
    constructor();

  }

  export class TargetFileRequest {
    targetFile: Object;
    constructor();

    getDeferral(): TargetFileRequestDeferral;

  }

  export class TargetFileRequestDeferral {
    constructor();

    complete(): void;

  }

