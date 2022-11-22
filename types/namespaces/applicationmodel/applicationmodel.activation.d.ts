  export class Rect {
    constructor();
  }

  export class ActivatedEventsContract {
    constructor();
  }

  export class ActivationCameraSettingsContract {
    constructor();
  }

  export class ContactActivatedEventsContract {
    constructor();
  }

  export class WebUISearchActivatedEventsContract {
    constructor();
  }

  export enum ApplicationExecutionState {
    notRunning,
    running,
    suspended,
    terminated,
    closedByUser,
  }

  export enum ActivationKind {
    launch,
    search,
    shareTarget,
    file,
    protocol,
    fileOpenPicker,
    fileSavePicker,
    cachedFileUpdater,
    contactPicker,
    device,
    printTaskSettings,
    cameraSettings,
    restrictedLaunch,
    appointmentsProvider,
    contact,
    lockScreenCall,
    voiceCommand,
    lockScreen,
    pickerReturned,
    walletAction,
    pickFileContinuation,
    pickSaveFileContinuation,
    pickFolderContinuation,
    webAuthenticationBrokerContinuation,
    webAccountProvider,
    componentUI,
    protocolForResults,
    toastNotification,
    print3DWorkflow,
    dialReceiver,
    devicePairing,
    userDataAccountsProvider,
    filePickerExperience,
    lockScreenComponent,
    contactPanel,
    printWorkflowForegroundTask,
    gameUIProvider,
    startupTask,
    commandLineLaunch,
    barcodeScannerProvider,
  }

  export class PrintTaskSettingsActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    configuration: Object;
    constructor();

  }

  export class Print3DWorkflowActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    workflow: Object;
    constructor();

  }

  export class LockScreenCallActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    currentlyShownApplicationViewId: Number;
    arguments: String;
    tileId: String;
    callUI: Object;
    viewSwitcher: Object;
    constructor();

  }

  export class CameraSettingsActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    videoDeviceController: Object;
    videoDeviceExtension: Object;
    constructor();

  }

  export class ContactPickerActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    contactPickerUI: Object;
    constructor();

  }

  export class ContactCallActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class ContactMessageActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class ContactMapActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    verb: String;
    address: Object;
    contact: Object;
    constructor();

  }

  export class ContactPostActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class ContactVideoCallActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    verb: String;
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class WalletActionActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    actionId: String;
    actionKind: Number;
    itemId: String;
    constructor();

  }

  export class AppointmentsProviderAddAppointmentActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    verb: String;
    addAppointmentOperation: Object;
    constructor();

  }

  export class AppointmentsProviderReplaceAppointmentActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    verb: String;
    replaceAppointmentOperation: Object;
    constructor();

  }

  export class AppointmentsProviderRemoveAppointmentActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    verb: String;
    removeAppointmentOperation: Object;
    constructor();

  }

  export class AppointmentsProviderShowAppointmentDetailsActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    verb: String;
    instanceStartDate: Date;
    localId: String;
    roamingId: String;
    constructor();

  }

  export class AppointmentsProviderShowTimeFrameActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    verb: String;
    duration: Number;
    timeToShow: Date;
    constructor();

  }

  export class IBackgroundActivatedEventArgs {
    taskInstance: Object;
    constructor();

  }

  export class BackgroundActivatedEventArgs {
    taskInstance: Object;
    constructor();

  }

  export class IContactPanelActivatedEventArgs {
    contact: Object;
    contactPanel: Object;
    constructor();

  }

  export class ContactPanelActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    contact: Object;
    contactPanel: Object;
    constructor();

  }

  export class ShareTargetActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    shareOperation: Object;
    constructor();

  }

  export class UserDataAccountProviderActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    operation: Object;
    constructor();

  }

  export class SplashScreen {
    imageLocation: Object;
    constructor();

    addListener(type: "Dismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "Dismissed", listener: (ev: Event) => void): void ;
    on(type: "Dismissed", listener: (ev: Event) => void): void ;
    off(type: "Dismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    constructor();

  }

  export class IPrintTaskSettingsActivatedEventArgs {
    configuration: Object;
    constructor();

  }

  export class IPrint3DWorkflowActivatedEventArgs {
    workflow: Object;
    constructor();

  }

  export class ICameraSettingsActivatedEventArgs {
    videoDeviceController: Object;
    videoDeviceExtension: Object;
    constructor();

  }

  export class IContactPickerActivatedEventArgs {
    contactPickerUI: Object;
    constructor();

  }

  export class IContactActivatedEventArgs {
    verb: String;
    constructor();

  }

  export class IContactCallActivatedEventArgs {
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class IContactMessageActivatedEventArgs {
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class IContactMapActivatedEventArgs {
    address: Object;
    contact: Object;
    constructor();

  }

  export class IContactPostActivatedEventArgs {
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class IContactVideoCallActivatedEventArgs {
    contact: Object;
    serviceId: String;
    serviceUserId: String;
    constructor();

  }

  export class IContactsProviderActivatedEventArgs {
    verb: String;
    constructor();

  }

  export class IWalletActionActivatedEventArgs {
    actionId: String;
    actionKind: Number;
    itemId: String;
    constructor();

  }

  export class IAppointmentsProviderActivatedEventArgs {
    verb: String;
    constructor();

  }

  export class IAppointmentsProviderAddAppointmentActivatedEventArgs {
    addAppointmentOperation: Object;
    constructor();

  }

  export class IAppointmentsProviderReplaceAppointmentActivatedEventArgs {
    replaceAppointmentOperation: Object;
    constructor();

  }

  export class IAppointmentsProviderRemoveAppointmentActivatedEventArgs {
    removeAppointmentOperation: Object;
    constructor();

  }

  export class IAppointmentsProviderShowAppointmentDetailsActivatedEventArgs {
    instanceStartDate: Date;
    localId: String;
    roamingId: String;
    constructor();

  }

  export class IAppointmentsProviderShowTimeFrameActivatedEventArgs {
    duration: Number;
    timeToShow: Date;
    constructor();

  }

  export class IShareTargetActivatedEventArgs {
    shareOperation: Object;
    constructor();

  }

  export class IUserDataAccountProviderActivatedEventArgs {
    operation: Object;
    constructor();

  }

  export class IActivatedEventArgsWithUser {
    user: Object;
    constructor();

  }

  export class IApplicationViewActivatedEventArgs {
    currentlyShownApplicationViewId: Number;
    constructor();

  }

  export class IViewSwitcherProvider {
    viewSwitcher: Object;
    constructor();

  }

  export class IPrelaunchActivatedEventArgs {
    prelaunchActivated: Boolean;
    constructor();

  }

  export class ILaunchActivatedEventArgs {
    arguments: String;
    tileId: String;
    constructor();

  }

  export class ILockScreenCallActivatedEventArgs {
    callUI: Object;
    constructor();

  }

  export class ILaunchActivatedEventArgs2 {
    tileActivatedInfo: TileActivatedInfo;
    constructor();

  }

  export class TileActivatedInfo {
    recentlyShownNotifications: Object;
    constructor();

  }

  export class LaunchActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    arguments: String;
    tileId: String;
    tileActivatedInfo: TileActivatedInfo;
    prelaunchActivated: Boolean;
    viewSwitcher: Object;
    constructor();

  }

  export class ISearchActivatedEventArgs {
    language: String;
    queryText: String;
    constructor();

  }

  export class ISearchActivatedEventArgsWithLinguisticDetails {
    linguisticDetails: Object;
    constructor();

  }

  export class SearchActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    language: String;
    queryText: String;
    linguisticDetails: Object;
    viewSwitcher: Object;
    constructor();

  }

  export class IFileActivatedEventArgs {
    files: Object;
    verb: String;
    constructor();

  }

  export class IFileActivatedEventArgsWithNeighboringFiles {
    neighboringFilesQuery: Object;
    constructor();

  }

  export class IFileActivatedEventArgsWithCallerPackageFamilyName {
    callerPackageFamilyName: String;
    constructor();

  }

  export class FileActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    files: Object;
    verb: String;
    callerPackageFamilyName: String;
    neighboringFilesQuery: Object;
    viewSwitcher: Object;
    constructor();

  }

  export class IProtocolActivatedEventArgs {
    uri: Object;
    constructor();

  }

  export class IProtocolActivatedEventArgsWithCallerPackageFamilyNameAndData {
    callerPackageFamilyName: String;
    data: Object;
    constructor();

  }

  export class ProtocolActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    uri: Object;
    callerPackageFamilyName: String;
    data: Object;
    viewSwitcher: Object;
    constructor();

  }

  export class IProtocolForResultsActivatedEventArgs {
    protocolForResultsOperation: Object;
    constructor();

  }

  export class ProtocolForResultsActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    uri: Object;
    callerPackageFamilyName: String;
    data: Object;
    protocolForResultsOperation: Object;
    viewSwitcher: Object;
    constructor();

  }

  export class IFileOpenPickerActivatedEventArgs {
    fileOpenPickerUI: Object;
    constructor();

  }

  export class IFileOpenPickerActivatedEventArgs2 {
    callerPackageFamilyName: String;
    constructor();

  }

  export class FileOpenPickerActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    fileOpenPickerUI: Object;
    callerPackageFamilyName: String;
    constructor();

  }

  export class IFileSavePickerActivatedEventArgs {
    fileSavePickerUI: Object;
    constructor();

  }

  export class IFileSavePickerActivatedEventArgs2 {
    callerPackageFamilyName: String;
    enterpriseId: String;
    constructor();

  }

  export class FileSavePickerActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    fileSavePickerUI: Object;
    callerPackageFamilyName: String;
    enterpriseId: String;
    constructor();

  }

  export class ICachedFileUpdaterActivatedEventArgs {
    cachedFileUpdaterUI: Object;
    constructor();

  }

  export class CachedFileUpdaterActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    cachedFileUpdaterUI: Object;
    constructor();

  }

  export class IDeviceActivatedEventArgs {
    deviceInformationId: String;
    verb: String;
    constructor();

  }

  export class DeviceActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    deviceInformationId: String;
    verb: String;
    viewSwitcher: Object;
    constructor();

  }

  export class IPickerReturnedActivatedEventArgs {
    pickerOperationId: String;
    constructor();

  }

  export class PickerReturnedActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    pickerOperationId: String;
    constructor();

  }

  export class IRestrictedLaunchActivatedEventArgs {
    sharedContext: Object;
    constructor();

  }

  export class RestrictedLaunchActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    sharedContext: Object;
    constructor();

  }

  export class ILockScreenActivatedEventArgs {
    info: Object;
    constructor();

  }

  export class LockScreenActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    info: Object;
    constructor();

  }

  export class IContinuationActivatedEventArgs {
    continuationData: Object;
    constructor();

  }

  export class IFileOpenPickerContinuationEventArgs {
    files: Object;
    constructor();

  }

  export class FileOpenPickerContinuationEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    continuationData: Object;
    files: Object;
    constructor();

  }

  export class IFileSavePickerContinuationEventArgs {
    file: Object;
    constructor();

  }

  export class FileSavePickerContinuationEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    continuationData: Object;
    file: Object;
    constructor();

  }

  export class IFolderPickerContinuationEventArgs {
    folder: Object;
    constructor();

  }

  export class FolderPickerContinuationEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    continuationData: Object;
    folder: Object;
    constructor();

  }

  export class IWebAuthenticationBrokerContinuationEventArgs {
    webAuthenticationResult: Object;
    constructor();

  }

  export class WebAuthenticationBrokerContinuationEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    continuationData: Object;
    webAuthenticationResult: Object;
    constructor();

  }

  export class IWebAccountProviderActivatedEventArgs {
    operation: Object;
    constructor();

  }

  export class WebAccountProviderActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    operation: Object;
    constructor();

  }

  export class IToastNotificationActivatedEventArgs {
    argument: String;
    userInput: Object;
    constructor();

  }

  export class ToastNotificationActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    argument: String;
    userInput: Object;
    constructor();

  }

  export class IDialReceiverActivatedEventArgs {
    appName: String;
    constructor();

  }

  export class DialReceiverActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    currentlyShownApplicationViewId: Number;
    appName: String;
    arguments: String;
    tileId: String;
    viewSwitcher: Object;
    constructor();

  }

  export class LockScreenComponentActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    constructor();

  }

  export class CommandLineActivationOperation {
    exitCode: Number;
    arguments: String;
    currentDirectoryPath: String;
    constructor();

    getDeferral(): Object;

  }

  export class ICommandLineActivatedEventArgs {
    operation: CommandLineActivationOperation;
    constructor();

  }

  export class CommandLineActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    operation: CommandLineActivationOperation;
    constructor();

  }

  export class IStartupTaskActivatedEventArgs {
    taskId: String;
    constructor();

  }

  export class StartupTaskActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    taskId: String;
    constructor();

  }

  export class IBarcodeScannerPreviewActivatedEventArgs {
    connectionId: String;
    constructor();

  }

  export class BarcodeScannerPreviewActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    connectionId: String;
    constructor();

  }

  export class IDevicePairingActivatedEventArgs {
    deviceInformation: Object;
    constructor();

  }

  export class DevicePairingActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    deviceInformation: Object;
    constructor();

  }

  export class IVoiceCommandActivatedEventArgs {
    result: Object;
    constructor();

  }

  export class VoiceCommandActivatedEventArgs {
    kind: ActivationKind;
    previousExecutionState: ApplicationExecutionState;
    splashScreen: SplashScreen;
    user: Object;
    result: Object;
    constructor();

  }

