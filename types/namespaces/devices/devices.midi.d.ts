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
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiNoteOffMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    channel: Number;
    note: Number;
    velocity: Number;
    constructor();
    constructor(channel: Number, note: Number, velocity: Number);

  }

  export class MidiNoteOnMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    channel: Number;
    note: Number;
    velocity: Number;
    constructor();
    constructor(channel: Number, note: Number, velocity: Number);

  }

  export class MidiPolyphonicKeyPressureMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    channel: Number;
    note: Number;
    pressure: Number;
    constructor();
    constructor(channel: Number, note: Number, pressure: Number);

  }

  export class MidiControlChangeMessage {
    channel: Number;
    controlValue: Number;
    controller: Number;
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();
    constructor(channel: Number, controller: Number, controlValue: Number);

  }

  export class MidiProgramChangeMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    channel: Number;
    program: Number;
    constructor();
    constructor(channel: Number, program: Number);

  }

  export class MidiChannelPressureMessage {
    channel: Number;
    pressure: Number;
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();
    constructor(channel: Number, pressure: Number);

  }

  export class MidiPitchBendChangeMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    bend: Number;
    channel: Number;
    constructor();
    constructor(channel: Number, bend: Number);

  }

  export class MidiSystemExclusiveMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();
    constructor(rawData: Object);

  }

  export class MidiTimeCodeMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    frameType: Number;
    values: Number;
    constructor();
    constructor(frameType: Number, values: Number);

  }

  export class MidiSongPositionPointerMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    beats: Number;
    constructor();
    constructor(beats: Number);

  }

  export class MidiSongSelectMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    song: Number;
    constructor();
    constructor(song: Number);

  }

  export class MidiTuneRequestMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiTimingClockMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiStartMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiContinueMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiStopMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiActiveSensingMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiSystemResetMessage {
    rawData: Object;
    timestamp: Number;
    type: MidiMessageType;
    constructor();

  }

  export class MidiMessageReceivedEventArgs {
    message: IMidiMessage;
    constructor();

  }

  export class MidiInPort {
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: MidiInPort) => void): void ;


    static getDeviceSelector(): String;


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
    deviceId: String;
    constructor();

    sendMessage(midiMessage: IMidiMessage): void;

    sendBuffer(midiData: Object): void;

  }

  export class MidiOutPort {
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: IMidiOutPort) => void): void ;


    static getDeviceSelector(): String;


    sendMessage(midiMessage: IMidiMessage): void;

    sendBuffer(midiData: Object): void;

    close(): void;
  }

  export class MidiSynthesizer {
    deviceId: String;
    volume: Number;
    audioDevice: Object;
    constructor();

    static createAsync(callback: (error: Error, result: MidiSynthesizer) => void): void ;
    static createAsync(audioDevice: Object, callback: (error: Error, result: MidiSynthesizer) => void): void ;


    static isSynthesizer(midiDevice: Object): Boolean;


    sendMessage(midiMessage: IMidiMessage): void;

    sendBuffer(midiData: Object): void;

    close(): void;
  }

