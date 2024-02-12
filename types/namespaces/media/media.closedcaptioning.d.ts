  export class Color {
    constructor();
  }

  export enum ClosedCaptionColor {
    default,
    white,
    black,
    red,
    green,
    blue,
    yellow,
    magenta,
    cyan,
  }

  export enum ClosedCaptionEdgeEffect {
    default,
    none,
    raised,
    depressed,
    uniform,
    dropShadow,
  }

  export enum ClosedCaptionOpacity {
    default,
    oneHundredPercent,
    seventyFivePercent,
    twentyFivePercent,
    zeroPercent,
  }

  export enum ClosedCaptionSize {
    default,
    fiftyPercent,
    oneHundredPercent,
    oneHundredFiftyPercent,
    twoHundredPercent,
  }

  export enum ClosedCaptionStyle {
    default,
    monospacedWithSerifs,
    proportionalWithSerifs,
    monospacedWithoutSerifs,
    proportionalWithoutSerifs,
    casual,
    cursive,
    smallCapitals,
  }

  export class ClosedCaptionProperties {
    static backgroundColor: ClosedCaptionColor;
    static backgroundOpacity: ClosedCaptionOpacity;
    static computedBackgroundColor: Object;
    static computedFontColor: Object;
    static computedRegionColor: Object;
    static fontColor: ClosedCaptionColor;
    static fontEffect: ClosedCaptionEdgeEffect;
    static fontOpacity: ClosedCaptionOpacity;
    static fontSize: ClosedCaptionSize;
    static fontStyle: ClosedCaptionStyle;
    static regionColor: ClosedCaptionColor;
    static regionOpacity: ClosedCaptionOpacity;
    constructor();

  }

