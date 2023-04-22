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

  export class AppointmentCalendarSyncManagerSyncRequestEventArgs {
    request: AppointmentCalendarSyncManagerSyncRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarCreateOrUpdateAppointmentRequestEventArgs {
    request: AppointmentCalendarCreateOrUpdateAppointmentRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarCancelMeetingRequestEventArgs {
    request: AppointmentCalendarCancelMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarForwardMeetingRequestEventArgs {
    request: AppointmentCalendarForwardMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarProposeNewTimeForMeetingRequestEventArgs {
    request: AppointmentCalendarProposeNewTimeForMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentCalendarUpdateMeetingResponseRequestEventArgs {
    request: AppointmentCalendarUpdateMeetingResponseRequest;
    constructor();

    getDeferral(): Object;

  }

  export class AppointmentDataProviderTriggerDetails {
    connection: AppointmentDataProviderConnection;
    constructor();

  }

  export class AppointmentCalendarSyncManagerSyncRequest {
    appointmentCalendarLocalId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarCreateOrUpdateAppointmentRequest {
    appointment: Object;
    appointmentCalendarLocalId: string;
    changedProperties: Object;
    notifyInvitees: boolean;
    constructor();

    reportCompletedAsync(createdOrUpdatedAppointment: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarCancelMeetingRequest {
    appointmentCalendarLocalId: string;
    appointmentLocalId: string;
    appointmentOriginalStartTime: Date;
    comment: string;
    notifyInvitees: boolean;
    subject: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarForwardMeetingRequest {
    appointmentCalendarLocalId: string;
    appointmentLocalId: string;
    appointmentOriginalStartTime: Date;
    comment: string;
    forwardHeader: string;
    invitees: Object;
    subject: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarProposeNewTimeForMeetingRequest {
    appointmentCalendarLocalId: string;
    appointmentLocalId: string;
    appointmentOriginalStartTime: Date;
    comment: string;
    newDuration: number;
    newStartTime: Date;
    subject: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class AppointmentCalendarUpdateMeetingResponseRequest {
    appointmentCalendarLocalId: string;
    appointmentLocalId: string;
    appointmentOriginalStartTime: Date;
    comment: string;
    response: number;
    sendUpdate: boolean;
    subject: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

