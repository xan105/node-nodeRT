  export class Color {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum AppointmentBusyStatus {
    busy,
    tentative,
    free,
    outOfOffice,
    workingElsewhere,
  }

  export enum AppointmentCalendarOtherAppReadAccess {
    systemOnly,
    limited,
    full,
    none,
  }

  export enum AppointmentCalendarOtherAppWriteAccess {
    none,
    systemOnly,
    limited,
  }

  export enum AppointmentCalendarSyncStatus {
    idle,
    syncing,
    upToDate,
    authenticationError,
    policyError,
    unknownError,
    manualAccountRemovalRequired,
  }

  export enum AppointmentConflictType {
    none,
    adjacent,
    overlap,
  }

  export enum AppointmentDaysOfWeek {
    none,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  }

  export enum AppointmentDetailsKind {
    plainText,
    html,
  }

  export enum AppointmentParticipantResponse {
    none,
    tentative,
    accepted,
    declined,
    unknown,
  }

  export enum AppointmentParticipantRole {
    requiredAttendee,
    optionalAttendee,
    resource,
  }

  export enum AppointmentRecurrenceUnit {
    daily,
    weekly,
    monthly,
    monthlyOnDay,
    yearly,
    yearlyOnDay,
  }

  export enum AppointmentSensitivity {
    public,
    private,
  }

  export enum AppointmentStoreAccessType {
    appCalendarsReadWrite,
    allCalendarsReadOnly,
    allCalendarsReadWrite,
  }

  export enum AppointmentStoreChangeType {
    appointmentCreated,
    appointmentModified,
    appointmentDeleted,
    changeTrackingLost,
    calendarCreated,
    calendarModified,
    calendarDeleted,
  }

  export enum AppointmentSummaryCardView {
    system,
    app,
  }

  export enum AppointmentWeekOfMonth {
    first,
    second,
    third,
    fourth,
    last,
  }

  export enum FindAppointmentCalendarsOptions {
    none,
    includeHidden,
  }

  export enum RecurrenceType {
    master,
    instance,
    exceptionInstance,
  }

  export class Appointment {
    location: String;
    allDay: Boolean;
    organizer: AppointmentOrganizer;
    duration: Number;
    details: String;
    busyStatus: AppointmentBusyStatus;
    recurrence: AppointmentRecurrence;
    subject: String;
    uri: Object;
    startTime: Date;
    sensitivity: AppointmentSensitivity;
    reminder: Number;
    invitees: Object;
    allowNewTimeProposal: Boolean;
    userResponse: AppointmentParticipantResponse;
    roamingId: String;
    replyTime: Date;
    isResponseRequested: Boolean;
    isOrganizedByUser: Boolean;
    isCanceledMeeting: Boolean;
    onlineMeetingLink: String;
    hasInvitees: Boolean;
    calendarId: String;
    localId: String;
    originalStartTime: Date;
    remoteChangeNumber: Number;
    detailsKind: AppointmentDetailsKind;
    changeNumber: Number;
    constructor();

  }

  export class AppointmentCalendar {
    summaryCardView: AppointmentSummaryCardView;
    otherAppWriteAccess: AppointmentCalendarOtherAppWriteAccess;
    displayColor: Object;
    isHidden: Boolean;
    displayName: String;
    otherAppReadAccess: AppointmentCalendarOtherAppReadAccess;
    localId: String;
    sourceDisplayName: String;
    canCancelMeetings: Boolean;
    canNotifyInvitees: Boolean;
    remoteId: String;
    mustNofityInvitees: Boolean;
    canUpdateMeetingResponses: Boolean;
    canProposeNewTimeForMeetings: Boolean;
    canCreateOrUpdateAppointments: Boolean;
    canForwardMeetings: Boolean;
    syncManager: AppointmentCalendarSyncManager;
    userDataAccountId: String;
    constructor();

    registerSyncManagerAsync(callback: (error: Error) => void): void ;

    findAppointmentsAsync(rangeStart: Date, rangeLength: Number, callback: (error: Error, result: Object) => void): void ;
    findAppointmentsAsync(rangeStart: Date, rangeLength: Number, options: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    findExceptionsFromMasterAsync(masterLocalId: String, callback: (error: Error, result: Object) => void): void ;

    findAllInstancesAsync(masterLocalId: String, rangeStart: Date, rangeLength: Number, callback: (error: Error, result: Object) => void): void ;
    findAllInstancesAsync(masterLocalId: String, rangeStart: Date, rangeLength: Number, pOptions: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    getAppointmentAsync(localId: String, callback: (error: Error, result: Appointment) => void): void ;

    getAppointmentInstanceAsync(localId: String, instanceStartTime: Date, callback: (error: Error, result: Appointment) => void): void ;

    findUnexpandedAppointmentsAsync(callback: (error: Error, result: Object) => void): void ;
    findUnexpandedAppointmentsAsync(options: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    deleteAppointmentAsync(localId: String, callback: (error: Error) => void): void ;

    deleteAppointmentInstanceAsync(localId: String, instanceStartTime: Date, callback: (error: Error) => void): void ;

    saveAppointmentAsync(pAppointment: Appointment, callback: (error: Error) => void): void ;

    tryCreateOrUpdateAppointmentAsync(appointment: Appointment, notifyInvitees: Boolean, callback: (error: Error, result: Boolean) => void): void ;

    tryCancelMeetingAsync(meeting: Appointment, subject: String, comment: String, notifyInvitees: Boolean, callback: (error: Error, result: Boolean) => void): void ;

    tryForwardMeetingAsync(meeting: Appointment, invitees: Object, subject: String, forwardHeader: String, comment: String, callback: (error: Error, result: Boolean) => void): void ;

    tryProposeNewTimeForMeetingAsync(meeting: Appointment, newStartTime: Date, newDuration: Number, subject: String, comment: String, callback: (error: Error, result: Boolean) => void): void ;

    tryUpdateMeetingResponseAsync(meeting: Appointment, response: AppointmentParticipantResponse, subject: String, comment: String, sendUpdate: Boolean, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class AppointmentCalendarSyncManager {
    status: AppointmentCalendarSyncStatus;
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

  export class AppointmentConflictResult {
    date: Date;
    type: AppointmentConflictType;
    constructor();

  }

  export class AppointmentException {
    appointment: Appointment;
    exceptionProperties: Object;
    isDeleted: Boolean;
    constructor();

  }

  export class AppointmentInvitee {
    role: AppointmentParticipantRole;
    response: AppointmentParticipantResponse;
    displayName: String;
    address: String;
    constructor();

  }

  export class AppointmentManager {
    constructor();

    static showAppointmentDetailsAsync(appointmentId: String, callback: (error: Error) => void): void ;
    static showAppointmentDetailsAsync(appointmentId: String, instanceStartDate: Date, callback: (error: Error) => void): void ;


    static showEditNewAppointmentAsync(appointment: Appointment, callback: (error: Error, result: String) => void): void ;


    static requestStoreAsync(options: AppointmentStoreAccessType, callback: (error: Error, result: AppointmentStore) => void): void ;


    static showAddAppointmentAsync(appointment: Appointment, selection: Object, callback: (error: Error, result: String) => void): void ;
    static showAddAppointmentAsync(appointment: Appointment, selection: Object, preferredPlacement: Number, callback: (error: Error, result: String) => void): void ;


    static showReplaceAppointmentAsync(appointmentId: String, appointment: Appointment, selection: Object, callback: (error: Error, result: String) => void): void ;
    static showReplaceAppointmentAsync(appointmentId: String, appointment: Appointment, selection: Object, preferredPlacement: Number, callback: (error: Error, result: String) => void): void ;
    static showReplaceAppointmentAsync(appointmentId: String, appointment: Appointment, selection: Object, preferredPlacement: Number, instanceStartDate: Date, callback: (error: Error, result: String) => void): void ;


    static showRemoveAppointmentAsync(appointmentId: String, selection: Object, callback: (error: Error, result: Boolean) => void): void ;
    static showRemoveAppointmentAsync(appointmentId: String, selection: Object, preferredPlacement: Number, callback: (error: Error, result: Boolean) => void): void ;
    static showRemoveAppointmentAsync(appointmentId: String, selection: Object, preferredPlacement: Number, instanceStartDate: Date, callback: (error: Error, result: Boolean) => void): void ;


    static showTimeFrameAsync(timeToShow: Date, duration: Number, callback: (error: Error) => void): void ;


    static getForUser(user: Object): AppointmentManagerForUser;


  }

  export class AppointmentManagerForUser {
    user: Object;
    constructor();

    showAddAppointmentAsync(appointment: Appointment, selection: Object, callback: (error: Error, result: String) => void): void ;
    showAddAppointmentAsync(appointment: Appointment, selection: Object, preferredPlacement: Number, callback: (error: Error, result: String) => void): void ;

    showReplaceAppointmentAsync(appointmentId: String, appointment: Appointment, selection: Object, callback: (error: Error, result: String) => void): void ;
    showReplaceAppointmentAsync(appointmentId: String, appointment: Appointment, selection: Object, preferredPlacement: Number, callback: (error: Error, result: String) => void): void ;
    showReplaceAppointmentAsync(appointmentId: String, appointment: Appointment, selection: Object, preferredPlacement: Number, instanceStartDate: Date, callback: (error: Error, result: String) => void): void ;

    showRemoveAppointmentAsync(appointmentId: String, selection: Object, callback: (error: Error, result: Boolean) => void): void ;
    showRemoveAppointmentAsync(appointmentId: String, selection: Object, preferredPlacement: Number, callback: (error: Error, result: Boolean) => void): void ;
    showRemoveAppointmentAsync(appointmentId: String, selection: Object, preferredPlacement: Number, instanceStartDate: Date, callback: (error: Error, result: Boolean) => void): void ;

    showTimeFrameAsync(timeToShow: Date, duration: Number, callback: (error: Error) => void): void ;

    showAppointmentDetailsAsync(appointmentId: String, callback: (error: Error) => void): void ;
    showAppointmentDetailsAsync(appointmentId: String, instanceStartDate: Date, callback: (error: Error) => void): void ;

    showEditNewAppointmentAsync(appointment: Appointment, callback: (error: Error, result: String) => void): void ;

    requestStoreAsync(options: AppointmentStoreAccessType, callback: (error: Error, result: AppointmentStore) => void): void ;

  }

  export class AppointmentOrganizer {
    displayName: String;
    address: String;
    constructor();

  }

  export class AppointmentProperties {
    static hasInvitees: String;
    static allDay: String;
    static allowNewTimeProposal: String;
    static busyStatus: String;
    static defaultProperties: Object;
    static details: String;
    static duration: String;
    static recurrence: String;
    static invitees: String;
    static isCanceledMeeting: String;
    static isOrganizedByUser: String;
    static isResponseRequested: String;
    static location: String;
    static onlineMeetingLink: String;
    static organizer: String;
    static originalStartTime: String;
    static reminder: String;
    static replyTime: String;
    static sensitivity: String;
    static startTime: String;
    static subject: String;
    static uri: String;
    static userResponse: String;
    static detailsKind: String;
    static remoteChangeNumber: String;
    static changeNumber: String;
    constructor();

  }

  export class AppointmentRecurrence {
    unit: AppointmentRecurrenceUnit;
    occurrences: Number;
    month: Number;
    interval: Number;
    daysOfWeek: AppointmentDaysOfWeek;
    day: Number;
    weekOfMonth: AppointmentWeekOfMonth;
    until: Date;
    timeZone: String;
    recurrenceType: RecurrenceType;
    calendarIdentifier: String;
    constructor();

  }

  export class AppointmentStore {
    changeTracker: AppointmentStoreChangeTracker;
    constructor();

    createAppointmentCalendarAsync(name: String, callback: (error: Error, result: AppointmentCalendar) => void): void ;
    createAppointmentCalendarAsync(name: String, userDataAccountId: String, callback: (error: Error, result: AppointmentCalendar) => void): void ;

    getAppointmentCalendarAsync(calendarId: String, callback: (error: Error, result: AppointmentCalendar) => void): void ;

    getAppointmentAsync(localId: String, callback: (error: Error, result: Appointment) => void): void ;

    getAppointmentInstanceAsync(localId: String, instanceStartTime: Date, callback: (error: Error, result: Appointment) => void): void ;

    findAppointmentCalendarsAsync(callback: (error: Error, result: Object) => void): void ;
    findAppointmentCalendarsAsync(options: FindAppointmentCalendarsOptions, callback: (error: Error, result: Object) => void): void ;

    findAppointmentsAsync(rangeStart: Date, rangeLength: Number, callback: (error: Error, result: Object) => void): void ;
    findAppointmentsAsync(rangeStart: Date, rangeLength: Number, options: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    findConflictAsync(appointment: Appointment, callback: (error: Error, result: AppointmentConflictResult) => void): void ;
    findConflictAsync(appointment: Appointment, instanceStartTime: Date, callback: (error: Error, result: AppointmentConflictResult) => void): void ;

    moveAppointmentAsync(appointment: Appointment, destinationCalendar: AppointmentCalendar, callback: (error: Error) => void): void ;

    showAddAppointmentAsync(appointment: Appointment, selection: Object, callback: (error: Error, result: String) => void): void ;

    showReplaceAppointmentAsync(localId: String, appointment: Appointment, selection: Object, callback: (error: Error, result: String) => void): void ;
    showReplaceAppointmentAsync(localId: String, appointment: Appointment, selection: Object, preferredPlacement: Number, instanceStartDate: Date, callback: (error: Error, result: String) => void): void ;

    showRemoveAppointmentAsync(localId: String, selection: Object, callback: (error: Error, result: Boolean) => void): void ;
    showRemoveAppointmentAsync(localId: String, selection: Object, preferredPlacement: Number, instanceStartDate: Date, callback: (error: Error, result: Boolean) => void): void ;

    showAppointmentDetailsAsync(localId: String, callback: (error: Error) => void): void ;
    showAppointmentDetailsAsync(localId: String, instanceStartDate: Date, callback: (error: Error) => void): void ;

    showEditNewAppointmentAsync(appointment: Appointment, callback: (error: Error, result: String) => void): void ;

    findLocalIdsFromRoamingIdAsync(roamingId: String, callback: (error: Error, result: Object) => void): void ;

    getChangeTracker(identity: String): AppointmentStoreChangeTracker;

    addListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    on(type: "StoreChanged", listener: (ev: Event) => void): void ;
    off(type: "StoreChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppointmentStoreChange {
    appointment: Appointment;
    changeType: AppointmentStoreChangeType;
    appointmentCalendar: AppointmentCalendar;
    constructor();

  }

  export class AppointmentStoreChangeReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;

    acceptChanges(): void;

    acceptChangesThrough(lastChangeToAccept: AppointmentStoreChange): void;

  }

  export class AppointmentStoreChangeTracker {
    isTracking: Boolean;
    constructor();

    getChangeReader(): AppointmentStoreChangeReader;

    enable(): void;

    reset(): void;

  }

  export class AppointmentStoreChangedDeferral {
    constructor();

    complete(): void;

  }

  export class AppointmentStoreChangedEventArgs {
    constructor();

    getDeferral(): AppointmentStoreChangedDeferral;

  }

  export class AppointmentStoreNotificationTriggerDetails {
    constructor();

  }

  export class FindAppointmentsOptions {
    maxCount: Number;
    includeHidden: Boolean;
    calendarIds: Object;
    fetchProperties: Object;
    constructor();

  }

  export class IAppointmentParticipant {
    address: String;
    displayName: String;
    constructor();

  }

export const AppointmentBusyStatus: any;
export const AppointmentCalendarOtherAppReadAccess: any;
export const AppointmentCalendarOtherAppWriteAccess: any;
export const AppointmentCalendarSyncStatus: any;
export const AppointmentConflictType: any;
export const AppointmentDaysOfWeek: any;
export const AppointmentDetailsKind: any;
export const AppointmentParticipantResponse: any;
export const AppointmentParticipantRole: any;
export const AppointmentRecurrenceUnit: any;
export const AppointmentSensitivity: any;
export const AppointmentStoreAccessType: any;
export const AppointmentStoreChangeType: any;
export const AppointmentSummaryCardView: any;
export const AppointmentWeekOfMonth: any;
export const FindAppointmentCalendarsOptions: any;
export const RecurrenceType: any;
export const Appointment: any;
export const AppointmentCalendar: any;
export const AppointmentCalendarSyncManager: any;
export const AppointmentConflictResult: any;
export const AppointmentException: any;
export const AppointmentInvitee: any;
export const AppointmentManager: any;
export const AppointmentManagerForUser: any;
export const AppointmentOrganizer: any;
export const AppointmentProperties: any;
export const AppointmentRecurrence: any;
export const AppointmentStore: any;
export const AppointmentStoreChange: any;
export const AppointmentStoreChangeReader: any;
export const AppointmentStoreChangeTracker: any;
export const AppointmentStoreChangedDeferral: any;
export const AppointmentStoreChangedEventArgs: any;
export const AppointmentStoreNotificationTriggerDetails: any;
export const FindAppointmentsOptions: any;
export const IAppointmentParticipant: any;
export * as appointmentsprovider from "./applicationmodel.appointments.appointmentsprovider.js";
export * as dataprovider from "./applicationmodel.appointments.dataprovider.js";
