  export class Rect {
    constructor();
  }

  export class TextSegment {
    startPosition: Number;
    length: Number;
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum ContactAddressKind {
    home,
    work,
    other,
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

  export enum ContactAnnotationStoreAccessType {
    appAnnotationsReadWrite,
    allAnnotationsReadWrite,
  }

  export enum ContactBatchStatus {
    success,
    serverSearchSyncManagerError,
    serverSearchUnknownError,
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

  export enum ContactChangeType {
    created,
    modified,
    deleted,
    changeTrackingLost,
  }

  export enum ContactDateKind {
    birthday,
    anniversary,
    other,
  }

  export enum ContactEmailKind {
    personal,
    work,
    other,
  }

  export enum ContactFieldCategory {
    none,
    home,
    work,
    mobile,
    other,
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

  export enum ContactListSyncStatus {
    idle,
    syncing,
    upToDate,
    authenticationError,
    policyError,
    unknownError,
    manualAccountRemovalRequired,
  }

  export enum ContactMatchReasonKind {
    name,
    emailAddress,
    phoneNumber,
    jobInfo,
    yomiName,
    other,
  }

  export enum ContactNameOrder {
    firstNameLastName,
    lastNameFirstName,
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

  export enum ContactRelationship {
    other,
    spouse,
    partner,
    sibling,
    parent,
    child,
  }

  export enum ContactSelectionMode {
    contacts,
    fields,
  }

  export enum ContactStoreAccessType {
    appContactsReadWrite,
    allContactsReadOnly,
    allContactsReadWrite,
  }

  export enum PinnedContactSurface {
    startMenu,
    taskbar,
  }

  export class AggregateContactManager {
    constructor();

    findRawContactsAsync(contact: Contact, callback: (error: Error, result: Object) => void): void ;

    tryLinkContactsAsync(primaryContact: Contact, secondaryContact: Contact, callback: (error: Error, result: Contact) => void): void ;

    unlinkRawContactAsync(contact: Contact, callback: (error: Error) => void): void ;

    trySetPreferredSourceForPictureAsync(aggregateContact: Contact, rawContact: Contact, callback: (error: Error, result: Boolean) => void): void ;

    setRemoteIdentificationInformationAsync(contactListId: String, remoteSourceId: String, accountId: String, callback: (error: Error) => void): void ;

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

  export class ContactBatch {
    contacts: Object;
    status: ContactBatchStatus;
    constructor();

  }

  export class ContactCardDelayedDataLoader {
    constructor();

    setData(contact: Contact): void;

    close(): void;
  }

  export class ContactCardOptions {
    initialTabKind: ContactCardTabKind;
    headerKind: ContactCardHeaderKind;
    serverSearchContactListIds: Object;
    constructor();

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

  export class ContactChangeTracker {
    isTracking: Boolean;
    constructor();

    enable(): void;

    getChangeReader(): ContactChangeReader;

    reset(): void;

  }

  export class ContactChangedDeferral {
    constructor();

    complete(): void;

  }

  export class ContactChangedEventArgs {
    constructor();

    getDeferral(): ContactChangedDeferral;

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

  export class ContactEmail {
    kind: ContactEmailKind;
    description: String;
    address: String;
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

  export class ContactGroup {
    constructor();

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

  export class ContactLaunchActionVerbs {
    static call: String;
    static map: String;
    static message: String;
    static post: String;
    static videoCall: String;
    constructor();

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

  export class ContactListLimitedWriteOperations {
    constructor();

    tryCreateOrUpdateContactAsync(contact: Contact, callback: (error: Error, result: Boolean) => void): void ;

    tryDeleteContactAsync(contactId: String, callback: (error: Error, result: Boolean) => void): void ;

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

  export class ContactMatchReason {
    field: ContactMatchReasonKind;
    segments: Object;
    text: String;
    constructor();

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

  export class ContactPanelClosingEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class ContactPanelLaunchFullAppRequestedEventArgs {
    handled: Boolean;
    constructor();

  }

  export class ContactPhone {
    number: String;
    kind: ContactPhoneKind;
    description: String;
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

  export class ContactQueryTextSearch {
    text: String;
    searchScope: ContactQuerySearchScope;
    fields: ContactQuerySearchFields;
    constructor();

  }

  export class ContactReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: ContactBatch) => void): void ;

    getMatchingPropertiesWithMatchReason(contact: Contact): Object;

  }

  export class ContactSignificantOther {
    name: String;
    description: String;
    relationship: ContactRelationship;
    constructor();

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

  export class ContactStoreNotificationTriggerDetails {
    constructor();

  }

  export class ContactWebsite {
    uri: Object;
    description: String;
    rawValue: String;
    constructor();

  }

  export class FullContactCardOptions {
    desiredRemainingView: Number;
    constructor();

  }

  export class IContactField {
    category: ContactFieldCategory;
    name: String;
    type: ContactFieldType;
    value: String;
    constructor();

  }

  export class IContactFieldFactory {
    constructor();

    createField(value: String, type: ContactFieldType): ContactField;
    createField(value: String, type: ContactFieldType, category: ContactFieldCategory): ContactField;
    createField(name: String, value: String, type: ContactFieldType, category: ContactFieldCategory): ContactField;

  }

  export class IContactInstantMessageFieldFactory {
    constructor();

    createInstantMessage(userName: String): ContactInstantMessageField;
    createInstantMessage(userName: String, category: ContactFieldCategory): ContactInstantMessageField;
    createInstantMessage(userName: String, category: ContactFieldCategory, service: String, displayText: String, verb: Object): ContactInstantMessageField;

  }

  export class IContactLocationFieldFactory {
    constructor();

    createLocation(unstructuredAddress: String): ContactLocationField;
    createLocation(unstructuredAddress: String, category: ContactFieldCategory): ContactLocationField;
    createLocation(unstructuredAddress: String, category: ContactFieldCategory, street: String, city: String, region: String, country: String, postalCode: String): ContactLocationField;

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

export const ContactAddressKind: any;
export const ContactAnnotationOperations: any;
export const ContactAnnotationStoreAccessType: any;
export const ContactBatchStatus: any;
export const ContactCardHeaderKind: any;
export const ContactCardTabKind: any;
export const ContactChangeType: any;
export const ContactDateKind: any;
export const ContactEmailKind: any;
export const ContactFieldCategory: any;
export const ContactFieldType: any;
export const ContactListOtherAppReadAccess: any;
export const ContactListOtherAppWriteAccess: any;
export const ContactListSyncStatus: any;
export const ContactMatchReasonKind: any;
export const ContactNameOrder: any;
export const ContactPhoneKind: any;
export const ContactQueryDesiredFields: any;
export const ContactQuerySearchFields: any;
export const ContactQuerySearchScope: any;
export const ContactRelationship: any;
export const ContactSelectionMode: any;
export const ContactStoreAccessType: any;
export const PinnedContactSurface: any;
export const AggregateContactManager: any;
export const Contact: any;
export const ContactAddress: any;
export const ContactAnnotation: any;
export const ContactAnnotationList: any;
export const ContactAnnotationStore: any;
export const ContactBatch: any;
export const ContactCardDelayedDataLoader: any;
export const ContactCardOptions: any;
export const ContactChange: any;
export const ContactChangeReader: any;
export const ContactChangeTracker: any;
export const ContactChangedDeferral: any;
export const ContactChangedEventArgs: any;
export const ContactConnectedServiceAccount: any;
export const ContactDate: any;
export const ContactEmail: any;
export const ContactField: any;
export const ContactFieldFactory: any;
export const ContactGroup: any;
export const ContactInformation: any;
export const ContactInstantMessageField: any;
export const ContactJobInfo: any;
export const ContactLaunchActionVerbs: any;
export const ContactList: any;
export const ContactListLimitedWriteOperations: any;
export const ContactListSyncConstraints: any;
export const ContactListSyncManager: any;
export const ContactLocationField: any;
export const ContactManager: any;
export const ContactManagerForUser: any;
export const ContactMatchReason: any;
export const ContactPanel: any;
export const ContactPanelClosingEventArgs: any;
export const ContactPanelLaunchFullAppRequestedEventArgs: any;
export const ContactPhone: any;
export const ContactPicker: any;
export const ContactQueryOptions: any;
export const ContactQueryTextSearch: any;
export const ContactReader: any;
export const ContactSignificantOther: any;
export const ContactStore: any;
export const ContactStoreNotificationTriggerDetails: any;
export const ContactWebsite: any;
export const FullContactCardOptions: any;
export const IContactField: any;
export const IContactFieldFactory: any;
export const IContactInstantMessageFieldFactory: any;
export const IContactLocationFieldFactory: any;
export const KnownContactField: any;
export const PinnedContactIdsQueryResult: any;
export const PinnedContactManager: any;
export * as dataprovider from "./applicationmodel.contacts.dataprovider.js";
export * as provider from "./applicationmodel.contacts.provider.js";
