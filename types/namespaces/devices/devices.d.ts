  export class DevicesLowLevelContract {
    constructor();
  }

  export class ILowLevelDevicesAggregateProvider {
    adcControllerProvider: Object;
    gpioControllerProvider: Object;
    i2cControllerProvider: Object;
    pwmControllerProvider: Object;
    spiControllerProvider: Object;
    constructor();

  }

  export class LowLevelDevicesAggregateProvider {
    adcControllerProvider: Object;
    gpioControllerProvider: Object;
    i2cControllerProvider: Object;
    pwmControllerProvider: Object;
    spiControllerProvider: Object;
    constructor();
    constructor(adc: Object, pwm: Object, gpio: Object, i2c: Object, spi: Object);

  }

  export class LowLevelDevicesController {
    static defaultProvider: ILowLevelDevicesAggregateProvider;
    constructor();

  }

export const ILowLevelDevicesAggregateProvider: any;
export const LowLevelDevicesAggregateProvider: any;
export const LowLevelDevicesController: any;
export * as adc from "./devices.adc.js";
export * as alljoyn from "./devices.alljoyn.js";
export * as background from "./devices.background.js";
export * as bluetooth from "./devices.bluetooth.js";
export * as custom from "./devices.custom.js";
export * as display from "./devices.display.js";
export * as enumeration from "./devices.enumeration.js";
export * as geolocation from "./devices.geolocation.js";
export * as gpio from "./devices.gpio.js";
export * as haptics from "./devices.haptics.js";
export * as humaninterfacedevice from "./devices.humaninterfacedevice.js";
export * as i2c from "./devices.i2c.js";
export * as input from "./devices.input.js";
export * as lights from "./devices.lights.js";
export * as midi from "./devices.midi.js";
export * as perception from "./devices.perception.js";
export * as pointofservice from "./devices.pointofservice.js";
export * as portable from "./devices.portable.js";
export * as power from "./devices.power.js";
export * as printers from "./devices.printers.js";
export * as pwm from "./devices.pwm.js";
export * as radios from "./devices.radios.js";
export * as scanners from "./devices.scanners.js";
export * as sensors from "./devices.sensors.js";
export * as serialcommunication from "./devices.serialcommunication.js";
export * as smartcards from "./devices.smartcards.js";
export * as sms from "./devices.sms.js";
export * as spi from "./devices.spi.js";
export * as usb from "./devices.usb.js";
export * as wifi from "./devices.wifi.js";
export * as wifidirect from "./devices.wifidirect.js";
