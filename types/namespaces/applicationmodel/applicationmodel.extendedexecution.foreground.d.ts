  export enum ExtendedExecutionForegroundResult {
    allowed,
    denied,
  }

  export enum ExtendedExecutionForegroundRevokedReason {
    resumed,
    systemPolicy,
  }

  export enum ExtendedExecutionForegroundReason {
    unspecified,
    savingData,
    backgroundAudio,
    unconstrained,
  }

  export class ExtendedExecutionForegroundRevokedEventArgs {
    reason: ExtendedExecutionForegroundRevokedReason;
    constructor();

  }

  export class ExtendedExecutionForegroundSession {
    reason: ExtendedExecutionForegroundReason;
    description: string;
    constructor();

    requestExtensionAsync(callback: (error: Error, result: ExtendedExecutionForegroundResult) => void): void ;

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

