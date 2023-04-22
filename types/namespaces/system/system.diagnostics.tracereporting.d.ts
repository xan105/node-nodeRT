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
    isAutoLogger: boolean;
    isExclusive: boolean;
    maxTraceDurationFileTime: number;
    priority: PlatformDiagnosticTracePriority;
    profileHash: number;
    scenarioId: string;
    constructor();

  }

  export class PlatformDiagnosticTraceRuntimeInfo {
    etwRuntimeFileTime: number;
    runtimeFileTime: number;
    constructor();

  }

  export class PlatformDiagnosticActions {
    constructor();

    static isScenarioEnabled(scenarioId: string): boolean;


    static tryEscalateScenario(scenarioId: string, escalationType: PlatformDiagnosticEscalationType, outputDirectory: string, timestampOutputDirectory: boolean, forceEscalationUpload: boolean, triggers: Object): boolean;


    static downloadLatestSettingsForNamespace(partner: string, feature: string, isScenarioNamespace: boolean, downloadOverCostedNetwork: boolean, downloadOverBattery: boolean): PlatformDiagnosticActionState;


    static getActiveScenarioList(): Object;


    static forceUpload(latency: PlatformDiagnosticEventBufferLatencies, uploadOverCostedNetwork: boolean, uploadOverBattery: boolean): PlatformDiagnosticActionState;


    static isTraceRunning(slotType: PlatformDiagnosticTraceSlotType, scenarioId: string, traceProfileHash: number): PlatformDiagnosticTraceSlotState;


    static getActiveTraceRuntime(slotType: PlatformDiagnosticTraceSlotType): PlatformDiagnosticTraceRuntimeInfo;


    static getKnownTraceList(slotType: PlatformDiagnosticTraceSlotType): Object;


  }

