  export class CallsBackgroundContract {
    constructor();
  }

  export enum PhoneCallBlockedReason {
    inCallBlockingList,
    privateNumber,
    unknownNumber,
  }

  export enum PhoneIncomingCallDismissedReason {
    unknown,
    callRejected,
    textReply,
    connectionLost,
  }

  export enum PhoneLineChangeKind {
    added,
    removed,
    propertiesChanged,
  }

  export enum PhoneLineProperties {
    none,
    brandingOptions,
    canDial,
    cellularDetails,
    displayColor,
    displayName,
    networkName,
    networkState,
    transport,
    voicemail,
  }

  export enum PhoneTriggerType {
    newVoicemailMessage,
    callHistoryChanged,
    lineChanged,
    airplaneModeDisabledForEmergencyCall,
    callOriginDataRequest,
    callBlocked,
    incomingCallDismissed,
    incomingCallNotification,
  }

  export class PhoneCallBlockedTriggerDetails {
    callBlockedReason: PhoneCallBlockedReason;
    lineId: String;
    phoneNumber: String;
    constructor();

  }

  export class PhoneCallOriginDataRequestTriggerDetails {
    phoneNumber: String;
    requestId: String;
    constructor();

  }

  export class PhoneIncomingCallDismissedTriggerDetails {
    dismissalTime: Date;
    displayName: String;
    lineId: String;
    phoneNumber: String;
    reason: PhoneIncomingCallDismissedReason;
    textReplyMessage: String;
    constructor();

  }

  export class PhoneIncomingCallNotificationTriggerDetails {
    callId: String;
    lineId: String;
    constructor();

  }

  export class PhoneLineChangedTriggerDetails {
    changeType: PhoneLineChangeKind;
    lineId: String;
    constructor();

    hasLinePropertyChanged(lineProperty: PhoneLineProperties): Boolean;

  }

  export class PhoneNewVoicemailMessageTriggerDetails {
    lineId: String;
    operatorMessage: String;
    voicemailCount: Number;
    constructor();

  }

