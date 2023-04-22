  export class AppExtensionCatalog {
    constructor();

    static open(appExtensionName: string): AppExtensionCatalog;


    findAllAsync(callback: (error: Error, result: Object) => void): void ;

    requestRemovePackageAsync(packageFullName: string, callback: (error: Error, result: boolean) => void): void ;

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
    description: string;
    displayName: string;
    id: string;
    package: Object;
    constructor();

    getExtensionPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    getPublicFolderAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class AppExtensionPackageInstalledEventArgs {
    appExtensionName: string;
    extensions: Object;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageUpdatingEventArgs {
    appExtensionName: string;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageUpdatedEventArgs {
    appExtensionName: string;
    extensions: Object;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageUninstallingEventArgs {
    appExtensionName: string;
    package: Object;
    constructor();

  }

  export class AppExtensionPackageStatusChangedEventArgs {
    appExtensionName: string;
    package: Object;
    constructor();

  }

