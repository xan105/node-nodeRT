  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum MessageDialogOptions {
    none,
    acceptUserInputAfterDelay,
  }

  export enum Placement {
    default,
    above,
    below,
    left,
    right,
  }

  export class MessageDialog {
    title: String;
    options: MessageDialogOptions;
    defaultCommandIndex: Number;
    content: String;
    cancelCommandIndex: Number;
    commands: Object;
    constructor();
    constructor(content: String);
    constructor(content: String, title: String);

    showAsync(callback: (error: Error, result: IUICommand) => void): void ;

  }

  export class IUICommand {
    id: Object;
    invoked: Object;
    label: String;
    constructor();

  }

  export class UICommand {
    label: String;
    invoked: Object;
    id: Object;
    constructor();
    constructor(label: String);
    constructor(label: String, action: Object);
    constructor(label: String, action: Object, commandId: Object);

  }

  export class UICommandSeparator {
    label: String;
    invoked: Object;
    id: Object;
    constructor();

  }

  export class PopupMenu {
    commands: Object;
    constructor();

    showAsync(invocationPoint: Object, callback: (error: Error, result: IUICommand) => void): void ;

    showForSelectionAsync(selection: Object, callback: (error: Error, result: IUICommand) => void): void ;
    showForSelectionAsync(selection: Object, preferredPlacement: Placement, callback: (error: Error, result: IUICommand) => void): void ;

  }

