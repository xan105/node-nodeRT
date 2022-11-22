  export enum BluetoothEventTriggeringMode {
    serial,
    batch,
    keepLatest,
  }

  export class RfcommInboundConnectionInformation {
    serviceCapabilities: Number;
    sdpRecord: Object;
    localServiceId: Object;
    constructor();

  }

  export class RfcommOutboundConnectionInformation {
    remoteServiceId: Object;
    constructor();

  }

  export class RfcommConnectionTriggerDetails {
    incoming: Boolean;
    remoteDevice: Object;
    socket: Object;
    constructor();

  }

  export class GattCharacteristicNotificationTriggerDetails {
    characteristic: Object;
    value: Object;
    error: Number;
    eventTriggeringMode: BluetoothEventTriggeringMode;
    valueChangedEvents: Object;
    constructor();

  }

  export class GattServiceProviderConnection {
    static allServices: Object;
    service: Object;
    triggerId: String;
    constructor();

    start(): void;

  }

  export class GattServiceProviderTriggerDetails {
    connection: GattServiceProviderConnection;
    constructor();

  }

  export class BluetoothLEAdvertisementWatcherTriggerDetails {
    advertisements: Object;
    error: Number;
    signalStrengthFilter: Object;
    constructor();

  }

  export class BluetoothLEAdvertisementPublisherTriggerDetails {
    error: Number;
    status: Number;
    constructor();

  }

