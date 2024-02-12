  export class ResourceLoader {
    constructor();
    constructor(name: String);

    static getDefaultPriPath(packageFullName: String): String;


    static getForUIContext(context: Object): ResourceLoader;


    static getForCurrentView(): ResourceLoader;
    static getForCurrentView(name: String): ResourceLoader;


    static getForViewIndependentUse(): ResourceLoader;
    static getForViewIndependentUse(name: String): ResourceLoader;


    static getStringForReference(uri: Object): String;


    getString(resource: String): String;

    getStringForUri(uri: Object): String;

  }

export const ResourceLoader: any;
export * as core from "./applicationmodel.resources.core.js";
export * as management from "./applicationmodel.resources.management.js";
