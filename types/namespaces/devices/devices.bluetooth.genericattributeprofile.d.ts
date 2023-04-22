  export enum GattSessionStatus {
    closed,
    active,
  }

  export enum GattCharacteristicProperties {
    none,
    broadcast,
    read,
    writeWithoutResponse,
    write,
    notify,
    indicate,
    authenticatedSignedWrites,
    extendedProperties,
    reliableWrites,
    writableAuxiliaries,
  }

  export enum GattClientCharacteristicConfigurationDescriptorValue {
    none,
    notify,
    indicate,
  }

  export enum GattProtectionLevel {
    plain,
    authenticationRequired,
    encryptionRequired,
    encryptionAndAuthenticationRequired,
  }

  export enum GattWriteOption {
    writeWithResponse,
    writeWithoutResponse,
  }

  export enum GattCommunicationStatus {
    success,
    unreachable,
    protocolError,
    accessDenied,
  }

  export enum GattSharingMode {
    unspecified,
    exclusive,
    sharedReadOnly,
    sharedReadAndWrite,
  }

  export enum GattOpenStatus {
    unspecified,
    success,
    alreadyOpened,
    notFound,
    sharingViolation,
    accessDenied,
  }

  export enum GattRequestState {
    pending,
    completed,
    canceled,
  }

  export enum GattServiceProviderAdvertisementStatus {
    created,
    stopped,
    started,
    aborted,
  }

  export class GattDeviceService {
    attributeHandle: number;
    deviceId: string;
    uuid: string;
    device: Object;
    parentServices: Object;
    deviceAccessInformation: Object;
    session: GattSession;
    sharingMode: GattSharingMode;
    constructor();

    static fromIdAsync(deviceId: string, sharingMode: GattSharingMode, callback: (error: Error, result: GattDeviceService) => void): void ;
    static fromIdAsync(deviceId: string, callback: (error: Error, result: GattDeviceService) => void): void ;


    static getDeviceSelectorForBluetoothDeviceId(bluetoothDeviceId: Object): string;
    static getDeviceSelectorForBluetoothDeviceId(bluetoothDeviceId: Object, cacheMode: number): string;


    static getDeviceSelectorForBluetoothDeviceIdAndUuid(bluetoothDeviceId: Object, serviceUuid: string): string;
    static getDeviceSelectorForBluetoothDeviceIdAndUuid(bluetoothDeviceId: Object, serviceUuid: string, cacheMode: number): string;


    static getDeviceSelectorFromUuid(serviceUuid: string): string;


    static getDeviceSelectorFromShortId(serviceShortId: number): string;


    static convertShortIdToUuid(shortId: number): string;


    requestAccessAsync(callback: (error: Error, result: number) => void): void ;

    openAsync(sharingMode: GattSharingMode, callback: (error: Error, result: GattOpenStatus) => void): void ;

    getCharacteristicsAsync(callback: (error: Error, result: GattCharacteristicsResult) => void): void ;
    getCharacteristicsAsync(cacheMode: number, callback: (error: Error, result: GattCharacteristicsResult) => void): void ;

    getCharacteristicsForUuidAsync(characteristicUuid: string, callback: (error: Error, result: GattCharacteristicsResult) => void): void ;
    getCharacteristicsForUuidAsync(characteristicUuid: string, cacheMode: number, callback: (error: Error, result: GattCharacteristicsResult) => void): void ;

    getIncludedServicesAsync(callback: (error: Error, result: GattDeviceServicesResult) => void): void ;
    getIncludedServicesAsync(cacheMode: number, callback: (error: Error, result: GattDeviceServicesResult) => void): void ;

    getIncludedServicesForUuidAsync(serviceUuid: string, callback: (error: Error, result: GattDeviceServicesResult) => void): void ;
    getIncludedServicesForUuidAsync(serviceUuid: string, cacheMode: number, callback: (error: Error, result: GattDeviceServicesResult) => void): void ;

    getCharacteristics(characteristicUuid: string): Object;

    getIncludedServices(serviceUuid: string): Object;

    close(): void;
    getAllCharacteristics(): Object;

    getAllIncludedServices(): Object;

  }

  export class GattDeviceServicesResult {
    protocolError: number;
    services: Object;
    status: GattCommunicationStatus;
    constructor();

  }

  export class GattProtocolError {
    static attributeNotFound: number;
    static attributeNotLong: number;
    static insufficientAuthentication: number;
    static insufficientAuthorization: number;
    static insufficientEncryption: number;
    static insufficientEncryptionKeySize: number;
    static insufficientResources: number;
    static invalidAttributeValueLength: number;
    static invalidHandle: number;
    static invalidOffset: number;
    static invalidPdu: number;
    static prepareQueueFull: number;
    static readNotPermitted: number;
    static requestNotSupported: number;
    static unlikelyError: number;
    static unsupportedGroupType: number;
    static writeNotPermitted: number;
    constructor();

  }

  export class GattSession {
    maintainConnection: boolean;
    canMaintainConnection: boolean;
    deviceId: Object;
    maxPduSize: number;
    sessionStatus: GattSessionStatus;
    constructor();

    static fromDeviceIdAsync(deviceId: Object, callback: (error: Error, result: GattSession) => void): void ;


    close(): void;
    addListener(type: "MaxPduSizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MaxPduSizeChanged", listener: (ev: Event) => void): void ;
    on(type: "MaxPduSizeChanged", listener: (ev: Event) => void): void ;
    off(type: "MaxPduSizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GattSessionStatusChangedEventArgs {
    error: number;
    status: GattSessionStatus;
    constructor();

  }

  export class GattCharacteristic {
    protectionLevel: GattProtectionLevel;
    attributeHandle: number;
    characteristicProperties: GattCharacteristicProperties;
    presentationFormats: Object;
    userDescription: string;
    uuid: string;
    service: GattDeviceService;
    constructor();

    static convertShortIdToUuid(shortId: number): string;


    readValueAsync(callback: (error: Error, result: GattReadResult) => void): void ;
    readValueAsync(cacheMode: number, callback: (error: Error, result: GattReadResult) => void): void ;

    writeValueAsync(value: Object, callback: (error: Error, result: GattCommunicationStatus) => void): void ;
    writeValueAsync(value: Object, writeOption: GattWriteOption, callback: (error: Error, result: GattCommunicationStatus) => void): void ;

    readClientCharacteristicConfigurationDescriptorAsync(callback: (error: Error, result: GattReadClientCharacteristicConfigurationDescriptorResult) => void): void ;

    writeClientCharacteristicConfigurationDescriptorAsync(clientCharacteristicConfigurationDescriptorValue: GattClientCharacteristicConfigurationDescriptorValue, callback: (error: Error, result: GattCommunicationStatus) => void): void ;

    getDescriptorsAsync(callback: (error: Error, result: GattDescriptorsResult) => void): void ;
    getDescriptorsAsync(cacheMode: number, callback: (error: Error, result: GattDescriptorsResult) => void): void ;

    getDescriptorsForUuidAsync(descriptorUuid: string, callback: (error: Error, result: GattDescriptorsResult) => void): void ;
    getDescriptorsForUuidAsync(descriptorUuid: string, cacheMode: number, callback: (error: Error, result: GattDescriptorsResult) => void): void ;

    writeValueWithResultAsync(value: Object, callback: (error: Error, result: GattWriteResult) => void): void ;
    writeValueWithResultAsync(value: Object, writeOption: GattWriteOption, callback: (error: Error, result: GattWriteResult) => void): void ;

    writeClientCharacteristicConfigurationDescriptorWithResultAsync(clientCharacteristicConfigurationDescriptorValue: GattClientCharacteristicConfigurationDescriptorValue, callback: (error: Error, result: GattWriteResult) => void): void ;

    getDescriptors(descriptorUuid: string): Object;

    getAllDescriptors(): Object;

    addListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    on(type: "ValueChanged", listener: (ev: Event) => void): void ;
    off(type: "ValueChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GattCharacteristicsResult {
    characteristics: Object;
    protocolError: number;
    status: GattCommunicationStatus;
    constructor();

  }

  export class GattDescriptor {
    protectionLevel: GattProtectionLevel;
    attributeHandle: number;
    uuid: string;
    constructor();

    static convertShortIdToUuid(shortId: number): string;


    readValueAsync(callback: (error: Error, result: GattReadResult) => void): void ;
    readValueAsync(cacheMode: number, callback: (error: Error, result: GattReadResult) => void): void ;

    writeValueAsync(value: Object, callback: (error: Error, result: GattCommunicationStatus) => void): void ;

    writeValueWithResultAsync(value: Object, callback: (error: Error, result: GattWriteResult) => void): void ;

  }

  export class GattPresentationFormat {
    static bluetoothSigAssignedNumbers: number;
    description: number;
    exponent: number;
    formatType: number;
    namespace: number;
    unit: number;
    constructor();

    static fromParts(formatType: number, exponent: number, unit: number, namespaceId: number, description: number): GattPresentationFormat;


  }

  export class GattReadResult {
    status: GattCommunicationStatus;
    value: Object;
    protocolError: number;
    constructor();

  }

  export class GattReadClientCharacteristicConfigurationDescriptorResult {
    clientCharacteristicConfigurationDescriptor: GattClientCharacteristicConfigurationDescriptorValue;
    status: GattCommunicationStatus;
    protocolError: number;
    constructor();

  }

  export class GattValueChangedEventArgs {
    characteristicValue: Object;
    timestamp: Date;
    constructor();

  }

  export class GattDescriptorsResult {
    descriptors: Object;
    protocolError: number;
    status: GattCommunicationStatus;
    constructor();

  }

  export class GattWriteResult {
    protocolError: number;
    status: GattCommunicationStatus;
    constructor();

  }

  export class GattPresentationFormatTypes {
    static bit2: number;
    static boolean: number;
    static dUInt16: number;
    static float: number;
    static float32: number;
    static float64: number;
    static nibble: number;
    static sFloat: number;
    static sInt12: number;
    static sInt128: number;
    static sInt16: number;
    static sInt24: number;
    static sInt32: number;
    static sInt48: number;
    static sInt64: number;
    static sInt8: number;
    static struct: number;
    static uInt12: number;
    static uInt128: number;
    static uInt16: number;
    static uInt24: number;
    static uInt32: number;
    static uInt48: number;
    static uInt64: number;
    static uInt8: number;
    static utf16: number;
    static utf8: number;
    constructor();

  }

  export class GattServiceUuids {
    static cyclingSpeedAndCadence: string;
    static battery: string;
    static bloodPressure: string;
    static genericAccess: string;
    static genericAttribute: string;
    static glucose: string;
    static healthThermometer: string;
    static heartRate: string;
    static runningSpeedAndCadence: string;
    static nextDstChange: string;
    static alertNotification: string;
    static currentTime: string;
    static cyclingPower: string;
    static deviceInformation: string;
    static humanInterfaceDevice: string;
    static immediateAlert: string;
    static linkLoss: string;
    static locationAndNavigation: string;
    static phoneAlertStatus: string;
    static referenceTimeUpdate: string;
    static scanParameters: string;
    static txPower: string;
    constructor();

  }

  export class GattCharacteristicUuids {
    static batteryLevel: string;
    static bloodPressureFeature: string;
    static bloodPressureMeasurement: string;
    static bodySensorLocation: string;
    static cscFeature: string;
    static cscMeasurement: string;
    static glucoseFeature: string;
    static glucoseMeasurement: string;
    static glucoseMeasurementContext: string;
    static heartRateControlPoint: string;
    static heartRateMeasurement: string;
    static intermediateCuffPressure: string;
    static intermediateTemperature: string;
    static measurementInterval: string;
    static recordAccessControlPoint: string;
    static rscFeature: string;
    static rscMeasurement: string;
    static sCControlPoint: string;
    static sensorLocation: string;
    static temperatureMeasurement: string;
    static temperatureType: string;
    static lnFeature: string;
    static alertCategoryId: string;
    static alertCategoryIdBitMask: string;
    static alertLevel: string;
    static alertNotificationControlPoint: string;
    static alertStatus: string;
    static bootKeyboardInputReport: string;
    static bootKeyboardOutputReport: string;
    static bootMouseInputReport: string;
    static currentTime: string;
    static cyclingPowerControlPoint: string;
    static cyclingPowerFeature: string;
    static cyclingPowerMeasurement: string;
    static cyclingPowerVector: string;
    static dateTime: string;
    static dayDateTime: string;
    static dayOfWeek: string;
    static dstOffset: string;
    static exactTime256: string;
    static firmwareRevisionString: string;
    static gapAppearance: string;
    static gapDeviceName: string;
    static gapPeripheralPreferredConnectionParameters: string;
    static gapPeripheralPrivacyFlag: string;
    static gapReconnectionAddress: string;
    static gattServiceChanged: string;
    static hardwareRevisionString: string;
    static hidControlPoint: string;
    static hidInformation: string;
    static ieee1107320601RegulatoryCertificationDataList: string;
    static lnControlPoint: string;
    static localTimeInformation: string;
    static locationAndSpeed: string;
    static manufacturerNameString: string;
    static modelNumberString: string;
    static navigation: string;
    static newAlert: string;
    static pnpId: string;
    static positionQuality: string;
    static protocolMode: string;
    static referenceTimeInformation: string;
    static report: string;
    static reportMap: string;
    static ringerControlPoint: string;
    static ringerSetting: string;
    static scanIntervalWindow: string;
    static scanRefresh: string;
    static serialNumberString: string;
    static softwareRevisionString: string;
    static supportUnreadAlertCategory: string;
    static supportedNewAlertCategory: string;
    static systemId: string;
    static timeAccuracy: string;
    static timeSource: string;
    static timeUpdateControlPoint: string;
    static timeUpdateState: string;
    static timeWithDst: string;
    static timeZone: string;
    static txPowerLevel: string;
    static unreadAlertStatus: string;
    constructor();

  }

  export class GattDescriptorUuids {
    static characteristicAggregateFormat: string;
    static characteristicExtendedProperties: string;
    static characteristicPresentationFormat: string;
    static characteristicUserDescription: string;
    static clientCharacteristicConfiguration: string;
    static serverCharacteristicConfiguration: string;
    constructor();

  }

  export class GattReliableWriteTransaction {
    constructor();

    commitAsync(callback: (error: Error, result: GattCommunicationStatus) => void): void ;

    commitWithResultAsync(callback: (error: Error, result: GattWriteResult) => void): void ;

    writeValue(characteristic: GattCharacteristic, value: Object): void;

  }

  export class GattServiceProviderAdvertisingParameters {
    isDiscoverable: boolean;
    isConnectable: boolean;
    constructor();

  }

  export class GattLocalCharacteristicParameters {
    writeProtectionLevel: GattProtectionLevel;
    userDescription: string;
    staticValue: Object;
    readProtectionLevel: GattProtectionLevel;
    characteristicProperties: GattCharacteristicProperties;
    presentationFormats: Object;
    constructor();

  }

  export class GattLocalDescriptorParameters {
    writeProtectionLevel: GattProtectionLevel;
    staticValue: Object;
    readProtectionLevel: GattProtectionLevel;
    constructor();

  }

  export class GattServiceProviderResult {
    error: number;
    serviceProvider: GattServiceProvider;
    constructor();

  }

  export class GattLocalService {
    characteristics: Object;
    uuid: string;
    constructor();

    createCharacteristicAsync(characteristicUuid: string, parameters: GattLocalCharacteristicParameters, callback: (error: Error, result: GattLocalCharacteristicResult) => void): void ;

  }

  export class GattServiceProvider {
    advertisementStatus: GattServiceProviderAdvertisementStatus;
    service: GattLocalService;
    constructor();

    static createAsync(serviceUuid: string, callback: (error: Error, result: GattServiceProviderResult) => void): void ;


    startAdvertising(): void;
    startAdvertising(parameters: GattServiceProviderAdvertisingParameters): void;

    stopAdvertising(): void;

    addListener(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GattServiceProviderAdvertisementStatusChangedEventArgs {
    error: number;
    status: GattServiceProviderAdvertisementStatus;
    constructor();

  }

  export class GattLocalCharacteristicResult {
    characteristic: GattLocalCharacteristic;
    error: number;
    constructor();

  }

  export class GattLocalCharacteristic {
    characteristicProperties: GattCharacteristicProperties;
    descriptors: Object;
    presentationFormats: Object;
    readProtectionLevel: GattProtectionLevel;
    staticValue: Object;
    subscribedClients: Object;
    userDescription: string;
    uuid: string;
    writeProtectionLevel: GattProtectionLevel;
    constructor();

    createDescriptorAsync(descriptorUuid: string, parameters: GattLocalDescriptorParameters, callback: (error: Error, result: GattLocalDescriptorResult) => void): void ;

    notifyValueAsync(value: Object, callback: (error: Error, result: Object) => void): void ;
    notifyValueAsync(value: Object, subscribedClient: GattSubscribedClient, callback: (error: Error, result: GattClientNotificationResult) => void): void ;

    addListener(type: "ReadRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadRequested", listener: (ev: Event) => void): void ;
    on(type: "ReadRequested", listener: (ev: Event) => void): void ;
    off(type: "ReadRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SubscribedClientsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SubscribedClientsChanged", listener: (ev: Event) => void): void ;
    on(type: "SubscribedClientsChanged", listener: (ev: Event) => void): void ;
    off(type: "SubscribedClientsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "WriteRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "WriteRequested", listener: (ev: Event) => void): void ;
    on(type: "WriteRequested", listener: (ev: Event) => void): void ;
    off(type: "WriteRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GattLocalDescriptorResult {
    descriptor: GattLocalDescriptor;
    error: number;
    constructor();

  }

  export class GattLocalDescriptor {
    readProtectionLevel: GattProtectionLevel;
    staticValue: Object;
    uuid: string;
    writeProtectionLevel: GattProtectionLevel;
    constructor();

    addListener(type: "ReadRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadRequested", listener: (ev: Event) => void): void ;
    on(type: "ReadRequested", listener: (ev: Event) => void): void ;
    off(type: "ReadRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "WriteRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "WriteRequested", listener: (ev: Event) => void): void ;
    on(type: "WriteRequested", listener: (ev: Event) => void): void ;
    off(type: "WriteRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GattSubscribedClient {
    maxNotificationSize: number;
    session: GattSession;
    constructor();

    addListener(type: "MaxNotificationSizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MaxNotificationSizeChanged", listener: (ev: Event) => void): void ;
    on(type: "MaxNotificationSizeChanged", listener: (ev: Event) => void): void ;
    off(type: "MaxNotificationSizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GattReadRequestedEventArgs {
    session: GattSession;
    constructor();

    getRequestAsync(callback: (error: Error, result: GattReadRequest) => void): void ;

    getDeferral(): Object;

  }

  export class GattWriteRequestedEventArgs {
    session: GattSession;
    constructor();

    getRequestAsync(callback: (error: Error, result: GattWriteRequest) => void): void ;

    getDeferral(): Object;

  }

  export class GattClientNotificationResult {
    protocolError: number;
    status: GattCommunicationStatus;
    subscribedClient: GattSubscribedClient;
    bytesSent: number;
    constructor();

  }

  export class GattReadRequest {
    length: number;
    offset: number;
    state: GattRequestState;
    constructor();

    respondWithValue(value: Object): void;

    respondWithProtocolError(protocolError: number): void;

    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GattRequestStateChangedEventArgs {
    error: number;
    state: GattRequestState;
    constructor();

  }

  export class GattWriteRequest {
    offset: number;
    option: GattWriteOption;
    state: GattRequestState;
    value: Object;
    constructor();

    respond(): void;

    respondWithProtocolError(protocolError: number): void;

    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

