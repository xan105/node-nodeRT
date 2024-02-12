  export enum DiagnosticActionState {
    initializing,
    downloading,
    verifyingTrust,
    detecting,
    resolving,
    verifyingResolution,
    executing,
  }

  export class DiagnosticActionResult {
    extendedError: Number;
    results: Object;
    constructor();

  }

  export class DiagnosticInvoker {
    static isSupported: Boolean;
    constructor();

    static getDefault(): DiagnosticInvoker;


    static getForUser(user: Object): DiagnosticInvoker;


    runDiagnosticActionAsync(context: Object, callback: (error: Error, result: DiagnosticActionResult) => void): void ;

    runDiagnosticActionFromStringAsync(context: String, callback: (error: Error, result: DiagnosticActionResult) => void): void ;

  }

  export class ProcessCpuUsage {
    constructor();

    getReport(): ProcessCpuUsageReport;

  }

  export class ProcessCpuUsageReport {
    kernelTime: Number;
    userTime: Number;
    constructor();

  }

  export class ProcessDiagnosticInfo {
    cpuUsage: ProcessCpuUsage;
    diskUsage: ProcessDiskUsage;
    executableFileName: String;
    memoryUsage: ProcessMemoryUsage;
    parent: ProcessDiagnosticInfo;
    processId: Number;
    processStartTime: Date;
    isPackaged: Boolean;
    constructor();

    static tryGetForProcessId(processId: Number): ProcessDiagnosticInfo;


    static getForProcesses(): Object;


    static getForCurrentProcess(): ProcessDiagnosticInfo;


    getAppDiagnosticInfos(): Object;

  }

  export class ProcessDiskUsage {
    constructor();

    getReport(): ProcessDiskUsageReport;

  }

  export class ProcessDiskUsageReport {
    bytesReadCount: Number;
    bytesWrittenCount: Number;
    otherBytesCount: Number;
    otherOperationCount: Number;
    readOperationCount: Number;
    writeOperationCount: Number;
    constructor();

  }

  export class ProcessMemoryUsage {
    constructor();

    getReport(): ProcessMemoryUsageReport;

  }

  export class ProcessMemoryUsageReport {
    nonPagedPoolSizeInBytes: Number;
    pageFaultCount: Number;
    pageFileSizeInBytes: Number;
    pagedPoolSizeInBytes: Number;
    peakNonPagedPoolSizeInBytes: Number;
    peakPageFileSizeInBytes: Number;
    peakPagedPoolSizeInBytes: Number;
    peakVirtualMemorySizeInBytes: Number;
    peakWorkingSetSizeInBytes: Number;
    privatePageCount: Number;
    virtualMemorySizeInBytes: Number;
    workingSetSizeInBytes: Number;
    constructor();

  }

  export class SystemCpuUsage {
    constructor();

    getReport(): SystemCpuUsageReport;

  }

  export class SystemCpuUsageReport {
    idleTime: Number;
    kernelTime: Number;
    userTime: Number;
    constructor();

  }

  export class SystemDiagnosticInfo {
    static preferredArchitecture: Number;
    cpuUsage: SystemCpuUsage;
    memoryUsage: SystemMemoryUsage;
    constructor();

    static isArchitectureSupported(type: Number): Boolean;


    static getForCurrentSystem(): SystemDiagnosticInfo;


  }

  export class SystemMemoryUsage {
    constructor();

    getReport(): SystemMemoryUsageReport;

  }

  export class SystemMemoryUsageReport {
    availableSizeInBytes: Number;
    committedSizeInBytes: Number;
    totalPhysicalSizeInBytes: Number;
    constructor();

  }

export const DiagnosticActionState: any;
export const DiagnosticActionResult: any;
export const DiagnosticInvoker: any;
export const ProcessCpuUsage: any;
export const ProcessCpuUsageReport: any;
export const ProcessDiagnosticInfo: any;
export const ProcessDiskUsage: any;
export const ProcessDiskUsageReport: any;
export const ProcessMemoryUsage: any;
export const ProcessMemoryUsageReport: any;
export const SystemCpuUsage: any;
export const SystemCpuUsageReport: any;
export const SystemDiagnosticInfo: any;
export const SystemMemoryUsage: any;
export const SystemMemoryUsageReport: any;
export * as deviceportal from "./system.diagnostics.deviceportal.js";
export * as telemetry from "./system.diagnostics.telemetry.js";
export * as tracereporting from "./system.diagnostics.tracereporting.js";
