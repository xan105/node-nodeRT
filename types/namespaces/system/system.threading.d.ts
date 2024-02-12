  export enum WorkItemOptions {
    none,
    timeSliced,
  }

  export enum WorkItemPriority {
    low,
    normal,
    high,
  }

  export class ThreadPool {
    constructor();

    static runAsync(handler: Object, callback: (error: Error) => void): void ;
    static runAsync(handler: Object, priority: WorkItemPriority, callback: (error: Error) => void): void ;
    static runAsync(handler: Object, priority: WorkItemPriority, options: WorkItemOptions, callback: (error: Error) => void): void ;


  }

  export class ThreadPoolTimer {
    delay: Number;
    period: Number;
    constructor();

    static createPeriodicTimer(handler: Object, period: Number): ThreadPoolTimer;
    static createPeriodicTimer(handler: Object, period: Number, destroyed: Object): ThreadPoolTimer;


    static createTimer(handler: Object, delay: Number): ThreadPoolTimer;
    static createTimer(handler: Object, delay: Number, destroyed: Object): ThreadPoolTimer;


    cancel(): void;

  }

export const WorkItemOptions: any;
export const WorkItemPriority: any;
export const ThreadPool: any;
export const ThreadPoolTimer: any;
export * as core from "./system.threading.core.js";
