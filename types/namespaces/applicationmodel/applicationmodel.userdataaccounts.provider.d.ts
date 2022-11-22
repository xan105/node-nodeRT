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
    displayName: String;
    priority: Number;
    constructor();

  }

  export class UserDataAccountProviderAddAccountOperation {
    contentKinds: Number;
    partnerAccountInfos: Object;
    kind: UserDataAccountProviderOperationKind;
    constructor();

    reportCompleted(userDataAccountId: String): void;

  }

  export class UserDataAccountProviderSettingsOperation {
    kind: UserDataAccountProviderOperationKind;
    userDataAccountId: String;
    constructor();

    reportCompleted(): void;

  }

  export class UserDataAccountProviderResolveErrorsOperation {
    kind: UserDataAccountProviderOperationKind;
    userDataAccountId: String;
    constructor();

    reportCompleted(): void;

  }

