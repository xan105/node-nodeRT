  export enum SceneLightingEffectReflectanceModel {
    blinnPhong,
    physicallyBasedBlinnPhong,
  }

  export class SceneLightingEffect {
    name: String;
    specularShine: Number;
    specularAmount: Number;
    normalMapSource: Object;
    diffuseAmount: Number;
    ambientAmount: Number;
    reflectanceModel: SceneLightingEffectReflectanceModel;
    constructor();

  }

