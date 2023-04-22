  export class Color {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class FontWeight {
    weight: number;
    constructor();
  }

  export enum CaretType {
    normal,
    null,
  }

  export enum FindOptions {
    none,
    word,
    case,
  }

  export enum FormatEffect {
    off,
    on,
    toggle,
    undefined,
  }

  export enum HorizontalCharacterAlignment {
    left,
    right,
    center,
  }

  export enum LetterCase {
    lower,
    upper,
  }

  export enum LineSpacingRule {
    undefined,
    single,
    oneAndHalf,
    double,
    atLeast,
    exactly,
    multiple,
    percent,
  }

  export enum LinkType {
    undefined,
    notALink,
    clientLink,
    friendlyLinkName,
    friendlyLinkAddress,
    autoLink,
    autoLinkEmail,
    autoLinkPhone,
    autoLinkPath,
  }

  export enum MarkerAlignment {
    undefined,
    left,
    center,
    right,
  }

  export enum MarkerStyle {
    undefined,
    parenthesis,
    parentheses,
    period,
    plain,
    minus,
    noNumber,
  }

  export enum MarkerType {
    undefined,
    none,
    bullet,
    arabic,
    lowercaseEnglishLetter,
    uppercaseEnglishLetter,
    lowercaseRoman,
    uppercaseRoman,
    unicodeSequence,
    circledNumber,
    blackCircleWingding,
    whiteCircleWingding,
    arabicWide,
    simplifiedChinese,
    traditionalChinese,
    japanSimplifiedChinese,
    japanKorea,
    arabicDictionary,
    arabicAbjad,
    hebrew,
    thaiAlphabetic,
    thaiNumeric,
    devanagariVowel,
    devanagariConsonant,
    devanagariNumeric,
  }

  export enum ParagraphAlignment {
    undefined,
    left,
    center,
    right,
    justify,
  }

  export enum ParagraphStyle {
    undefined,
    none,
    normal,
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    heading7,
    heading8,
    heading9,
  }

  export enum PointOptions {
    none,
    includeInset,
    start,
    clientCoordinates,
    allowOffClient,
    transform,
    noHorizontalScroll,
    noVerticalScroll,
  }

  export enum RangeGravity {
    uIBehavior,
    backward,
    forward,
    inward,
    outward,
  }

  export enum SelectionOptions {
    startActive,
    atEndOfLine,
    overtype,
    active,
    replace,
  }

  export enum SelectionType {
    none,
    insertionPoint,
    normal,
    inlineShape,
    shape,
  }

  export enum TabAlignment {
    left,
    center,
    right,
    decimal,
    bar,
  }

  export enum TabLeader {
    spaces,
    dots,
    dashes,
    lines,
    thickLines,
    equals,
  }

  export enum TextGetOptions {
    none,
    adjustCrlf,
    useCrlf,
    useObjectText,
    allowFinalEop,
    noHidden,
    includeNumbering,
    formatRtf,
    useLf,
  }

  export enum TextSetOptions {
    none,
    unicodeBidi,
    unlink,
    unhide,
    checkTextLimit,
    formatRtf,
    applyRtfDocumentDefaults,
  }

  export enum TextRangeUnit {
    character,
    word,
    sentence,
    paragraph,
    line,
    story,
    screen,
    section,
    window,
    characterFormat,
    paragraphFormat,
    object,
    hardParagraph,
    cluster,
    bold,
    italic,
    underline,
    strikethrough,
    protectedText,
    link,
    smallCaps,
    allCaps,
    hidden,
    outline,
    shadow,
    imprint,
    disabled,
    revised,
    subscript,
    superscript,
    fontBound,
    linkProtected,
    contentLink,
  }

  export enum TextScript {
    undefined,
    ansi,
    eastEurope,
    cyrillic,
    greek,
    turkish,
    hebrew,
    arabic,
    baltic,
    vietnamese,
    default,
    symbol,
    thai,
    shiftJis,
    gB2312,
    hangul,
    big5,
    pC437,
    oem,
    mac,
    armenian,
    syriac,
    thaana,
    devanagari,
    bengali,
    gurmukhi,
    gujarati,
    oriya,
    tamil,
    telugu,
    kannada,
    malayalam,
    sinhala,
    lao,
    tibetan,
    myanmar,
    georgian,
    jamo,
    ethiopic,
    cherokee,
    aboriginal,
    ogham,
    runic,
    khmer,
    mongolian,
    braille,
    yi,
    limbu,
    taiLe,
    newTaiLue,
    sylotiNagri,
    kharoshthi,
    kayahli,
    unicodeSymbol,
    emoji,
    glagolitic,
    lisu,
    vai,
    nKo,
    osmanya,
    phagsPa,
    gothic,
    deseret,
    tifinagh,
  }

  export enum UnderlineType {
    undefined,
    none,
    single,
    words,
    double,
    dotted,
    dash,
    dashDot,
    dashDotDot,
    wave,
    thick,
    thin,
    doubleWave,
    heavyWave,
    longDash,
    thickDash,
    thickDashDot,
    thickDashDotDot,
    thickDotted,
    thickLongDash,
  }

  export enum VerticalCharacterAlignment {
    top,
    baseline,
    bottom,
  }

  export enum FontStretch {
    undefined,
    ultraCondensed,
    extraCondensed,
    condensed,
    semiCondensed,
    normal,
    semiExpanded,
    expanded,
    extraExpanded,
    ultraExpanded,
  }

  export enum FontStyle {
    normal,
    oblique,
    italic,
  }

  export enum TextDecorations {
    none,
    underline,
    strikethrough,
  }

  export class TextConstants {
    static autoColor: Object;
    static maxUnitCount: number;
    static minUnitCount: number;
    static undefinedColor: Object;
    static undefinedFloatValue: number;
    static undefinedFontStretch: FontStretch;
    static undefinedFontStyle: FontStyle;
    static undefinedInt32Value: number;
    constructor();

  }

  export class ITextDocument {
    caretType: CaretType;
    defaultTabStop: number;
    selection: ITextSelection;
    undoLimit: number;
    constructor();

    canCopy(): boolean;

    canPaste(): boolean;

    canRedo(): boolean;

    canUndo(): boolean;

    applyDisplayUpdates(): number;

    batchDisplayUpdates(): number;

    beginUndoGroup(): void;

    endUndoGroup(): void;

    getDefaultCharacterFormat(): ITextCharacterFormat;

    getDefaultParagraphFormat(): ITextParagraphFormat;

    getRange(startPosition: number, endPosition: number): ITextRange;

    getRangeFromPoint(point: Object, options: PointOptions): ITextRange;

    getText(options: TextGetOptions, value: string): void;

    loadFromStream(options: TextSetOptions, value: Object): void;

    redo(): void;

    saveToStream(options: TextGetOptions, value: Object): void;

    setDefaultCharacterFormat(value: ITextCharacterFormat): void;

    setDefaultParagraphFormat(value: ITextParagraphFormat): void;

    setText(options: TextSetOptions, value: string): void;

    undo(): void;

  }

  export class ITextRange {
    character: string;
    characterFormat: ITextCharacterFormat;
    endPosition: number;
    formattedText: ITextRange;
    gravity: RangeGravity;
    length: number;
    link: string;
    paragraphFormat: ITextParagraphFormat;
    startPosition: number;
    storyLength: number;
    text: string;
    constructor();

    canPaste(format: number): boolean;

    changeCase(value: LetterCase): void;

    collapse(value: boolean): void;

    copy(): void;

    cut(): void;

    delete(unit: TextRangeUnit, count: number): number;

    endOf(unit: TextRangeUnit, extend: boolean): number;

    expand(unit: TextRangeUnit): number;

    findText(value: string, scanLength: number, options: FindOptions): number;

    getCharacterUtf32(value: number, offset: number): void;

    getClone(): ITextRange;

    getIndex(unit: TextRangeUnit): number;

    getPoint(horizontalAlign: HorizontalCharacterAlignment, verticalAlign: VerticalCharacterAlignment, options: PointOptions, point: Object): void;

    getRect(options: PointOptions, rect: Object, hit: number): void;

    getText(options: TextGetOptions, value: string): void;

    getTextViaStream(options: TextGetOptions, value: Object): void;

    inRange(range: ITextRange): boolean;

    insertImage(width: number, height: number, ascent: number, verticalAlign: VerticalCharacterAlignment, alternateText: string, value: Object): void;

    inStory(range: ITextRange): boolean;

    isEqual(range: ITextRange): boolean;

    move(unit: TextRangeUnit, count: number): number;

    moveEnd(unit: TextRangeUnit, count: number): number;

    moveStart(unit: TextRangeUnit, count: number): number;

    paste(format: number): void;

    scrollIntoView(value: PointOptions): void;

    matchSelection(): void;

    setIndex(unit: TextRangeUnit, index: number, extend: boolean): void;

    setPoint(point: Object, options: PointOptions, extend: boolean): void;

    setRange(startPosition: number, endPosition: number): void;

    setText(options: TextSetOptions, value: string): void;

    setTextViaStream(options: TextSetOptions, value: Object): void;

    startOf(unit: TextRangeUnit, extend: boolean): number;

  }

  export class ITextSelection {
    options: SelectionOptions;
    type: SelectionType;
    constructor();

    endKey(unit: TextRangeUnit, extend: boolean): number;

    homeKey(unit: TextRangeUnit, extend: boolean): number;

    moveDown(unit: TextRangeUnit, count: number, extend: boolean): number;

    moveLeft(unit: TextRangeUnit, count: number, extend: boolean): number;

    moveRight(unit: TextRangeUnit, count: number, extend: boolean): number;

    moveUp(unit: TextRangeUnit, count: number, extend: boolean): number;

    typeText(value: string): void;

  }

  export class ITextCharacterFormat {
    allCaps: FormatEffect;
    backgroundColor: Object;
    bold: FormatEffect;
    fontStretch: FontStretch;
    fontStyle: FontStyle;
    foregroundColor: Object;
    hidden: FormatEffect;
    italic: FormatEffect;
    kerning: number;
    languageTag: string;
    linkType: LinkType;
    name: string;
    outline: FormatEffect;
    position: number;
    protectedText: FormatEffect;
    size: number;
    smallCaps: FormatEffect;
    spacing: number;
    strikethrough: FormatEffect;
    subscript: FormatEffect;
    superscript: FormatEffect;
    textScript: TextScript;
    underline: UnderlineType;
    weight: number;
    constructor();

    setClone(value: ITextCharacterFormat): void;

    getClone(): ITextCharacterFormat;

    isEqual(format: ITextCharacterFormat): boolean;

  }

  export class ITextParagraphFormat {
    alignment: ParagraphAlignment;
    firstLineIndent: number;
    keepTogether: FormatEffect;
    keepWithNext: FormatEffect;
    leftIndent: number;
    lineSpacing: number;
    lineSpacingRule: LineSpacingRule;
    listAlignment: MarkerAlignment;
    listLevelIndex: number;
    listStart: number;
    listStyle: MarkerStyle;
    listTab: number;
    listType: MarkerType;
    noLineNumber: FormatEffect;
    pageBreakBefore: FormatEffect;
    rightIndent: number;
    rightToLeft: FormatEffect;
    spaceAfter: number;
    spaceBefore: number;
    style: ParagraphStyle;
    tabCount: number;
    widowControl: FormatEffect;
    constructor();

    addTab(position: number, align: TabAlignment, leader: TabLeader): void;

    clearAllTabs(): void;

    deleteTab(position: number): void;

    getClone(): ITextParagraphFormat;

    getTab(index: number, position: number, align: TabAlignment, leader: TabLeader): void;

    isEqual(format: ITextParagraphFormat): boolean;

    setClone(format: ITextParagraphFormat): void;

    setIndents(start: number, left: number, right: number): void;

    setLineSpacing(rule: LineSpacingRule, spacing: number): void;

  }

  export class RichEditTextDocument {
    undoLimit: number;
    defaultTabStop: number;
    caretType: CaretType;
    selection: ITextSelection;
    ignoreTrailingCharacterSpacing: boolean;
    alignmentIncludesTrailingWhitespace: boolean;
    constructor();

    canCopy(): boolean;

    canPaste(): boolean;

    canRedo(): boolean;

    canUndo(): boolean;

    applyDisplayUpdates(): number;

    batchDisplayUpdates(): number;

    beginUndoGroup(): void;

    endUndoGroup(): void;

    getDefaultCharacterFormat(): ITextCharacterFormat;

    getDefaultParagraphFormat(): ITextParagraphFormat;

    getRange(startPosition: number, endPosition: number): ITextRange;

    getRangeFromPoint(point: Object, options: PointOptions): ITextRange;

    getText(options: TextGetOptions, value: string): void;

    loadFromStream(options: TextSetOptions, value: Object): void;

    redo(): void;

    saveToStream(options: TextGetOptions, value: Object): void;

    setDefaultCharacterFormat(value: ITextCharacterFormat): void;

    setDefaultParagraphFormat(value: ITextParagraphFormat): void;

    setText(options: TextSetOptions, value: string): void;

    undo(): void;

  }

  export class RichEditTextRange {
    contentLinkInfo: ContentLinkInfo;
    text: string;
    startPosition: number;
    paragraphFormat: ITextParagraphFormat;
    link: string;
    gravity: RangeGravity;
    formattedText: ITextRange;
    endPosition: number;
    characterFormat: ITextCharacterFormat;
    character: string;
    length: number;
    storyLength: number;
    constructor();

    startOf(unit: TextRangeUnit, extend: boolean): number;

    canPaste(format: number): boolean;

    changeCase(value: LetterCase): void;

    collapse(value: boolean): void;

    copy(): void;

    cut(): void;

    delete(unit: TextRangeUnit, count: number): number;

    endOf(unit: TextRangeUnit, extend: boolean): number;

    expand(unit: TextRangeUnit): number;

    findText(value: string, scanLength: number, options: FindOptions): number;

    getCharacterUtf32(value: number, offset: number): void;

    getClone(): ITextRange;

    getIndex(unit: TextRangeUnit): number;

    getPoint(horizontalAlign: HorizontalCharacterAlignment, verticalAlign: VerticalCharacterAlignment, options: PointOptions, point: Object): void;

    getRect(options: PointOptions, rect: Object, hit: number): void;

    getText(options: TextGetOptions, value: string): void;

    getTextViaStream(options: TextGetOptions, value: Object): void;

    inRange(range: ITextRange): boolean;

    insertImage(width: number, height: number, ascent: number, verticalAlign: VerticalCharacterAlignment, alternateText: string, value: Object): void;

    inStory(range: ITextRange): boolean;

    isEqual(range: ITextRange): boolean;

    move(unit: TextRangeUnit, count: number): number;

    moveEnd(unit: TextRangeUnit, count: number): number;

    moveStart(unit: TextRangeUnit, count: number): number;

    paste(format: number): void;

    scrollIntoView(value: PointOptions): void;

    matchSelection(): void;

    setIndex(unit: TextRangeUnit, index: number, extend: boolean): void;

    setPoint(point: Object, options: PointOptions, extend: boolean): void;

    setRange(startPosition: number, endPosition: number): void;

    setText(options: TextSetOptions, value: string): void;

    setTextViaStream(options: TextSetOptions, value: Object): void;

  }

  export class ContentLinkInfo {
    uri: Object;
    secondaryText: string;
    linkContentKind: string;
    id: number;
    displayText: string;
    constructor();

  }

  export class FontWeights {
    static black: FontWeight;
    static bold: FontWeight;
    static extraBlack: FontWeight;
    static extraBold: FontWeight;
    static extraLight: FontWeight;
    static light: FontWeight;
    static medium: FontWeight;
    static normal: FontWeight;
    static semiBold: FontWeight;
    static semiLight: FontWeight;
    static thin: FontWeight;
    constructor();

  }

export * as core from "./ui.text.core.js";