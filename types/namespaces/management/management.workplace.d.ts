  export class WorkplaceSettingsContract {
    constructor();
  }

  export enum MessagingSyncPolicy {
    disallowed,
    allowed,
    required,
  }

  export class MdmPolicy {
    constructor();

    static getMessagingSyncPolicy(): MessagingSyncPolicy;


    static isBrowserAllowed(): boolean;


    static isCameraAllowed(): boolean;


    static isMicrosoftAccountAllowed(): boolean;


    static isStoreAllowed(): boolean;


  }

  export class WorkplaceSettings {
    static isMicrosoftAccountOptional: boolean;
    constructor();

  }

