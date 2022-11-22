  export class PreviewBuildsState {
    properties: Object;
    constructor();

  }

  export class PreviewBuildsManager {
    arePreviewBuildsAllowed: Boolean;
    constructor();

    static getDefault(): PreviewBuildsManager;


    static isSupported(): Boolean;


    syncAsync(callback: (error: Error, result: Boolean) => void): void ;

    getCurrentState(): PreviewBuildsState;

  }

