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
  CellularClass,
  SmsBroadcastType,
  SmsDataFormat,
  SmsDeviceStatus,
  SmsEncoding,
  SmsFilterActionType,
  SmsGeographicalScope,
  SmsMessageClass,
  SmsMessageFilter,
  SmsMessageType,
  SmsModemErrorCode,
  DeleteSmsMessageOperation,
  DeleteSmsMessagesOperation,
  GetSmsDeviceOperation,
  GetSmsMessageOperation,
  GetSmsMessagesOperation,
  ISmsBinaryMessage,
  ISmsDevice,
  ISmsMessage,
  ISmsMessageBase,
  ISmsTextMessage,
  SendSmsMessageOperation,
  SmsAppMessage,
  SmsBinaryMessage,
  SmsBroadcastMessage,
  SmsDevice,
  SmsDevice2,
  SmsDeviceMessageStore,
  SmsFilterRule,
  SmsFilterRules,
  SmsMessageReceivedEventArgs,
  SmsMessageReceivedTriggerDetails,
  SmsMessageRegistration,
  SmsReceivedEventDetails,
  SmsSendMessageResult,
  SmsStatusMessage,
  SmsTextMessage,
  SmsTextMessage2,
  SmsVoicemailMessage,
  SmsWapMessage,
} = load(namespace.name);

reference(namespace.externalReference);
