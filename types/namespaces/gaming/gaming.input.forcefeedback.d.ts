  export class Vector3 {
    x: number;
    y: number;
    z: number;
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
    gain: number;
    state: ForceFeedbackEffectState;
    constructor();

    start(): void;

    stop(): void;

  }

  export class ConditionForceEffect {
    kind: ConditionForceEffectKind;
    gain: number;
    state: ForceFeedbackEffectState;
    constructor();
    constructor(effectKind: ConditionForceEffectKind);

    start(): void;

    stop(): void;

    setParameters(direction: Vector3, positiveCoefficient: number, negativeCoefficient: number, maxPositiveMagnitude: number, maxNegativeMagnitude: number, deadZone: number, bias: number): void;

  }

  export class PeriodicForceEffect {
    gain: number;
    state: ForceFeedbackEffectState;
    kind: PeriodicForceEffectKind;
    constructor();
    constructor(effectKind: PeriodicForceEffectKind);

    start(): void;

    stop(): void;

    setParameters(vector: Vector3, frequency: number, phase: number, bias: number, duration: number): void;

    setParametersWithEnvelope(vector: Vector3, frequency: number, phase: number, bias: number, attackGain: number, sustainGain: number, releaseGain: number, startDelay: number, attackDuration: number, sustainDuration: number, releaseDuration: number, repeatCount: number): void;

  }

  export class ConstantForceEffect {
    gain: number;
    state: ForceFeedbackEffectState;
    constructor();

    start(): void;

    stop(): void;

    setParameters(vector: Vector3, duration: number): void;

    setParametersWithEnvelope(vector: Vector3, attackGain: number, sustainGain: number, releaseGain: number, startDelay: number, attackDuration: number, sustainDuration: number, releaseDuration: number, repeatCount: number): void;

  }

  export class RampForceEffect {
    gain: number;
    state: ForceFeedbackEffectState;
    constructor();

    start(): void;

    stop(): void;

    setParameters(startVector: Vector3, endVector: Vector3, duration: number): void;

    setParametersWithEnvelope(startVector: Vector3, endVector: Vector3, attackGain: number, sustainGain: number, releaseGain: number, startDelay: number, attackDuration: number, sustainDuration: number, releaseDuration: number, repeatCount: number): void;

  }

  export class ForceFeedbackMotor {
    masterGain: number;
    areEffectsPaused: boolean;
    isEnabled: boolean;
    supportedAxes: ForceFeedbackEffectAxes;
    constructor();

    loadEffectAsync(effect: IForceFeedbackEffect, callback: (error: Error, result: ForceFeedbackLoadEffectResult) => void): void ;

    tryDisableAsync(callback: (error: Error, result: boolean) => void): void ;

    tryEnableAsync(callback: (error: Error, result: boolean) => void): void ;

    tryResetAsync(callback: (error: Error, result: boolean) => void): void ;

    tryUnloadEffectAsync(effect: IForceFeedbackEffect, callback: (error: Error, result: boolean) => void): void ;

    pauseAllEffects(): void;

    resumeAllEffects(): void;

    stopAllEffects(): void;

  }

