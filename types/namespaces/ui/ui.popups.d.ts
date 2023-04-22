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
    title: string;
    options: MessageDialogOptions;
    defaultCommandIndex: number;
    content: string;
    cancelCommandIndex: number;
    commands: Object;
    constructor();
    constructor(content: string);
    constructor(content: string, title: string);

    showAsync(callback: (error: Error, result: IUICommand) => void): void ;

  }

  export class IUICommand {
    id: Object;
    invoked: Object;
    label: string;
    constructor();

  }

  export class UICommand {
    label: string;
    invoked: Object;
    id: Object;
    constructor();
    constructor(label: string);
    constructor(label: string, action: Object);
    constructor(label: string, action: Object, commandId: Object);

  }

  export class UICommandSeparator {
    label: string;
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

