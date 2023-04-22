  export enum SpeechRecognitionConstraintProbability {
    default,
    min,
    max,
  }

  export enum SpeechRecognitionConfidence {
    high,
    medium,
    low,
    rejected,
  }

  export enum SpeechRecognitionScenario {
    webSearch,
    dictation,
    formFilling,
  }

  export enum SpeechRecognitionConstraintType {
    topic,
    list,
    grammar,
    voiceCommandDefinition,
  }

  export enum SpeechRecognizerState {
    idle,
    capturing,
    processing,
    soundStarted,
    soundEnded,
    speechDetected,
    paused,
  }

  export enum SpeechRecognitionAudioProblem {
    none,
    tooNoisy,
    noSignal,
    tooLoud,
    tooQuiet,
    tooFast,
    tooSlow,
  }

  export enum SpeechRecognitionResultStatus {
    success,
    topicLanguageNotSupported,
    grammarLanguageMismatch,
    grammarCompilationFailure,
    audioQualityFailure,
    userCanceled,
    unknown,
    timeoutExceeded,
    pauseLimitExceeded,
    networkFailure,
    microphoneUnavailable,
  }

  export enum SpeechContinuousRecognitionMode {
    default,
    pauseOnRecognition,
  }

  export class SpeechRecognitionSemanticInterpretation {
    properties: Object;
    constructor();

  }

  export class SpeechRecognitionResult {
    confidence: SpeechRecognitionConfidence;
    constraint: ISpeechRecognitionConstraint;
    rawConfidence: number;
    rulePath: Object;
    semanticInterpretation: SpeechRecognitionSemanticInterpretation;
    status: SpeechRecognitionResultStatus;
    text: string;
    phraseDuration: number;
    phraseStartTime: Date;
    constructor();

    getAlternates(maxAlternates: number): Object;

  }

  export class ISpeechRecognitionConstraint {
    isEnabled: boolean;
    probability: SpeechRecognitionConstraintProbability;
    tag: string;
    type: SpeechRecognitionConstraintType;
    constructor();

  }

  export class SpeechRecognitionTopicConstraint {
    tag: string;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: boolean;
    type: SpeechRecognitionConstraintType;
    scenario: SpeechRecognitionScenario;
    topicHint: string;
    constructor();
    constructor(scenario: SpeechRecognitionScenario, topicHint: string);
    constructor(scenario: SpeechRecognitionScenario, topicHint: string, tag: string);

  }

  export class SpeechRecognitionListConstraint {
    tag: string;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: boolean;
    type: SpeechRecognitionConstraintType;
    commands: Object;
    constructor();
    constructor(commands: Object);
    constructor(commands: Object, tag: string);

  }

  export class SpeechRecognitionGrammarFileConstraint {
    tag: string;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: boolean;
    type: SpeechRecognitionConstraintType;
    grammarFile: Object;
    constructor();
    constructor(file: Object);
    constructor(file: Object, tag: string);

  }

  export class SpeechRecognizerTimeouts {
    initialSilenceTimeout: number;
    endSilenceTimeout: number;
    babbleTimeout: number;
    constructor();

  }

  export class SpeechRecognizerUIOptions {
    showConfirmation: boolean;
    isReadBackEnabled: boolean;
    exampleText: string;
    audiblePrompt: string;
    constructor();

  }

  export class SpeechRecognitionCompilationResult {
    status: SpeechRecognitionResultStatus;
    constructor();

  }

  export class SpeechRecognizer {
    static supportedGrammarLanguages: Object;
    static supportedTopicLanguages: Object;
    static systemSpeechLanguage: Object;
    constraints: Object;
    currentLanguage: Object;
    timeouts: SpeechRecognizerTimeouts;
    uIOptions: SpeechRecognizerUIOptions;
    continuousRecognitionSession: SpeechContinuousRecognitionSession;
    state: SpeechRecognizerState;
    constructor();
    constructor(language: Object);

    static trySetSystemSpeechLanguageAsync(speechLanguage: Object, callback: (error: Error, result: boolean) => void): void ;


    compileConstraintsAsync(callback: (error: Error, result: SpeechRecognitionCompilationResult) => void): void ;

    recognizeAsync(callback: (error: Error, result: SpeechRecognitionResult) => void): void ;

    recognizeWithUIAsync(callback: (error: Error, result: SpeechRecognitionResult) => void): void ;

    stopRecognitionAsync(callback: (error: Error) => void): void ;

    close(): void;
    addListener(type: "RecognitionQualityDegrading", listener: (ev: Event) => void): void ;
    removeListener(type: "RecognitionQualityDegrading", listener: (ev: Event) => void): void ;
    on(type: "RecognitionQualityDegrading", listener: (ev: Event) => void): void ;
    off(type: "RecognitionQualityDegrading", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "HypothesisGenerated", listener: (ev: Event) => void): void ;
    removeListener(type: "HypothesisGenerated", listener: (ev: Event) => void): void ;
    on(type: "HypothesisGenerated", listener: (ev: Event) => void): void ;
    off(type: "HypothesisGenerated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpeechRecognitionQualityDegradingEventArgs {
    problem: SpeechRecognitionAudioProblem;
    constructor();

  }

  export class SpeechRecognizerStateChangedEventArgs {
    state: SpeechRecognizerState;
    constructor();

  }

  export class SpeechRecognitionVoiceCommandDefinitionConstraint {
    tag: string;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: boolean;
    type: SpeechRecognitionConstraintType;
    constructor();

  }

  export class SpeechContinuousRecognitionSession {
    autoStopSilenceTimeout: number;
    constructor();

    startAsync(callback: (error: Error) => void): void ;
    startAsync(mode: SpeechContinuousRecognitionMode, callback: (error: Error) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    cancelAsync(callback: (error: Error) => void): void ;

    pauseAsync(callback: (error: Error) => void): void ;

    resume(): void;

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ResultGenerated", listener: (ev: Event) => void): void ;
    removeListener(type: "ResultGenerated", listener: (ev: Event) => void): void ;
    on(type: "ResultGenerated", listener: (ev: Event) => void): void ;
    off(type: "ResultGenerated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpeechRecognitionHypothesisGeneratedEventArgs {
    hypothesis: SpeechRecognitionHypothesis;
    constructor();

  }

  export class SpeechRecognitionHypothesis {
    text: string;
    constructor();

  }

  export class SpeechContinuousRecognitionCompletedEventArgs {
    status: SpeechRecognitionResultStatus;
    constructor();

  }

  export class SpeechContinuousRecognitionResultGeneratedEventArgs {
    result: SpeechRecognitionResult;
    constructor();

  }

  export class VoiceCommandManager {
    static installedCommandSets: Object;
    constructor();

    static installCommandSetsFromStorageFileAsync(file: Object, callback: (error: Error) => void): void ;


  }

  export class VoiceCommandSet {
    language: string;
    name: string;
    constructor();

    setPhraseListAsync(phraseListName: string, phraseList: Object, callback: (error: Error) => void): void ;

  }

