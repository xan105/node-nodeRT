  export enum PlatformTelemetryRegistrationStatus {
    success,
    settingsOutOfRange,
    unknownFailure,
  }

  export class PlatformTelemetryRegistrationResult {
    status: PlatformTelemetryRegistrationStatus;
    constructor();

  }

  export class PlatformTelemetryRegistrationSettings {
    uploadQuotaSize: number;
    storageSize: number;
    constructor();

  }

  export class PlatformTelemetryClient {
    constructor();

    static register(id: string): PlatformTelemetryRegistrationResult;
    static register(id: string, settings: PlatformTelemetryRegistrationSettings): PlatformTelemetryRegistrationResult;


  }

