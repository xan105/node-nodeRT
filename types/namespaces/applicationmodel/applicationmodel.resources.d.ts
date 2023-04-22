  export class ResourceLoader {
    constructor();
    constructor(name: string);

    static getForCurrentView(): ResourceLoader;
    static getForCurrentView(name: string): ResourceLoader;


    static getForViewIndependentUse(): ResourceLoader;
    static getForViewIndependentUse(name: string): ResourceLoader;


    static getStringForReference(uri: Object): string;


    getString(resource: string): string;

    getStringForUri(uri: Object): string;

  }

export * as core from "./applicationmodel.resources.core.js";
export * as management from "./applicationmodel.resources.management.js";