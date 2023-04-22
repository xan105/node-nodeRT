  export class Point {
    constructor();
  }

  export class AnimationMetricsContract {
    constructor();
  }

  export enum PropertyAnimationType {
    scale,
    translation,
    opacity,
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

  export class IPropertyAnimation {
    control1: Object;
    control2: Object;
    delay: number;
    duration: number;
    type: PropertyAnimationType;
    constructor();

  }

  export class AnimationDescription {
    animations: Object;
    delayLimit: number;
    staggerDelay: number;
    staggerDelayFactor: number;
    zOrder: number;
    constructor();
    constructor(effect: AnimationEffect, target: AnimationEffectTarget);

  }

  export class PropertyAnimation {
    control1: Object;
    control2: Object;
    delay: number;
    duration: number;
    type: PropertyAnimationType;
    constructor();

  }

  export class ScaleAnimation {
    control1: Object;
    control2: Object;
    delay: number;
    duration: number;
    type: PropertyAnimationType;
    finalScaleX: number;
    finalScaleY: number;
    initialScaleX: number;
    initialScaleY: number;
    normalizedOrigin: Object;
    constructor();

  }

  export class TranslationAnimation {
    control1: Object;
    control2: Object;
    delay: number;
    duration: number;
    type: PropertyAnimationType;
    constructor();

  }

  export class OpacityAnimation {
    finalOpacity: number;
    initialOpacity: number;
    control1: Object;
    control2: Object;
    delay: number;
    duration: number;
    type: PropertyAnimationType;
    constructor();

  }

