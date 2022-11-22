  export enum NavigationCacheMode {
    disabled,
    required,
    enabled,
  }

  export enum NavigationMode {
    new,
    back,
    forward,
    refresh,
  }

  export class NavigationEventArgs {
    uri: Object;
    content: Object;
    navigationMode: NavigationMode;
    parameter: Object;
    sourcePageType: Object;
    navigationTransitionInfo: Object;
    constructor();

  }

  export class NavigatingCancelEventArgs {
    cancel: Boolean;
    navigationMode: NavigationMode;
    sourcePageType: Object;
    navigationTransitionInfo: Object;
    parameter: Object;
    constructor();

  }

  export class NavigationFailedEventArgs {
    handled: Boolean;
    exception: Number;
    sourcePageType: Object;
    constructor();

  }

  export class PageStackEntry {
    static sourcePageTypeProperty: Object;
    navigationTransitionInfo: Object;
    parameter: Object;
    sourcePageType: Object;
    dispatcher: Object;
    constructor();
    constructor(sourcePageType: Object, parameter: Object, navigationTransitionInfo: Object);

  }

