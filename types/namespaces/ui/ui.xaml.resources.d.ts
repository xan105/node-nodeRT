  export class CustomXamlResourceLoader {
    static current: CustomXamlResourceLoader;
    constructor();

    getResource(resourceId: String, objectType: String, propertyName: String, propertyType: String): Object;

  }

