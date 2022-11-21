/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.calls.background
  name: "windows.applicationmodel.calls.background",
  externalReference: [
  ]
};

export const {
  PhoneCallBlockedReason,
  PhoneTriggerType,
  PhoneLineChangeKind,
  PhoneLineProperties,
  PhoneCallBlockedTriggerDetails,
  PhoneCallOriginDataRequestTriggerDetails,
  PhoneNewVoicemailMessageTriggerDetails,
  PhoneLineChangedTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
