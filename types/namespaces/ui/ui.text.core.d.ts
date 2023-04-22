  export class Rect {
    constructor();
  }

  export class CoreTextRange {
    startCaretPosition: number;
    endCaretPosition: number;
    constructor();
  }

  export enum CoreTextInputScope {
    default,
    url,
    filePath,
    fileName,
    emailUserName,
    emailAddress,
    userName,
    personalFullName,
    personalNamePrefix,
    personalGivenName,
    personalMiddleName,
    personalSurname,
    personalNameSuffix,
    address,
    addressPostalCode,
    addressStreet,
    addressStateOrProvince,
    addressCity,
    addressCountryName,
    addressCountryShortName,
    currencyAmountAndSymbol,
    currencyAmount,
    date,
    dateMonth,
    dateDay,
    dateYear,
    dateMonthName,
    dateDayName,
    number,
    singleCharacter,
    password,
    telephoneNumber,
    telephoneCountryCode,
    telephoneAreaCode,
    telephoneLocalNumber,
    time,
    timeHour,
    timeMinuteOrSecond,
    numberFullWidth,
    alphanumericHalfWidth,
    alphanumericFullWidth,
    currencyChinese,
    bopomofo,
    hiragana,
    katakanaHalfWidth,
    katakanaFullWidth,
    hanja,
    hangulHalfWidth,
    hangulFullWidth,
    search,
    formula,
    searchIncremental,
    chineseHalfWidth,
    chineseFullWidth,
    nativeScript,
    text,
    chat,
    nameOrPhoneNumber,
    emailUserNameOrAddress,
    private,
    maps,
    passwordNumeric,
    formulaNumber,
    chatWithoutEmoji,
    digits,
    pinNumeric,
    pinAlphanumeric,
  }

  export enum CoreTextInputPaneDisplayPolicy {
    automatic,
    manual,
  }

  export enum CoreTextTextUpdatingResult {
    succeeded,
    failed,
  }

  export enum CoreTextSelectionUpdatingResult {
    succeeded,
    failed,
  }

  export enum CoreTextFormatUpdatingResult {
    succeeded,
    failed,
  }

  export enum CoreTextFormatUpdatingReason {
    none,
    compositionUnconverted,
    compositionConverted,
    compositionTargetUnconverted,
    compositionTargetConverted,
  }

  export class CoreTextTextRequest {
    text: string;
    isCanceled: boolean;
    range: CoreTextRange;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextSelectionRequest {
    selection: CoreTextRange;
    isCanceled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextLayoutBounds {
    textBounds: Object;
    controlBounds: Object;
    constructor();

  }

  export class CoreTextLayoutRequest {
    isCanceled: boolean;
    layoutBounds: CoreTextLayoutBounds;
    range: CoreTextRange;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextCompositionSegment {
    preconversionString: string;
    range: CoreTextRange;
    constructor();

  }

  export class CoreTextEditContext {
    name: string;
    isReadOnly: boolean;
    inputScope: CoreTextInputScope;
    inputPaneDisplayPolicy: CoreTextInputPaneDisplayPolicy;
    constructor();

    notifyFocusEnter(): void;

    notifyFocusLeave(): void;

    notifyTextChanged(modifiedRange: CoreTextRange, newLength: number, newSelection: CoreTextRange): void;

    notifySelectionChanged(selection: CoreTextRange): void;

    notifyLayoutChanged(): void;

    addListener(type: "CompositionCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "CompositionCompleted", listener: (ev: Event) => void): void ;
    on(type: "CompositionCompleted", listener: (ev: Event) => void): void ;
    off(type: "CompositionCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "CompositionStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "CompositionStarted", listener: (ev: Event) => void): void ;
    on(type: "CompositionStarted", listener: (ev: Event) => void): void ;
    off(type: "CompositionStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusRemoved", listener: (ev: Event) => void): void ;
    on(type: "FocusRemoved", listener: (ev: Event) => void): void ;
    off(type: "FocusRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "FormatUpdating", listener: (ev: Event) => void): void ;
    removeListener(type: "FormatUpdating", listener: (ev: Event) => void): void ;
    on(type: "FormatUpdating", listener: (ev: Event) => void): void ;
    off(type: "FormatUpdating", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutRequested", listener: (ev: Event) => void): void ;
    on(type: "LayoutRequested", listener: (ev: Event) => void): void ;
    off(type: "LayoutRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SelectionRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectionRequested", listener: (ev: Event) => void): void ;
    on(type: "SelectionRequested", listener: (ev: Event) => void): void ;
    off(type: "SelectionRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SelectionUpdating", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectionUpdating", listener: (ev: Event) => void): void ;
    on(type: "SelectionUpdating", listener: (ev: Event) => void): void ;
    off(type: "SelectionUpdating", listener: (ev: Event) => void): void ;
    
    addListener(type: "TextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "TextRequested", listener: (ev: Event) => void): void ;
    on(type: "TextRequested", listener: (ev: Event) => void): void ;
    off(type: "TextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "TextUpdating", listener: (ev: Event) => void): void ;
    removeListener(type: "TextUpdating", listener: (ev: Event) => void): void ;
    on(type: "TextUpdating", listener: (ev: Event) => void): void ;
    off(type: "TextUpdating", listener: (ev: Event) => void): void ;
    
    addListener(type: "NotifyFocusLeaveCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "NotifyFocusLeaveCompleted", listener: (ev: Event) => void): void ;
    on(type: "NotifyFocusLeaveCompleted", listener: (ev: Event) => void): void ;
    off(type: "NotifyFocusLeaveCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreTextTextRequestedEventArgs {
    request: CoreTextTextRequest;
    constructor();

  }

  export class CoreTextSelectionRequestedEventArgs {
    request: CoreTextSelectionRequest;
    constructor();

  }

  export class CoreTextLayoutRequestedEventArgs {
    request: CoreTextLayoutRequest;
    constructor();

  }

  export class CoreTextTextUpdatingEventArgs {
    result: CoreTextTextUpdatingResult;
    inputLanguage: Object;
    isCanceled: boolean;
    newSelection: CoreTextRange;
    range: CoreTextRange;
    text: string;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextSelectionUpdatingEventArgs {
    result: CoreTextSelectionUpdatingResult;
    isCanceled: boolean;
    selection: CoreTextRange;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextFormatUpdatingEventArgs {
    result: CoreTextFormatUpdatingResult;
    backgroundColor: number;
    isCanceled: boolean;
    range: CoreTextRange;
    reason: CoreTextFormatUpdatingReason;
    textColor: number;
    underlineColor: number;
    underlineType: number;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextCompositionStartedEventArgs {
    isCanceled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextCompositionCompletedEventArgs {
    compositionSegments: Object;
    isCanceled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class CoreTextServicesManager {
    inputLanguage: Object;
    constructor();

    static getForCurrentView(): CoreTextServicesManager;


    createEditContext(): CoreTextEditContext;

    addListener(type: "InputLanguageChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "InputLanguageChanged", listener: (ev: Event) => void): void ;
    on(type: "InputLanguageChanged", listener: (ev: Event) => void): void ;
    off(type: "InputLanguageChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreTextServicesConstants {
    static hiddenCharacter: string;
    constructor();

  }

