  export class CommunicationBlockingContract {
    constructor();
  }

  export class CommunicationBlockingAppManager {
    static isCurrentAppActiveBlockingApp: boolean;
    constructor();

    static requestSetAsActiveBlockingAppAsync(callback: (error: Error, result: boolean) => void): void ;


    static showCommunicationBlockingSettingsUI(): void;


  }

  export class CommunicationBlockingAccessManager {
    static isBlockingActive: boolean;
    constructor();

    static isBlockedNumberAsync(number: string, callback: (error: Error, result: boolean) => void): void ;


    static showBlockNumbersUI(phoneNumbers: Object): boolean;


    static showUnblockNumbersUI(phoneNumbers: Object): boolean;


    static showBlockedCallsUI(): void;


    static showBlockedMessagesUI(): void;


  }

