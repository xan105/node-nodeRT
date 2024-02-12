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

  export enum HidReportType {
    input,
    output,
    feature,
  }

  export class HidBooleanControl {
    isActive: Boolean;
    controlDescription: HidBooleanControlDescription;
    id: Number;
    usageId: Number;
    usagePage: Number;
    constructor();

  }

  export class HidBooleanControlDescription {
    id: Number;
    parentCollections: Object;
    reportId: Number;
    reportType: HidReportType;
    usageId: Number;
    usagePage: Number;
    isAbsolute: Boolean;
    constructor();

  }

  export class HidCollection {
    id: Number;
    type: HidCollectionType;
    usageId: Number;
    usagePage: Number;
    constructor();

  }

  export class HidDevice {
    productId: Number;
    usageId: Number;
    usagePage: Number;
    vendorId: Number;
    version: Number;
    constructor();

    static fromIdAsync(deviceId: String, accessMode: Number, callback: (error: Error, result: HidDevice) => void): void ;


    static getDeviceSelector(usagePage: Number, usageId: Number): String;
    static getDeviceSelector(usagePage: Number, usageId: Number, vendorId: Number, productId: Number): String;


    getInputReportAsync(callback: (error: Error, result: HidInputReport) => void): void ;
    getInputReportAsync(reportId: Number, callback: (error: Error, result: HidInputReport) => void): void ;

    getFeatureReportAsync(callback: (error: Error, result: HidFeatureReport) => void): void ;
    getFeatureReportAsync(reportId: Number, callback: (error: Error, result: HidFeatureReport) => void): void ;

    sendOutputReportAsync(outputReport: HidOutputReport, callback: (error: Error, result: Number) => void): void ;

    sendFeatureReportAsync(featureReport: HidFeatureReport, callback: (error: Error, result: Number) => void): void ;

    createOutputReport(): HidOutputReport;
    createOutputReport(reportId: Number): HidOutputReport;

    createFeatureReport(): HidFeatureReport;
    createFeatureReport(reportId: Number): HidFeatureReport;

    getBooleanControlDescriptions(reportType: HidReportType, usagePage: Number, usageId: Number): Object;

    getNumericControlDescriptions(reportType: HidReportType, usagePage: Number, usageId: Number): Object;

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

  export class HidFeatureReport {
    data: Object;
    id: Number;
    constructor();

    getBooleanControl(usagePage: Number, usageId: Number): HidBooleanControl;

    getBooleanControlByDescription(controlDescription: HidBooleanControlDescription): HidBooleanControl;

    getNumericControl(usagePage: Number, usageId: Number): HidNumericControl;

    getNumericControlByDescription(controlDescription: HidNumericControlDescription): HidNumericControl;

  }

  export class HidInputReport {
    activatedBooleanControls: Object;
    data: Object;
    id: Number;
    transitionedBooleanControls: Object;
    constructor();

    getBooleanControl(usagePage: Number, usageId: Number): HidBooleanControl;

    getBooleanControlByDescription(controlDescription: HidBooleanControlDescription): HidBooleanControl;

    getNumericControl(usagePage: Number, usageId: Number): HidNumericControl;

    getNumericControlByDescription(controlDescription: HidNumericControlDescription): HidNumericControl;

  }

  export class HidInputReportReceivedEventArgs {
    report: HidInputReport;
    constructor();

  }

  export class HidNumericControl {
    value: Number;
    scaledValue: Number;
    controlDescription: HidNumericControlDescription;
    id: Number;
    isGrouped: Boolean;
    usageId: Number;
    usagePage: Number;
    constructor();

  }

  export class HidNumericControlDescription {
    hasNull: Boolean;
    id: Number;
    isAbsolute: Boolean;
    logicalMaximum: Number;
    logicalMinimum: Number;
    parentCollections: Object;
    physicalMaximum: Number;
    physicalMinimum: Number;
    reportCount: Number;
    reportId: Number;
    reportSize: Number;
    reportType: HidReportType;
    unit: Number;
    unitExponent: Number;
    usageId: Number;
    usagePage: Number;
    constructor();

  }

  export class HidOutputReport {
    data: Object;
    id: Number;
    constructor();

    getBooleanControl(usagePage: Number, usageId: Number): HidBooleanControl;

    getBooleanControlByDescription(controlDescription: HidBooleanControlDescription): HidBooleanControl;

    getNumericControl(usagePage: Number, usageId: Number): HidNumericControl;

    getNumericControlByDescription(controlDescription: HidNumericControlDescription): HidNumericControl;

  }

