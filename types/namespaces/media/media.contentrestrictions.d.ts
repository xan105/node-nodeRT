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
    title: string;
    ratings: Object;
    image: Object;
    id: string;
    category: RatedContentCategory;
    constructor();
    constructor(id: string, title: string, category: RatedContentCategory);

  }

  export class ContentRestrictionsBrowsePolicy {
    geographicRegion: string;
    maxBrowsableAgeRating: number;
    preferredAgeRating: number;
    constructor();

  }

  export class RatedContentRestrictions {
    constructor();
    constructor(maxAgeRating: number);

    getBrowsePolicyAsync(callback: (error: Error, result: ContentRestrictionsBrowsePolicy) => void): void ;

    getRestrictionLevelAsync(RatedContentDescription: RatedContentDescription, callback: (error: Error, result: ContentAccessRestrictionLevel) => void): void ;

    requestContentAccessAsync(RatedContentDescription: RatedContentDescription, callback: (error: Error, result: boolean) => void): void ;

    addListener(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    on(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    off(type: "RestrictionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

