  export class Rect {
    constructor();
  }

  export class FontWeight {
    weight: Number;
    constructor();
  }

  export class Thickness {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class TextRange {
    startIndex: Number;
    length: Number;
    constructor();
  }

  export enum LogicalDirection {
    backward,
    forward,
  }

  export enum UnderlineStyle {
    none,
    single,
  }

  export class BlockCollection {
    constructor();

    getAt(index: Number): Block;

    getView(): Object;

    indexOf(value: Block, index: Number): Boolean;

    setAt(index: Number, value: Block): void;

    insertAt(index: Number, value: Block): void;

    removeAt(index: Number): void;

    append(value: Block): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class InlineCollection {
    constructor();

    getAt(index: Number): Inline;

    getView(): Object;

    indexOf(value: Inline, index: Number): Boolean;

    setAt(index: Number, value: Inline): void;

    insertAt(index: Number, value: Inline): void;

    removeAt(index: Number): void;

    append(value: Inline): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class TextHighlighter {
    static backgroundProperty: Object;
    static foregroundProperty: Object;
    foreground: Object;
    background: Object;
    ranges: Object;
    constructor();

  }

  export class TextPointer {
    logicalDirection: LogicalDirection;
    offset: Number;
    parent: Object;
    visualParent: Object;
    constructor();

    getCharacterRect(direction: LogicalDirection): Object;

    getPositionAtOffset(offset: Number, direction: LogicalDirection): TextPointer;

  }

  export class Typography {
    static annotationAlternatesProperty: Object;
    static capitalSpacingProperty: Object;
    static capitalsProperty: Object;
    static caseSensitiveFormsProperty: Object;
    static contextualAlternatesProperty: Object;
    static contextualLigaturesProperty: Object;
    static contextualSwashesProperty: Object;
    static discretionaryLigaturesProperty: Object;
    static eastAsianExpertFormsProperty: Object;
    static eastAsianLanguageProperty: Object;
    static eastAsianWidthsProperty: Object;
    static fractionProperty: Object;
    static historicalFormsProperty: Object;
    static historicalLigaturesProperty: Object;
    static kerningProperty: Object;
    static mathematicalGreekProperty: Object;
    static numeralAlignmentProperty: Object;
    static numeralStyleProperty: Object;
    static slashedZeroProperty: Object;
    static standardLigaturesProperty: Object;
    static standardSwashesProperty: Object;
    static stylisticAlternatesProperty: Object;
    static stylisticSet10Property: Object;
    static stylisticSet11Property: Object;
    static stylisticSet12Property: Object;
    static stylisticSet13Property: Object;
    static stylisticSet14Property: Object;
    static stylisticSet15Property: Object;
    static stylisticSet16Property: Object;
    static stylisticSet17Property: Object;
    static stylisticSet18Property: Object;
    static stylisticSet19Property: Object;
    static stylisticSet1Property: Object;
    static stylisticSet20Property: Object;
    static stylisticSet2Property: Object;
    static stylisticSet3Property: Object;
    static stylisticSet4Property: Object;
    static stylisticSet5Property: Object;
    static stylisticSet6Property: Object;
    static stylisticSet7Property: Object;
    static stylisticSet8Property: Object;
    static stylisticSet9Property: Object;
    static variantsProperty: Object;
    constructor();

    static setVariants(element: Object, value: Number): void;


    static getStylisticSet10(element: Object): Boolean;


    static setStylisticSet10(element: Object, value: Boolean): void;


    static getStylisticSet11(element: Object): Boolean;


    static setStylisticSet11(element: Object, value: Boolean): void;


    static getStylisticSet12(element: Object): Boolean;


    static setStylisticSet12(element: Object, value: Boolean): void;


    static getStylisticSet13(element: Object): Boolean;


    static setStylisticSet13(element: Object, value: Boolean): void;


    static getStylisticSet14(element: Object): Boolean;


    static setStylisticSet14(element: Object, value: Boolean): void;


    static getStylisticSet15(element: Object): Boolean;


    static setStylisticSet15(element: Object, value: Boolean): void;


    static getStylisticSet16(element: Object): Boolean;


    static setStylisticSet16(element: Object, value: Boolean): void;


    static getStylisticSet17(element: Object): Boolean;


    static setStylisticSet17(element: Object, value: Boolean): void;


    static getStylisticSet18(element: Object): Boolean;


    static setStylisticSet18(element: Object, value: Boolean): void;


    static getStylisticSet19(element: Object): Boolean;


    static setStylisticSet19(element: Object, value: Boolean): void;


    static getStylisticSet20(element: Object): Boolean;


    static setStylisticSet20(element: Object, value: Boolean): void;


    static getCapitals(element: Object): Number;


    static setCapitals(element: Object, value: Number): void;


    static getCapitalSpacing(element: Object): Boolean;


    static setCapitalSpacing(element: Object, value: Boolean): void;


    static getKerning(element: Object): Boolean;


    static setKerning(element: Object, value: Boolean): void;


    static getCaseSensitiveForms(element: Object): Boolean;


    static setCaseSensitiveForms(element: Object, value: Boolean): void;


    static getHistoricalForms(element: Object): Boolean;


    static setHistoricalForms(element: Object, value: Boolean): void;


    static getFraction(element: Object): Number;


    static setFraction(element: Object, value: Number): void;


    static getNumeralStyle(element: Object): Number;


    static setNumeralStyle(element: Object, value: Number): void;


    static getNumeralAlignment(element: Object): Number;


    static setNumeralAlignment(element: Object, value: Number): void;


    static getSlashedZero(element: Object): Boolean;


    static setSlashedZero(element: Object, value: Boolean): void;


    static getMathematicalGreek(element: Object): Boolean;


    static setMathematicalGreek(element: Object, value: Boolean): void;


    static getVariants(element: Object): Number;


    static getAnnotationAlternates(element: Object): Number;


    static setAnnotationAlternates(element: Object, value: Number): void;


    static getEastAsianExpertForms(element: Object): Boolean;


    static setEastAsianExpertForms(element: Object, value: Boolean): void;


    static getEastAsianLanguage(element: Object): Number;


    static setEastAsianLanguage(element: Object, value: Number): void;


    static getEastAsianWidths(element: Object): Number;


    static setEastAsianWidths(element: Object, value: Number): void;


    static getStandardLigatures(element: Object): Boolean;


    static setStandardLigatures(element: Object, value: Boolean): void;


    static getContextualLigatures(element: Object): Boolean;


    static setContextualLigatures(element: Object, value: Boolean): void;


    static getDiscretionaryLigatures(element: Object): Boolean;


    static setDiscretionaryLigatures(element: Object, value: Boolean): void;


    static getHistoricalLigatures(element: Object): Boolean;


    static setHistoricalLigatures(element: Object, value: Boolean): void;


    static getStandardSwashes(element: Object): Number;


    static setStandardSwashes(element: Object, value: Number): void;


    static getContextualSwashes(element: Object): Number;


    static setContextualSwashes(element: Object, value: Number): void;


    static getContextualAlternates(element: Object): Boolean;


    static setContextualAlternates(element: Object, value: Boolean): void;


    static getStylisticAlternates(element: Object): Number;


    static setStylisticAlternates(element: Object, value: Number): void;


    static getStylisticSet1(element: Object): Boolean;


    static setStylisticSet1(element: Object, value: Boolean): void;


    static getStylisticSet2(element: Object): Boolean;


    static setStylisticSet2(element: Object, value: Boolean): void;


    static getStylisticSet3(element: Object): Boolean;


    static setStylisticSet3(element: Object, value: Boolean): void;


    static getStylisticSet4(element: Object): Boolean;


    static setStylisticSet4(element: Object, value: Boolean): void;


    static getStylisticSet5(element: Object): Boolean;


    static setStylisticSet5(element: Object, value: Boolean): void;


    static getStylisticSet6(element: Object): Boolean;


    static setStylisticSet6(element: Object, value: Boolean): void;


    static getStylisticSet7(element: Object): Boolean;


    static setStylisticSet7(element: Object, value: Boolean): void;


    static getStylisticSet8(element: Object): Boolean;


    static setStylisticSet8(element: Object, value: Boolean): void;


    static getStylisticSet9(element: Object): Boolean;


    static setStylisticSet9(element: Object, value: Boolean): void;


  }

  export class ContentLinkInvokedEventArgs {
    handled: Boolean;
    contentLinkInfo: Object;
    constructor();

  }

  export class ContentLinkProviderCollection {
    constructor();

    getAt(index: Number): ContentLinkProvider;

    getView(): Object;

    indexOf(value: ContentLinkProvider, index: Number): Boolean;

    setAt(index: Number, value: ContentLinkProvider): void;

    insertAt(index: Number, value: ContentLinkProvider): void;

    removeAt(index: Number): void;

    append(value: ContentLinkProvider): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class TextElement {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    findName(name: String): Object;

    onDisconnectVisualChildren(): void;

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TextHighlighterBase {
    dispatcher: Object;
    constructor();

  }

  export class Block {
    static lineHeightProperty: Object;
    static lineStackingStrategyProperty: Object;
    static marginProperty: Object;
    static textAlignmentProperty: Object;
    static horizontalTextAlignmentProperty: Object;
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    textAlignment: Number;
    margin: Thickness;
    lineStackingStrategy: Number;
    lineHeight: Number;
    horizontalTextAlignment: Number;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Inline {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class InlineUIContainer {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    child: Object;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LineBreak {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Paragraph {
    static textIndentProperty: Object;
    static lineHeightProperty: Object;
    static lineStackingStrategyProperty: Object;
    static marginProperty: Object;
    static textAlignmentProperty: Object;
    static horizontalTextAlignmentProperty: Object;
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    textIndent: Number;
    inlines: InlineCollection;
    textAlignment: Number;
    margin: Thickness;
    lineStackingStrategy: Number;
    lineHeight: Number;
    horizontalTextAlignment: Number;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Run {
    static flowDirectionProperty: Object;
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    text: String;
    flowDirection: Number;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Span {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    inlines: InlineCollection;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Bold {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    inlines: InlineCollection;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Italic {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    inlines: InlineCollection;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Underline {
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    inlines: InlineCollection;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ContentLinkProvider {
    dispatcher: Object;
    constructor();

  }

  export class ContactContentLinkProvider {
    dispatcher: Object;
    constructor();

  }

  export class PlaceContentLinkProvider {
    dispatcher: Object;
    constructor();

  }

  export class ContentLink {
    static backgroundProperty: Object;
    static cursorProperty: Object;
    static elementSoundModeProperty: Object;
    static focusStateProperty: Object;
    static isTabStopProperty: Object;
    static tabIndexProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static xYFocusUpProperty: Object;
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    xYFocusUpNavigationStrategy: Number;
    xYFocusUp: Object;
    xYFocusRightNavigationStrategy: Number;
    xYFocusRight: Object;
    xYFocusLeftNavigationStrategy: Number;
    xYFocusLeft: Object;
    xYFocusDownNavigationStrategy: Number;
    xYFocusDown: Object;
    tabIndex: Number;
    isTabStop: Boolean;
    info: Object;
    elementSoundMode: Number;
    cursor: Number;
    background: Object;
    focusState: Number;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    focus(value: Number): Boolean;

    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Invoked", listener: (ev: Event) => void): void ;
    removeListener(type: "Invoked", listener: (ev: Event) => void): void ;
    on(type: "Invoked", listener: (ev: Event) => void): void ;
    off(type: "Invoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Hyperlink {
    static navigateUriProperty: Object;
    static underlineStyleProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static elementSoundModeProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static focusStateProperty: Object;
    static isTabStopProperty: Object;
    static tabIndexProperty: Object;
    static languageProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontFamilyProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static characterSpacingProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static accessKeyProperty: Object;
    static textDecorationsProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    navigateUri: Object;
    underlineStyle: UnderlineStyle;
    xYFocusUp: Object;
    xYFocusRight: Object;
    xYFocusLeft: Object;
    xYFocusDown: Object;
    elementSoundMode: Number;
    xYFocusDownNavigationStrategy: Number;
    xYFocusUpNavigationStrategy: Number;
    xYFocusRightNavigationStrategy: Number;
    xYFocusLeftNavigationStrategy: Number;
    focusState: Number;
    isTabStop: Boolean;
    tabIndex: Number;
    inlines: InlineCollection;
    fontSize: Number;
    fontFamily: Object;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: Number;
    fontStretch: Number;
    characterSpacing: Number;
    language: String;
    contentEnd: TextPointer;
    elementEnd: TextPointer;
    elementStart: TextPointer;
    contentStart: TextPointer;
    name: String;
    isTextScaleFactorEnabled: Boolean;
    accessKey: String;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    allowFocusOnInteraction: Boolean;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    isAccessKeyScope: Boolean;
    accessKeyScopeOwner: Object;
    textDecorations: Number;
    dispatcher: Object;
    constructor();

    focus(value: Number): Boolean;

    addListener(type: "Click", listener: (ev: Event) => void): void ;
    removeListener(type: "Click", listener: (ev: Event) => void): void ;
    on(type: "Click", listener: (ev: Event) => void): void ;
    off(type: "Click", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HyperlinkClickEventArgs {
    originalSource: Object;
    constructor();

  }

  export class Glyphs {
    static fillProperty: Object;
    static fontRenderingEmSizeProperty: Object;
    static fontUriProperty: Object;
    static indicesProperty: Object;
    static originXProperty: Object;
    static originYProperty: Object;
    static styleSimulationsProperty: Object;
    static unicodeStringProperty: Object;
    static colorFontPaletteIndexProperty: Object;
    static isColorFontEnabledProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    unicodeString: String;
    styleSimulations: Number;
    originY: Number;
    originX: Number;
    indices: String;
    fontUri: Object;
    fontRenderingEmSize: Number;
    fill: Object;
    isColorFontEnabled: Boolean;
    colorFontPaletteIndex: Number;
    flowDirection: Number;
    minWidth: Number;
    minHeight: Number;
    maxWidth: Number;
    maxHeight: Number;
    margin: Thickness;
    language: String;
    name: String;
    horizontalAlignment: Number;
    height: Number;
    dataContext: Object;
    resources: Object;
    width: Number;
    tag: Object;
    style: Object;
    verticalAlignment: Number;
    actualHeight: Number;
    actualWidth: Number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: Number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: Boolean;
    allowFocusOnInteraction: Boolean;
    actualTheme: Number;
    manipulationMode: Number;
    isTapEnabled: Boolean;
    isRightTapEnabled: Boolean;
    isHoldingEnabled: Boolean;
    isHitTestVisible: Boolean;
    isDoubleTapEnabled: Boolean;
    opacity: Number;
    cacheMode: Object;
    allowDrop: Boolean;
    clip: Object;
    visibility: Number;
    useLayoutRounding: Boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: Number;
    transform3D: Object;
    canDrag: Boolean;
    accessKey: String;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    contextFlyout: Object;
    isAccessKeyScope: Boolean;
    xYFocusDownNavigationStrategy: Number;
    xYFocusLeftNavigationStrategy: Number;
    tabFocusNavigation: Number;
    xYFocusKeyboardNavigation: Number;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    highContrastAdjustment: Number;
    xYFocusUpNavigationStrategy: Number;
    xYFocusRightNavigationStrategy: Number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: Number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

