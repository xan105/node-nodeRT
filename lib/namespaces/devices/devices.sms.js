/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.sms
  name: "windows.devices.sms",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  SmsMessageFilter,
  SmsMessageClass,
  SmsMessageType,
  CellularClass,
  SmsDataFormat,
  SmsEncoding,
  SmsGeographicalScope,
  SmsBroadcastType,
  SmsDeviceStatus,
  SmsModemErrorCode,
  SmsFilterActionType,
  ISmsMessage,
  ISmsBinaryMessage,
  SmsBinaryMessage,
  ISmsTextMessage,
  SmsTextMessage,
  DeleteSmsMessageOperation,
  DeleteSmsMessagesOperation,
  GetSmsMessageOperation,
  GetSmsMessagesOperation,
  SmsDeviceMessageStore,
  SendSmsMessageOperation,
  SmsMessageReceivedEventArgs,
  SmsDevice,
  GetSmsDeviceOperation,
  ISmsDevice,
  SmsReceivedEventDetails,
  ISmsMessageBase,
  SmsTextMessage2,
  SmsWapMessage,
  SmsAppMessage,
  SmsBroadcastMessage,
  SmsVoicemailMessage,
  SmsStatusMessage,
  SmsSendMessageResult,
  SmsDevice2,
  SmsMessageReceivedTriggerDetails,
  SmsFilterRule,
  SmsFilterRules,
  SmsMessageRegistration,
} = load(namespace.name);

reference(namespace.externalReference);
