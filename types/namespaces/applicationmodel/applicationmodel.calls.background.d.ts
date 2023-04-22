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
    lineId: string;
    phoneNumber: string;
    constructor();

  }

  export class PhoneCallOriginDataRequestTriggerDetails {
    phoneNumber: string;
    requestId: string;
    constructor();

  }

  export class PhoneNewVoicemailMessageTriggerDetails {
    lineId: string;
    operatorMessage: string;
    voicemailCount: number;
    constructor();

  }

  export class PhoneLineChangedTriggerDetails {
    changeType: PhoneLineChangeKind;
    lineId: string;
    constructor();

    hasLinePropertyChanged(lineProperty: PhoneLineProperties): boolean;

  }

