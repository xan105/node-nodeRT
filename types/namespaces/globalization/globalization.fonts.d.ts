  export class FontWeight {
    weight: Number;
    constructor();
  }

  export class LanguageFont {
    fontFamily: String;
    fontStretch: Number;
    fontStyle: Number;
    fontWeight: FontWeight;
    scaleFactor: Number;
    constructor();

  }

  export class LanguageFontGroup {
    documentAlternate1Font: LanguageFont;
    documentAlternate2Font: LanguageFont;
    documentHeadingFont: LanguageFont;
    fixedWidthTextFont: LanguageFont;
    modernDocumentFont: LanguageFont;
    traditionalDocumentFont: LanguageFont;
    uICaptionFont: LanguageFont;
    uIHeadingFont: LanguageFont;
    uINotificationHeadingFont: LanguageFont;
    uITextFont: LanguageFont;
    uITitleFont: LanguageFont;
    constructor();
    constructor(languageTag: String);

  }

