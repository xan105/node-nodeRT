  export enum SceneLightingEffectReflectanceModel {
    blinnPhong,
    physicallyBasedBlinnPhong,
  }

  export class SceneLightingEffect {
    name: string;
    specularShine: number;
    specularAmount: number;
    normalMapSource: Object;
    diffuseAmount: number;
    ambientAmount: number;
    reflectanceModel: SceneLightingEffectReflectanceModel;
    constructor();

  }

