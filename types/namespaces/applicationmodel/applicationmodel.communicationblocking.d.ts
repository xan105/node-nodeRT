  export class CommunicationBlockingContract {
    constructor();
  }

  export class CommunicationBlockingAccessManager {
    static isBlockingActive: Boolean;
    constructor();

    static isBlockedNumberAsync(number: String, callback: (error: Error, result: Boolean) => void): void ;


    static showBlockNumbersUI(phoneNumbers: Object): Boolean;


    static showUnblockNumbersUI(phoneNumbers: Object): Boolean;


    static showBlockedCallsUI(): void;


    static showBlockedMessagesUI(): void;


  }

  export class CommunicationBlockingAppManager {
    static isCurrentAppActiveBlockingApp: Boolean;
    constructor();

    static requestSetAsActiveBlockingAppAsync(callback: (error: Error, result: Boolean) => void): void ;


    static showCommunicationBlockingSettingsUI(): void;


  }

