  export class ApplicationsSettingsContract {
    constructor();
  }

  export enum SettingsEdgeLocation {
    right,
    left,
  }

  export enum SupportedWebAccountActions {
    none,
    reconnect,
    remove,
    viewDetails,
    manage,
    more,
  }

  export enum WebAccountAction {
    reconnect,
    remove,
    viewDetails,
    manage,
    more,
  }

  export class AccountsSettingsPane {
    constructor();

    static showManageAccountsForUserAsync(user: Object, callback: (error: Error) => void): void ;


    static showAddAccountForUserAsync(user: Object, callback: (error: Error) => void): void ;


    static showManageAccountsAsync(callback: (error: Error) => void): void ;


    static showAddAccountAsync(callback: (error: Error) => void): void ;


    static getForCurrentView(): AccountsSettingsPane;


    static show(): void;


    addListener(type: "AccountCommandsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccountCommandsRequested", listener: (ev: Event) => void): void ;
    on(type: "AccountCommandsRequested", listener: (ev: Event) => void): void ;
    off(type: "AccountCommandsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AccountsSettingsPaneCommandsRequestedEventArgs {
    headerText: String;
    commands: Object;
    credentialCommands: Object;
    webAccountCommands: Object;
    webAccountProviderCommands: Object;
    user: Object;
    constructor();

    getDeferral(): AccountsSettingsPaneEventDeferral;

  }

  export class AccountsSettingsPaneEventDeferral {
    constructor();

    complete(): void;

  }

  export class CredentialCommand {
    credentialDeleted: Object;
    passwordCredential: Object;
    constructor();
    constructor(passwordCredential: Object);
    constructor(passwordCredential: Object, deleted: Object);

  }

  export class SettingsCommand {
    static accountsCommand: SettingsCommand;
    label: String;
    invoked: Object;
    id: Object;
    constructor();
    constructor(settingsCommandId: Object, label: String, handler: Object);

  }

  export class SettingsPane {
    static edge: SettingsEdgeLocation;
    constructor();

    static getForCurrentView(): SettingsPane;


    static show(): void;


    addListener(type: "CommandsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CommandsRequested", listener: (ev: Event) => void): void ;
    on(type: "CommandsRequested", listener: (ev: Event) => void): void ;
    off(type: "CommandsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SettingsPaneCommandsRequest {
    applicationCommands: Object;
    constructor();

  }

  export class SettingsPaneCommandsRequestedEventArgs {
    request: SettingsPaneCommandsRequest;
    constructor();

  }

  export class WebAccountCommand {
    actions: SupportedWebAccountActions;
    invoked: Object;
    webAccount: Object;
    constructor();
    constructor(webAccount: Object, invoked: Object, actions: SupportedWebAccountActions);

  }

  export class WebAccountInvokedArgs {
    action: WebAccountAction;
    constructor();

  }

  export class WebAccountProviderCommand {
    invoked: Object;
    webAccountProvider: Object;
    constructor();
    constructor(webAccountProvider: Object, invoked: Object);

  }

