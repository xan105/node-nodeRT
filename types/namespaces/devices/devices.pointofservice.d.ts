  export class Rect {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class Point {
    constructor();
  }

  export enum UnifiedPosErrorSeverity {
    unknownErrorSeverity,
    warning,
    recoverable,
    unrecoverable,
    assistanceRequired,
    fatal,
  }

  export enum UnifiedPosPowerReportingType {
    unknownPowerReportingType,
    standard,
    advanced,
  }

  export enum UnifiedPosHealthCheckLevel {
    unknownHealthCheckLevel,
    pOSInternal,
    external,
    interactive,
  }

  export enum UnifiedPosErrorReason {
    unknownErrorReason,
    noService,
    disabled,
    illegal,
    noHardware,
    closed,
    offline,
    failure,
    timeout,
    busy,
    extended,
  }

  export enum MagneticStripeReaderAuthenticationLevel {
    notSupported,
    optional,
    required,
  }

  export enum PosPrinterMapMode {
    dots,
    twips,
    english,
    metric,
  }

  export enum PosPrinterCartridgeSensors {
    none,
    removed,
    empty,
    headCleaning,
    nearEnd,
  }

  export enum PosPrinterColorCapabilities {
    none,
    primary,
    custom1,
    custom2,
    custom3,
    custom4,
    custom5,
    custom6,
    cyan,
    magenta,
    yellow,
    full,
  }

  export enum PosPrinterColorCartridge {
    unknown,
    primary,
    custom1,
    custom2,
    custom3,
    custom4,
    custom5,
    custom6,
    cyan,
    magenta,
    yellow,
  }

  export enum PosPrinterMarkFeedCapabilities {
    none,
    toTakeUp,
    toCutter,
    toCurrentTopOfForm,
    toNextTopOfForm,
  }

  export enum PosPrinterRuledLineCapabilities {
    none,
    horizontal,
    vertical,
  }

  export enum PosPrinterPrintSide {
    unknown,
    side1,
    side2,
  }

  export enum PosPrinterLineDirection {
    horizontal,
    vertical,
  }

  export enum PosPrinterLineStyle {
    singleSolid,
    doubleSolid,
    broken,
    chain,
  }

  export enum PosPrinterMarkFeedKind {
    toTakeUp,
    toCutter,
    toCurrentTopOfForm,
    toNextTopOfForm,
  }

  export enum PosPrinterAlignment {
    left,
    center,
    right,
  }

  export enum PosPrinterBarcodeTextPosition {
    none,
    above,
    below,
  }

  export enum PosPrinterRotation {
    normal,
    right90,
    left90,
    rotate180,
  }

  export enum PosPrinterStatusKind {
    online,
    off,
    offline,
    offOrOffline,
    extended,
  }

  export enum CashDrawerStatusKind {
    online,
    off,
    offline,
    offOrOffline,
    extended,
  }

  export enum BarcodeScannerStatus {
    online,
    off,
    offline,
    offOrOffline,
    extended,
  }

  export enum LineDisplayPowerStatus {
    unknown,
    online,
    off,
    offline,
    offOrOffline,
  }

  export enum LineDisplayHorizontalAlignment {
    left,
    center,
    right,
  }

  export enum LineDisplayVerticalAlignment {
    top,
    center,
    bottom,
  }

  export enum LineDisplayScrollDirection {
    up,
    down,
    left,
    right,
  }

  export enum LineDisplayTextAttribute {
    normal,
    blink,
    reverse,
    reverseBlink,
  }

  export enum LineDisplayCursorType {
    none,
    block,
    halfBlock,
    underline,
    reverse,
    other,
  }

  export enum LineDisplayMarqueeFormat {
    none,
    walk,
    place,
  }

  export enum LineDisplayDescriptorState {
    off,
    on,
    blink,
  }

  export enum LineDisplayTextAttributeGranularity {
    notSupported,
    entireDisplay,
    perCharacter,
  }

  export enum PosConnectionTypes {
    local,
    iP,
    bluetooth,
    all,
  }

  export enum BarcodeSymbologyDecodeLengthKind {
    anyLength,
    discrete,
    range,
  }

  export enum MagneticStripeReaderStatus {
    unauthenticated,
    authenticated,
    extended,
  }

  export enum MagneticStripeReaderAuthenticationProtocol {
    none,
    challengeResponse,
  }

  export enum MagneticStripeReaderTrackIds {
    none,
    track1,
    track2,
    track3,
    track4,
  }

  export enum MagneticStripeReaderErrorReportingType {
    cardLevel,
    trackLevel,
  }

  export enum MagneticStripeReaderTrackErrorType {
    none,
    startSentinelError,
    endSentinelError,
    parityError,
    lrcError,
    unknown,
  }

  export class UnifiedPosErrorData {
    extendedReason: number;
    message: string;
    reason: UnifiedPosErrorReason;
    severity: UnifiedPosErrorSeverity;
    constructor();
    constructor(message: string, severity: UnifiedPosErrorSeverity, reason: UnifiedPosErrorReason, extendedReason: number);

  }

  export class BarcodeScannerStatusUpdatedEventArgs {
    extendedStatus: number;
    status: BarcodeScannerStatus;
    constructor();

  }

  export class BarcodeSymbologies {
    static extendedBase: number;
    static ausPost: number;
    static aztec: number;
    static canPost: number;
    static ccab: number;
    static ccc: number;
    static chinaPost: number;
    static codabar: number;
    static codablock128: number;
    static codablockA: number;
    static codablockF: number;
    static code11: number;
    static code128: number;
    static code16k: number;
    static code32: number;
    static code39: number;
    static code39Ex: number;
    static code49: number;
    static code93: number;
    static code93Ex: number;
    static dataCode: number;
    static dataMatrix: number;
    static dutchKix: number;
    static ean13: number;
    static ean13Add2: number;
    static ean13Add5: number;
    static ean8: number;
    static ean8Add2: number;
    static ean8Add5: number;
    static ean99: number;
    static ean99Add2: number;
    static ean99Add5: number;
    static eanv: number;
    static eanvAdd2: number;
    static eanvAdd5: number;
    static telepen: number;
    static gs1128: number;
    static gs1128Coupon: number;
    static gs1DatabarType1: number;
    static gs1DatabarType2: number;
    static gs1DatabarType3: number;
    static hanXin: number;
    static infoMail: number;
    static isbn: number;
    static isbnAdd5: number;
    static isbt: number;
    static ismn: number;
    static ismnAdd2: number;
    static ismnAdd5: number;
    static issn: number;
    static issnAdd2: number;
    static issnAdd5: number;
    static italianPost25: number;
    static italianPost39: number;
    static japanPost: number;
    static koreanPost: number;
    static maxicode: number;
    static micr: number;
    static microPdf417: number;
    static microQr: number;
    static msTag: number;
    static msi: number;
    static ocrA: number;
    static ocrB: number;
    static pdf417: number;
    static plessey: number;
    static pzn: number;
    static qr: number;
    static sisac: number;
    static swedenPost: number;
    static tfDis: number;
    static tfIata: number;
    static tfInd: number;
    static tfInt: number;
    static tfMat: number;
    static tfStd: number;
    static tlc39: number;
    static trioptic39: number;
    static uccEan128: number;
    static ukPost: number;
    static unknown: number;
    static upcCoupon: number;
    static upca: number;
    static upcaAdd2: number;
    static upcaAdd5: number;
    static upce: number;
    static upceAdd2: number;
    static upceAdd5: number;
    static us4StateFics: number;
    static usIntelligent: number;
    static usIntelligentPkg: number;
    static usPlanet: number;
    static usPostNet: number;
    static gs1DWCode: number;
    constructor();

    static getName(scanDataType: number): string;


  }

  export class BarcodeSymbologyAttributes {
    isCheckDigitValidationEnabled: boolean;
    isCheckDigitTransmissionEnabled: boolean;
    decodeLengthKind: BarcodeSymbologyDecodeLengthKind;
    decodeLength2: number;
    decodeLength1: number;
    isCheckDigitTransmissionSupported: boolean;
    isCheckDigitValidationSupported: boolean;
    isDecodeLengthSupported: boolean;
    constructor();

  }

  export class BarcodeScannerReport {
    scanData: Object;
    scanDataLabel: Object;
    scanDataType: number;
    constructor();
    constructor(scanDataType: number, scanData: Object, scanDataLabel: Object);

  }

  export class BarcodeScannerDataReceivedEventArgs {
    report: BarcodeScannerReport;
    constructor();

  }

  export class BarcodeScannerErrorOccurredEventArgs {
    errorData: UnifiedPosErrorData;
    isRetriable: boolean;
    partialInputData: BarcodeScannerReport;
    constructor();

  }

  export class BarcodeScannerImagePreviewReceivedEventArgs {
    preview: Object;
    constructor();

  }

  export class BarcodeScannerCapabilities {
    isImagePreviewSupported: boolean;
    isStatisticsReportingSupported: boolean;
    isStatisticsUpdatingSupported: boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    isSoftwareTriggerSupported: boolean;
    constructor();

  }

  export class BarcodeScanner {
    capabilities: BarcodeScannerCapabilities;
    deviceId: string;
    videoDeviceId: string;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: BarcodeScanner) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: BarcodeScanner) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): string;
    static getDeviceSelector(): string;


    claimScannerAsync(callback: (error: Error, result: ClaimedBarcodeScanner) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: string) => void): void ;

    getSupportedSymbologiesAsync(callback: (error: Error, result: Object) => void): void ;

    isSymbologySupportedAsync(barcodeSymbology: number, callback: (error: Error, result: boolean) => void): void ;

    retrieveStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: Object) => void): void ;

    getSupportedProfiles(): Object;

    isProfileSupported(profile: string): boolean;

    close(): void;
    addListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    on(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    off(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ClaimedBarcodeScanner {
    isDisabledOnDataReceived: boolean;
    isDecodeDataEnabled: boolean;
    deviceId: string;
    isEnabled: boolean;
    isVideoPreviewShownOnEnable: boolean;
    constructor();

    enableAsync(callback: (error: Error) => void): void ;

    disableAsync(callback: (error: Error) => void): void ;

    setActiveSymbologiesAsync(symbologies: Object, callback: (error: Error) => void): void ;

    resetStatisticsAsync(statisticsCategories: Object, callback: (error: Error) => void): void ;

    updateStatisticsAsync(statistics: Object, callback: (error: Error) => void): void ;

    setActiveProfileAsync(profile: string, callback: (error: Error) => void): void ;

    startSoftwareTriggerAsync(callback: (error: Error) => void): void ;

    stopSoftwareTriggerAsync(callback: (error: Error) => void): void ;

    getSymbologyAttributesAsync(barcodeSymbology: number, callback: (error: Error, result: BarcodeSymbologyAttributes) => void): void ;

    setSymbologyAttributesAsync(barcodeSymbology: number, attributes: BarcodeSymbologyAttributes, callback: (error: Error, result: boolean) => void): void ;

    showVideoPreviewAsync(callback: (error: Error, result: boolean) => void): void ;

    retainDevice(): void;

    close(): void;
    hideVideoPreview(): void;

    addListener(type: "DataReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "DataReceived", listener: (ev: Event) => void): void ;
    on(type: "DataReceived", listener: (ev: Event) => void): void ;
    off(type: "DataReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    removeListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    on(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    off(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    
    addListener(type: "ImagePreviewReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ImagePreviewReceived", listener: (ev: Event) => void): void ;
    on(type: "ImagePreviewReceived", listener: (ev: Event) => void): void ;
    off(type: "ImagePreviewReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    on(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    off(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "TriggerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "TriggerPressed", listener: (ev: Event) => void): void ;
    on(type: "TriggerPressed", listener: (ev: Event) => void): void ;
    off(type: "TriggerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "TriggerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "TriggerReleased", listener: (ev: Event) => void): void ;
    on(type: "TriggerReleased", listener: (ev: Event) => void): void ;
    off(type: "TriggerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MagneticStripeReaderEncryptionAlgorithms {
    static extendedBase: number;
    static none: number;
    static tripleDesDukpt: number;
    constructor();

  }

  export class MagneticStripeReaderCardTypes {
    static aamva: number;
    static bank: number;
    static extendedBase: number;
    static unknown: number;
    constructor();

  }

  export class MagneticStripeReaderTrackData {
    data: Object;
    discretionaryData: Object;
    encryptedData: Object;
    constructor();

  }

  export class MagneticStripeReaderReport {
    additionalSecurityInformation: Object;
    cardAuthenticationData: Object;
    cardAuthenticationDataLength: number;
    cardType: number;
    properties: Object;
    track1: MagneticStripeReaderTrackData;
    track2: MagneticStripeReaderTrackData;
    track3: MagneticStripeReaderTrackData;
    track4: MagneticStripeReaderTrackData;
    constructor();

  }

  export class MagneticStripeReaderBankCardDataReceivedEventArgs {
    accountNumber: string;
    expirationDate: string;
    firstName: string;
    middleInitial: string;
    report: MagneticStripeReaderReport;
    serviceCode: string;
    suffix: string;
    surname: string;
    title: string;
    constructor();

  }

  export class MagneticStripeReaderAamvaCardDataReceivedEventArgs {
    address: string;
    birthDate: string;
    city: string;
    class: string;
    endorsements: string;
    expirationDate: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hairColor: string;
    height: string;
    licenseNumber: string;
    postalCode: string;
    report: MagneticStripeReaderReport;
    restrictions: string;
    state: string;
    suffix: string;
    surname: string;
    weight: string;
    constructor();

  }

  export class MagneticStripeReaderVendorSpecificCardDataReceivedEventArgs {
    report: MagneticStripeReaderReport;
    constructor();

  }

  export class MagneticStripeReaderErrorOccurredEventArgs {
    errorData: UnifiedPosErrorData;
    partialInputData: MagneticStripeReaderReport;
    track1Status: MagneticStripeReaderTrackErrorType;
    track2Status: MagneticStripeReaderTrackErrorType;
    track3Status: MagneticStripeReaderTrackErrorType;
    track4Status: MagneticStripeReaderTrackErrorType;
    constructor();

  }

  export class MagneticStripeReaderStatusUpdatedEventArgs {
    extendedStatus: number;
    status: MagneticStripeReaderStatus;
    constructor();

  }

  export class MagneticStripeReaderCapabilities {
    authenticationLevel: MagneticStripeReaderAuthenticationLevel;
    cardAuthentication: string;
    isIsoSupported: boolean;
    isJisOneSupported: boolean;
    isJisTwoSupported: boolean;
    isStatisticsReportingSupported: boolean;
    isStatisticsUpdatingSupported: boolean;
    isTrackDataMaskingSupported: boolean;
    isTransmitSentinelsSupported: boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    supportedEncryptionAlgorithms: number;
    constructor();

  }

  export class ClaimedMagneticStripeReader {
    tracksToRead: MagneticStripeReaderTrackIds;
    isTransmitSentinelsEnabled: boolean;
    isDisabledOnDataReceived: boolean;
    isDecodeDataEnabled: boolean;
    dataEncryptionAlgorithm: number;
    deviceId: string;
    isDeviceAuthenticated: boolean;
    isEnabled: boolean;
    constructor();

    enableAsync(callback: (error: Error) => void): void ;

    disableAsync(callback: (error: Error) => void): void ;

    retrieveDeviceAuthenticationDataAsync(callback: (error: Error, result: Object) => void): void ;

    authenticateDeviceAsync(responseToken: Array<number>, callback: (error: Error) => void): void ;

    deAuthenticateDeviceAsync(responseToken: Array<number>, callback: (error: Error) => void): void ;

    updateKeyAsync(key: string, keyName: string, callback: (error: Error) => void): void ;

    resetStatisticsAsync(statisticsCategories: Object, callback: (error: Error) => void): void ;

    updateStatisticsAsync(statistics: Object, callback: (error: Error) => void): void ;

    retainDevice(): void;

    setErrorReportingType(value: MagneticStripeReaderErrorReportingType): void;

    close(): void;
    addListener(type: "AamvaCardDataReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "AamvaCardDataReceived", listener: (ev: Event) => void): void ;
    on(type: "AamvaCardDataReceived", listener: (ev: Event) => void): void ;
    off(type: "AamvaCardDataReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "BankCardDataReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "BankCardDataReceived", listener: (ev: Event) => void): void ;
    on(type: "BankCardDataReceived", listener: (ev: Event) => void): void ;
    off(type: "BankCardDataReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    removeListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    on(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    off(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    
    addListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    on(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    off(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "VendorSpecificDataReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "VendorSpecificDataReceived", listener: (ev: Event) => void): void ;
    on(type: "VendorSpecificDataReceived", listener: (ev: Event) => void): void ;
    off(type: "VendorSpecificDataReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MagneticStripeReader {
    capabilities: MagneticStripeReaderCapabilities;
    deviceAuthenticationProtocol: MagneticStripeReaderAuthenticationProtocol;
    deviceId: string;
    supportedCardTypes: Array<number>;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: MagneticStripeReader) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: MagneticStripeReader) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): string;
    static getDeviceSelector(): string;


    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: string) => void): void ;

    claimReaderAsync(callback: (error: Error, result: ClaimedMagneticStripeReader) => void): void ;

    retrieveStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: Object) => void): void ;

    getErrorReportingType(): MagneticStripeReaderErrorReportingType;

    close(): void;
    addListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    on(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    off(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PosPrinterCharacterSetIds {
    static ansi: number;
    static ascii: number;
    static utf16LE: number;
    constructor();

  }

  export class ICommonPosPrintStationCapabilities {
    cartridgeSensors: PosPrinterCartridgeSensors;
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    isBoldSupported: boolean;
    isDoubleHighDoubleWidePrintSupported: boolean;
    isDoubleHighPrintSupported: boolean;
    isDoubleWidePrintSupported: boolean;
    isDualColorSupported: boolean;
    isItalicSupported: boolean;
    isPaperEmptySensorSupported: boolean;
    isPaperNearEndSensorSupported: boolean;
    isPrinterPresent: boolean;
    isUnderlineSupported: boolean;
    supportedCharactersPerLine: Object;
    constructor();

  }

  export class ICommonReceiptSlipCapabilities {
    is180RotationSupported: boolean;
    isBarcodeSupported: boolean;
    isBitmapSupported: boolean;
    isLeft90RotationSupported: boolean;
    isPrintAreaSupported: boolean;
    isRight90RotationSupported: boolean;
    ruledLineCapabilities: PosPrinterRuledLineCapabilities;
    supportedBarcodeRotations: Object;
    supportedBitmapRotations: Object;
    constructor();

  }

  export class ReceiptPrinterCapabilities {
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    isBoldSupported: boolean;
    isDoubleHighDoubleWidePrintSupported: boolean;
    isDoubleHighPrintSupported: boolean;
    isDoubleWidePrintSupported: boolean;
    isDualColorSupported: boolean;
    isItalicSupported: boolean;
    isPaperEmptySensorSupported: boolean;
    isPaperNearEndSensorSupported: boolean;
    isPrinterPresent: boolean;
    isUnderlineSupported: boolean;
    supportedCharactersPerLine: Object;
    cartridgeSensors: PosPrinterCartridgeSensors;
    is180RotationSupported: boolean;
    supportedBarcodeRotations: Object;
    supportedBitmapRotations: Object;
    isLeft90RotationSupported: boolean;
    isBarcodeSupported: boolean;
    isBitmapSupported: boolean;
    isPrintAreaSupported: boolean;
    isRight90RotationSupported: boolean;
    ruledLineCapabilities: PosPrinterRuledLineCapabilities;
    isStampSupported: boolean;
    markFeedCapabilities: PosPrinterMarkFeedCapabilities;
    canCutPaper: boolean;
    constructor();

  }

  export class SlipPrinterCapabilities {
    isBoldSupported: boolean;
    isDoubleHighDoubleWidePrintSupported: boolean;
    isDoubleWidePrintSupported: boolean;
    isDoubleHighPrintSupported: boolean;
    isDualColorSupported: boolean;
    isItalicSupported: boolean;
    isPaperEmptySensorSupported: boolean;
    isPaperNearEndSensorSupported: boolean;
    isPrinterPresent: boolean;
    isUnderlineSupported: boolean;
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    supportedCharactersPerLine: Object;
    cartridgeSensors: PosPrinterCartridgeSensors;
    isBarcodeSupported: boolean;
    supportedBitmapRotations: Object;
    isPrintAreaSupported: boolean;
    supportedBarcodeRotations: Object;
    is180RotationSupported: boolean;
    isBitmapSupported: boolean;
    isLeft90RotationSupported: boolean;
    isRight90RotationSupported: boolean;
    ruledLineCapabilities: PosPrinterRuledLineCapabilities;
    isFullLengthSupported: boolean;
    isBothSidesPrintingSupported: boolean;
    constructor();

  }

  export class JournalPrinterCapabilities {
    cartridgeSensors: PosPrinterCartridgeSensors;
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    isBoldSupported: boolean;
    isDoubleHighDoubleWidePrintSupported: boolean;
    isDoubleHighPrintSupported: boolean;
    isDoubleWidePrintSupported: boolean;
    isDualColorSupported: boolean;
    isItalicSupported: boolean;
    isPaperEmptySensorSupported: boolean;
    isPaperNearEndSensorSupported: boolean;
    isPrinterPresent: boolean;
    isUnderlineSupported: boolean;
    supportedCharactersPerLine: Object;
    constructor();

  }

  export class PosPrinterCapabilities {
    canMapCharacterSet: boolean;
    defaultCharacterSet: number;
    hasCoverSensor: boolean;
    isStatisticsReportingSupported: boolean;
    isStatisticsUpdatingSupported: boolean;
    isTransactionSupported: boolean;
    journal: JournalPrinterCapabilities;
    powerReportingType: UnifiedPosPowerReportingType;
    receipt: ReceiptPrinterCapabilities;
    slip: SlipPrinterCapabilities;
    constructor();

  }

  export class PosPrinterStatus {
    extendedStatus: number;
    statusKind: PosPrinterStatusKind;
    constructor();

  }

  export class PosPrinterStatusUpdatedEventArgs {
    status: PosPrinterStatus;
    constructor();

  }

  export class PosPrinterReleaseDeviceRequestedEventArgs {
    constructor();

  }

  export class PosPrinter {
    capabilities: PosPrinterCapabilities;
    deviceId: string;
    status: PosPrinterStatus;
    supportedCharacterSets: Object;
    supportedTypeFaces: Object;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: PosPrinter) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: PosPrinter) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): string;
    static getDeviceSelector(): string;


    claimPrinterAsync(callback: (error: Error, result: ClaimedPosPrinter) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: string) => void): void ;

    getStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: string) => void): void ;

    close(): void;
    addListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    on(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    off(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ClaimedPosPrinter {
    mapMode: PosPrinterMapMode;
    isCharacterSetMappingEnabled: boolean;
    characterSet: number;
    deviceId: string;
    isCoverOpen: boolean;
    isEnabled: boolean;
    journal: ClaimedJournalPrinter;
    receipt: ClaimedReceiptPrinter;
    slip: ClaimedSlipPrinter;
    constructor();

    enableAsync(callback: (error: Error, result: boolean) => void): void ;

    disableAsync(callback: (error: Error, result: boolean) => void): void ;

    retainDeviceAsync(callback: (error: Error, result: boolean) => void): void ;

    resetStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: boolean) => void): void ;

    updateStatisticsAsync(statistics: Object, callback: (error: Error, result: boolean) => void): void ;

    close(): void;
    addListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    on(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    off(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IPosPrinterJob {
    constructor();

    executeAsync(callback: (error: Error, result: boolean) => void): void ;

    print(data: string): void;

    printLine(data: string): void;
    printLine(): void;

  }

  export class IReceiptOrSlipJob {
    constructor();

    setBarcodeRotation(value: PosPrinterRotation): void;

    setPrintRotation(value: PosPrinterRotation, includeBitmaps: boolean): void;

    setPrintArea(value: Object): void;

    setBitmap(bitmapNumber: number, bitmap: Object, alignment: PosPrinterAlignment): void;
    setBitmap(bitmapNumber: number, bitmap: Object, alignment: PosPrinterAlignment, width: number): void;

    setCustomAlignedBitmap(bitmapNumber: number, bitmap: Object, alignmentDistance: number): void;
    setCustomAlignedBitmap(bitmapNumber: number, bitmap: Object, alignmentDistance: number, width: number): void;

    printSavedBitmap(bitmapNumber: number): void;

    drawRuledLine(positionList: string, lineDirection: PosPrinterLineDirection, lineWidth: number, lineStyle: PosPrinterLineStyle, lineColor: number): void;

    printBarcode(data: string, symbology: number, height: number, width: number, textPosition: PosPrinterBarcodeTextPosition, alignment: PosPrinterAlignment): void;

    printBarcodeCustomAlign(data: string, symbology: number, height: number, width: number, textPosition: PosPrinterBarcodeTextPosition, alignmentDistance: number): void;

    printBitmap(bitmap: Object, alignment: PosPrinterAlignment): void;
    printBitmap(bitmap: Object, alignment: PosPrinterAlignment, width: number): void;

    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: number): void;
    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: number, width: number): void;

  }

  export class ReceiptPrintJob {
    constructor();

    executeAsync(callback: (error: Error, result: boolean) => void): void ;

    markFeed(kind: PosPrinterMarkFeedKind): void;

    cutPaper(percentage: number): void;
    cutPaper(): void;

    setBarcodeRotation(value: PosPrinterRotation): void;

    setPrintRotation(value: PosPrinterRotation, includeBitmaps: boolean): void;

    setPrintArea(value: Object): void;

    setBitmap(bitmapNumber: number, bitmap: Object, alignment: PosPrinterAlignment): void;
    setBitmap(bitmapNumber: number, bitmap: Object, alignment: PosPrinterAlignment, width: number): void;

    setCustomAlignedBitmap(bitmapNumber: number, bitmap: Object, alignmentDistance: number): void;
    setCustomAlignedBitmap(bitmapNumber: number, bitmap: Object, alignmentDistance: number, width: number): void;

    printSavedBitmap(bitmapNumber: number): void;

    drawRuledLine(positionList: string, lineDirection: PosPrinterLineDirection, lineWidth: number, lineStyle: PosPrinterLineStyle, lineColor: number): void;

    printBarcode(data: string, symbology: number, height: number, width: number, textPosition: PosPrinterBarcodeTextPosition, alignment: PosPrinterAlignment): void;

    printBarcodeCustomAlign(data: string, symbology: number, height: number, width: number, textPosition: PosPrinterBarcodeTextPosition, alignmentDistance: number): void;

    printBitmap(bitmap: Object, alignment: PosPrinterAlignment): void;
    printBitmap(bitmap: Object, alignment: PosPrinterAlignment, width: number): void;

    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: number): void;
    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: number, width: number): void;

    print(data: string): void;

    printLine(data: string): void;
    printLine(): void;

  }

  export class SlipPrintJob {
    constructor();

    executeAsync(callback: (error: Error, result: boolean) => void): void ;

    setBarcodeRotation(value: PosPrinterRotation): void;

    setPrintRotation(value: PosPrinterRotation, includeBitmaps: boolean): void;

    setPrintArea(value: Object): void;

    setBitmap(bitmapNumber: number, bitmap: Object, alignment: PosPrinterAlignment): void;
    setBitmap(bitmapNumber: number, bitmap: Object, alignment: PosPrinterAlignment, width: number): void;

    setCustomAlignedBitmap(bitmapNumber: number, bitmap: Object, alignmentDistance: number): void;
    setCustomAlignedBitmap(bitmapNumber: number, bitmap: Object, alignmentDistance: number, width: number): void;

    printSavedBitmap(bitmapNumber: number): void;

    drawRuledLine(positionList: string, lineDirection: PosPrinterLineDirection, lineWidth: number, lineStyle: PosPrinterLineStyle, lineColor: number): void;

    printBarcode(data: string, symbology: number, height: number, width: number, textPosition: PosPrinterBarcodeTextPosition, alignment: PosPrinterAlignment): void;

    printBarcodeCustomAlign(data: string, symbology: number, height: number, width: number, textPosition: PosPrinterBarcodeTextPosition, alignmentDistance: number): void;

    printBitmap(bitmap: Object, alignment: PosPrinterAlignment): void;
    printBitmap(bitmap: Object, alignment: PosPrinterAlignment, width: number): void;

    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: number): void;
    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: number, width: number): void;

    print(data: string): void;

    printLine(data: string): void;
    printLine(): void;

  }

  export class JournalPrintJob {
    constructor();

    executeAsync(callback: (error: Error, result: boolean) => void): void ;

    print(data: string): void;

    printLine(data: string): void;
    printLine(): void;

  }

  export class ICommonClaimedPosPrinterStation {
    charactersPerLine: number;
    colorCartridge: PosPrinterColorCartridge;
    isCartridgeEmpty: boolean;
    isCartridgeRemoved: boolean;
    isCoverOpen: boolean;
    isHeadCleaning: boolean;
    isLetterQuality: boolean;
    isPaperEmpty: boolean;
    isPaperNearEnd: boolean;
    isReadyToPrint: boolean;
    lineHeight: number;
    lineSpacing: number;
    lineWidth: number;
    constructor();

    validateData(data: string): boolean;

  }

  export class ClaimedReceiptPrinter {
    linesToPaperCut: number;
    pageSize: Object;
    printArea: Object;
    sidewaysMaxChars: number;
    sidewaysMaxLines: number;
    lineSpacing: number;
    lineHeight: number;
    isLetterQuality: boolean;
    colorCartridge: PosPrinterColorCartridge;
    charactersPerLine: number;
    isHeadCleaning: boolean;
    isCoverOpen: boolean;
    isPaperEmpty: boolean;
    isPaperNearEnd: boolean;
    isCartridgeRemoved: boolean;
    isReadyToPrint: boolean;
    isCartridgeEmpty: boolean;
    lineWidth: number;
    constructor();

    createJob(): ReceiptPrintJob;

    validateData(data: string): boolean;

  }

  export class ClaimedSlipPrinter {
    linesNearEndToEnd: number;
    maxLines: number;
    pageSize: Object;
    printArea: Object;
    printSide: PosPrinterPrintSide;
    sidewaysMaxChars: number;
    sidewaysMaxLines: number;
    lineSpacing: number;
    lineHeight: number;
    isLetterQuality: boolean;
    colorCartridge: PosPrinterColorCartridge;
    charactersPerLine: number;
    isHeadCleaning: boolean;
    isCartridgeEmpty: boolean;
    isPaperEmpty: boolean;
    isCartridgeRemoved: boolean;
    isReadyToPrint: boolean;
    isPaperNearEnd: boolean;
    isCoverOpen: boolean;
    lineWidth: number;
    constructor();

    insertSlipAsync(timeout: number, callback: (error: Error, result: boolean) => void): void ;

    removeSlipAsync(timeout: number, callback: (error: Error, result: boolean) => void): void ;

    openJaws(): void;

    closeJaws(): void;

    changePrintSide(printSide: PosPrinterPrintSide): void;

    createJob(): SlipPrintJob;

    validateData(data: string): boolean;

  }

  export class ClaimedJournalPrinter {
    isLetterQuality: boolean;
    colorCartridge: PosPrinterColorCartridge;
    charactersPerLine: number;
    lineSpacing: number;
    lineHeight: number;
    isCartridgeEmpty: boolean;
    isCartridgeRemoved: boolean;
    isCoverOpen: boolean;
    isHeadCleaning: boolean;
    isPaperEmpty: boolean;
    isPaperNearEnd: boolean;
    isReadyToPrint: boolean;
    lineWidth: number;
    constructor();

    createJob(): JournalPrintJob;

    validateData(data: string): boolean;

  }

  export class CashDrawerStatus {
    extendedStatus: number;
    statusKind: CashDrawerStatusKind;
    constructor();

  }

  export class CashDrawerStatusUpdatedEventArgs {
    status: CashDrawerStatus;
    constructor();

  }

  export class CashDrawerCapabilities {
    isDrawerOpenSensorAvailable: boolean;
    isStatisticsReportingSupported: boolean;
    isStatisticsUpdatingSupported: boolean;
    isStatusMultiDrawerDetectSupported: boolean;
    isStatusReportingSupported: boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    constructor();

  }

  export class ICashDrawerEventSourceEventArgs {
    cashDrawer: CashDrawer;
    constructor();

  }

  export class CashDrawer {
    capabilities: CashDrawerCapabilities;
    deviceId: string;
    drawerEventSource: CashDrawerEventSource;
    isDrawerOpen: boolean;
    status: CashDrawerStatus;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: CashDrawer) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: CashDrawer) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): string;
    static getDeviceSelector(): string;


    claimDrawerAsync(callback: (error: Error, result: ClaimedCashDrawer) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: string) => void): void ;

    getStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: string) => void): void ;

    close(): void;
    addListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    on(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    off(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CashDrawerClosedEventArgs {
    cashDrawer: CashDrawer;
    constructor();

  }

  export class CashDrawerOpenedEventArgs {
    cashDrawer: CashDrawer;
    constructor();

  }

  export class CashDrawerEventSource {
    constructor();

    addListener(type: "DrawerClosed", listener: (ev: Event) => void): void ;
    removeListener(type: "DrawerClosed", listener: (ev: Event) => void): void ;
    on(type: "DrawerClosed", listener: (ev: Event) => void): void ;
    off(type: "DrawerClosed", listener: (ev: Event) => void): void ;
    
    addListener(type: "DrawerOpened", listener: (ev: Event) => void): void ;
    removeListener(type: "DrawerOpened", listener: (ev: Event) => void): void ;
    on(type: "DrawerOpened", listener: (ev: Event) => void): void ;
    off(type: "DrawerOpened", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ClaimedCashDrawer {
    closeAlarm: CashDrawerCloseAlarm;
    deviceId: string;
    isDrawerOpen: boolean;
    isEnabled: boolean;
    constructor();

    openDrawerAsync(callback: (error: Error, result: boolean) => void): void ;

    enableAsync(callback: (error: Error, result: boolean) => void): void ;

    disableAsync(callback: (error: Error, result: boolean) => void): void ;

    retainDeviceAsync(callback: (error: Error, result: boolean) => void): void ;

    resetStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: boolean) => void): void ;

    updateStatisticsAsync(statistics: Object, callback: (error: Error, result: boolean) => void): void ;

    close(): void;
    addListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    on(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    off(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CashDrawerCloseAlarm {
    beepFrequency: number;
    beepDuration: number;
    beepDelay: number;
    alarmTimeout: number;
    constructor();

    startAsync(callback: (error: Error, result: boolean) => void): void ;

    addListener(type: "AlarmTimeoutExpired", listener: (ev: Event) => void): void ;
    removeListener(type: "AlarmTimeoutExpired", listener: (ev: Event) => void): void ;
    on(type: "AlarmTimeoutExpired", listener: (ev: Event) => void): void ;
    off(type: "AlarmTimeoutExpired", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LineDisplay {
    static statisticsCategorySelector: LineDisplayStatisticsCategorySelector;
    capabilities: LineDisplayCapabilities;
    deviceControlDescription: string;
    deviceControlVersion: string;
    deviceId: string;
    deviceServiceVersion: string;
    physicalDeviceDescription: string;
    physicalDeviceName: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: LineDisplay) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: LineDisplay) => void): void ;


    static getDeviceSelector(): string;
    static getDeviceSelector(connectionTypes: PosConnectionTypes): string;


    claimAsync(callback: (error: Error, result: ClaimedLineDisplay) => void): void ;

    checkPowerStatusAsync(callback: (error: Error, result: LineDisplayPowerStatus) => void): void ;

    close(): void;
  }

  export class LineDisplayStatisticsCategorySelector {
    allStatistics: string;
    manufacturerStatistics: string;
    unifiedPosStatistics: string;
    constructor();

  }

  export class ClaimedLineDisplay {
    capabilities: LineDisplayCapabilities;
    defaultWindow: LineDisplayWindow;
    deviceControlDescription: string;
    deviceControlVersion: string;
    deviceId: string;
    deviceServiceVersion: string;
    physicalDeviceDescription: string;
    physicalDeviceName: string;
    customGlyphs: LineDisplayCustomGlyphs;
    maxBitmapSizeInPixels: Object;
    supportedCharacterSets: Object;
    supportedScreenSizesInCharacters: Object;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: ClaimedLineDisplay) => void): void ;


    static getDeviceSelector(): string;
    static getDeviceSelector(connectionTypes: PosConnectionTypes): string;


    getStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: string) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: string) => void): void ;

    checkPowerStatusAsync(callback: (error: Error, result: LineDisplayPowerStatus) => void): void ;

    tryUpdateAttributesAsync(attributes: LineDisplayAttributes, callback: (error: Error, result: boolean) => void): void ;

    trySetDescriptorAsync(descriptor: number, descriptorState: LineDisplayDescriptorState, callback: (error: Error, result: boolean) => void): void ;

    tryClearDescriptorsAsync(callback: (error: Error, result: boolean) => void): void ;

    tryCreateWindowAsync(viewport: Object, windowSize: Object, callback: (error: Error, result: LineDisplayWindow) => void): void ;

    tryStoreStorageFileBitmapAsync(bitmap: Object, callback: (error: Error, result: LineDisplayStoredBitmap) => void): void ;
    tryStoreStorageFileBitmapAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, callback: (error: Error, result: LineDisplayStoredBitmap) => void): void ;
    tryStoreStorageFileBitmapAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, widthInPixels: number, callback: (error: Error, result: LineDisplayStoredBitmap) => void): void ;

    retainDevice(): void;

    close(): void;
    getAttributes(): LineDisplayAttributes;

    addListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    on(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    off(type: "ReleaseDeviceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    on(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    off(type: "StatusUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LineDisplayCursorAttributes {
    position: Object;
    isBlinkEnabled: boolean;
    isAutoAdvanceEnabled: boolean;
    cursorType: LineDisplayCursorType;
    constructor();

  }

  export class LineDisplayCursor {
    canCustomize: boolean;
    isBlinkSupported: boolean;
    isBlockSupported: boolean;
    isHalfBlockSupported: boolean;
    isOtherSupported: boolean;
    isReverseSupported: boolean;
    isUnderlineSupported: boolean;
    constructor();

    tryUpdateAttributesAsync(attributes: LineDisplayCursorAttributes, callback: (error: Error, result: boolean) => void): void ;

    getAttributes(): LineDisplayCursorAttributes;

  }

  export class LineDisplayMarquee {
    scrollWaitInterval: number;
    repeatWaitInterval: number;
    format: LineDisplayMarqueeFormat;
    constructor();

    tryStartScrollingAsync(direction: LineDisplayScrollDirection, callback: (error: Error, result: boolean) => void): void ;

    tryStopScrollingAsync(callback: (error: Error, result: boolean) => void): void ;

  }

  export class LineDisplayStoredBitmap {
    escapeSequence: string;
    constructor();

    tryDeleteAsync(callback: (error: Error, result: boolean) => void): void ;

  }

  export class LineDisplayWindow {
    interCharacterWaitInterval: number;
    sizeInCharacters: Object;
    cursor: LineDisplayCursor;
    marquee: LineDisplayMarquee;
    constructor();

    tryRefreshAsync(callback: (error: Error, result: boolean) => void): void ;

    tryDisplayTextAsync(text: string, displayAttribute: LineDisplayTextAttribute, callback: (error: Error, result: boolean) => void): void ;
    tryDisplayTextAsync(text: string, displayAttribute: LineDisplayTextAttribute, startPosition: Object, callback: (error: Error, result: boolean) => void): void ;
    tryDisplayTextAsync(text: string, callback: (error: Error, result: boolean) => void): void ;

    tryScrollTextAsync(direction: LineDisplayScrollDirection, numberOfColumnsOrRows: number, callback: (error: Error, result: boolean) => void): void ;

    tryClearTextAsync(callback: (error: Error, result: boolean) => void): void ;

    readCharacterAtCursorAsync(callback: (error: Error, result: number) => void): void ;

    tryDisplayStoredBitmapAtCursorAsync(bitmap: LineDisplayStoredBitmap, callback: (error: Error, result: boolean) => void): void ;

    tryDisplayStorageFileBitmapAtCursorAsync(bitmap: Object, callback: (error: Error, result: boolean) => void): void ;
    tryDisplayStorageFileBitmapAtCursorAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, callback: (error: Error, result: boolean) => void): void ;
    tryDisplayStorageFileBitmapAtCursorAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, widthInPixels: number, callback: (error: Error, result: boolean) => void): void ;

    tryDisplayStorageFileBitmapAtPointAsync(bitmap: Object, offsetInPixels: Object, callback: (error: Error, result: boolean) => void): void ;
    tryDisplayStorageFileBitmapAtPointAsync(bitmap: Object, offsetInPixels: Object, widthInPixels: number, callback: (error: Error, result: boolean) => void): void ;

    close(): void;
  }

  export class LineDisplayCustomGlyphs {
    sizeInPixels: Object;
    supportedGlyphCodes: Object;
    constructor();

    tryRedefineAsync(glyphCode: number, glyphData: Object, callback: (error: Error, result: boolean) => void): void ;

  }

  export class LineDisplayStatusUpdatedEventArgs {
    status: LineDisplayPowerStatus;
    constructor();

  }

  export class LineDisplayCapabilities {
    canBlink: LineDisplayTextAttributeGranularity;
    canChangeBlinkRate: boolean;
    canChangeScreenSize: boolean;
    canDisplayBitmaps: boolean;
    canDisplayCustomGlyphs: boolean;
    canMapCharacterSets: boolean;
    canReadCharacterAtCursor: boolean;
    canReverse: LineDisplayTextAttributeGranularity;
    isBrightnessSupported: boolean;
    isCursorSupported: boolean;
    isHorizontalMarqueeSupported: boolean;
    isInterCharacterWaitSupported: boolean;
    isStatisticsReportingSupported: boolean;
    isStatisticsUpdatingSupported: boolean;
    isVerticalMarqueeSupported: boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    supportedDescriptors: number;
    supportedWindows: number;
    constructor();

  }

  export class LineDisplayAttributes {
    screenSizeInCharacters: Object;
    isPowerNotifyEnabled: boolean;
    isCharacterSetMappingEnabled: boolean;
    currentWindow: LineDisplayWindow;
    characterSet: number;
    brightness: number;
    blinkRate: number;
    constructor();

  }

export * as provider from "./devices.pointofservice.provider.js";