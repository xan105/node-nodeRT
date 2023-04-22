  export class SearchContract {
    constructor();
  }

  export class SearchPaneVisibilityChangedEventArgs {
    visible: boolean;
    constructor();

  }

  export class ISearchPaneQueryChangedEventArgs {
    language: string;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    queryText: string;
    constructor();

  }

  export class SearchPaneQueryChangedEventArgs {
    language: string;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    queryText: string;
    constructor();

  }

  export class SearchPaneQuerySubmittedEventArgs {
    language: string;
    queryText: string;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    constructor();

  }

  export class SearchPaneResultSuggestionChosenEventArgs {
    tag: string;
    constructor();

  }

  export class SearchPaneSuggestionsRequestDeferral {
    constructor();

    complete(): void;

  }

  export class SearchPaneSuggestionsRequest {
    isCanceled: boolean;
    searchSuggestionCollection: SearchSuggestionCollection;
    constructor();

    getDeferral(): SearchPaneSuggestionsRequestDeferral;

  }

  export class SearchPaneSuggestionsRequestedEventArgs {
    language: string;
    linguisticDetails: SearchPaneQueryLinguisticDetails;
    queryText: string;
    request: SearchPaneSuggestionsRequest;
    constructor();

  }

  export class SearchPane {
    showOnKeyboardInput: boolean;
    searchHistoryEnabled: boolean;
    searchHistoryContext: string;
    placeholderText: string;
    language: string;
    queryText: string;
    visible: boolean;
    constructor();

    static hideThisApplication(): void;


    static getForCurrentView(): SearchPane;


    setLocalContentSuggestionSettings(settings: LocalContentSuggestionSettings): void;

    show(): void;
    show(query: string): void;

    trySetQueryText(query: string): boolean;

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

  export class SearchPaneQueryLinguisticDetails {
    queryTextAlternatives: Object;
    queryTextCompositionLength: number;
    queryTextCompositionStart: number;
    constructor();

  }

  export class SearchSuggestionCollection {
    size: number;
    constructor();

    appendQuerySuggestion(text: string): void;

    appendQuerySuggestions(suggestions: Object): void;

    appendResultSuggestion(text: string, detailText: string, tag: string, image: Object, imageAlternateText: string): void;

    appendSearchSeparator(label: string): void;

  }

  export class LocalContentSuggestionSettings {
    enabled: boolean;
    aqsFilter: string;
    locations: Object;
    propertiesToMatch: Object;
    constructor();

  }

  export class SearchQueryLinguisticDetails {
    queryTextAlternatives: Object;
    queryTextCompositionLength: number;
    queryTextCompositionStart: number;
    constructor();
    constructor(queryTextAlternatives: Object, queryTextCompositionStart: number, queryTextCompositionLength: number);

  }

  export class SearchSuggestionsRequestDeferral {
    constructor();

    complete(): void;

  }

  export class SearchSuggestionsRequest {
    isCanceled: boolean;
    searchSuggestionCollection: SearchSuggestionCollection;
    constructor();

    getDeferral(): SearchSuggestionsRequestDeferral;

  }

export * as core from "./applicationmodel.search.core.js";