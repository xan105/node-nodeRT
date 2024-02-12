  export enum CredentialPromptType {
    promptIfNeeded,
    retypeCredentials,
    doNotPrompt,
  }

  export enum OnlineIdSystemTicketStatus {
    success,
    error,
    serviceConnectionError,
  }

  export class OnlineIdAuthenticator {
    applicationId: String;
    authenticatedSafeCustomerId: String;
    canSignOut: Boolean;
    constructor();

    authenticateUserAsync(request: OnlineIdServiceTicketRequest, callback: (error: Error, result: UserIdentity) => void): void ;
    authenticateUserAsync(requests: Object, credentialPromptType: CredentialPromptType, callback: (error: Error, result: UserIdentity) => void): void ;

    signOutUserAsync(callback: (error: Error) => void): void ;

  }

  export class OnlineIdServiceTicket {
    errorCode: Number;
    request: OnlineIdServiceTicketRequest;
    value: String;
    constructor();

  }

  export class OnlineIdServiceTicketRequest {
    policy: String;
    service: String;
    constructor();
    constructor(service: String, policy: String);
    constructor(service: String);

  }

  export class OnlineIdSystemAuthenticator {
    static default: OnlineIdSystemAuthenticatorForUser;
    constructor();

    static getForUser(user: Object): OnlineIdSystemAuthenticatorForUser;


  }

  export class OnlineIdSystemAuthenticatorForUser {
    applicationId: String;
    user: Object;
    constructor();

    getTicketAsync(request: OnlineIdServiceTicketRequest, callback: (error: Error, result: OnlineIdSystemTicketResult) => void): void ;

  }

  export class OnlineIdSystemIdentity {
    id: String;
    ticket: OnlineIdServiceTicket;
    constructor();

  }

  export class OnlineIdSystemTicketResult {
    extendedError: Number;
    identity: OnlineIdSystemIdentity;
    status: OnlineIdSystemTicketStatus;
    constructor();

  }

  export class SignOutUserOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class UserAuthenticationOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): UserIdentity;

    cancel(): void;

    close(): void;

  }

  export class UserIdentity {
    firstName: String;
    id: String;
    isBetaAccount: Boolean;
    isConfirmedPC: Boolean;
    lastName: String;
    safeCustomerId: String;
    signInName: String;
    tickets: Object;
    constructor();

  }

