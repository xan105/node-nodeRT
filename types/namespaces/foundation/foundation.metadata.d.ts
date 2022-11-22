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

    static isTypePresent(typeName: String): Boolean;


    static isMethodPresent(typeName: String, methodName: String): Boolean;
    static isMethodPresent(typeName: String, methodName: String, inputParameterCount: Number): Boolean;


    static isEventPresent(typeName: String, eventName: String): Boolean;


    static isPropertyPresent(typeName: String, propertyName: String): Boolean;


    static isReadOnlyPropertyPresent(typeName: String, propertyName: String): Boolean;


    static isWriteablePropertyPresent(typeName: String, propertyName: String): Boolean;


    static isEnumNamedValuePresent(enumTypeName: String, valueName: String): Boolean;


    static isApiContractPresent(contractName: String, majorVersion: Number): Boolean;
    static isApiContractPresent(contractName: String, majorVersion: Number, minorVersion: Number): Boolean;


  }

  export class ActivatableAttribute {
    typeId: Object;
    constructor();
    constructor(version: Number);
    constructor(version: Number, type: String);
    constructor(version: Number, platform: Platform);
    constructor(type: Object, version: Number);
    constructor(type: Object, version: Number, contractName: String);
    constructor(type: Object, version: Number, platform: Platform);

  }

  export class VersionAttribute {
    typeId: Object;
    constructor();
    constructor(version: Number);
    constructor(version: Number, platform: Platform);

  }

  export class ContractVersionAttribute {
    typeId: Object;
    constructor();
    constructor(version: Number);
    constructor(contract: Object, version: Number);
    constructor(contract: String, version: Number);

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
    constructor(a: Number, b: Number, c: Number, d: Number, e: Number, f: Number, g: Number, h: Number, i: Number, j: Number, k: Number);

  }

  export class FeatureAttribute {
    typeId: Object;
    constructor();
    constructor(featureStage: FeatureStage, validInAllBranches: Boolean);

  }

  export class ExperimentalAttribute {
    typeId: Object;
    constructor();

  }

  export class ComposableAttribute {
    typeId: Object;
    constructor();
    constructor(type: Object, compositionType: CompositionType, version: Number);
    constructor(type: Object, compositionType: CompositionType, version: Number, platform: Platform);
    constructor(type: Object, compositionType: CompositionType, version: Number, contract: String);

  }

  export class OverloadAttribute {
    typeId: Object;
    constructor();
    constructor(method: String);

  }

  export class ApiContractAttribute {
    typeId: Object;
    constructor();

  }

  export class PreviousContractVersionAttribute {
    typeId: Object;
    constructor();
    constructor(contract: String, versionLow: Number, versionHigh: Number, newContract: String);
    constructor(contract: String, versionLow: Number, versionHigh: Number);

  }

  export class StaticAttribute {
    typeId: Object;
    constructor();
    constructor(type: Object, version: Number);
    constructor(type: Object, version: Number, platform: Platform);
    constructor(type: Object, version: Number, contractName: String);

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
    constructor(message: String, type: DeprecationType, version: Number);
    constructor(message: String, type: DeprecationType, version: Number, platform: Platform);
    constructor(message: String, type: DeprecationType, version: Number, contract: String);

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
    constructor(indexLengthParameter: Number);

  }

  export class RangeAttribute {
    typeId: Object;
    constructor();
    constructor(minValue: Number, maxValue: Number);

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

