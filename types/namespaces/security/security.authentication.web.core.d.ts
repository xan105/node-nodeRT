  export enum FindAllWebAccountsStatus {
    success,
    notAllowedByProvider,
    notSupportedByProvider,
    providerError,
  }

  export enum WebTokenRequestPromptType {
    default,
    forceAuthentication,
  }

  export enum WebTokenRequestStatus {
    success,
    userCancel,
    accountSwitch,
    userInteractionRequired,
    accountProviderNotAvailable,
    providerError,
  }

  export class FindAllAccountsResult {
    accounts: Object;
    providerError: WebProviderError;
    status: FindAllWebAccountsStatus;
    constructor();

  }

  export class WebAccountEventArgs {
    account: Object;
    constructor();

  }

  export class WebAccountMonitor {
    constructor();

    addListener(type: "DefaultSignInAccountChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DefaultSignInAccountChanged", listener: (ev: Event) => void): void ;
    on(type: "DefaultSignInAccountChanged", listener: (ev: Event) => void): void ;
    off(type: "DefaultSignInAccountChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccountPictureUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "AccountPictureUpdated", listener: (ev: Event) => void): void ;
    on(type: "AccountPictureUpdated", listener: (ev: Event) => void): void ;
    off(type: "AccountPictureUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebAuthenticationCoreManager {
    constructor();

    static findAllAccountsAsync(provider: Object, callback: (error: Error, result: FindAllAccountsResult) => void): void ;
    static findAllAccountsAsync(provider: Object, clientId: String, callback: (error: Error, result: FindAllAccountsResult) => void): void ;


    static findSystemAccountProviderAsync(webAccountProviderId: String, callback: (error: Error, result: Object) => void): void ;
    static findSystemAccountProviderAsync(webAccountProviderId: String, authority: String, callback: (error: Error, result: Object) => void): void ;
    static findSystemAccountProviderAsync(webAccountProviderId: String, authority: String, user: Object, callback: (error: Error, result: Object) => void): void ;


    static findAccountProviderAsync(webAccountProviderId: String, authority: String, user: Object, callback: (error: Error, result: Object) => void): void ;
    static findAccountProviderAsync(webAccountProviderId: String, callback: (error: Error, result: Object) => void): void ;
    static findAccountProviderAsync(webAccountProviderId: String, authority: String, callback: (error: Error, result: Object) => void): void ;


    static getTokenSilentlyAsync(request: WebTokenRequest, callback: (error: Error, result: WebTokenRequestResult) => void): void ;
    static getTokenSilentlyAsync(request: WebTokenRequest, webAccount: Object, callback: (error: Error, result: WebTokenRequestResult) => void): void ;


    static requestTokenAsync(request: WebTokenRequest, callback: (error: Error, result: WebTokenRequestResult) => void): void ;
    static requestTokenAsync(request: WebTokenRequest, webAccount: Object, callback: (error: Error, result: WebTokenRequestResult) => void): void ;


    static findAccountAsync(provider: Object, webAccountId: String, callback: (error: Error, result: Object) => void): void ;


    static createWebAccountMonitor(webAccounts: Object): WebAccountMonitor;


  }

  export class WebProviderError {
    errorCode: Number;
    errorMessage: String;
    properties: Object;
    constructor();
    constructor(errorCode: Number, errorMessage: String);

  }

  export class WebTokenRequest {
    clientId: String;
    promptType: WebTokenRequestPromptType;
    properties: Object;
    scope: String;
    webAccountProvider: Object;
    appProperties: Object;
    correlationId: String;
    constructor();
    constructor(provider: Object, scope: String, clientId: String);
    constructor(provider: Object, scope: String, clientId: String, promptType: WebTokenRequestPromptType);
    constructor(provider: Object);
    constructor(provider: Object, scope: String);

  }

  export class WebTokenRequestResult {
    responseData: Object;
    responseError: WebProviderError;
    responseStatus: WebTokenRequestStatus;
    constructor();

    invalidateCacheAsync(callback: (error: Error) => void): void ;

  }

  export class WebTokenResponse {
    properties: Object;
    providerError: WebProviderError;
    token: String;
    webAccount: Object;
    constructor();
    constructor(token: String);
    constructor(token: String, webAccount: Object);
    constructor(token: String, webAccount: Object, error: WebProviderError);

  }

