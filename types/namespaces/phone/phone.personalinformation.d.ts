  export enum ContactStoreSystemAccessMode {
    readOnly,
    readWrite,
  }

  export enum ContactStoreApplicationAccessMode {
    limitedReadOnly,
    readOnly,
  }

  export enum ContactChangeType {
    created,
    modified,
    deleted,
  }

  export enum ContactQueryResultOrdering {
    systemDefault,
    givenNameFamilyName,
    familyNameGivenName,
  }

  export enum VCardFormat {
    version2_1,
    version3,
  }

  export class ContactAddress {
    streetAddress: string;
    region: string;
    postalCode: string;
    locality: string;
    country: string;
    constructor();

  }

  export class IContactInformation {
    displayName: string;
    displayPicture: Object;
    familyName: string;
    givenName: string;
    honorificPrefix: string;
    honorificSuffix: string;
    constructor();

    getDisplayPictureAsync(callback: (error: Error, result: Object) => void): void ;

    setDisplayPictureAsync(stream: Object, callback: (error: Error) => void): void ;

    getPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    toVcardAsync(callback: (error: Error, result: Object) => void): void ;
    toVcardAsync(format: VCardFormat, callback: (error: Error, result: Object) => void): void ;

  }

  export class IContactInformation2 {
    displayPictureDate: Date;
    constructor();

  }

  export class ContactInformation {
    honorificSuffix: string;
    honorificPrefix: string;
    givenName: string;
    familyName: string;
    displayName: string;
    displayPicture: Object;
    constructor();

    static parseVcardAsync(vcard: Object, callback: (error: Error, result: ContactInformation) => void): void ;


    getDisplayPictureAsync(callback: (error: Error, result: Object) => void): void ;

    setDisplayPictureAsync(stream: Object, callback: (error: Error) => void): void ;

    getPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    toVcardAsync(callback: (error: Error, result: Object) => void): void ;
    toVcardAsync(format: VCardFormat, callback: (error: Error, result: Object) => void): void ;

  }

  export class ContactStore {
    revisionNumber: number;
    constructor();

    static createOrOpenAsync(callback: (error: Error, result: ContactStore) => void): void ;
    static createOrOpenAsync(access: ContactStoreSystemAccessMode, sharing: ContactStoreApplicationAccessMode, callback: (error: Error, result: ContactStore) => void): void ;


    findContactByRemoteIdAsync(id: string, callback: (error: Error, result: StoredContact) => void): void ;

    findContactByIdAsync(id: string, callback: (error: Error, result: StoredContact) => void): void ;

    deleteContactAsync(id: string, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    getChangesAsync(baseRevisionNumber: number, callback: (error: Error, result: Object) => void): void ;

    loadExtendedPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    saveExtendedPropertiesAsync(data: Object, callback: (error: Error) => void): void ;

    createMeContactAsync(id: string, callback: (error: Error, result: StoredContact) => void): void ;

    createContactQuery(): ContactQueryResult;
    createContactQuery(options: ContactQueryOptions): ContactQueryResult;

  }

  export class StoredContact {
    honorificSuffix: string;
    honorificPrefix: string;
    givenName: string;
    familyName: string;
    displayName: string;
    displayPicture: Object;
    displayPictureDate: Date;
    remoteId: string;
    id: string;
    store: ContactStore;
    constructor();
    constructor(store: ContactStore);
    constructor(store: ContactStore, contact: ContactInformation);

    getExtendedPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    replaceExistingContactAsync(id: string, callback: (error: Error) => void): void ;

    getDisplayPictureAsync(callback: (error: Error, result: Object) => void): void ;

    setDisplayPictureAsync(stream: Object, callback: (error: Error) => void): void ;

    getPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    toVcardAsync(callback: (error: Error, result: Object) => void): void ;
    toVcardAsync(format: VCardFormat, callback: (error: Error, result: Object) => void): void ;

  }

  export class KnownContactProperties {
    static additionalName: string;
    static address: string;
    static alternateMobileTelephone: string;
    static alternateTelephone: string;
    static alternateWorkTelephone: string;
    static anniversary: string;
    static birthdate: string;
    static children: string;
    static companyName: string;
    static companyTelephone: string;
    static displayName: string;
    static email: string;
    static familyName: string;
    static givenName: string;
    static homeFax: string;
    static honorificPrefix: string;
    static honorificSuffix: string;
    static jobTitle: string;
    static manager: string;
    static mobileTelephone: string;
    static nickname: string;
    static notes: string;
    static officeLocation: string;
    static otherAddress: string;
    static otherEmail: string;
    static significantOther: string;
    static telephone: string;
    static url: string;
    static workAddress: string;
    static workEmail: string;
    static workFax: string;
    static workTelephone: string;
    static yomiCompanyName: string;
    static yomiFamilyName: string;
    static yomiGivenName: string;
    constructor();

  }

  export class ContactQueryOptions {
    orderBy: ContactQueryResultOrdering;
    desiredFields: Object;
    constructor();

  }

  export class ContactQueryResult {
    constructor();

    getContactCountAsync(callback: (error: Error, result: number) => void): void ;

    getContactsAsync(callback: (error: Error, result: Object) => void): void ;
    getContactsAsync(startIndex: number, maxNumberOfItems: number, callback: (error: Error, result: Object) => void): void ;

    getCurrentQueryOptions(): ContactQueryOptions;

  }

  export class ContactChangeRecord {
    changeType: ContactChangeType;
    id: string;
    remoteId: string;
    revisionNumber: number;
    constructor();

  }

export * as provisioning from "./phone.personalinformation.provisioning.js";