  export enum PrintContent {
    allPages,
    currentPage,
    customPageRange,
    currentSelection,
  }

  export class WebUIPrintTaskSettingsActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    configuration: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIPrint3DWorkflowActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    workflow: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUILockScreenCallActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    currentlyShownApplicationViewId: Number;
    arguments: String;
    tileId: String;
    callUI: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUICameraSettingsActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    videoDeviceController: Object;
    videoDeviceExtension: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactPickerActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    contactPickerUI: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactCallActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactMessageActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactMapActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    verb: String;
    address: Object;
    contact: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactPostActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactVideoCallActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUISearchActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    currentlyShownApplicationViewId: Number;
    language: String;
    queryText: String;
    linguisticDetails: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIWalletActionActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    actionId: String;
    actionKind: Number;
    itemId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderAddAppointmentActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    verb: String;
    addAppointmentOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderReplaceAppointmentActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    verb: String;
    replaceAppointmentOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderRemoveAppointmentActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    verb: String;
    removeAppointmentOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderShowAppointmentDetailsActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    verb: String;
    instanceStartDate: Date;
    localId: String;
    roamingId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIAppointmentsProviderShowTimeFrameActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    verb: String;
    duration: Number;
    timeToShow: Date;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIContactPanelActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    contact: Object;
    contactPanel: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIShareTargetActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    shareOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIUserDataAccountProviderActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    operation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIDevicePairingActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    deviceInformation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIVoiceCommandActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
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
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: Number;
    arguments: String;
    tileId: String;
    tileActivatedInfo: Object;
    prelaunchActivated: Boolean;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: Number;
    files: Object;
    verb: String;
    neighboringFilesQuery: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIProtocolActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: Number;
    uri: Object;
    callerPackageFamilyName: String;
    data: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIProtocolForResultsActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: Number;
    uri: Object;
    callerPackageFamilyName: String;
    data: Object;
    protocolForResultsOperation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileOpenPickerActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    fileOpenPickerUI: Object;
    callerPackageFamilyName: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileSavePickerActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    fileSavePickerUI: Object;
    callerPackageFamilyName: String;
    enterpriseId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUICachedFileUpdaterActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    cachedFileUpdaterUI: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIDeviceActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: Number;
    deviceInformationId: String;
    verb: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUILockScreenActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: Number;
    info: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIRestrictedLaunchActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    sharedContext: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileOpenPickerContinuationEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    continuationData: Object;
    files: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFileSavePickerContinuationEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    continuationData: Object;
    file: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIFolderPickerContinuationEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    continuationData: Object;
    folder: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIWebAuthenticationBrokerContinuationEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    continuationData: Object;
    webAuthenticationResult: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIWebAccountProviderActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    operation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIDialReceiverActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    currentlyShownApplicationViewId: Number;
    appName: String;
    arguments: String;
    tileId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIToastNotificationActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    argument: String;
    userInput: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUILockScreenComponentActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIPrintWorkflowForegroundTaskActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUICommandLineActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    operation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIStartupTaskActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    taskId: String;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIBarcodeScannerPreviewActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    connectionId: String;
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
    succeeded: Boolean;
    constructor();

  }

  export class WebUIBackgroundTaskInstanceRuntimeClass {
    progress: Number;
    instanceId: String;
    suspendedCount: Number;
    task: Object;
    triggerDetails: Object;
    succeeded: Boolean;
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

    static requestRestartAsync(launchArguments: String, callback: (error: Error, result: Number) => void): void ;


    static requestRestartForUserAsync(user: Object, launchArguments: String, callback: (error: Error, result: Number) => void): void ;


    static enablePrelaunch(value: Boolean): void;


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
    topMargin: Number;
    shrinkToFit: Boolean;
    rightMargin: Number;
    percentScale: Number;
    leftMargin: Number;
    enableHeaderFooter: Boolean;
    content: PrintContent;
    bottomMargin: Number;
    pageRange: String;
    constructor();

    trySetPageRange(strPageRange: String): Boolean;

    close(): void;
  }

export * as core from "./ui.webui.core.js";