  export enum PrintContent {
    allPages,
    currentPage,
    customPageRange,
    currentSelection,
  }

  export class WebUIPrintTaskSettingsActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    configuration: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIPrint3DWorkflowActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    workflow: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUILockScreenCallActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    currentlyShownApplicationViewId: number;
    arguments: string;
    tileId: string;
    callUI: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUICameraSettingsActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    videoDeviceController: Object;
    videoDeviceExtension: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactPickerActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    contactPickerUI: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactCallActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    verb: string;
    contact: Object;
    serviceId: string;
    serviceUserId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactMessageActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    verb: string;
    contact: Object;
    serviceId: string;
    serviceUserId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactMapActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    verb: string;
    address: Object;
    contact: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactPostActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    verb: string;
    contact: Object;
    serviceId: string;
    serviceUserId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactVideoCallActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    verb: string;
    contact: Object;
    serviceId: string;
    serviceUserId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUISearchActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    currentlyShownApplicationViewId: number;
    language: string;
    queryText: string;
    linguisticDetails: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIWalletActionActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    actionId: string;
    actionKind: number;
    itemId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderAddAppointmentActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    verb: string;
    addAppointmentOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderReplaceAppointmentActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    verb: string;
    replaceAppointmentOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderRemoveAppointmentActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    verb: string;
    removeAppointmentOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderShowAppointmentDetailsActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    verb: string;
    instanceStartDate: Date;
    localId: string;
    roamingId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderShowTimeFrameActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    verb: string;
    duration: number;
    timeToShow: Date;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactPanelActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    contact: Object;
    contactPanel: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIShareTargetActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    shareOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIUserDataAccountProviderActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    operation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIDevicePairingActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    deviceInformation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIVoiceCommandActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    result: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class ActivatedDeferral {
    constructor();

    complete(): void;

  }

  export class ActivatedOperation {
    constructor();

    getDeferral(): ActivatedDeferral;

  }

  export class IActivatedEventArgsDeferral {
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUILaunchActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: number;
    arguments: string;
    tileId: string;
    tileActivatedInfo: Object;
    prelaunchActivated: boolean;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: number;
    files: Object;
    verb: string;
    neighboringFilesQuery: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIProtocolActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: number;
    uri: Object;
    callerPackageFamilyName: string;
    data: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIProtocolForResultsActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: number;
    uri: Object;
    callerPackageFamilyName: string;
    data: Object;
    protocolForResultsOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileOpenPickerActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    fileOpenPickerUI: Object;
    callerPackageFamilyName: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileSavePickerActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    fileSavePickerUI: Object;
    callerPackageFamilyName: string;
    enterpriseId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUICachedFileUpdaterActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    cachedFileUpdaterUI: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIDeviceActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: number;
    deviceInformationId: string;
    verb: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUILockScreenActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: number;
    info: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIRestrictedLaunchActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    sharedContext: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileOpenPickerContinuationEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    continuationData: Object;
    files: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileSavePickerContinuationEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    continuationData: Object;
    file: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFolderPickerContinuationEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    continuationData: Object;
    folder: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIWebAuthenticationBrokerContinuationEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    continuationData: Object;
    webAuthenticationResult: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIWebAccountProviderActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    operation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIDialReceiverActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: number;
    appName: string;
    arguments: string;
    tileId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIToastNotificationActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    argument: string;
    userInput: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUILockScreenComponentActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIPrintWorkflowForegroundTaskActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUICommandLineActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    operation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIStartupTaskActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    taskId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIBarcodeScannerPreviewActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    connectionId: string;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class IWebUINavigatedEventArgs {
    navigatedOperation: WebUINavigatedOperation;
    constructor();

  }

  export class WebUINavigatedOperation {
    constructor();

    getDeferral(): WebUINavigatedDeferral;

  }

  export class SuspendingDeferral {
    constructor();

    complete(): void;

  }

  export class SuspendingOperation {
    deadline: Date;
    constructor();

    getDeferral(): Object;

  }

  export class SuspendingEventArgs {
    suspendingOperation: Object;
    constructor();

  }

  export class LeavingBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class EnteredBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class IWebUIBackgroundTaskInstance {
    succeeded: boolean;
    constructor();

  }

  export class WebUIBackgroundTaskInstanceRuntimeClass {
    progress: number;
    instanceId: string;
    suspendedCount: number;
    task: Object;
    triggerDetails: Object;
    succeeded: boolean;
    constructor();

    getDeferral(): Object;

    addListener(type: "Canceled", listener: (ev: Event) => void): void ;
    removeListener(type: "Canceled", listener: (ev: Event) => void): void ;
    on(type: "Canceled", listener: (ev: Event) => void): void ;
    off(type: "Canceled", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebUIBackgroundTaskInstance {
    static current: IWebUIBackgroundTaskInstance;
    constructor();

  }

  export class WebUINavigatedDeferral {
    constructor();

    complete(): void;

  }

  export class WebUINavigatedEventArgs {
    navigatedOperation: WebUINavigatedOperation;
    constructor();

  }

  export class WebUIApplication {
    constructor();

    static requestRestartAsync(launchArguments: string, callback: (error: Error, result: number) => void): void ;


    static requestRestartForUserAsync(user: Object, launchArguments: string, callback: (error: Error, result: number) => void): void ;


    static enablePrelaunch(value: boolean): void;


    addListener(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    removeListener(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    on(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    off(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    
    addListener(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    removeListener(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    on(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    off(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    
    addListener(type: "Activated", listener: (ev: Event) => void): void ;
    removeListener(type: "Activated", listener: (ev: Event) => void): void ;
    on(type: "Activated", listener: (ev: Event) => void): void ;
    off(type: "Activated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Navigated", listener: (ev: Event) => void): void ;
    removeListener(type: "Navigated", listener: (ev: Event) => void): void ;
    on(type: "Navigated", listener: (ev: Event) => void): void ;
    off(type: "Navigated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Resuming", listener: (ev: Event) => void): void ;
    removeListener(type: "Resuming", listener: (ev: Event) => void): void ;
    on(type: "Resuming", listener: (ev: Event) => void): void ;
    off(type: "Resuming", listener: (ev: Event) => void): void ;
    
    addListener(type: "Suspending", listener: (ev: Event) => void): void ;
    removeListener(type: "Suspending", listener: (ev: Event) => void): void ;
    on(type: "Suspending", listener: (ev: Event) => void): void ;
    off(type: "Suspending", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HtmlPrintDocumentSource {
    topMargin: number;
    shrinkToFit: boolean;
    rightMargin: number;
    percentScale: number;
    leftMargin: number;
    enableHeaderFooter: boolean;
    content: PrintContent;
    bottomMargin: number;
    pageRange: string;
    constructor();

    trySetPageRange(strPageRange: string): boolean;

    close(): void;
  }

export * as core from "./ui.webui.core.js";