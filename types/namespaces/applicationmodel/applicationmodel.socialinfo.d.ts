  export class BitmapSize {
    width: Number;
    height: Number;
    constructor();
  }

  export class SocialInfoContract {
    constructor();
  }

  export enum SocialFeedItemStyle {
    default,
    photo,
  }

  export enum SocialFeedKind {
    homeFeed,
    contactFeed,
    dashboard,
  }

  export enum SocialFeedUpdateMode {
    append,
    replace,
  }

  export enum SocialItemBadgeStyle {
    hidden,
    visible,
    visibleWithCount,
  }

  export class SocialFeedChildItem {
    timestamp: Date;
    targetUri: Object;
    sharedItem: SocialFeedSharedItem;
    author: SocialUserInfo;
    primaryContent: SocialFeedContent;
    secondaryContent: SocialFeedContent;
    thumbnails: Object;
    constructor();

  }

  export class SocialFeedContent {
    title: String;
    targetUri: Object;
    message: String;
    constructor();

  }

  export class SocialFeedItem {
    timestamp: Date;
    targetUri: Object;
    style: SocialFeedItemStyle;
    sharedItem: SocialFeedSharedItem;
    remoteId: String;
    childItem: SocialFeedChildItem;
    badgeStyle: SocialItemBadgeStyle;
    badgeCountValue: Number;
    author: SocialUserInfo;
    thumbnails: Object;
    primaryContent: SocialFeedContent;
    secondaryContent: SocialFeedContent;
    constructor();

  }

  export class SocialFeedSharedItem {
    timestamp: Date;
    thumbnail: SocialItemThumbnail;
    targetUri: Object;
    originalSource: Object;
    content: SocialFeedContent;
    constructor();

  }

  export class SocialItemThumbnail {
    targetUri: Object;
    imageUri: Object;
    bitmapSize: BitmapSize;
    constructor();

    setImageAsync(image: Object, callback: (error: Error) => void): void ;

  }

  export class SocialUserInfo {
    userName: String;
    targetUri: Object;
    remoteId: String;
    displayName: String;
    constructor();

  }

export const SocialFeedItemStyle: any;
export const SocialFeedKind: any;
export const SocialFeedUpdateMode: any;
export const SocialItemBadgeStyle: any;
export const SocialFeedChildItem: any;
export const SocialFeedContent: any;
export const SocialFeedItem: any;
export const SocialFeedSharedItem: any;
export const SocialItemThumbnail: any;
export const SocialUserInfo: any;
export * as provider from "./applicationmodel.socialinfo.provider.js";
