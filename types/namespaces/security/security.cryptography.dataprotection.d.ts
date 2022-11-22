  export class DataProtectionProvider {
    constructor();
    constructor(protectionDescriptor: String);

    protectAsync(data: Object, callback: (error: Error, result: Object) => void): void ;

    unprotectAsync(data: Object, callback: (error: Error, result: Object) => void): void ;

    protectStreamAsync(src: Object, dest: Object, callback: (error: Error) => void): void ;

    unprotectStreamAsync(src: Object, dest: Object, callback: (error: Error) => void): void ;

  }

