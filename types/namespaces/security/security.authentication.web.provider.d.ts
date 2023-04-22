  export enum WebAccountProviderOperationKind {
    requestToken,
    getTokenSilently,
    addAccount,
    manageAccount,
    deleteAccount,
    retrieveCookies,
    signOutAccount,
  }

  export enum WebAccountSelectionOptions {
    default,
    new,
  }

  export enum WebAccountClientViewType {
    idOnly,
    idAndProperties,
  }

  export enum WebAccountScope {
    perUser,
    perApplication,
  }

  export class IWebAccountProviderOperation {
    kind: WebAccountProviderOperationKind;
    constructor();

  }

  export class WebProviderTokenRequest {
    applicationCallbackUri: Object;
    clientRequest: Object;
    webAccountSelectionOptions: WebAccountSelectionOptions;
    webAccounts: Object;
    applicationPackageFamilyName: string;
    applicationProcessName: string;
    constructor();

    getApplicationTokenBindingKeyAsync(keyType: number, target: Object, callback: (error: Error, result: Object) => void): void ;

    getApplicationTokenBindingKeyIdAsync(keyType: number, target: Object, callback: (error: Error, result: Object) => void): void ;

    checkApplicationForCapabilityAsync(capabilityName: string, callback: (error: Error, result: boolean) => void): void ;

  }

  export class WebProviderTokenResponse {
    clientResponse: Object;
    constructor();
    constructor(webTokenResponse: Object);

  }

  export class WebAccountClientView {
    accountPairwiseId: string;
    applicationCallbackUri: Object;
    type: WebAccountClientViewType;
    constructor();
    constructor(viewType: WebAccountClientViewType, applicationCallbackUri: Object);
    constructor(viewType: WebAccountClientViewType, applicationCallbackUri: Object, accountPairwiseId: string);

  }

  export class WebAccountManager {
    constructor();

    static invalidateAppCacheForAllAccountsAsync(callback: (error: Error) => void): void ;


    static invalidateAppCacheForAccountAsync(webAccount: Object, callback: (error: Error) => void): void ;


    static findAllProviderWebAccountsForUserAsync(user: Object, callback: (error: Error, result: Object) => void): void ;


    static addWebAccountForUserAsync(user: Object, webAccountId: string, webAccountUserName: string, props: Object, callback: (error: Error, result: Object) => void): void ;
    static addWebAccountForUserAsync(user: Object, webAccountId: string, webAccountUserName: string, props: Object, scope: WebAccountScope, callback: (error: Error, result: Object) => void): void ;
    static addWebAccountForUserAsync(user: Object, webAccountId: string, webAccountUserName: string, props: Object, scope: WebAccountScope, perUserWebAccountId: string, callback: (error: Error, result: Object) => void): void ;


    static addWebAccountAsync(webAccountId: string, webAccountUserName: string, props: Object, scope: WebAccountScope, perUserWebAccountId: string, callback: (error: Error, result: Object) => void): void ;
    static addWebAccountAsync(webAccountId: string, webAccountUserName: string, props: Object, scope: WebAccountScope, callback: (error: Error, result: Object) => void): void ;
    static addWebAccountAsync(webAccountId: string, webAccountUserName: string, props: Object, callback: (error: Error, result: Object) => void): void ;


    static setPerAppToPerUserAccountAsync(perAppAccount: Object, perUserWebAccountId: string, callback: (error: Error) => void): void ;


    static getPerUserFromPerAppAccountAsync(perAppAccount: Object, callback: (error: Error, result: Object) => void): void ;


    static clearPerUserFromPerAppAccountAsync(perAppAccount: Object, callback: (error: Error) => void): void ;


    static setScopeAsync(webAccount: Object, scope: WebAccountScope, callback: (error: Error) => void): void ;


    static pullCookiesAsync(uriString: string, callerPFN: string, callback: (error: Error) => void): void ;


    static updateWebAccountPropertiesAsync(webAccount: Object, webAccountUserName: string, additionalProperties: Object, callback: (error: Error) => void): void ;


    static deleteWebAccountAsync(webAccount: Object, callback: (error: Error) => void): void ;


    static findAllProviderWebAccountsAsync(callback: (error: Error, result: Object) => void): void ;


    static pushCookiesAsync(uri: Object, cookies: Object, callback: (error: Error) => void): void ;


    static setViewAsync(webAccount: Object, view: WebAccountClientView, callback: (error: Error) => void): void ;


    static clearViewAsync(webAccount: Object, applicationCallbackUri: Object, callback: (error: Error) => void): void ;


    static getViewsAsync(webAccount: Object, callback: (error: Error, result: Object) => void): void ;


    static setWebAccountPictureAsync(webAccount: Object, webAccountPicture: Object, callback: (error: Error) => void): void ;


    static clearWebAccountPictureAsync(webAccount: Object, callback: (error: Error) => void): void ;


    static getScope(webAccount: Object): WebAccountScope;


  }

  export class IWebAccountProviderBaseReportOperation {
    constructor();

    reportCompleted(): void;

    reportError(value: Object): void;

  }

  export class IWebAccountProviderUIReportOperation {
    constructor();

    reportUserCanceled(): void;

  }

  export class IWebAccountProviderSilentReportOperation {
    constructor();

    reportUserInteractionRequired(): void;
    reportUserInteractionRequired(value: Object): void;

  }

  export class IWebAccountProviderTokenOperation {
    cacheExpirationTime: Date;
    providerRequest: WebProviderTokenRequest;
    providerResponses: Object;
    constructor();

  }

  export class WebAccountProviderRequestTokenOperation {
    kind: WebAccountProviderOperationKind;
    cacheExpirationTime: Date;
    providerRequest: WebProviderTokenRequest;
    providerResponses: Object;
    constructor();

    reportUserCanceled(): void;

    reportCompleted(): void;

    reportError(value: Object): void;

  }

  export class WebAccountProviderGetTokenSilentOperation {
    kind: WebAccountProviderOperationKind;
    cacheExpirationTime: Date;
    providerRequest: WebProviderTokenRequest;
    providerResponses: Object;
    constructor();

    reportUserInteractionRequired(): void;
    reportUserInteractionRequired(value: Object): void;

    reportCompleted(): void;

    reportError(value: Object): void;

  }

  export class WebAccountProviderAddAccountOperation {
    kind: WebAccountProviderOperationKind;
    constructor();

    reportCompleted(): void;

  }

  export class WebAccountProviderManageAccountOperation {
    webAccount: Object;
    kind: WebAccountProviderOperationKind;
    constructor();

    reportCompleted(): void;

  }

  export class WebAccountProviderDeleteAccountOperation {
    webAccount: Object;
    kind: WebAccountProviderOperationKind;
    constructor();

    reportCompleted(): void;

    reportError(value: Object): void;

  }

  export class WebAccountProviderSignOutAccountOperation {
    kind: WebAccountProviderOperationKind;
    applicationCallbackUri: Object;
    clientId: string;
    webAccount: Object;
    constructor();

    reportCompleted(): void;

    reportError(value: Object): void;

  }

  export class WebAccountProviderRetrieveCookiesOperation {
    kind: WebAccountProviderOperationKind;
    uri: Object;
    applicationCallbackUri: Object;
    context: Object;
    cookies: Object;
    constructor();

    reportCompleted(): void;

    reportError(value: Object): void;

  }

  export class IWebAccountProviderTokenObjects {
    operation: IWebAccountProviderOperation;
    constructor();

  }

  export class IWebAccountProviderTokenObjects2 {
    user: Object;
    constructor();

  }

  export class WebAccountProviderTriggerDetails {
    operation: IWebAccountProviderOperation;
    user: Object;
    constructor();

  }

