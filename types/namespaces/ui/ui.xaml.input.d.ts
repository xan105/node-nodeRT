  export class Point {
    constructor();
  }

  export class CorePhysicalKeyStatus {
    repeatCount: Number;
    scanCode: Number;
    isExtendedKey: Boolean;
    isMenuKeyDown: Boolean;
    wasKeyDown: Boolean;
    isKeyReleased: Boolean;
    constructor();
  }

  export class ManipulationDelta {
    translation: Object;
    scale: Number;
    rotation: Number;
    expansion: Number;
    constructor();
  }

  export class ManipulationVelocities {
    linear: Object;
    angular: Number;
    expansion: Number;
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum FocusInputDeviceKind {
    none,
    mouse,
    touch,
    pen,
    keyboard,
    gameController,
  }

  export enum FocusNavigationDirection {
    next,
    previous,
    up,
    down,
    left,
    right,
    none,
  }

  export enum InputScopeNameValue {
    default,
    url,
    emailSmtpAddress,
    personalFullName,
    currencyAmountAndSymbol,
    currencyAmount,
    dateMonthNumber,
    dateDayNumber,
    dateYear,
    digits,
    number,
    password,
    telephoneNumber,
    telephoneCountryCode,
    telephoneAreaCode,
    telephoneLocalNumber,
    timeHour,
    timeMinutesOrSeconds,
    numberFullWidth,
    alphanumericHalfWidth,
    alphanumericFullWidth,
    hiragana,
    katakanaHalfWidth,
    katakanaFullWidth,
    hanja,
    hangulHalfWidth,
    hangulFullWidth,
    search,
    formula,
    searchIncremental,
    chineseHalfWidth,
    chineseFullWidth,
    nativeScript,
    text,
    chat,
    nameOrPhoneNumber,
    emailNameOrAddress,
    maps,
    numericPassword,
    numericPin,
    alphanumericPin,
    formulaNumber,
    chatWithoutEmoji,
  }

  export enum KeyboardAcceleratorPlacementMode {
    auto,
    hidden,
  }

  export enum KeyboardNavigationMode {
    local,
    cycle,
    once,
  }

  export enum KeyTipPlacementMode {
    auto,
    bottom,
    top,
    left,
    right,
    center,
    hidden,
  }

  export enum ManipulationModes {
    none,
    translateX,
    translateY,
    translateRailsX,
    translateRailsY,
    rotate,
    scale,
    translateInertia,
    rotateInertia,
    scaleInertia,
    all,
    system,
  }

  export enum XYFocusKeyboardNavigationMode {
    auto,
    enabled,
    disabled,
  }

  export enum XYFocusNavigationStrategy {
    auto,
    projection,
    navigationDirectionDistance,
    rectilinearDistance,
  }

  export enum XYFocusNavigationStrategyOverride {
    none,
    auto,
    projection,
    navigationDirectionDistance,
    rectilinearDistance,
  }

  export class Pointer {
    isInContact: Boolean;
    isInRange: Boolean;
    pointerDeviceType: Number;
    pointerId: Number;
    constructor();

  }

  export class AccessKeyDisplayRequestedEventArgs {
    pressedKeys: String;
    constructor();

  }

  export class AccessKeyDisplayDismissedEventArgs {
    constructor();

  }

  export class AccessKeyInvokedEventArgs {
    handled: Boolean;
    constructor();

  }

  export class ProcessKeyboardAcceleratorEventArgs {
    handled: Boolean;
    key: Number;
    modifiers: Number;
    constructor();

  }

  export class KeyboardAcceleratorInvokedEventArgs {
    handled: Boolean;
    element: Object;
    keyboardAccelerator: KeyboardAccelerator;
    constructor();

  }

  export class AccessKeyManager {
    static isDisplayModeEnabled: Boolean;
    static areKeyTipsEnabled: Boolean;
    constructor();

    static exitDisplayMode(): void;


    addListener(type: "IsDisplayModeEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsDisplayModeEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsDisplayModeEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsDisplayModeEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class InertiaExpansionBehavior {
    desiredExpansion: Number;
    desiredDeceleration: Number;
    constructor();

  }

  export class InertiaRotationBehavior {
    desiredRotation: Number;
    desiredDeceleration: Number;
    constructor();

  }

  export class InertiaTranslationBehavior {
    desiredDisplacement: Number;
    desiredDeceleration: Number;
    constructor();

  }

  export class ManipulationPivot {
    radius: Number;
    center: Object;
    constructor();
    constructor(center: Object, radius: Number);

  }

  export class CharacterReceivedRoutedEventArgs {
    handled: Boolean;
    character: String;
    keyStatus: CorePhysicalKeyStatus;
    originalSource: Object;
    constructor();

  }

  export class ContextRequestedEventArgs {
    handled: Boolean;
    originalSource: Object;
    constructor();

    tryGetPosition(relativeTo: Object, point: Object): Boolean;

  }

  export class DoubleTappedRoutedEventArgs {
    handled: Boolean;
    pointerDeviceType: Number;
    originalSource: Object;
    constructor();

    getPosition(relativeTo: Object): Object;

  }

  export class GettingFocusEventArgs {
    newFocusedElement: Object;
    handled: Boolean;
    cancel: Boolean;
    direction: FocusNavigationDirection;
    focusState: Number;
    inputDevice: FocusInputDeviceKind;
    oldFocusedElement: Object;
    originalSource: Object;
    constructor();

    tryCancel(): Boolean;

    trySetNewFocusedElement(element: Object): Boolean;

  }

  export class HoldingRoutedEventArgs {
    handled: Boolean;
    holdingState: Number;
    pointerDeviceType: Number;
    originalSource: Object;
    constructor();

    getPosition(relativeTo: Object): Object;

  }

  export class InputScope {
    names: Object;
    dispatcher: Object;
    constructor();

  }

  export class InputScopeName {
    nameValue: InputScopeNameValue;
    dispatcher: Object;
    constructor();
    constructor(nameValue: InputScopeNameValue);

  }

  export class KeyboardAccelerator {
    static isEnabledProperty: Object;
    static keyProperty: Object;
    static modifiersProperty: Object;
    static scopeOwnerProperty: Object;
    scopeOwner: Object;
    modifiers: Number;
    key: Number;
    isEnabled: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Invoked", listener: (ev: Event) => void): void ;
    removeListener(type: "Invoked", listener: (ev: Event) => void): void ;
    on(type: "Invoked", listener: (ev: Event) => void): void ;
    off(type: "Invoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class KeyRoutedEventArgs {
    handled: Boolean;
    key: Number;
    keyStatus: CorePhysicalKeyStatus;
    originalKey: Number;
    deviceId: String;
    originalSource: Object;
    constructor();

  }

  export class LosingFocusEventArgs {
    newFocusedElement: Object;
    handled: Boolean;
    cancel: Boolean;
    direction: FocusNavigationDirection;
    focusState: Number;
    inputDevice: FocusInputDeviceKind;
    oldFocusedElement: Object;
    originalSource: Object;
    constructor();

    tryCancel(): Boolean;

    trySetNewFocusedElement(element: Object): Boolean;

  }

  export class ManipulationCompletedRoutedEventArgs {
    handled: Boolean;
    container: Object;
    cumulative: ManipulationDelta;
    isInertial: Boolean;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    originalSource: Object;
    constructor();

  }

  export class ManipulationDeltaRoutedEventArgs {
    handled: Boolean;
    container: Object;
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    isInertial: Boolean;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    originalSource: Object;
    constructor();

    complete(): void;

  }

  export class ManipulationInertiaStartingRoutedEventArgs {
    translationBehavior: InertiaTranslationBehavior;
    rotationBehavior: InertiaRotationBehavior;
    handled: Boolean;
    expansionBehavior: InertiaExpansionBehavior;
    container: Object;
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: Number;
    velocities: ManipulationVelocities;
    originalSource: Object;
    constructor();

  }

  export class ManipulationStartedRoutedEventArgs {
    handled: Boolean;
    container: Object;
    cumulative: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    originalSource: Object;
    constructor();

    complete(): void;

  }

  export class ManipulationStartingRoutedEventArgs {
    pivot: ManipulationPivot;
    mode: ManipulationModes;
    handled: Boolean;
    container: Object;
    originalSource: Object;
    constructor();

  }

  export class NoFocusCandidateFoundEventArgs {
    handled: Boolean;
    direction: FocusNavigationDirection;
    inputDevice: FocusInputDeviceKind;
    originalSource: Object;
    constructor();

  }

  export class PointerRoutedEventArgs {
    handled: Boolean;
    keyModifiers: Number;
    pointer: Pointer;
    isGenerated: Boolean;
    originalSource: Object;
    constructor();

    getCurrentPoint(relativeTo: Object): Object;

    getIntermediatePoints(relativeTo: Object): Object;

  }

  export class RightTappedRoutedEventArgs {
    handled: Boolean;
    pointerDeviceType: Number;
    originalSource: Object;
    constructor();

    getPosition(relativeTo: Object): Object;

  }

  export class TappedRoutedEventArgs {
    handled: Boolean;
    pointerDeviceType: Number;
    originalSource: Object;
    constructor();

    getPosition(relativeTo: Object): Object;

  }

  export class FindNextElementOptions {
    xYFocusNavigationStrategyOverride: XYFocusNavigationStrategyOverride;
    searchRoot: Object;
    hintRect: Object;
    exclusionRect: Object;
    constructor();

  }

  export class FocusMovementResult {
    succeeded: Boolean;
    constructor();

  }

  export class FocusManager {
    constructor();

    static tryFocusAsync(element: Object, value: Number, callback: (error: Error, result: FocusMovementResult) => void): void ;


    static tryMoveFocusAsync(focusNavigationDirection: FocusNavigationDirection, callback: (error: Error, result: FocusMovementResult) => void): void ;
    static tryMoveFocusAsync(focusNavigationDirection: FocusNavigationDirection, focusNavigationOptions: FindNextElementOptions, callback: (error: Error, result: FocusMovementResult) => void): void ;


    static tryMoveFocus(focusNavigationDirection: FocusNavigationDirection, focusNavigationOptions: FindNextElementOptions): Boolean;
    static tryMoveFocus(focusNavigationDirection: FocusNavigationDirection): Boolean;


    static findNextElement(focusNavigationDirection: FocusNavigationDirection): Object;
    static findNextElement(focusNavigationDirection: FocusNavigationDirection, focusNavigationOptions: FindNextElementOptions): Object;


    static findFirstFocusableElement(searchScope: Object): Object;


    static findLastFocusableElement(searchScope: Object): Object;


    static findNextFocusableElement(focusNavigationDirection: FocusNavigationDirection): Object;
    static findNextFocusableElement(focusNavigationDirection: FocusNavigationDirection, hintRect: Object): Object;


    static getFocusedElement(): Object;


  }

