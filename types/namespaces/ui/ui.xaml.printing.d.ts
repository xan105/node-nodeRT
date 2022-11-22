  export enum PreviewPageCountType {
    final,
    intermediate,
  }

  export class AddPagesEventArgs {
    printTaskOptions: Object;
    constructor();

  }

  export class GetPreviewPageEventArgs {
    pageNumber: Number;
    constructor();

  }

  export class PaginateEventArgs {
    currentPreviewPageNumber: Number;
    printTaskOptions: Object;
    constructor();

  }

  export class PrintDocument {
    static documentSourceProperty: Object;
    documentSource: Object;
    dispatcher: Object;
    constructor();

    addPage(pageVisual: Object): void;

    addPagesComplete(): void;

    setPreviewPageCount(count: Number, type: PreviewPageCountType): void;

    setPreviewPage(pageNumber: Number, pageVisual: Object): void;

    invalidatePreview(): void;

    addListener(type: "AddPages", listener: (ev: Event) => void): void ;
    removeListener(type: "AddPages", listener: (ev: Event) => void): void ;
    on(type: "AddPages", listener: (ev: Event) => void): void ;
    off(type: "AddPages", listener: (ev: Event) => void): void ;
    
    addListener(type: "GetPreviewPage", listener: (ev: Event) => void): void ;
    removeListener(type: "GetPreviewPage", listener: (ev: Event) => void): void ;
    on(type: "GetPreviewPage", listener: (ev: Event) => void): void ;
    off(type: "GetPreviewPage", listener: (ev: Event) => void): void ;
    
    addListener(type: "Paginate", listener: (ev: Event) => void): void ;
    removeListener(type: "Paginate", listener: (ev: Event) => void): void ;
    on(type: "Paginate", listener: (ev: Event) => void): void ;
    off(type: "Paginate", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

