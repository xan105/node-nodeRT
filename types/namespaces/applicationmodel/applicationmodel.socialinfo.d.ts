  export class BitmapSize {
    width: number;
    height: number;
    constructor();
  }

  export class SocialInfoContract {
    constructor();
  }

  export enum SocialItemBadgeStyle {
    hidden,
    visible,
    visibleWithCount,
  }

  export enum SocialFeedKind {
    homeFeed,
    contactFeed,
    dashboard,
  }

  export enum SocialFeedItemStyle {
    default,
    photo,
  }

  export enum SocialFeedUpdateMode {
    append,
    replace,
  }

  export class SocialUserInfo {
    userName: string;
    targetUri: Object;
    remoteId: string;
    displayName: string;
    constructor();

  }

  export class SocialFeedContent {
    title: string;
    targetUri: Object;
    message: string;
    constructor();

  }

  export class SocialItemThumbnail {
    targetUri: Object;
    imageUri: Object;
    bitmapSize: BitmapSize;
    constructor();

    setImageAsync(image: Object, callback: (error: Error) => void): void ;

  }

  export class SocialFeedSharedItem {
    timestamp: Date;
    thumbnail: SocialItemThumbnail;
    targetUri: Object;
    originalSource: Object;
    content: SocialFeedContent;
    constructor();

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

  export class SocialFeedItem {
    timestamp: Date;
    targetUri: Object;
    style: SocialFeedItemStyle;
    sharedItem: SocialFeedSharedItem;
    remoteId: string;
    childItem: SocialFeedChildItem;
    badgeStyle: SocialItemBadgeStyle;
    badgeCountValue: number;
    author: SocialUserInfo;
    thumbnails: Object;
    primaryContent: SocialFeedContent;
    secondaryContent: SocialFeedContent;
    constructor();

  }

export * as provider from "./applicationmodel.socialinfo.provider.js";