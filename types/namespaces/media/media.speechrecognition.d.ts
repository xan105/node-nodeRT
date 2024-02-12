  export enum SpeechContinuousRecognitionMode {
    default,
    pauseOnRecognition,
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

  export enum SpeechRecognitionConfidence {
    high,
    medium,
    low,
    rejected,
  }

  export enum SpeechRecognitionConstraintProbability {
    default,
    min,
    max,
  }

  export enum SpeechRecognitionConstraintType {
    topic,
    list,
    grammar,
    voiceCommandDefinition,
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

  export enum SpeechRecognitionScenario {
    webSearch,
    dictation,
    formFilling,
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

  export class ISpeechRecognitionConstraint {
    isEnabled: Boolean;
    probability: SpeechRecognitionConstraintProbability;
    tag: String;
    type: SpeechRecognitionConstraintType;
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

  export class SpeechContinuousRecognitionSession {
    autoStopSilenceTimeout: Number;
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

  export class SpeechRecognitionCompilationResult {
    status: SpeechRecognitionResultStatus;
    constructor();

  }

  export class SpeechRecognitionGrammarFileConstraint {
    tag: String;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: Boolean;
    type: SpeechRecognitionConstraintType;
    grammarFile: Object;
    constructor();
    constructor(file: Object);
    constructor(file: Object, tag: String);

  }

  export class SpeechRecognitionHypothesis {
    text: String;
    constructor();

  }

  export class SpeechRecognitionHypothesisGeneratedEventArgs {
    hypothesis: SpeechRecognitionHypothesis;
    constructor();

  }

  export class SpeechRecognitionListConstraint {
    tag: String;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: Boolean;
    type: SpeechRecognitionConstraintType;
    commands: Object;
    constructor();
    constructor(commands: Object);
    constructor(commands: Object, tag: String);

  }

  export class SpeechRecognitionQualityDegradingEventArgs {
    problem: SpeechRecognitionAudioProblem;
    constructor();

  }

  export class SpeechRecognitionResult {
    confidence: SpeechRecognitionConfidence;
    constraint: ISpeechRecognitionConstraint;
    rawConfidence: Number;
    rulePath: Object;
    semanticInterpretation: SpeechRecognitionSemanticInterpretation;
    status: SpeechRecognitionResultStatus;
    text: String;
    phraseDuration: Number;
    phraseStartTime: Date;
    constructor();

    getAlternates(maxAlternates: Number): Object;

  }

  export class SpeechRecognitionSemanticInterpretation {
    properties: Object;
    constructor();

  }

  export class SpeechRecognitionTopicConstraint {
    tag: String;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: Boolean;
    type: SpeechRecognitionConstraintType;
    scenario: SpeechRecognitionScenario;
    topicHint: String;
    constructor();
    constructor(scenario: SpeechRecognitionScenario, topicHint: String);
    constructor(scenario: SpeechRecognitionScenario, topicHint: String, tag: String);

  }

  export class SpeechRecognitionVoiceCommandDefinitionConstraint {
    tag: String;
    probability: SpeechRecognitionConstraintProbability;
    isEnabled: Boolean;
    type: SpeechRecognitionConstraintType;
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

    static trySetSystemSpeechLanguageAsync(speechLanguage: Object, callback: (error: Error, result: Boolean) => void): void ;


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

  export class SpeechRecognizerStateChangedEventArgs {
    state: SpeechRecognizerState;
    constructor();

  }

  export class SpeechRecognizerTimeouts {
    initialSilenceTimeout: Number;
    endSilenceTimeout: Number;
    babbleTimeout: Number;
    constructor();

  }

  export class SpeechRecognizerUIOptions {
    showConfirmation: Boolean;
    isReadBackEnabled: Boolean;
    exampleText: String;
    audiblePrompt: String;
    constructor();

  }

  export class VoiceCommandManager {
    static installedCommandSets: Object;
    constructor();

    static installCommandSetsFromStorageFileAsync(file: Object, callback: (error: Error) => void): void ;


  }

  export class VoiceCommandSet {
    language: String;
    name: String;
    constructor();

    setPhraseListAsync(phraseListName: String, phraseList: Object, callback: (error: Error) => void): void ;

  }

