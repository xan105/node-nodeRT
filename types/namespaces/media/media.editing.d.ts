  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum VideoFramePrecision {
    nearestFrame,
    nearestKeyFrame,
  }

  export enum MediaTrimmingPreference {
    fast,
    precise,
  }

  export class MediaOverlay {
    position: Object;
    opacity: number;
    delay: number;
    audioEnabled: boolean;
    clip: MediaClip;
    constructor();
    constructor(clip: MediaClip);
    constructor(clip: MediaClip, position: Object, opacity: number);

    clone(): MediaOverlay;

  }

  export class MediaClip {
    selectedEmbeddedAudioTrackIndex: number;
    trimTimeFromEnd: number;
    volume: number;
    trimTimeFromStart: number;
    embeddedAudioTracks: Object;
    endTimeInComposition: number;
    originalDuration: number;
    startTimeInComposition: number;
    trimmedDuration: number;
    userData: Object;
    videoEffectDefinitions: Object;
    audioEffectDefinitions: Object;
    constructor();

    static createFromFileAsync(file: Object, callback: (error: Error, result: MediaClip) => void): void ;


    static createFromImageFileAsync(file: Object, originalDuration: number, callback: (error: Error, result: MediaClip) => void): void ;


    static createFromSurface(surface: Object, originalDuration: number): MediaClip;


    static createFromColor(color: Object, originalDuration: number): MediaClip;


    clone(): MediaClip;

    getVideoEncodingProperties(): Object;

  }

  export class EmbeddedAudioTrack {
    constructor();

    getAudioEncodingProperties(): Object;

  }

  export class BackgroundAudioTrack {
    volume: number;
    trimTimeFromStart: number;
    trimTimeFromEnd: number;
    delay: number;
    audioEffectDefinitions: Object;
    originalDuration: number;
    trimmedDuration: number;
    userData: Object;
    constructor();

    static createFromFileAsync(file: Object, callback: (error: Error, result: BackgroundAudioTrack) => void): void ;


    static createFromEmbeddedAudioTrack(embeddedAudioTrack: EmbeddedAudioTrack): BackgroundAudioTrack;


    clone(): BackgroundAudioTrack;

    getAudioEncodingProperties(): Object;

  }

  export class MediaComposition {
    backgroundAudioTracks: Object;
    clips: Object;
    duration: number;
    userData: Object;
    overlayLayers: Object;
    constructor();

    static loadAsync(file: Object, callback: (error: Error, result: MediaComposition) => void): void ;


    saveAsync(file: Object, callback: (error: Error) => void): void ;

    getThumbnailAsync(timeFromStart: number, scaledWidth: number, scaledHeight: number, framePrecision: VideoFramePrecision, callback: (error: Error, result: Object) => void): void ;

    getThumbnailsAsync(timesFromStart: Object, scaledWidth: number, scaledHeight: number, framePrecision: VideoFramePrecision, callback: (error: Error, result: Object) => void): void ;

    renderToFileAsync(destination: Object, callback: (error: Error, result: number) => void): void ;
    renderToFileAsync(destination: Object, trimmingPreference: MediaTrimmingPreference, callback: (error: Error, result: number) => void): void ;
    renderToFileAsync(destination: Object, trimmingPreference: MediaTrimmingPreference, encodingProfile: Object, callback: (error: Error, result: number) => void): void ;

    clone(): MediaComposition;

    createDefaultEncodingProfile(): Object;

    generateMediaStreamSource(): Object;
    generateMediaStreamSource(encodingProfile: Object): Object;

    generatePreviewMediaStreamSource(scaledWidth: number, scaledHeight: number): Object;

  }

  export class MediaOverlayLayer {
    customCompositorDefinition: Object;
    overlays: Object;
    constructor();
    constructor(compositorDefinition: Object);

    clone(): MediaOverlayLayer;

  }

