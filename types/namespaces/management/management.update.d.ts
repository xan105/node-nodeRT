  export class PreviewBuildsState {
    properties: Object;
    constructor();

  }

  export class PreviewBuildsManager {
    arePreviewBuildsAllowed: boolean;
    constructor();

    static getDefault(): PreviewBuildsManager;


    static isSupported(): boolean;


    syncAsync(callback: (error: Error, result: boolean) => void): void ;

    getCurrentState(): PreviewBuildsState;

  }

