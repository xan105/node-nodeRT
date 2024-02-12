  export class IsolatedWindowsEnvironmentContract {
    constructor();
  }

  export class IsolatedWindowsEnvironmentCreateProgress {
    state: IsolatedWindowsEnvironmentProgressState;
    percentComplete: Number;
    constructor();
  }

  export enum IsolatedWindowsEnvironmentActivator {
    system,
    user,
  }

  export enum IsolatedWindowsEnvironmentAllowedClipboardFormats {
    none,
    text,
    image,
    rtf,
  }

  export enum IsolatedWindowsEnvironmentAvailablePrinters {
    none,
    local,
    network,
    systemPrintToPdf,
    systemPrintToXps,
  }

  export enum IsolatedWindowsEnvironmentClipboardCopyPasteDirections {
    none,
    hostToIsolatedWindowsEnvironment,
    isolatedWindowsEnvironmentToHost,
  }

  export enum IsolatedWindowsEnvironmentCreateStatus {
    success,
    failureByPolicy,
    unknownFailure,
  }

  export enum IsolatedWindowsEnvironmentCreationPriority {
    low,
    normal,
  }

  export enum IsolatedWindowsEnvironmentHostError {
    adminPolicyIsDisabledOrNotPresent,
    featureNotInstalled,
    hardwareRequirementsNotMet,
    rebootRequired,
    unknownError,
  }

  export enum IsolatedWindowsEnvironmentLaunchFileStatus {
    success,
    unknownFailure,
    environmentUnavailable,
    fileNotFound,
    timedOut,
    alreadySharedWithConflictingOptions,
  }

  export enum IsolatedWindowsEnvironmentOwnerRegistrationStatus {
    success,
    invalidArgument,
    accessDenied,
    insufficientMemory,
    unknownFailure,
  }

  export enum IsolatedWindowsEnvironmentPostMessageStatus {
    success,
    unknownFailure,
    environmentUnavailable,
  }

  export enum IsolatedWindowsEnvironmentProcessState {
    running,
    aborted,
    completed,
  }

  export enum IsolatedWindowsEnvironmentProgressState {
    queued,
    processing,
    completed,
    creating,
    retrying,
    starting,
    finalizing,
  }

  export enum IsolatedWindowsEnvironmentShareFileStatus {
    success,
    unknownFailure,
    environmentUnavailable,
    alreadySharedWithConflictingOptions,
    fileNotFound,
    accessDenied,
  }

  export enum IsolatedWindowsEnvironmentShareFolderStatus {
    success,
    unknownFailure,
    environmentUnavailable,
    folderNotFound,
    accessDenied,
  }

  export enum IsolatedWindowsEnvironmentSignInProgress {
    connecting,
    connected,
    authenticating,
    settingUpAccount,
    finalizing,
    completed,
  }

  export enum IsolatedWindowsEnvironmentStartProcessStatus {
    success,
    unknownFailure,
    environmentUnavailable,
    fileNotFound,
    appNotRegistered,
  }

  export class IsolatedWindowsEnvironment {
    id: String;
    constructor();

    static createAsync(options: IsolatedWindowsEnvironmentOptions, callback: (error: Error, result: IsolatedWindowsEnvironmentCreateResult) => void): void ;
    static createAsync(options: IsolatedWindowsEnvironmentOptions, telemetryParameters: IsolatedWindowsEnvironmentTelemetryParameters, callback: (error: Error, result: IsolatedWindowsEnvironmentCreateResult) => void): void ;


    static getById(environmentId: String): IsolatedWindowsEnvironment;


    static findByOwnerId(environmentOwnerId: String): Object;


    startProcessSilentlyAsync(hostExePath: String, arguments: String, activator: IsolatedWindowsEnvironmentActivator, callback: (error: Error, result: IsolatedWindowsEnvironmentStartProcessResult) => void): void ;
    startProcessSilentlyAsync(hostExePath: String, arguments: String, activator: IsolatedWindowsEnvironmentActivator, telemetryParameters: IsolatedWindowsEnvironmentTelemetryParameters, callback: (error: Error, result: IsolatedWindowsEnvironmentStartProcessResult) => void): void ;

    shareFolderAsync(hostFolder: String, requestOptions: IsolatedWindowsEnvironmentShareFolderRequestOptions, callback: (error: Error, result: IsolatedWindowsEnvironmentShareFolderResult) => void): void ;
    shareFolderAsync(hostFolder: String, requestOptions: IsolatedWindowsEnvironmentShareFolderRequestOptions, telemetryParameters: IsolatedWindowsEnvironmentTelemetryParameters, callback: (error: Error, result: IsolatedWindowsEnvironmentShareFolderResult) => void): void ;

    launchFileWithUIAsync(appExePath: String, argumentsTemplate: String, filePath: String, callback: (error: Error, result: IsolatedWindowsEnvironmentLaunchFileResult) => void): void ;
    launchFileWithUIAsync(appExePath: String, argumentsTemplate: String, filePath: String, telemetryParameters: IsolatedWindowsEnvironmentTelemetryParameters, callback: (error: Error, result: IsolatedWindowsEnvironmentLaunchFileResult) => void): void ;

    terminateAsync(callback: (error: Error) => void): void ;
    terminateAsync(telemetryParameters: IsolatedWindowsEnvironmentTelemetryParameters, callback: (error: Error) => void): void ;

    postMessageToReceiverAsync(receiverId: String, message: Object, callback: (error: Error, result: IsolatedWindowsEnvironmentPostMessageResult) => void): void ;
    postMessageToReceiverAsync(receiverId: String, message: Object, telemetryParameters: IsolatedWindowsEnvironmentTelemetryParameters, callback: (error: Error, result: IsolatedWindowsEnvironmentPostMessageResult) => void): void ;

    shareFileAsync(filePath: String, options: IsolatedWindowsEnvironmentShareFileRequestOptions, callback: (error: Error, result: IsolatedWindowsEnvironmentShareFileResult) => void): void ;
    shareFileAsync(filePath: String, options: IsolatedWindowsEnvironmentShareFileRequestOptions, telemetryParameters: IsolatedWindowsEnvironmentTelemetryParameters, callback: (error: Error, result: IsolatedWindowsEnvironmentShareFileResult) => void): void ;

    registerMessageReceiver(receiverId: String, messageReceivedCallback: Object): void;

    unregisterMessageReceiver(receiverId: String): void;

    getUserInfo(): IsolatedWindowsEnvironmentUserInfo;

    changePriority(Priority: IsolatedWindowsEnvironmentCreationPriority): void;

  }

  export class IsolatedWindowsEnvironmentCreateResult {
    environment: IsolatedWindowsEnvironment;
    extendedError: Number;
    status: IsolatedWindowsEnvironmentCreateStatus;
    constructor();

    changeCreationPriority(priority: IsolatedWindowsEnvironmentCreationPriority): void;

  }

  export class IsolatedWindowsEnvironmentFile {
    hostPath: String;
    id: String;
    guestPath: String;
    isReadOnly: Boolean;
    constructor();

    close(): void;

  }

  export class IsolatedWindowsEnvironmentHost {
    static hostErrors: Object;
    static isReady: Boolean;
    constructor();

  }

  export class IsolatedWindowsEnvironmentLaunchFileResult {
    extendedError: Number;
    file: IsolatedWindowsEnvironmentFile;
    status: IsolatedWindowsEnvironmentLaunchFileStatus;
    constructor();

  }

  export class IsolatedWindowsEnvironmentOptions {
    persistUserProfile: Boolean;
    environmentOwnerId: String;
    clipboardCopyPasteDirections: IsolatedWindowsEnvironmentClipboardCopyPasteDirections;
    availablePrinters: IsolatedWindowsEnvironmentAvailablePrinters;
    allowedClipboardFormats: IsolatedWindowsEnvironmentAllowedClipboardFormats;
    allowGraphicsHardwareAcceleration: Boolean;
    allowCameraAndMicrophoneAccess: Boolean;
    sharedFolderNameInEnvironment: String;
    sharedHostFolderPath: String;
    windowAnnotationOverride: String;
    creationPriority: IsolatedWindowsEnvironmentCreationPriority;
    allowedClipboardFormatsToHost: IsolatedWindowsEnvironmentAllowedClipboardFormats;
    allowedClipboardFormatsToEnvironment: IsolatedWindowsEnvironmentAllowedClipboardFormats;
    constructor();

    shareHostFolderForUntrustedItems(SharedHostFolderPath: String, ShareFolderNameInEnvironment: String): void;

  }

  export class IsolatedWindowsEnvironmentOwnerRegistration {
    constructor();

    static register(ownerName: String, ownerRegistrationData: IsolatedWindowsEnvironmentOwnerRegistrationData): IsolatedWindowsEnvironmentOwnerRegistrationResult;


    static unregister(ownerName: String): void;


  }

  export class IsolatedWindowsEnvironmentOwnerRegistrationData {
    activationFileExtensions: Object;
    processesRunnableAsSystem: Object;
    processesRunnableAsUser: Object;
    shareableFolders: Object;
    constructor();

  }

  export class IsolatedWindowsEnvironmentOwnerRegistrationResult {
    extendedError: Number;
    status: IsolatedWindowsEnvironmentOwnerRegistrationStatus;
    constructor();

  }

  export class IsolatedWindowsEnvironmentPostMessageResult {
    extendedError: Number;
    status: IsolatedWindowsEnvironmentPostMessageStatus;
    constructor();

  }

  export class IsolatedWindowsEnvironmentProcess {
    exitCode: Number;
    state: IsolatedWindowsEnvironmentProcessState;
    constructor();

    waitForExitAsync(callback: (error: Error) => void): void ;

    waitForExit(): void;

    waitForExitWithTimeout(timeoutMilliseconds: Number): void;

  }

  export class IsolatedWindowsEnvironmentShareFileRequestOptions {
    allowWrite: Boolean;
    constructor();

  }

  export class IsolatedWindowsEnvironmentShareFileResult {
    extendedError: Number;
    file: IsolatedWindowsEnvironmentFile;
    status: IsolatedWindowsEnvironmentShareFileStatus;
    constructor();

  }

  export class IsolatedWindowsEnvironmentShareFolderRequestOptions {
    allowWrite: Boolean;
    constructor();

  }

  export class IsolatedWindowsEnvironmentShareFolderResult {
    extendedError: Number;
    status: IsolatedWindowsEnvironmentShareFolderStatus;
    constructor();

  }

  export class IsolatedWindowsEnvironmentStartProcessResult {
    extendedError: Number;
    process: IsolatedWindowsEnvironmentProcess;
    status: IsolatedWindowsEnvironmentStartProcessStatus;
    constructor();

  }

  export class IsolatedWindowsEnvironmentTelemetryParameters {
    correlationId: String;
    constructor();

  }

  export class IsolatedWindowsEnvironmentUserInfo {
    environmentUserName: String;
    environmentUserSid: String;
    constructor();

    tryWaitForSignInAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryWaitForSignInWithProgressAsync(callback: (error: Error, result: Boolean) => void): void ;

  }

  export class IsolatedWindowsHostMessenger {
    constructor();

    static registerHostMessageReceiver(receiverId: String, hostMessageReceivedCallback: Object): void;


    static unregisterHostMessageReceiver(receiverId: String): void;


    static postMessageToReceiver(receiverId: String, message: Object): void;


    static getFileId(filePath: String): String;


  }

