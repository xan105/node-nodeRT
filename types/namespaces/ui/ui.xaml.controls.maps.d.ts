  export class Point {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class Thickness {
    constructor();
  }

  export class FontWeight {
    weight: number;
    constructor();
  }

  export class Size {
    constructor();
  }

  export class MapZoomLevelRange {
    min: number;
    max: number;
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
    static adminDistrict: string;
    static adminDistrictCapital: string;
    static airport: string;
    static area: string;
    static arterialRoad: string;
    static building: string;
    static business: string;
    static capital: string;
    static cemetery: string;
    static continent: string;
    static controlledAccessHighway: string;
    static countryRegion: string;
    static countryRegionCapital: string;
    static district: string;
    static drivingRoute: string;
    static education: string;
    static educationBuilding: string;
    static foodPoint: string;
    static forest: string;
    static golfCourse: string;
    static highSpeedRamp: string;
    static highway: string;
    static indigenousPeoplesReserve: string;
    static island: string;
    static majorRoad: string;
    static medical: string;
    static medicalBuilding: string;
    static military: string;
    static naturalPoint: string;
    static nautical: string;
    static neighborhood: string;
    static park: string;
    static peak: string;
    static playingField: string;
    static point: string;
    static pointOfInterest: string;
    static political: string;
    static populatedPlace: string;
    static railway: string;
    static ramp: string;
    static reserve: string;
    static river: string;
    static road: string;
    static roadExit: string;
    static roadShield: string;
    static routeLine: string;
    static runway: string;
    static sand: string;
    static shoppingCenter: string;
    static stadium: string;
    static street: string;
    static structure: string;
    static tollRoad: string;
    static trail: string;
    static transit: string;
    static transitBuilding: string;
    static transportation: string;
    static unpavedStreet: string;
    static vegetation: string;
    static volcanicPeak: string;
    static walkingRoute: string;
    static water: string;
    static waterPoint: string;
    static waterRoute: string;
    constructor();

  }

  export class MapStyleSheetEntryStates {
    static disabled: string;
    static hover: string;
    static selected: string;
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
    x: number;
    y: number;
    zoomLevel: number;
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
    x: number;
    y: number;
    zoomLevel: number;
    constructor();

  }

  export class MapCamera {
    roll: number;
    pitch: number;
    location: Object;
    heading: number;
    fieldOfView: number;
    dispatcher: Object;
    constructor();
    constructor(location: Object);
    constructor(location: Object, headingInDegrees: number);
    constructor(location: Object, headingInDegrees: number, pitchInDegrees: number);
    constructor(location: Object, headingInDegrees: number, pitchInDegrees: number, rollInDegrees: number, fieldOfViewInDegrees: number);

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
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
    tag: Object;
    mapStyleSheetEntryState: string;
    mapStyleSheetEntry: string;
    isEnabled: boolean;
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
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
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
    static createFromBoundingBox(bounds: Object, headingInDegrees: number, pitchInDegrees: number): MapScene;


    static createFromCamera(camera: MapCamera): MapScene;


    static createFromLocation(location: Object): MapScene;
    static createFromLocation(location: Object, headingInDegrees: number, pitchInDegrees: number): MapScene;


    static createFromLocationAndRadius(location: Object, radiusInMeters: number): MapScene;
    static createFromLocationAndRadius(location: Object, radiusInMeters: number, headingInDegrees: number, pitchInDegrees: number): MapScene;


    static createFromLocations(locations: Object): MapScene;
    static createFromLocations(locations: Object, headingInDegrees: number, pitchInDegrees: number): MapScene;


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


    static parseFromJson(styleAsJson: string): MapStyleSheet;


    static tryParseFromJson(styleAsJson: string, styleSheet: Object): boolean;


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
    isRetryEnabled: boolean;
    isFadingEnabled: boolean;
    dataSource: MapTileDataSource;
    bounds: Object;
    allowOverstretch: boolean;
    zoomLevelRange: MapZoomLevelRange;
    zIndex: number;
    visible: boolean;
    tilePixelSize: number;
    layer: MapTileLayer;
    isTransparencyEnabled: boolean;
    dispatcher: Object;
    constructor();
    constructor(dataSource: MapTileDataSource);
    constructor(dataSource: MapTileDataSource, zoomLevelRange: MapZoomLevelRange);
    constructor(dataSource: MapTileDataSource, zoomLevelRange: MapZoomLevelRange, bounds: Object);
    constructor(dataSource: MapTileDataSource, zoomLevelRange: MapZoomLevelRange, bounds: Object, tileSizeInPixels: number);

  }

  export class StreetsidePanorama {
    location: Object;
    dispatcher: Object;
    constructor();

    static findNearbyAsync(location: Object, callback: (error: Error, result: StreetsidePanorama) => void): void ;
    static findNearbyAsync(location: Object, radiusInMeters: number, callback: (error: Error, result: StreetsidePanorama) => void): void ;


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
    uriFormatString: string;
    allowCaching: boolean;
    additionalRequestHeaders: Object;
    dispatcher: Object;
    constructor();
    constructor(uriFormatString: string);

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
    uriFormatString: string;
    dispatcher: Object;
    constructor();
    constructor(uriFormatString: string);

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
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
    tag: Object;
    mapStyleSheetEntryState: string;
    mapStyleSheetEntry: string;
    isEnabled: boolean;
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
    roll: number;
    pitch: number;
    model: MapModel3D;
    location: Object;
    heading: number;
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
    tag: Object;
    mapStyleSheetEntryState: string;
    mapStyleSheetEntry: string;
    isEnabled: boolean;
    dispatcher: Object;
    constructor();

  }

  export class MapElementsLayer {
    static mapElementsProperty: Object;
    static mapTabIndexProperty: Object;
    static visibleProperty: Object;
    static zIndexProperty: Object;
    mapElements: Object;
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
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
    title: string;
    normalizedAnchorPoint: Object;
    location: Object;
    image: Object;
    collisionBehaviorDesired: MapElementCollisionBehavior;
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
    tag: Object;
    mapStyleSheetEntryState: string;
    mapStyleSheetEntry: string;
    isEnabled: boolean;
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
    strokeThickness: number;
    strokeDashed: boolean;
    strokeColor: Object;
    path: Object;
    fillColor: Object;
    paths: Object;
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
    tag: Object;
    mapStyleSheetEntryState: string;
    mapStyleSheetEntry: string;
    isEnabled: boolean;
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
    strokeThickness: number;
    strokeDashed: boolean;
    strokeColor: Object;
    path: Object;
    zIndex: number;
    visible: boolean;
    mapTabIndex: number;
    tag: Object;
    mapStyleSheetEntryState: string;
    mapStyleSheetEntry: string;
    isEnabled: boolean;
    dispatcher: Object;
    constructor();

  }

  export class StreetsideExperience {
    zoomButtonsVisible: boolean;
    streetLabelsVisible: boolean;
    overviewMapVisible: boolean;
    exitButtonVisible: boolean;
    cursorVisible: boolean;
    addressTextVisible: boolean;
    dispatcher: Object;
    constructor();
    constructor(panorama: StreetsidePanorama);
    constructor(panorama: StreetsidePanorama, headingInDegrees: number, pitchInDegrees: number, fieldOfViewInDegrees: number);

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
    desiredPitch: number;
    colorScheme: MapColorScheme;
    pedestrianFeaturesVisible: boolean;
    center: Object;
    landmarksVisible: boolean;
    heading: number;
    watermarkMode: MapWatermarkMode;
    mapServiceToken: string;
    transformOrigin: Object;
    trafficFlowVisible: boolean;
    zoomLevel: number;
    children: Object;
    loadingStatus: MapLoadingStatus;
    mapElements: Object;
    maxZoomLevel: number;
    minZoomLevel: number;
    pitch: number;
    routes: Object;
    tileSources: Object;
    customExperience: MapCustomExperience;
    businessLandmarksVisible: boolean;
    zoomInteractionMode: MapInteractionMode;
    transitFeaturesVisible: boolean;
    panInteractionMode: MapPanInteractionMode;
    tiltInteractionMode: MapInteractionMode;
    scene: MapScene;
    rotateInteractionMode: MapInteractionMode;
    is3DSupported: boolean;
    isStreetsideSupported: boolean;
    targetCamera: MapCamera;
    actualCamera: MapCamera;
    transitFeaturesEnabled: boolean;
    businessLandmarksEnabled: boolean;
    viewPadding: Thickness;
    styleSheet: MapStyleSheet;
    mapProjection: MapProjection;
    layers: Object;
    region: string;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: Object;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    static getLocation(element: Object): Object;


    static setLocation(element: Object, value: Object): void;


    static getNormalizedAnchorPoint(element: Object): Object;


    static setNormalizedAnchorPoint(element: Object, value: Object): void;


    tryTiltAsync(degrees: number, callback: (error: Error, result: boolean) => void): void ;

    tryTiltToAsync(angleInDegrees: number, callback: (error: Error, result: boolean) => void): void ;

    tryZoomInAsync(callback: (error: Error, result: boolean) => void): void ;

    tryZoomOutAsync(callback: (error: Error, result: boolean) => void): void ;

    tryZoomToAsync(zoomLevel: number, callback: (error: Error, result: boolean) => void): void ;

    trySetSceneAsync(scene: MapScene, callback: (error: Error, result: boolean) => void): void ;
    trySetSceneAsync(scene: MapScene, animationKind: MapAnimationKind, callback: (error: Error, result: boolean) => void): void ;

    tryPanAsync(horizontalPixels: number, verticalPixels: number, callback: (error: Error, result: boolean) => void): void ;

    tryPanToAsync(location: Object, callback: (error: Error, result: boolean) => void): void ;

    trySetViewBoundsAsync(bounds: Object, margin: Thickness, animation: MapAnimationKind, callback: (error: Error, result: boolean) => void): void ;

    trySetViewAsync(center: Object, callback: (error: Error, result: boolean) => void): void ;
    trySetViewAsync(center: Object, zoomLevel: number, callback: (error: Error, result: boolean) => void): void ;
    trySetViewAsync(center: Object, zoomLevel: number, heading: number, desiredPitch: number, callback: (error: Error, result: boolean) => void): void ;
    trySetViewAsync(center: Object, zoomLevel: number, heading: number, desiredPitch: number, animation: MapAnimationKind, callback: (error: Error, result: boolean) => void): void ;

    tryRotateAsync(degrees: number, callback: (error: Error, result: boolean) => void): void ;

    tryRotateToAsync(angleInDegrees: number, callback: (error: Error, result: boolean) => void): void ;

    getVisibleRegion(region: MapVisibleRegionKind): Object;

    findMapElementsAtOffset(offset: Object, radius: number): Object;
    findMapElementsAtOffset(offset: Object): Object;

    getLocationFromOffset(offset: Object, desiredReferenceSystem: number, location: Object): void;
    getLocationFromOffset(offset: Object, location: Object): void;

    startContinuousPan(horizontalPixelsPerSecond: number, verticalPixelsPerSecond: number): void;

    stopContinuousPan(): void;

    tryGetLocationFromOffset(offset: Object, location: Object): boolean;
    tryGetLocationFromOffset(offset: Object, desiredReferenceSystem: number, location: Object): boolean;

    getOffsetFromLocation(location: Object, offset: Object): void;

    isLocationInView(location: Object, isInView: boolean): void;

    startContinuousRotate(rateInDegreesPerSecond: number): void;

    stopContinuousRotate(): void;

    startContinuousTilt(rateInDegreesPerSecond: number): void;

    stopContinuousTilt(): void;

    startContinuousZoom(rateOfChangePerSecond: number): void;

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
    displayName: string;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlBusinessLandmarkRightTappedEventArgs {
    localLocations: Object;
    constructor();

  }

  export class MapControlTransitFeatureRightTappedEventArgs {
    displayName: string;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlBusinessLandmarkPointerEnteredEventArgs {
    localLocations: Object;
    constructor();

  }

  export class MapControlTransitFeaturePointerEnteredEventArgs {
    displayName: string;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlBusinessLandmarkPointerExitedEventArgs {
    localLocations: Object;
    constructor();

  }

  export class MapControlTransitFeaturePointerExitedEventArgs {
    displayName: string;
    location: Object;
    transitProperties: Object;
    constructor();

  }

  export class MapControlDataHelper {
    dispatcher: Object;
    constructor();
    constructor(map: MapControl);

    static createMapControl(rasterRenderMode: boolean): MapControl;


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

