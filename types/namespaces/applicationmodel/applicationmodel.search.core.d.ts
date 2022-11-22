  export class SearchCoreContract {
    constructor();
  }

  export enum SearchSuggestionKind {
    query,
    result,
    separator,
  }

  export class SearchSuggestion {
    detailText: String;
    image: Object;
    imageAlternateText: String;
    kind: SearchSuggestionKind;
    tag: String;
    text: String;
    constructor();

  }

  export class SearchSuggestionManager {
    searchHistoryEnabled: Boolean;
    searchHistoryContext: String;
    suggestions: Object;
    constructor();

    setLocalContentSuggestionSettings(settings: Object): void;

    setQuery(queryText: String): void;
    setQuery(queryText: String, language: String): void;
    setQuery(queryText: String, language: String, linguisticDetails: Object): void;

    addToHistory(queryText: String): void;
    addToHistory(queryText: String, language: String): void;

    clearHistory(): void;

    addListener(type: "RequestingFocusOnKeyboardInput", listener: (ev: Event) => void): void ;
    removeListener(type: "RequestingFocusOnKeyboardInput", listener: (ev: Event) => void): void ;
    on(type: "RequestingFocusOnKeyboardInput", listener: (ev: Event) => void): void ;
    off(type: "RequestingFocusOnKeyboardInput", listener: (ev: Event) => void): void ;
    
    addListener(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    on(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    off(type: "SuggestionsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SearchSuggestionsRequestedEventArgs {
    language: String;
    linguisticDetails: Object;
    queryText: String;
    request: Object;
    constructor();

  }

  export class RequestingFocusOnKeyboardInputEventArgs {
    constructor();

  }

