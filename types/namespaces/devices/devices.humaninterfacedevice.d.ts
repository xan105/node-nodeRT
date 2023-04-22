  export enum HidReportType {
    input,
    output,
    feature,
  }

  export enum HidCollectionType {
    physical,
    application,
    logical,
    report,
    namedArray,
    usageSwitch,
    usageModifier,
    other,
  }

  export class HidDevice {
    productId: number;
    usageId: number;
    usagePage: number;
    vendorId: number;
    version: number;
    constructor();

    static fromIdAsync(deviceId: string, accessMode: number, callback: (error: Error, result: HidDevice) => void): void ;


    static getDeviceSelector(usagePage: number, usageId: number): string;
    static getDeviceSelector(usagePage: number, usageId: number, vendorId: number, productId: number): string;


    getInputReportAsync(callback: (error: Error, result: HidInputReport) => void): void ;
    getInputReportAsync(reportId: number, callback: (error: Error, result: HidInputReport) => void): void ;

    getFeatureReportAsync(callback: (error: Error, result: HidFeatureReport) => void): void ;
    getFeatureReportAsync(reportId: number, callback: (error: Error, result: HidFeatureReport) => void): void ;

    sendOutputReportAsync(outputReport: HidOutputReport, callback: (error: Error, result: number) => void): void ;

    sendFeatureReportAsync(featureReport: HidFeatureReport, callback: (error: Error, result: number) => void): void ;

    createOutputReport(): HidOutputReport;
    createOutputReport(reportId: number): HidOutputReport;

    createFeatureReport(): HidFeatureReport;
    createFeatureReport(reportId: number): HidFeatureReport;

    getBooleanControlDescriptions(reportType: HidReportType, usagePage: number, usageId: number): Object;

    getNumericControlDescriptions(reportType: HidReportType, usagePage: number, usageId: number): Object;

    close(): void;
    addListener(type: "InputReportReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "InputReportReceived", listener: (ev: Event) => void): void ;
    on(type: "InputReportReceived", listener: (ev: Event) => void): void ;
    off(type: "InputReportReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HidInputReport {
    activatedBooleanControls: Object;
    data: Object;
    id: number;
    transitionedBooleanControls: Object;
    constructor();

    getBooleanControl(usagePage: number, usageId: number): HidBooleanControl;

    getBooleanControlByDescription(controlDescription: HidBooleanControlDescription): HidBooleanControl;

    getNumericControl(usagePage: number, usageId: number): HidNumericControl;

    getNumericControlByDescription(controlDescription: HidNumericControlDescription): HidNumericControl;

  }

  export class HidFeatureReport {
    data: Object;
    id: number;
    constructor();

    getBooleanControl(usagePage: number, usageId: number): HidBooleanControl;

    getBooleanControlByDescription(controlDescription: HidBooleanControlDescription): HidBooleanControl;

    getNumericControl(usagePage: number, usageId: number): HidNumericControl;

    getNumericControlByDescription(controlDescription: HidNumericControlDescription): HidNumericControl;

  }

  export class HidOutputReport {
    data: Object;
    id: number;
    constructor();

    getBooleanControl(usagePage: number, usageId: number): HidBooleanControl;

    getBooleanControlByDescription(controlDescription: HidBooleanControlDescription): HidBooleanControl;

    getNumericControl(usagePage: number, usageId: number): HidNumericControl;

    getNumericControlByDescription(controlDescription: HidNumericControlDescription): HidNumericControl;

  }

  export class HidBooleanControlDescription {
    id: number;
    parentCollections: Object;
    reportId: number;
    reportType: HidReportType;
    usageId: number;
    usagePage: number;
    isAbsolute: boolean;
    constructor();

  }

  export class HidNumericControlDescription {
    hasNull: boolean;
    id: number;
    isAbsolute: boolean;
    logicalMaximum: number;
    logicalMinimum: number;
    parentCollections: Object;
    physicalMaximum: number;
    physicalMinimum: number;
    reportCount: number;
    reportId: number;
    reportSize: number;
    reportType: HidReportType;
    unit: number;
    unitExponent: number;
    usageId: number;
    usagePage: number;
    constructor();

  }

  export class HidInputReportReceivedEventArgs {
    report: HidInputReport;
    constructor();

  }

  export class HidCollection {
    id: number;
    type: HidCollectionType;
    usageId: number;
    usagePage: number;
    constructor();

  }

  export class HidBooleanControl {
    isActive: boolean;
    controlDescription: HidBooleanControlDescription;
    id: number;
    usageId: number;
    usagePage: number;
    constructor();

  }

  export class HidNumericControl {
    value: number;
    scaledValue: number;
    controlDescription: HidNumericControlDescription;
    id: number;
    isGrouped: boolean;
    usageId: number;
    usagePage: number;
    constructor();

  }

