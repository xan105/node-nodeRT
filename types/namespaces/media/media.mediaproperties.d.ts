  export enum StereoscopicVideoPackingMode {
    none,
    sideBySide,
    topBottom,
  }

  export enum SphericalVideoFrameFormat {
    none,
    unsupported,
    equirectangular,
  }

  export enum MediaPixelFormat {
    nv12,
    bgra8,
    p010,
  }

  export enum MediaThumbnailFormat {
    bmp,
    bgra8,
  }

  export enum AudioEncodingQuality {
    auto,
    high,
    medium,
    low,
  }

  export enum VideoEncodingQuality {
    auto,
    hD1080p,
    hD720p,
    wvga,
    ntsc,
    pal,
    vga,
    qvga,
    uhd2160p,
    uhd4320p,
  }

  export enum MediaRotation {
    none,
    clockwise90Degrees,
    clockwise180Degrees,
    clockwise270Degrees,
  }

  export enum MediaMirroringOptions {
    none,
    horizontal,
    vertical,
  }

  export class MediaRatio {
    numerator: Number;
    denominator: Number;
    constructor();

  }

  export class MediaPropertySet {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class IMediaEncodingProperties {
    properties: MediaPropertySet;
    subtype: String;
    type: String;
    constructor();

  }

  export class AudioEncodingProperties {
    sampleRate: Number;
    channelCount: Number;
    bitsPerSample: Number;
    bitrate: Number;
    isSpatial: Boolean;
    subtype: String;
    properties: MediaPropertySet;
    type: String;
    constructor();

    static createAlac(sampleRate: Number, channelCount: Number, bitsPerSample: Number): AudioEncodingProperties;


    static createFlac(sampleRate: Number, channelCount: Number, bitsPerSample: Number): AudioEncodingProperties;


    static createAac(sampleRate: Number, channelCount: Number, bitrate: Number): AudioEncodingProperties;


    static createAacAdts(sampleRate: Number, channelCount: Number, bitrate: Number): AudioEncodingProperties;


    static createMp3(sampleRate: Number, channelCount: Number, bitrate: Number): AudioEncodingProperties;


    static createPcm(sampleRate: Number, channelCount: Number, bitsPerSample: Number): AudioEncodingProperties;


    static createWma(sampleRate: Number, channelCount: Number, bitrate: Number): AudioEncodingProperties;


    setFormatUserData(value: Array<Number>): void;

    getFormatUserData(value: Array<Number>): void;

    copy(): AudioEncodingProperties;

  }

  export class MediaEncodingSubtypes {
    static eac3: String;
    static aac: String;
    static aacAdts: String;
    static ac3: String;
    static amrNb: String;
    static amrWb: String;
    static argb32: String;
    static asf: String;
    static avi: String;
    static bgra8: String;
    static bmp: String;
    static nv12: String;
    static float: String;
    static gif: String;
    static h263: String;
    static h264: String;
    static h264Es: String;
    static hevc: String;
    static hevcEs: String;
    static iyuv: String;
    static jpeg: String;
    static jpegXr: String;
    static mjpg: String;
    static mp3: String;
    static mpeg: String;
    static mpeg1: String;
    static mpeg2: String;
    static mpeg4: String;
    static pcm: String;
    static png: String;
    static rgb24: String;
    static rgb32: String;
    static tiff: String;
    static wave: String;
    static wma8: String;
    static wma9: String;
    static wmv3: String;
    static wvc1: String;
    static yuy2: String;
    static yv12: String;
    static d16: String;
    static l16: String;
    static l8: String;
    static vp9: String;
    static alac: String;
    static flac: String;
    static p010: String;
    constructor();

  }

  export class H264ProfileIds {
    static baseline: Number;
    static constrainedBaseline: Number;
    static extended: Number;
    static high: Number;
    static high10: Number;
    static high422: Number;
    static high444: Number;
    static main: Number;
    static multiviewHigh: Number;
    static stereoHigh: Number;
    constructor();

  }

  export class Mpeg2ProfileIds {
    static high: Number;
    static main: Number;
    static signalNoiseRatioScalable: Number;
    static simple: Number;
    static spatiallyScalable: Number;
    constructor();

  }

  export class VideoEncodingProperties {
    subtype: String;
    type: String;
    properties: MediaPropertySet;
    width: Number;
    height: Number;
    bitrate: Number;
    pixelAspectRatio: MediaRatio;
    frameRate: MediaRatio;
    profileId: Number;
    stereoscopicVideoPackingMode: StereoscopicVideoPackingMode;
    sphericalVideoFrameFormat: SphericalVideoFrameFormat;
    constructor();

    static createHevc(): VideoEncodingProperties;


    static createH264(): VideoEncodingProperties;


    static createMpeg2(): VideoEncodingProperties;


    static createUncompressed(subtype: String, width: Number, height: Number): VideoEncodingProperties;


    setFormatUserData(value: Array<Number>): void;

    getFormatUserData(value: Array<Number>): void;

    copy(): VideoEncodingProperties;

  }

  export class TimedMetadataEncodingProperties {
    subtype: String;
    properties: MediaPropertySet;
    type: String;
    constructor();

    setFormatUserData(value: Array<Number>): void;

    getFormatUserData(value: Array<Number>): void;

    copy(): TimedMetadataEncodingProperties;

  }

  export class ImageEncodingProperties {
    width: Number;
    height: Number;
    subtype: String;
    properties: MediaPropertySet;
    type: String;
    constructor();

    static createUncompressed(format: MediaPixelFormat): ImageEncodingProperties;


    static createBmp(): ImageEncodingProperties;


    static createJpeg(): ImageEncodingProperties;


    static createPng(): ImageEncodingProperties;


    static createJpegXR(): ImageEncodingProperties;


    copy(): ImageEncodingProperties;

  }

  export class ContainerEncodingProperties {
    subtype: String;
    properties: MediaPropertySet;
    type: String;
    constructor();

    copy(): ContainerEncodingProperties;

  }

  export class MediaEncodingProfile {
    video: VideoEncodingProperties;
    container: ContainerEncodingProperties;
    audio: AudioEncodingProperties;
    constructor();

    static createFromFileAsync(file: Object, callback: (error: Error, result: MediaEncodingProfile) => void): void ;


    static createFromStreamAsync(stream: Object, callback: (error: Error, result: MediaEncodingProfile) => void): void ;


    static createAlac(quality: AudioEncodingQuality): MediaEncodingProfile;


    static createFlac(quality: AudioEncodingQuality): MediaEncodingProfile;


    static createHevc(quality: VideoEncodingQuality): MediaEncodingProfile;


    static createWav(quality: AudioEncodingQuality): MediaEncodingProfile;


    static createAvi(quality: VideoEncodingQuality): MediaEncodingProfile;


    static createM4a(quality: AudioEncodingQuality): MediaEncodingProfile;


    static createMp3(quality: AudioEncodingQuality): MediaEncodingProfile;


    static createWma(quality: AudioEncodingQuality): MediaEncodingProfile;


    static createMp4(quality: VideoEncodingQuality): MediaEncodingProfile;


    static createWmv(quality: VideoEncodingQuality): MediaEncodingProfile;


    setAudioTracks(value: Object): void;

    getAudioTracks(): Object;

    setVideoTracks(value: Object): void;

    getVideoTracks(): Object;

    setTimedMetadataTracks(value: Object): void;

    getTimedMetadataTracks(): Object;

  }

