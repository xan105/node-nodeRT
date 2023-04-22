  export class FontWeight {
    weight: number;
    constructor();
  }

  export class LanguageFont {
    fontFamily: string;
    fontStretch: number;
    fontStyle: number;
    fontWeight: FontWeight;
    scaleFactor: number;
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
    constructor(languageTag: string);

  }

