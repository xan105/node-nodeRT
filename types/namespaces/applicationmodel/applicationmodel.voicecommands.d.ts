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

  export enum VoiceCommandCompletionReason {
    unknown,
    communicationFailed,
    resourceLimitsExceeded,
    canceled,
    timeoutExceeded,
    appLaunched,
    completed,
  }

  export class VoiceCommandDefinition {
    language: string;
    name: string;
    constructor();

    setPhraseListAsync(phraseListName: string, phraseList: Object, callback: (error: Error) => void): void ;

  }

  export class VoiceCommandDefinitionManager {
    static installedCommandDefinitions: Object;
    constructor();

    static installCommandDefinitionsFromStorageFileAsync(file: Object, callback: (error: Error) => void): void ;


  }

  export class VoiceCommandContentTile {
    title: string;
    textLine3: string;
    textLine2: string;
    textLine1: string;
    image: Object;
    contentTileType: VoiceCommandContentTileType;
    appLaunchArgument: string;
    appContext: Object;
    constructor();

  }

  export class VoiceCommandUserMessage {
    spokenMessage: string;
    displayMessage: string;
    constructor();

  }

  export class VoiceCommand {
    commandName: string;
    properties: Object;
    speechRecognitionResult: Object;
    constructor();

  }

  export class VoiceCommandResponse {
    static maxSupportedVoiceCommandContentTiles: number;
    repeatMessage: VoiceCommandUserMessage;
    message: VoiceCommandUserMessage;
    appLaunchArgument: string;
    voiceCommandContentTiles: Object;
    constructor();

    static createResponse(userMessage: VoiceCommandUserMessage): VoiceCommandResponse;
    static createResponse(message: VoiceCommandUserMessage, contentTiles: Object): VoiceCommandResponse;


    static createResponseForPrompt(message: VoiceCommandUserMessage, repeatMessage: VoiceCommandUserMessage): VoiceCommandResponse;
    static createResponseForPrompt(message: VoiceCommandUserMessage, repeatMessage: VoiceCommandUserMessage, contentTiles: Object): VoiceCommandResponse;


  }

  export class VoiceCommandConfirmationResult {
    confirmed: boolean;
    constructor();

  }

  export class VoiceCommandDisambiguationResult {
    selectedItem: VoiceCommandContentTile;
    constructor();

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

  export class VoiceCommandCompletedEventArgs {
    reason: VoiceCommandCompletionReason;
    constructor();

  }

