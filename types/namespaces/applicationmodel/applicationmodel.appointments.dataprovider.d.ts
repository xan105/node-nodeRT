  export class AppointmentCalendarCancelMeetingRequest {
    appointmentCalendarLocalId: String;
    appointmentLocalId: String;
    appointmentOriginalStartTime: Date;
    comment: String;
    notifyInvitees: Boolean;
    subject: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarCancelMeetingRequestEventArgs {
    request: AppointmentCalendarCancelMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarCreateOrUpdateAppointmentRequest {
    appointment: Object;
    appointmentCalendarLocalId: String;
    changedProperties: Object;
    notifyInvitees: Boolean;
    constructor();

    reportCompletedAsync(createdOrUpdatedAppointment: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarCreateOrUpdateAppointmentRequestEventArgs {
    request: AppointmentCalendarCreateOrUpdateAppointmentRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarForwardMeetingRequest {
    appointmentCalendarLocalId: String;
    appointmentLocalId: String;
    appointmentOriginalStartTime: Date;
    comment: String;
    forwardHeader: String;
    invitees: Object;
    subject: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarForwardMeetingRequestEventArgs {
    request: AppointmentCalendarForwardMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarProposeNewTimeForMeetingRequest {
    appointmentCalendarLocalId: String;
    appointmentLocalId: String;
    appointmentOriginalStartTime: Date;
    comment: String;
    newDuration: Number;
    newStartTime: Date;
    subject: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarProposeNewTimeForMeetingRequestEventArgs {
    request: AppointmentCalendarProposeNewTimeForMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarSyncManagerSyncRequest {
    appointmentCalendarLocalId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarSyncManagerSyncRequestEventArgs {
    request: AppointmentCalendarSyncManagerSyncRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarUpdateMeetingResponseRequest {
    appointmentCalendarLocalId: String;
    appointmentLocalId: String;
    appointmentOriginalStartTime: Date;
    comment: String;
    response: Number;
    sendUpdate: Boolean;
    subject: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarUpdateMeetingResponseRequestEventArgs {
    request: AppointmentCalendarUpdateMeetingResponseRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentDataProviderConnection {
    constructor();

    start(): void;

    addListener(type: "CancelMeetingRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CancelMeetingRequested", listener: (ev: Event) => void): void ;
    on(type: "CancelMeetingRequested", listener: (ev: Event) => void): void ;
    off(type: "CancelMeetingRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "CreateOrUpdateAppointmentRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CreateOrUpdateAppointmentRequested", listener: (ev: Event) => void): void ;
    on(type: "CreateOrUpdateAppointmentRequested", listener: (ev: Event) => void): void ;
    off(type: "CreateOrUpdateAppointmentRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    on(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    off(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    on(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    off(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SyncRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SyncRequested", listener: (ev: Event) => void): void ;
    on(type: "SyncRequested", listener: (ev: Event) => void): void ;
    off(type: "SyncRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    on(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    off(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppointmentDataProviderTriggerDetails {
    connection: AppointmentDataProviderConnection;
    constructor();

  }

