  export enum BatteryStatus {
    notPresent,
    discharging,
    idle,
    charging,
  }

  export enum EnergySaverStatus {
    disabled,
    off,
    on,
  }

  export enum PowerSupplyStatus {
    notPresent,
    inadequate,
    adequate,
  }

  export class PowerManager {
    static batteryStatus: BatteryStatus;
    static energySaverStatus: EnergySaverStatus;
    static powerSupplyStatus: PowerSupplyStatus;
    static remainingChargePercent: Number;
    static remainingDischargeTime: Number;
    constructor();

    addListener(type: "BatteryStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BatteryStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "BatteryStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "BatteryStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnergySaverStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "EnergySaverStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "EnergySaverStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "EnergySaverStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PowerSupplyStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PowerSupplyStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "PowerSupplyStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "PowerSupplyStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    on(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    off(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RemainingDischargeTimeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RemainingDischargeTimeChanged", listener: (ev: Event) => void): void ;
    on(type: "RemainingDischargeTimeChanged", listener: (ev: Event) => void): void ;
    off(type: "RemainingDischargeTimeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BackgroundEnergyManager {
    static excessiveUsageLevel: Number;
    static lowUsageLevel: Number;
    static maxAcceptableUsageLevel: Number;
    static nearMaxAcceptableUsageLevel: Number;
    static nearTerminationUsageLevel: Number;
    static recentEnergyUsage: Number;
    static recentEnergyUsageLevel: Number;
    static terminationUsageLevel: Number;
    constructor();

    addListener(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    removeListener(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    on(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    off(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    
    addListener(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    removeListener(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    on(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    off(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ForegroundEnergyManager {
    static excessiveUsageLevel: Number;
    static lowUsageLevel: Number;
    static maxAcceptableUsageLevel: Number;
    static nearMaxAcceptableUsageLevel: Number;
    static recentEnergyUsage: Number;
    static recentEnergyUsageLevel: Number;
    constructor();

    addListener(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    removeListener(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    on(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    off(type: "RecentEnergyUsageIncreased", listener: (ev: Event) => void): void ;
    
    addListener(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    removeListener(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    on(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    off(type: "RecentEnergyUsageReturnedToLow", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export * as diagnostics from "./system.power.diagnostics.js";