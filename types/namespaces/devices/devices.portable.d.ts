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

    static fromId(deviceId: String): Object;


    static getDeviceSelector(): String;


  }

  export class ServiceDevice {
    constructor();

    static getDeviceSelector(serviceType: ServiceDeviceType): String;


    static getDeviceSelectorFromServiceId(serviceId: String): String;


  }

