  export enum SpeechAppendedSilence {
    default,
    min,
  }

  export enum SpeechPunctuationSilence {
    default,
    min,
  }

  export enum VoiceGender {
    male,
    female,
  }

  export class SpeechSynthesisStream {
    timedMetadataTracks: Object;
    markers: Object;
    contentType: String;
    size: Number;
    canRead: Boolean;
    canWrite: Boolean;
    position: Number;
    constructor();

    readAsync(buffer: Object, count: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    getInputStreamAt(position: Number): Object;

    getOutputStreamAt(position: Number): Object;

    seek(position: Number): void;

    cloneStream(): Object;

    close(): void;
  }

  export class SpeechSynthesizer {
    static allVoices: Object;
    static defaultVoice: VoiceInformation;
    voice: VoiceInformation;
    options: SpeechSynthesizerOptions;
    constructor();

    static trySetDefaultVoiceAsync(voice: VoiceInformation, callback: (error: Error, result: Boolean) => void): void ;


    synthesizeTextToStreamAsync(text: String, callback: (error: Error, result: SpeechSynthesisStream) => void): void ;

    synthesizeSsmlToStreamAsync(Ssml: String, callback: (error: Error, result: SpeechSynthesisStream) => void): void ;

    close(): void;
  }

  export class SpeechSynthesizerOptions {
    includeWordBoundaryMetadata: Boolean;
    includeSentenceBoundaryMetadata: Boolean;
    speakingRate: Number;
    audioVolume: Number;
    audioPitch: Number;
    punctuationSilence: SpeechPunctuationSilence;
    appendedSilence: SpeechAppendedSilence;
    constructor();

  }

  export class VoiceInformation {
    description: String;
    displayName: String;
    gender: VoiceGender;
    id: String;
    language: String;
    constructor();

  }

