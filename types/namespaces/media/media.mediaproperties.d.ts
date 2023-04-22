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
    numerator: number;
    denominator: number;
    constructor();

  }

  export class MediaPropertySet {
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

  }

  export class IMediaEncodingProperties {
    properties: MediaPropertySet;
    subtype: string;
    type: string;
    constructor();

  }

  export class AudioEncodingProperties {
    sampleRate: number;
    channelCount: number;
    bitsPerSample: number;
    bitrate: number;
    isSpatial: boolean;
    subtype: string;
    properties: MediaPropertySet;
    type: string;
    constructor();

    static createAlac(sampleRate: number, channelCount: number, bitsPerSample: number): AudioEncodingProperties;


    static createFlac(sampleRate: number, channelCount: number, bitsPerSample: number): AudioEncodingProperties;


    static createAac(sampleRate: number, channelCount: number, bitrate: number): AudioEncodingProperties;


    static createAacAdts(sampleRate: number, channelCount: number, bitrate: number): AudioEncodingProperties;


    static createMp3(sampleRate: number, channelCount: number, bitrate: number): AudioEncodingProperties;


    static createPcm(sampleRate: number, channelCount: number, bitsPerSample: number): AudioEncodingProperties;


    static createWma(sampleRate: number, channelCount: number, bitrate: number): AudioEncodingProperties;


    setFormatUserData(value: Array<number>): void;

    getFormatUserData(value: Array<number>): void;

    copy(): AudioEncodingProperties;

  }

  export class MediaEncodingSubtypes {
    static eac3: string;
    static aac: string;
    static aacAdts: string;
    static ac3: string;
    static amrNb: string;
    static amrWb: string;
    static argb32: string;
    static asf: string;
    static avi: string;
    static bgra8: string;
    static bmp: string;
    static nv12: string;
    static float: string;
    static gif: string;
    static h263: string;
    static h264: string;
    static h264Es: string;
    static hevc: string;
    static hevcEs: string;
    static iyuv: string;
    static jpeg: string;
    static jpegXr: string;
    static mjpg: string;
    static mp3: string;
    static mpeg: string;
    static mpeg1: string;
    static mpeg2: string;
    static mpeg4: string;
    static pcm: string;
    static png: string;
    static rgb24: string;
    static rgb32: string;
    static tiff: string;
    static wave: string;
    static wma8: string;
    static wma9: string;
    static wmv3: string;
    static wvc1: string;
    static yuy2: string;
    static yv12: string;
    static d16: string;
    static l16: string;
    static l8: string;
    static vp9: string;
    static alac: string;
    static flac: string;
    static p010: string;
    constructor();

  }

  export class H264ProfileIds {
    static baseline: number;
    static constrainedBaseline: number;
    static extended: number;
    static high: number;
    static high10: number;
    static high422: number;
    static high444: number;
    static main: number;
    static multiviewHigh: number;
    static stereoHigh: number;
    constructor();

  }

  export class Mpeg2ProfileIds {
    static high: number;
    static main: number;
    static signalNoiseRatioScalable: number;
    static simple: number;
    static spatiallyScalable: number;
    constructor();

  }

  export class VideoEncodingProperties {
    subtype: string;
    type: string;
    properties: MediaPropertySet;
    width: number;
    height: number;
    bitrate: number;
    pixelAspectRatio: MediaRatio;
    frameRate: MediaRatio;
    profileId: number;
    stereoscopicVideoPackingMode: StereoscopicVideoPackingMode;
    sphericalVideoFrameFormat: SphericalVideoFrameFormat;
    constructor();

    static createHevc(): VideoEncodingProperties;


    static createH264(): VideoEncodingProperties;


    static createMpeg2(): VideoEncodingProperties;


    static createUncompressed(subtype: string, width: number, height: number): VideoEncodingProperties;


    setFormatUserData(value: Array<number>): void;

    getFormatUserData(value: Array<number>): void;

    copy(): VideoEncodingProperties;

  }

  export class TimedMetadataEncodingProperties {
    subtype: string;
    properties: MediaPropertySet;
    type: string;
    constructor();

    setFormatUserData(value: Array<number>): void;

    getFormatUserData(value: Array<number>): void;

    copy(): TimedMetadataEncodingProperties;

  }

  export class ImageEncodingProperties {
    width: number;
    height: number;
    subtype: string;
    properties: MediaPropertySet;
    type: string;
    constructor();

    static createUncompressed(format: MediaPixelFormat): ImageEncodingProperties;


    static createBmp(): ImageEncodingProperties;


    static createJpeg(): ImageEncodingProperties;


    static createPng(): ImageEncodingProperties;


    static createJpegXR(): ImageEncodingProperties;


    copy(): ImageEncodingProperties;

  }

  export class ContainerEncodingProperties {
    subtype: string;
    properties: MediaPropertySet;
    type: string;
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

