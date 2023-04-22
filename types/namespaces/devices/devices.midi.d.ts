  export enum MidiMessageType {
    none,
    noteOff,
    noteOn,
    polyphonicKeyPressure,
    controlChange,
    programChange,
    channelPressure,
    pitchBendChange,
    systemExclusive,
    midiTimeCode,
    songPositionPointer,
    songSelect,
    tuneRequest,
    endSystemExclusive,
    timingClock,
    start,
    continue,
    stop,
    activeSensing,
    systemReset,
  }

  export class IMidiMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiNoteOffMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    channel: number;
    note: number;
    velocity: number;
    constructor();
    constructor(channel: number, note: number, velocity: number);

  }

  export class MidiNoteOnMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    channel: number;
    note: number;
    velocity: number;
    constructor();
    constructor(channel: number, note: number, velocity: number);

  }

  export class MidiPolyphonicKeyPressureMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    channel: number;
    note: number;
    pressure: number;
    constructor();
    constructor(channel: number, note: number, pressure: number);

  }

  export class MidiControlChangeMessage {
    channel: number;
    controlValue: number;
    controller: number;
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();
    constructor(channel: number, controller: number, controlValue: number);

  }

  export class MidiProgramChangeMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    channel: number;
    program: number;
    constructor();
    constructor(channel: number, program: number);

  }

  export class MidiChannelPressureMessage {
    channel: number;
    pressure: number;
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();
    constructor(channel: number, pressure: number);

  }

  export class MidiPitchBendChangeMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    bend: number;
    channel: number;
    constructor();
    constructor(channel: number, bend: number);

  }

  export class MidiSystemExclusiveMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();
    constructor(rawData: Object);

  }

  export class MidiTimeCodeMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    frameType: number;
    values: number;
    constructor();
    constructor(frameType: number, values: number);

  }

  export class MidiSongPositionPointerMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    beats: number;
    constructor();
    constructor(beats: number);

  }

  export class MidiSongSelectMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    song: number;
    constructor();
    constructor(song: number);

  }

  export class MidiTuneRequestMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiTimingClockMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiStartMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiContinueMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiStopMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiActiveSensingMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiSystemResetMessage {
    rawData: Object;
    timestamp: number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiMessageReceivedEventArgs {
    message: IMidiMessage;
    constructor();

  }

  export class MidiInPort {
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: MidiInPort) => void): void ;


    static getDeviceSelector(): string;


    close(): void;
    addListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    on(type: "MessageReceived", listener: (ev: Event) => void): void ;
    off(type: "MessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IMidiOutPort {
    deviceId: string;
    constructor();

    sendMessage(midiMessage: IMidiMessage): void;

    sendBuffer(midiData: Object): void;

  }

  export class MidiOutPort {
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: IMidiOutPort) => void): void ;


    static getDeviceSelector(): string;


    sendMessage(midiMessage: IMidiMessage): void;

    sendBuffer(midiData: Object): void;

    close(): void;
  }

  export class MidiSynthesizer {
    deviceId: string;
    volume: number;
    audioDevice: Object;
    constructor();

    static createAsync(callback: (error: Error, result: MidiSynthesizer) => void): void ;
    static createAsync(audioDevice: Object, callback: (error: Error, result: MidiSynthesizer) => void): void ;


    static isSynthesizer(midiDevice: Object): boolean;


    sendMessage(midiMessage: IMidiMessage): void;

    sendBuffer(midiData: Object): void;

    close(): void;
  }

