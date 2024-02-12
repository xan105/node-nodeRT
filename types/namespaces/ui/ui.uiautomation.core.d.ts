  export class AutomationAnnotationTypeRegistration {
    localId: Number;
    constructor();
  }

  export class AutomationRemoteOperationOperandId {
    value: Number;
    constructor();
  }

  export enum AutomationRemoteOperationStatus {
    success,
    malformedBytecode,
    instructionLimitExceeded,
    unhandledException,
    executionFailure,
  }

  export class AutomationRemoteOperationResult {
    errorLocation: Number;
    extendedError: Number;
    status: AutomationRemoteOperationStatus;
    constructor();

    hasOperand(operandId: AutomationRemoteOperationOperandId): Boolean;

    getOperand(operandId: AutomationRemoteOperationOperandId): Object;

  }

  export class CoreAutomationRegistrar {
    constructor();

    static registerAnnotationType(guid: String): AutomationAnnotationTypeRegistration;


    static unregisterAnnotationType(registration: AutomationAnnotationTypeRegistration): void;


  }

  export class CoreAutomationRemoteOperation {
    constructor();

    isOpcodeSupported(opcode: Number): Boolean;

    importElement(operandId: AutomationRemoteOperationOperandId, element: Object): void;

    importTextRange(operandId: AutomationRemoteOperationOperandId, textRange: Object): void;

    addToResults(operandId: AutomationRemoteOperationOperandId): void;

    execute(bytecodeBuffer: Array<Number>): AutomationRemoteOperationResult;

    importConnectionBoundObject(operandId: AutomationRemoteOperationOperandId, connectionBoundObject: Object): void;

  }

  export class CoreAutomationRemoteOperationContext {
    constructor();

    getOperand(id: AutomationRemoteOperationOperandId): Object;

    setOperand(id: AutomationRemoteOperationOperandId, operand: Object): void;
    setOperand(id: AutomationRemoteOperationOperandId, operand: Object, operandInterfaceId: String): void;

  }

  export class ICoreAutomationConnectionBoundObjectProvider {
    isComThreadingRequired: Boolean;
    constructor();

  }

  export class ICoreAutomationRemoteOperationExtensionProvider {
    constructor();

    callExtension(extensionId: String, context: CoreAutomationRemoteOperationContext, operandIds: Array<AutomationRemoteOperationOperandId>): void;

    isExtensionSupported(extensionId: String): Boolean;

  }

  export class RemoteAutomationClientSession {
    sessionId: String;
    constructor();
    constructor(name: String);
    constructor(name: String, sessionId: String);

    createWindowAsync(remoteWindowId: Number, remoteProcessId: Number, parentAutomationElement: Object, callback: (error: Error, result: RemoteAutomationWindow) => void): void ;

    start(): void;

    stop(): void;

    addListener(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    on(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    off(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "Disconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "Disconnected", listener: (ev: Event) => void): void ;
    on(type: "Disconnected", listener: (ev: Event) => void): void ;
    off(type: "Disconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RemoteAutomationConnectionRequestedEventArgs {
    localPipeName: String;
    remoteProcessId: Number;
    constructor();

  }

  export class RemoteAutomationDisconnectedEventArgs {
    localPipeName: String;
    constructor();

  }

  export class RemoteAutomationServer {
    constructor();

    static reportSession(sessionId: String): void;


  }

  export class RemoteAutomationWindow {
    automationProvider: Object;
    constructor();

    unregisterAsync(callback: (error: Error) => void): void ;

  }

