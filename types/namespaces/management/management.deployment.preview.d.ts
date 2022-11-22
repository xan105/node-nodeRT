  export class DeploymentPreviewContract {
    constructor();
  }

  export class InstalledClassicAppInfo {
    displayName: String;
    displayVersion: String;
    constructor();

  }

  export class ClassicAppManager {
    constructor();

    static findInstalledApp(appUninstallKey: String): InstalledClassicAppInfo;


  }

