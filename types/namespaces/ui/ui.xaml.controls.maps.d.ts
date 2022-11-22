  export class Point {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Thickness {
    constructor();
  }

  export class FontWeight {
    weight: Number;
    constructor();
  }

  export class Size {
    constructor();
  }

  export class MapZoomLevelRange {
    min: Number;
    max: Number;
    constructor();
  }

  export enum MapAnimationKind {
    default,
    none,
    linear,
    bow,
  }

  export enum MapCameraChangeReason {
    system,
    userInteraction,
    programmatic,
  }

  export enum MapColorScheme {
    light,
    dark,
  }

  export enum MapElementCollisionBehavior {
    hide,
    remainVisible,
  }

  export enum MapInteractionMode {
    auto,
    disabled,
    gestureOnly,
    pointerAndKeyboard,
    controlOnly,
    gestureAndControl,
    pointerKeyboardAndControl,
    pointerOnly,
  }

  export enum MapLoadingStatus {
    loading,
    loaded,
    dataUnavailable,
  }

  export enum MapModel3DShadingOption {
    default,
    flat,
    smooth,
  }

  export enum MapPanInteractionMode {
    auto,
    disabled,
  }

  export enum MapProjection {
    webMercator,
    globe,
  }

  export enum MapStyle {
    none,
    road,
    aerial,
    aerialWithRoads,
    terrain,
    aerial3D,
    aerial3DWithRoads,
    custom,
  }

  export enum MapTileLayer {
    labelOverlay,
    roadOverlay,
    areaOverlay,
    backgroundOverlay,
    backgroundReplacement,
  }

  export enum MapVisibleRegionKind {
    near,
    full,
  }

  export enum MapWatermarkMode {
    automatic,
    on,
  }

  export class MapStyleSheetEntries {
    static adminDistrict: String;
    static adminDistrictCapital: String;
    static airport: String;
    static area: String;
    static arterialRoad: String;
    static building: String;
    static business: String;
    static capital: String;
    static cemetery: String;
    static continent: String;
    static controlledAccessHighway: String;
    static countryRegion: String;
    static countryRegionCapital: String;
    static district: String;
    static drivingRoute: String;
    static education: String;
    static educationBuilding: String;
    static foodPoint: String;
    static forest: String;
    static golfCourse: String;
    static highSpeedRamp: String;
    static highway: String;
    static indigenousPeoplesReserve: String;
    static island: String;
    static majorRoad: String;
    static medical: String;
    static medicalBuilding: String;
    static military: String;
    static naturalPoint: String;
    static nautical: String;
    static neighborhood: String;
    static park: String;
    static peak: String;
    static playingField: String;
    static point: String;
    static pointOfInterest: String;
    static political: String;
    static populatedPlace: String;
    static railway: String;
    static ramp: String;
    static reserve: String;
    static river: String;
    static road: String;
    static roadExit: String;
    static roadShield: String;
    static routeLine: String;
    static runway: String;
    static sand: String;
    static shoppingCenter: String;
    static stadium: String;
    static street: String;
    static structure: String;
    static tollRoad: String;
    static trail: String;
    static transit: String;
    static transitBuilding: String;
    static transportation: String;
    static unpavedStreet: String;
    static vegetation: String;
    static volcanicPeak: String;
    static walkingRoute: String;
    static water: String;
    static waterPoint: String;
    static waterRoute: String;
    constructor();

  }

  export class MapStyleSheetEntryStates {
    static disabled: String;
    static hover: String;
    static selected: String;
    constructor();

  }

  export class MapActualCameraChangedEventArgs {
    camera: MapCamera;
    changeReason: MapCameraChangeReason;
    constructor();

  }

  export class MapActualCameraChangingEventArgs {
    camera: MapCamera;
    changeReason: MapCameraChangeReason;
    constructor();

  }

  export class MapContextRequestedEventArgs {
    location: Object;
    mapElements: Object;
    position: Object;
    constructor();

  }

  export class MapCustomExperienceChangedEventArgs {
    constructor();

  }

  export class MapElementClickEventArgs {
    location: Object;
    mapElements: Object;
    position: Object;
    constructor();

  }

  export class MapElementPointerEnteredEventArgs {
    location: Object;
    mapElement: MapElement;
    position: Object;
    constructor();

  }

  export class MapElementPointerExitedEventArgs {
    location: Object;
    mapElement: MapElement;
    position: Object;
    constructor();

  }

  export class MapElementsLayerClickEventArgs {
    location: Object;
    mapElements: Object;
    position: Object;
    constructor();

  }

  export class MapElementsLayerContextRequestedEventArgs {
    location: Object;
    mapElements: Object;
    position: Object;
    constructor();

  }

  export class MapElementsLayerPointerEnteredEventArgs {
    location: Object;
    mapElement: MapElement;
    position: Object;
    constructor();

  }

  export class MapElementsLayerPointerExitedEventArgs {
    location: Object;
    mapElement: MapElement;
    position: Object;
    constructor();

  }

  export class MapRightTappedEventArgs {
    location: Object;
    position: Object;
    constructor();

  }

  export class MapTargetCameraChangedEventArgs {
    camera: MapCamera;
    changeReason: MapCameraChangeReason;
    constructor();

  }

  export class MapTileBitmapRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MapTileBitmapRequest {
    pixelData: Object;
    constructor();

    getDeferral(): MapTileBitmapRequestDeferral;

  }

  export class MapTileBitmapRequestedEventArgs {
    request: MapTileBitmapRequest;
    x: Number;
    y: Number;
    zoomLevel: Number;
    constructor();

  }

  export class MapTileUriRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MapTileUriRequest {
    uri: Object;
    constructor();

    getDeferral(): MapTileUriRequestDeferral;

  }

  export class MapTileUriRequestedEventArgs {
    request: MapTileUriRequest;
    x: Number;
    y: Number;
    zoomLevel: Number;
    constructor();

  }

  export class MapCamera {
    roll: Number;
    pitch: Number;
    location: Object;
    heading: Number;
    fieldOfView: Number;
    dispatcher: Object;
    constructor();
    constructor(location: Object);
    constructor(location: Object, headingInDegrees: Number);
    constructor(location: Object, headingInDegrees: Number, pitchInDegrees: Number);
    constructor(location: Object, headingInDegrees: Number, pitchInDegrees: Number, rollInDegrees: Number, fieldOfViewInDegrees: Number);

  }

  export class MapCustomExperience {
    dispatcher: Object;
    constructor();

  }

  export class MapElement {
    static visibleProperty: Object;
    static zIndexProperty: Object;
    static mapTabIndexProperty: Object;
    static mapStyleSheetEntryProperty: Object;
    static mapStyleSheetEntryStateProperty: Object;
    static tagProperty: Object;
    static isEnabledProperty: Object;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    tag: Object;
    mapStyleSheetEntryState: String;
    mapStyleSheetEntry: String;
    isEnabled: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class MapInputEventArgs {
    location: Object;
    position: Object;
    dispatcher: Object;
    constructor();

  }

  export class MapItemsControl {
    static itemTemplateProperty: Object;
    static itemsProperty: Object;
    static itemsSourceProperty: Object;
    itemsSource: Object;
    itemTemplate: Object;
    items: Object;
    dispatcher: Object;
    constructor();

  }

  export class MapLayer {
    static mapTabIndexProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    dispatcher: Object;
    constructor();

  }

  export class MapModel3D {
    dispatcher: Object;
    constructor();

    static createFrom3MFAsync(source: Object, callback: (error: Error, result: MapModel3D) => void): void ;
    static createFrom3MFAsync(source: Object, shadingOption: MapModel3DShadingOption, callback: (error: Error, result: MapModel3D) => void): void ;


  }

  export class MapRouteView {
    routeColor: Object;
    outlineColor: Object;
    route: Object;
    dispatcher: Object;
    constructor();
    constructor(route: Object);

  }

  export class MapScene {
    targetCamera: MapCamera;
    dispatcher: Object;
    constructor();

    static createFromBoundingBox(bounds: Object): MapScene;
    static createFromBoundingBox(bounds: Object, headingInDegrees: Number, pitchInDegrees: Number): MapScene;


    static createFromCamera(camera: MapCamera): MapScene;


    static createFromLocation(location: Object): MapScene;
    static createFromLocation(location: Object, headingInDegrees: Number, pitchInDegrees: Number): MapScene;


    static createFromLocationAndRadius(location: Object, radiusInMeters: Number): MapScene;
    static createFromLocationAndRadius(location: Object, radiusInMeters: Number, headingInDegrees: Number, pitchInDegrees: Number): MapScene;


    static createFromLocations(locations: Object): MapScene;
    static createFromLocations(locations: Object, headingInDegrees: Number, pitchInDegrees: Number): MapScene;


    addListener(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    on(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    off(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MapStyleSheet {
    dispatcher: Object;
    constructor();

    static aerial(): MapStyleSheet;


    static aerialWithOverlay(): MapStyleSheet;


    static roadLight(): MapStyleSheet;


    static roadDark(): MapStyleSheet;


    static roadHighContrastLight(): MapStyleSheet;


    static roadHighContrastDark(): MapStyleSheet;


    static combine(styleSheets: Object): MapStyleSheet;


    static parseFromJson(styleAsJson: String): MapStyleSheet;


    static tryParseFromJson(styleAsJson: String, styleSheet: Object): Boolean;


  }

  export class MapTileDataSource {
    dispatcher: Object;
    constructor();

  }

  export class MapTileSource {
    static allowOverstretchProperty: Object;
    static boundsProperty: Object;
    static dataSourceProperty: Object;
    static isFadingEnabledProperty: Object;
    static isRetryEnabledProperty: Object;
    static isTransparencyEnabledProperty: Object;
    static layerProperty: Object;
    static tilePixelSizeProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    static zoomLevelRangeProperty: Object;
    isRetryEnabled: Boolean;
    isFadingEnabled: Boolean;
    dataSource: MapTileDataSource;
    bounds: Object;
    allowOverstretch: Boolean;
    zoomLevelRange: MapZoomLevelRange;
    zIndex: Number;
    visible: Boolean;
    tilePixelSize: Number;
    layer: MapTileLayer;
    isTransparencyEnabled: Boolean;
    dispatcher: Object;
    constructor();
    constructor(dataSource: MapTileDataSource);
    constructor(dataSource: MapTileDataSource, zoomLevelRange: MapZoomLevelRange);
    constructor(dataSource: MapTileDataSource, zoomLevelRange: MapZoomLevelRange, bounds: Object);
    constructor(dataSource: MapTileDataSource, zoomLevelRange: MapZoomLevelRange, bounds: Object, tileSizeInPixels: Number);

  }

  export class StreetsidePanorama {
    location: Object;
    dispatcher: Object;
    constructor();

    static findNearbyAsync(location: Object, callback: (error: Error, result: StreetsidePanorama) => void): void ;
    static findNearbyAsync(location: Object, radiusInMeters: Number, callback: (error: Error, result: StreetsidePanorama) => void): void ;


  }

  export class CustomMapTileDataSource {
    dispatcher: Object;
    constructor();

    addListener(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    on(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    off(type: "BitmapRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HttpMapTileDataSource {
    uriFormatString: String;
    allowCaching: Boolean;
    additionalRequestHeaders: Object;
    dispatcher: Object;
    constructor();
    constructor(uriFormatString: String);

    addListener(type: "UriRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "UriRequested", listener: (ev: Event) => void): void ;
    on(type: "UriRequested", listener: (ev: Event) => void): void ;
    off(type: "UriRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LocalMapTileDataSource {
    uriFormatString: String;
    dispatcher: Object;
    constructor();
    constructor(uriFormatString: String);

    addListener(type: "UriRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "UriRequested", listener: (ev: Event) => void): void ;
    on(type: "UriRequested", listener: (ev: Event) => void): void ;
    off(type: "UriRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MapBillboard {
    static collisionBehaviorDesiredProperty: Object;
    static locationProperty: Object;
    static normalizedAnchorPointProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    static mapTabIndexProperty: Object;
    static mapStyleSheetEntryProperty: Object;
    static mapStyleSheetEntryStateProperty: Object;
    static tagProperty: Object;
    static isEnabledProperty: Object;
    normalizedAnchorPoint: Object;
    location: Object;
    image: Object;
    collisionBehaviorDesired: MapElementCollisionBehavior;
    referenceCamera: MapCamera;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    tag: Object;
    mapStyleSheetEntryState: String;
    mapStyleSheetEntry: String;
    isEnabled: Boolean;
    dispatcher: Object;
    constructor();
    constructor(camera: MapCamera);

  }

  export class MapElement3D {
    static headingProperty: Object;
    static locationProperty: Object;
    static pitchProperty: Object;
    static rollProperty: Object;
    static scaleProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    static mapTabIndexProperty: Object;
    static mapStyleSheetEntryProperty: Object;
    static mapStyleSheetEntryStateProperty: Object;
    static tagProperty: Object;
    static isEnabledProperty: Object;
    scale: Vector3;
    roll: Number;
    pitch: Number;
    model: MapModel3D;
    location: Object;
    heading: Number;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    tag: Object;
    mapStyleSheetEntryState: String;
    mapStyleSheetEntry: String;
    isEnabled: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class MapElementsLayer {
    static mapElementsProperty: Object;
    static mapTabIndexProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    mapElements: Object;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    on(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    off(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapElementClick", listener: (ev: Event) => void): void ;
    removeListener(type: "MapElementClick", listener: (ev: Event) => void): void ;
    on(type: "MapElementClick", listener: (ev: Event) => void): void ;
    off(type: "MapElementClick", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    on(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    off(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    on(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    off(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MapIcon {
    static locationProperty: Object;
    static normalizedAnchorPointProperty: Object;
    static titleProperty: Object;
    static collisionBehaviorDesiredProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    static mapTabIndexProperty: Object;
    static mapStyleSheetEntryProperty: Object;
    static mapStyleSheetEntryStateProperty: Object;
    static tagProperty: Object;
    static isEnabledProperty: Object;
    title: String;
    normalizedAnchorPoint: Object;
    location: Object;
    image: Object;
    collisionBehaviorDesired: MapElementCollisionBehavior;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    tag: Object;
    mapStyleSheetEntryState: String;
    mapStyleSheetEntry: String;
    isEnabled: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class MapPolygon {
    static pathProperty: Object;
    static strokeDashedProperty: Object;
    static strokeThicknessProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    static mapTabIndexProperty: Object;
    static mapStyleSheetEntryProperty: Object;
    static mapStyleSheetEntryStateProperty: Object;
    static tagProperty: Object;
    static isEnabledProperty: Object;
    strokeThickness: Number;
    strokeDashed: Boolean;
    strokeColor: Object;
    path: Object;
    fillColor: Object;
    paths: Object;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    tag: Object;
    mapStyleSheetEntryState: String;
    mapStyleSheetEntry: String;
    isEnabled: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class MapPolyline {
    static pathProperty: Object;
    static strokeDashedProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    static mapTabIndexProperty: Object;
    static mapStyleSheetEntryProperty: Object;
    static mapStyleSheetEntryStateProperty: Object;
    static tagProperty: Object;
    static isEnabledProperty: Object;
    strokeThickness: Number;
    strokeDashed: Boolean;
    strokeColor: Object;
    path: Object;
    zIndex: Number;
    visible: Boolean;
    mapTabIndex: Number;
    tag: Object;
    mapStyleSheetEntryState: String;
    mapStyleSheetEntry: String;
    isEnabled: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class StreetsideExperience {
    zoomButtonsVisible: Boolean;
    streetLabelsVisible: Boolean;
    overviewMapVisible: Boolean;
    exitButtonVisible: Boolean;
    cursorVisible: Boolean;
    addressTextVisible: Boolean;
    dispatcher: Object;
    constructor();
    constructor(panorama: StreetsidePanorama);
    constructor(panorama: StreetsidePanorama, headingInDegrees: Number, pitchInDegrees: Number, fieldOfViewInDegrees: Number);

  }

  export class MapControl {
    static centerProperty: Object;
    static childrenProperty: Object;
    static colorSchemeProperty: Object;
    static desiredPitchProperty: Object;
    static headingProperty: Object;
    static landmarksVisibleProperty: Object;
    static locationProperty: Object;
    static mapElementsProperty: Object;
    static mapServiceTokenProperty: Object;
    static normalizedAnchorPointProperty: Object;
    static pedestrianFeaturesVisibleProperty: Object;
    static pitchProperty: Object;
    static routesProperty: Object;
    static styleProperty: Object;
    static tileSourcesProperty: Object;
    static trafficFlowVisibleProperty: Object;
    static transformOriginProperty: Object;
    static watermarkModeProperty: Object;
    static zoomLevelProperty: Object;
    static loadingStatusProperty: Object;
    static businessLandmarksVisibleProperty: Object;
    static is3DSupportedProperty: Object;
    static panInteractionModeProperty: Object;
    static rotateInteractionModeProperty: Object;
    static tiltInteractionModeProperty: Object;
    static transitFeaturesVisibleProperty: Object;
    static zoomInteractionModeProperty: Object;
    static isStreetsideSupportedProperty: Object;
    static sceneProperty: Object;
    static businessLandmarksEnabledProperty: Object;
    static transitFeaturesEnabledProperty: Object;
    static mapProjectionProperty: Object;
    static styleSheetProperty: Object;
    static viewPaddingProperty: Object;
    static layersProperty: Object;
    static regionProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
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
    style: MapStyle;
    desiredPitch: Number;
    colorScheme: MapColorScheme;
    pedestrianFeaturesVisible: Boolean;
    center: Object;
    landmarksVisible: Boolean;
    heading: Number;
    watermarkMode: MapWatermarkMode;
    mapServiceToken: String;
    transformOrigin: Object;
    trafficFlowVisible: Boolean;
    zoomLevel: Number;
    children: Object;
    loadingStatus: MapLoadingStatus;
    mapElements: Object;
    maxZoomLevel: Number;
    minZoomLevel: Number;
    pitch: Number;
    routes: Object;
    tileSources: Object;
    customExperience: MapCustomExperience;
    businessLandmarksVisible: Boolean;
    zoomInteractionMode: MapInteractionMode;
    transitFeaturesVisible: Boolean;
    panInteractionMode: MapPanInteractionMode;
    tiltInteractionMode: MapInteractionMode;
    scene: MapScene;
    rotateInteractionMode: MapInteractionMode;
    is3DSupported: Boolean;
    isStreetsideSupported: Boolean;
    targetCamera: MapCamera;
    actualCamera: MapCamera;
    transitFeaturesEnabled: Boolean;
    businessLandmarksEnabled: Boolean;
    viewPadding: Thickness;
    styleSheet: MapStyleSheet;
    mapProjection: MapProjection;
    layers: Object;
    region: String;
    fontSize: Number;
    fontFamily: Object;
    fontStyle: Number;
    padding: Thickness;
    horizontalContentAlignment: Number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: Boolean;
    isEnabled: Boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: Number;
    characterSpacing: Number;
    template: Object;
    tabNavigation: Number;
    tabIndex: Number;
    verticalContentAlignment: Number;
    focusState: Number;
    isTextScaleFactorEnabled: Boolean;
    useSystemFocusVisuals: Boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: Boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: Number;
    elementSoundMode: Number;
    isFocusEngaged: Boolean;
    defaultStyleResourceUri: Object;
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

    static getLocation(element: Object): Object;


    static setLocation(element: Object, value: Object): void;


    static getNormalizedAnchorPoint(element: Object): Object;


    static setNormalizedAnchorPoint(element: Object, value: Object): void;


    tryTiltAsync(degrees: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryTiltToAsync(angleInDegrees: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryZoomInAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryZoomOutAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryZoomToAsync(zoomLevel: Number, callback: (error: Error, result: Boolean) => void): void ;

    trySetSceneAsync(scene: MapScene, callback: (error: Error, result: Boolean) => void): void ;
    trySetSceneAsync(scene: MapScene, animationKind: MapAnimationKind, callback: (error: Error, result: Boolean) => void): void ;

    tryPanAsync(horizontalPixels: Number, verticalPixels: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryPanToAsync(location: Object, callback: (error: Error, result: Boolean) => void): void ;

    trySetViewBoundsAsync(bounds: Object, margin: Thickness, animation: MapAnimationKind, callback: (error: Error, result: Boolean) => void): void ;

    trySetViewAsync(center: Object, callback: (error: Error, result: Boolean) => void): void ;
    trySetViewAsync(center: Object, zoomLevel: Number, callback: (error: Error, result: Boolean) => void): void ;
    trySetViewAsync(center: Object, zoomLevel: Number, heading: Number, desiredPitch: Number, callback: (error: Error, result: Boolean) => void): void ;
    trySetViewAsync(center: Object, zoomLevel: Number, heading: Number, desiredPitch: Number, animation: MapAnimationKind, callback: (error: Error, result: Boolean) => void): void ;

    tryRotateAsync(degrees: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryRotateToAsync(angleInDegrees: Number, callback: (error: Error, result: Boolean) => void): void ;

    getVisibleRegion(region: MapVisibleRegionKind): Object;

    findMapElementsAtOffset(offset: Object, radius: Number): Object;
    findMapElementsAtOffset(offset: Object): Object;

    getLocationFromOffset(offset: Object, desiredReferenceSystem: Number, location: Object): void;
    getLocationFromOffset(offset: Object, location: Object): void;

    startContinuousPan(horizontalPixelsPerSecond: Number, verticalPixelsPerSecond: Number): void;

    stopContinuousPan(): void;

    tryGetLocationFromOffset(offset: Object, location: Object): Boolean;
    tryGetLocationFromOffset(offset: Object, desiredReferenceSystem: Number, location: Object): Boolean;

    getOffsetFromLocation(location: Object, offset: Object): void;

    isLocationInView(location: Object, isInView: Boolean): void;

    startContinuousRotate(rateInDegreesPerSecond: Number): void;

    stopContinuousRotate(): void;

    startContinuousTilt(rateInDegreesPerSecond: Number): void;

    stopContinuousTilt(): void;

    startContinuousZoom(rateOfChangePerSecond: Number): void;

    stopContinuousZoom(): void;

    addListener(type: "CenterChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CenterChanged", listener: (ev: Event) => void): void ;
    on(type: "CenterChanged", listener: (ev: Event) => void): void ;
    off(type: "CenterChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadingChanged", listener: (ev: Event) => void): void ;
    on(type: "HeadingChanged", listener: (ev: Event) => void): void ;
    off(type: "HeadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LoadingStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LoadingStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "LoadingStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "LoadingStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapDoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "MapDoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "MapDoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "MapDoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapHolding", listener: (ev: Event) => void): void ;
    removeListener(type: "MapHolding", listener: (ev: Event) => void): void ;
    on(type: "MapHolding", listener: (ev: Event) => void): void ;
    off(type: "MapHolding", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "MapTapped", listener: (ev: Event) => void): void ;
    on(type: "MapTapped", listener: (ev: Event) => void): void ;
    off(type: "MapTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "PitchChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PitchChanged", listener: (ev: Event) => void): void ;
    on(type: "PitchChanged", listener: (ev: Event) => void): void ;
    off(type: "PitchChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "TransformOriginChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TransformOriginChanged", listener: (ev: Event) => void): void ;
    on(type: "TransformOriginChanged", listener: (ev: Event) => void): void ;
    off(type: "TransformOriginChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ZoomLevelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ZoomLevelChanged", listener: (ev: Event) => void): void ;
    on(type: "ZoomLevelChanged", listener: (ev: Event) => void): void ;
    off(type: "ZoomLevelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualCameraChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualCameraChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualCameraChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualCameraChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualCameraChanging", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualCameraChanging", listener: (ev: Event) => void): void ;
    on(type: "ActualCameraChanging", listener: (ev: Event) => void): void ;
    off(type: "ActualCameraChanging", listener: (ev: Event) => void): void ;
    
    addListener(type: "CustomExperienceChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CustomExperienceChanged", listener: (ev: Event) => void): void ;
    on(type: "CustomExperienceChanged", listener: (ev: Event) => void): void ;
    off(type: "CustomExperienceChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapElementClick", listener: (ev: Event) => void): void ;
    removeListener(type: "MapElementClick", listener: (ev: Event) => void): void ;
    on(type: "MapElementClick", listener: (ev: Event) => void): void ;
    off(type: "MapElementClick", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    on(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    off(type: "MapElementPointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    on(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    off(type: "MapElementPointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    on(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    off(type: "TargetCameraChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapRightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "MapRightTapped", listener: (ev: Event) => void): void ;
    on(type: "MapRightTapped", listener: (ev: Event) => void): void ;
    off(type: "MapRightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    on(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    off(type: "MapContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
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

  export class MapControlBusinessLandmarkClickEventArgs {
    localLocations: Object;
    constructor();

  }

  export class MapControlTransitFeatureClickEventArgs {
    displayName: String;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlBusinessLandmarkRightTappedEventArgs {
    localLocations: Object;
    constructor();

  }

  export class MapControlTransitFeatureRightTappedEventArgs {
    displayName: String;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlBusinessLandmarkPointerEnteredEventArgs {
    localLocations: Object;
    constructor();

  }

  export class MapControlTransitFeaturePointerEnteredEventArgs {
    displayName: String;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlBusinessLandmarkPointerExitedEventArgs {
    localLocations: Object;
    constructor();

  }

  export class MapControlTransitFeaturePointerExitedEventArgs {
    displayName: String;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlDataHelper {
    dispatcher: Object;
    constructor();
    constructor(map: MapControl);

    static createMapControl(rasterRenderMode: Boolean): MapControl;


    addListener(type: "BusinessLandmarkClick", listener: (ev: Event) => void): void ;
    removeListener(type: "BusinessLandmarkClick", listener: (ev: Event) => void): void ;
    on(type: "BusinessLandmarkClick", listener: (ev: Event) => void): void ;
    off(type: "BusinessLandmarkClick", listener: (ev: Event) => void): void ;
    
    addListener(type: "BusinessLandmarkRightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "BusinessLandmarkRightTapped", listener: (ev: Event) => void): void ;
    on(type: "BusinessLandmarkRightTapped", listener: (ev: Event) => void): void ;
    off(type: "BusinessLandmarkRightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "TransitFeatureClick", listener: (ev: Event) => void): void ;
    removeListener(type: "TransitFeatureClick", listener: (ev: Event) => void): void ;
    on(type: "TransitFeatureClick", listener: (ev: Event) => void): void ;
    off(type: "TransitFeatureClick", listener: (ev: Event) => void): void ;
    
    addListener(type: "TransitFeatureRightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "TransitFeatureRightTapped", listener: (ev: Event) => void): void ;
    on(type: "TransitFeatureRightTapped", listener: (ev: Event) => void): void ;
    off(type: "TransitFeatureRightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "BusinessLandmarkPointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "BusinessLandmarkPointerEntered", listener: (ev: Event) => void): void ;
    on(type: "BusinessLandmarkPointerEntered", listener: (ev: Event) => void): void ;
    off(type: "BusinessLandmarkPointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "BusinessLandmarkPointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "BusinessLandmarkPointerExited", listener: (ev: Event) => void): void ;
    on(type: "BusinessLandmarkPointerExited", listener: (ev: Event) => void): void ;
    off(type: "BusinessLandmarkPointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "TransitFeaturePointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "TransitFeaturePointerEntered", listener: (ev: Event) => void): void ;
    on(type: "TransitFeaturePointerEntered", listener: (ev: Event) => void): void ;
    off(type: "TransitFeaturePointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "TransitFeaturePointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "TransitFeaturePointerExited", listener: (ev: Event) => void): void ;
    on(type: "TransitFeaturePointerExited", listener: (ev: Event) => void): void ;
    off(type: "TransitFeaturePointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

