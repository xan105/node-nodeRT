  export class CompositorController {
    compositor: Object;
    constructor();

    ensurePreviousCommitCompletedAsync(callback: (error: Error) => void): void ;

    commit(): void;

    close(): void;
    addListener(type: "CommitNeeded", listener: (ev: Event) => void): void ;
    removeListener(type: "CommitNeeded", listener: (ev: Event) => void): void ;
    on(type: "CommitNeeded", listener: (ev: Event) => void): void ;
    off(type: "CommitNeeded", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

