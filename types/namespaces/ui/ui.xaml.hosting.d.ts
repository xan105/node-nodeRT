  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class HostingContract {
    constructor();
  }

  export enum DesignerAppViewState {
    visible,
    hidden,
  }

  export class ElementCompositionPreview {
    constructor();

    static setImplicitShowAnimation(element: Object, animation: Object): void;


    static setImplicitHideAnimation(element: Object, animation: Object): void;


    static setIsTranslationEnabled(element: Object, value: Boolean): void;


    static getPointerPositionPropertySet(targetElement: Object): Object;


    static getElementVisual(element: Object): Object;


    static getElementChildVisual(element: Object): Object;


    static setElementChildVisual(element: Object, visual: Object): void;


    static getScrollViewerManipulationPropertySet(scrollViewer: Object): Object;


  }

  export class IXamlUIPresenterHost {
    constructor();

    resolveFileResource(path: String): String;

  }

  export class IXamlUIPresenterHost2 {
    constructor();

    getGenericXamlFilePath(): String;

  }

  export class IXamlUIPresenterHost3 {
    constructor();

    resolveDictionaryResource(dictionary: Object, dictionaryKey: Object, suggestedValue: Object): Object;

  }

  export class DesignerAppExitedEventArgs {
    exitCode: Number;
    constructor();

  }

  export class DesignerAppManager {
    appUserModelId: String;
    constructor();
    constructor(appUserModelId: String);

    createNewViewAsync(initialViewState: DesignerAppViewState, initialViewSize: Object, callback: (error: Error, result: DesignerAppView) => void): void ;

    loadObjectIntoAppAsync(dllName: String, classId: String, initializationData: String, callback: (error: Error) => void): void ;

    close(): void;
    addListener(type: "DesignerAppExited", listener: (ev: Event) => void): void ;
    removeListener(type: "DesignerAppExited", listener: (ev: Event) => void): void ;
    on(type: "DesignerAppExited", listener: (ev: Event) => void): void ;
    off(type: "DesignerAppExited", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DesignerAppView {
    appUserModelId: String;
    applicationViewId: Number;
    viewSize: Object;
    viewState: DesignerAppViewState;
    constructor();

    updateViewAsync(viewState: DesignerAppViewState, viewSize: Object, callback: (error: Error) => void): void ;

    close(): void;
  }

  export class XamlUIPresenter {
    static completeTimelinesAutomatically: Boolean;
    themeResourcesXaml: String;
    themeKey: String;
    rootElement: Object;
    constructor();

    static getFlyoutPlacementTargetInfo(placementTarget: Object, preferredPlacement: Number, targetPreferredPlacement: Number, allowFallbacks: Boolean): Object;


    static getFlyoutPlacement(placementTargetBounds: Object, controlSize: Object, minControlSize: Object, containerRect: Object, targetPreferredPlacement: Number, allowFallbacks: Boolean, chosenPlacement: Number): Object;


    static setHost(host: IXamlUIPresenterHost): void;


    static notifyWindowSizeChanged(): void;


    setSize(width: Number, height: Number): void;

    render(): void;

    present(): void;

  }

