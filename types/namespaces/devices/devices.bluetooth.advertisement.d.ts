  export enum BluetoothLEAdvertisementFlags {
    none,
    limitedDiscoverableMode,
    generalDiscoverableMode,
    classicNotSupported,
    dualModeControllerCapable,
    dualModeHostCapable,
  }

  export enum BluetoothLEAdvertisementPublisherStatus {
    created,
    waiting,
    started,
    stopping,
    stopped,
    aborted,
  }

  export enum BluetoothLEAdvertisementType {
    connectableUndirected,
    connectableDirected,
    scannableUndirected,
    nonConnectableUndirected,
    scanResponse,
    extended,
  }

  export enum BluetoothLEAdvertisementWatcherStatus {
    created,
    started,
    stopping,
    stopped,
    aborted,
  }

  export enum BluetoothLEScanningMode {
    passive,
    active,
    none,
  }

  export class BluetoothLEAdvertisement {
    localName: String;
    flags: BluetoothLEAdvertisementFlags;
    dataSections: Object;
    manufacturerData: Object;
    serviceUuids: Object;
    constructor();

    getManufacturerDataByCompanyId(companyId: Number): Object;

    getSectionsByType(type: Number): Object;

  }

  export class BluetoothLEAdvertisementBytePattern {
    offset: Number;
    dataType: Number;
    data: Object;
    constructor();
    constructor(dataType: Number, offset: Number, data: Object);

  }

  export class BluetoothLEAdvertisementDataSection {
    dataType: Number;
    data: Object;
    constructor();
    constructor(dataType: Number, data: Object);

  }

  export class BluetoothLEAdvertisementDataTypes {
    static advertisingInterval: Number;
    static appearance: Number;
    static completeLocalName: Number;
    static completeService128BitUuids: Number;
    static completeService16BitUuids: Number;
    static completeService32BitUuids: Number;
    static flags: Number;
    static incompleteService128BitUuids: Number;
    static incompleteService16BitUuids: Number;
    static incompleteService32BitUuids: Number;
    static manufacturerSpecificData: Number;
    static peripheralConnectionIntervalRange: Number;
    static publicTargetAddress: Number;
    static randomTargetAddress: Number;
    static serviceData128BitUuids: Number;
    static serviceData16BitUuids: Number;
    static serviceData32BitUuids: Number;
    static serviceSolicitation128BitUuids: Number;
    static serviceSolicitation16BitUuids: Number;
    static serviceSolicitation32BitUuids: Number;
    static shortenedLocalName: Number;
    static txPowerLevel: Number;
    constructor();

  }

  export class BluetoothLEAdvertisementFilter {
    advertisement: BluetoothLEAdvertisement;
    bytePatterns: Object;
    constructor();

  }

  export class BluetoothLEAdvertisementPublisher {
    advertisement: BluetoothLEAdvertisement;
    status: BluetoothLEAdvertisementPublisherStatus;
    useExtendedAdvertisement: Boolean;
    preferredTransmitPowerLevelInDBm: Number;
    isAnonymous: Boolean;
    includeTransmitPowerLevel: Boolean;
    constructor();
    constructor(advertisement: BluetoothLEAdvertisement);

    start(): void;

    stop(): void;

    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BluetoothLEAdvertisementPublisherStatusChangedEventArgs {
    error: Number;
    status: BluetoothLEAdvertisementPublisherStatus;
    selectedTransmitPowerLevelInDBm: Number;
    constructor();

  }

  export class BluetoothLEAdvertisementReceivedEventArgs {
    advertisement: BluetoothLEAdvertisement;
    advertisementType: BluetoothLEAdvertisementType;
    bluetoothAddress: Number;
    rawSignalStrengthInDBm: Number;
    timestamp: Date;
    bluetoothAddressType: Number;
    isAnonymous: Boolean;
    isConnectable: Boolean;
    isDirected: Boolean;
    isScanResponse: Boolean;
    isScannable: Boolean;
    transmitPowerLevelInDBm: Number;
    constructor();

  }

  export class BluetoothLEAdvertisementWatcher {
    signalStrengthFilter: Object;
    scanningMode: BluetoothLEScanningMode;
    advertisementFilter: BluetoothLEAdvertisementFilter;
    maxOutOfRangeTimeout: Number;
    maxSamplingInterval: Number;
    minOutOfRangeTimeout: Number;
    minSamplingInterval: Number;
    status: BluetoothLEAdvertisementWatcherStatus;
    allowExtendedAdvertisements: Boolean;
    constructor();
    constructor(advertisementFilter: BluetoothLEAdvertisementFilter);

    start(): void;

    stop(): void;

    addListener(type: "Received", listener: (ev: Event) => void): void ;
    removeListener(type: "Received", listener: (ev: Event) => void): void ;
    on(type: "Received", listener: (ev: Event) => void): void ;
    off(type: "Received", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BluetoothLEAdvertisementWatcherStoppedEventArgs {
    error: Number;
    constructor();

  }

  export class BluetoothLEManufacturerData {
    data: Object;
    companyId: Number;
    constructor();
    constructor(companyId: Number, data: Object);

  }

