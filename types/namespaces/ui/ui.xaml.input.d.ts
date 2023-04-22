  export class Point {
    constructor();
  }

  export class CorePhysicalKeyStatus {
    repeatCount: number;
    scanCode: number;
    isExtendedKey: boolean;
    isMenuKeyDown: boolean;
    wasKeyDown: boolean;
    isKeyReleased: boolean;
    constructor();
  }

  export class ManipulationDelta {
    translation: Object;
    scale: number;
    rotation: number;
    expansion: number;
    constructor();
  }

  export class ManipulationVelocities {
    linear: Object;
    angular: number;
    expansion: number;
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
    isInContact: boolean;
    isInRange: boolean;
    pointerDeviceType: number;
    pointerId: number;
    constructor();

  }

  export class AccessKeyDisplayRequestedEventArgs {
    pressedKeys: string;
    constructor();

  }

  export class AccessKeyDisplayDismissedEventArgs {
    constructor();

  }

  export class AccessKeyInvokedEventArgs {
    handled: boolean;
    constructor();

  }

  export class ProcessKeyboardAcceleratorEventArgs {
    handled: boolean;
    key: number;
    modifiers: number;
    constructor();

  }

  export class KeyboardAcceleratorInvokedEventArgs {
    handled: boolean;
    element: Object;
    keyboardAccelerator: KeyboardAccelerator;
    constructor();

  }

  export class AccessKeyManager {
    static isDisplayModeEnabled: boolean;
    static areKeyTipsEnabled: boolean;
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
    desiredExpansion: number;
    desiredDeceleration: number;
    constructor();

  }

  export class InertiaRotationBehavior {
    desiredRotation: number;
    desiredDeceleration: number;
    constructor();

  }

  export class InertiaTranslationBehavior {
    desiredDisplacement: number;
    desiredDeceleration: number;
    constructor();

  }

  export class ManipulationPivot {
    radius: number;
    center: Object;
    constructor();
    constructor(center: Object, radius: number);

  }

  export class CharacterReceivedRoutedEventArgs {
    handled: boolean;
    character: string;
    keyStatus: CorePhysicalKeyStatus;
    originalSource: Object;
    constructor();

  }

  export class ContextRequestedEventArgs {
    handled: boolean;
    originalSource: Object;
    constructor();

    tryGetPosition(relativeTo: Object, point: Object): boolean;

  }

  export class DoubleTappedRoutedEventArgs {
    handled: boolean;
    pointerDeviceType: number;
    originalSource: Object;
    constructor();

    getPosition(relativeTo: Object): Object;

  }

  export class GettingFocusEventArgs {
    newFocusedElement: Object;
    handled: boolean;
    cancel: boolean;
    direction: FocusNavigationDirection;
    focusState: number;
    inputDevice: FocusInputDeviceKind;
    oldFocusedElement: Object;
    originalSource: Object;
    constructor();

    tryCancel(): boolean;

    trySetNewFocusedElement(element: Object): boolean;

  }

  export class HoldingRoutedEventArgs {
    handled: boolean;
    holdingState: number;
    pointerDeviceType: number;
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
    modifiers: number;
    key: number;
    isEnabled: boolean;
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
    handled: boolean;
    key: number;
    keyStatus: CorePhysicalKeyStatus;
    originalKey: number;
    deviceId: string;
    originalSource: Object;
    constructor();

  }

  export class LosingFocusEventArgs {
    newFocusedElement: Object;
    handled: boolean;
    cancel: boolean;
    direction: FocusNavigationDirection;
    focusState: number;
    inputDevice: FocusInputDeviceKind;
    oldFocusedElement: Object;
    originalSource: Object;
    constructor();

    tryCancel(): boolean;

    trySetNewFocusedElement(element: Object): boolean;

  }

  export class ManipulationCompletedRoutedEventArgs {
    handled: boolean;
    container: Object;
    cumulative: ManipulationDelta;
    isInertial: boolean;
    pointerDeviceType: number;
    position: Object;
    velocities: ManipulationVelocities;
    originalSource: Object;
    constructor();

  }

  export class ManipulationDeltaRoutedEventArgs {
    handled: boolean;
    container: Object;
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    isInertial: boolean;
    pointerDeviceType: number;
    position: Object;
    velocities: ManipulationVelocities;
    originalSource: Object;
    constructor();

    complete(): void;

  }

  export class ManipulationInertiaStartingRoutedEventArgs {
    translationBehavior: InertiaTranslationBehavior;
    rotationBehavior: InertiaRotationBehavior;
    handled: boolean;
    expansionBehavior: InertiaExpansionBehavior;
    container: Object;
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: number;
    velocities: ManipulationVelocities;
    originalSource: Object;
    constructor();

  }

  export class ManipulationStartedRoutedEventArgs {
    handled: boolean;
    container: Object;
    cumulative: ManipulationDelta;
    pointerDeviceType: number;
    position: Object;
    originalSource: Object;
    constructor();

    complete(): void;

  }

  export class ManipulationStartingRoutedEventArgs {
    pivot: ManipulationPivot;
    mode: ManipulationModes;
    handled: boolean;
    container: Object;
    originalSource: Object;
    constructor();

  }

  export class NoFocusCandidateFoundEventArgs {
    handled: boolean;
    direction: FocusNavigationDirection;
    inputDevice: FocusInputDeviceKind;
    originalSource: Object;
    constructor();

  }

  export class PointerRoutedEventArgs {
    handled: boolean;
    keyModifiers: number;
    pointer: Pointer;
    isGenerated: boolean;
    originalSource: Object;
    constructor();

    getCurrentPoint(relativeTo: Object): Object;

    getIntermediatePoints(relativeTo: Object): Object;

  }

  export class RightTappedRoutedEventArgs {
    handled: boolean;
    pointerDeviceType: number;
    originalSource: Object;
    constructor();

    getPosition(relativeTo: Object): Object;

  }

  export class TappedRoutedEventArgs {
    handled: boolean;
    pointerDeviceType: number;
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
    succeeded: boolean;
    constructor();

  }

  export class FocusManager {
    constructor();

    static tryFocusAsync(element: Object, value: number, callback: (error: Error, result: FocusMovementResult) => void): void ;


    static tryMoveFocusAsync(focusNavigationDirection: FocusNavigationDirection, callback: (error: Error, result: FocusMovementResult) => void): void ;
    static tryMoveFocusAsync(focusNavigationDirection: FocusNavigationDirection, focusNavigationOptions: FindNextElementOptions, callback: (error: Error, result: FocusMovementResult) => void): void ;


    static tryMoveFocus(focusNavigationDirection: FocusNavigationDirection, focusNavigationOptions: FindNextElementOptions): boolean;
    static tryMoveFocus(focusNavigationDirection: FocusNavigationDirection): boolean;


    static findNextElement(focusNavigationDirection: FocusNavigationDirection): Object;
    static findNextElement(focusNavigationDirection: FocusNavigationDirection, focusNavigationOptions: FindNextElementOptions): Object;


    static findFirstFocusableElement(searchScope: Object): Object;


    static findLastFocusableElement(searchScope: Object): Object;


    static findNextFocusableElement(focusNavigationDirection: FocusNavigationDirection): Object;
    static findNextFocusableElement(focusNavigationDirection: FocusNavigationDirection, hintRect: Object): Object;


    static getFocusedElement(): Object;


  }

