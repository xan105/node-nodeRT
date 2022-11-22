  export enum PlatformDiagnosticEscalationType {
    onCompletion,
    onFailure,
  }

  export enum PlatformDiagnosticTraceSlotType {
    alternative,
    alwaysOn,
    mini,
  }

  export enum PlatformDiagnosticTracePriority {
    normal,
    userElevated,
  }

  export enum PlatformDiagnosticTraceSlotState {
    notRunning,
    running,
    throttled,
  }

  export enum PlatformDiagnosticActionState {
    success,
    freeNetworkNotAvailable,
    aCPowerNotAvailable,
  }

  export enum PlatformDiagnosticEventBufferLatencies {
    normal,
    costDeferred,
    realtime,
  }

  export class PlatformDiagnosticTraceInfo {
    isAutoLogger: Boolean;
    isExclusive: Boolean;
    maxTraceDurationFileTime: Number;
    priority: PlatformDiagnosticTracePriority;
    profileHash: Number;
    scenarioId: String;
    constructor();

  }

  export class PlatformDiagnosticTraceRuntimeInfo {
    etwRuntimeFileTime: Number;
    runtimeFileTime: Number;
    constructor();

  }

  export class PlatformDiagnosticActions {
    constructor();

    static isScenarioEnabled(scenarioId: String): Boolean;


    static tryEscalateScenario(scenarioId: String, escalationType: PlatformDiagnosticEscalationType, outputDirectory: String, timestampOutputDirectory: Boolean, forceEscalationUpload: Boolean, triggers: Object): Boolean;


    static downloadLatestSettingsForNamespace(partner: String, feature: String, isScenarioNamespace: Boolean, downloadOverCostedNetwork: Boolean, downloadOverBattery: Boolean): PlatformDiagnosticActionState;


    static getActiveScenarioList(): Object;


    static forceUpload(latency: PlatformDiagnosticEventBufferLatencies, uploadOverCostedNetwork: Boolean, uploadOverBattery: Boolean): PlatformDiagnosticActionState;


    static isTraceRunning(slotType: PlatformDiagnosticTraceSlotType, scenarioId: String, traceProfileHash: Number): PlatformDiagnosticTraceSlotState;


    static getActiveTraceRuntime(slotType: PlatformDiagnosticTraceSlotType): PlatformDiagnosticTraceRuntimeInfo;


    static getKnownTraceList(slotType: PlatformDiagnosticTraceSlotType): Object;


  }

