  export enum UserDataAccountContentKinds {
    email,
    contact,
    appointment,
  }

  export enum UserDataAccountOtherAppReadAccess {
    systemOnly,
    full,
    none,
  }

  export enum UserDataAccountStoreAccessType {
    allAccountsReadOnly,
    appAccountsReadWrite,
  }

  export class UserDataAccount {
    userDisplayName: String;
    otherAppReadAccess: UserDataAccountOtherAppReadAccess;
    icon: Object;
    deviceAccountTypeId: String;
    id: String;
    packageFamilyName: String;
    isProtectedUnderLock: Boolean;
    enterpriseId: String;
    displayName: String;
    explictReadAccessPackageFamilyNames: Object;
    canShowCreateContactGroup: Boolean;
    providerProperties: Object;
    constructor();

    saveAsync(callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    findAppointmentCalendarsAsync(callback: (error: Error, result: Object) => void): void ;

    findEmailMailboxesAsync(callback: (error: Error, result: Object) => void): void ;

    findContactListsAsync(callback: (error: Error, result: Object) => void): void ;

    findContactAnnotationListsAsync(callback: (error: Error, result: Object) => void): void ;

    findUserDataTaskListsAsync(callback: (error: Error, result: Object) => void): void ;

    findContactGroupsAsync(callback: (error: Error, result: Object) => void): void ;

    tryShowCreateContactGroupAsync(callback: (error: Error, result: String) => void): void ;

  }

  export class UserDataAccountManager {
    constructor();

    static requestStoreAsync(storeAccessType: UserDataAccountStoreAccessType, callback: (error: Error, result: UserDataAccountStore) => void): void ;


    static showAddAccountAsync(contentKinds: UserDataAccountContentKinds, callback: (error: Error, result: String) => void): void ;


    static showAccountSettingsAsync(id: String, callback: (error: Error) => void): void ;


    static showAccountErrorResolverAsync(id: String, callback: (error: Error) => void): void ;


    static getForUser(user: Object): UserDataAccountManagerForUser;


  }

  export class UserDataAccountManagerForUser {
    user: Object;
    constructor();

    requestStoreAsync(storeAccessType: UserDataAccountStoreAccessType, callback: (error: Error, result: UserDataAccountStore) => void): void ;

  }

  export class UserDataAccountStore {
    constructor();

    findAccountsAsync(callback: (error: Error, result: Object) => void): void ;

    getAccountAsync(id: String, callback: (error: Error, result: UserDataAccount) => void): void ;

    createAccountAsync(userDisplayName: String, callback: (error: Error, result: UserDataAccount) => void): void ;
    createAccountAsync(userDisplayName: String, packageRelativeAppId: String, callback: (error: Error, result: UserDataAccount) => void): void ;
    createAccountAsync(userDisplayName: String, packageRelativeAppId: String, enterpriseId: String, callback: (error: Error, result: UserDataAccount) => void): void ;

    addListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    on(type: "StoreChanged", listener: (ev: Event) => void): void ;
    off(type: "StoreChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UserDataAccountStoreChangedEventArgs {
    constructor();

    getDeferral(): Object;

  }

export const UserDataAccountContentKinds: any;
export const UserDataAccountOtherAppReadAccess: any;
export const UserDataAccountStoreAccessType: any;
export const UserDataAccount: any;
export const UserDataAccountManager: any;
export const UserDataAccountManagerForUser: any;
export const UserDataAccountStore: any;
export const UserDataAccountStoreChangedEventArgs: any;
export * as provider from "./applicationmodel.userdataaccounts.provider.js";
export * as systemaccess from "./applicationmodel.userdataaccounts.systemaccess.js";
