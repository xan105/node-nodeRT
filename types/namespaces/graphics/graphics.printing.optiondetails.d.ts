  export class PrintPageDescription {
    pageSize: Object;
    imageableRect: Object;
    dpiX: Number;
    dpiY: Number;
    constructor();
  }

  export enum PrintOptionStates {
    none,
    enabled,
    constrained,
  }

  export enum PrintOptionType {
    unknown,
    number,
    text,
    itemList,
    toggle,
  }

  export class IPrintCustomOptionDetails {
    displayName: String;
    constructor();

  }

  export class IPrintItemListOptionDetails {
    items: Object;
    constructor();

  }

  export class IPrintNumberOptionDetails {
    maxValue: Number;
    minValue: Number;
    constructor();

  }

  export class IPrintOptionDetails {
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    state: PrintOptionStates;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class IPrintTextOptionDetails {
    maxCharacters: Number;
    constructor();

  }

  export class PrintBindingOptionDetails {
    warningText: String;
    description: String;
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintBorderingOptionDetails {
    warningText: String;
    description: String;
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintCollationOptionDetails {
    warningText: String;
    description: String;
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintColorModeOptionDetails {
    warningText: String;
    description: String;
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintCopiesOptionDetails {
    warningText: String;
    description: String;
    maxValue: Number;
    minValue: Number;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintCustomItemDetails {
    itemDisplayName: String;
    itemId: String;
    constructor();

  }

  export class PrintCustomItemListOptionDetails {
    warningText: String;
    description: String;
    displayName: String;
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

    addItem(itemId: String, displayName: String): void;
    addItem(itemId: String, displayName: String, description: String, icon: Object): void;

  }

  export class PrintCustomTextOptionDetails {
    displayName: String;
    maxCharacters: Number;
    warningText: String;
    description: String;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintCustomToggleOptionDetails {
    displayName: String;
    warningText: String;
    description: String;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintDuplexOptionDetails {
    warningText: String;
    description: String;
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintHolePunchOptionDetails {
    warningText: String;
    description: String;
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintMediaSizeOptionDetails {
    items: Object;
    warningText: String;
    description: String;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintMediaTypeOptionDetails {
    items: Object;
    warningText: String;
    description: String;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintOrientationOptionDetails {
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    warningText: String;
    description: String;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintPageRangeOptionDetails {
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    warningText: String;
    description: String;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintQualityOptionDetails {
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    warningText: String;
    description: String;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintStapleOptionDetails {
    items: Object;
    state: PrintOptionStates;
    errorText: String;
    optionId: String;
    optionType: PrintOptionType;
    value: Object;
    warningText: String;
    description: String;
    constructor();

    trySetValue(value: Object): Boolean;

  }

  export class PrintTaskOptionChangedEventArgs {
    optionId: Object;
    constructor();

  }

  export class PrintTaskOptionDetails {
    displayedOptions: Object;
    options: Object;
    constructor();

    static getFromPrintTaskOptions(printTaskOptions: Object): PrintTaskOptionDetails;


    createItemListOption(optionId: String, displayName: String): PrintCustomItemListOptionDetails;

    createTextOption(optionId: String, displayName: String): PrintCustomTextOptionDetails;

    getPageDescription(jobPageNumber: Number): PrintPageDescription;

    createToggleOption(optionId: String, displayName: String): PrintCustomToggleOptionDetails;

    addListener(type: "BeginValidation", listener: (ev: Event) => void): void ;
    removeListener(type: "BeginValidation", listener: (ev: Event) => void): void ;
    on(type: "BeginValidation", listener: (ev: Event) => void): void ;
    off(type: "BeginValidation", listener: (ev: Event) => void): void ;
    
    addListener(type: "OptionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OptionChanged", listener: (ev: Event) => void): void ;
    on(type: "OptionChanged", listener: (ev: Event) => void): void ;
    off(type: "OptionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

