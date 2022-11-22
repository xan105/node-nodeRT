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
    opacity: Number;
    delay: Number;
    audioEnabled: Boolean;
    clip: MediaClip;
    constructor();
    constructor(clip: MediaClip);
    constructor(clip: MediaClip, position: Object, opacity: Number);

    clone(): MediaOverlay;

  }

  export class MediaClip {
    selectedEmbeddedAudioTrackIndex: Number;
    trimTimeFromEnd: Number;
    volume: Number;
    trimTimeFromStart: Number;
    embeddedAudioTracks: Object;
    endTimeInComposition: Number;
    originalDuration: Number;
    startTimeInComposition: Number;
    trimmedDuration: Number;
    userData: Object;
    videoEffectDefinitions: Object;
    audioEffectDefinitions: Object;
    constructor();

    static createFromFileAsync(file: Object, callback: (error: Error, result: MediaClip) => void): void ;


    static createFromImageFileAsync(file: Object, originalDuration: Number, callback: (error: Error, result: MediaClip) => void): void ;


    static createFromSurface(surface: Object, originalDuration: Number): MediaClip;


    static createFromColor(color: Object, originalDuration: Number): MediaClip;


    clone(): MediaClip;

    getVideoEncodingProperties(): Object;

  }

  export class EmbeddedAudioTrack {
    constructor();

    getAudioEncodingProperties(): Object;

  }

  export class BackgroundAudioTrack {
    volume: Number;
    trimTimeFromStart: Number;
    trimTimeFromEnd: Number;
    delay: Number;
    audioEffectDefinitions: Object;
    originalDuration: Number;
    trimmedDuration: Number;
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
    duration: Number;
    userData: Object;
    overlayLayers: Object;
    constructor();

    static loadAsync(file: Object, callback: (error: Error, result: MediaComposition) => void): void ;


    saveAsync(file: Object, callback: (error: Error) => void): void ;

    getThumbnailAsync(timeFromStart: Number, scaledWidth: Number, scaledHeight: Number, framePrecision: VideoFramePrecision, callback: (error: Error, result: Object) => void): void ;

    getThumbnailsAsync(timesFromStart: Object, scaledWidth: Number, scaledHeight: Number, framePrecision: VideoFramePrecision, callback: (error: Error, result: Object) => void): void ;

    renderToFileAsync(destination: Object, callback: (error: Error, result: Number) => void): void ;
    renderToFileAsync(destination: Object, trimmingPreference: MediaTrimmingPreference, callback: (error: Error, result: Number) => void): void ;
    renderToFileAsync(destination: Object, trimmingPreference: MediaTrimmingPreference, encodingProfile: Object, callback: (error: Error, result: Number) => void): void ;

    clone(): MediaComposition;

    createDefaultEncodingProfile(): Object;

    generateMediaStreamSource(): Object;
    generateMediaStreamSource(encodingProfile: Object): Object;

    generatePreviewMediaStreamSource(scaledWidth: Number, scaledHeight: Number): Object;

  }

  export class MediaOverlayLayer {
    customCompositorDefinition: Object;
    overlays: Object;
    constructor();
    constructor(compositorDefinition: Object);

    clone(): MediaOverlayLayer;

  }

