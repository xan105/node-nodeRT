  export class QuickLink {
    title: String;
    thumbnail: Object;
    id: String;
    supportedDataFormats: Object;
    supportedFileTypes: Object;
    constructor();

  }

  export class ShareOperation {
    data: Object;
    quickLinkId: String;
    contacts: Object;
    constructor();

    removeThisQuickLink(): void;

    reportStarted(): void;

    reportDataRetrieved(): void;

    reportSubmittedBackgroundTask(): void;

    reportCompleted(quicklink: QuickLink): void;
    reportCompleted(): void;

    reportError(value: String): void;

    dismissUI(): void;

  }

