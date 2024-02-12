  export enum NDCertificateFeature {
    transmitter,
    receiver,
    sharedCertificate,
    secureClock,
    antiRollBackClock,
    cRLS,
    playReady3Features,
  }

  export enum NDCertificatePlatformID {
    windows,
    oSX,
    windowsOnARM,
    windowsMobile7,
    iOSOnARM,
    xBoxOnPPC,
    windowsPhone8OnARM,
    windowsPhone8OnX86,
    xboxOne,
    androidOnARM,
    windowsPhone81OnARM,
    windowsPhone81OnX86,
  }

  export enum NDCertificateType {
    unknown,
    pC,
    device,
    domain,
    issuer,
    crlSigner,
    service,
    silverlight,
    application,
    metering,
    keyFileSigner,
    server,
    licenseSigner,
  }

  export enum NDClosedCaptionFormat {
    aTSC,
    sCTE20,
    unknown,
  }

  export enum NDContentIDType {
    keyID,
    playReadyObject,
    custom,
  }

  export enum NDMediaStreamType {
    audio,
    video,
  }

  export enum NDProximityDetectionType {
    uDP,
    tCP,
    transportAgnostic,
  }

  export enum NDStartAsyncOptions {
    mutualAuthentication,
    waitForLicenseDescriptor,
  }

  export enum PlayReadyDecryptorSetup {
    uninitialized,
    onDemand,
  }

  export enum PlayReadyEncryptionAlgorithm {
    unprotected,
    aes128Ctr,
    cocktail,
    aes128Cbc,
    unspecified,
    uninitialized,
  }

  export enum PlayReadyHardwareDRMFeatures {
    hardwareDRM,
    hEVC,
    aes128Cbc,
  }

  export enum PlayReadyITADataFormat {
    serializedProperties,
    serializedProperties_WithContentProtectionWrapper,
  }

  export class INDClosedCaptionDataReceivedEventArgs {
    closedCaptionData: Array<Number>;
    closedCaptionDataFormat: NDClosedCaptionFormat;
    presentationTimestamp: Number;
    constructor();

  }

  export class INDCustomData {
    customData: Array<Number>;
    customDataTypeID: Array<Number>;
    constructor();

  }

  export class INDDownloadEngine {
    bufferFullMaxThresholdInSamples: Number;
    bufferFullMinThresholdInSamples: Number;
    canSeek: Boolean;
    notifier: NDDownloadEngineNotifier;
    constructor();

    open(uri: Object, sessionIDBytes: Array<Number>): void;

    pause(): void;

    resume(): void;

    close(): void;

    seek(startPosition: Number): void;

  }

  export class INDDownloadEngineNotifier {
    constructor();

    onStreamOpened(): void;

    onPlayReadyObjectReceived(dataBytes: Array<Number>): void;

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onDataReceived(dataBytes: Array<Number>, bytesReceived: Number): void;

    onEndOfStream(): void;

    onNetworkError(): void;

  }

  export class INDLicenseFetchCompletedEventArgs {
    responseCustomData: INDCustomData;
    constructor();

  }

  export class INDLicenseFetchDescriptor {
    contentID: Array<Number>;
    contentIDType: NDContentIDType;
    licenseFetchChallengeCustomData: INDCustomData;
    constructor();

  }

  export class INDLicenseFetchResult {
    responseCustomData: INDCustomData;
    constructor();

  }

  export class INDMessenger {
    constructor();

    sendRegistrationRequestAsync(sessionIDBytes: Array<Number>, challengeDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionStartAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<Number>, sessionIDBytes: Array<Number>, challengeDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionResponseAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<Number>, sessionIDBytes: Array<Number>, responseDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendLicenseFetchRequestAsync(sessionIDBytes: Array<Number>, challengeDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

  }

  export class INDProximityDetectionCompletedEventArgs {
    proximityDetectionRetryCount: Number;
    constructor();

  }

  export class INDRegistrationCompletedEventArgs {
    responseCustomData: INDCustomData;
    transmitterCertificateAccepted: Boolean;
    transmitterProperties: INDTransmitterProperties;
    constructor();

  }

  export class INDSendResult {
    response: Array<Number>;
    constructor();

  }

  export class INDStartResult {
    mediaStreamSource: Object;
    constructor();

  }

  export class INDStorageFileHelper {
    constructor();

    getFileURLs(file: Object): Object;

  }

  export class INDStreamParser {
    notifier: NDStreamParserNotifier;
    constructor();

    parseData(dataBytes: Array<Number>): void;

    getStreamInformation(descriptor: Object, streamType: NDMediaStreamType): Number;

    beginOfStream(): void;

    endOfStream(): void;

  }

  export class INDStreamParserNotifier {
    constructor();

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onMediaStreamDescriptorCreated(audioStreamDescriptors: Object, videoStreamDescriptors: Object): void;

    onSampleParsed(streamID: Number, streamType: NDMediaStreamType, streamSample: Object, pts: Number, ccFormat: NDClosedCaptionFormat, ccDataBytes: Array<Number>): void;

    onBeginSetupDecryptor(descriptor: Object, keyID: String, proBytes: Array<Number>): void;

  }

  export class INDTransmitterProperties {
    certificateType: NDCertificateType;
    clientID: Array<Number>;
    expirationDate: Date;
    modelDigest: Array<Number>;
    modelManufacturerName: String;
    modelName: String;
    modelNumber: String;
    platformIdentifier: NDCertificatePlatformID;
    securityLevel: Number;
    securityVersion: Number;
    supportedFeatures: Array<NDCertificateFeature>;
    constructor();

  }

  export class IPlayReadyDomain {
    accountId: String;
    domainJoinUrl: Object;
    friendlyName: String;
    revision: Number;
    serviceId: String;
    constructor();

  }

  export class IPlayReadyLicense {
    chainDepth: Number;
    domainAccountID: String;
    expirationDate: Date;
    expireAfterFirstPlay: Number;
    fullyEvaluated: Boolean;
    usableForPlay: Boolean;
    constructor();

    getKIDAtChainDepth(chainDepth: Number): String;

  }

  export class IPlayReadyLicenseAcquisitionServiceRequest {
    contentHeader: PlayReadyContentHeader;
    domainServiceId: String;
    constructor();

  }

  export class IPlayReadyLicenseSession {
    constructor();

    createLAServiceRequest(): IPlayReadyLicenseAcquisitionServiceRequest;

    configureMediaProtectionManager(mpm: Object): void;

  }

  export class IPlayReadyLicenseSession2 {
    constructor();

    createLicenseIterable(contentHeader: PlayReadyContentHeader, fullyEvaluated: Boolean): PlayReadyLicenseIterable;

  }

  export class IPlayReadySecureStopServiceRequest {
    publisherCertificate: Array<Number>;
    sessionID: String;
    startTime: Date;
    stopped: Boolean;
    updateTime: Date;
    constructor();

  }

  export class IPlayReadyServiceRequest {
    challengeCustomData: String;
    responseCustomData: String;
    uri: Object;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

  }

  export class NDClient {
    constructor();
    constructor(downloadEngine: INDDownloadEngine, streamParser: INDStreamParser, pMessenger: INDMessenger);

    startAsync(contentUrl: Object, startAsyncOptions: Number, registrationCustomData: INDCustomData, licenseFetchDescriptor: INDLicenseFetchDescriptor, callback: (error: Error, result: INDStartResult) => void): void ;

    licenseFetchAsync(licenseFetchDescriptor: INDLicenseFetchDescriptor, callback: (error: Error, result: INDLicenseFetchResult) => void): void ;

    reRegistrationAsync(registrationCustomData: INDCustomData, callback: (error: Error) => void): void ;

    close(): void;

    addListener(type: "ClosedCaptionDataReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ClosedCaptionDataReceived", listener: (ev: Event) => void): void ;
    on(type: "ClosedCaptionDataReceived", listener: (ev: Event) => void): void ;
    off(type: "ClosedCaptionDataReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "LicenseFetchCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "LicenseFetchCompleted", listener: (ev: Event) => void): void ;
    on(type: "LicenseFetchCompleted", listener: (ev: Event) => void): void ;
    off(type: "LicenseFetchCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProximityDetectionCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ProximityDetectionCompleted", listener: (ev: Event) => void): void ;
    on(type: "ProximityDetectionCompleted", listener: (ev: Event) => void): void ;
    off(type: "ProximityDetectionCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ReRegistrationNeeded", listener: (ev: Event) => void): void ;
    removeListener(type: "ReRegistrationNeeded", listener: (ev: Event) => void): void ;
    on(type: "ReRegistrationNeeded", listener: (ev: Event) => void): void ;
    off(type: "ReRegistrationNeeded", listener: (ev: Event) => void): void ;
    
    addListener(type: "RegistrationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "RegistrationCompleted", listener: (ev: Event) => void): void ;
    on(type: "RegistrationCompleted", listener: (ev: Event) => void): void ;
    off(type: "RegistrationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class NDCustomData {
    customData: Array<Number>;
    customDataTypeID: Array<Number>;
    constructor();
    constructor(customDataTypeIDBytes: Array<Number>, customDataBytes: Array<Number>);

  }

  export class NDDownloadEngineNotifier {
    constructor();

    onStreamOpened(): void;

    onPlayReadyObjectReceived(dataBytes: Array<Number>): void;

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onDataReceived(dataBytes: Array<Number>, bytesReceived: Number): void;

    onEndOfStream(): void;

    onNetworkError(): void;

  }

  export class NDLicenseFetchDescriptor {
    licenseFetchChallengeCustomData: INDCustomData;
    contentID: Array<Number>;
    contentIDType: NDContentIDType;
    constructor();
    constructor(contentIDType: NDContentIDType, contentIDBytes: Array<Number>, licenseFetchChallengeCustomData: INDCustomData);

  }

  export class NDStorageFileHelper {
    constructor();

    getFileURLs(file: Object): Object;

  }

  export class NDStreamParserNotifier {
    constructor();

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onMediaStreamDescriptorCreated(audioStreamDescriptors: Object, videoStreamDescriptors: Object): void;

    onSampleParsed(streamID: Number, streamType: NDMediaStreamType, streamSample: Object, pts: Number, ccFormat: NDClosedCaptionFormat, ccDataBytes: Array<Number>): void;

    onBeginSetupDecryptor(descriptor: Object, keyID: String, proBytes: Array<Number>): void;

  }

  export class NDTCPMessenger {
    constructor();
    constructor(remoteHostName: String, remoteHostPort: Number);

    sendRegistrationRequestAsync(sessionIDBytes: Array<Number>, challengeDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionStartAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<Number>, sessionIDBytes: Array<Number>, challengeDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionResponseAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<Number>, sessionIDBytes: Array<Number>, responseDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendLicenseFetchRequestAsync(sessionIDBytes: Array<Number>, challengeDataBytes: Array<Number>, callback: (error: Error, result: INDSendResult) => void): void ;

  }

  export class PlayReadyContentHeader {
    customAttributes: String;
    decryptorSetup: PlayReadyDecryptorSetup;
    domainServiceId: String;
    encryptionType: PlayReadyEncryptionAlgorithm;
    headerWithEmbeddedUpdates: PlayReadyContentHeader;
    keyId: String;
    keyIdString: String;
    licenseAcquisitionUrl: Object;
    licenseAcquisitionUserInterfaceUrl: Object;
    keyIdStrings: Array<String>;
    keyIds: Array<String>;
    constructor();
    constructor(dwFlags: Number, contentKeyIds: Array<String>, contentKeyIdStrings: Array<String>, contentEncryptionAlgorithm: PlayReadyEncryptionAlgorithm, licenseAcquisitionUrl: Object, licenseAcquisitionUserInterfaceUrl: Object, customAttributes: String, domainServiceId: String);
    constructor(headerBytes: Array<Number>, licenseAcquisitionUrl: Object, licenseAcquisitionUserInterfaceUrl: Object, customAttributes: String, domainServiceId: String);
    constructor(contentKeyId: String, contentKeyIdString: String, contentEncryptionAlgorithm: PlayReadyEncryptionAlgorithm, licenseAcquisitionUrl: Object, licenseAcquisitionUserInterfaceUrl: Object, customAttributes: String, domainServiceId: String);
    constructor(headerBytes: Array<Number>);

    getSerializedHeader(): Array<Number>;

  }

  export class PlayReadyContentResolver {
    constructor();

    static serviceRequest(contentHeader: PlayReadyContentHeader): IPlayReadyServiceRequest;


  }

  export class PlayReadyDomain {
    accountId: String;
    domainJoinUrl: Object;
    friendlyName: String;
    revision: Number;
    serviceId: String;
    constructor();

  }

  export class PlayReadyDomainIterable {
    constructor();
    constructor(domainAccountId: String);

    first(): Object;

  }

  export class PlayReadyDomainIterator {
    current: IPlayReadyDomain;
    hasCurrent: Boolean;
    constructor();

    moveNext(): Boolean;

    getMany();
  }

  export class PlayReadyDomainJoinServiceRequest {
    protectionSystem: String;
    type: String;
    domainServiceId: String;
    domainFriendlyName: String;
    domainAccountId: String;
    uri: Object;
    challengeCustomData: String;
    responseCustomData: String;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

  }

  export class PlayReadyDomainLeaveServiceRequest {
    protectionSystem: String;
    type: String;
    domainServiceId: String;
    domainAccountId: String;
    uri: Object;
    challengeCustomData: String;
    responseCustomData: String;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

  }

  export class PlayReadyITADataGenerator {
    constructor();

    generateData(guidCPSystemId: String, countOfStreams: Number, configuration: Object, format: PlayReadyITADataFormat): Array<Number>;

  }

  export class PlayReadyIndividualizationServiceRequest {
    protectionSystem: String;
    type: String;
    uri: Object;
    challengeCustomData: String;
    responseCustomData: String;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

  }

  export class PlayReadyLicense {
    chainDepth: Number;
    domainAccountID: String;
    expirationDate: Date;
    expireAfterFirstPlay: Number;
    fullyEvaluated: Boolean;
    usableForPlay: Boolean;
    expiresInRealTime: Boolean;
    inMemoryOnly: Boolean;
    secureStopId: String;
    securityLevel: Number;
    constructor();

    getKIDAtChainDepth(chainDepth: Number): String;

  }

  export class PlayReadyLicenseAcquisitionServiceRequest {
    protectionSystem: String;
    type: String;
    domainServiceId: String;
    contentHeader: PlayReadyContentHeader;
    sessionId: String;
    uri: Object;
    challengeCustomData: String;
    responseCustomData: String;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

    createLicenseIterable(contentHeader: PlayReadyContentHeader, fullyEvaluated: Boolean): PlayReadyLicenseIterable;

  }

  export class PlayReadyLicenseIterable {
    constructor();
    constructor(contentHeader: PlayReadyContentHeader, fullyEvaluated: Boolean);

    first(): Object;

  }

  export class PlayReadyLicenseIterator {
    current: IPlayReadyLicense;
    hasCurrent: Boolean;
    constructor();

    moveNext(): Boolean;

    getMany();
  }

  export class PlayReadyLicenseManagement {
    constructor();

    static deleteLicenses(contentHeader: PlayReadyContentHeader, callback: (error: Error) => void): void ;


  }

  export class PlayReadyLicenseSession {
    constructor();
    constructor(configuration: Object);

    createLAServiceRequest(): IPlayReadyLicenseAcquisitionServiceRequest;

    configureMediaProtectionManager(mpm: Object): void;

    createLicenseIterable(contentHeader: PlayReadyContentHeader, fullyEvaluated: Boolean): PlayReadyLicenseIterable;

  }

  export class PlayReadyMeteringReportServiceRequest {
    protectionSystem: String;
    type: String;
    meteringCertificate: Array<Number>;
    uri: Object;
    challengeCustomData: String;
    responseCustomData: String;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

  }

  export class PlayReadyRevocationServiceRequest {
    protectionSystem: String;
    type: String;
    uri: Object;
    challengeCustomData: String;
    responseCustomData: String;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

  }

  export class PlayReadySecureStopIterable {
    constructor();
    constructor(publisherCertBytes: Array<Number>);

    first(): Object;

  }

  export class PlayReadySecureStopIterator {
    current: IPlayReadySecureStopServiceRequest;
    hasCurrent: Boolean;
    constructor();

    moveNext(): Boolean;

    getMany();
  }

  export class PlayReadySecureStopServiceRequest {
    protectionSystem: String;
    type: String;
    publisherCertificate: Array<Number>;
    sessionID: String;
    startTime: Date;
    stopped: Boolean;
    updateTime: Date;
    uri: Object;
    challengeCustomData: String;
    responseCustomData: String;
    constructor();
    constructor(publisherCertBytes: Array<Number>);
    constructor(sessionID: String, publisherCertBytes: Array<Number>);

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<Number>): Number;

  }

  export class PlayReadySoapMessage {
    messageHeaders: Object;
    uri: Object;
    constructor();

    getMessageBody(): Array<Number>;

  }

  export class PlayReadyStatics {
    static domainJoinServiceRequestType: String;
    static domainLeaveServiceRequestType: String;
    static individualizationServiceRequestType: String;
    static licenseAcquirerServiceRequestType: String;
    static mediaProtectionSystemId: String;
    static meteringReportServiceRequestType: String;
    static playReadySecurityVersion: Number;
    static revocationServiceRequestType: String;
    static playReadyCertificateSecurityLevel: Number;
    static secureStopServiceRequestType: String;
    static protectionSystemId: String;
    static inputTrustAuthorityToCreate: String;
    static hardwareDRMDisabledUntilTime: Date;
    static hardwareDRMDisabledAtTime: Date;
    constructor();

    static resetHardwareDRMDisabled(): void;


    static checkSupportedHardware(hwdrmFeature: PlayReadyHardwareDRMFeatures): Boolean;


  }

