  export class Color {
    constructor();
  }

  export enum PrintContent {
    allPages,
    currentPage,
    customPageRange,
    currentSelection,
  }

  export class ActivatedDeferral {
    constructor();

    complete(): void;

  }

  export class ActivatedOperation {
    constructor();

    getDeferral(): ActivatedDeferral;

  }

  export class BackgroundActivatedEventArgs {
    taskInstance: Object;
    constructor();

  }

  export class EnteredBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

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

  export class IActivatedEventArgsDeferral {
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class IWebUIBackgroundTaskInstance {
    succeeded: Boolean;
    constructor();

  }

  export class IWebUINavigatedEventArgs {
    navigatedOperation: WebUINavigatedOperation;
    constructor();

  }

  export class LeavingBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class NewWebUIViewCreatedEventArgs {
    activatedEventArgs: Object;
    hasPendingNavigate: Boolean;
    webUIView: WebUIView;
    constructor();

    getDeferral(): Object;

  }

  export class SuspendingDeferral {
    constructor();

    complete(): void;

  }

  export class SuspendingEventArgs {
    suspendingOperation: Object;
    constructor();

  }

  export class SuspendingOperation {
    deadline: Date;
    constructor();

    getDeferral(): Object;

  }

  export class WebUIApplication {
    constructor();

    static requestRestartAsync(launchArguments: String, callback: (error: Error, result: Number) => void): void ;


    static requestRestartForUserAsync(user: Object, launchArguments: String, callback: (error: Error, result: Number) => void): void ;


    static enablePrelaunch(value: Boolean): void;


    addListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    removeListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    on(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    off(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    
    addListener(type: "NewWebUIViewCreated", listener: (ev: Event) => void): void ;
    removeListener(type: "NewWebUIViewCreated", listener: (ev: Event) => void): void ;
    on(type: "NewWebUIViewCreated", listener: (ev: Event) => void): void ;
    off(type: "NewWebUIViewCreated", listener: (ev: Event) => void): void ;
    
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

  export class WebUIBackgroundTaskInstance {
    static current: IWebUIBackgroundTaskInstance;
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

  export class WebUIBarcodeScannerPreviewActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    connectionId: String;
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

  export class WebUICameraSettingsActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    videoDeviceController: Object;
    videoDeviceExtension: Object;
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

  export class WebUIContactPickerActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    contactPickerUI: Object;
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

  export class WebUIDevicePairingActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    deviceInformation: Object;
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

  export class WebUILockScreenComponentActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    activatedOperation: ActivatedOperation;
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

  export class WebUINavigatedOperation {
    constructor();

    getDeferral(): WebUINavigatedDeferral;

  }

  export class WebUIPhoneCallActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    lineId: String;
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

  export class WebUIPrintTaskSettingsActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    configuration: Object;
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

  export class WebUIRestrictedLaunchActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    sharedContext: Object;
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

  export class WebUIShareTargetActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    shareOperation: Object;
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

  export class WebUIUserDataAccountProviderActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    operation: Object;
    activatedOperation: ActivatedOperation;
    constructor();

  }

  export class WebUIView {
    ignoreApplicationContentUriRulesNavigationRestrictions: Boolean;
    applicationViewId: Number;
    source: Object;
    defaultBackgroundColor: Object;
    canGoBack: Boolean;
    canGoForward: Boolean;
    containsFullScreenElement: Boolean;
    deferredPermissionRequests: Object;
    documentTitle: String;
    settings: Object;
    constructor();

    static createAsync(callback: (error: Error, result: WebUIView) => void): void ;
    static createAsync(uri: Object, callback: (error: Error, result: WebUIView) => void): void ;


    invokeScriptAsync(scriptName: String, arguments: Object, callback: (error: Error, result: String) => void): void ;

    capturePreviewToStreamAsync(stream: Object, callback: (error: Error) => void): void ;

    captureSelectedContentToDataPackageAsync(callback: (error: Error, result: Object) => void): void ;

    addInitializeScript(script: String): void;

    goForward(): void;

    goBack(): void;

    refresh(): void;

    stop(): void;

    navigate(source: Object): void;

    navigateToString(text: String): void;

    navigateToLocalStreamUri(source: Object, streamResolver: Object): void;

    navigateWithHttpRequestMessage(requestMessage: Object): void;

    buildLocalStreamUri(contentIdentifier: String, relativePath: String): Object;

    getDeferredPermissionRequestById(id: Number, result: Object): void;

    addListener(type: "Activated", listener: (ev: Event) => void): void ;
    removeListener(type: "Activated", listener: (ev: Event) => void): void ;
    on(type: "Activated", listener: (ev: Event) => void): void ;
    off(type: "Activated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    on(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    off(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContentLoading", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentLoading", listener: (ev: Event) => void): void ;
    on(type: "ContentLoading", listener: (ev: Event) => void): void ;
    off(type: "ContentLoading", listener: (ev: Event) => void): void ;
    
    addListener(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    removeListener(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    on(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    off(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    on(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    off(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    on(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    off(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    on(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    off(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    on(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    off(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    on(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    off(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    on(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    off(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    on(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    off(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    on(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    off(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    on(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    off(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    removeListener(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    on(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    off(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    removeListener(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    on(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    off(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    removeListener(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    on(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    off(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    removeListener(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    on(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    off(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    
    addListener(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    on(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    off(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

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

  export class WebUIWebAccountProviderActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    operation: Object;
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

export const PrintContent: any;
export const ActivatedDeferral: any;
export const ActivatedOperation: any;
export const BackgroundActivatedEventArgs: any;
export const EnteredBackgroundEventArgs: any;
export const HtmlPrintDocumentSource: any;
export const IActivatedEventArgsDeferral: any;
export const IWebUIBackgroundTaskInstance: any;
export const IWebUINavigatedEventArgs: any;
export const LeavingBackgroundEventArgs: any;
export const NewWebUIViewCreatedEventArgs: any;
export const SuspendingDeferral: any;
export const SuspendingEventArgs: any;
export const SuspendingOperation: any;
export const WebUIApplication: any;
export const WebUIAppointmentsProviderAddAppointmentActivatedEventArgs: any;
export const WebUIAppointmentsProviderRemoveAppointmentActivatedEventArgs: any;
export const WebUIAppointmentsProviderReplaceAppointmentActivatedEventArgs: any;
export const WebUIAppointmentsProviderShowAppointmentDetailsActivatedEventArgs: any;
export const WebUIAppointmentsProviderShowTimeFrameActivatedEventArgs: any;
export const WebUIBackgroundTaskInstance: any;
export const WebUIBackgroundTaskInstanceRuntimeClass: any;
export const WebUIBarcodeScannerPreviewActivatedEventArgs: any;
export const WebUICachedFileUpdaterActivatedEventArgs: any;
export const WebUICameraSettingsActivatedEventArgs: any;
export const WebUICommandLineActivatedEventArgs: any;
export const WebUIContactCallActivatedEventArgs: any;
export const WebUIContactMapActivatedEventArgs: any;
export const WebUIContactMessageActivatedEventArgs: any;
export const WebUIContactPanelActivatedEventArgs: any;
export const WebUIContactPickerActivatedEventArgs: any;
export const WebUIContactPostActivatedEventArgs: any;
export const WebUIContactVideoCallActivatedEventArgs: any;
export const WebUIDeviceActivatedEventArgs: any;
export const WebUIDevicePairingActivatedEventArgs: any;
export const WebUIDialReceiverActivatedEventArgs: any;
export const WebUIFileActivatedEventArgs: any;
export const WebUIFileOpenPickerActivatedEventArgs: any;
export const WebUIFileOpenPickerContinuationEventArgs: any;
export const WebUIFileSavePickerActivatedEventArgs: any;
export const WebUIFileSavePickerContinuationEventArgs: any;
export const WebUIFolderPickerContinuationEventArgs: any;
export const WebUILaunchActivatedEventArgs: any;
export const WebUILockScreenActivatedEventArgs: any;
export const WebUILockScreenCallActivatedEventArgs: any;
export const WebUILockScreenComponentActivatedEventArgs: any;
export const WebUINavigatedDeferral: any;
export const WebUINavigatedEventArgs: any;
export const WebUINavigatedOperation: any;
export const WebUIPhoneCallActivatedEventArgs: any;
export const WebUIPrint3DWorkflowActivatedEventArgs: any;
export const WebUIPrintTaskSettingsActivatedEventArgs: any;
export const WebUIPrintWorkflowForegroundTaskActivatedEventArgs: any;
export const WebUIProtocolActivatedEventArgs: any;
export const WebUIProtocolForResultsActivatedEventArgs: any;
export const WebUIRestrictedLaunchActivatedEventArgs: any;
export const WebUISearchActivatedEventArgs: any;
export const WebUIShareTargetActivatedEventArgs: any;
export const WebUIStartupTaskActivatedEventArgs: any;
export const WebUIToastNotificationActivatedEventArgs: any;
export const WebUIUserDataAccountProviderActivatedEventArgs: any;
export const WebUIView: any;
export const WebUIVoiceCommandActivatedEventArgs: any;
export const WebUIWalletActionActivatedEventArgs: any;
export const WebUIWebAccountProviderActivatedEventArgs: any;
export const WebUIWebAuthenticationBrokerContinuationEventArgs: any;
export * as core from "./ui.webui.core.js";
