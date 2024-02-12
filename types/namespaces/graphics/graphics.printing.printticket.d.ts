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

  export class PrintTicketCapabilities {
    documentBindingFeature: PrintTicketFeature;
    documentCollateFeature: PrintTicketFeature;
    documentDuplexFeature: PrintTicketFeature;
    documentHolePunchFeature: PrintTicketFeature;
    documentInputBinFeature: PrintTicketFeature;
    documentNUpFeature: PrintTicketFeature;
    documentStapleFeature: PrintTicketFeature;
    jobPasscodeFeature: PrintTicketFeature;
    name: String;
    pageBorderlessFeature: PrintTicketFeature;
    pageMediaSizeFeature: PrintTicketFeature;
    pageMediaTypeFeature: PrintTicketFeature;
    pageOrientationFeature: PrintTicketFeature;
    pageOutputColorFeature: PrintTicketFeature;
    pageOutputQualityFeature: PrintTicketFeature;
    pageResolutionFeature: PrintTicketFeature;
    xmlNamespace: String;
    xmlNode: Object;
    constructor();

    getFeature(name: String, xmlNamespace: String): PrintTicketFeature;

    getParameterDefinition(name: String, xmlNamespace: String): PrintTicketParameterDefinition;

  }

  export class PrintTicketFeature {
    displayName: String;
    name: String;
    options: Object;
    selectionType: PrintTicketFeatureSelectionType;
    xmlNamespace: String;
    xmlNode: Object;
    constructor();

    getOption(name: String, xmlNamespace: String): PrintTicketOption;

    getSelectedOption(): PrintTicketOption;

    setSelectedOption(value: PrintTicketOption): void;

  }

  export class PrintTicketOption {
    displayName: String;
    name: String;
    xmlNamespace: String;
    xmlNode: Object;
    constructor();

    getPropertyNode(name: String, xmlNamespace: String): Object;

    getScoredPropertyNode(name: String, xmlNamespace: String): Object;

    getPropertyValue(name: String, xmlNamespace: String): PrintTicketValue;

    getScoredPropertyValue(name: String, xmlNamespace: String): PrintTicketValue;

  }

  export class PrintTicketParameterDefinition {
    dataType: PrintTicketParameterDataType;
    name: String;
    rangeMax: Number;
    rangeMin: Number;
    unitType: String;
    xmlNamespace: String;
    xmlNode: Object;
    constructor();

  }

  export class PrintTicketParameterInitializer {
    value: PrintTicketValue;
    name: String;
    xmlNamespace: String;
    xmlNode: Object;
    constructor();

  }

  export class PrintTicketValue {
    type: PrintTicketValueType;
    constructor();

    getValueAsInteger(): Number;

    getValueAsString(): String;

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
    name: String;
    pageBorderlessFeature: PrintTicketFeature;
    pageMediaSizeFeature: PrintTicketFeature;
    pageMediaTypeFeature: PrintTicketFeature;
    pageOrientationFeature: PrintTicketFeature;
    pageOutputColorFeature: PrintTicketFeature;
    pageOutputQualityFeature: PrintTicketFeature;
    pageResolutionFeature: PrintTicketFeature;
    xmlNamespace: String;
    xmlNode: Object;
    constructor();

    notifyXmlChangedAsync(callback: (error: Error) => void): void ;

    validateAsync(callback: (error: Error, result: WorkflowPrintTicketValidationResult) => void): void ;

    getCapabilities(): PrintTicketCapabilities;

    getFeature(name: String, xmlNamespace: String): PrintTicketFeature;

    getParameterInitializer(name: String, xmlNamespace: String): PrintTicketParameterInitializer;

    setParameterInitializerAsInteger(name: String, xmlNamespace: String, integerValue: Number): PrintTicketParameterInitializer;

    setParameterInitializerAsString(name: String, xmlNamespace: String, stringValue: String): PrintTicketParameterInitializer;

    mergeAndValidateTicket(deltaShemaTicket: WorkflowPrintTicket): WorkflowPrintTicket;

  }

  export class WorkflowPrintTicketValidationResult {
    extendedError: Number;
    validated: Boolean;
    constructor();

  }

