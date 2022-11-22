  export class PreviewInkWorkspaceContract {
    constructor();
  }

  export class InkWorkspaceHostedAppManager {
    constructor();

    static getForCurrentApp(): InkWorkspaceHostedAppManager;


    setThumbnailAsync(bitmap: Object, callback: (error: Error) => void): void ;

  }

