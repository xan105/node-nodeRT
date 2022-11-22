  export enum DiagnosticActionState {
    initializing,
    downloading,
    verifyingTrust,
    detecting,
    resolving,
    verifyingResolution,
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

  export class ProcessMemoryUsage {
    constructor();

    getReport(): ProcessMemoryUsageReport;

  }

  export class ProcessCpuUsage {
    constructor();

    getReport(): ProcessCpuUsageReport;

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

  export class ProcessDiskUsageReport {
    bytesReadCount: Number;
    bytesWrittenCount: Number;
    otherBytesCount: Number;
    otherOperationCount: Number;
    readOperationCount: Number;
    writeOperationCount: Number;
    constructor();

  }

  export class ProcessCpuUsageReport {
    kernelTime: Number;
    userTime: Number;
    constructor();

  }

  export class SystemMemoryUsage {
    constructor();

    getReport(): SystemMemoryUsageReport;

  }

  export class SystemCpuUsage {
    constructor();

    getReport(): SystemCpuUsageReport;

  }

  export class SystemDiagnosticInfo {
    cpuUsage: SystemCpuUsage;
    memoryUsage: SystemMemoryUsage;
    constructor();

    static getForCurrentSystem(): SystemDiagnosticInfo;


  }

  export class SystemMemoryUsageReport {
    availableSizeInBytes: Number;
    committedSizeInBytes: Number;
    totalPhysicalSizeInBytes: Number;
    constructor();

  }

  export class SystemCpuUsageReport {
    idleTime: Number;
    kernelTime: Number;
    userTime: Number;
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

  export class DiagnosticActionResult {
    extendedError: Number;
    results: Object;
    constructor();

  }

export * as deviceportal from "./system.diagnostics.deviceportal.js";
export * as telemetry from "./system.diagnostics.telemetry.js";
export * as tracereporting from "./system.diagnostics.tracereporting.js";