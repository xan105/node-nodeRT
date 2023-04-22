  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum AppointmentStoreAccessType {
    appCalendarsReadWrite,
    allCalendarsReadOnly,
    allCalendarsReadWrite,
  }

  export enum AppointmentSensitivity {
    public,
    private,
  }

  export enum AppointmentBusyStatus {
    busy,
    tentative,
    free,
    outOfOffice,
    workingElsewhere,
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

  export enum AppointmentWeekOfMonth {
    first,
    second,
    third,
    fourth,
    last,
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

  export enum RecurrenceType {
    master,
    instance,
    exceptionInstance,
  }

  export enum AppointmentDetailsKind {
    plainText,
    html,
  }

  export enum FindAppointmentCalendarsOptions {
    none,
    includeHidden,
  }

  export enum AppointmentSummaryCardView {
    system,
    app,
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

  export enum AppointmentConflictType {
    none,
    adjacent,
    overlap,
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

  export class Appointment {
    location: string;
    allDay: boolean;
    organizer: AppointmentOrganizer;
    duration: number;
    details: string;
    busyStatus: AppointmentBusyStatus;
    recurrence: AppointmentRecurrence;
    subject: string;
    uri: Object;
    startTime: Date;
    sensitivity: AppointmentSensitivity;
    reminder: number;
    invitees: Object;
    allowNewTimeProposal: boolean;
    userResponse: AppointmentParticipantResponse;
    roamingId: string;
    replyTime: Date;
    isResponseRequested: boolean;
    isOrganizedByUser: boolean;
    isCanceledMeeting: boolean;
    onlineMeetingLink: string;
    hasInvitees: boolean;
    calendarId: string;
    localId: string;
    originalStartTime: Date;
    remoteChangeNumber: number;
    detailsKind: AppointmentDetailsKind;
    changeNumber: number;
    constructor();

  }

  export class AppointmentStore {
    changeTracker: AppointmentStoreChangeTracker;
    constructor();

    createAppointmentCalendarAsync(name: string, callback: (error: Error, result: AppointmentCalendar) => void): void ;
    createAppointmentCalendarAsync(name: string, userDataAccountId: string, callback: (error: Error, result: AppointmentCalendar) => void): void ;

    getAppointmentCalendarAsync(calendarId: string, callback: (error: Error, result: AppointmentCalendar) => void): void ;

    getAppointmentAsync(localId: string, callback: (error: Error, result: Appointment) => void): void ;

    getAppointmentInstanceAsync(localId: string, instanceStartTime: Date, callback: (error: Error, result: Appointment) => void): void ;

    findAppointmentCalendarsAsync(callback: (error: Error, result: Object) => void): void ;
    findAppointmentCalendarsAsync(options: FindAppointmentCalendarsOptions, callback: (error: Error, result: Object) => void): void ;

    findAppointmentsAsync(rangeStart: Date, rangeLength: number, callback: (error: Error, result: Object) => void): void ;
    findAppointmentsAsync(rangeStart: Date, rangeLength: number, options: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    findConflictAsync(appointment: Appointment, callback: (error: Error, result: AppointmentConflictResult) => void): void ;
    findConflictAsync(appointment: Appointment, instanceStartTime: Date, callback: (error: Error, result: AppointmentConflictResult) => void): void ;

    moveAppointmentAsync(appointment: Appointment, destinationCalendar: AppointmentCalendar, callback: (error: Error) => void): void ;

    showAddAppointmentAsync(appointment: Appointment, selection: Object, callback: (error: Error, result: string) => void): void ;

    showReplaceAppointmentAsync(localId: string, appointment: Appointment, selection: Object, callback: (error: Error, result: string) => void): void ;
    showReplaceAppointmentAsync(localId: string, appointment: Appointment, selection: Object, preferredPlacement: number, instanceStartDate: Date, callback: (error: Error, result: string) => void): void ;

    showRemoveAppointmentAsync(localId: string, selection: Object, callback: (error: Error, result: boolean) => void): void ;
    showRemoveAppointmentAsync(localId: string, selection: Object, preferredPlacement: number, instanceStartDate: Date, callback: (error: Error, result: boolean) => void): void ;

    showAppointmentDetailsAsync(localId: string, callback: (error: Error) => void): void ;
    showAppointmentDetailsAsync(localId: string, instanceStartDate: Date, callback: (error: Error) => void): void ;

    showEditNewAppointmentAsync(appointment: Appointment, callback: (error: Error, result: string) => void): void ;

    findLocalIdsFromRoamingIdAsync(roamingId: string, callback: (error: Error, result: Object) => void): void ;

    getChangeTracker(identity: string): AppointmentStoreChangeTracker;

    addListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    on(type: "StoreChanged", listener: (ev: Event) => void): void ;
    off(type: "StoreChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppointmentManagerForUser {
    user: Object;
    constructor();

    showAddAppointmentAsync(appointment: Appointment, selection: Object, callback: (error: Error, result: string) => void): void ;
    showAddAppointmentAsync(appointment: Appointment, selection: Object, preferredPlacement: number, callback: (error: Error, result: string) => void): void ;

    showReplaceAppointmentAsync(appointmentId: string, appointment: Appointment, selection: Object, callback: (error: Error, result: string) => void): void ;
    showReplaceAppointmentAsync(appointmentId: string, appointment: Appointment, selection: Object, preferredPlacement: number, callback: (error: Error, result: string) => void): void ;
    showReplaceAppointmentAsync(appointmentId: string, appointment: Appointment, selection: Object, preferredPlacement: number, instanceStartDate: Date, callback: (error: Error, result: string) => void): void ;

    showRemoveAppointmentAsync(appointmentId: string, selection: Object, callback: (error: Error, result: boolean) => void): void ;
    showRemoveAppointmentAsync(appointmentId: string, selection: Object, preferredPlacement: number, callback: (error: Error, result: boolean) => void): void ;
    showRemoveAppointmentAsync(appointmentId: string, selection: Object, preferredPlacement: number, instanceStartDate: Date, callback: (error: Error, result: boolean) => void): void ;

    showTimeFrameAsync(timeToShow: Date, duration: number, callback: (error: Error) => void): void ;

    showAppointmentDetailsAsync(appointmentId: string, callback: (error: Error) => void): void ;
    showAppointmentDetailsAsync(appointmentId: string, instanceStartDate: Date, callback: (error: Error) => void): void ;

    showEditNewAppointmentAsync(appointment: Appointment, callback: (error: Error, result: string) => void): void ;

    requestStoreAsync(options: AppointmentStoreAccessType, callback: (error: Error, result: AppointmentStore) => void): void ;

  }

  export class IAppointmentParticipant {
    address: string;
    displayName: string;
    constructor();

  }

  export class AppointmentOrganizer {
    displayName: string;
    address: string;
    constructor();

  }

  export class AppointmentInvitee {
    role: AppointmentParticipantRole;
    response: AppointmentParticipantResponse;
    displayName: string;
    address: string;
    constructor();

  }

  export class AppointmentRecurrence {
    unit: AppointmentRecurrenceUnit;
    occurrences: number;
    month: number;
    interval: number;
    daysOfWeek: AppointmentDaysOfWeek;
    day: number;
    weekOfMonth: AppointmentWeekOfMonth;
    until: Date;
    timeZone: string;
    recurrenceType: RecurrenceType;
    calendarIdentifier: string;
    constructor();

  }

  export class AppointmentManager {
    constructor();

    static showAppointmentDetailsAsync(appointmentId: string, callback: (error: Error) => void): void ;
    static showAppointmentDetailsAsync(appointmentId: string, instanceStartDate: Date, callback: (error: Error) => void): void ;


    static showEditNewAppointmentAsync(appointment: Appointment, callback: (error: Error, result: string) => void): void ;


    static requestStoreAsync(options: AppointmentStoreAccessType, callback: (error: Error, result: AppointmentStore) => void): void ;


    static showAddAppointmentAsync(appointment: Appointment, selection: Object, callback: (error: Error, result: string) => void): void ;
    static showAddAppointmentAsync(appointment: Appointment, selection: Object, preferredPlacement: number, callback: (error: Error, result: string) => void): void ;


    static showReplaceAppointmentAsync(appointmentId: string, appointment: Appointment, selection: Object, callback: (error: Error, result: string) => void): void ;
    static showReplaceAppointmentAsync(appointmentId: string, appointment: Appointment, selection: Object, preferredPlacement: number, callback: (error: Error, result: string) => void): void ;
    static showReplaceAppointmentAsync(appointmentId: string, appointment: Appointment, selection: Object, preferredPlacement: number, instanceStartDate: Date, callback: (error: Error, result: string) => void): void ;


    static showRemoveAppointmentAsync(appointmentId: string, selection: Object, callback: (error: Error, result: boolean) => void): void ;
    static showRemoveAppointmentAsync(appointmentId: string, selection: Object, preferredPlacement: number, callback: (error: Error, result: boolean) => void): void ;
    static showRemoveAppointmentAsync(appointmentId: string, selection: Object, preferredPlacement: number, instanceStartDate: Date, callback: (error: Error, result: boolean) => void): void ;


    static showTimeFrameAsync(timeToShow: Date, duration: number, callback: (error: Error) => void): void ;


    static getForUser(user: Object): AppointmentManagerForUser;


  }

  export class FindAppointmentsOptions {
    maxCount: number;
    includeHidden: boolean;
    calendarIds: Object;
    fetchProperties: Object;
    constructor();

  }

  export class AppointmentException {
    appointment: Appointment;
    exceptionProperties: Object;
    isDeleted: boolean;
    constructor();

  }

  export class AppointmentCalendarSyncManager {
    status: AppointmentCalendarSyncStatus;
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

  export class AppointmentCalendar {
    summaryCardView: AppointmentSummaryCardView;
    otherAppWriteAccess: AppointmentCalendarOtherAppWriteAccess;
    displayColor: Object;
    isHidden: boolean;
    displayName: string;
    otherAppReadAccess: AppointmentCalendarOtherAppReadAccess;
    localId: string;
    sourceDisplayName: string;
    canCancelMeetings: boolean;
    canNotifyInvitees: boolean;
    remoteId: string;
    mustNofityInvitees: boolean;
    canUpdateMeetingResponses: boolean;
    canProposeNewTimeForMeetings: boolean;
    canCreateOrUpdateAppointments: boolean;
    canForwardMeetings: boolean;
    syncManager: AppointmentCalendarSyncManager;
    userDataAccountId: string;
    constructor();

    registerSyncManagerAsync(callback: (error: Error) => void): void ;

    findAppointmentsAsync(rangeStart: Date, rangeLength: number, callback: (error: Error, result: Object) => void): void ;
    findAppointmentsAsync(rangeStart: Date, rangeLength: number, options: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    findExceptionsFromMasterAsync(masterLocalId: string, callback: (error: Error, result: Object) => void): void ;

    findAllInstancesAsync(masterLocalId: string, rangeStart: Date, rangeLength: number, callback: (error: Error, result: Object) => void): void ;
    findAllInstancesAsync(masterLocalId: string, rangeStart: Date, rangeLength: number, pOptions: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    getAppointmentAsync(localId: string, callback: (error: Error, result: Appointment) => void): void ;

    getAppointmentInstanceAsync(localId: string, instanceStartTime: Date, callback: (error: Error, result: Appointment) => void): void ;

    findUnexpandedAppointmentsAsync(callback: (error: Error, result: Object) => void): void ;
    findUnexpandedAppointmentsAsync(options: FindAppointmentsOptions, callback: (error: Error, result: Object) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    deleteAppointmentAsync(localId: string, callback: (error: Error) => void): void ;

    deleteAppointmentInstanceAsync(localId: string, instanceStartTime: Date, callback: (error: Error) => void): void ;

    saveAppointmentAsync(pAppointment: Appointment, callback: (error: Error) => void): void ;

    tryCreateOrUpdateAppointmentAsync(appointment: Appointment, notifyInvitees: boolean, callback: (error: Error, result: boolean) => void): void ;

    tryCancelMeetingAsync(meeting: Appointment, subject: string, comment: string, notifyInvitees: boolean, callback: (error: Error, result: boolean) => void): void ;

    tryForwardMeetingAsync(meeting: Appointment, invitees: Object, subject: string, forwardHeader: string, comment: string, callback: (error: Error, result: boolean) => void): void ;

    tryProposeNewTimeForMeetingAsync(meeting: Appointment, newStartTime: Date, newDuration: number, subject: string, comment: string, callback: (error: Error, result: boolean) => void): void ;

    tryUpdateMeetingResponseAsync(meeting: Appointment, response: AppointmentParticipantResponse, subject: string, comment: string, sendUpdate: boolean, callback: (error: Error, result: boolean) => void): void ;

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

  export class AppointmentStoreChangedDeferral {
    constructor();

    complete(): void;

  }

  export class AppointmentStoreChangeTracker {
    isTracking: boolean;
    constructor();

    getChangeReader(): AppointmentStoreChangeReader;

    enable(): void;

    reset(): void;

  }

  export class AppointmentConflictResult {
    date: Date;
    type: AppointmentConflictType;
    constructor();

  }

  export class AppointmentStoreChangedEventArgs {
    constructor();

    getDeferral(): AppointmentStoreChangedDeferral;

  }

  export class AppointmentProperties {
    static hasInvitees: string;
    static allDay: string;
    static allowNewTimeProposal: string;
    static busyStatus: string;
    static defaultProperties: Object;
    static details: string;
    static duration: string;
    static recurrence: string;
    static invitees: string;
    static isCanceledMeeting: string;
    static isOrganizedByUser: string;
    static isResponseRequested: string;
    static location: string;
    static onlineMeetingLink: string;
    static organizer: string;
    static originalStartTime: string;
    static reminder: string;
    static replyTime: string;
    static sensitivity: string;
    static startTime: string;
    static subject: string;
    static uri: string;
    static userResponse: string;
    static detailsKind: string;
    static remoteChangeNumber: string;
    static changeNumber: string;
    constructor();

  }

  export class AppointmentStoreNotificationTriggerDetails {
    constructor();

  }

export * as appointmentsprovider from "./applicationmodel.appointments.appointmentsprovider.js";
export * as dataprovider from "./applicationmodel.appointments.dataprovider.js";