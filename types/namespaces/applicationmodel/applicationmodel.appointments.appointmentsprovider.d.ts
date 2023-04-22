  export class AppointmentsProviderLaunchActionVerbs {
    static addAppointment: string;
    static removeAppointment: string;
    static replaceAppointment: string;
    static showTimeFrame: string;
    static showAppointmentDetails: string;
    constructor();

  }

  export class AddAppointmentOperation {
    appointmentInformation: Object;
    sourcePackageFamilyName: string;
    constructor();

    reportCompleted(itemId: string): void;

    reportCanceled(): void;

    reportError(value: string): void;

    dismissUI(): void;

  }

  export class ReplaceAppointmentOperation {
    appointmentId: string;
    appointmentInformation: Object;
    instanceStartDate: Date;
    sourcePackageFamilyName: string;
    constructor();

    reportCompleted(itemId: string): void;

    reportCanceled(): void;

    reportError(value: string): void;

    dismissUI(): void;

  }

  export class RemoveAppointmentOperation {
    appointmentId: string;
    instanceStartDate: Date;
    sourcePackageFamilyName: string;
    constructor();

    reportCompleted(): void;

    reportCanceled(): void;

    reportError(value: string): void;

    dismissUI(): void;

  }

