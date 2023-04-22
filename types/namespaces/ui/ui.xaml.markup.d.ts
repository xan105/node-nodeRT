  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class XamlBinaryWriterErrorInformation {
    inputStreamIndex: number;
    lineNumber: number;
    linePosition: number;
    constructor();
  }

  export class XmlnsDefinition {
    xmlNamespace: string;
    namespace: string;
    constructor();
  }

  export class ContentPropertyAttribute {
    typeId: Object;
    constructor();

  }

  export class MarkupExtensionReturnTypeAttribute {
    typeId: Object;
    constructor();

  }

  export class IComponentConnector {
    constructor();

    connect(connectionId: number, target: Object): void;

  }

  export class IComponentConnector2 {
    constructor();

    getBindingConnector(connectionId: number, target: Object): IComponentConnector;

  }

  export class IDataTemplateComponent {
    constructor();

    recycle(): void;

    processBindings(item: Object, itemIndex: number, phase: number, nextPhase: number): void;

  }

  export class IXamlMember {
    isAttachable: boolean;
    isDependencyProperty: boolean;
    isReadOnly: boolean;
    name: string;
    targetType: IXamlType;
    type: IXamlType;
    constructor();

    getValue(instance: Object): Object;

    setValue(instance: Object, value: Object): void;

  }

  export class IXamlType {
    baseType: IXamlType;
    contentProperty: IXamlMember;
    fullName: string;
    isArray: boolean;
    isBindable: boolean;
    isCollection: boolean;
    isConstructible: boolean;
    isDictionary: boolean;
    isMarkupExtension: boolean;
    itemType: IXamlType;
    keyType: IXamlType;
    underlyingType: Object;
    constructor();

    activateInstance(): Object;

    createFromString(value: string): Object;

    getMember(name: string): IXamlMember;

    addToVector(instance: Object, value: Object): void;

    addToMap(instance: Object, key: Object, value: Object): void;

    runInitializer(): void;

  }

  export class IXamlMetadataProvider {
    constructor();

    getXamlType(type: Object): IXamlType;
    getXamlType(fullName: string): IXamlType;

    getXmlnsDefinitions(): Array<XmlnsDefinition>;

  }

  export class MarkupExtension {
    constructor();

    provideValue(): Object;

  }

  export class XamlBinaryWriter {
    constructor();

    static write(inputStreams: Object, outputStreams: Object, xamlMetadataProvider: IXamlMetadataProvider): XamlBinaryWriterErrorInformation;


  }

  export class XamlBindingHelper {
    static dataTemplateComponentProperty: Object;
    constructor();

    static getDataTemplateComponent(element: Object): IDataTemplateComponent;


    static setDataTemplateComponent(element: Object, value: IDataTemplateComponent): void;


    static suspendRendering(target: Object): void;


    static resumeRendering(target: Object): void;


    static convertValue(type: Object, value: Object): Object;


    static setPropertyFromString(dependencyObject: Object, propertyToSet: Object, value: string): void;


    static setPropertyFromBoolean(dependencyObject: Object, propertyToSet: Object, value: boolean): void;


    static setPropertyFromChar16(dependencyObject: Object, propertyToSet: Object, value: string): void;


    static setPropertyFromDateTime(dependencyObject: Object, propertyToSet: Object, value: Date): void;


    static setPropertyFromDouble(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromInt32(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromUInt32(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromInt64(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromUInt64(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromSingle(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromPoint(dependencyObject: Object, propertyToSet: Object, value: Object): void;


    static setPropertyFromRect(dependencyObject: Object, propertyToSet: Object, value: Object): void;


    static setPropertyFromSize(dependencyObject: Object, propertyToSet: Object, value: Object): void;


    static setPropertyFromTimeSpan(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromByte(dependencyObject: Object, propertyToSet: Object, value: number): void;


    static setPropertyFromUri(dependencyObject: Object, propertyToSet: Object, value: Object): void;


    static setPropertyFromObject(dependencyObject: Object, propertyToSet: Object, value: Object): void;


  }

  export class XamlMarkupHelper {
    constructor();

    static unloadObject(element: Object): void;


  }

  export class XamlReader {
    constructor();

    static load(xaml: string): Object;


    static loadWithInitialTemplateValidation(xaml: string): Object;


  }

