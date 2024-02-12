  export enum VoiceCommandCompletionReason {
    unknown,
    communicationFailed,
    resourceLimitsExceeded,
    canceled,
    timeoutExceeded,
    appLaunched,
    completed,
  }

  export enum VoiceCommandContentTileType {
    titleOnly,
    titleWithText,
    titleWith68x68Icon,
    titleWith68x68IconAndText,
    titleWith68x92Icon,
    titleWith68x92IconAndText,
    titleWith280x140Icon,
    titleWith280x140IconAndText,
  }

  export class VoiceCommand {
    commandName: String;
    properties: Object;
    speechRecognitionResult: Object;
    constructor();

  }

  export class VoiceCommandCompletedEventArgs {
    reason: VoiceCommandCompletionReason;
    constructor();

  }

  export class VoiceCommandConfirmationResult {
    confirmed: Boolean;
    constructor();

  }

  export class VoiceCommandContentTile {
    title: String;
    textLine3: String;
    textLine2: String;
    textLine1: String;
    image: Object;
    contentTileType: VoiceCommandContentTileType;
    appLaunchArgument: String;
    appContext: Object;
    constructor();

  }

  export class VoiceCommandDefinition {
    language: String;
    name: String;
    constructor();

    setPhraseListAsync(phraseListName: String, phraseList: Object, callback: (error: Error) => void): void ;

  }

  export class VoiceCommandDefinitionManager {
    static installedCommandDefinitions: Object;
    constructor();

    static installCommandDefinitionsFromStorageFileAsync(file: Object, callback: (error: Error) => void): void ;


  }

  export class VoiceCommandDisambiguationResult {
    selectedItem: VoiceCommandContentTile;
    constructor();

  }

  export class VoiceCommandResponse {
    static maxSupportedVoiceCommandContentTiles: Number;
    repeatMessage: VoiceCommandUserMessage;
    message: VoiceCommandUserMessage;
    appLaunchArgument: String;
    voiceCommandContentTiles: Object;
    constructor();

    static createResponse(userMessage: VoiceCommandUserMessage): VoiceCommandResponse;
    static createResponse(message: VoiceCommandUserMessage, contentTiles: Object): VoiceCommandResponse;


    static createResponseForPrompt(message: VoiceCommandUserMessage, repeatMessage: VoiceCommandUserMessage): VoiceCommandResponse;
    static createResponseForPrompt(message: VoiceCommandUserMessage, repeatMessage: VoiceCommandUserMessage, contentTiles: Object): VoiceCommandResponse;


  }

  export class VoiceCommandServiceConnection {
    language: Object;
    constructor();

    static fromAppServiceTriggerDetails(triggerDetails: Object): VoiceCommandServiceConnection;


    getVoiceCommandAsync(callback: (error: Error, result: VoiceCommand) => void): void ;

    requestConfirmationAsync(response: VoiceCommandResponse, callback: (error: Error, result: VoiceCommandConfirmationResult) => void): void ;

    requestDisambiguationAsync(response: VoiceCommandResponse, callback: (error: Error, result: VoiceCommandDisambiguationResult) => void): void ;

    reportProgressAsync(response: VoiceCommandResponse, callback: (error: Error) => void): void ;

    reportSuccessAsync(response: VoiceCommandResponse, callback: (error: Error) => void): void ;

    reportFailureAsync(response: VoiceCommandResponse, callback: (error: Error) => void): void ;

    requestAppLaunchAsync(response: VoiceCommandResponse, callback: (error: Error) => void): void ;

    addListener(type: "VoiceCommandCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "VoiceCommandCompleted", listener: (ev: Event) => void): void ;
    on(type: "VoiceCommandCompleted", listener: (ev: Event) => void): void ;
    off(type: "VoiceCommandCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VoiceCommandUserMessage {
    spokenMessage: String;
    displayMessage: String;
    constructor();

  }

