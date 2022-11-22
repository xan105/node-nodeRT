  export class CallsBackgroundContract {
    constructor();
  }

  export enum PhoneCallBlockedReason {
    inCallBlockingList,
    privateNumber,
    unknownNumber,
  }

  export enum PhoneTriggerType {
    newVoicemailMessage,
    callHistoryChanged,
    lineChanged,
    airplaneModeDisabledForEmergencyCall,
    callOriginDataRequest,
    callBlocked,
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

  export class PhoneNewVoicemailMessageTriggerDetails {
    lineId: String;
    operatorMessage: String;
    voicemailCount: Number;
    constructor();

  }

  export class PhoneLineChangedTriggerDetails {
    changeType: PhoneLineChangeKind;
    lineId: String;
    constructor();

    hasLinePropertyChanged(lineProperty: PhoneLineProperties): Boolean;

  }

