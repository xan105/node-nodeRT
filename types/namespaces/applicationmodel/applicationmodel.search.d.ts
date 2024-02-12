  export class SearchContract {
    constructor();
  }

  export class ISearchPaneQueryChangedEventArgs {
    language: String;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    queryText: String;
    constructor();

  }

  export class LocalContentSuggestionSettings {
    enabled: Boolean;
    aqsFilter: String;
    locations: Object;
    propertiesToMatch: Object;
    constructor();

  }

  export class SearchPane {
    showOnKeyboardInput: Boolean;
    searchHistoryEnabled: Boolean;
    searchHistoryContext: String;
    placeholderText: String;
    language: String;
    queryText: String;
    visible: Boolean;
    constructor();

    static hideThisApplication(): void;


    static getForCurrentView(): SearchPane;


    setLocalContentSuggestionSettings(settings: LocalContentSuggestionSettings): void;

    show(): void;
    show(query: String): void;

    trySetQueryText(query: String): Boolean;

    addListener(type: "QueryChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "QueryChanged", listener: (ev: Event) => void): void ;
    on(type: "QueryChanged", listener: (ev: Event) => void): void ;
    off(type: "QueryChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "QuerySubmitted", listener: (ev: Event) => void): void ;
    removeListener(type: "QuerySubmitted", listener: (ev: Event) => void): void ;
    on(type: "QuerySubmitted", listener: (ev: Event) => void): void ;
    off(type: "QuerySubmitted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ResultSuggestionChosen", listener: (ev: Event) => void): void ;
    removeListener(type: "ResultSuggestionChosen", listener: (ev: Event) => void): void ;
    on(type: "ResultSuggestionChosen", listener: (ev: Event) => void): void ;
    off(type: "ResultSuggestionChosen", listener: (ev: Event) => void): void ;
    
    addListener(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    on(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    off(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    on(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    off(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SearchPaneQueryChangedEventArgs {
    language: String;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    queryText: String;
    constructor();

  }

  export class SearchPaneQueryLinguisticDetails {
    queryTextAlternatives: Object;
    queryTextCompositionLength: Number;
    queryTextCompositionStart: Number;
    constructor();

  }

  export class SearchPaneQuerySubmittedEventArgs {
    language: String;
    queryText: String;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    constructor();

  }

  export class SearchPaneResultSuggestionChosenEventArgs {
    tag: String;
    constructor();

  }

  export class SearchPaneSuggestionsRequest {
    isCanceled: Boolean;
    searchSuggestionCollection: SearchSuggestionCollection;
    constructor();

    getDeferral(): SearchPaneSuggestionsRequestDeferral;

  }

  export class SearchPaneSuggestionsRequestDeferral {
    constructor();

    complete(): void;

  }

  export class SearchPaneSuggestionsRequestedEventArgs {
    language: String;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    queryText: String;
    request: SearchPaneSuggestionsRequest;
    constructor();

  }

  export class SearchPaneVisibilityChangedEventArgs {
    visible: Boolean;
    constructor();

  }

  export class SearchQueryLinguisticDetails {
    queryTextAlternatives: Object;
    queryTextCompositionLength: Number;
    queryTextCompositionStart: Number;
    constructor();
    constructor(queryTextAlternatives: Object, queryTextCompositionStart: Number, queryTextCompositionLength: Number);

  }

  export class SearchSuggestionCollection {
    size: Number;
    constructor();

    appendQuerySuggestion(text: String): void;

    appendQuerySuggestions(suggestions: Object): void;

    appendResultSuggestion(text: String, detailText: String, tag: String, image: Object, imageAlternateText: String): void;

    appendSearchSeparator(label: String): void;

  }

  export class SearchSuggestionsRequest {
    isCanceled: Boolean;
    searchSuggestionCollection: SearchSuggestionCollection;
    constructor();

    getDeferral(): SearchSuggestionsRequestDeferral;

  }

  export class SearchSuggestionsRequestDeferral {
    constructor();

    complete(): void;

  }

export const ISearchPaneQueryChangedEventArgs: any;
export const LocalContentSuggestionSettings: any;
export const SearchPane: any;
export const SearchPaneQueryChangedEventArgs: any;
export const SearchPaneQueryLinguisticDetails: any;
export const SearchPaneQuerySubmittedEventArgs: any;
export const SearchPaneResultSuggestionChosenEventArgs: any;
export const SearchPaneSuggestionsRequest: any;
export const SearchPaneSuggestionsRequestDeferral: any;
export const SearchPaneSuggestionsRequestedEventArgs: any;
export const SearchPaneVisibilityChangedEventArgs: any;
export const SearchQueryLinguisticDetails: any;
export const SearchSuggestionCollection: any;
export const SearchSuggestionsRequest: any;
export const SearchSuggestionsRequestDeferral: any;
export * as core from "./applicationmodel.search.core.js";
