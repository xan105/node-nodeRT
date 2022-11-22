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
    id: String;
    constructor();

  }

  export class FileOpenPickerUI {
    title: String;
    allowedFileTypes: Object;
    selectionMode: FileSelectionMode;
    settingsIdentifier: String;
    constructor();

    addFile(id: String, file: Object): AddFileResult;

    removeFile(id: String): void;

    containsFile(id: String): Boolean;

    canAddFile(file: Object): Boolean;

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
    isCanceled: Boolean;
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
    title: String;
    allowedFileTypes: Object;
    fileName: String;
    settingsIdentifier: String;
    constructor();

    trySetFileName(value: String): SetFileNameResult;

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

