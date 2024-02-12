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

  export enum PropertyPrefetchOptions {
    none,
    musicProperties,
    videoProperties,
    imageProperties,
    documentProperties,
    basicProperties,
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

  export enum ThumbnailType {
    image,
    icon,
  }

  export enum VideoOrientation {
    normal,
    rotate90,
    rotate180,
    rotate270,
  }

  export class BasicProperties {
    dateModified: Date;
    itemDate: Date;
    size: Number;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class DocumentProperties {
    title: String;
    comment: String;
    author: Object;
    keywords: Object;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class GeotagHelper {
    constructor();

    static getGeotagAsync(file: Object, callback: (error: Error, result: Object) => void): void ;


    static setGeotagFromGeolocatorAsync(file: Object, geolocator: Object, callback: (error: Error) => void): void ;


    static setGeotagAsync(file: Object, geopoint: Object, callback: (error: Error) => void): void ;


  }

  export class IStorageItemExtraProperties {
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class ImageProperties {
    title: String;
    rating: Number;
    dateTaken: Date;
    cameraModel: String;
    cameraManufacturer: String;
    height: Number;
    keywords: Object;
    latitude: Number;
    longitude: Number;
    orientation: PhotoOrientation;
    peopleNames: Object;
    width: Number;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

  export class MusicProperties {
    year: Number;
    trackNumber: Number;
    title: String;
    subtitle: String;
    rating: Number;
    publisher: String;
    artist: String;
    albumArtist: String;
    album: String;
    bitrate: Number;
    composers: Object;
    conductors: Object;
    duration: Number;
    genre: Object;
    producers: Object;
    writers: Object;
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

  export class StorageItemThumbnail {
    originalHeight: Number;
    originalWidth: Number;
    returnedSmallerCachedSize: Boolean;
    type: ThumbnailType;
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

  export class VideoProperties {
    year: Number;
    title: String;
    subtitle: String;
    rating: Number;
    publisher: String;
    bitrate: Number;
    directors: Object;
    duration: Number;
    height: Number;
    keywords: Object;
    latitude: Number;
    longitude: Number;
    orientation: VideoOrientation;
    producers: Object;
    width: Number;
    writers: Object;
    constructor();

    retrievePropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    savePropertiesAsync(propertiesToSave: Object, callback: (error: Error) => void): void ;
    savePropertiesAsync(callback: (error: Error) => void): void ;

  }

