  export class UIAutomationContract {
    constructor();
  }

  export class AutomationConnection {
    appUserModelId: String;
    executableFileName: String;
    isRemoteSystem: Boolean;
    constructor();

  }

  export class AutomationConnectionBoundObject {
    connection: AutomationConnection;
    constructor();

  }

  export class AutomationElement {
    appUserModelId: String;
    executableFileName: String;
    isRemoteSystem: Boolean;
    constructor();

  }

  export class AutomationTextRange {
    constructor();

  }

export const AutomationConnection: any;
export const AutomationConnectionBoundObject: any;
export const AutomationElement: any;
export const AutomationTextRange: any;
export * as core from "./ui.uiautomation.core.js";
