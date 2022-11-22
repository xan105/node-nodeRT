  export enum AudioRoutingEndpoint {
    default,
    earpiece,
    speakerphone,
    bluetooth,
    wiredHeadset,
    wiredHeadsetSpeakerOnly,
    bluetoothWithNoiseAndEchoCancellation,
    bluetoothPreferred,
  }

  export enum AvailableAudioRoutingEndpoints {
    none,
    earpiece,
    speakerphone,
    bluetooth,
  }

  export class AudioRoutingManager {
    availableAudioEndpoints: AvailableAudioRoutingEndpoints;
    constructor();

    static getDefault(): AudioRoutingManager;


    getAudioEndpoint(): AudioRoutingEndpoint;

    setAudioEndpoint(endpoint: AudioRoutingEndpoint): void;

    addListener(type: "AudioEndpointChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioEndpointChanged", listener: (ev: Event) => void): void ;
    on(type: "AudioEndpointChanged", listener: (ev: Event) => void): void ;
    off(type: "AudioEndpointChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

