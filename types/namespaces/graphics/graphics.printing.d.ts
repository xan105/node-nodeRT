  export class Size {
    constructor();
  }

  export class PrintPageDescription {
    pageSize: Object;
    imageableRect: Object;
    dpiX: Number;
    dpiY: Number;
    constructor();
  }

  export enum PrintBinding {
    default,
    notAvailable,
    printerCustom,
    none,
    bale,
    bindBottom,
    bindLeft,
    bindRight,
    bindTop,
    booklet,
    edgeStitchBottom,
    edgeStitchLeft,
    edgeStitchRight,
    edgeStitchTop,
    fold,
    jogOffset,
    trim,
  }

  export enum PrintBordering {
    default,
    notAvailable,
    printerCustom,
    bordered,
    borderless,
  }

  export enum PrintCollation {
    default,
    notAvailable,
    printerCustom,
    collated,
    uncollated,
  }

  export enum PrintColorMode {
    default,
    notAvailable,
    printerCustom,
    color,
    grayscale,
    monochrome,
  }

  export enum PrintDuplex {
    default,
    notAvailable,
    printerCustom,
    oneSided,
    twoSidedShortEdge,
    twoSidedLongEdge,
  }

  export enum PrintHolePunch {
    default,
    notAvailable,
    printerCustom,
    none,
    leftEdge,
    rightEdge,
    topEdge,
    bottomEdge,
  }

  export enum PrintMediaSize {
    default,
    notAvailable,
    printerCustom,
    businessCard,
    creditCard,
    isoA0,
    isoA1,
    isoA10,
    isoA2,
    isoA3,
    isoA3Extra,
    isoA3Rotated,
    isoA4,
    isoA4Extra,
    isoA4Rotated,
    isoA5,
    isoA5Extra,
    isoA5Rotated,
    isoA6,
    isoA6Rotated,
    isoA7,
    isoA8,
    isoA9,
    isoB0,
    isoB1,
    isoB10,
    isoB2,
    isoB3,
    isoB4,
    isoB4Envelope,
    isoB5Envelope,
    isoB5Extra,
    isoB7,
    isoB8,
    isoB9,
    isoC0,
    isoC1,
    isoC10,
    isoC2,
    isoC3,
    isoC3Envelope,
    isoC4,
    isoC4Envelope,
    isoC5,
    isoC5Envelope,
    isoC6,
    isoC6C5Envelope,
    isoC6Envelope,
    isoC7,
    isoC8,
    isoC9,
    isoDLEnvelope,
    isoDLEnvelopeRotated,
    isoSRA3,
    japan2LPhoto,
    japanChou3Envelope,
    japanChou3EnvelopeRotated,
    japanChou4Envelope,
    japanChou4EnvelopeRotated,
    japanDoubleHagakiPostcard,
    japanDoubleHagakiPostcardRotated,
    japanHagakiPostcard,
    japanHagakiPostcardRotated,
    japanKaku2Envelope,
    japanKaku2EnvelopeRotated,
    japanKaku3Envelope,
    japanKaku3EnvelopeRotated,
    japanLPhoto,
    japanQuadrupleHagakiPostcard,
    japanYou1Envelope,
    japanYou2Envelope,
    japanYou3Envelope,
    japanYou4Envelope,
    japanYou4EnvelopeRotated,
    japanYou6Envelope,
    japanYou6EnvelopeRotated,
    jisB0,
    jisB1,
    jisB10,
    jisB2,
    jisB3,
    jisB4,
    jisB4Rotated,
    jisB5,
    jisB5Rotated,
    jisB6,
    jisB6Rotated,
    jisB7,
    jisB8,
    jisB9,
    northAmerica10x11,
    northAmerica10x12,
    northAmerica10x14,
    northAmerica11x17,
    northAmerica14x17,
    northAmerica4x6,
    northAmerica4x8,
    northAmerica5x7,
    northAmerica8x10,
    northAmerica9x11,
    northAmericaArchitectureASheet,
    northAmericaArchitectureBSheet,
    northAmericaArchitectureCSheet,
    northAmericaArchitectureDSheet,
    northAmericaArchitectureESheet,
    northAmericaCSheet,
    northAmericaDSheet,
    northAmericaESheet,
    northAmericaExecutive,
    northAmericaGermanLegalFanfold,
    northAmericaGermanStandardFanfold,
    northAmericaLegal,
    northAmericaLegalExtra,
    northAmericaLetter,
    northAmericaLetterExtra,
    northAmericaLetterPlus,
    northAmericaLetterRotated,
    northAmericaMonarchEnvelope,
    northAmericaNote,
    northAmericaNumber10Envelope,
    northAmericaNumber10EnvelopeRotated,
    northAmericaNumber11Envelope,
    northAmericaNumber12Envelope,
    northAmericaNumber14Envelope,
    northAmericaNumber9Envelope,
    northAmericaPersonalEnvelope,
    northAmericaQuarto,
    northAmericaStatement,
    northAmericaSuperA,
    northAmericaSuperB,
    northAmericaTabloid,
    northAmericaTabloidExtra,
    otherMetricA3Plus,
    otherMetricA4Plus,
    otherMetricFolio,
    otherMetricInviteEnvelope,
    otherMetricItalianEnvelope,
    prc10Envelope,
    prc10EnvelopeRotated,
    prc16K,
    prc16KRotated,
    prc1Envelope,
    prc1EnvelopeRotated,
    prc2Envelope,
    prc2EnvelopeRotated,
    prc32K,
    prc32KBig,
    prc32KRotated,
    prc3Envelope,
    prc3EnvelopeRotated,
    prc4Envelope,
    prc4EnvelopeRotated,
    prc5Envelope,
    prc5EnvelopeRotated,
    prc6Envelope,
    prc6EnvelopeRotated,
    prc7Envelope,
    prc7EnvelopeRotated,
    prc8Envelope,
    prc8EnvelopeRotated,
    prc9Envelope,
    prc9EnvelopeRotated,
    roll04Inch,
    roll06Inch,
    roll08Inch,
    roll12Inch,
    roll15Inch,
    roll18Inch,
    roll22Inch,
    roll24Inch,
    roll30Inch,
    roll36Inch,
    roll54Inch,
  }

  export enum PrintMediaType {
    default,
    notAvailable,
    printerCustom,
    autoSelect,
    archival,
    backPrintFilm,
    bond,
    cardStock,
    continuous,
    envelopePlain,
    envelopeWindow,
    fabric,
    highResolution,
    label,
    multiLayerForm,
    multiPartForm,
    photographic,
    photographicFilm,
    photographicGlossy,
    photographicHighGloss,
    photographicMatte,
    photographicSatin,
    photographicSemiGloss,
    plain,
    screen,
    screenPaged,
    stationery,
    tabStockFull,
    tabStockPreCut,
    transparency,
    tShirtTransfer,
    none,
  }

  export enum PrintOrientation {
    default,
    notAvailable,
    printerCustom,
    portrait,
    portraitFlipped,
    landscape,
    landscapeFlipped,
  }

  export enum PrintQuality {
    default,
    notAvailable,
    printerCustom,
    automatic,
    draft,
    fax,
    high,
    normal,
    photographic,
    text,
  }

  export enum PrintStaple {
    default,
    notAvailable,
    printerCustom,
    none,
    stapleTopLeft,
    stapleTopRight,
    stapleBottomLeft,
    stapleBottomRight,
    stapleDualLeft,
    stapleDualRight,
    stapleDualTop,
    stapleDualBottom,
    saddleStitch,
  }

  export enum PrintTaskCompletion {
    abandoned,
    canceled,
    failed,
    submitted,
  }

  export class IPrintDocumentSource {
    constructor();

  }

  export class IPrintTaskOptionsCore {
    constructor();

    getPageDescription(jobPageNumber: Number): PrintPageDescription;

  }

  export class IPrintTaskOptionsCoreProperties {
    binding: PrintBinding;
    collation: PrintCollation;
    colorMode: PrintColorMode;
    duplex: PrintDuplex;
    holePunch: PrintHolePunch;
    maxCopies: Number;
    mediaSize: PrintMediaSize;
    mediaType: PrintMediaType;
    minCopies: Number;
    numberOfCopies: Number;
    orientation: PrintOrientation;
    printQuality: PrintQuality;
    staple: PrintStaple;
    constructor();

  }

  export class IPrintTaskOptionsCoreUIConfiguration {
    displayedOptions: Object;
    constructor();

  }

  export class PrintManager {
    constructor();

    static showPrintUIAsync(callback: (error: Error, result: Boolean) => void): void ;


    static isSupported(): Boolean;


    static getForCurrentView(): PrintManager;


    addListener(type: "PrintTaskRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PrintTaskRequested", listener: (ev: Event) => void): void ;
    on(type: "PrintTaskRequested", listener: (ev: Event) => void): void ;
    off(type: "PrintTaskRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintPageInfo {
    pageSize: Object;
    orientation: PrintOrientation;
    mediaSize: PrintMediaSize;
    dpiY: Number;
    dpiX: Number;
    constructor();

  }

  export class PrintPageRange {
    firstPageNumber: Number;
    lastPageNumber: Number;
    constructor();
    constructor(firstPage: Number, lastPage: Number);
    constructor(page: Number);

  }

  export class PrintPageRangeOptions {
    allowCustomSetOfPages: Boolean;
    allowCurrentPage: Boolean;
    allowAllPages: Boolean;
    constructor();

  }

  export class PrintTask {
    options: PrintTaskOptions;
    properties: Object;
    source: IPrintDocumentSource;
    isPreviewEnabled: Boolean;
    isPrinterTargetEnabled: Boolean;
    is3DManufacturingTargetEnabled: Boolean;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Previewing", listener: (ev: Event) => void): void ;
    removeListener(type: "Previewing", listener: (ev: Event) => void): void ;
    on(type: "Previewing", listener: (ev: Event) => void): void ;
    off(type: "Previewing", listener: (ev: Event) => void): void ;
    
    addListener(type: "Progressing", listener: (ev: Event) => void): void ;
    removeListener(type: "Progressing", listener: (ev: Event) => void): void ;
    on(type: "Progressing", listener: (ev: Event) => void): void ;
    off(type: "Progressing", listener: (ev: Event) => void): void ;
    
    addListener(type: "Submitting", listener: (ev: Event) => void): void ;
    removeListener(type: "Submitting", listener: (ev: Event) => void): void ;
    on(type: "Submitting", listener: (ev: Event) => void): void ;
    off(type: "Submitting", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintTaskCompletedEventArgs {
    completion: PrintTaskCompletion;
    constructor();

  }

  export class PrintTaskOptions {
    bordering: PrintBordering;
    pageRangeOptions: PrintPageRangeOptions;
    customPageRanges: Object;
    mediaType: PrintMediaType;
    holePunch: PrintHolePunch;
    binding: PrintBinding;
    duplex: PrintDuplex;
    colorMode: PrintColorMode;
    collation: PrintCollation;
    staple: PrintStaple;
    printQuality: PrintQuality;
    orientation: PrintOrientation;
    mediaSize: PrintMediaSize;
    numberOfCopies: Number;
    maxCopies: Number;
    minCopies: Number;
    displayedOptions: Object;
    constructor();

    getPageDescription(jobPageNumber: Number): PrintPageDescription;

    getPagePrintTicket(printPageInfo: PrintPageInfo): Object;

  }

  export class PrintTaskProgressingEventArgs {
    documentPageCount: Number;
    constructor();

  }

  export class PrintTaskRequest {
    deadline: Date;
    constructor();

    createPrintTask(title: String, handler: Object): PrintTask;

    getDeferral(): PrintTaskRequestedDeferral;

  }

  export class PrintTaskRequestedDeferral {
    constructor();

    complete(): void;

  }

  export class PrintTaskRequestedEventArgs {
    request: PrintTaskRequest;
    constructor();

  }

  export class PrintTaskSourceRequestedArgs {
    deadline: Date;
    constructor();

    setSource(source: IPrintDocumentSource): void;

    getDeferral(): PrintTaskSourceRequestedDeferral;

  }

  export class PrintTaskSourceRequestedDeferral {
    constructor();

    complete(): void;

  }

  export class StandardPrintTaskOptions {
    static copies: String;
    static binding: String;
    static collation: String;
    static colorMode: String;
    static mediaType: String;
    static duplex: String;
    static holePunch: String;
    static inputBin: String;
    static mediaSize: String;
    static nUp: String;
    static orientation: String;
    static printQuality: String;
    static staple: String;
    static bordering: String;
    static customPageRanges: String;
    constructor();

  }

export const PrintBinding: any;
export const PrintBordering: any;
export const PrintCollation: any;
export const PrintColorMode: any;
export const PrintDuplex: any;
export const PrintHolePunch: any;
export const PrintMediaSize: any;
export const PrintMediaType: any;
export const PrintOrientation: any;
export const PrintQuality: any;
export const PrintStaple: any;
export const PrintTaskCompletion: any;
export const IPrintDocumentSource: any;
export const IPrintTaskOptionsCore: any;
export const IPrintTaskOptionsCoreProperties: any;
export const IPrintTaskOptionsCoreUIConfiguration: any;
export const PrintManager: any;
export const PrintPageInfo: any;
export const PrintPageRange: any;
export const PrintPageRangeOptions: any;
export const PrintTask: any;
export const PrintTaskCompletedEventArgs: any;
export const PrintTaskOptions: any;
export const PrintTaskProgressingEventArgs: any;
export const PrintTaskRequest: any;
export const PrintTaskRequestedDeferral: any;
export const PrintTaskRequestedEventArgs: any;
export const PrintTaskSourceRequestedArgs: any;
export const PrintTaskSourceRequestedDeferral: any;
export const StandardPrintTaskOptions: any;
export * as optiondetails from "./graphics.printing.optiondetails.js";
export * as printsupport from "./graphics.printing.printsupport.js";
export * as printticket from "./graphics.printing.printticket.js";
export * as workflow from "./graphics.printing.workflow.js";
