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

  export enum NDCertificateFeature {
    transmitter,
    receiver,
    sharedCertificate,
    secureClock,
    antiRollBackClock,
    cRLS,
    playReady3Features,
  }

  export enum NDProximityDetectionType {
    uDP,
    tCP,
    transportAgnostic,
  }

  export enum NDMediaStreamType {
    audio,
    video,
  }

  export enum NDContentIDType {
    keyID,
    playReadyObject,
    custom,
  }

  export enum NDClosedCaptionFormat {
    aTSC,
    sCTE20,
    unknown,
  }

  export enum NDStartAsyncOptions {
    mutualAuthentication,
    waitForLicenseDescriptor,
  }

  export class PlayReadyContentHeader {
    customAttributes: string;
    decryptorSetup: PlayReadyDecryptorSetup;
    domainServiceId: string;
    encryptionType: PlayReadyEncryptionAlgorithm;
    headerWithEmbeddedUpdates: PlayReadyContentHeader;
    keyId: string;
    keyIdString: string;
    licenseAcquisitionUrl: Object;
    licenseAcquisitionUserInterfaceUrl: Object;
    keyIdStrings: Array<string>;
    keyIds: Array<string>;
    constructor();
    constructor(dwFlags: number, contentKeyIds: Array<string>, contentKeyIdStrings: Array<string>, contentEncryptionAlgorithm: PlayReadyEncryptionAlgorithm, licenseAcquisitionUrl: Object, licenseAcquisitionUserInterfaceUrl: Object, customAttributes: string, domainServiceId: string);
    constructor(headerBytes: Array<number>, licenseAcquisitionUrl: Object, licenseAcquisitionUserInterfaceUrl: Object, customAttributes: string, domainServiceId: string);
    constructor(contentKeyId: string, contentKeyIdString: string, contentEncryptionAlgorithm: PlayReadyEncryptionAlgorithm, licenseAcquisitionUrl: Object, licenseAcquisitionUserInterfaceUrl: Object, customAttributes: string, domainServiceId: string);
    constructor(headerBytes: Array<number>);

    getSerializedHeader(): Array<number>;

  }

  export class PlayReadySoapMessage {
    messageHeaders: Object;
    uri: Object;
    constructor();

    getMessageBody(): Array<number>;

  }

  export class PlayReadyContentResolver {
    constructor();

    static serviceRequest(contentHeader: PlayReadyContentHeader): IPlayReadyServiceRequest;


  }

  export class PlayReadyIndividualizationServiceRequest {
    protectionSystem: string;
    type: string;
    uri: Object;
    challengeCustomData: string;
    responseCustomData: string;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

  }

  export class PlayReadyDomainJoinServiceRequest {
    protectionSystem: string;
    type: string;
    domainServiceId: string;
    domainFriendlyName: string;
    domainAccountId: string;
    uri: Object;
    challengeCustomData: string;
    responseCustomData: string;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

  }

  export class PlayReadyDomainLeaveServiceRequest {
    protectionSystem: string;
    type: string;
    domainServiceId: string;
    domainAccountId: string;
    uri: Object;
    challengeCustomData: string;
    responseCustomData: string;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

  }

  export class PlayReadyLicenseIterable {
    constructor();
    constructor(contentHeader: PlayReadyContentHeader, fullyEvaluated: boolean);

    first(): Object;

  }

  export class PlayReadyLicenseAcquisitionServiceRequest {
    protectionSystem: string;
    type: string;
    domainServiceId: string;
    contentHeader: PlayReadyContentHeader;
    sessionId: string;
    uri: Object;
    challengeCustomData: string;
    responseCustomData: string;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

    createLicenseIterable(contentHeader: PlayReadyContentHeader, fullyEvaluated: boolean): PlayReadyLicenseIterable;

  }

  export class PlayReadyMeteringReportServiceRequest {
    protectionSystem: string;
    type: string;
    meteringCertificate: Array<number>;
    uri: Object;
    challengeCustomData: string;
    responseCustomData: string;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

  }

  export class PlayReadyRevocationServiceRequest {
    protectionSystem: string;
    type: string;
    uri: Object;
    challengeCustomData: string;
    responseCustomData: string;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

  }

  export class PlayReadyLicenseManagement {
    constructor();

    static deleteLicenses(contentHeader: PlayReadyContentHeader, callback: (error: Error) => void): void ;


  }

  export class IPlayReadyLicense {
    chainDepth: number;
    domainAccountID: string;
    expirationDate: Date;
    expireAfterFirstPlay: number;
    fullyEvaluated: boolean;
    usableForPlay: boolean;
    constructor();

    getKIDAtChainDepth(chainDepth: number): string;

  }

  export class PlayReadyLicense {
    chainDepth: number;
    domainAccountID: string;
    expirationDate: Date;
    expireAfterFirstPlay: number;
    fullyEvaluated: boolean;
    usableForPlay: boolean;
    expiresInRealTime: boolean;
    inMemoryOnly: boolean;
    secureStopId: string;
    securityLevel: number;
    constructor();

    getKIDAtChainDepth(chainDepth: number): string;

  }

  export class PlayReadyLicenseIterator {
    current: IPlayReadyLicense;
    hasCurrent: boolean;
    constructor();

    moveNext(): boolean;

    getMany();
  }

  export class IPlayReadyDomain {
    accountId: string;
    domainJoinUrl: Object;
    friendlyName: string;
    revision: number;
    serviceId: string;
    constructor();

  }

  export class PlayReadyDomain {
    accountId: string;
    domainJoinUrl: Object;
    friendlyName: string;
    revision: number;
    serviceId: string;
    constructor();

  }

  export class PlayReadyDomainIterable {
    constructor();
    constructor(domainAccountId: string);

    first(): Object;

  }

  export class PlayReadyDomainIterator {
    current: IPlayReadyDomain;
    hasCurrent: boolean;
    constructor();

    moveNext(): boolean;

    getMany();
  }

  export class PlayReadyStatics {
    static domainJoinServiceRequestType: string;
    static domainLeaveServiceRequestType: string;
    static individualizationServiceRequestType: string;
    static licenseAcquirerServiceRequestType: string;
    static mediaProtectionSystemId: string;
    static meteringReportServiceRequestType: string;
    static playReadySecurityVersion: number;
    static revocationServiceRequestType: string;
    static playReadyCertificateSecurityLevel: number;
    static secureStopServiceRequestType: string;
    static protectionSystemId: string;
    static inputTrustAuthorityToCreate: string;
    constructor();

    static checkSupportedHardware(hwdrmFeature: PlayReadyHardwareDRMFeatures): boolean;


  }

  export class PlayReadySecureStopServiceRequest {
    protectionSystem: string;
    type: string;
    publisherCertificate: Array<number>;
    sessionID: string;
    startTime: Date;
    stopped: boolean;
    updateTime: Date;
    uri: Object;
    challengeCustomData: string;
    responseCustomData: string;
    constructor();
    constructor(publisherCertBytes: Array<number>);
    constructor(sessionID: string, publisherCertBytes: Array<number>);

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

  }

  export class PlayReadySecureStopIterable {
    constructor();
    constructor(publisherCertBytes: Array<number>);

    first(): Object;

  }

  export class PlayReadySecureStopIterator {
    current: IPlayReadySecureStopServiceRequest;
    hasCurrent: boolean;
    constructor();

    moveNext(): boolean;

    getMany();
  }

  export class PlayReadyITADataGenerator {
    constructor();

    generateData(guidCPSystemId: string, countOfStreams: number, configuration: Object, format: PlayReadyITADataFormat): Array<number>;

  }

  export class IPlayReadyLicenseSession {
    constructor();

    createLAServiceRequest(): IPlayReadyLicenseAcquisitionServiceRequest;

    configureMediaProtectionManager(mpm: Object): void;

  }

  export class IPlayReadyLicenseSession2 {
    constructor();

    createLicenseIterable(contentHeader: PlayReadyContentHeader, fullyEvaluated: boolean): PlayReadyLicenseIterable;

  }

  export class PlayReadyLicenseSession {
    constructor();
    constructor(configuration: Object);

    createLAServiceRequest(): IPlayReadyLicenseAcquisitionServiceRequest;

    configureMediaProtectionManager(mpm: Object): void;

    createLicenseIterable(contentHeader: PlayReadyContentHeader, fullyEvaluated: boolean): PlayReadyLicenseIterable;

  }

  export class INDDownloadEngine {
    bufferFullMaxThresholdInSamples: number;
    bufferFullMinThresholdInSamples: number;
    canSeek: boolean;
    notifier: NDDownloadEngineNotifier;
    constructor();

    open(uri: Object, sessionIDBytes: Array<number>): void;

    pause(): void;

    resume(): void;

    close(): void;

    seek(startPosition: number): void;

  }

  export class NDDownloadEngineNotifier {
    constructor();

    onStreamOpened(): void;

    onPlayReadyObjectReceived(dataBytes: Array<number>): void;

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onDataReceived(dataBytes: Array<number>, bytesReceived: number): void;

    onEndOfStream(): void;

    onNetworkError(): void;

  }

  export class INDDownloadEngineNotifier {
    constructor();

    onStreamOpened(): void;

    onPlayReadyObjectReceived(dataBytes: Array<number>): void;

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onDataReceived(dataBytes: Array<number>, bytesReceived: number): void;

    onEndOfStream(): void;

    onNetworkError(): void;

  }

  export class INDLicenseFetchDescriptor {
    contentID: Array<number>;
    contentIDType: NDContentIDType;
    licenseFetchChallengeCustomData: INDCustomData;
    constructor();

  }

  export class INDCustomData {
    customData: Array<number>;
    customDataTypeID: Array<number>;
    constructor();

  }

  export class INDStreamParser {
    notifier: NDStreamParserNotifier;
    constructor();

    parseData(dataBytes: Array<number>): void;

    getStreamInformation(descriptor: Object, streamType: NDMediaStreamType): number;

    beginOfStream(): void;

    endOfStream(): void;

  }

  export class NDStreamParserNotifier {
    constructor();

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onMediaStreamDescriptorCreated(audioStreamDescriptors: Object, videoStreamDescriptors: Object): void;

    onSampleParsed(streamID: number, streamType: NDMediaStreamType, streamSample: Object, pts: number, ccFormat: NDClosedCaptionFormat, ccDataBytes: Array<number>): void;

    onBeginSetupDecryptor(descriptor: Object, keyID: string, proBytes: Array<number>): void;

  }

  export class INDStreamParserNotifier {
    constructor();

    onContentIDReceived(licenseFetchDescriptor: INDLicenseFetchDescriptor): void;

    onMediaStreamDescriptorCreated(audioStreamDescriptors: Object, videoStreamDescriptors: Object): void;

    onSampleParsed(streamID: number, streamType: NDMediaStreamType, streamSample: Object, pts: number, ccFormat: NDClosedCaptionFormat, ccDataBytes: Array<number>): void;

    onBeginSetupDecryptor(descriptor: Object, keyID: string, proBytes: Array<number>): void;

  }

  export class INDSendResult {
    response: Array<number>;
    constructor();

  }

  export class INDMessenger {
    constructor();

    sendRegistrationRequestAsync(sessionIDBytes: Array<number>, challengeDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionStartAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<number>, sessionIDBytes: Array<number>, challengeDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionResponseAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<number>, sessionIDBytes: Array<number>, responseDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendLicenseFetchRequestAsync(sessionIDBytes: Array<number>, challengeDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

  }

  export class NDTCPMessenger {
    constructor();
    constructor(remoteHostName: string, remoteHostPort: number);

    sendRegistrationRequestAsync(sessionIDBytes: Array<number>, challengeDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionStartAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<number>, sessionIDBytes: Array<number>, challengeDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendProximityDetectionResponseAsync(pdType: NDProximityDetectionType, transmitterChannelBytes: Array<number>, sessionIDBytes: Array<number>, responseDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

    sendLicenseFetchRequestAsync(sessionIDBytes: Array<number>, challengeDataBytes: Array<number>, callback: (error: Error, result: INDSendResult) => void): void ;

  }

  export class INDTransmitterProperties {
    certificateType: NDCertificateType;
    clientID: Array<number>;
    expirationDate: Date;
    modelDigest: Array<number>;
    modelManufacturerName: string;
    modelName: string;
    modelNumber: string;
    platformIdentifier: NDCertificatePlatformID;
    securityLevel: number;
    securityVersion: number;
    supportedFeatures: Array<NDCertificateFeature>;
    constructor();

  }

  export class INDStartResult {
    mediaStreamSource: Object;
    constructor();

  }

  export class INDLicenseFetchResult {
    responseCustomData: INDCustomData;
    constructor();

  }

  export class NDLicenseFetchDescriptor {
    licenseFetchChallengeCustomData: INDCustomData;
    contentID: Array<number>;
    contentIDType: NDContentIDType;
    constructor();
    constructor(contentIDType: NDContentIDType, contentIDBytes: Array<number>, licenseFetchChallengeCustomData: INDCustomData);

  }

  export class INDRegistrationCompletedEventArgs {
    responseCustomData: INDCustomData;
    transmitterCertificateAccepted: boolean;
    transmitterProperties: INDTransmitterProperties;
    constructor();

  }

  export class NDCustomData {
    customData: Array<number>;
    customDataTypeID: Array<number>;
    constructor();
    constructor(customDataTypeIDBytes: Array<number>, customDataBytes: Array<number>);

  }

  export class INDProximityDetectionCompletedEventArgs {
    proximityDetectionRetryCount: number;
    constructor();

  }

  export class INDLicenseFetchCompletedEventArgs {
    responseCustomData: INDCustomData;
    constructor();

  }

  export class NDClient {
    constructor();
    constructor(downloadEngine: INDDownloadEngine, streamParser: INDStreamParser, pMessenger: INDMessenger);

    startAsync(contentUrl: Object, startAsyncOptions: number, registrationCustomData: INDCustomData, licenseFetchDescriptor: INDLicenseFetchDescriptor, callback: (error: Error, result: INDStartResult) => void): void ;

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

  export class INDClosedCaptionDataReceivedEventArgs {
    closedCaptionData: Array<number>;
    closedCaptionDataFormat: NDClosedCaptionFormat;
    presentationTimestamp: number;
    constructor();

  }

  export class INDStorageFileHelper {
    constructor();

    getFileURLs(file: Object): Object;

  }

  export class NDStorageFileHelper {
    constructor();

    getFileURLs(file: Object): Object;

  }

  export class IPlayReadyServiceRequest {
    challengeCustomData: string;
    responseCustomData: string;
    uri: Object;
    constructor();

    beginServiceRequest(callback: (error: Error) => void): void ;

    nextServiceRequest(): IPlayReadyServiceRequest;

    generateManualEnablingChallenge(): PlayReadySoapMessage;

    processManualEnablingResponse(responseBytes: Array<number>): number;

  }

  export class IPlayReadyLicenseAcquisitionServiceRequest {
    contentHeader: PlayReadyContentHeader;
    domainServiceId: string;
    constructor();

  }

  export class IPlayReadySecureStopServiceRequest {
    publisherCertificate: Array<number>;
    sessionID: string;
    startTime: Date;
    stopped: boolean;
    updateTime: Date;
    constructor();

  }

