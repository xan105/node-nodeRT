  export enum UserDataAccountProviderOperationKind {
    addAccount,
    settings,
    resolveErrors,
  }

  export enum UserDataAccountProviderPartnerAccountKind {
    exchange,
    popOrImap,
  }

  export class IUserDataAccountProviderOperation {
    kind: UserDataAccountProviderOperationKind;
    constructor();

  }

  export class UserDataAccountPartnerAccountInfo {
    accountKind: UserDataAccountProviderPartnerAccountKind;
    displayName: string;
    priority: number;
    constructor();

  }

  export class UserDataAccountProviderAddAccountOperation {
    contentKinds: number;
    partnerAccountInfos: Object;
    kind: UserDataAccountProviderOperationKind;
    constructor();

    reportCompleted(userDataAccountId: string): void;

  }

  export class UserDataAccountProviderSettingsOperation {
    kind: UserDataAccountProviderOperationKind;
    userDataAccountId: string;
    constructor();

    reportCompleted(): void;

  }

  export class UserDataAccountProviderResolveErrorsOperation {
    kind: UserDataAccountProviderOperationKind;
    userDataAccountId: string;
    constructor();

    reportCompleted(): void;

  }

