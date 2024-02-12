/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.payments.provider
  name: "windows.applicationmodel.payments.provider",
  externalReference: [
    "Windows.ApplicationModel.Payments",
    "Windows.Foundation",
  ]
};

export const {
  PaymentAppCanMakePaymentTriggerDetails,
  PaymentAppManager,
  PaymentTransaction,
  PaymentTransactionAcceptResult,
} = load(namespace.name);

reference(namespace.externalReference);
