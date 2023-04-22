  export enum BluetoothEventTriggeringMode {
    serial,
    batch,
    keepLatest,
  }

  export class RfcommInboundConnectionInformation {
    serviceCapabilities: number;
    sdpRecord: Object;
    localServiceId: Object;
    constructor();

  }

  export class RfcommOutboundConnectionInformation {
    remoteServiceId: Object;
    constructor();

  }

  export class RfcommConnectionTriggerDetails {
    incoming: boolean;
    remoteDevice: Object;
    socket: Object;
    constructor();

  }

  export class GattCharacteristicNotificationTriggerDetails {
    characteristic: Object;
    value: Object;
    error: number;
    eventTriggeringMode: BluetoothEventTriggeringMode;
    valueChangedEvents: Object;
    constructor();

  }

  export class GattServiceProviderConnection {
    static allServices: Object;
    service: Object;
    triggerId: string;
    constructor();

    start(): void;

  }

  export class GattServiceProviderTriggerDetails {
    connection: GattServiceProviderConnection;
    constructor();

  }

  export class BluetoothLEAdvertisementWatcherTriggerDetails {
    advertisements: Object;
    error: number;
    signalStrengthFilter: Object;
    constructor();

  }

  export class BluetoothLEAdvertisementPublisherTriggerDetails {
    error: number;
    status: number;
    constructor();

  }

