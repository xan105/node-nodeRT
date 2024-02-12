  export enum AppServiceClosedStatus {
    completed,
    canceled,
    resourceLimitsExceeded,
    unknown,
  }

  export enum AppServiceConnectionStatus {
    success,
    appNotInstalled,
    appUnavailable,
    appServiceUnavailable,
    unknown,
    remoteSystemUnavailable,
    remoteSystemNotSupportedByApp,
    notAuthorized,
    authenticationError,
    networkNotAvailable,
    disabledByPolicy,
    webServiceUnavailable,
  }

  export enum AppServiceResponseStatus {
    success,
    failure,
    resourceLimitsExceeded,
    unknown,
    remoteSystemUnavailable,
    messageSizeTooLarge,
    appUnavailable,
    authenticationError,
    networkNotAvailable,
    disabledByPolicy,
    webServiceUnavailable,
  }

  export enum StatelessAppServiceResponseStatus {
    success,
    appNotInstalled,
    appUnavailable,
    appServiceUnavailable,
    remoteSystemUnavailable,
    remoteSystemNotSupportedByApp,
    notAuthorized,
    resourceLimitsExceeded,
    messageSizeTooLarge,
    failure,
    unknown,
    authenticationError,
    networkNotAvailable,
    disabledByPolicy,
    webServiceUnavailable,
  }

  export class AppServiceCatalog {
    constructor();

    static findAppServiceProvidersAsync(appServiceName: String, callback: (error: Error, result: Object) => void): void ;


  }

  export class AppServiceClosedEventArgs {
    status: AppServiceClosedStatus;
    constructor();

  }

  export class AppServiceConnection {
    packageFamilyName: String;
    appServiceName: String;
    user: Object;
    constructor();

    static sendStatelessMessageAsync(connection: AppServiceConnection, connectionRequest: Object, message: Object, callback: (error: Error, result: StatelessAppServiceResponse) => void): void ;


    openAsync(callback: (error: Error, result: AppServiceConnectionStatus) => void): void ;

    sendMessageAsync(message: Object, callback: (error: Error, result: AppServiceResponse) => void): void ;

    openRemoteAsync(remoteSystemConnectionRequest: Object, callback: (error: Error, result: AppServiceConnectionStatus) => void): void ;

    close(): void;
    addListener(type: "RequestReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "RequestReceived", listener: (ev: Event) => void): void ;
    on(type: "RequestReceived", listener: (ev: Event) => void): void ;
    off(type: "RequestReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "ServiceClosed", listener: (ev: Event) => void): void ;
    removeListener(type: "ServiceClosed", listener: (ev: Event) => void): void ;
    on(type: "ServiceClosed", listener: (ev: Event) => void): void ;
    off(type: "ServiceClosed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppServiceDeferral {
    constructor();

    complete(): void;

  }

  export class AppServiceRequest {
    message: Object;
    constructor();

    sendResponseAsync(message: Object, callback: (error: Error, result: AppServiceResponseStatus) => void): void ;

  }

  export class AppServiceRequestReceivedEventArgs {
    request: AppServiceRequest;
    constructor();

    getDeferral(): AppServiceDeferral;

  }

  export class AppServiceResponse {
    message: Object;
    status: AppServiceResponseStatus;
    constructor();

  }

  export class AppServiceTriggerDetails {
    appServiceConnection: AppServiceConnection;
    callerPackageFamilyName: String;
    name: String;
    isRemoteSystemConnection: Boolean;
    callerRemoteConnectionToken: String;
    constructor();

    checkCallerForCapabilityAsync(capabilityName: String, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class StatelessAppServiceResponse {
    message: Object;
    status: StatelessAppServiceResponseStatus;
    constructor();

  }

