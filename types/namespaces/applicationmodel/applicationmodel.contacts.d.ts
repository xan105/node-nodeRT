  export class TextSegment {
    startPosition: Number;
    length: Number;
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum ContactSelectionMode {
    contacts,
    fields,
  }

  export enum ContactChangeType {
    created,
    modified,
    deleted,
    changeTrackingLost,
  }

  export enum ContactQueryDesiredFields {
    none,
    phoneNumber,
    emailAddress,
    postalAddress,
  }

  export enum ContactQuerySearchFields {
    none,
    name,
    email,
    phone,
    all,
  }

  export enum ContactQuerySearchScope {
    local,
    server,
  }

  export enum ContactStoreAccessType {
    appContactsReadWrite,
    allContactsReadOnly,
    allContactsReadWrite,
  }

  export enum ContactAnnotationStoreAccessType {
    appAnnotationsReadWrite,
    allAnnotationsReadWrite,
  }

  export enum ContactListOtherAppReadAccess {
    systemOnly,
    limited,
    full,
    none,
  }

  export enum ContactListOtherAppWriteAccess {
    none,
    systemOnly,
    limited,
  }

  export enum ContactMatchReasonKind {
    name,
    emailAddress,
    phoneNumber,
    jobInfo,
    yomiName,
    other,
  }

  export enum ContactBatchStatus {
    success,
    serverSearchSyncManagerError,
    serverSearchUnknownError,
  }

  export enum ContactAnnotationOperations {
    none,
    contactProfile,
    message,
    audioCall,
    videoCall,
    socialFeeds,
    share,
  }

  export enum ContactNameOrder {
    firstNameLastName,
    lastNameFirstName,
  }

  export enum ContactListSyncStatus {
    idle,
    syncing,
    upToDate,
    authenticationError,
    policyError,
    unknownError,
    manualAccountRemovalRequired,
  }

  export enum ContactCardHeaderKind {
    default,
    basic,
    enterprise,
  }

  export enum ContactCardTabKind {
    default,
    email,
    messaging,
    phone,
    video,
    organizationalHierarchy,
  }

  export enum ContactFieldType {
    email,
    phoneNumber,
    location,
    instantMessage,
    custom,
    connectedServiceAccount,
    importantDate,
    address,
    significantOther,
    notes,
    website,
    jobInfo,
  }

  export enum ContactEmailKind {
    personal,
    work,
    other,
  }

  export enum ContactPhoneKind {
    home,
    mobile,
    work,
    other,
    pager,
    businessFax,
    homeFax,
    company,
    assistant,
    radio,
  }

  export enum ContactAddressKind {
    home,
    work,
    other,
  }

  export enum ContactDateKind {
    birthday,
    anniversary,
    other,
  }

  export enum ContactRelationship {
    other,
    spouse,
    partner,
    sibling,
    parent,
    child,
  }

  export enum ContactFieldCategory {
    none,
    home,
    work,
    mobile,
    other,
  }

  export enum PinnedContactSurface {
    startMenu,
    taskbar,
  }

  export class ContactCardDelayedDataLoader {
    constructor();

    setData(contact: Contact): void;

    close(): void;
  }

  export class ContactStore {
    aggregateContactManager: AggregateContactManager;
    changeTracker: ContactChangeTracker;
    constructor();

    findContactsAsync(callback: (error: Error, result: Object) => void): void ;
    findContactsAsync(searchText: String, callback: (error: Error, result: Object) => void): void ;

    getContactAsync(contactId: String, callback: (error: Error, result: Contact) => void): void ;

    findContactListsAsync(callback: (error: Error, result: Object) => void): void ;

    getContactListAsync(contactListId: String, callback: (error: Error, result: ContactList) => void): void ;

    createContactListAsync(displayName: String, callback: (error: Error, result: ContactList) => void): void ;
    createContactListAsync(displayName: String, userDataAccountId: String, callback: (error: Error, result: ContactList) => void): void ;

    getMeContactAsync(callback: (error: Error, result: Contact) => void): void ;

    getContactReader(): ContactReader;
    getContactReader(options: ContactQueryOptions): ContactReader;

    getChangeTracker(identity: String): ContactChangeTracker;

    addListener(type: "ContactChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContactChanged", listener: (ev: Event) => void): void ;
    on(type: "ContactChanged", listener: (ev: Event) => void): void ;
    off(type: "ContactChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ContactAnnotationStore {
    constructor();

    findContactIdsByEmailAsync(emailAddress: String, callback: (error: Error, result: Object) => void): void ;

    findContactIdsByPhoneNumberAsync(phoneNumber: String, callback: (error: Error, result: Object) => void): void ;

    findAnnotationsForContactAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;

    disableAnnotationAsync(annotation: ContactAnnotation, callback: (error: Error) => void): void ;

    createAnnotationListAsync(callback: (error: Error, result: ContactAnnotationList) => void): void ;
    createAnnotationListAsync(userDataAccountId: String, callback: (error: Error, result: ContactAnnotationList) => void): void ;

    getAnnotationListAsync(annotationListId: String, callback: (error: Error, result: ContactAnnotationList) => void): void ;

    findAnnotationListsAsync(callback: (error: Error, result: Object) => void): void ;

    findAnnotationsForContactListAsync(contactListId: String, callback: (error: Error, result: Object) => void): void ;

  }

  export class ContactCardOptions {
    initialTabKind: ContactCardTabKind;
    headerKind: ContactCardHeaderKind;
    serverSearchContactListIds: Object;
    constructor();

  }

  export class FullContactCardOptions {
    desiredRemainingView: Number;
    constructor();

  }

  export class ContactManagerForUser {
    systemSortOrder: ContactNameOrder;
    systemDisplayNameOrder: ContactNameOrder;
    user: Object;
    constructor();

    convertContactToVCardAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;
    convertContactToVCardAsync(contact: Contact, maxBytes: Number, callback: (error: Error, result: Object) => void): void ;

    convertVCardToContactAsync(vCard: Object, callback: (error: Error, result: Contact) => void): void ;

    requestStoreAsync(accessType: ContactStoreAccessType, callback: (error: Error, result: ContactStore) => void): void ;

    requestAnnotationStoreAsync(accessType: ContactAnnotationStoreAccessType, callback: (error: Error, result: ContactAnnotationStore) => void): void ;

    showFullContactCard(contact: Contact, fullContactCardOptions: FullContactCardOptions): void;

  }

  export class ContactAnnotation {
    supportedOperations: ContactAnnotationOperations;
    remoteId: String;
    contactId: String;
    annotationListId: String;
    id: String;
    isDisabled: Boolean;
    providerProperties: Object;
    contactListId: String;
    constructor();

  }

  export class ContactAnnotationList {
    id: String;
    providerPackageFamilyName: String;
    userDataAccountId: String;
    constructor();

    deleteAsync(callback: (error: Error) => void): void ;

    trySaveAnnotationAsync(annotation: ContactAnnotation, callback: (error: Error, result: Boolean) => void): void ;

    getAnnotationAsync(annotationId: String, callback: (error: Error, result: ContactAnnotation) => void): void ;

    findAnnotationsByRemoteIdAsync(remoteId: String, callback: (error: Error, result: Object) => void): void ;

    findAnnotationsAsync(callback: (error: Error, result: Object) => void): void ;

    deleteAnnotationAsync(annotation: ContactAnnotation, callback: (error: Error) => void): void ;

  }

  export class ContactChangeTracker {
    isTracking: Boolean;
    constructor();

    enable(): void;

    getChangeReader(): ContactChangeReader;

    reset(): void;

  }

  export class ContactChangedEventArgs {
    constructor();

    getDeferral(): ContactChangedDeferral;

  }

  export class AggregateContactManager {
    constructor();

    findRawContactsAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;

    tryLinkContactsAsync(primaryContact: Contact, secondaryContact: Contact, callback: (error: Error, result: Contact) => void): void ;

    unlinkRawContactAsync(contact: Contact, callback: (error: Error) => void): void ;

    trySetPreferredSourceForPictureAsync(aggregateContact: Contact, rawContact: Contact, callback: (error: Error, result: Boolean) => void): void ;

    setRemoteIdentificationInformationAsync(contactListId: String, remoteSourceId: String, accountId: String, callback: (error: Error) => void): void ;

  }

  export class ContactList {
    supportsServerSearch: Boolean;
    isHidden: Boolean;
    otherAppWriteAccess: ContactListOtherAppWriteAccess;
    displayName: String;
    otherAppReadAccess: ContactListOtherAppReadAccess;
    changeTracker: ContactChangeTracker;
    sourceDisplayName: String;
    id: String;
    syncManager: ContactListSyncManager;
    userDataAccountId: String;
    syncConstraints: ContactListSyncConstraints;
    limitedWriteOperations: ContactListLimitedWriteOperations;
    constructor();

    saveAsync(callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    getContactFromRemoteIdAsync(remoteId: String, callback: (error: Error, result: Contact) => void): void ;

    getMeContactAsync(callback: (error: Error, result: Contact) => void): void ;

    saveContactAsync(contact: Contact, callback: (error: Error) => void): void ;

    deleteContactAsync(contact: Contact, callback: (error: Error) => void): void ;

    getContactAsync(contactId: String, callback: (error: Error, result: Contact) => void): void ;

    registerSyncManagerAsync(callback: (error: Error) => void): void ;

    getContactReader(): ContactReader;
    getContactReader(options: ContactQueryOptions): ContactReader;

    getChangeTracker(identity: String): ContactChangeTracker;

    addListener(type: "ContactChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContactChanged", listener: (ev: Event) => void): void ;
    on(type: "ContactChanged", listener: (ev: Event) => void): void ;
    off(type: "ContactChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ContactReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: ContactBatch) => void): void ;

    getMatchingPropertiesWithMatchReason(contact: Contact): Object;

  }

  export class ContactQueryOptions {
    includeContactsFromHiddenLists: Boolean;
    desiredOperations: ContactAnnotationOperations;
    desiredFields: ContactQueryDesiredFields;
    annotationListIds: Object;
    contactListIds: Object;
    textSearch: ContactQueryTextSearch;
    constructor();
    constructor(text: String);
    constructor(text: String, fields: ContactQuerySearchFields);

  }

  export class ContactListSyncManager {
    status: ContactListSyncStatus;
    lastSuccessfulSyncTime: Date;
    lastAttemptedSyncTime: Date;
    constructor();

    syncAsync(callback: (error: Error, result: Boolean) => void): void ;

    addListener(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ContactListSyncConstraints {
    canSyncDescriptions: Boolean;
    maxCompanyPhoneNumbers: Number;
    maxChildRelationships: Number;
    maxBusinessFaxPhoneNumbers: Number;
    maxBirthdayDates: Number;
    maxAssistantPhoneNumbers: Number;
    maxOtherAddresses: Number;
    maxAnniversaryDates: Number;
    maxHomeAddresses: Number;
    maxOtherDates: Number;
    maxMobilePhoneNumbers: Number;
    maxJobInfo: Number;
    maxHomePhoneNumbers: Number;
    maxHomeFaxPhoneNumbers: Number;
    maxOtherEmailAddresses: Number;
    maxPersonalEmailAddresses: Number;
    maxPartnerRelationships: Number;
    maxParentRelationships: Number;
    maxPagerPhoneNumbers: Number;
    maxOtherRelationships: Number;
    maxOtherPhoneNumbers: Number;
    maxRadioPhoneNumbers: Number;
    maxWorkPhoneNumbers: Number;
    maxWorkEmailAddresses: Number;
    maxWorkAddresses: Number;
    maxWebsites: Number;
    maxSpouseRelationships: Number;
    maxSiblingRelationships: Number;
    constructor();

  }

  export class ContactListLimitedWriteOperations {
    constructor();

    tryCreateOrUpdateContactAsync(contact: Contact, callback: (error: Error, result: Boolean) => void): void ;

    tryDeleteContactAsync(contactId: String, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class ContactChangedDeferral {
    constructor();

    complete(): void;

  }

  export class ContactChange {
    changeType: ContactChangeType;
    contact: Contact;
    constructor();

  }

  export class ContactChangeReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;

    acceptChanges(): void;

    acceptChangesThrough(lastChangeToAccept: ContactChange): void;

  }

  export class ContactBatch {
    contacts: Object;
    status: ContactBatchStatus;
    constructor();

  }

  export class ContactMatchReason {
    field: ContactMatchReasonKind;
    segments: Object;
    text: String;
    constructor();

  }

  export class ContactQueryTextSearch {
    text: String;
    searchScope: ContactQuerySearchScope;
    fields: ContactQuerySearchFields;
    constructor();

  }

  export class ContactStoreNotificationTriggerDetails {
    constructor();

  }

  export class ContactManager {
    static systemSortOrder: ContactNameOrder;
    static systemDisplayNameOrder: ContactNameOrder;
    static includeMiddleNameInSystemDisplayAndSort: Boolean;
    constructor();

    static isShowFullContactCardSupportedAsync(callback: (error: Error, result: Boolean) => void): void ;


    static convertContactToVCardAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;
    static convertContactToVCardAsync(contact: Contact, maxBytes: Number, callback: (error: Error, result: Object) => void): void ;


    static convertVCardToContactAsync(vCard: Object, callback: (error: Error, result: Contact) => void): void ;


    static requestStoreAsync(accessType: ContactStoreAccessType, callback: (error: Error, result: ContactStore) => void): void ;
    static requestStoreAsync(callback: (error: Error, result: ContactStore) => void): void ;


    static requestAnnotationStoreAsync(accessType: ContactAnnotationStoreAccessType, callback: (error: Error, result: ContactAnnotationStore) => void): void ;


    static getForUser(user: Object): ContactManagerForUser;


    static isShowContactCardSupported(): Boolean;


    static showContactCard(contact: Contact, selection: Object, preferredPlacement: Number, contactCardOptions: ContactCardOptions): void;
    static showContactCard(contact: Contact, selection: Object): void;
    static showContactCard(contact: Contact, selection: Object, preferredPlacement: Number): void;


    static isShowDelayLoadedContactCardSupported(): Boolean;


    static showDelayLoadedContactCard(contact: Contact, selection: Object, preferredPlacement: Number, contactCardOptions: ContactCardOptions): ContactCardDelayedDataLoader;
    static showDelayLoadedContactCard(contact: Contact, selection: Object, preferredPlacement: Number): ContactCardDelayedDataLoader;


    static showFullContactCard(contact: Contact, fullContactCardOptions: FullContactCardOptions): void;


  }

  export class ContactLaunchActionVerbs {
    static call: String;
    static map: String;
    static message: String;
    static post: String;
    static videoCall: String;
    constructor();

  }

  export class ContactGroup {
    constructor();

  }

  export class ContactPicker {
    selectionMode: ContactSelectionMode;
    commitButtonText: String;
    desiredFields: Object;
    desiredFieldsWithContactFieldType: Object;
    user: Object;
    constructor();

    static isSupportedAsync(callback: (error: Error, result: Boolean) => void): void ;


    static createForUser(user: Object): ContactPicker;


    pickSingleContactAsync(callback: (error: Error, result: ContactInformation) => void): void ;

    pickMultipleContactsAsync(callback: (error: Error, result: Object) => void): void ;

    pickContactAsync(callback: (error: Error, result: Contact) => void): void ;

    pickContactsAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class IContactField {
    category: ContactFieldCategory;
    name: String;
    type: ContactFieldType;
    value: String;
    constructor();

  }

  export class ContactPhone {
    number: String;
    kind: ContactPhoneKind;
    description: String;
    constructor();

  }

  export class ContactEmail {
    kind: ContactEmailKind;
    description: String;
    address: String;
    constructor();

  }

  export class ContactAddress {
    streetAddress: String;
    region: String;
    postalCode: String;
    locality: String;
    kind: ContactAddressKind;
    description: String;
    country: String;
    constructor();

  }

  export class ContactConnectedServiceAccount {
    serviceName: String;
    id: String;
    constructor();

  }

  export class ContactDate {
    year: Number;
    month: Number;
    kind: ContactDateKind;
    description: String;
    day: Number;
    constructor();

  }

  export class ContactJobInfo {
    title: String;
    office: String;
    manager: String;
    description: String;
    department: String;
    companyYomiName: String;
    companyName: String;
    companyAddress: String;
    constructor();

  }

  export class ContactSignificantOther {
    name: String;
    description: String;
    relationship: ContactRelationship;
    constructor();

  }

  export class ContactWebsite {
    uri: Object;
    description: String;
    rawValue: String;
    constructor();

  }

  export class Contact {
    thumbnail: Object;
    name: String;
    fields: Object;
    id: String;
    notes: String;
    connectedServiceAccounts: Object;
    emails: Object;
    addresses: Object;
    importantDates: Object;
    jobInfo: Object;
    dataSuppliers: Object;
    phones: Object;
    providerProperties: Object;
    significantOthers: Object;
    websites: Object;
    sourceDisplayPicture: Object;
    textToneToken: String;
    displayNameOverride: String;
    displayPictureUserUpdateTime: Date;
    nickname: String;
    remoteId: String;
    ringToneToken: String;
    contactListId: String;
    largeDisplayPicture: Object;
    smallDisplayPicture: Object;
    sortName: String;
    aggregateId: String;
    fullName: String;
    isAggregate: Boolean;
    isDisplayPictureManuallySet: Boolean;
    isMe: Boolean;
    yomiGivenName: String;
    honorificNameSuffix: String;
    yomiFamilyName: String;
    middleName: String;
    lastName: String;
    honorificNamePrefix: String;
    firstName: String;
    displayName: String;
    yomiDisplayName: String;
    constructor();

  }

  export class ContactField {
    category: ContactFieldCategory;
    name: String;
    type: ContactFieldType;
    value: String;
    constructor();
    constructor(value: String, type: ContactFieldType);
    constructor(value: String, type: ContactFieldType, category: ContactFieldCategory);
    constructor(name: String, value: String, type: ContactFieldType, category: ContactFieldCategory);

  }

  export class ContactLocationField {
    category: ContactFieldCategory;
    name: String;
    type: ContactFieldType;
    value: String;
    city: String;
    country: String;
    postalCode: String;
    region: String;
    street: String;
    unstructuredAddress: String;
    constructor();
    constructor(unstructuredAddress: String);
    constructor(unstructuredAddress: String, category: ContactFieldCategory);
    constructor(unstructuredAddress: String, category: ContactFieldCategory, street: String, city: String, region: String, country: String, postalCode: String);

  }

  export class ContactInstantMessageField {
    category: ContactFieldCategory;
    name: String;
    type: ContactFieldType;
    value: String;
    displayText: String;
    launchUri: Object;
    service: String;
    userName: String;
    constructor();
    constructor(userName: String);
    constructor(userName: String, category: ContactFieldCategory);
    constructor(userName: String, category: ContactFieldCategory, service: String, displayText: String, verb: Object);

  }

  export class KnownContactField {
    static email: String;
    static instantMessage: String;
    static location: String;
    static phoneNumber: String;
    constructor();

    static convertNameToType(name: String): ContactFieldType;


    static convertTypeToName(type: ContactFieldType): String;


  }

  export class ContactInformation {
    customFields: Object;
    emails: Object;
    instantMessages: Object;
    locations: Object;
    name: String;
    phoneNumbers: Object;
    constructor();

    getThumbnailAsync(callback: (error: Error, result: Object) => void): void ;

    queryCustomFields(customName: String): Object;

  }

  export class IContactFieldFactory {
    constructor();

    createField(value: String, type: ContactFieldType): ContactField;
    createField(value: String, type: ContactFieldType, category: ContactFieldCategory): ContactField;
    createField(name: String, value: String, type: ContactFieldType, category: ContactFieldCategory): ContactField;

  }

  export class IContactLocationFieldFactory {
    constructor();

    createLocation(unstructuredAddress: String): ContactLocationField;
    createLocation(unstructuredAddress: String, category: ContactFieldCategory): ContactLocationField;
    createLocation(unstructuredAddress: String, category: ContactFieldCategory, street: String, city: String, region: String, country: String, postalCode: String): ContactLocationField;

  }

  export class IContactInstantMessageFieldFactory {
    constructor();

    createInstantMessage(userName: String): ContactInstantMessageField;
    createInstantMessage(userName: String, category: ContactFieldCategory): ContactInstantMessageField;
    createInstantMessage(userName: String, category: ContactFieldCategory, service: String, displayText: String, verb: Object): ContactInstantMessageField;

  }

  export class ContactFieldFactory {
    constructor();

    createField(value: String, type: ContactFieldType): ContactField;
    createField(value: String, type: ContactFieldType, category: ContactFieldCategory): ContactField;
    createField(name: String, value: String, type: ContactFieldType, category: ContactFieldCategory): ContactField;

    createLocation(unstructuredAddress: String): ContactLocationField;
    createLocation(unstructuredAddress: String, category: ContactFieldCategory): ContactLocationField;
    createLocation(unstructuredAddress: String, category: ContactFieldCategory, street: String, city: String, region: String, country: String, postalCode: String): ContactLocationField;

    createInstantMessage(userName: String): ContactInstantMessageField;
    createInstantMessage(userName: String, category: ContactFieldCategory): ContactInstantMessageField;
    createInstantMessage(userName: String, category: ContactFieldCategory, service: String, displayText: String, verb: Object): ContactInstantMessageField;

  }

  export class PinnedContactIdsQueryResult {
    contactIds: Object;
    constructor();

  }

  export class PinnedContactManager {
    user: Object;
    constructor();

    static getDefault(): PinnedContactManager;


    static getForUser(user: Object): PinnedContactManager;


    static isSupported(): Boolean;


    requestPinContactAsync(contact: Contact, surface: PinnedContactSurface, callback: (error: Error, result: Boolean) => void): void ;

    requestPinContactsAsync(contacts: Object, surface: PinnedContactSurface, callback: (error: Error, result: Boolean) => void): void ;

    requestUnpinContactAsync(contact: Contact, surface: PinnedContactSurface, callback: (error: Error, result: Boolean) => void): void ;

    getPinnedContactIdsAsync(callback: (error: Error, result: PinnedContactIdsQueryResult) => void): void ;

    isPinSurfaceSupported(surface: PinnedContactSurface): Boolean;

    isContactPinned(contact: Contact, surface: PinnedContactSurface): Boolean;

    signalContactActivity(contact: Contact): void;

  }

  export class ContactPanelLaunchFullAppRequestedEventArgs {
    handled: Boolean;
    constructor();

  }

  export class ContactPanelClosingEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class ContactPanel {
    headerColor: Object;
    constructor();

    closePanel(): void;

    addListener(type: "Closing", listener: (ev: Event) => void): void ;
    removeListener(type: "Closing", listener: (ev: Event) => void): void ;
    on(type: "Closing", listener: (ev: Event) => void): void ;
    off(type: "Closing", listener: (ev: Event) => void): void ;
    
    addListener(type: "LaunchFullAppRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "LaunchFullAppRequested", listener: (ev: Event) => void): void ;
    on(type: "LaunchFullAppRequested", listener: (ev: Event) => void): void ;
    off(type: "LaunchFullAppRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export * as dataprovider from "./applicationmodel.contacts.dataprovider.js";
export * as provider from "./applicationmodel.contacts.provider.js";