  export class XboxLiveSecureSocketsContract {
    constructor();
  }

  export enum XboxLiveNetworkAccessKind {
    open,
    moderate,
    strict,
  }

  export enum XboxLiveSocketKind {
    none,
    datagram,
    stream,
  }

  export enum XboxLiveEndpointPairCreationBehaviors {
    none,
    reevaluatePath,
  }

  export enum XboxLiveEndpointPairCreationStatus {
    succeeded,
    noLocalNetworks,
    noCompatibleNetworkPaths,
    localSystemNotAuthorized,
    canceled,
    timedOut,
    remoteSystemNotAuthorized,
    refusedDueToConfiguration,
    unexpectedInternalError,
  }

  export enum XboxLiveEndpointPairState {
    invalid,
    creatingOutbound,
    creatingInbound,
    ready,
    deletingLocally,
    remoteEndpointTerminating,
    deleted,
  }

  export enum XboxLiveQualityOfServiceMetric {
    averageLatencyInMilliseconds,
    minLatencyInMilliseconds,
    maxLatencyInMilliseconds,
    averageOutboundBitsPerSecond,
    minOutboundBitsPerSecond,
    maxOutboundBitsPerSecond,
    averageInboundBitsPerSecond,
    minInboundBitsPerSecond,
    maxInboundBitsPerSecond,
  }

  export enum XboxLiveQualityOfServiceMeasurementStatus {
    notStarted,
    inProgress,
    inProgressWithProvisionalResults,
    succeeded,
    noLocalNetworks,
    noCompatibleNetworkPaths,
    localSystemNotAuthorized,
    canceled,
    timedOut,
    remoteSystemNotAuthorized,
    refusedDueToConfiguration,
    unexpectedInternalError,
  }

  export class XboxLiveDeviceAddress {
    static maxSnapshotBytesSize: Number;
    isLocal: Boolean;
    isValid: Boolean;
    networkAccessKind: XboxLiveNetworkAccessKind;
    constructor();

    static createFromSnapshotBase64(base64: String): XboxLiveDeviceAddress;


    static createFromSnapshotBuffer(buffer: Object): XboxLiveDeviceAddress;


    static createFromSnapshotBytes(buffer: Array<Number>): XboxLiveDeviceAddress;


    static getLocal(): XboxLiveDeviceAddress;


    getSnapshotAsBase64(): String;

    getSnapshotAsBuffer(): Object;

    getSnapshotAsBytes();
    compare(otherDeviceAddress: XboxLiveDeviceAddress): Number;

    addListener(type: "SnapshotChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SnapshotChanged", listener: (ev: Event) => void): void ;
    on(type: "SnapshotChanged", listener: (ev: Event) => void): void ;
    off(type: "SnapshotChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class XboxLiveEndpointPair {
    localHostName: Object;
    localPort: String;
    remoteDeviceAddress: XboxLiveDeviceAddress;
    remoteHostName: Object;
    remotePort: String;
    state: XboxLiveEndpointPairState;
    template: XboxLiveEndpointPairTemplate;
    constructor();

    static findEndpointPairBySocketAddressBytes(localSocketAddress: Array<Number>, remoteSocketAddress: Array<Number>): XboxLiveEndpointPair;


    static findEndpointPairByHostNamesAndPorts(localHostName: Object, localPort: String, remoteHostName: Object, remotePort: String): XboxLiveEndpointPair;


    deleteAsync(callback: (error: Error) => void): void ;

    getRemoteSocketAddressBytes();
    getLocalSocketAddressBytes();
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class XboxLiveEndpointPairTemplate {
    static templates: Object;
    acceptorBoundPortRangeLower: Number;
    acceptorBoundPortRangeUpper: Number;
    endpointPairs: Object;
    initiatorBoundPortRangeLower: Number;
    initiatorBoundPortRangeUpper: Number;
    name: String;
    socketKind: XboxLiveSocketKind;
    constructor();

    static getTemplateByName(name: String): XboxLiveEndpointPairTemplate;


    createEndpointPairAsync(deviceAddress: XboxLiveDeviceAddress, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;
    createEndpointPairAsync(deviceAddress: XboxLiveDeviceAddress, behaviors: XboxLiveEndpointPairCreationBehaviors, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;

    createEndpointPairForPortsAsync(deviceAddress: XboxLiveDeviceAddress, initiatorPort: String, acceptorPort: String, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;
    createEndpointPairForPortsAsync(deviceAddress: XboxLiveDeviceAddress, initiatorPort: String, acceptorPort: String, behaviors: XboxLiveEndpointPairCreationBehaviors, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;

    addListener(type: "InboundEndpointPairCreated", listener: (ev: Event) => void): void ;
    removeListener(type: "InboundEndpointPairCreated", listener: (ev: Event) => void): void ;
    on(type: "InboundEndpointPairCreated", listener: (ev: Event) => void): void ;
    off(type: "InboundEndpointPairCreated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class XboxLiveInboundEndpointPairCreatedEventArgs {
    endpointPair: XboxLiveEndpointPair;
    constructor();

  }

  export class XboxLiveEndpointPairCreationResult {
    deviceAddress: XboxLiveDeviceAddress;
    endpointPair: XboxLiveEndpointPair;
    isExistingPathEvaluation: Boolean;
    status: XboxLiveEndpointPairCreationStatus;
    constructor();

  }

  export class XboxLiveEndpointPairStateChangedEventArgs {
    newState: XboxLiveEndpointPairState;
    oldState: XboxLiveEndpointPairState;
    constructor();

  }

  export class XboxLiveQualityOfServiceMetricResult {
    deviceAddress: XboxLiveDeviceAddress;
    metric: XboxLiveQualityOfServiceMetric;
    status: XboxLiveQualityOfServiceMeasurementStatus;
    value: Number;
    constructor();

  }

  export class XboxLiveQualityOfServicePrivatePayloadResult {
    deviceAddress: XboxLiveDeviceAddress;
    status: XboxLiveQualityOfServiceMeasurementStatus;
    value: Object;
    constructor();

  }

  export class XboxLiveQualityOfServiceMeasurement {
    static publishedPrivatePayload: Object;
    static maxSimultaneousProbeConnections: Number;
    static isSystemOutboundBandwidthConstrained: Boolean;
    static isSystemInboundBandwidthConstrained: Boolean;
    static maxPrivatePayloadSize: Number;
    timeoutInMilliseconds: Number;
    shouldRequestPrivatePayloads: Boolean;
    numberOfProbesToAttempt: Number;
    deviceAddresses: Object;
    metricResults: Object;
    metrics: Object;
    numberOfResultsPending: Number;
    privatePayloadResults: Object;
    constructor();

    static publishPrivatePayloadBytes(payload: Array<Number>): void;


    static clearPrivatePayload(): void;


    measureAsync(callback: (error: Error) => void): void ;

    getMetricResultsForDevice(deviceAddress: XboxLiveDeviceAddress): Object;

    getMetricResultsForMetric(metric: XboxLiveQualityOfServiceMetric): Object;

    getMetricResult(deviceAddress: XboxLiveDeviceAddress, metric: XboxLiveQualityOfServiceMetric): XboxLiveQualityOfServiceMetricResult;

    getPrivatePayloadResult(deviceAddress: XboxLiveDeviceAddress): XboxLiveQualityOfServicePrivatePayloadResult;

  }

