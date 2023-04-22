  export class DeploymentPreviewContract {
    constructor();
  }

  export class InstalledClassicAppInfo {
    displayName: string;
    displayVersion: string;
    constructor();

  }

  export class ClassicAppManager {
    constructor();

    static findInstalledApp(appUninstallKey: string): InstalledClassicAppInfo;


  }

