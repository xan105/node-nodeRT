  export class Point {
    constructor();
  }

  export class AnimationMetricsContract {
    constructor();
  }

  export enum AnimationEffect {
    expand,
    collapse,
    reposition,
    fadeIn,
    fadeOut,
    addToList,
    deleteFromList,
    addToGrid,
    deleteFromGrid,
    addToSearchGrid,
    deleteFromSearchGrid,
    addToSearchList,
    deleteFromSearchList,
    showEdgeUI,
    showPanel,
    hideEdgeUI,
    hidePanel,
    showPopup,
    hidePopup,
    pointerDown,
    pointerUp,
    dragSourceStart,
    dragSourceEnd,
    transitionContent,
    reveal,
    hide,
    dragBetweenEnter,
    dragBetweenLeave,
    swipeSelect,
    swipeDeselect,
    swipeReveal,
    enterPage,
    transitionPage,
    crossFade,
    peek,
    updateBadge,
  }

  export enum AnimationEffectTarget {
    primary,
    added,
    affected,
    background,
    content,
    deleted,
    deselected,
    dragSource,
    hidden,
    incoming,
    outgoing,
    outline,
    remaining,
    revealed,
    rowIn,
    rowOut,
    selected,
    selection,
    shown,
    tapped,
  }

  export enum PropertyAnimationType {
    scale,
    translation,
    opacity,
  }

  export class AnimationDescription {
    animations: Object;
    delayLimit: Number;
    staggerDelay: Number;
    staggerDelayFactor: Number;
    zOrder: Number;
    constructor();
    constructor(effect: AnimationEffect, target: AnimationEffectTarget);

  }

  export class IPropertyAnimation {
    control1: Object;
    control2: Object;
    delay: Number;
    duration: Number;
    type: PropertyAnimationType;
    constructor();

  }

  export class OpacityAnimation {
    finalOpacity: Number;
    initialOpacity: Number;
    control1: Object;
    control2: Object;
    delay: Number;
    duration: Number;
    type: PropertyAnimationType;
    constructor();

  }

  export class PropertyAnimation {
    control1: Object;
    control2: Object;
    delay: Number;
    duration: Number;
    type: PropertyAnimationType;
    constructor();

  }

  export class ScaleAnimation {
    control1: Object;
    control2: Object;
    delay: Number;
    duration: Number;
    type: PropertyAnimationType;
    finalScaleX: Number;
    finalScaleY: Number;
    initialScaleX: Number;
    initialScaleY: Number;
    normalizedOrigin: Object;
    constructor();

  }

  export class TranslationAnimation {
    control1: Object;
    control2: Object;
    delay: Number;
    duration: Number;
    type: PropertyAnimationType;
    constructor();

  }

