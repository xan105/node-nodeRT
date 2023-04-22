  export class QuickLink {
    title: string;
    thumbnail: Object;
    id: string;
    supportedDataFormats: Object;
    supportedFileTypes: Object;
    constructor();

  }

  export class ShareOperation {
    data: Object;
    quickLinkId: string;
    contacts: Object;
    constructor();

    removeThisQuickLink(): void;

    reportStarted(): void;

    reportDataRetrieved(): void;

    reportSubmittedBackgroundTask(): void;

    reportCompleted(quicklink: QuickLink): void;
    reportCompleted(): void;

    reportError(value: string): void;

    dismissUI(): void;

  }

