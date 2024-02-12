  export class AddAppointmentOperation {
    appointmentInformation: Object;
    sourcePackageFamilyName: String;
    constructor();

    reportCompleted(itemId: String): void;

    reportCanceled(): void;

    reportError(value: String): void;

    dismissUI(): void;

  }

  export class AppointmentsProviderLaunchActionVerbs {
    static addAppointment: String;
    static removeAppointment: String;
    static replaceAppointment: String;
    static showTimeFrame: String;
    static showAppointmentDetails: String;
    constructor();

  }

  export class RemoveAppointmentOperation {
    appointmentId: String;
    instanceStartDate: Date;
    sourcePackageFamilyName: String;
    constructor();

    reportCompleted(): void;

    reportCanceled(): void;

    reportError(value: String): void;

    dismissUI(): void;

  }

  export class ReplaceAppointmentOperation {
    appointmentId: String;
    appointmentInformation: Object;
    instanceStartDate: Date;
    sourcePackageFamilyName: String;
    constructor();

    reportCompleted(itemId: String): void;

    reportCanceled(): void;

    reportError(value: String): void;

    dismissUI(): void;

  }

