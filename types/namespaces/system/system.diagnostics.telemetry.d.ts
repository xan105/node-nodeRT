  export enum PlatformTelemetryRegistrationStatus {
    success,
    settingsOutOfRange,
    unknownFailure,
  }

  export class PlatformTelemetryClient {
    constructor();

    static register(id: String): PlatformTelemetryRegistrationResult;
    static register(id: String, settings: PlatformTelemetryRegistrationSettings): PlatformTelemetryRegistrationResult;


  }

  export class PlatformTelemetryRegistrationResult {
    status: PlatformTelemetryRegistrationStatus;
    constructor();

  }

  export class PlatformTelemetryRegistrationSettings {
    uploadQuotaSize: Number;
    storageSize: Number;
    constructor();

  }

