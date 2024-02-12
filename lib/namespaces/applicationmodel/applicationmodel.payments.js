/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.payments
  name: "windows.applicationmodel.payments",
  externalReference: [
    "Windows.Foundation",
  ]
};

export const {
  PaymentCanMakePaymentResultStatus,
  PaymentOptionPresence,
  PaymentRequestChangeKind,
  PaymentRequestCompletionStatus,
  PaymentRequestStatus,
  PaymentShippingType,
  PaymentAddress,
  PaymentCanMakePaymentResult,
  PaymentCurrencyAmount,
  PaymentDetails,
  PaymentDetailsModifier,
  PaymentItem,
  PaymentMediator,
  PaymentMerchantInfo,
  PaymentMethodData,
  PaymentOptions,
  PaymentRequest,
  PaymentRequestChangedArgs,
  PaymentRequestChangedResult,
  PaymentRequestSubmitResult,
  PaymentResponse,
  PaymentShippingOption,
  PaymentToken,
} = load(namespace.name);

reference(namespace.externalReference);

export * as provider from "./applicationmodel.payments.provider.js";