  export enum BluetoothLEScanningMode {
    passive,
    active,
  }

  export enum BluetoothLEAdvertisementFlags {
    none,
    limitedDiscoverableMode,
    generalDiscoverableMode,
    classicNotSupported,
    dualModeControllerCapable,
    dualModeHostCapable,
  }

  export enum BluetoothLEAdvertisementType {
    connectableUndirected,
    connectableDirected,
    scannableUndirected,
    nonConnectableUndirected,
    scanResponse,
  }

  export enum BluetoothLEAdvertisementWatcherStatus {
    created,
    started,
    stopping,
    stopped,
    aborted,
  }

  export enum BluetoothLEAdvertisementPublisherStatus {
    created,
    waiting,
    started,
    stopping,
    stopped,
    aborted,
  }

  export class BluetoothLEManufacturerData {
    data: Object;
    companyId: number;
    constructor();
    constructor(companyId: number, data: Object);

  }

  export class BluetoothLEAdvertisementDataSection {
    dataType: number;
    data: Object;
    constructor();
    constructor(dataType: number, data: Object);

  }

  export class BluetoothLEAdvertisement {
    localName: string;
    flags: BluetoothLEAdvertisementFlags;
    dataSections: Object;
    manufacturerData: Object;
    serviceUuids: Object;
    constructor();

    getManufacturerDataByCompanyId(companyId: number): Object;

    getSectionsByType(type: number): Object;

  }

  export class BluetoothLEAdvertisementBytePattern {
    offset: number;
    dataType: number;
    data: Object;
    constructor();
    constructor(dataType: number, offset: number, data: Object);

  }

  export class BluetoothLEAdvertisementFilter {
    advertisement: BluetoothLEAdvertisement;
    bytePatterns: Object;
    constructor();

  }

  export class BluetoothLEAdvertisementWatcherStoppedEventArgs {
    error: number;
    constructor();

  }

  export class BluetoothLEAdvertisementWatcher {
    signalStrengthFilter: Object;
    scanningMode: BluetoothLEScanningMode;
    advertisementFilter: BluetoothLEAdvertisementFilter;
    maxOutOfRangeTimeout: number;
    maxSamplingInterval: number;
    minOutOfRangeTimeout: number;
    minSamplingInterval: number;
    status: BluetoothLEAdvertisementWatcherStatus;
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

  export class BluetoothLEAdvertisementReceivedEventArgs {
    advertisement: BluetoothLEAdvertisement;
    advertisementType: BluetoothLEAdvertisementType;
    bluetoothAddress: number;
    rawSignalStrengthInDBm: number;
    timestamp: Date;
    constructor();

  }

  export class BluetoothLEAdvertisementDataTypes {
    static advertisingInterval: number;
    static appearance: number;
    static completeLocalName: number;
    static completeService128BitUuids: number;
    static completeService16BitUuids: number;
    static completeService32BitUuids: number;
    static flags: number;
    static incompleteService128BitUuids: number;
    static incompleteService16BitUuids: number;
    static incompleteService32BitUuids: number;
    static manufacturerSpecificData: number;
    static publicTargetAddress: number;
    static randomTargetAddress: number;
    static serviceData128BitUuids: number;
    static serviceData16BitUuids: number;
    static serviceData32BitUuids: number;
    static serviceSolicitation128BitUuids: number;
    static serviceSolicitation16BitUuids: number;
    static serviceSolicitation32BitUuids: number;
    static shortenedLocalName: number;
    static slaveConnectionIntervalRange: number;
    static txPowerLevel: number;
    constructor();

  }

  export class BluetoothLEAdvertisementPublisherStatusChangedEventArgs {
    error: number;
    status: BluetoothLEAdvertisementPublisherStatus;
    constructor();

  }

  export class BluetoothLEAdvertisementPublisher {
    advertisement: BluetoothLEAdvertisement;
    status: BluetoothLEAdvertisementPublisherStatus;
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

