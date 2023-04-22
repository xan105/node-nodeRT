  export enum DeviceAccountServerType {
    exchange,
    pop,
    imap,
  }

  export enum DeviceAccountAuthenticationType {
    basic,
    oAuth,
    singleSignOn,
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

  export enum DeviceAccountMailAgeFilter {
    all,
    last1Day,
    last3Days,
    last7Days,
    last14Days,
    last30Days,
    last90Days,
  }

  export enum DeviceAccountIconId {
    exchange,
    msa,
    outlook,
    generic,
  }

  export class DeviceAccountConfiguration {
    emailAddress: string;
    domain: string;
    deviceAccountTypeId: string;
    outgoingServerAddress: string;
    contactsSyncEnabled: boolean;
    calendarSyncEnabled: boolean;
    accountName: string;
    incomingServerUsername: string;
    incomingServerRequiresSsl: boolean;
    incomingServerPort: number;
    incomingServerAddress: string;
    emailSyncEnabled: boolean;
    serverType: DeviceAccountServerType;
    outgoingServerUsername: string;
    outgoingServerRequiresSsl: boolean;
    outgoingServerPort: number;
    accountIconId: DeviceAccountIconId;
    calDavServerUrl: Object;
    calDavRequiresSsl: boolean;
    autoSelectAuthenticationCertificate: boolean;
    authenticationType: DeviceAccountAuthenticationType;
    authenticationCertificateId: string;
    isOutgoingServerAuthenticationEnabled: boolean;
    isClientAuthenticationCertificateRequired: boolean;
    incomingServerCredential: Object;
    isOutgoingServerAuthenticationRequired: boolean;
    cardDavSyncScheduleKind: DeviceAccountSyncScheduleKind;
    alwaysDownloadFullMessage: boolean;
    cardDavServerUrl: Object;
    cardDavRequiresSsl: boolean;
    calDavSyncScheduleKind: DeviceAccountSyncScheduleKind;
    incomingServerCertificateHash: string;
    wasOutgoingServerCertificateHashConfirmed: boolean;
    wasModifiedByUser: boolean;
    syncScheduleKind: DeviceAccountSyncScheduleKind;
    ssoAccountId: string;
    wasIncomingServerCertificateHashConfirmed: boolean;
    oAuthRefreshToken: string;
    isExternallyManaged: boolean;
    mailAgeFilter: DeviceAccountMailAgeFilter;
    isSyncScheduleManagedBySystem: boolean;
    outgoingServerCertificateHash: string;
    outgoingServerCredential: Object;
    doesPolicyAllowMailSync: boolean;
    isSsoAuthenticationSupported: boolean;
    constructor();

  }

  export class UserDataAccountSystemAccessManager {
    constructor();

    static suppressLocalAccountWithAccountAsync(userDataAccountId: string, callback: (error: Error) => void): void ;


    static createDeviceAccountAsync(account: DeviceAccountConfiguration, callback: (error: Error, result: string) => void): void ;


    static deleteDeviceAccountAsync(accountId: string, callback: (error: Error) => void): void ;


    static getDeviceAccountConfigurationAsync(accountId: string, callback: (error: Error, result: DeviceAccountConfiguration) => void): void ;


    static addAndShowDeviceAccountsAsync(accounts: Object, callback: (error: Error, result: Object) => void): void ;


  }

