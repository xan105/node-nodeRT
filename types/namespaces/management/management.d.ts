  export enum MdmAlertMark {
    none,
    fatal,
    critical,
    warning,
    informational,
  }

  export enum MdmAlertDataType {
    string,
    base64,
    boolean,
    integer,
  }

  export enum MdmSessionState {
    notStarted,
    starting,
    connecting,
    communicating,
    alertStatusAvailable,
    retrying,
    completed,
  }

  export class MdmAlert {
    type: string;
    target: string;
    source: string;
    mark: MdmAlertMark;
    format: MdmAlertDataType;
    data: string;
    status: number;
    constructor();

  }

  export class MdmSession {
    alerts: Object;
    extendedError: number;
    id: string;
    state: MdmSessionState;
    constructor();

    attachAsync(callback: (error: Error) => void): void ;

    startAsync(callback: (error: Error) => void): void ;
    startAsync(alerts: Object, callback: (error: Error) => void): void ;

    delete(): void;

  }

  export class MdmSessionManager {
    static sessionIds: Object;
    constructor();

    static tryCreateSession(): MdmSession;


    static deleteSessionById(sessionId: string): void;


    static getSessionById(sessionId: string): MdmSession;


  }

export * as core from "./management.core.js";
export * as deployment from "./management.deployment.js";
export * as policies from "./management.policies.js";
export * as update from "./management.update.js";
export * as workplace from "./management.workplace.js";