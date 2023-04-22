  export class CustomXamlResourceLoader {
    static current: CustomXamlResourceLoader;
    constructor();

    getResource(resourceId: string, objectType: string, propertyName: string, propertyType: string): Object;

  }

