  export enum PrintTicketFeatureSelectionType {
    pickOne,
    pickMany,
  }

  export enum PrintTicketParameterDataType {
    integer,
    numericString,
    string,
  }

  export enum PrintTicketValueType {
    integer,
    string,
    unknown,
  }

  export class PrintTicketValue {
    type: PrintTicketValueType;
    constructor();

    getValueAsInteger(): number;

    getValueAsString(): string;

  }

  export class PrintTicketOption {
    displayName: string;
    name: string;
    xmlNamespace: string;
    xmlNode: Object;
    constructor();

    getPropertyNode(name: string, xmlNamespace: string): Object;

    getScoredPropertyNode(name: string, xmlNamespace: string): Object;

    getPropertyValue(name: string, xmlNamespace: string): PrintTicketValue;

    getScoredPropertyValue(name: string, xmlNamespace: string): PrintTicketValue;

  }

  export class PrintTicketFeature {
    displayName: string;
    name: string;
    options: Object;
    selectionType: PrintTicketFeatureSelectionType;
    xmlNamespace: string;
    xmlNode: Object;
    constructor();

    getOption(name: string, xmlNamespace: string): PrintTicketOption;

    getSelectedOption(): PrintTicketOption;

    setSelectedOption(value: PrintTicketOption): void;

  }

  export class PrintTicketParameterDefinition {
    dataType: PrintTicketParameterDataType;
    name: string;
    rangeMax: number;
    rangeMin: number;
    unitType: string;
    xmlNamespace: string;
    xmlNode: Object;
    constructor();

  }

  export class PrintTicketCapabilities {
    documentBindingFeature: PrintTicketFeature;
    documentCollateFeature: PrintTicketFeature;
    documentDuplexFeature: PrintTicketFeature;
    documentHolePunchFeature: PrintTicketFeature;
    documentInputBinFeature: PrintTicketFeature;
    documentNUpFeature: PrintTicketFeature;
    documentStapleFeature: PrintTicketFeature;
    jobPasscodeFeature: PrintTicketFeature;
    name: string;
    pageBorderlessFeature: PrintTicketFeature;
    pageMediaSizeFeature: PrintTicketFeature;
    pageMediaTypeFeature: PrintTicketFeature;
    pageOrientationFeature: PrintTicketFeature;
    pageOutputColorFeature: PrintTicketFeature;
    pageOutputQualityFeature: PrintTicketFeature;
    pageResolutionFeature: PrintTicketFeature;
    xmlNamespace: string;
    xmlNode: Object;
    constructor();

    getFeature(name: string, xmlNamespace: string): PrintTicketFeature;

    getParameterDefinition(name: string, xmlNamespace: string): PrintTicketParameterDefinition;

  }

  export class PrintTicketParameterInitializer {
    value: PrintTicketValue;
    name: string;
    xmlNamespace: string;
    xmlNode: Object;
    constructor();

  }

  export class WorkflowPrintTicketValidationResult {
    extendedError: number;
    validated: boolean;
    constructor();

  }

  export class WorkflowPrintTicket {
    documentBindingFeature: PrintTicketFeature;
    documentCollateFeature: PrintTicketFeature;
    documentDuplexFeature: PrintTicketFeature;
    documentHolePunchFeature: PrintTicketFeature;
    documentInputBinFeature: PrintTicketFeature;
    documentNUpFeature: PrintTicketFeature;
    documentStapleFeature: PrintTicketFeature;
    jobPasscodeFeature: PrintTicketFeature;
    name: string;
    pageBorderlessFeature: PrintTicketFeature;
    pageMediaSizeFeature: PrintTicketFeature;
    pageMediaTypeFeature: PrintTicketFeature;
    pageOrientationFeature: PrintTicketFeature;
    pageOutputColorFeature: PrintTicketFeature;
    pageOutputQualityFeature: PrintTicketFeature;
    pageResolutionFeature: PrintTicketFeature;
    xmlNamespace: string;
    xmlNode: Object;
    constructor();

    notifyXmlChangedAsync(callback: (error: Error) => void): void ;

    validateAsync(callback: (error: Error, result: WorkflowPrintTicketValidationResult) => void): void ;

    getCapabilities(): PrintTicketCapabilities;

    getFeature(name: string, xmlNamespace: string): PrintTicketFeature;

    getParameterInitializer(name: string, xmlNamespace: string): PrintTicketParameterInitializer;

    setParameterInitializerAsInteger(name: string, xmlNamespace: string, integerValue: number): PrintTicketParameterInitializer;

    setParameterInitializerAsString(name: string, xmlNamespace: string, stringValue: string): PrintTicketParameterInitializer;

    mergeAndValidateTicket(deltaShemaTicket: WorkflowPrintTicket): WorkflowPrintTicket;

  }

