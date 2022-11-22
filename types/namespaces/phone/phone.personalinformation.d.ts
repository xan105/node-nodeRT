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
    streetAddress: String;
    region: String;
    postalCode: String;
    locality: String;
    country: String;
    constructor();

  }

  export class IContactInformation {
    displayName: String;
    displayPicture: Object;
    familyName: String;
    givenName: String;
    honorificPrefix: String;
    honorificSuffix: String;
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
    honorificSuffix: String;
    honorificPrefix: String;
    givenName: String;
    familyName: String;
    displayName: String;
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
    revisionNumber: Number;
    constructor();

    static createOrOpenAsync(callback: (error: Error, result: ContactStore) => void): void ;
    static createOrOpenAsync(access: ContactStoreSystemAccessMode, sharing: ContactStoreApplicationAccessMode, callback: (error: Error, result: ContactStore) => void): void ;


    findContactByRemoteIdAsync(id: String, callback: (error: Error, result: StoredContact) => void): void ;

    findContactByIdAsync(id: String, callback: (error: Error, result: StoredContact) => void): void ;

    deleteContactAsync(id: String, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    getChangesAsync(baseRevisionNumber: Number, callback: (error: Error, result: Object) => void): void ;

    loadExtendedPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    saveExtendedPropertiesAsync(data: Object, callback: (error: Error) => void): void ;

    createMeContactAsync(id: String, callback: (error: Error, result: StoredContact) => void): void ;

    createContactQuery(): ContactQueryResult;
    createContactQuery(options: ContactQueryOptions): ContactQueryResult;

  }

  export class StoredContact {
    honorificSuffix: String;
    honorificPrefix: String;
    givenName: String;
    familyName: String;
    displayName: String;
    displayPicture: Object;
    displayPictureDate: Date;
    remoteId: String;
    id: String;
    store: ContactStore;
    constructor();
    constructor(store: ContactStore);
    constructor(store: ContactStore, contact: ContactInformation);

    getExtendedPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    replaceExistingContactAsync(id: String, callback: (error: Error) => void): void ;

    getDisplayPictureAsync(callback: (error: Error, result: Object) => void): void ;

    setDisplayPictureAsync(stream: Object, callback: (error: Error) => void): void ;

    getPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    toVcardAsync(callback: (error: Error, result: Object) => void): void ;
    toVcardAsync(format: VCardFormat, callback: (error: Error, result: Object) => void): void ;

  }

  export class KnownContactProperties {
    static additionalName: String;
    static address: String;
    static alternateMobileTelephone: String;
    static alternateTelephone: String;
    static alternateWorkTelephone: String;
    static anniversary: String;
    static birthdate: String;
    static children: String;
    static companyName: String;
    static companyTelephone: String;
    static displayName: String;
    static email: String;
    static familyName: String;
    static givenName: String;
    static homeFax: String;
    static honorificPrefix: String;
    static honorificSuffix: String;
    static jobTitle: String;
    static manager: String;
    static mobileTelephone: String;
    static nickname: String;
    static notes: String;
    static officeLocation: String;
    static otherAddress: String;
    static otherEmail: String;
    static significantOther: String;
    static telephone: String;
    static url: String;
    static workAddress: String;
    static workEmail: String;
    static workFax: String;
    static workTelephone: String;
    static yomiCompanyName: String;
    static yomiFamilyName: String;
    static yomiGivenName: String;
    constructor();

  }

  export class ContactQueryOptions {
    orderBy: ContactQueryResultOrdering;
    desiredFields: Object;
    constructor();

  }

  export class ContactQueryResult {
    constructor();

    getContactCountAsync(callback: (error: Error, result: Number) => void): void ;

    getContactsAsync(callback: (error: Error, result: Object) => void): void ;
    getContactsAsync(startIndex: Number, maxNumberOfItems: Number, callback: (error: Error, result: Object) => void): void ;

    getCurrentQueryOptions(): ContactQueryOptions;

  }

  export class ContactChangeRecord {
    changeType: ContactChangeType;
    id: String;
    remoteId: String;
    revisionNumber: Number;
    constructor();

  }

export * as provisioning from "./phone.personalinformation.provisioning.js";