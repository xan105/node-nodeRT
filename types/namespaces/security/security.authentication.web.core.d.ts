  export enum WebTokenRequestPromptType {
    default,
    forceAuthentication,
  }

  export enum FindAllWebAccountsStatus {
    success,
    notAllowedByProvider,
    notSupportedByProvider,
    providerError,
  }

  export enum WebTokenRequestStatus {
    success,
    userCancel,
    accountSwitch,
    userInteractionRequired,
    accountProviderNotAvailable,
    providerError,
  }

  export class WebTokenRequest {
    clientId: string;
    promptType: WebTokenRequestPromptType;
    properties: Object;
    scope: string;
    webAccountProvider: Object;
    appProperties: Object;
    correlationId: string;
    constructor();
    constructor(provider: Object, scope: string, clientId: string);
    constructor(provider: Object, scope: string, clientId: string, promptType: WebTokenRequestPromptType);
    constructor(provider: Object);
    constructor(provider: Object, scope: string);

  }

  export class WebAccountEventArgs {
    account: Object;
    constructor();

  }

  export class FindAllAccountsResult {
    accounts: Object;
    providerError: WebProviderError;
    status: FindAllWebAccountsStatus;
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
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebAuthenticationCoreManager {
    constructor();

    static findAllAccountsAsync(provider: Object, callback: (error: Error, result: FindAllAccountsResult) => void): void ;
    static findAllAccountsAsync(provider: Object, clientId: string, callback: (error: Error, result: FindAllAccountsResult) => void): void ;


    static findSystemAccountProviderAsync(webAccountProviderId: string, callback: (error: Error, result: Object) => void): void ;
    static findSystemAccountProviderAsync(webAccountProviderId: string, authority: string, callback: (error: Error, result: Object) => void): void ;
    static findSystemAccountProviderAsync(webAccountProviderId: string, authority: string, user: Object, callback: (error: Error, result: Object) => void): void ;


    static findAccountProviderAsync(webAccountProviderId: string, authority: string, user: Object, callback: (error: Error, result: Object) => void): void ;
    static findAccountProviderAsync(webAccountProviderId: string, callback: (error: Error, result: Object) => void): void ;
    static findAccountProviderAsync(webAccountProviderId: string, authority: string, callback: (error: Error, result: Object) => void): void ;


    static getTokenSilentlyAsync(request: WebTokenRequest, callback: (error: Error, result: WebTokenRequestResult) => void): void ;
    static getTokenSilentlyAsync(request: WebTokenRequest, webAccount: Object, callback: (error: Error, result: WebTokenRequestResult) => void): void ;


    static requestTokenAsync(request: WebTokenRequest, callback: (error: Error, result: WebTokenRequestResult) => void): void ;
    static requestTokenAsync(request: WebTokenRequest, webAccount: Object, callback: (error: Error, result: WebTokenRequestResult) => void): void ;


    static findAccountAsync(provider: Object, webAccountId: string, callback: (error: Error, result: Object) => void): void ;


    static createWebAccountMonitor(webAccounts: Object): WebAccountMonitor;


  }

  export class WebProviderError {
    errorCode: number;
    errorMessage: string;
    properties: Object;
    constructor();
    constructor(errorCode: number, errorMessage: string);

  }

  export class WebTokenResponse {
    properties: Object;
    providerError: WebProviderError;
    token: string;
    webAccount: Object;
    constructor();
    constructor(token: string);
    constructor(token: string, webAccount: Object);
    constructor(token: string, webAccount: Object, error: WebProviderError);

  }

  export class WebTokenRequestResult {
    responseData: Object;
    responseError: WebProviderError;
    responseStatus: WebTokenRequestStatus;
    constructor();

    invalidateCacheAsync(callback: (error: Error) => void): void ;

  }

