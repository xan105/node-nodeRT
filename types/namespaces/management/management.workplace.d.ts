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


    static isBrowserAllowed(): Boolean;


    static isCameraAllowed(): Boolean;


    static isMicrosoftAccountAllowed(): Boolean;


    static isStoreAllowed(): Boolean;


  }

  export class WorkplaceSettings {
    static isMicrosoftAccountOptional: Boolean;
    constructor();

  }

