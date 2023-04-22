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
    static maxSnapshotBytesSize: number;
    isLocal: boolean;
    isValid: boolean;
    networkAccessKind: XboxLiveNetworkAccessKind;
    constructor();

    static createFromSnapshotBase64(base64: string): XboxLiveDeviceAddress;


    static createFromSnapshotBuffer(buffer: Object): XboxLiveDeviceAddress;


    static createFromSnapshotBytes(buffer: Array<number>): XboxLiveDeviceAddress;


    static getLocal(): XboxLiveDeviceAddress;


    getSnapshotAsBase64(): string;

    getSnapshotAsBuffer(): Object;

    getSnapshotAsBytes();
    compare(otherDeviceAddress: XboxLiveDeviceAddress): number;

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
    localPort: string;
    remoteDeviceAddress: XboxLiveDeviceAddress;
    remoteHostName: Object;
    remotePort: string;
    state: XboxLiveEndpointPairState;
    template: XboxLiveEndpointPairTemplate;
    constructor();

    static findEndpointPairBySocketAddressBytes(localSocketAddress: Array<number>, remoteSocketAddress: Array<number>): XboxLiveEndpointPair;


    static findEndpointPairByHostNamesAndPorts(localHostName: Object, localPort: string, remoteHostName: Object, remotePort: string): XboxLiveEndpointPair;


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
    acceptorBoundPortRangeLower: number;
    acceptorBoundPortRangeUpper: number;
    endpointPairs: Object;
    initiatorBoundPortRangeLower: number;
    initiatorBoundPortRangeUpper: number;
    name: string;
    socketKind: XboxLiveSocketKind;
    constructor();

    static getTemplateByName(name: string): XboxLiveEndpointPairTemplate;


    createEndpointPairAsync(deviceAddress: XboxLiveDeviceAddress, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;
    createEndpointPairAsync(deviceAddress: XboxLiveDeviceAddress, behaviors: XboxLiveEndpointPairCreationBehaviors, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;

    createEndpointPairForPortsAsync(deviceAddress: XboxLiveDeviceAddress, initiatorPort: string, acceptorPort: string, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;
    createEndpointPairForPortsAsync(deviceAddress: XboxLiveDeviceAddress, initiatorPort: string, acceptorPort: string, behaviors: XboxLiveEndpointPairCreationBehaviors, callback: (error: Error, result: XboxLiveEndpointPairCreationResult) => void): void ;

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
    isExistingPathEvaluation: boolean;
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
    value: number;
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
    static maxSimultaneousProbeConnections: number;
    static isSystemOutboundBandwidthConstrained: boolean;
    static isSystemInboundBandwidthConstrained: boolean;
    static maxPrivatePayloadSize: number;
    timeoutInMilliseconds: number;
    shouldRequestPrivatePayloads: boolean;
    numberOfProbesToAttempt: number;
    deviceAddresses: Object;
    metricResults: Object;
    metrics: Object;
    numberOfResultsPending: number;
    privatePayloadResults: Object;
    constructor();

    static publishPrivatePayloadBytes(payload: Array<number>): void;


    static clearPrivatePayload(): void;


    measureAsync(callback: (error: Error) => void): void ;

    getMetricResultsForDevice(deviceAddress: XboxLiveDeviceAddress): Object;

    getMetricResultsForMetric(metric: XboxLiveQualityOfServiceMetric): Object;

    getMetricResult(deviceAddress: XboxLiveDeviceAddress, metric: XboxLiveQualityOfServiceMetric): XboxLiveQualityOfServiceMetricResult;

    getPrivatePayloadResult(deviceAddress: XboxLiveDeviceAddress): XboxLiveQualityOfServicePrivatePayloadResult;

  }

