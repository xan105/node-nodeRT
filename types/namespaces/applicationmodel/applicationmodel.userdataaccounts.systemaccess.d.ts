  export enum DeviceAccountAuthenticationType {
    basic,
    oAuth,
    singleSignOn,
  }

  export enum DeviceAccountIconId {
    exchange,
    msa,
    outlook,
    generic,
  }

  export enum DeviceAccountMailAgeFilter {
    all,
    last1Day,
    last3Days,
    last7Days,
    last14Days,
    last30Days,
    last90Days,
  }

  export enum DeviceAccountServerType {
    exchange,
    pop,
    imap,
  }

  export enum DeviceAccountSyncScheduleKind {
    manual,
    every15Minutes,
    every30Minutes,
    every60Minutes,
    every2Hours,
    daily,
    asItemsArrive,
  }

  export class DeviceAccountConfiguration {
    emailAddress: String;
    domain: String;
    deviceAccountTypeId: String;
    outgoingServerAddress: String;
    contactsSyncEnabled: Boolean;
    calendarSyncEnabled: Boolean;
    accountName: String;
    incomingServerUsername: String;
    incomingServerRequiresSsl: Boolean;
    incomingServerPort: Number;
    incomingServerAddress: String;
    emailSyncEnabled: Boolean;
    serverType: DeviceAccountServerType;
    outgoingServerUsername: String;
    outgoingServerRequiresSsl: Boolean;
    outgoingServerPort: Number;
    accountIconId: DeviceAccountIconId;
    calDavServerUrl: Object;
    calDavRequiresSsl: Boolean;
    autoSelectAuthenticationCertificate: Boolean;
    authenticationType: DeviceAccountAuthenticationType;
    authenticationCertificateId: String;
    isOutgoingServerAuthenticationEnabled: Boolean;
    isClientAuthenticationCertificateRequired: Boolean;
    incomingServerCredential: Object;
    isOutgoingServerAuthenticationRequired: Boolean;
    cardDavSyncScheduleKind: DeviceAccountSyncScheduleKind;
    alwaysDownloadFullMessage: Boolean;
    cardDavServerUrl: Object;
    cardDavRequiresSsl: Boolean;
    calDavSyncScheduleKind: DeviceAccountSyncScheduleKind;
    incomingServerCertificateHash: String;
    wasOutgoingServerCertificateHashConfirmed: Boolean;
    wasModifiedByUser: Boolean;
    syncScheduleKind: DeviceAccountSyncScheduleKind;
    ssoAccountId: String;
    wasIncomingServerCertificateHashConfirmed: Boolean;
    oAuthRefreshToken: String;
    isExternallyManaged: Boolean;
    mailAgeFilter: DeviceAccountMailAgeFilter;
    isSyncScheduleManagedBySystem: Boolean;
    outgoingServerCertificateHash: String;
    outgoingServerCredential: Object;
    doesPolicyAllowMailSync: Boolean;
    isSsoAuthenticationSupported: Boolean;
    constructor();

  }

  export class UserDataAccountSystemAccessManager {
    constructor();

    static suppressLocalAccountWithAccountAsync(userDataAccountId: String, callback: (error: Error) => void): void ;


    static createDeviceAccountAsync(account: DeviceAccountConfiguration, callback: (error: Error, result: String) => void): void ;


    static deleteDeviceAccountAsync(accountId: String, callback: (error: Error) => void): void ;


    static getDeviceAccountConfigurationAsync(accountId: String, callback: (error: Error, result: DeviceAccountConfiguration) => void): void ;


    static addAndShowDeviceAccountsAsync(accounts: Object, callback: (error: Error, result: Object) => void): void ;


  }

