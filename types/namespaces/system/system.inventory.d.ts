  export class InstalledDesktopApp {
    displayName: string;
    displayVersion: string;
    id: string;
    publisher: string;
    constructor();

    static getInventoryAsync(callback: (error: Error, result: Object) => void): void ;


    toString(): string;

  }

