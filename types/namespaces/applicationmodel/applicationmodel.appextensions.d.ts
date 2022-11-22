  export class AppExtensionCatalog {
    constructor();

    static open(appExtensionName: String): AppExtensionCatalog;


    findAllAsync(callback: (error: Error, result: Object) => void): void ;

    requestRemovePackageAsync(packageFullName: String, callback: (error: Error, result: Boolean) => void): void ;

    addListener(type: "PackageInstalled", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageInstalled", listener: (ev: Event) => void): void ;
    on(type: "PackageInstalled", listener: (ev: Event) => void): void ;
    off(type: "PackageInstalled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    on(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    off(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageUpdated", listener: (ev: Event) => void): void ;
    on(type: "PackageUpdated", listener: (ev: Event) => void): void ;
    off(type: "PackageUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    on(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    off(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppExtension {
    appInfo: Object;
    description: String;
    displayName: String;
    id: String;
    package: Object;
    constructor();

    getExtensionPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    getPublicFolderAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class AppExtensionPackageInstalledEventArgs {
    appExtensionName: String;
    extensions: Object;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageUpdatingEventArgs {
    appExtensionName: String;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageUpdatedEventArgs {
    appExtensionName: String;
    extensions: Object;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageUninstallingEventArgs {
    appExtensionName: String;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageStatusChangedEventArgs {
    appExtensionName: String;
    package: Object;
    constructor();

  }

