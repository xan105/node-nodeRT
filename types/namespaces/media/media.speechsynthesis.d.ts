  export enum VoiceGender {
    male,
    female,
  }

  export enum SpeechAppendedSilence {
    default,
    min,
  }

  export enum SpeechPunctuationSilence {
    default,
    min,
  }

  export class VoiceInformation {
    description: string;
    displayName: string;
    gender: VoiceGender;
    id: string;
    language: string;
    constructor();

  }

  export class SpeechSynthesisStream {
    timedMetadataTracks: Object;
    markers: Object;
    contentType: string;
    size: number;
    canRead: boolean;
    canWrite: boolean;
    position: number;
    constructor();

    readAsync(buffer: Object, count: number, options: number, callback: (error: Error, result: Object) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    getInputStreamAt(position: number): Object;

    getOutputStreamAt(position: number): Object;

    seek(position: number): void;

    cloneStream(): Object;

    close(): void;
  }

  export class SpeechSynthesizerOptions {
    includeWordBoundaryMetadata: boolean;
    includeSentenceBoundaryMetadata: boolean;
    speakingRate: number;
    audioVolume: number;
    audioPitch: number;
    punctuationSilence: SpeechPunctuationSilence;
    appendedSilence: SpeechAppendedSilence;
    constructor();

  }

  export class SpeechSynthesizer {
    static allVoices: Object;
    static defaultVoice: VoiceInformation;
    voice: VoiceInformation;
    options: SpeechSynthesizerOptions;
    constructor();

    static trySetDefaultVoiceAsync(voice: VoiceInformation, callback: (error: Error, result: boolean) => void): void ;


    synthesizeTextToStreamAsync(text: string, callback: (error: Error, result: SpeechSynthesisStream) => void): void ;

    synthesizeSsmlToStreamAsync(Ssml: string, callback: (error: Error, result: SpeechSynthesisStream) => void): void ;

    close(): void;
  }

