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

  export enum KeyCredentialStatus {
    success,
    unknownError,
    notFound,
    userCanceled,
    userPrefersPassword,
    credentialAlreadyExists,
    securityDeviceLocked,
  }

  export enum WebAccountPictureSize {
    size64x64,
    size208x208,
    size424x424,
    size1080x1080,
  }

  export enum WebAccountState {
    none,
    connected,
    error,
  }

  export class IWebAccount {
    state: WebAccountState;
    userName: String;
    webAccountProvider: WebAccountProvider;
    constructor();

  }

  export class KeyCredential {
    name: String;
    constructor();

    requestSignAsync(data: Object, callback: (error: Error, result: KeyCredentialOperationResult) => void): void ;

    getAttestationAsync(callback: (error: Error, result: KeyCredentialAttestationResult) => void): void ;

    retrievePublicKey(): Object;
    retrievePublicKey(blobType: Number): Object;

  }

  export class KeyCredentialAttestationResult {
    attestationBuffer: Object;
    certificateChainBuffer: Object;
    status: KeyCredentialAttestationStatus;
    constructor();

  }

  export class KeyCredentialManager {
    constructor();

    static isSupportedAsync(callback: (error: Error, result: Boolean) => void): void ;


    static renewAttestationAsync(callback: (error: Error) => void): void ;


    static requestCreateAsync(name: String, option: KeyCredentialCreationOption, callback: (error: Error, result: KeyCredentialRetrievalResult) => void): void ;


    static openAsync(name: String, callback: (error: Error, result: KeyCredentialRetrievalResult) => void): void ;


    static deleteAsync(name: String, callback: (error: Error) => void): void ;


  }

  export class KeyCredentialOperationResult {
    result: Object;
    status: KeyCredentialStatus;
    constructor();

  }

  export class KeyCredentialRetrievalResult {
    credential: KeyCredential;
    status: KeyCredentialStatus;
    constructor();

  }

  export class PasswordCredential {
    userName: String;
    resource: String;
    password: String;
    properties: Object;
    constructor();
    constructor(resource: String, userName: String, password: String);

    retrievePassword(): void;

  }

  export class PasswordCredentialPropertyStore {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

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

  export class PasswordVault {
    constructor();

    add(credential: PasswordCredential): void;

    remove(credential: PasswordCredential): void;

    retrieve(resource: String, userName: String): PasswordCredential;

    findAllByResource(resource: String): Object;

    findAllByUserName(userName: String): Object;

    retrieveAll(): Object;

  }

  export class WebAccount {
    state: WebAccountState;
    userName: String;
    webAccountProvider: WebAccountProvider;
    id: String;
    properties: Object;
    constructor();
    constructor(webAccountProvider: WebAccountProvider, userName: String, state: WebAccountState);

    getPictureAsync(desizedSize: WebAccountPictureSize, callback: (error: Error, result: Object) => void): void ;

    signOutAsync(callback: (error: Error) => void): void ;
    signOutAsync(clientId: String, callback: (error: Error) => void): void ;

  }

  export class WebAccountProvider {
    displayName: String;
    iconUri: Object;
    id: String;
    authority: String;
    displayPurpose: String;
    user: Object;
    isSystemProvider: Boolean;
    constructor();
    constructor(id: String, displayName: String, iconUri: Object);

  }

export const KeyCredentialAttestationStatus: any;
export const KeyCredentialCreationOption: any;
export const KeyCredentialStatus: any;
export const WebAccountPictureSize: any;
export const WebAccountState: any;
export const IWebAccount: any;
export const KeyCredential: any;
export const KeyCredentialAttestationResult: any;
export const KeyCredentialManager: any;
export const KeyCredentialOperationResult: any;
export const KeyCredentialRetrievalResult: any;
export const PasswordCredential: any;
export const PasswordCredentialPropertyStore: any;
export const PasswordVault: any;
export const WebAccount: any;
export const WebAccountProvider: any;
export * as ui from "./security.credentials.ui.js";
