  export enum WorkItemPriority {
    low,
    normal,
    high,
  }

  export enum WorkItemOptions {
    none,
    timeSliced,
  }

  export class ThreadPoolTimer {
    delay: number;
    period: number;
    constructor();

    static createPeriodicTimer(handler: Object, period: number): ThreadPoolTimer;
    static createPeriodicTimer(handler: Object, period: number, destroyed: Object): ThreadPoolTimer;


    static createTimer(handler: Object, delay: number): ThreadPoolTimer;
    static createTimer(handler: Object, delay: number, destroyed: Object): ThreadPoolTimer;


    cancel(): void;

  }

  export class ThreadPool {
    constructor();

    static runAsync(handler: Object, callback: (error: Error) => void): void ;
    static runAsync(handler: Object, priority: WorkItemPriority, callback: (error: Error) => void): void ;
    static runAsync(handler: Object, priority: WorkItemPriority, options: WorkItemOptions, callback: (error: Error) => void): void ;


  }

export * as core from "./system.threading.core.js";