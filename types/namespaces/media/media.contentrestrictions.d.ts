  export enum RatedContentCategory {
    general,
    application,
    game,
    movie,
    television,
    music,
  }

  export enum ContentAccessRestrictionLevel {
    allow,
    warn,
    block,
    hide,
  }

  export class RatedContentDescription {
    title: String;
    ratings: Object;
    image: Object;
    id: String;
    category: RatedContentCategory;
    constructor();
    constructor(id: String, title: String, category: RatedContentCategory);

  }

  export class ContentRestrictionsBrowsePolicy {
    geographicRegion: String;
    maxBrowsableAgeRating: Number;
    preferredAgeRating: Number;
    constructor();

  }

  export class RatedContentRestrictions {
    constructor();
    constructor(maxAgeRating: Number);

    getBrowsePolicyAsync(callback: (error: Error, result: ContentRestrictionsBrowsePolicy) => void): void ;

    getRestrictionLevelAsync(RatedContentDescription: RatedContentDescription, callback: (error: Error, result: ContentAccessRestrictionLevel) => void): void ;

    requestContentAccessAsync(RatedContentDescription: RatedContentDescription, callback: (error: Error, result: Boolean) => void): void ;

    addListener(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    on(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    off(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

