  export class RemoteTextConnection {
    isEnabled: Boolean;
    constructor();
    constructor(connectionId: String, pduForwarder: Object);

    registerThread(threadId: Number): void;

    unregisterThread(threadId: Number): void;

    reportDataReceived(pduData: Array<Number>): void;

    close(): void;
  }

