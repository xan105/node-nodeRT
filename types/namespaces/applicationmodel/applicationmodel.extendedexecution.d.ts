  export enum ExtendedExecutionReason {
    unspecified,
    locationTracking,
    savingData,
  }

  export enum ExtendedExecutionResult {
    allowed,
    denied,
  }

  export enum ExtendedExecutionRevokedReason {
    resumed,
    systemPolicy,
  }

  export class ExtendedExecutionRevokedEventArgs {
    reason: ExtendedExecutionRevokedReason;
    constructor();

  }

  export class ExtendedExecutionSession {
    reason: ExtendedExecutionReason;
    percentProgress: Number;
    description: String;
    constructor();

    requestExtensionAsync(callback: (error: Error, result: ExtendedExecutionResult) => void): void ;

    close(): void;
    addListener(type: "Revoked", listener: (ev: Event) => void): void ;
    removeListener(type: "Revoked", listener: (ev: Event) => void): void ;
    on(type: "Revoked", listener: (ev: Event) => void): void ;
    off(type: "Revoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export const ExtendedExecutionReason: any;
export const ExtendedExecutionResult: any;
export const ExtendedExecutionRevokedReason: any;
export const ExtendedExecutionRevokedEventArgs: any;
export const ExtendedExecutionSession: any;
export * as foreground from "./applicationmodel.extendedexecution.foreground.js";
