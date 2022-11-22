  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export enum ConditionForceEffectKind {
    spring,
    damper,
    inertia,
    friction,
  }

  export enum ForceFeedbackEffectAxes {
    none,
    x,
    y,
    z,
  }

  export enum ForceFeedbackEffectState {
    stopped,
    running,
    paused,
    faulted,
  }

  export enum ForceFeedbackLoadEffectResult {
    succeeded,
    effectStorageFull,
    effectNotSupported,
  }

  export enum PeriodicForceEffectKind {
    squareWave,
    sineWave,
    triangleWave,
    sawtoothWaveUp,
    sawtoothWaveDown,
  }

  export class IForceFeedbackEffect {
    gain: Number;
    state: ForceFeedbackEffectState;
    constructor();

    start(): void;

    stop(): void;

  }

  export class ConditionForceEffect {
    kind: ConditionForceEffectKind;
    gain: Number;
    state: ForceFeedbackEffectState;
    constructor();
    constructor(effectKind: ConditionForceEffectKind);

    start(): void;

    stop(): void;

    setParameters(direction: Vector3, positiveCoefficient: Number, negativeCoefficient: Number, maxPositiveMagnitude: Number, maxNegativeMagnitude: Number, deadZone: Number, bias: Number): void;

  }

  export class PeriodicForceEffect {
    gain: Number;
    state: ForceFeedbackEffectState;
    kind: PeriodicForceEffectKind;
    constructor();
    constructor(effectKind: PeriodicForceEffectKind);

    start(): void;

    stop(): void;

    setParameters(vector: Vector3, frequency: Number, phase: Number, bias: Number, duration: Number): void;

    setParametersWithEnvelope(vector: Vector3, frequency: Number, phase: Number, bias: Number, attackGain: Number, sustainGain: Number, releaseGain: Number, startDelay: Number, attackDuration: Number, sustainDuration: Number, releaseDuration: Number, repeatCount: Number): void;

  }

  export class ConstantForceEffect {
    gain: Number;
    state: ForceFeedbackEffectState;
    constructor();

    start(): void;

    stop(): void;

    setParameters(vector: Vector3, duration: Number): void;

    setParametersWithEnvelope(vector: Vector3, attackGain: Number, sustainGain: Number, releaseGain: Number, startDelay: Number, attackDuration: Number, sustainDuration: Number, releaseDuration: Number, repeatCount: Number): void;

  }

  export class RampForceEffect {
    gain: Number;
    state: ForceFeedbackEffectState;
    constructor();

    start(): void;

    stop(): void;

    setParameters(startVector: Vector3, endVector: Vector3, duration: Number): void;

    setParametersWithEnvelope(startVector: Vector3, endVector: Vector3, attackGain: Number, sustainGain: Number, releaseGain: Number, startDelay: Number, attackDuration: Number, sustainDuration: Number, releaseDuration: Number, repeatCount: Number): void;

  }

  export class ForceFeedbackMotor {
    masterGain: Number;
    areEffectsPaused: Boolean;
    isEnabled: Boolean;
    supportedAxes: ForceFeedbackEffectAxes;
    constructor();

    loadEffectAsync(effect: IForceFeedbackEffect, callback: (error: Error, result: ForceFeedbackLoadEffectResult) => void): void ;

    tryDisableAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryEnableAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryResetAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryUnloadEffectAsync(effect: IForceFeedbackEffect, callback: (error: Error, result: Boolean) => void): void ;

    pauseAllEffects(): void;

    resumeAllEffects(): void;

    stopAllEffects(): void;

  }

