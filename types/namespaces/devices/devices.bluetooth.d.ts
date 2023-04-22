  export enum BluetoothCacheMode {
    cached,
    uncached,
  }

  export enum BluetoothMajorClass {
    miscellaneous,
    computer,
    phone,
    networkAccessPoint,
    audioVideo,
    peripheral,
    imaging,
    wearable,
    toy,
    health,
  }

  export enum BluetoothMinorClass {
    uncategorized,
    computerDesktop,
    computerServer,
    computerLaptop,
    computerHandheld,
    computerPalmSize,
    computerWearable,
    computerTablet,
    phoneCellular,
    phoneCordless,
    phoneSmartPhone,
    phoneWired,
    phoneIsdn,
    networkFullyAvailable,
    networkUsed01To17Percent,
    networkUsed17To33Percent,
    networkUsed33To50Percent,
    networkUsed50To67Percent,
    networkUsed67To83Percent,
    networkUsed83To99Percent,
    networkNoServiceAvailable,
    audioVideoWearableHeadset,
    audioVideoHandsFree,
    audioVideoMicrophone,
    audioVideoLoudspeaker,
    audioVideoHeadphones,
    audioVideoPortableAudio,
    audioVideoCarAudio,
    audioVideoSetTopBox,
    audioVideoHifiAudioDevice,
    audioVideoVcr,
    audioVideoVideoCamera,
    audioVideoCamcorder,
    audioVideoVideoMonitor,
    audioVideoVideoDisplayAndLoudspeaker,
    audioVideoVideoConferencing,
    audioVideoGamingOrToy,
    peripheralJoystick,
    peripheralGamepad,
    peripheralRemoteControl,
    peripheralSensing,
    peripheralDigitizerTablet,
    peripheralCardReader,
    peripheralDigitalPen,
    peripheralHandheldScanner,
    peripheralHandheldGesture,
    wearableWristwatch,
    wearablePager,
    wearableJacket,
    wearableHelmet,
    wearableGlasses,
    toyRobot,
    toyVehicle,
    toyDoll,
    toyController,
    toyGame,
    healthBloodPressureMonitor,
    healthThermometer,
    healthWeighingScale,
    healthGlucoseMeter,
    healthPulseOximeter,
    healthHeartRateMonitor,
    healthHealthDataDisplay,
    healthStepCounter,
    healthBodyCompositionAnalyzer,
    healthPeakFlowMonitor,
    healthMedicationMonitor,
    healthKneeProsthesis,
    healthAnkleProsthesis,
    healthGenericHealthManager,
    healthPersonalMobilityDevice,
  }

  export enum BluetoothServiceCapabilities {
    none,
    limitedDiscoverableMode,
    positioningService,
    networkingService,
    renderingService,
    capturingService,
    objectTransferService,
    audioService,
    telephoneService,
    informationService,
  }

  export enum BluetoothConnectionStatus {
    disconnected,
    connected,
  }

  export enum BluetoothError {
    success,
    radioNotAvailable,
    resourceInUse,
    deviceNotConnected,
    otherError,
    disabledByPolicy,
    notSupported,
    disabledByUser,
    consentRequired,
    transportNotSupported,
  }

  export enum BluetoothAddressType {
    public,
    random,
    unspecified,
  }

  export class BluetoothAdapter {
    bluetoothAddress: number;
    deviceId: string;
    isAdvertisementOffloadSupported: boolean;
    isCentralRoleSupported: boolean;
    isClassicSupported: boolean;
    isLowEnergySupported: boolean;
    isPeripheralRoleSupported: boolean;
    areClassicSecureConnectionsSupported: boolean;
    areLowEnergySecureConnectionsSupported: boolean;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: BluetoothAdapter) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: BluetoothAdapter) => void): void ;


    static getDeviceSelector(): string;


    getRadioAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class BluetoothDeviceId {
    id: string;
    isClassicDevice: boolean;
    isLowEnergyDevice: boolean;
    constructor();

    static fromId(deviceId: string): BluetoothDeviceId;


  }

  export class BluetoothUuidHelper {
    constructor();

    static fromShortId(shortId: number): string;


    static tryGetShortId(uuid: string): number;


  }

  export class BluetoothDevice {
    bluetoothAddress: number;
    classOfDevice: BluetoothClassOfDevice;
    connectionStatus: BluetoothConnectionStatus;
    deviceId: string;
    hostName: Object;
    name: string;
    rfcommServices: Object;
    sdpRecords: Object;
    deviceInformation: Object;
    deviceAccessInformation: Object;
    bluetoothDeviceId: BluetoothDeviceId;
    wasSecureConnectionUsedForPairing: boolean;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: BluetoothDevice) => void): void ;


    static fromHostNameAsync(hostName: Object, callback: (error: Error, result: BluetoothDevice) => void): void ;


    static fromBluetoothAddressAsync(address: number, callback: (error: Error, result: BluetoothDevice) => void): void ;


    static getDeviceSelectorFromPairingState(pairingState: boolean): string;


    static getDeviceSelectorFromConnectionStatus(connectionStatus: BluetoothConnectionStatus): string;


    static getDeviceSelectorFromDeviceName(deviceName: string): string;


    static getDeviceSelectorFromBluetoothAddress(bluetoothAddress: number): string;


    static getDeviceSelectorFromClassOfDevice(classOfDevice: BluetoothClassOfDevice): string;


    static getDeviceSelector(): string;


    requestAccessAsync(callback: (error: Error, result: number) => void): void ;

    getRfcommServicesAsync(callback: (error: Error, result: Object) => void): void ;
    getRfcommServicesAsync(cacheMode: BluetoothCacheMode, callback: (error: Error, result: Object) => void): void ;

    getRfcommServicesForIdAsync(serviceId: Object, callback: (error: Error, result: Object) => void): void ;
    getRfcommServicesForIdAsync(serviceId: Object, cacheMode: BluetoothCacheMode, callback: (error: Error, result: Object) => void): void ;

    close(): void;
    addListener(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "NameChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NameChanged", listener: (ev: Event) => void): void ;
    on(type: "NameChanged", listener: (ev: Event) => void): void ;
    off(type: "NameChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SdpRecordsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SdpRecordsChanged", listener: (ev: Event) => void): void ;
    on(type: "SdpRecordsChanged", listener: (ev: Event) => void): void ;
    off(type: "SdpRecordsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BluetoothClassOfDevice {
    majorClass: BluetoothMajorClass;
    minorClass: BluetoothMinorClass;
    rawValue: number;
    serviceCapabilities: BluetoothServiceCapabilities;
    constructor();

    static fromRawValue(rawValue: number): BluetoothClassOfDevice;


    static fromParts(majorClass: BluetoothMajorClass, minorClass: BluetoothMinorClass, serviceCapabilities: BluetoothServiceCapabilities): BluetoothClassOfDevice;


  }

  export class BluetoothLEAppearanceCategories {
    static barcodeScanner: number;
    static bloodPressure: number;
    static clock: number;
    static computer: number;
    static cycling: number;
    static display: number;
    static eyeGlasses: number;
    static glucoseMeter: number;
    static heartRate: number;
    static humanInterfaceDevice: number;
    static keyring: number;
    static mediaPlayer: number;
    static outdoorSportActivity: number;
    static phone: number;
    static pulseOximeter: number;
    static remoteControl: number;
    static runningWalking: number;
    static tag: number;
    static thermometer: number;
    static uncategorized: number;
    static watch: number;
    static weightScale: number;
    constructor();

  }

  export class BluetoothLEAppearanceSubcategories {
    static barcodeScanner: number;
    static bloodPressureArm: number;
    static bloodPressureWrist: number;
    static cardReader: number;
    static cyclingCadenceSensor: number;
    static cyclingComputer: number;
    static cyclingPowerSensor: number;
    static cyclingSpeedCadenceSensor: number;
    static cyclingSpeedSensor: number;
    static digitalPen: number;
    static digitizerTablet: number;
    static gamepad: number;
    static generic: number;
    static heartRateBelt: number;
    static joystick: number;
    static keyboard: number;
    static locationDisplay: number;
    static locationNavigationDisplay: number;
    static locationNavigationPod: number;
    static locationPod: number;
    static mouse: number;
    static oximeterFingertip: number;
    static oximeterWristWorn: number;
    static runningWalkingInShoe: number;
    static runningWalkingOnHip: number;
    static runningWalkingOnShoe: number;
    static sportsWatch: number;
    static thermometerEar: number;
    constructor();

  }

  export class BluetoothLEAppearance {
    category: number;
    rawValue: number;
    subCategory: number;
    constructor();

    static fromRawValue(rawValue: number): BluetoothLEAppearance;


    static fromParts(appearanceCategory: number, appearanceSubCategory: number): BluetoothLEAppearance;


  }

  export class BluetoothLEDevice {
    bluetoothAddress: number;
    connectionStatus: BluetoothConnectionStatus;
    deviceId: string;
    gattServices: Object;
    name: string;
    appearance: BluetoothLEAppearance;
    bluetoothAddressType: BluetoothAddressType;
    deviceInformation: Object;
    deviceAccessInformation: Object;
    bluetoothDeviceId: BluetoothDeviceId;
    wasSecureConnectionUsedForPairing: boolean;
    constructor();

    static fromBluetoothAddressAsync(bluetoothAddress: number, bluetoothAddressType: BluetoothAddressType, callback: (error: Error, result: BluetoothLEDevice) => void): void ;
    static fromBluetoothAddressAsync(bluetoothAddress: number, callback: (error: Error, result: BluetoothLEDevice) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: BluetoothLEDevice) => void): void ;


    static getDeviceSelectorFromPairingState(pairingState: boolean): string;


    static getDeviceSelectorFromConnectionStatus(connectionStatus: BluetoothConnectionStatus): string;


    static getDeviceSelectorFromDeviceName(deviceName: string): string;


    static getDeviceSelectorFromBluetoothAddress(bluetoothAddress: number): string;
    static getDeviceSelectorFromBluetoothAddress(bluetoothAddress: number, bluetoothAddressType: BluetoothAddressType): string;


    static getDeviceSelectorFromAppearance(appearance: BluetoothLEAppearance): string;


    static getDeviceSelector(): string;


    requestAccessAsync(callback: (error: Error, result: number) => void): void ;

    getGattServicesAsync(callback: (error: Error, result: Object) => void): void ;
    getGattServicesAsync(cacheMode: BluetoothCacheMode, callback: (error: Error, result: Object) => void): void ;

    getGattServicesForUuidAsync(serviceUuid: string, callback: (error: Error, result: Object) => void): void ;
    getGattServicesForUuidAsync(serviceUuid: string, cacheMode: BluetoothCacheMode, callback: (error: Error, result: Object) => void): void ;

    getGattService(serviceUuid: string): Object;

    close(): void;
    addListener(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "GattServicesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "GattServicesChanged", listener: (ev: Event) => void): void ;
    on(type: "GattServicesChanged", listener: (ev: Event) => void): void ;
    off(type: "GattServicesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "NameChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NameChanged", listener: (ev: Event) => void): void ;
    on(type: "NameChanged", listener: (ev: Event) => void): void ;
    off(type: "NameChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BluetoothSignalStrengthFilter {
    samplingInterval: number;
    outOfRangeTimeout: number;
    outOfRangeThresholdInDBm: number;
    inRangeThresholdInDBm: number;
    constructor();

  }

export * as advertisement from "./devices.bluetooth.advertisement.js";
export * as background from "./devices.bluetooth.background.js";
export * as genericattributeprofile from "./devices.bluetooth.genericattributeprofile.js";
export * as rfcomm from "./devices.bluetooth.rfcomm.js";