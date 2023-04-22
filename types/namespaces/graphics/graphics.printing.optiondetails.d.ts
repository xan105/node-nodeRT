  export class PrintPageDescription {
    pageSize: Object;
    imageableRect: Object;
    dpiX: number;
    dpiY: number;
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

  export class IPrintOptionDetails {
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    state: PrintOptionStates;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class IPrintNumberOptionDetails {
    maxValue: number;
    minValue: number;
    constructor();

  }

  export class IPrintTextOptionDetails {
    maxCharacters: number;
    constructor();

  }

  export class IPrintItemListOptionDetails {
    items: Object;
    constructor();

  }

  export class PrintCopiesOptionDetails {
    warningText: string;
    description: string;
    maxValue: number;
    minValue: number;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintMediaSizeOptionDetails {
    items: Object;
    warningText: string;
    description: string;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintMediaTypeOptionDetails {
    items: Object;
    warningText: string;
    description: string;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintOrientationOptionDetails {
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    warningText: string;
    description: string;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintQualityOptionDetails {
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    warningText: string;
    description: string;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintColorModeOptionDetails {
    warningText: string;
    description: string;
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintDuplexOptionDetails {
    warningText: string;
    description: string;
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintCollationOptionDetails {
    warningText: string;
    description: string;
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintStapleOptionDetails {
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    warningText: string;
    description: string;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintHolePunchOptionDetails {
    warningText: string;
    description: string;
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintBindingOptionDetails {
    warningText: string;
    description: string;
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintBorderingOptionDetails {
    warningText: string;
    description: string;
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintPageRangeOptionDetails {
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    warningText: string;
    description: string;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class IPrintCustomOptionDetails {
    displayName: string;
    constructor();

  }

  export class PrintCustomTextOptionDetails {
    displayName: string;
    maxCharacters: number;
    warningText: string;
    description: string;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintCustomToggleOptionDetails {
    displayName: string;
    warningText: string;
    description: string;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

  }

  export class PrintCustomItemDetails {
    itemDisplayName: string;
    itemId: string;
    constructor();

  }

  export class PrintCustomItemListOptionDetails {
    warningText: string;
    description: string;
    displayName: string;
    items: Object;
    state: PrintOptionStates;
    errorText: string;
    optionId: string;
    optionType: PrintOptionType;
    value: Object;
    constructor();

    trySetValue(value: Object): boolean;

    addItem(itemId: string, displayName: string): void;
    addItem(itemId: string, displayName: string, description: string, icon: Object): void;

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


    createItemListOption(optionId: string, displayName: string): PrintCustomItemListOptionDetails;

    createTextOption(optionId: string, displayName: string): PrintCustomTextOptionDetails;

    getPageDescription(jobPageNumber: number): PrintPageDescription;

    createToggleOption(optionId: string, displayName: string): PrintCustomToggleOptionDetails;

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

