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
    executableFileName: string;
    memoryUsage: ProcessMemoryUsage;
    parent: ProcessDiagnosticInfo;
    processId: number;
    processStartTime: Date;
    isPackaged: boolean;
    constructor();

    static tryGetForProcessId(processId: number): ProcessDiagnosticInfo;


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
    nonPagedPoolSizeInBytes: number;
    pageFaultCount: number;
    pageFileSizeInBytes: number;
    pagedPoolSizeInBytes: number;
    peakNonPagedPoolSizeInBytes: number;
    peakPageFileSizeInBytes: number;
    peakPagedPoolSizeInBytes: number;
    peakVirtualMemorySizeInBytes: number;
    peakWorkingSetSizeInBytes: number;
    privatePageCount: number;
    virtualMemorySizeInBytes: number;
    workingSetSizeInBytes: number;
    constructor();

  }

  export class ProcessDiskUsageReport {
    bytesReadCount: number;
    bytesWrittenCount: number;
    otherBytesCount: number;
    otherOperationCount: number;
    readOperationCount: number;
    writeOperationCount: number;
    constructor();

  }

  export class ProcessCpuUsageReport {
    kernelTime: number;
    userTime: number;
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
    availableSizeInBytes: number;
    committedSizeInBytes: number;
    totalPhysicalSizeInBytes: number;
    constructor();

  }

  export class SystemCpuUsageReport {
    idleTime: number;
    kernelTime: number;
    userTime: number;
    constructor();

  }

  export class DiagnosticInvoker {
    static isSupported: boolean;
    constructor();

    static getDefault(): DiagnosticInvoker;


    static getForUser(user: Object): DiagnosticInvoker;


    runDiagnosticActionAsync(context: Object, callback: (error: Error, result: DiagnosticActionResult) => void): void ;

    runDiagnosticActionFromStringAsync(context: string, callback: (error: Error, result: DiagnosticActionResult) => void): void ;

  }

  export class DiagnosticActionResult {
    extendedError: number;
    results: Object;
    constructor();

  }

export * as deviceportal from "./system.diagnostics.deviceportal.js";
export * as telemetry from "./system.diagnostics.telemetry.js";
export * as tracereporting from "./system.diagnostics.tracereporting.js";