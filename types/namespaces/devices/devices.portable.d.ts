  export class PortableDeviceContract {
    constructor();
  }

  export enum ServiceDeviceType {
    calendarService,
    contactsService,
    deviceStatusService,
    notesService,
    ringtonesService,
    smsService,
    tasksService,
  }

  export class StorageDevice {
    constructor();

    static fromId(deviceId: string): Object;


    static getDeviceSelector(): string;


  }

  export class ServiceDevice {
    constructor();

    static getDeviceSelector(serviceType: ServiceDeviceType): string;


    static getDeviceSelectorFromServiceId(serviceId: string): string;


  }

