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
    extendedReason: Number;
    message: String;
    reason: UnifiedPosErrorReason;
    severity: UnifiedPosErrorSeverity;
    constructor();
    constructor(message: String, severity: UnifiedPosErrorSeverity, reason: UnifiedPosErrorReason, extendedReason: Number);

  }

  export class BarcodeScannerStatusUpdatedEventArgs {
    extendedStatus: Number;
    status: BarcodeScannerStatus;
    constructor();

  }

  export class BarcodeSymbologies {
    static extendedBase: Number;
    static ausPost: Number;
    static aztec: Number;
    static canPost: Number;
    static ccab: Number;
    static ccc: Number;
    static chinaPost: Number;
    static codabar: Number;
    static codablock128: Number;
    static codablockA: Number;
    static codablockF: Number;
    static code11: Number;
    static code128: Number;
    static code16k: Number;
    static code32: Number;
    static code39: Number;
    static code39Ex: Number;
    static code49: Number;
    static code93: Number;
    static code93Ex: Number;
    static dataCode: Number;
    static dataMatrix: Number;
    static dutchKix: Number;
    static ean13: Number;
    static ean13Add2: Number;
    static ean13Add5: Number;
    static ean8: Number;
    static ean8Add2: Number;
    static ean8Add5: Number;
    static ean99: Number;
    static ean99Add2: Number;
    static ean99Add5: Number;
    static eanv: Number;
    static eanvAdd2: Number;
    static eanvAdd5: Number;
    static telepen: Number;
    static gs1128: Number;
    static gs1128Coupon: Number;
    static gs1DatabarType1: Number;
    static gs1DatabarType2: Number;
    static gs1DatabarType3: Number;
    static hanXin: Number;
    static infoMail: Number;
    static isbn: Number;
    static isbnAdd5: Number;
    static isbt: Number;
    static ismn: Number;
    static ismnAdd2: Number;
    static ismnAdd5: Number;
    static issn: Number;
    static issnAdd2: Number;
    static issnAdd5: Number;
    static italianPost25: Number;
    static italianPost39: Number;
    static japanPost: Number;
    static koreanPost: Number;
    static maxicode: Number;
    static micr: Number;
    static microPdf417: Number;
    static microQr: Number;
    static msTag: Number;
    static msi: Number;
    static ocrA: Number;
    static ocrB: Number;
    static pdf417: Number;
    static plessey: Number;
    static pzn: Number;
    static qr: Number;
    static sisac: Number;
    static swedenPost: Number;
    static tfDis: Number;
    static tfIata: Number;
    static tfInd: Number;
    static tfInt: Number;
    static tfMat: Number;
    static tfStd: Number;
    static tlc39: Number;
    static trioptic39: Number;
    static uccEan128: Number;
    static ukPost: Number;
    static unknown: Number;
    static upcCoupon: Number;
    static upca: Number;
    static upcaAdd2: Number;
    static upcaAdd5: Number;
    static upce: Number;
    static upceAdd2: Number;
    static upceAdd5: Number;
    static us4StateFics: Number;
    static usIntelligent: Number;
    static usIntelligentPkg: Number;
    static usPlanet: Number;
    static usPostNet: Number;
    static gs1DWCode: Number;
    constructor();

    static getName(scanDataType: Number): String;


  }

  export class BarcodeSymbologyAttributes {
    isCheckDigitValidationEnabled: Boolean;
    isCheckDigitTransmissionEnabled: Boolean;
    decodeLengthKind: BarcodeSymbologyDecodeLengthKind;
    decodeLength2: Number;
    decodeLength1: Number;
    isCheckDigitTransmissionSupported: Boolean;
    isCheckDigitValidationSupported: Boolean;
    isDecodeLengthSupported: Boolean;
    constructor();

  }

  export class BarcodeScannerReport {
    scanData: Object;
    scanDataLabel: Object;
    scanDataType: Number;
    constructor();
    constructor(scanDataType: Number, scanData: Object, scanDataLabel: Object);

  }

  export class BarcodeScannerDataReceivedEventArgs {
    report: BarcodeScannerReport;
    constructor();

  }

  export class BarcodeScannerErrorOccurredEventArgs {
    errorData: UnifiedPosErrorData;
    isRetriable: Boolean;
    partialInputData: BarcodeScannerReport;
    constructor();

  }

  export class BarcodeScannerImagePreviewReceivedEventArgs {
    preview: Object;
    constructor();

  }

  export class BarcodeScannerCapabilities {
    isImagePreviewSupported: Boolean;
    isStatisticsReportingSupported: Boolean;
    isStatisticsUpdatingSupported: Boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    isSoftwareTriggerSupported: Boolean;
    constructor();

  }

  export class BarcodeScanner {
    capabilities: BarcodeScannerCapabilities;
    deviceId: String;
    videoDeviceId: String;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: BarcodeScanner) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: BarcodeScanner) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): String;
    static getDeviceSelector(): String;


    claimScannerAsync(callback: (error: Error, result: ClaimedBarcodeScanner) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: String) => void): void ;

    getSupportedSymbologiesAsync(callback: (error: Error, result: Object) => void): void ;

    isSymbologySupportedAsync(barcodeSymbology: Number, callback: (error: Error, result: Boolean) => void): void ;

    retrieveStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: Object) => void): void ;

    getSupportedProfiles(): Object;

    isProfileSupported(profile: String): Boolean;

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
    isDisabledOnDataReceived: Boolean;
    isDecodeDataEnabled: Boolean;
    deviceId: String;
    isEnabled: Boolean;
    isVideoPreviewShownOnEnable: Boolean;
    constructor();

    enableAsync(callback: (error: Error) => void): void ;

    disableAsync(callback: (error: Error) => void): void ;

    setActiveSymbologiesAsync(symbologies: Object, callback: (error: Error) => void): void ;

    resetStatisticsAsync(statisticsCategories: Object, callback: (error: Error) => void): void ;

    updateStatisticsAsync(statistics: Object, callback: (error: Error) => void): void ;

    setActiveProfileAsync(profile: String, callback: (error: Error) => void): void ;

    startSoftwareTriggerAsync(callback: (error: Error) => void): void ;

    stopSoftwareTriggerAsync(callback: (error: Error) => void): void ;

    getSymbologyAttributesAsync(barcodeSymbology: Number, callback: (error: Error, result: BarcodeSymbologyAttributes) => void): void ;

    setSymbologyAttributesAsync(barcodeSymbology: Number, attributes: BarcodeSymbologyAttributes, callback: (error: Error, result: Boolean) => void): void ;

    showVideoPreviewAsync(callback: (error: Error, result: Boolean) => void): void ;

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
    static extendedBase: Number;
    static none: Number;
    static tripleDesDukpt: Number;
    constructor();

  }

  export class MagneticStripeReaderCardTypes {
    static aamva: Number;
    static bank: Number;
    static extendedBase: Number;
    static unknown: Number;
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
    cardAuthenticationDataLength: Number;
    cardType: Number;
    properties: Object;
    track1: MagneticStripeReaderTrackData;
    track2: MagneticStripeReaderTrackData;
    track3: MagneticStripeReaderTrackData;
    track4: MagneticStripeReaderTrackData;
    constructor();

  }

  export class MagneticStripeReaderBankCardDataReceivedEventArgs {
    accountNumber: String;
    expirationDate: String;
    firstName: String;
    middleInitial: String;
    report: MagneticStripeReaderReport;
    serviceCode: String;
    suffix: String;
    surname: String;
    title: String;
    constructor();

  }

  export class MagneticStripeReaderAamvaCardDataReceivedEventArgs {
    address: String;
    birthDate: String;
    city: String;
    class: String;
    endorsements: String;
    expirationDate: String;
    eyeColor: String;
    firstName: String;
    gender: String;
    hairColor: String;
    height: String;
    licenseNumber: String;
    postalCode: String;
    report: MagneticStripeReaderReport;
    restrictions: String;
    state: String;
    suffix: String;
    surname: String;
    weight: String;
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
    extendedStatus: Number;
    status: MagneticStripeReaderStatus;
    constructor();

  }

  export class MagneticStripeReaderCapabilities {
    authenticationLevel: MagneticStripeReaderAuthenticationLevel;
    cardAuthentication: String;
    isIsoSupported: Boolean;
    isJisOneSupported: Boolean;
    isJisTwoSupported: Boolean;
    isStatisticsReportingSupported: Boolean;
    isStatisticsUpdatingSupported: Boolean;
    isTrackDataMaskingSupported: Boolean;
    isTransmitSentinelsSupported: Boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    supportedEncryptionAlgorithms: Number;
    constructor();

  }

  export class ClaimedMagneticStripeReader {
    tracksToRead: MagneticStripeReaderTrackIds;
    isTransmitSentinelsEnabled: Boolean;
    isDisabledOnDataReceived: Boolean;
    isDecodeDataEnabled: Boolean;
    dataEncryptionAlgorithm: Number;
    deviceId: String;
    isDeviceAuthenticated: Boolean;
    isEnabled: Boolean;
    constructor();

    enableAsync(callback: (error: Error) => void): void ;

    disableAsync(callback: (error: Error) => void): void ;

    retrieveDeviceAuthenticationDataAsync(callback: (error: Error, result: Object) => void): void ;

    authenticateDeviceAsync(responseToken: Array<Number>, callback: (error: Error) => void): void ;

    deAuthenticateDeviceAsync(responseToken: Array<Number>, callback: (error: Error) => void): void ;

    updateKeyAsync(key: String, keyName: String, callback: (error: Error) => void): void ;

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
    deviceId: String;
    supportedCardTypes: Array<Number>;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: MagneticStripeReader) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: MagneticStripeReader) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): String;
    static getDeviceSelector(): String;


    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: String) => void): void ;

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
    static ansi: Number;
    static ascii: Number;
    static utf16LE: Number;
    constructor();

  }

  export class ICommonPosPrintStationCapabilities {
    cartridgeSensors: PosPrinterCartridgeSensors;
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    isBoldSupported: Boolean;
    isDoubleHighDoubleWidePrintSupported: Boolean;
    isDoubleHighPrintSupported: Boolean;
    isDoubleWidePrintSupported: Boolean;
    isDualColorSupported: Boolean;
    isItalicSupported: Boolean;
    isPaperEmptySensorSupported: Boolean;
    isPaperNearEndSensorSupported: Boolean;
    isPrinterPresent: Boolean;
    isUnderlineSupported: Boolean;
    supportedCharactersPerLine: Object;
    constructor();

  }

  export class ICommonReceiptSlipCapabilities {
    is180RotationSupported: Boolean;
    isBarcodeSupported: Boolean;
    isBitmapSupported: Boolean;
    isLeft90RotationSupported: Boolean;
    isPrintAreaSupported: Boolean;
    isRight90RotationSupported: Boolean;
    ruledLineCapabilities: PosPrinterRuledLineCapabilities;
    supportedBarcodeRotations: Object;
    supportedBitmapRotations: Object;
    constructor();

  }

  export class ReceiptPrinterCapabilities {
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    isBoldSupported: Boolean;
    isDoubleHighDoubleWidePrintSupported: Boolean;
    isDoubleHighPrintSupported: Boolean;
    isDoubleWidePrintSupported: Boolean;
    isDualColorSupported: Boolean;
    isItalicSupported: Boolean;
    isPaperEmptySensorSupported: Boolean;
    isPaperNearEndSensorSupported: Boolean;
    isPrinterPresent: Boolean;
    isUnderlineSupported: Boolean;
    supportedCharactersPerLine: Object;
    cartridgeSensors: PosPrinterCartridgeSensors;
    is180RotationSupported: Boolean;
    supportedBarcodeRotations: Object;
    supportedBitmapRotations: Object;
    isLeft90RotationSupported: Boolean;
    isBarcodeSupported: Boolean;
    isBitmapSupported: Boolean;
    isPrintAreaSupported: Boolean;
    isRight90RotationSupported: Boolean;
    ruledLineCapabilities: PosPrinterRuledLineCapabilities;
    isStampSupported: Boolean;
    markFeedCapabilities: PosPrinterMarkFeedCapabilities;
    canCutPaper: Boolean;
    constructor();

  }

  export class SlipPrinterCapabilities {
    isBoldSupported: Boolean;
    isDoubleHighDoubleWidePrintSupported: Boolean;
    isDoubleWidePrintSupported: Boolean;
    isDoubleHighPrintSupported: Boolean;
    isDualColorSupported: Boolean;
    isItalicSupported: Boolean;
    isPaperEmptySensorSupported: Boolean;
    isPaperNearEndSensorSupported: Boolean;
    isPrinterPresent: Boolean;
    isUnderlineSupported: Boolean;
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    supportedCharactersPerLine: Object;
    cartridgeSensors: PosPrinterCartridgeSensors;
    isBarcodeSupported: Boolean;
    supportedBitmapRotations: Object;
    isPrintAreaSupported: Boolean;
    supportedBarcodeRotations: Object;
    is180RotationSupported: Boolean;
    isBitmapSupported: Boolean;
    isLeft90RotationSupported: Boolean;
    isRight90RotationSupported: Boolean;
    ruledLineCapabilities: PosPrinterRuledLineCapabilities;
    isFullLengthSupported: Boolean;
    isBothSidesPrintingSupported: Boolean;
    constructor();

  }

  export class JournalPrinterCapabilities {
    cartridgeSensors: PosPrinterCartridgeSensors;
    colorCartridgeCapabilities: PosPrinterColorCapabilities;
    isBoldSupported: Boolean;
    isDoubleHighDoubleWidePrintSupported: Boolean;
    isDoubleHighPrintSupported: Boolean;
    isDoubleWidePrintSupported: Boolean;
    isDualColorSupported: Boolean;
    isItalicSupported: Boolean;
    isPaperEmptySensorSupported: Boolean;
    isPaperNearEndSensorSupported: Boolean;
    isPrinterPresent: Boolean;
    isUnderlineSupported: Boolean;
    supportedCharactersPerLine: Object;
    constructor();

  }

  export class PosPrinterCapabilities {
    canMapCharacterSet: Boolean;
    defaultCharacterSet: Number;
    hasCoverSensor: Boolean;
    isStatisticsReportingSupported: Boolean;
    isStatisticsUpdatingSupported: Boolean;
    isTransactionSupported: Boolean;
    journal: JournalPrinterCapabilities;
    powerReportingType: UnifiedPosPowerReportingType;
    receipt: ReceiptPrinterCapabilities;
    slip: SlipPrinterCapabilities;
    constructor();

  }

  export class PosPrinterStatus {
    extendedStatus: Number;
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
    deviceId: String;
    status: PosPrinterStatus;
    supportedCharacterSets: Object;
    supportedTypeFaces: Object;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: PosPrinter) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: PosPrinter) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): String;
    static getDeviceSelector(): String;


    claimPrinterAsync(callback: (error: Error, result: ClaimedPosPrinter) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: String) => void): void ;

    getStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: String) => void): void ;

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
    isCharacterSetMappingEnabled: Boolean;
    characterSet: Number;
    deviceId: String;
    isCoverOpen: Boolean;
    isEnabled: Boolean;
    journal: ClaimedJournalPrinter;
    receipt: ClaimedReceiptPrinter;
    slip: ClaimedSlipPrinter;
    constructor();

    enableAsync(callback: (error: Error, result: Boolean) => void): void ;

    disableAsync(callback: (error: Error, result: Boolean) => void): void ;

    retainDeviceAsync(callback: (error: Error, result: Boolean) => void): void ;

    resetStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: Boolean) => void): void ;

    updateStatisticsAsync(statistics: Object, callback: (error: Error, result: Boolean) => void): void ;

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

    executeAsync(callback: (error: Error, result: Boolean) => void): void ;

    print(data: String): void;

    printLine(data: String): void;
    printLine(): void;

  }

  export class IReceiptOrSlipJob {
    constructor();

    setBarcodeRotation(value: PosPrinterRotation): void;

    setPrintRotation(value: PosPrinterRotation, includeBitmaps: Boolean): void;

    setPrintArea(value: Object): void;

    setBitmap(bitmapNumber: Number, bitmap: Object, alignment: PosPrinterAlignment): void;
    setBitmap(bitmapNumber: Number, bitmap: Object, alignment: PosPrinterAlignment, width: Number): void;

    setCustomAlignedBitmap(bitmapNumber: Number, bitmap: Object, alignmentDistance: Number): void;
    setCustomAlignedBitmap(bitmapNumber: Number, bitmap: Object, alignmentDistance: Number, width: Number): void;

    printSavedBitmap(bitmapNumber: Number): void;

    drawRuledLine(positionList: String, lineDirection: PosPrinterLineDirection, lineWidth: Number, lineStyle: PosPrinterLineStyle, lineColor: Number): void;

    printBarcode(data: String, symbology: Number, height: Number, width: Number, textPosition: PosPrinterBarcodeTextPosition, alignment: PosPrinterAlignment): void;

    printBarcodeCustomAlign(data: String, symbology: Number, height: Number, width: Number, textPosition: PosPrinterBarcodeTextPosition, alignmentDistance: Number): void;

    printBitmap(bitmap: Object, alignment: PosPrinterAlignment): void;
    printBitmap(bitmap: Object, alignment: PosPrinterAlignment, width: Number): void;

    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: Number): void;
    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: Number, width: Number): void;

  }

  export class ReceiptPrintJob {
    constructor();

    executeAsync(callback: (error: Error, result: Boolean) => void): void ;

    markFeed(kind: PosPrinterMarkFeedKind): void;

    cutPaper(percentage: Number): void;
    cutPaper(): void;

    setBarcodeRotation(value: PosPrinterRotation): void;

    setPrintRotation(value: PosPrinterRotation, includeBitmaps: Boolean): void;

    setPrintArea(value: Object): void;

    setBitmap(bitmapNumber: Number, bitmap: Object, alignment: PosPrinterAlignment): void;
    setBitmap(bitmapNumber: Number, bitmap: Object, alignment: PosPrinterAlignment, width: Number): void;

    setCustomAlignedBitmap(bitmapNumber: Number, bitmap: Object, alignmentDistance: Number): void;
    setCustomAlignedBitmap(bitmapNumber: Number, bitmap: Object, alignmentDistance: Number, width: Number): void;

    printSavedBitmap(bitmapNumber: Number): void;

    drawRuledLine(positionList: String, lineDirection: PosPrinterLineDirection, lineWidth: Number, lineStyle: PosPrinterLineStyle, lineColor: Number): void;

    printBarcode(data: String, symbology: Number, height: Number, width: Number, textPosition: PosPrinterBarcodeTextPosition, alignment: PosPrinterAlignment): void;

    printBarcodeCustomAlign(data: String, symbology: Number, height: Number, width: Number, textPosition: PosPrinterBarcodeTextPosition, alignmentDistance: Number): void;

    printBitmap(bitmap: Object, alignment: PosPrinterAlignment): void;
    printBitmap(bitmap: Object, alignment: PosPrinterAlignment, width: Number): void;

    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: Number): void;
    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: Number, width: Number): void;

    print(data: String): void;

    printLine(data: String): void;
    printLine(): void;

  }

  export class SlipPrintJob {
    constructor();

    executeAsync(callback: (error: Error, result: Boolean) => void): void ;

    setBarcodeRotation(value: PosPrinterRotation): void;

    setPrintRotation(value: PosPrinterRotation, includeBitmaps: Boolean): void;

    setPrintArea(value: Object): void;

    setBitmap(bitmapNumber: Number, bitmap: Object, alignment: PosPrinterAlignment): void;
    setBitmap(bitmapNumber: Number, bitmap: Object, alignment: PosPrinterAlignment, width: Number): void;

    setCustomAlignedBitmap(bitmapNumber: Number, bitmap: Object, alignmentDistance: Number): void;
    setCustomAlignedBitmap(bitmapNumber: Number, bitmap: Object, alignmentDistance: Number, width: Number): void;

    printSavedBitmap(bitmapNumber: Number): void;

    drawRuledLine(positionList: String, lineDirection: PosPrinterLineDirection, lineWidth: Number, lineStyle: PosPrinterLineStyle, lineColor: Number): void;

    printBarcode(data: String, symbology: Number, height: Number, width: Number, textPosition: PosPrinterBarcodeTextPosition, alignment: PosPrinterAlignment): void;

    printBarcodeCustomAlign(data: String, symbology: Number, height: Number, width: Number, textPosition: PosPrinterBarcodeTextPosition, alignmentDistance: Number): void;

    printBitmap(bitmap: Object, alignment: PosPrinterAlignment): void;
    printBitmap(bitmap: Object, alignment: PosPrinterAlignment, width: Number): void;

    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: Number): void;
    printCustomAlignedBitmap(bitmap: Object, alignmentDistance: Number, width: Number): void;

    print(data: String): void;

    printLine(data: String): void;
    printLine(): void;

  }

  export class JournalPrintJob {
    constructor();

    executeAsync(callback: (error: Error, result: Boolean) => void): void ;

    print(data: String): void;

    printLine(data: String): void;
    printLine(): void;

  }

  export class ICommonClaimedPosPrinterStation {
    charactersPerLine: Number;
    colorCartridge: PosPrinterColorCartridge;
    isCartridgeEmpty: Boolean;
    isCartridgeRemoved: Boolean;
    isCoverOpen: Boolean;
    isHeadCleaning: Boolean;
    isLetterQuality: Boolean;
    isPaperEmpty: Boolean;
    isPaperNearEnd: Boolean;
    isReadyToPrint: Boolean;
    lineHeight: Number;
    lineSpacing: Number;
    lineWidth: Number;
    constructor();

    validateData(data: String): Boolean;

  }

  export class ClaimedReceiptPrinter {
    linesToPaperCut: Number;
    pageSize: Object;
    printArea: Object;
    sidewaysMaxChars: Number;
    sidewaysMaxLines: Number;
    lineSpacing: Number;
    lineHeight: Number;
    isLetterQuality: Boolean;
    colorCartridge: PosPrinterColorCartridge;
    charactersPerLine: Number;
    isHeadCleaning: Boolean;
    isCoverOpen: Boolean;
    isPaperEmpty: Boolean;
    isPaperNearEnd: Boolean;
    isCartridgeRemoved: Boolean;
    isReadyToPrint: Boolean;
    isCartridgeEmpty: Boolean;
    lineWidth: Number;
    constructor();

    createJob(): ReceiptPrintJob;

    validateData(data: String): Boolean;

  }

  export class ClaimedSlipPrinter {
    linesNearEndToEnd: Number;
    maxLines: Number;
    pageSize: Object;
    printArea: Object;
    printSide: PosPrinterPrintSide;
    sidewaysMaxChars: Number;
    sidewaysMaxLines: Number;
    lineSpacing: Number;
    lineHeight: Number;
    isLetterQuality: Boolean;
    colorCartridge: PosPrinterColorCartridge;
    charactersPerLine: Number;
    isHeadCleaning: Boolean;
    isCartridgeEmpty: Boolean;
    isPaperEmpty: Boolean;
    isCartridgeRemoved: Boolean;
    isReadyToPrint: Boolean;
    isPaperNearEnd: Boolean;
    isCoverOpen: Boolean;
    lineWidth: Number;
    constructor();

    insertSlipAsync(timeout: Number, callback: (error: Error, result: Boolean) => void): void ;

    removeSlipAsync(timeout: Number, callback: (error: Error, result: Boolean) => void): void ;

    openJaws(): void;

    closeJaws(): void;

    changePrintSide(printSide: PosPrinterPrintSide): void;

    createJob(): SlipPrintJob;

    validateData(data: String): Boolean;

  }

  export class ClaimedJournalPrinter {
    isLetterQuality: Boolean;
    colorCartridge: PosPrinterColorCartridge;
    charactersPerLine: Number;
    lineSpacing: Number;
    lineHeight: Number;
    isCartridgeEmpty: Boolean;
    isCartridgeRemoved: Boolean;
    isCoverOpen: Boolean;
    isHeadCleaning: Boolean;
    isPaperEmpty: Boolean;
    isPaperNearEnd: Boolean;
    isReadyToPrint: Boolean;
    lineWidth: Number;
    constructor();

    createJob(): JournalPrintJob;

    validateData(data: String): Boolean;

  }

  export class CashDrawerStatus {
    extendedStatus: Number;
    statusKind: CashDrawerStatusKind;
    constructor();

  }

  export class CashDrawerStatusUpdatedEventArgs {
    status: CashDrawerStatus;
    constructor();

  }

  export class CashDrawerCapabilities {
    isDrawerOpenSensorAvailable: Boolean;
    isStatisticsReportingSupported: Boolean;
    isStatisticsUpdatingSupported: Boolean;
    isStatusMultiDrawerDetectSupported: Boolean;
    isStatusReportingSupported: Boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    constructor();

  }

  export class ICashDrawerEventSourceEventArgs {
    cashDrawer: CashDrawer;
    constructor();

  }

  export class CashDrawer {
    capabilities: CashDrawerCapabilities;
    deviceId: String;
    drawerEventSource: CashDrawerEventSource;
    isDrawerOpen: Boolean;
    status: CashDrawerStatus;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: CashDrawer) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: CashDrawer) => void): void ;


    static getDeviceSelector(connectionTypes: PosConnectionTypes): String;
    static getDeviceSelector(): String;


    claimDrawerAsync(callback: (error: Error, result: ClaimedCashDrawer) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: String) => void): void ;

    getStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: String) => void): void ;

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
    deviceId: String;
    isDrawerOpen: Boolean;
    isEnabled: Boolean;
    constructor();

    openDrawerAsync(callback: (error: Error, result: Boolean) => void): void ;

    enableAsync(callback: (error: Error, result: Boolean) => void): void ;

    disableAsync(callback: (error: Error, result: Boolean) => void): void ;

    retainDeviceAsync(callback: (error: Error, result: Boolean) => void): void ;

    resetStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: Boolean) => void): void ;

    updateStatisticsAsync(statistics: Object, callback: (error: Error, result: Boolean) => void): void ;

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
    beepFrequency: Number;
    beepDuration: Number;
    beepDelay: Number;
    alarmTimeout: Number;
    constructor();

    startAsync(callback: (error: Error, result: Boolean) => void): void ;

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
    deviceControlDescription: String;
    deviceControlVersion: String;
    deviceId: String;
    deviceServiceVersion: String;
    physicalDeviceDescription: String;
    physicalDeviceName: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: LineDisplay) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: LineDisplay) => void): void ;


    static getDeviceSelector(): String;
    static getDeviceSelector(connectionTypes: PosConnectionTypes): String;


    claimAsync(callback: (error: Error, result: ClaimedLineDisplay) => void): void ;

    checkPowerStatusAsync(callback: (error: Error, result: LineDisplayPowerStatus) => void): void ;

    close(): void;
  }

  export class LineDisplayStatisticsCategorySelector {
    allStatistics: String;
    manufacturerStatistics: String;
    unifiedPosStatistics: String;
    constructor();

  }

  export class ClaimedLineDisplay {
    capabilities: LineDisplayCapabilities;
    defaultWindow: LineDisplayWindow;
    deviceControlDescription: String;
    deviceControlVersion: String;
    deviceId: String;
    deviceServiceVersion: String;
    physicalDeviceDescription: String;
    physicalDeviceName: String;
    customGlyphs: LineDisplayCustomGlyphs;
    maxBitmapSizeInPixels: Object;
    supportedCharacterSets: Object;
    supportedScreenSizesInCharacters: Object;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: ClaimedLineDisplay) => void): void ;


    static getDeviceSelector(): String;
    static getDeviceSelector(connectionTypes: PosConnectionTypes): String;


    getStatisticsAsync(statisticsCategories: Object, callback: (error: Error, result: String) => void): void ;

    checkHealthAsync(level: UnifiedPosHealthCheckLevel, callback: (error: Error, result: String) => void): void ;

    checkPowerStatusAsync(callback: (error: Error, result: LineDisplayPowerStatus) => void): void ;

    tryUpdateAttributesAsync(attributes: LineDisplayAttributes, callback: (error: Error, result: Boolean) => void): void ;

    trySetDescriptorAsync(descriptor: Number, descriptorState: LineDisplayDescriptorState, callback: (error: Error, result: Boolean) => void): void ;

    tryClearDescriptorsAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryCreateWindowAsync(viewport: Object, windowSize: Object, callback: (error: Error, result: LineDisplayWindow) => void): void ;

    tryStoreStorageFileBitmapAsync(bitmap: Object, callback: (error: Error, result: LineDisplayStoredBitmap) => void): void ;
    tryStoreStorageFileBitmapAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, callback: (error: Error, result: LineDisplayStoredBitmap) => void): void ;
    tryStoreStorageFileBitmapAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, widthInPixels: Number, callback: (error: Error, result: LineDisplayStoredBitmap) => void): void ;

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
    isBlinkEnabled: Boolean;
    isAutoAdvanceEnabled: Boolean;
    cursorType: LineDisplayCursorType;
    constructor();

  }

  export class LineDisplayCursor {
    canCustomize: Boolean;
    isBlinkSupported: Boolean;
    isBlockSupported: Boolean;
    isHalfBlockSupported: Boolean;
    isOtherSupported: Boolean;
    isReverseSupported: Boolean;
    isUnderlineSupported: Boolean;
    constructor();

    tryUpdateAttributesAsync(attributes: LineDisplayCursorAttributes, callback: (error: Error, result: Boolean) => void): void ;

    getAttributes(): LineDisplayCursorAttributes;

  }

  export class LineDisplayMarquee {
    scrollWaitInterval: Number;
    repeatWaitInterval: Number;
    format: LineDisplayMarqueeFormat;
    constructor();

    tryStartScrollingAsync(direction: LineDisplayScrollDirection, callback: (error: Error, result: Boolean) => void): void ;

    tryStopScrollingAsync(callback: (error: Error, result: Boolean) => void): void ;

  }

  export class LineDisplayStoredBitmap {
    escapeSequence: String;
    constructor();

    tryDeleteAsync(callback: (error: Error, result: Boolean) => void): void ;

  }

  export class LineDisplayWindow {
    interCharacterWaitInterval: Number;
    sizeInCharacters: Object;
    cursor: LineDisplayCursor;
    marquee: LineDisplayMarquee;
    constructor();

    tryRefreshAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryDisplayTextAsync(text: String, displayAttribute: LineDisplayTextAttribute, callback: (error: Error, result: Boolean) => void): void ;
    tryDisplayTextAsync(text: String, displayAttribute: LineDisplayTextAttribute, startPosition: Object, callback: (error: Error, result: Boolean) => void): void ;
    tryDisplayTextAsync(text: String, callback: (error: Error, result: Boolean) => void): void ;

    tryScrollTextAsync(direction: LineDisplayScrollDirection, numberOfColumnsOrRows: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryClearTextAsync(callback: (error: Error, result: Boolean) => void): void ;

    readCharacterAtCursorAsync(callback: (error: Error, result: Number) => void): void ;

    tryDisplayStoredBitmapAtCursorAsync(bitmap: LineDisplayStoredBitmap, callback: (error: Error, result: Boolean) => void): void ;

    tryDisplayStorageFileBitmapAtCursorAsync(bitmap: Object, callback: (error: Error, result: Boolean) => void): void ;
    tryDisplayStorageFileBitmapAtCursorAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, callback: (error: Error, result: Boolean) => void): void ;
    tryDisplayStorageFileBitmapAtCursorAsync(bitmap: Object, horizontalAlignment: LineDisplayHorizontalAlignment, verticalAlignment: LineDisplayVerticalAlignment, widthInPixels: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryDisplayStorageFileBitmapAtPointAsync(bitmap: Object, offsetInPixels: Object, callback: (error: Error, result: Boolean) => void): void ;
    tryDisplayStorageFileBitmapAtPointAsync(bitmap: Object, offsetInPixels: Object, widthInPixels: Number, callback: (error: Error, result: Boolean) => void): void ;

    close(): void;
  }

  export class LineDisplayCustomGlyphs {
    sizeInPixels: Object;
    supportedGlyphCodes: Object;
    constructor();

    tryRedefineAsync(glyphCode: Number, glyphData: Object, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class LineDisplayStatusUpdatedEventArgs {
    status: LineDisplayPowerStatus;
    constructor();

  }

  export class LineDisplayCapabilities {
    canBlink: LineDisplayTextAttributeGranularity;
    canChangeBlinkRate: Boolean;
    canChangeScreenSize: Boolean;
    canDisplayBitmaps: Boolean;
    canDisplayCustomGlyphs: Boolean;
    canMapCharacterSets: Boolean;
    canReadCharacterAtCursor: Boolean;
    canReverse: LineDisplayTextAttributeGranularity;
    isBrightnessSupported: Boolean;
    isCursorSupported: Boolean;
    isHorizontalMarqueeSupported: Boolean;
    isInterCharacterWaitSupported: Boolean;
    isStatisticsReportingSupported: Boolean;
    isStatisticsUpdatingSupported: Boolean;
    isVerticalMarqueeSupported: Boolean;
    powerReportingType: UnifiedPosPowerReportingType;
    supportedDescriptors: Number;
    supportedWindows: Number;
    constructor();

  }

  export class LineDisplayAttributes {
    screenSizeInCharacters: Object;
    isPowerNotifyEnabled: Boolean;
    isCharacterSetMappingEnabled: Boolean;
    currentWindow: LineDisplayWindow;
    characterSet: Number;
    brightness: Number;
    blinkRate: Number;
    constructor();

  }

export * as provider from "./devices.pointofservice.provider.js";