  export enum CompositionDebugOverdrawContentKinds {
    none,
    offscreenRendered,
    colors,
    effects,
    shadows,
    lights,
    surfaces,
    swapChains,
    all,
  }

  export class CompositionDebugHeatMaps {
    constructor();

    hide(subtree: Object): void;

    showMemoryUsage(subtree: Object): void;

    showOverdraw(subtree: Object, contentKinds: CompositionDebugOverdrawContentKinds): void;

    showRedraw(subtree: Object): void;

  }

  export class CompositionDebugSettings {
    heatMaps: CompositionDebugHeatMaps;
    constructor();

    static tryGetSettings(compositor: Object): CompositionDebugSettings;


  }

