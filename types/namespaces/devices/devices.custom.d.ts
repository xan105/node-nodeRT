  export class CustomDeviceContract {
    constructor();
  }

  export enum IOControlAccessMode {
    any,
    read,
    write,
    readWrite,
  }

  export enum IOControlBufferingMethod {
    buffered,
    directInput,
    directOutput,
    neither,
  }

  export enum DeviceAccessMode {
    read,
    write,
    readWrite,
  }

  export enum DeviceSharingMode {
    shared,
    exclusive,
  }

  export class KnownDeviceTypes {
    static unknown: Number;
    constructor();

  }

  export class IIOControlCode {
    accessMode: IOControlAccessMode;
    bufferingMethod: IOControlBufferingMethod;
    controlCode: Number;
    deviceType: Number;
    function: Number;
    constructor();

  }

  export class IOControlCode {
    accessMode: IOControlAccessMode;
    bufferingMethod: IOControlBufferingMethod;
    controlCode: Number;
    deviceType: Number;
    function: Number;
    constructor();
    constructor(deviceType: Number, function: Number, accessMode: IOControlAccessMode, bufferingMethod: IOControlBufferingMethod);

  }

  export class CustomDevice {
    inputStream: Object;
    outputStream: Object;
    constructor();

    static fromIdAsync(deviceId: String, desiredAccess: DeviceAccessMode, sharingMode: DeviceSharingMode, callback: (error: Error, result: CustomDevice) => void): void ;


    static getDeviceSelector(classGuid: String): String;


    sendIOControlAsync(ioControlCode: IIOControlCode, inputBuffer: Object, outputBuffer: Object, callback: (error: Error, result: Number) => void): void ;

    trySendIOControlAsync(ioControlCode: IIOControlCode, inputBuffer: Object, outputBuffer: Object, callback: (error: Error, result: Boolean) => void): void ;

  }

