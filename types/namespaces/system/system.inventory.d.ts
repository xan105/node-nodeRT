  export class InstalledDesktopApp {
    displayName: String;
    displayVersion: String;
    id: String;
    publisher: String;
    constructor();

    static getInventoryAsync(callback: (error: Error, result: Object) => void): void ;


    toString(): String;

  }

