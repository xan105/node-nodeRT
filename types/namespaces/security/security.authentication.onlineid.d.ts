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

  export class OnlineIdServiceTicketRequest {
    policy: string;
    service: string;
    constructor();
    constructor(service: string, policy: string);
    constructor(service: string);

  }

  export class OnlineIdServiceTicket {
    errorCode: number;
    request: OnlineIdServiceTicketRequest;
    value: string;
    constructor();

  }

  export class UserAuthenticationOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): UserIdentity;

    cancel(): void;

    close(): void;

  }

  export class SignOutUserOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class UserIdentity {
    firstName: string;
    id: string;
    isBetaAccount: boolean;
    isConfirmedPC: boolean;
    lastName: string;
    safeCustomerId: string;
    signInName: string;
    tickets: Object;
    constructor();

  }

  export class OnlineIdAuthenticator {
    applicationId: string;
    authenticatedSafeCustomerId: string;
    canSignOut: boolean;
    constructor();

    authenticateUserAsync(request: OnlineIdServiceTicketRequest, callback: (error: Error, result: UserIdentity) => void): void ;
    authenticateUserAsync(requests: Object, credentialPromptType: CredentialPromptType, callback: (error: Error, result: UserIdentity) => void): void ;

    signOutUserAsync(callback: (error: Error) => void): void ;

  }

  export class OnlineIdSystemIdentity {
    id: string;
    ticket: OnlineIdServiceTicket;
    constructor();

  }

  export class OnlineIdSystemTicketResult {
    extendedError: number;
    identity: OnlineIdSystemIdentity;
    status: OnlineIdSystemTicketStatus;
    constructor();

  }

  export class OnlineIdSystemAuthenticatorForUser {
    applicationId: string;
    user: Object;
    constructor();

    getTicketAsync(request: OnlineIdServiceTicketRequest, callback: (error: Error, result: OnlineIdSystemTicketResult) => void): void ;

  }

  export class OnlineIdSystemAuthenticator {
    static default: OnlineIdSystemAuthenticatorForUser;
    constructor();

    static getForUser(user: Object): OnlineIdSystemAuthenticatorForUser;


  }

