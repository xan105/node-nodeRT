  export enum AuthenticationProtocol {
    basic,
    digest,
    ntlm,
    kerberos,
    negotiate,
    credSsp,
    custom,
  }

  export enum CredentialSaveOption {
    unselected,
    selected,
    hidden,
  }

  export enum UserConsentVerifierAvailability {
    available,
    deviceNotPresent,
    notConfiguredForUser,
    disabledByPolicy,
    deviceBusy,
  }

  export enum UserConsentVerificationResult {
    verified,
    deviceNotPresent,
    notConfiguredForUser,
    disabledByPolicy,
    deviceBusy,
    retriesExhausted,
    canceled,
  }

  export class CredentialPickerOptions {
    targetName: string;
    previousCredential: Object;
    message: string;
    errorCode: number;
    customAuthenticationProtocol: string;
    credentialSaveOption: CredentialSaveOption;
    caption: string;
    callerSavesCredential: boolean;
    authenticationProtocol: AuthenticationProtocol;
    alwaysDisplayDialog: boolean;
    constructor();

  }

  export class CredentialPickerResults {
    credential: Object;
    credentialDomainName: string;
    credentialPassword: string;
    credentialSaveOption: CredentialSaveOption;
    credentialSaved: boolean;
    credentialUserName: string;
    errorCode: number;
    constructor();

  }

  export class CredentialPicker {
    constructor();

    static pickAsync(options: CredentialPickerOptions, callback: (error: Error, result: CredentialPickerResults) => void): void ;
    static pickAsync(targetName: string, message: string, callback: (error: Error, result: CredentialPickerResults) => void): void ;
    static pickAsync(targetName: string, message: string, caption: string, callback: (error: Error, result: CredentialPickerResults) => void): void ;


  }

  export class UserConsentVerifier {
    constructor();

    static checkAvailabilityAsync(callback: (error: Error, result: UserConsentVerifierAvailability) => void): void ;


    static requestVerificationAsync(message: string, callback: (error: Error, result: UserConsentVerificationResult) => void): void ;


  }

