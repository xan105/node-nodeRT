  export enum PropertyPrefetchOptions {
    none,
    musicProperties,
    videoProperties,
    imageProperties,
    documentProperties,
    basicProperties,
  }

  export enum ThumbnailType {
    image,
    icon,
  }

  export enum ThumbnailMode {
    picturesView,
    videosView,
    musicView,
    documentsView,
    listView,
    singleItem,
  }

  export enum ThumbnailOptions {
    none,
    returnOnlyIfCached,
    resizeThumbnail,
    useCurrentScale,
  }

  export enum PhotoOrientation {
    unspecified,
    normal,
    flipHorizontal,
    rotate180,
    flipVertical,
    transpose,
    rotate270,
    transverse,
    rotate90,
  }

  export enum VideoOrientation {
    normal,
    rotate90,
    rotate180,
    rotate270,
  }

  export class GeotagHelper {
    constructor();

    static getGeotagAsync(file: Object, callback: (error: Error, result: Object) => void): void ;


    static setGeotagFromGeolocatorAsync(file: Object, geolocator: Object, callback: (error: Error) => void): void ;


    static setGeotagAsync(file: Object, geopoint: Object, callback: (error: Error) => void): void ;


  }

  export class StorageItemThumbnail {
    originalHeight: number;
    originalWidth: number;
    returnedSmallerCachedSize: boolean;
    type: ThumbnailType;
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

  export class IStorageItemExtraProperties {
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class MusicProperties {
    year: number;
    trackNumber: number;
    title: string;
    subtitle: string;
    rating: number;
    publisher: string;
    artist: string;
    albumArtist: string;
    album: string;
    bitrate: number;
    composers: Object;
    conductors: Object;
    duration: number;
    genre: Object;
    producers: Object;
    writers: Object;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class VideoProperties {
    year: number;
    title: string;
    subtitle: string;
    rating: number;
    publisher: string;
    bitrate: number;
    directors: Object;
    duration: number;
    height: number;
    keywords: Object;
    latitude: number;
    longitude: number;
    orientation: VideoOrientation;
    producers: Object;
    width: number;
    writers: Object;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class ImageProperties {
    title: string;
    rating: number;
    dateTaken: Date;
    cameraModel: string;
    cameraManufacturer: string;
    height: number;
    keywords: Object;
    latitude: number;
    longitude: number;
    orientation: PhotoOrientation;
    peopleNames: Object;
    width: number;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class DocumentProperties {
    title: string;
    comment: string;
    author: Object;
    keywords: Object;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class StorageItemContentProperties {
    constructor();

    getMusicPropertiesAsync(callback: (error: Error, result: MusicProperties) => void): void ;

    getVideoPropertiesAsync(callback: (error: Error, result: VideoProperties) => void): void ;

    getImagePropertiesAsync(callback: (error: Error, result: ImageProperties) => void): void ;

    getDocumentPropertiesAsync(callback: (error: Error, result: DocumentProperties) => void): void ;

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class BasicProperties {
    dateModified: Date;
    itemDate: Date;
    size: number;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

