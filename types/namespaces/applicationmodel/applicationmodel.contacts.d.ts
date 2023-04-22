  export class TextSegment {
    startPosition: number;
    length: number;
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
    findContactsAsync(searchText: string, callback: (error: Error, result: Object) => void): void ;

    getContactAsync(contactId: string, callback: (error: Error, result: Contact) => void): void ;

    findContactListsAsync(callback: (error: Error, result: Object) => void): void ;

    getContactListAsync(contactListId: string, callback: (error: Error, result: ContactList) => void): void ;

    createContactListAsync(displayName: string, callback: (error: Error, result: ContactList) => void): void ;
    createContactListAsync(displayName: string, userDataAccountId: string, callback: (error: Error, result: ContactList) => void): void ;

    getMeContactAsync(callback: (error: Error, result: Contact) => void): void ;

    getContactReader(): ContactReader;
    getContactReader(options: ContactQueryOptions): ContactReader;

    getChangeTracker(identity: string): ContactChangeTracker;

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

    findContactIdsByEmailAsync(emailAddress: string, callback: (error: Error, result: Object) => void): void ;

    findContactIdsByPhoneNumberAsync(phoneNumber: string, callback: (error: Error, result: Object) => void): void ;

    findAnnotationsForContactAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;

    disableAnnotationAsync(annotation: ContactAnnotation, callback: (error: Error) => void): void ;

    createAnnotationListAsync(callback: (error: Error, result: ContactAnnotationList) => void): void ;
    createAnnotationListAsync(userDataAccountId: string, callback: (error: Error, result: ContactAnnotationList) => void): void ;

    getAnnotationListAsync(annotationListId: string, callback: (error: Error, result: ContactAnnotationList) => void): void ;

    findAnnotationListsAsync(callback: (error: Error, result: Object) => void): void ;

    findAnnotationsForContactListAsync(contactListId: string, callback: (error: Error, result: Object) => void): void ;

  }

  export class ContactCardOptions {
    initialTabKind: ContactCardTabKind;
    headerKind: ContactCardHeaderKind;
    serverSearchContactListIds: Object;
    constructor();

  }

  export class FullContactCardOptions {
    desiredRemainingView: number;
    constructor();

  }

  export class ContactManagerForUser {
    systemSortOrder: ContactNameOrder;
    systemDisplayNameOrder: ContactNameOrder;
    user: Object;
    constructor();

    convertContactToVCardAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;
    convertContactToVCardAsync(contact: Contact, maxBytes: number, callback: (error: Error, result: Object) => void): void ;

    convertVCardToContactAsync(vCard: Object, callback: (error: Error, result: Contact) => void): void ;

    requestStoreAsync(accessType: ContactStoreAccessType, callback: (error: Error, result: ContactStore) => void): void ;

    requestAnnotationStoreAsync(accessType: ContactAnnotationStoreAccessType, callback: (error: Error, result: ContactAnnotationStore) => void): void ;

    showFullContactCard(contact: Contact, fullContactCardOptions: FullContactCardOptions): void;

  }

  export class ContactAnnotation {
    supportedOperations: ContactAnnotationOperations;
    remoteId: string;
    contactId: string;
    annotationListId: string;
    id: string;
    isDisabled: boolean;
    providerProperties: Object;
    contactListId: string;
    constructor();

  }

  export class ContactAnnotationList {
    id: string;
    providerPackageFamilyName: string;
    userDataAccountId: string;
    constructor();

    deleteAsync(callback: (error: Error) => void): void ;

    trySaveAnnotationAsync(annotation: ContactAnnotation, callback: (error: Error, result: boolean) => void): void ;

    getAnnotationAsync(annotationId: string, callback: (error: Error, result: ContactAnnotation) => void): void ;

    findAnnotationsByRemoteIdAsync(remoteId: string, callback: (error: Error, result: Object) => void): void ;

    findAnnotationsAsync(callback: (error: Error, result: Object) => void): void ;

    deleteAnnotationAsync(annotation: ContactAnnotation, callback: (error: Error) => void): void ;

  }

  export class ContactChangeTracker {
    isTracking: boolean;
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

    trySetPreferredSourceForPictureAsync(aggregateContact: Contact, rawContact: Contact, callback: (error: Error, result: boolean) => void): void ;

    setRemoteIdentificationInformationAsync(contactListId: string, remoteSourceId: string, accountId: string, callback: (error: Error) => void): void ;

  }

  export class ContactList {
    supportsServerSearch: boolean;
    isHidden: boolean;
    otherAppWriteAccess: ContactListOtherAppWriteAccess;
    displayName: string;
    otherAppReadAccess: ContactListOtherAppReadAccess;
    changeTracker: ContactChangeTracker;
    sourceDisplayName: string;
    id: string;
    syncManager: ContactListSyncManager;
    userDataAccountId: string;
    syncConstraints: ContactListSyncConstraints;
    limitedWriteOperations: ContactListLimitedWriteOperations;
    constructor();

    saveAsync(callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    getContactFromRemoteIdAsync(remoteId: string, callback: (error: Error, result: Contact) => void): void ;

    getMeContactAsync(callback: (error: Error, result: Contact) => void): void ;

    saveContactAsync(contact: Contact, callback: (error: Error) => void): void ;

    deleteContactAsync(contact: Contact, callback: (error: Error) => void): void ;

    getContactAsync(contactId: string, callback: (error: Error, result: Contact) => void): void ;

    registerSyncManagerAsync(callback: (error: Error) => void): void ;

    getContactReader(): ContactReader;
    getContactReader(options: ContactQueryOptions): ContactReader;

    getChangeTracker(identity: string): ContactChangeTracker;

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
    includeContactsFromHiddenLists: boolean;
    desiredOperations: ContactAnnotationOperations;
    desiredFields: ContactQueryDesiredFields;
    annotationListIds: Object;
    contactListIds: Object;
    textSearch: ContactQueryTextSearch;
    constructor();
    constructor(text: string);
    constructor(text: string, fields: ContactQuerySearchFields);

  }

  export class ContactListSyncManager {
    status: ContactListSyncStatus;
    lastSuccessfulSyncTime: Date;
    lastAttemptedSyncTime: Date;
    constructor();

    syncAsync(callback: (error: Error, result: boolean) => void): void ;

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
    canSyncDescriptions: boolean;
    maxCompanyPhoneNumbers: number;
    maxChildRelationships: number;
    maxBusinessFaxPhoneNumbers: number;
    maxBirthdayDates: number;
    maxAssistantPhoneNumbers: number;
    maxOtherAddresses: number;
    maxAnniversaryDates: number;
    maxHomeAddresses: number;
    maxOtherDates: number;
    maxMobilePhoneNumbers: number;
    maxJobInfo: number;
    maxHomePhoneNumbers: number;
    maxHomeFaxPhoneNumbers: number;
    maxOtherEmailAddresses: number;
    maxPersonalEmailAddresses: number;
    maxPartnerRelationships: number;
    maxParentRelationships: number;
    maxPagerPhoneNumbers: number;
    maxOtherRelationships: number;
    maxOtherPhoneNumbers: number;
    maxRadioPhoneNumbers: number;
    maxWorkPhoneNumbers: number;
    maxWorkEmailAddresses: number;
    maxWorkAddresses: number;
    maxWebsites: number;
    maxSpouseRelationships: number;
    maxSiblingRelationships: number;
    constructor();

  }

  export class ContactListLimitedWriteOperations {
    constructor();

    tryCreateOrUpdateContactAsync(contact: Contact, callback: (error: Error, result: boolean) => void): void ;

    tryDeleteContactAsync(contactId: string, callback: (error: Error, result: boolean) => void): void ;

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
    text: string;
    constructor();

  }

  export class ContactQueryTextSearch {
    text: string;
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
    static includeMiddleNameInSystemDisplayAndSort: boolean;
    constructor();

    static isShowFullContactCardSupportedAsync(callback: (error: Error, result: boolean) => void): void ;


    static convertContactToVCardAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;
    static convertContactToVCardAsync(contact: Contact, maxBytes: number, callback: (error: Error, result: Object) => void): void ;


    static convertVCardToContactAsync(vCard: Object, callback: (error: Error, result: Contact) => void): void ;


    static requestStoreAsync(accessType: ContactStoreAccessType, callback: (error: Error, result: ContactStore) => void): void ;
    static requestStoreAsync(callback: (error: Error, result: ContactStore) => void): void ;


    static requestAnnotationStoreAsync(accessType: ContactAnnotationStoreAccessType, callback: (error: Error, result: ContactAnnotationStore) => void): void ;


    static getForUser(user: Object): ContactManagerForUser;


    static isShowContactCardSupported(): boolean;


    static showContactCard(contact: Contact, selection: Object, preferredPlacement: number, contactCardOptions: ContactCardOptions): void;
    static showContactCard(contact: Contact, selection: Object): void;
    static showContactCard(contact: Contact, selection: Object, preferredPlacement: number): void;


    static isShowDelayLoadedContactCardSupported(): boolean;


    static showDelayLoadedContactCard(contact: Contact, selection: Object, preferredPlacement: number, contactCardOptions: ContactCardOptions): ContactCardDelayedDataLoader;
    static showDelayLoadedContactCard(contact: Contact, selection: Object, preferredPlacement: number): ContactCardDelayedDataLoader;


    static showFullContactCard(contact: Contact, fullContactCardOptions: FullContactCardOptions): void;


  }

  export class ContactLaunchActionVerbs {
    static call: string;
    static map: string;
    static message: string;
    static post: string;
    static videoCall: string;
    constructor();

  }

  export class ContactGroup {
    constructor();

  }

  export class ContactPicker {
    selectionMode: ContactSelectionMode;
    commitButtonText: string;
    desiredFields: Object;
    desiredFieldsWithContactFieldType: Object;
    user: Object;
    constructor();

    static isSupportedAsync(callback: (error: Error, result: boolean) => void): void ;


    static createForUser(user: Object): ContactPicker;


    pickSingleContactAsync(callback: (error: Error, result: ContactInformation) => void): void ;

    pickMultipleContactsAsync(callback: (error: Error, result: Object) => void): void ;

    pickContactAsync(callback: (error: Error, result: Contact) => void): void ;

    pickContactsAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class IContactField {
    category: ContactFieldCategory;
    name: string;
    type: ContactFieldType;
    value: string;
    constructor();

  }

  export class ContactPhone {
    number: string;
    kind: ContactPhoneKind;
    description: string;
    constructor();

  }

  export class ContactEmail {
    kind: ContactEmailKind;
    description: string;
    address: string;
    constructor();

  }

  export class ContactAddress {
    streetAddress: string;
    region: string;
    postalCode: string;
    locality: string;
    kind: ContactAddressKind;
    description: string;
    country: string;
    constructor();

  }

  export class ContactConnectedServiceAccount {
    serviceName: string;
    id: string;
    constructor();

  }

  export class ContactDate {
    year: number;
    month: number;
    kind: ContactDateKind;
    description: string;
    day: number;
    constructor();

  }

  export class ContactJobInfo {
    title: string;
    office: string;
    manager: string;
    description: string;
    department: string;
    companyYomiName: string;
    companyName: string;
    companyAddress: string;
    constructor();

  }

  export class ContactSignificantOther {
    name: string;
    description: string;
    relationship: ContactRelationship;
    constructor();

  }

  export class ContactWebsite {
    uri: Object;
    description: string;
    rawValue: string;
    constructor();

  }

  export class Contact {
    thumbnail: Object;
    name: string;
    fields: Object;
    id: string;
    notes: string;
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
    textToneToken: string;
    displayNameOverride: string;
    displayPictureUserUpdateTime: Date;
    nickname: string;
    remoteId: string;
    ringToneToken: string;
    contactListId: string;
    largeDisplayPicture: Object;
    smallDisplayPicture: Object;
    sortName: string;
    aggregateId: string;
    fullName: string;
    isAggregate: boolean;
    isDisplayPictureManuallySet: boolean;
    isMe: boolean;
    yomiGivenName: string;
    honorificNameSuffix: string;
    yomiFamilyName: string;
    middleName: string;
    lastName: string;
    honorificNamePrefix: string;
    firstName: string;
    displayName: string;
    yomiDisplayName: string;
    constructor();

  }

  export class ContactField {
    category: ContactFieldCategory;
    name: string;
    type: ContactFieldType;
    value: string;
    constructor();
    constructor(value: string, type: ContactFieldType);
    constructor(value: string, type: ContactFieldType, category: ContactFieldCategory);
    constructor(name: string, value: string, type: ContactFieldType, category: ContactFieldCategory);

  }

  export class ContactLocationField {
    category: ContactFieldCategory;
    name: string;
    type: ContactFieldType;
    value: string;
    city: string;
    country: string;
    postalCode: string;
    region: string;
    street: string;
    unstructuredAddress: string;
    constructor();
    constructor(unstructuredAddress: string);
    constructor(unstructuredAddress: string, category: ContactFieldCategory);
    constructor(unstructuredAddress: string, category: ContactFieldCategory, street: string, city: string, region: string, country: string, postalCode: string);

  }

  export class ContactInstantMessageField {
    category: ContactFieldCategory;
    name: string;
    type: ContactFieldType;
    value: string;
    displayText: string;
    launchUri: Object;
    service: string;
    userName: string;
    constructor();
    constructor(userName: string);
    constructor(userName: string, category: ContactFieldCategory);
    constructor(userName: string, category: ContactFieldCategory, service: string, displayText: string, verb: Object);

  }

  export class KnownContactField {
    static email: string;
    static instantMessage: string;
    static location: string;
    static phoneNumber: string;
    constructor();

    static convertNameToType(name: string): ContactFieldType;


    static convertTypeToName(type: ContactFieldType): string;


  }

  export class ContactInformation {
    customFields: Object;
    emails: Object;
    instantMessages: Object;
    locations: Object;
    name: string;
    phoneNumbers: Object;
    constructor();

    getThumbnailAsync(callback: (error: Error, result: Object) => void): void ;

    queryCustomFields(customName: string): Object;

  }

  export class IContactFieldFactory {
    constructor();

    createField(value: string, type: ContactFieldType): ContactField;
    createField(value: string, type: ContactFieldType, category: ContactFieldCategory): ContactField;
    createField(name: string, value: string, type: ContactFieldType, category: ContactFieldCategory): ContactField;

  }

  export class IContactLocationFieldFactory {
    constructor();

    createLocation(unstructuredAddress: string): ContactLocationField;
    createLocation(unstructuredAddress: string, category: ContactFieldCategory): ContactLocationField;
    createLocation(unstructuredAddress: string, category: ContactFieldCategory, street: string, city: string, region: string, country: string, postalCode: string): ContactLocationField;

  }

  export class IContactInstantMessageFieldFactory {
    constructor();

    createInstantMessage(userName: string): ContactInstantMessageField;
    createInstantMessage(userName: string, category: ContactFieldCategory): ContactInstantMessageField;
    createInstantMessage(userName: string, category: ContactFieldCategory, service: string, displayText: string, verb: Object): ContactInstantMessageField;

  }

  export class ContactFieldFactory {
    constructor();

    createField(value: string, type: ContactFieldType): ContactField;
    createField(value: string, type: ContactFieldType, category: ContactFieldCategory): ContactField;
    createField(name: string, value: string, type: ContactFieldType, category: ContactFieldCategory): ContactField;

    createLocation(unstructuredAddress: string): ContactLocationField;
    createLocation(unstructuredAddress: string, category: ContactFieldCategory): ContactLocationField;
    createLocation(unstructuredAddress: string, category: ContactFieldCategory, street: string, city: string, region: string, country: string, postalCode: string): ContactLocationField;

    createInstantMessage(userName: string): ContactInstantMessageField;
    createInstantMessage(userName: string, category: ContactFieldCategory): ContactInstantMessageField;
    createInstantMessage(userName: string, category: ContactFieldCategory, service: string, displayText: string, verb: Object): ContactInstantMessageField;

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


    static isSupported(): boolean;


    requestPinContactAsync(contact: Contact, surface: PinnedContactSurface, callback: (error: Error, result: boolean) => void): void ;

    requestPinContactsAsync(contacts: Object, surface: PinnedContactSurface, callback: (error: Error, result: boolean) => void): void ;

    requestUnpinContactAsync(contact: Contact, surface: PinnedContactSurface, callback: (error: Error, result: boolean) => void): void ;

    getPinnedContactIdsAsync(callback: (error: Error, result: PinnedContactIdsQueryResult) => void): void ;

    isPinSurfaceSupported(surface: PinnedContactSurface): boolean;

    isContactPinned(contact: Contact, surface: PinnedContactSurface): boolean;

    signalContactActivity(contact: Contact): void;

  }

  export class ContactPanelLaunchFullAppRequestedEventArgs {
    handled: boolean;
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