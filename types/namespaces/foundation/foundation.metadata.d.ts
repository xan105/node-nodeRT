  export enum Platform {
    windows,
    windowsPhone,
  }

  export enum FeatureStage {
    alwaysDisabled,
    disabledByDefault,
    enabledByDefault,
    alwaysEnabled,
  }

  export enum CompositionType {
    protected,
    public,
  }

  export enum ThreadingModel {
    sTA,
    mTA,
    both,
    invalidThreading,
  }

  export enum MarshalingType {
    none,
    agile,
    standard,
    invalidMarshaling,
  }

  export enum DeprecationType {
    deprecate,
    remove,
  }

  export class WebHostHiddenAttribute {
    typeId: Object;
    constructor();

  }

  export class AllowForWebAttribute {
    typeId: Object;
    constructor();

  }

  export class VariantAttribute {
    typeId: Object;
    constructor();

  }

  export class HasVariantAttribute {
    typeId: Object;
    constructor();

  }

  export class DualApiPartitionAttribute {
    typeId: Object;
    constructor();

  }

  export class MuseAttribute {
    typeId: Object;
    constructor();

  }

  export class MetadataMarshalAttribute {
    typeId: Object;
    constructor();

  }

  export class ApiInformation {
    constructor();

    static isTypePresent(typeName: string): boolean;


    static isMethodPresent(typeName: string, methodName: string): boolean;
    static isMethodPresent(typeName: string, methodName: string, inputParameterCount: number): boolean;


    static isEventPresent(typeName: string, eventName: string): boolean;


    static isPropertyPresent(typeName: string, propertyName: string): boolean;


    static isReadOnlyPropertyPresent(typeName: string, propertyName: string): boolean;


    static isWriteablePropertyPresent(typeName: string, propertyName: string): boolean;


    static isEnumNamedValuePresent(enumTypeName: string, valueName: string): boolean;


    static isApiContractPresent(contractName: string, majorVersion: number): boolean;
    static isApiContractPresent(contractName: string, majorVersion: number, minorVersion: number): boolean;


  }

  export class ActivatableAttribute {
    typeId: Object;
    constructor();
    constructor(version: number);
    constructor(version: number, type: string);
    constructor(version: number, platform: Platform);
    constructor(type: Object, version: number);
    constructor(type: Object, version: number, contractName: string);
    constructor(type: Object, version: number, platform: Platform);

  }

  export class VersionAttribute {
    typeId: Object;
    constructor();
    constructor(version: number);
    constructor(version: number, platform: Platform);

  }

  export class ContractVersionAttribute {
    typeId: Object;
    constructor();
    constructor(version: number);
    constructor(contract: Object, version: number);
    constructor(contract: string, version: number);

  }

  export class AllowMultipleAttribute {
    typeId: Object;
    constructor();

  }

  export class DefaultOverloadAttribute {
    typeId: Object;
    constructor();

  }

  export class DefaultAttribute {
    typeId: Object;
    constructor();

  }

  export class GuidAttribute {
    typeId: Object;
    constructor();
    constructor(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number);

  }

  export class FeatureAttribute {
    typeId: Object;
    constructor();
    constructor(featureStage: FeatureStage, validInAllBranches: boolean);

  }

  export class ExperimentalAttribute {
    typeId: Object;
    constructor();

  }

  export class ComposableAttribute {
    typeId: Object;
    constructor();
    constructor(type: Object, compositionType: CompositionType, version: number);
    constructor(type: Object, compositionType: CompositionType, version: number, platform: Platform);
    constructor(type: Object, compositionType: CompositionType, version: number, contract: string);

  }

  export class OverloadAttribute {
    typeId: Object;
    constructor();
    constructor(method: string);

  }

  export class ApiContractAttribute {
    typeId: Object;
    constructor();

  }

  export class PreviousContractVersionAttribute {
    typeId: Object;
    constructor();
    constructor(contract: string, versionLow: number, versionHigh: number, newContract: string);
    constructor(contract: string, versionLow: number, versionHigh: number);

  }

  export class StaticAttribute {
    typeId: Object;
    constructor();
    constructor(type: Object, version: number);
    constructor(type: Object, version: number, platform: Platform);
    constructor(type: Object, version: number, contractName: string);

  }

  export class OverridableAttribute {
    typeId: Object;
    constructor();

  }

  export class ProtectedAttribute {
    typeId: Object;
    constructor();

  }

  export class ThreadingAttribute {
    typeId: Object;
    constructor();
    constructor(model: ThreadingModel);

  }

  export class MarshalingBehaviorAttribute {
    typeId: Object;
    constructor();
    constructor(behavior: MarshalingType);

  }

  export class DeprecatedAttribute {
    typeId: Object;
    constructor();
    constructor(message: string, type: DeprecationType, version: number);
    constructor(message: string, type: DeprecationType, version: number, platform: Platform);
    constructor(message: string, type: DeprecationType, version: number, contract: string);

  }

  export class PlatformAttribute {
    typeId: Object;
    constructor();
    constructor(platform: Platform);

  }

  export class ExclusiveToAttribute {
    typeId: Object;
    constructor();
    constructor(typeName: Object);

  }

  export class LengthIsAttribute {
    typeId: Object;
    constructor();
    constructor(indexLengthParameter: number);

  }

  export class RangeAttribute {
    typeId: Object;
    constructor();
    constructor(minValue: number, maxValue: number);

  }

  export class RemoteAsyncAttribute {
    typeId: Object;
    constructor();

  }

  export class InternalAttribute {
    typeId: Object;
    constructor();

  }

  export class CreateFromStringAttribute {
    typeId: Object;
    constructor();

  }

