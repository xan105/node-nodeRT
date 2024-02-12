  export class Color {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class FontWeight {
    weight: Number;
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

  export enum RichEditMathMode {
    noMath,
    mathOnly,
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

  export enum TextDecorations {
    none,
    underline,
    strikethrough,
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

  export enum TextSetOptions {
    none,
    unicodeBidi,
    unlink,
    unhide,
    checkTextLimit,
    formatRtf,
    applyRtfDocumentDefaults,
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

  export class ContentLinkInfo {
    uri: Object;
    secondaryText: String;
    linkContentKind: String;
    id: Number;
    displayText: String;
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

  export class ITextCharacterFormat {
    allCaps: FormatEffect;
    backgroundColor: Object;
    bold: FormatEffect;
    fontStretch: FontStretch;
    fontStyle: FontStyle;
    foregroundColor: Object;
    hidden: FormatEffect;
    italic: FormatEffect;
    kerning: Number;
    languageTag: String;
    linkType: LinkType;
    name: String;
    outline: FormatEffect;
    position: Number;
    protectedText: FormatEffect;
    size: Number;
    smallCaps: FormatEffect;
    spacing: Number;
    strikethrough: FormatEffect;
    subscript: FormatEffect;
    superscript: FormatEffect;
    textScript: TextScript;
    underline: UnderlineType;
    weight: Number;
    constructor();

    setClone(value: ITextCharacterFormat): void;

    getClone(): ITextCharacterFormat;

    isEqual(format: ITextCharacterFormat): Boolean;

  }

  export class ITextDocument {
    caretType: CaretType;
    defaultTabStop: Number;
    selection: ITextSelection;
    undoLimit: Number;
    constructor();

    canCopy(): Boolean;

    canPaste(): Boolean;

    canRedo(): Boolean;

    canUndo(): Boolean;

    applyDisplayUpdates(): Number;

    batchDisplayUpdates(): Number;

    beginUndoGroup(): void;

    endUndoGroup(): void;

    getDefaultCharacterFormat(): ITextCharacterFormat;

    getDefaultParagraphFormat(): ITextParagraphFormat;

    getRange(startPosition: Number, endPosition: Number): ITextRange;

    getRangeFromPoint(point: Object, options: PointOptions): ITextRange;

    getText(options: TextGetOptions, value: String): void;

    loadFromStream(options: TextSetOptions, value: Object): void;

    redo(): void;

    saveToStream(options: TextGetOptions, value: Object): void;

    setDefaultCharacterFormat(value: ITextCharacterFormat): void;

    setDefaultParagraphFormat(value: ITextParagraphFormat): void;

    setText(options: TextSetOptions, value: String): void;

    undo(): void;

  }

  export class ITextParagraphFormat {
    alignment: ParagraphAlignment;
    firstLineIndent: Number;
    keepTogether: FormatEffect;
    keepWithNext: FormatEffect;
    leftIndent: Number;
    lineSpacing: Number;
    lineSpacingRule: LineSpacingRule;
    listAlignment: MarkerAlignment;
    listLevelIndex: Number;
    listStart: Number;
    listStyle: MarkerStyle;
    listTab: Number;
    listType: MarkerType;
    noLineNumber: FormatEffect;
    pageBreakBefore: FormatEffect;
    rightIndent: Number;
    rightToLeft: FormatEffect;
    spaceAfter: Number;
    spaceBefore: Number;
    style: ParagraphStyle;
    tabCount: Number;
    widowControl: FormatEffect;
    constructor();

    addTab(position: Number, align: TabAlignment, leader: TabLeader): void;

    clearAllTabs(): void;

    deleteTab(position: Number): void;

    getClone(): ITextParagraphFormat;

    getTab(index: Number, position: Number, align: TabAlignment, leader: TabLeader): void;

    isEqual(format: ITextParagraphFormat): Boolean;

    setClone(format: ITextParagraphFormat): void;

    setIndents(start: Number, left: Number, right: Number): void;

    setLineSpacing(rule: LineSpacingRule, spacing: Number): void;

  }

  export class ITextRange {
    character: String;
    characterFormat: ITextCharacterFormat;
    endPosition: Number;
    formattedText: ITextRange;
    gravity: RangeGravity;
    length: Number;
    link: String;
    paragraphFormat: ITextParagraphFormat;
    startPosition: Number;
    storyLength: Number;
    text: String;
    constructor();

    canPaste(format: Number): Boolean;

    changeCase(value: LetterCase): void;

    collapse(value: Boolean): void;

    copy(): void;

    cut(): void;

    delete(unit: TextRangeUnit, count: Number): Number;

    endOf(unit: TextRangeUnit, extend: Boolean): Number;

    expand(unit: TextRangeUnit): Number;

    findText(value: String, scanLength: Number, options: FindOptions): Number;

    getCharacterUtf32(value: Number, offset: Number): void;

    getClone(): ITextRange;

    getIndex(unit: TextRangeUnit): Number;

    getPoint(horizontalAlign: HorizontalCharacterAlignment, verticalAlign: VerticalCharacterAlignment, options: PointOptions, point: Object): void;

    getRect(options: PointOptions, rect: Object, hit: Number): void;

    getText(options: TextGetOptions, value: String): void;

    getTextViaStream(options: TextGetOptions, value: Object): void;

    inRange(range: ITextRange): Boolean;

    insertImage(width: Number, height: Number, ascent: Number, verticalAlign: VerticalCharacterAlignment, alternateText: String, value: Object): void;

    inStory(range: ITextRange): Boolean;

    isEqual(range: ITextRange): Boolean;

    move(unit: TextRangeUnit, count: Number): Number;

    moveEnd(unit: TextRangeUnit, count: Number): Number;

    moveStart(unit: TextRangeUnit, count: Number): Number;

    paste(format: Number): void;

    scrollIntoView(value: PointOptions): void;

    matchSelection(): void;

    setIndex(unit: TextRangeUnit, index: Number, extend: Boolean): void;

    setPoint(point: Object, options: PointOptions, extend: Boolean): void;

    setRange(startPosition: Number, endPosition: Number): void;

    setText(options: TextSetOptions, value: String): void;

    setTextViaStream(options: TextSetOptions, value: Object): void;

    startOf(unit: TextRangeUnit, extend: Boolean): Number;

  }

  export class ITextSelection {
    options: SelectionOptions;
    type: SelectionType;
    constructor();

    endKey(unit: TextRangeUnit, extend: Boolean): Number;

    homeKey(unit: TextRangeUnit, extend: Boolean): Number;

    moveDown(unit: TextRangeUnit, count: Number, extend: Boolean): Number;

    moveLeft(unit: TextRangeUnit, count: Number, extend: Boolean): Number;

    moveRight(unit: TextRangeUnit, count: Number, extend: Boolean): Number;

    moveUp(unit: TextRangeUnit, count: Number, extend: Boolean): Number;

    typeText(value: String): void;

  }

  export class RichEditTextDocument {
    undoLimit: Number;
    defaultTabStop: Number;
    caretType: CaretType;
    selection: ITextSelection;
    ignoreTrailingCharacterSpacing: Boolean;
    alignmentIncludesTrailingWhitespace: Boolean;
    constructor();

    clearUndoRedoHistory(): void;

    setMath(value: String): void;

    getMath(value: String): void;

    setMathMode(mode: RichEditMathMode): void;

    canCopy(): Boolean;

    canPaste(): Boolean;

    canRedo(): Boolean;

    canUndo(): Boolean;

    applyDisplayUpdates(): Number;

    batchDisplayUpdates(): Number;

    beginUndoGroup(): void;

    endUndoGroup(): void;

    getDefaultCharacterFormat(): ITextCharacterFormat;

    getDefaultParagraphFormat(): ITextParagraphFormat;

    getRange(startPosition: Number, endPosition: Number): ITextRange;

    getRangeFromPoint(point: Object, options: PointOptions): ITextRange;

    getText(options: TextGetOptions, value: String): void;

    loadFromStream(options: TextSetOptions, value: Object): void;

    redo(): void;

    saveToStream(options: TextGetOptions, value: Object): void;

    setDefaultCharacterFormat(value: ITextCharacterFormat): void;

    setDefaultParagraphFormat(value: ITextParagraphFormat): void;

    setText(options: TextSetOptions, value: String): void;

    undo(): void;

  }

  export class RichEditTextRange {
    contentLinkInfo: ContentLinkInfo;
    text: String;
    startPosition: Number;
    paragraphFormat: ITextParagraphFormat;
    link: String;
    gravity: RangeGravity;
    formattedText: ITextRange;
    endPosition: Number;
    characterFormat: ITextCharacterFormat;
    character: String;
    length: Number;
    storyLength: Number;
    constructor();

    setText(options: TextSetOptions, value: String): void;

    setTextViaStream(options: TextSetOptions, value: Object): void;

    startOf(unit: TextRangeUnit, extend: Boolean): Number;

    canPaste(format: Number): Boolean;

    changeCase(value: LetterCase): void;

    collapse(value: Boolean): void;

    copy(): void;

    cut(): void;

    delete(unit: TextRangeUnit, count: Number): Number;

    endOf(unit: TextRangeUnit, extend: Boolean): Number;

    expand(unit: TextRangeUnit): Number;

    findText(value: String, scanLength: Number, options: FindOptions): Number;

    getCharacterUtf32(value: Number, offset: Number): void;

    getClone(): ITextRange;

    getIndex(unit: TextRangeUnit): Number;

    getPoint(horizontalAlign: HorizontalCharacterAlignment, verticalAlign: VerticalCharacterAlignment, options: PointOptions, point: Object): void;

    getRect(options: PointOptions, rect: Object, hit: Number): void;

    getText(options: TextGetOptions, value: String): void;

    getTextViaStream(options: TextGetOptions, value: Object): void;

    inRange(range: ITextRange): Boolean;

    insertImage(width: Number, height: Number, ascent: Number, verticalAlign: VerticalCharacterAlignment, alternateText: String, value: Object): void;

    inStory(range: ITextRange): Boolean;

    isEqual(range: ITextRange): Boolean;

    move(unit: TextRangeUnit, count: Number): Number;

    moveEnd(unit: TextRangeUnit, count: Number): Number;

    moveStart(unit: TextRangeUnit, count: Number): Number;

    paste(format: Number): void;

    scrollIntoView(value: PointOptions): void;

    matchSelection(): void;

    setIndex(unit: TextRangeUnit, index: Number, extend: Boolean): void;

    setPoint(point: Object, options: PointOptions, extend: Boolean): void;

    setRange(startPosition: Number, endPosition: Number): void;

  }

  export class TextConstants {
    static autoColor: Object;
    static maxUnitCount: Number;
    static minUnitCount: Number;
    static undefinedColor: Object;
    static undefinedFloatValue: Number;
    static undefinedFontStretch: FontStretch;
    static undefinedFontStyle: FontStyle;
    static undefinedInt32Value: Number;
    constructor();

  }

export const CaretType: any;
export const FindOptions: any;
export const FontStretch: any;
export const FontStyle: any;
export const FormatEffect: any;
export const HorizontalCharacterAlignment: any;
export const LetterCase: any;
export const LineSpacingRule: any;
export const LinkType: any;
export const MarkerAlignment: any;
export const MarkerStyle: any;
export const MarkerType: any;
export const ParagraphAlignment: any;
export const ParagraphStyle: any;
export const PointOptions: any;
export const RangeGravity: any;
export const RichEditMathMode: any;
export const SelectionOptions: any;
export const SelectionType: any;
export const TabAlignment: any;
export const TabLeader: any;
export const TextDecorations: any;
export const TextGetOptions: any;
export const TextRangeUnit: any;
export const TextScript: any;
export const TextSetOptions: any;
export const UnderlineType: any;
export const VerticalCharacterAlignment: any;
export const ContentLinkInfo: any;
export const FontWeights: any;
export const ITextCharacterFormat: any;
export const ITextDocument: any;
export const ITextParagraphFormat: any;
export const ITextRange: any;
export const ITextSelection: any;
export const RichEditTextDocument: any;
export const RichEditTextRange: any;
export const TextConstants: any;
export * as core from "./ui.text.core.js";
