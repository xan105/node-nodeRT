  export class SearchCoreContract {
    constructor();
  }

  export enum SearchSuggestionKind {
    query,
    result,
    separator,
  }

  export class SearchSuggestion {
    detailText: string;
    image: Object;
    imageAlternateText: string;
    kind: SearchSuggestionKind;
    tag: string;
    text: string;
    constructor();

  }

  export class SearchSuggestionManager {
    searchHistoryEnabled: boolean;
    searchHistoryContext: string;
    suggestions: Object;
    constructor();

    setLocalContentSuggestionSettings(settings: Object): void;

    setQuery(queryText: string): void;
    setQuery(queryText: string, language: string): void;
    setQuery(queryText: string, language: string, linguisticDetails: Object): void;

    addToHistory(queryText: string): void;
    addToHistory(queryText: string, language: string): void;

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
    language: string;
    linguisticDetails: Object;
    queryText: string;
    request: Object;
    constructor();

  }

  export class RequestingFocusOnKeyboardInputEventArgs {
    constructor();

  }

