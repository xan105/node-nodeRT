  export class PrintersContract {
    constructor();
  }

  export class Print3DDevice {
    printSchema: PrintSchema;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Print3DDevice) => void): void ;


    static getDeviceSelector(): String;


  }

  export class PrintSchema {
    constructor();

    getDefaultPrintTicketAsync(callback: (error: Error, result: Object) => void): void ;

    getCapabilitiesAsync(constrainTicket: Object, callback: (error: Error, result: Object) => void): void ;

    mergeAndValidateWithDefaultPrintTicketAsync(deltaTicket: Object, callback: (error: Error, result: Object) => void): void ;

  }

export const Print3DDevice: any;
export const PrintSchema: any;
export * as extensions from "./devices.printers.extensions.js";
