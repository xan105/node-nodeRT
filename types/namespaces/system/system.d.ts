  export class Rect {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class SystemManagementContract {
    constructor();
  }

  export enum AppDiagnosticInfoWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export enum AppMemoryUsageLevel {
    low,
    medium,
    high,
    overLimit,
  }

  export enum AppResourceGroupEnergyQuotaState {
    unknown,
    over,
    under,
  }

  export enum AppResourceGroupExecutionState {
    unknown,
    running,
    suspending,
    suspended,
    notRunning,
  }

  export enum AppResourceGroupInfoWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export enum AutoUpdateTimeZoneStatus {
    attempted,
    timedOut,
    failed,
  }

  export enum DiagnosticAccessStatus {
    unspecified,
    denied,
    limited,
    allowed,
  }

  export enum DispatcherQueuePriority {
    low,
    normal,
    high,
  }

  export enum LaunchFileStatus {
    success,
    appUnavailable,
    deniedByPolicy,
    fileTypeNotSupported,
    unknown,
  }

  export enum LaunchQuerySupportStatus {
    available,
    appNotInstalled,
    appUnavailable,
    notSupported,
    unknown,
  }

  export enum LaunchQuerySupportType {
    uri,
    uriForResults,
  }

  export enum LaunchUriStatus {
    success,
    appUnavailable,
    protocolUnavailable,
    unknown,
  }

  export enum PowerState {
    connectedStandby,
    sleepS3,
  }

  export enum ProcessorArchitecture {
    x86,
    arm,
    x64,
    neutral,
    arm64,
    x86OnArm64,
    unknown,
  }

  export enum RemoteLaunchUriStatus {
    unknown,
    success,
    appUnavailable,
    protocolUnavailable,
    remoteSystemUnavailable,
    valueSetTooLarge,
    deniedByLocalSystem,
    deniedByRemoteSystem,
  }

  export enum ShutdownKind {
    shutdown,
    restart,
  }

  export enum UserAgeConsentGroup {
    child,
    minor,
    adult,
  }

  export enum UserAgeConsentResult {
    notEnforced,
    included,
    notIncluded,
    unknown,
    ambiguous,
  }

  export enum UserAuthenticationStatus {
    unauthenticated,
    locallyAuthenticated,
    remotelyAuthenticated,
  }

  export enum UserPictureSize {
    size64x64,
    size208x208,
    size424x424,
    size1080x1080,
  }

  export enum UserType {
    localUser,
    remoteUser,
    localGuest,
    remoteGuest,
    systemManaged,
  }

  export enum UserWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export enum UserWatcherUpdateKind {
    properties,
    picture,
  }

  export enum VirtualKey {
    none,
    leftButton,
    rightButton,
    cancel,
    middleButton,
    xButton1,
    xButton2,
    back,
    tab,
    clear,
    enter,
    shift,
    control,
    menu,
    pause,
    capitalLock,
    kana,
    hangul,
    imeOn,
    junja,
    final,
    hanja,
    kanji,
    imeOff,
    escape,
    convert,
    nonConvert,
    accept,
    modeChange,
    space,
    pageUp,
    pageDown,
    end,
    home,
    left,
    up,
    right,
    down,
    select,
    print,
    execute,
    snapshot,
    insert,
    delete,
    help,
    number0,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    leftWindows,
    rightWindows,
    application,
    sleep,
    numberPad0,
    numberPad1,
    numberPad2,
    numberPad3,
    numberPad4,
    numberPad5,
    numberPad6,
    numberPad7,
    numberPad8,
    numberPad9,
    multiply,
    add,
    separator,
    subtract,
    decimal,
    divide,
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11,
    f12,
    f13,
    f14,
    f15,
    f16,
    f17,
    f18,
    f19,
    f20,
    f21,
    f22,
    f23,
    f24,
    navigationView,
    navigationMenu,
    navigationUp,
    navigationDown,
    navigationLeft,
    navigationRight,
    navigationAccept,
    navigationCancel,
    numberKeyLock,
    scroll,
    leftShift,
    rightShift,
    leftControl,
    rightControl,
    leftMenu,
    rightMenu,
    goBack,
    goForward,
    refresh,
    stop,
    search,
    favorites,
    goHome,
    gamepadA,
    gamepadB,
    gamepadX,
    gamepadY,
    gamepadRightShoulder,
    gamepadLeftShoulder,
    gamepadLeftTrigger,
    gamepadRightTrigger,
    gamepadDPadUp,
    gamepadDPadDown,
    gamepadDPadLeft,
    gamepadDPadRight,
    gamepadMenu,
    gamepadView,
    gamepadLeftThumbstickButton,
    gamepadRightThumbstickButton,
    gamepadLeftThumbstickUp,
    gamepadLeftThumbstickDown,
    gamepadLeftThumbstickRight,
    gamepadLeftThumbstickLeft,
    gamepadRightThumbstickUp,
    gamepadRightThumbstickDown,
    gamepadRightThumbstickRight,
    gamepadRightThumbstickLeft,
  }

  export enum VirtualKeyModifiers {
    none,
    control,
    menu,
    shift,
    windows,
  }

  export class AppActivationResult {
    appResourceGroupInfo: AppResourceGroupInfo;
    extendedError: Number;
    constructor();

  }

  export class AppDiagnosticInfo {
    appInfo: Object;
    constructor();

    static requestAccessAsync(callback: (error: Error, result: DiagnosticAccessStatus) => void): void ;


    static requestInfoForPackageAsync(packageFamilyName: String, callback: (error: Error, result: Object) => void): void ;


    static requestInfoForAppAsync(callback: (error: Error, result: Object) => void): void ;
    static requestInfoForAppAsync(appUserModelId: String, callback: (error: Error, result: Object) => void): void ;


    static requestInfoAsync(callback: (error: Error, result: Object) => void): void ;


    static createWatcher(): AppDiagnosticInfoWatcher;


    launchAsync(callback: (error: Error, result: AppActivationResult) => void): void ;

    getResourceGroups(): Object;

    createResourceGroupWatcher(): AppResourceGroupInfoWatcher;

  }

  export class AppDiagnosticInfoWatcher {
    status: AppDiagnosticInfoWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppDiagnosticInfoWatcherEventArgs {
    appDiagnosticInfo: AppDiagnosticInfo;
    constructor();

  }

  export class AppExecutionStateChangeResult {
    extendedError: Number;
    constructor();

  }

  export class AppMemoryReport {
    peakPrivateCommitUsage: Number;
    privateCommitUsage: Number;
    totalCommitLimit: Number;
    totalCommitUsage: Number;
    expectedTotalCommitLimit: Number;
    constructor();

  }

  export class AppMemoryUsageLimitChangingEventArgs {
    newLimit: Number;
    oldLimit: Number;
    constructor();

  }

  export class AppResourceGroupBackgroundTaskReport {
    entryPoint: String;
    name: String;
    taskId: String;
    trigger: String;
    constructor();

  }

  export class AppResourceGroupInfo {
    instanceId: String;
    isShared: Boolean;
    constructor();

    startSuspendAsync(callback: (error: Error, result: AppExecutionStateChangeResult) => void): void ;

    startResumeAsync(callback: (error: Error, result: AppExecutionStateChangeResult) => void): void ;

    startTerminateAsync(callback: (error: Error, result: AppExecutionStateChangeResult) => void): void ;

    getBackgroundTaskReports(): Object;

    getMemoryReport(): AppResourceGroupMemoryReport;

    getProcessDiagnosticInfos(): Object;

    getStateReport(): AppResourceGroupStateReport;

  }

  export class AppResourceGroupInfoWatcher {
    status: AppResourceGroupInfoWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ExecutionStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ExecutionStateChanged", listener: (ev: Event) => void): void ;
    on(type: "ExecutionStateChanged", listener: (ev: Event) => void): void ;
    off(type: "ExecutionStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppResourceGroupInfoWatcherEventArgs {
    appDiagnosticInfos: Object;
    appResourceGroupInfo: AppResourceGroupInfo;
    constructor();

  }

  export class AppResourceGroupInfoWatcherExecutionStateChangedEventArgs {
    appDiagnosticInfos: Object;
    appResourceGroupInfo: AppResourceGroupInfo;
    constructor();

  }

  export class AppResourceGroupMemoryReport {
    commitUsageLevel: AppMemoryUsageLevel;
    commitUsageLimit: Number;
    privateCommitUsage: Number;
    totalCommitUsage: Number;
    constructor();

  }

  export class AppResourceGroupStateReport {
    energyQuotaState: AppResourceGroupEnergyQuotaState;
    executionState: AppResourceGroupExecutionState;
    constructor();

  }

  export class AppUriHandlerHost {
    name: String;
    isEnabled: Boolean;
    constructor();
    constructor(name: String);

  }

  export class AppUriHandlerRegistration {
    name: String;
    user: User;
    packageFamilyName: String;
    constructor();

    getAppAddedHostsAsync(callback: (error: Error, result: Object) => void): void ;

    setAppAddedHostsAsync(hosts: Object, callback: (error: Error) => void): void ;

    getAllHosts(): Object;

    updateHosts(hosts: Object): void;

  }

  export class AppUriHandlerRegistrationManager {
    user: User;
    packageFamilyName: String;
    constructor();

    static getForPackage(packageFamilyName: String): AppUriHandlerRegistrationManager;


    static getForPackageForUser(packageFamilyName: String, user: User): AppUriHandlerRegistrationManager;


    static getDefault(): AppUriHandlerRegistrationManager;


    static getForUser(user: User): AppUriHandlerRegistrationManager;


    tryGetRegistration(name: String): AppUriHandlerRegistration;

  }

  export class DateTimeSettings {
    constructor();

    static setSystemDateTime(utcDateTime: Date): void;


  }

  export class DispatcherQueue {
    hasThreadAccess: Boolean;
    constructor();

    static getForCurrentThread(): DispatcherQueue;


    createTimer(): DispatcherQueueTimer;

    tryEnqueue(callback: Object): Boolean;
    tryEnqueue(priority: DispatcherQueuePriority, callback: Object): Boolean;

    addListener(type: "ShutdownCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ShutdownCompleted", listener: (ev: Event) => void): void ;
    on(type: "ShutdownCompleted", listener: (ev: Event) => void): void ;
    off(type: "ShutdownCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ShutdownStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ShutdownStarting", listener: (ev: Event) => void): void ;
    on(type: "ShutdownStarting", listener: (ev: Event) => void): void ;
    off(type: "ShutdownStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DispatcherQueueController {
    dispatcherQueue: DispatcherQueue;
    constructor();

    static createOnDedicatedThread(): DispatcherQueueController;


    shutdownQueueAsync(callback: (error: Error) => void): void ;

  }

  export class DispatcherQueueShutdownStartingEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class DispatcherQueueTimer {
    isRepeating: Boolean;
    interval: Number;
    isRunning: Boolean;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Tick", listener: (ev: Event) => void): void ;
    removeListener(type: "Tick", listener: (ev: Event) => void): void ;
    on(type: "Tick", listener: (ev: Event) => void): void ;
    off(type: "Tick", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FolderLauncherOptions {
    itemsToSelect: Object;
    desiredRemainingView: Number;
    constructor();

  }

  export class ILauncherViewOptions {
    desiredRemainingView: Number;
    constructor();

  }

  export class KnownUserProperties {
    static accountName: String;
    static displayName: String;
    static domainName: String;
    static firstName: String;
    static guestHost: String;
    static lastName: String;
    static principalName: String;
    static providerName: String;
    static sessionInitiationProtocolUri: String;
    static ageEnforcementRegion: String;
    constructor();

  }

  export class LaunchUriResult {
    result: Object;
    status: LaunchUriStatus;
    constructor();

  }

  export class Launcher {
    constructor();

    static launchFolderPathAsync(path: String, callback: (error: Error, result: Boolean) => void): void ;
    static launchFolderPathAsync(path: String, options: FolderLauncherOptions, callback: (error: Error, result: Boolean) => void): void ;


    static launchFolderPathForUserAsync(user: User, path: String, callback: (error: Error, result: Boolean) => void): void ;
    static launchFolderPathForUserAsync(user: User, path: String, options: FolderLauncherOptions, callback: (error: Error, result: Boolean) => void): void ;


    static queryAppUriSupportAsync(uri: Object, callback: (error: Error, result: LaunchQuerySupportStatus) => void): void ;
    static queryAppUriSupportAsync(uri: Object, packageFamilyName: String, callback: (error: Error, result: LaunchQuerySupportStatus) => void): void ;


    static findAppUriHandlersAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;


    static launchUriForUserAsync(user: User, uri: Object, callback: (error: Error, result: LaunchUriStatus) => void): void ;
    static launchUriForUserAsync(user: User, uri: Object, options: LauncherOptions, callback: (error: Error, result: LaunchUriStatus) => void): void ;
    static launchUriForUserAsync(user: User, uri: Object, options: LauncherOptions, inputData: Object, callback: (error: Error, result: LaunchUriStatus) => void): void ;


    static launchUriForResultsForUserAsync(user: User, uri: Object, options: LauncherOptions, callback: (error: Error, result: LaunchUriResult) => void): void ;
    static launchUriForResultsForUserAsync(user: User, uri: Object, options: LauncherOptions, inputData: Object, callback: (error: Error, result: LaunchUriResult) => void): void ;


    static launchFileAsync(file: Object, callback: (error: Error, result: Boolean) => void): void ;
    static launchFileAsync(file: Object, options: LauncherOptions, callback: (error: Error, result: Boolean) => void): void ;


    static launchUriAsync(uri: Object, callback: (error: Error, result: Boolean) => void): void ;
    static launchUriAsync(uri: Object, options: LauncherOptions, callback: (error: Error, result: Boolean) => void): void ;
    static launchUriAsync(uri: Object, options: LauncherOptions, inputData: Object, callback: (error: Error, result: Boolean) => void): void ;


    static launchFolderAsync(folder: Object, callback: (error: Error, result: Boolean) => void): void ;
    static launchFolderAsync(folder: Object, options: FolderLauncherOptions, callback: (error: Error, result: Boolean) => void): void ;


    static launchUriForResultsAsync(uri: Object, options: LauncherOptions, callback: (error: Error, result: LaunchUriResult) => void): void ;
    static launchUriForResultsAsync(uri: Object, options: LauncherOptions, inputData: Object, callback: (error: Error, result: LaunchUriResult) => void): void ;


    static queryUriSupportAsync(uri: Object, launchQuerySupportType: LaunchQuerySupportType, callback: (error: Error, result: LaunchQuerySupportStatus) => void): void ;
    static queryUriSupportAsync(uri: Object, launchQuerySupportType: LaunchQuerySupportType, packageFamilyName: String, callback: (error: Error, result: LaunchQuerySupportStatus) => void): void ;


    static queryFileSupportAsync(file: Object, callback: (error: Error, result: LaunchQuerySupportStatus) => void): void ;
    static queryFileSupportAsync(file: Object, packageFamilyName: String, callback: (error: Error, result: LaunchQuerySupportStatus) => void): void ;


    static findUriSchemeHandlersAsync(scheme: String, callback: (error: Error, result: Object) => void): void ;
    static findUriSchemeHandlersAsync(scheme: String, launchQuerySupportType: LaunchQuerySupportType, callback: (error: Error, result: Object) => void): void ;


    static findFileHandlersAsync(extension: String, callback: (error: Error, result: Object) => void): void ;


  }

  export class LauncherOptions {
    treatAsUntrusted: Boolean;
    preferredApplicationPackageFamilyName: String;
    preferredApplicationDisplayName: String;
    fallbackUri: Object;
    displayApplicationPicker: Boolean;
    contentType: String;
    uI: LauncherUIOptions;
    targetApplicationPackageFamilyName: String;
    neighboringFilesQuery: Object;
    ignoreAppUriHandlers: Boolean;
    limitPickerToCurrentAppAndAppUriHandlers: Boolean;
    desiredRemainingView: Number;
    constructor();

  }

  export class LauncherUIOptions {
    selectionRect: Object;
    preferredPlacement: Number;
    invocationPoint: Object;
    constructor();

  }

  export class MemoryManager {
    static appMemoryUsage: Number;
    static appMemoryUsageLevel: AppMemoryUsageLevel;
    static appMemoryUsageLimit: Number;
    static expectedAppMemoryUsageLimit: Number;
    constructor();

    static trySetAppMemoryUsageLimit(value: Number): Boolean;


    static getAppMemoryReport(): AppMemoryReport;


    static getProcessMemoryReport(): ProcessMemoryReport;


    addListener(type: "AppMemoryUsageDecreased", listener: (ev: Event) => void): void ;
    removeListener(type: "AppMemoryUsageDecreased", listener: (ev: Event) => void): void ;
    on(type: "AppMemoryUsageDecreased", listener: (ev: Event) => void): void ;
    off(type: "AppMemoryUsageDecreased", listener: (ev: Event) => void): void ;
    
    addListener(type: "AppMemoryUsageIncreased", listener: (ev: Event) => void): void ;
    removeListener(type: "AppMemoryUsageIncreased", listener: (ev: Event) => void): void ;
    on(type: "AppMemoryUsageIncreased", listener: (ev: Event) => void): void ;
    off(type: "AppMemoryUsageIncreased", listener: (ev: Event) => void): void ;
    
    addListener(type: "AppMemoryUsageLimitChanging", listener: (ev: Event) => void): void ;
    removeListener(type: "AppMemoryUsageLimitChanging", listener: (ev: Event) => void): void ;
    on(type: "AppMemoryUsageLimitChanging", listener: (ev: Event) => void): void ;
    off(type: "AppMemoryUsageLimitChanging", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ProcessLauncher {
    constructor();

    static runToCompletionAsync(fileName: String, args: String, callback: (error: Error, result: ProcessLauncherResult) => void): void ;
    static runToCompletionAsync(fileName: String, args: String, options: ProcessLauncherOptions, callback: (error: Error, result: ProcessLauncherResult) => void): void ;


  }

  export class ProcessLauncherOptions {
    workingDirectory: String;
    standardOutput: Object;
    standardInput: Object;
    standardError: Object;
    constructor();

  }

  export class ProcessLauncherResult {
    exitCode: Number;
    constructor();

  }

  export class ProcessMemoryReport {
    privateWorkingSetUsage: Number;
    totalWorkingSetUsage: Number;
    constructor();

  }

  export class ProtocolForResultsOperation {
    constructor();

    reportCompleted(data: Object): void;

  }

  export class RemoteLauncher {
    constructor();

    static launchUriAsync(remoteSystemConnectionRequest: Object, uri: Object, callback: (error: Error, result: RemoteLaunchUriStatus) => void): void ;
    static launchUriAsync(remoteSystemConnectionRequest: Object, uri: Object, options: RemoteLauncherOptions, callback: (error: Error, result: RemoteLaunchUriStatus) => void): void ;
    static launchUriAsync(remoteSystemConnectionRequest: Object, uri: Object, options: RemoteLauncherOptions, inputData: Object, callback: (error: Error, result: RemoteLaunchUriStatus) => void): void ;


  }

  export class RemoteLauncherOptions {
    fallbackUri: Object;
    preferredAppIds: Object;
    constructor();

  }

  export class ShutdownManager {
    constructor();

    static isPowerStateSupported(powerState: PowerState): Boolean;


    static enterPowerState(powerState: PowerState): void;
    static enterPowerState(powerState: PowerState, wakeUpAfter: Number): void;


    static beginShutdown(shutdownKind: ShutdownKind, timeout: Number): void;


    static cancelShutdown(): void;


  }

  export class TimeZoneSettings {
    static canChangeTimeZone: Boolean;
    static currentTimeZoneDisplayName: String;
    static supportedTimeZoneDisplayNames: Object;
    constructor();

    static autoUpdateTimeZoneAsync(timeout: Number, callback: (error: Error, result: AutoUpdateTimeZoneStatus) => void): void ;


    static changeTimeZoneByDisplayName(timeZoneDisplayName: String): void;


  }

  export class User {
    authenticationStatus: UserAuthenticationStatus;
    nonRoamableId: String;
    type: UserType;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;
    static findAllAsync(type: UserType, callback: (error: Error, result: Object) => void): void ;
    static findAllAsync(type: UserType, status: UserAuthenticationStatus, callback: (error: Error, result: Object) => void): void ;


    static getDefault(): User;


    static createWatcher(): UserWatcher;


    static getFromId(nonRoamableId: String): User;


    getPropertyAsync(value: String, callback: (error: Error, result: Object) => void): void ;

    getPropertiesAsync(values: Object, callback: (error: Error, result: Object) => void): void ;

    getPictureAsync(desiredSize: UserPictureSize, callback: (error: Error, result: Object) => void): void ;

    checkUserAgeConsentGroupAsync(consentGroup: UserAgeConsentGroup, callback: (error: Error, result: UserAgeConsentResult) => void): void ;

  }

  export class UserAuthenticationStatusChangeDeferral {
    constructor();

    complete(): void;

  }

  export class UserAuthenticationStatusChangingEventArgs {
    currentStatus: UserAuthenticationStatus;
    newStatus: UserAuthenticationStatus;
    user: User;
    constructor();

    getDeferral(): UserAuthenticationStatusChangeDeferral;

  }

  export class UserChangedEventArgs {
    user: User;
    changedPropertyKinds: Object;
    constructor();

  }

  export class UserDeviceAssociation {
    constructor();

    static findUserFromDeviceId(deviceId: String): User;


    addListener(type: "UserDeviceAssociationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserDeviceAssociationChanged", listener: (ev: Event) => void): void ;
    on(type: "UserDeviceAssociationChanged", listener: (ev: Event) => void): void ;
    off(type: "UserDeviceAssociationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UserDeviceAssociationChangedEventArgs {
    deviceId: String;
    newUser: User;
    oldUser: User;
    constructor();

  }

  export class UserPicker {
    suggestedSelectedUser: User;
    allowGuestAccounts: Boolean;
    constructor();

    static isSupported(): Boolean;


    pickSingleUserAsync(callback: (error: Error, result: User) => void): void ;

  }

  export class UserWatcher {
    status: UserWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "AuthenticationStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AuthenticationStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "AuthenticationStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "AuthenticationStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AuthenticationStatusChanging", listener: (ev: Event) => void): void ;
    removeListener(type: "AuthenticationStatusChanging", listener: (ev: Event) => void): void ;
    on(type: "AuthenticationStatusChanging", listener: (ev: Event) => void): void ;
    off(type: "AuthenticationStatusChanging", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export const AppDiagnosticInfoWatcherStatus: any;
export const AppMemoryUsageLevel: any;
export const AppResourceGroupEnergyQuotaState: any;
export const AppResourceGroupExecutionState: any;
export const AppResourceGroupInfoWatcherStatus: any;
export const AutoUpdateTimeZoneStatus: any;
export const DiagnosticAccessStatus: any;
export const DispatcherQueuePriority: any;
export const LaunchFileStatus: any;
export const LaunchQuerySupportStatus: any;
export const LaunchQuerySupportType: any;
export const LaunchUriStatus: any;
export const PowerState: any;
export const ProcessorArchitecture: any;
export const RemoteLaunchUriStatus: any;
export const ShutdownKind: any;
export const UserAgeConsentGroup: any;
export const UserAgeConsentResult: any;
export const UserAuthenticationStatus: any;
export const UserPictureSize: any;
export const UserType: any;
export const UserWatcherStatus: any;
export const UserWatcherUpdateKind: any;
export const VirtualKey: any;
export const VirtualKeyModifiers: any;
export const AppActivationResult: any;
export const AppDiagnosticInfo: any;
export const AppDiagnosticInfoWatcher: any;
export const AppDiagnosticInfoWatcherEventArgs: any;
export const AppExecutionStateChangeResult: any;
export const AppMemoryReport: any;
export const AppMemoryUsageLimitChangingEventArgs: any;
export const AppResourceGroupBackgroundTaskReport: any;
export const AppResourceGroupInfo: any;
export const AppResourceGroupInfoWatcher: any;
export const AppResourceGroupInfoWatcherEventArgs: any;
export const AppResourceGroupInfoWatcherExecutionStateChangedEventArgs: any;
export const AppResourceGroupMemoryReport: any;
export const AppResourceGroupStateReport: any;
export const AppUriHandlerHost: any;
export const AppUriHandlerRegistration: any;
export const AppUriHandlerRegistrationManager: any;
export const DateTimeSettings: any;
export const DispatcherQueue: any;
export const DispatcherQueueController: any;
export const DispatcherQueueShutdownStartingEventArgs: any;
export const DispatcherQueueTimer: any;
export const FolderLauncherOptions: any;
export const ILauncherViewOptions: any;
export const KnownUserProperties: any;
export const LaunchUriResult: any;
export const Launcher: any;
export const LauncherOptions: any;
export const LauncherUIOptions: any;
export const MemoryManager: any;
export const ProcessLauncher: any;
export const ProcessLauncherOptions: any;
export const ProcessLauncherResult: any;
export const ProcessMemoryReport: any;
export const ProtocolForResultsOperation: any;
export const RemoteLauncher: any;
export const RemoteLauncherOptions: any;
export const ShutdownManager: any;
export const TimeZoneSettings: any;
export const User: any;
export const UserAuthenticationStatusChangeDeferral: any;
export const UserAuthenticationStatusChangingEventArgs: any;
export const UserChangedEventArgs: any;
export const UserDeviceAssociation: any;
export const UserDeviceAssociationChangedEventArgs: any;
export const UserPicker: any;
export const UserWatcher: any;
export * as diagnostics from "./system.diagnostics.js";
export * as display from "./system.display.js";
export * as implementation from "./system.implementation.js";
export * as inventory from "./system.inventory.js";
export * as power from "./system.power.js";
export * as profile from "./system.profile.js";
export * as remotedesktop from "./system.remotedesktop.js";
export * as remotesystems from "./system.remotesystems.js";
export * as threading from "./system.threading.js";
export * as update from "./system.update.js";
export * as userprofile from "./system.userprofile.js";
