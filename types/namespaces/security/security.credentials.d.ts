  export enum KeyCredentialStatus {
    success,
    unknownError,
    notFound,
    userCanceled,
    userPrefersPassword,
    credentialAlreadyExists,
    securityDeviceLocked,
  }

  export enum KeyCredentialAttestationStatus {
    success,
    unknownError,
    notSupported,
    temporaryFailure,
  }

  export enum KeyCredentialCreationOption {
    replaceExisting,
    failIfExists,
  }

  export enum WebAccountState {
    none,
    connected,
    error,
  }

  export enum WebAccountPictureSize {
    size64x64,
    size208x208,
    size424x424,
    size1080x1080,
  }

  export class KeyCredentialRetrievalResult {
    credential: KeyCredential;
    status: KeyCredentialStatus;
    constructor();

  }

  export class KeyCredentialOperationResult {
    result: Object;
    status: KeyCredentialStatus;
    constructor();

  }

  export class KeyCredentialAttestationResult {
    attestationBuffer: Object;
    certificateChainBuffer: Object;
    status: KeyCredentialAttestationStatus;
    constructor();

  }

  export class KeyCredential {
    name: string;
    constructor();

    requestSignAsync(data: Object, callback: (error: Error, result: KeyCredentialOperationResult) => void): void ;

    getAttestationAsync(callback: (error: Error, result: KeyCredentialAttestationResult) => void): void ;

    retrievePublicKey(): Object;
    retrievePublicKey(blobType: number): Object;

  }

  export class KeyCredentialManager {
    constructor();

    static isSupportedAsync(callback: (error: Error, result: boolean) => void): void ;


    static renewAttestationAsync(callback: (error: Error) => void): void ;


    static requestCreateAsync(name: string, option: KeyCredentialCreationOption, callback: (error: Error, result: KeyCredentialRetrievalResult) => void): void ;


    static openAsync(name: string, callback: (error: Error, result: KeyCredentialRetrievalResult) => void): void ;


    static deleteAsync(name: string, callback: (error: Error) => void): void ;


  }

  export class WebAccountProvider {
    displayName: string;
    iconUri: Object;
    id: string;
    authority: string;
    displayPurpose: string;
    user: Object;
    isSystemProvider: boolean;
    constructor();
    constructor(id: string, displayName: string, iconUri: Object);

  }

  export class WebAccount {
    state: WebAccountState;
    userName: string;
    webAccountProvider: WebAccountProvider;
    id: string;
    properties: Object;
    constructor();
    constructor(webAccountProvider: WebAccountProvider, userName: string, state: WebAccountState);

    getPictureAsync(desizedSize: WebAccountPictureSize, callback: (error: Error, result: Object) => void): void ;

    signOutAsync(callback: (error: Error) => void): void ;
    signOutAsync(clientId: string, callback: (error: Error) => void): void ;

  }

  export class IWebAccount {
    state: WebAccountState;
    userName: string;
    webAccountProvider: WebAccountProvider;
    constructor();

  }

  export class PasswordCredential {
    userName: string;
    resource: string;
    password: string;
    properties: Object;
    constructor();
    constructor(resource: string, userName: string, password: string);

    retrievePassword(): void;

  }

  export class PasswordVault {
    constructor();

    add(credential: PasswordCredential): void;

    remove(credential: PasswordCredential): void;

    retrieve(resource: string, userName: string): PasswordCredential;

    findAllByResource(resource: string): Object;

    findAllByUserName(userName: string): Object;

    retrieveAll(): Object;

  }

  export class PasswordCredentialPropertyStore {
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

    addListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    on(type: "MapChanged", listener: (ev: Event) => void): void ;
    off(type: "MapChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export * as ui from "./security.credentials.ui.js";