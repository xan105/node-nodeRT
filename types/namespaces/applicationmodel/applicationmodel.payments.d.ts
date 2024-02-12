  export enum PaymentCanMakePaymentResultStatus {
    unknown,
    yes,
    no,
    notAllowed,
    userNotSignedIn,
    specifiedPaymentMethodIdsNotSupported,
    noQualifyingCardOnFile,
  }

  export enum PaymentOptionPresence {
    none,
    optional,
    required,
  }

  export enum PaymentRequestChangeKind {
    shippingOption,
    shippingAddress,
  }

  export enum PaymentRequestCompletionStatus {
    succeeded,
    failed,
    unknown,
  }

  export enum PaymentRequestStatus {
    succeeded,
    failed,
    canceled,
  }

  export enum PaymentShippingType {
    shipping,
    delivery,
    pickup,
  }

  export class PaymentAddress {
    sortingCode: String;
    region: String;
    recipient: String;
    postalCode: String;
    phoneNumber: String;
    organization: String;
    languageCode: String;
    dependentLocality: String;
    country: String;
    city: String;
    addressLines: Object;
    properties: Object;
    constructor();

  }

  export class PaymentCanMakePaymentResult {
    status: PaymentCanMakePaymentResultStatus;
    constructor();
    constructor(value: PaymentCanMakePaymentResultStatus);

  }

  export class PaymentCurrencyAmount {
    value: String;
    currencySystem: String;
    currency: String;
    constructor();
    constructor(value: String, currency: String);
    constructor(value: String, currency: String, currencySystem: String);

  }

  export class PaymentDetails {
    total: PaymentItem;
    shippingOptions: Object;
    modifiers: Object;
    displayItems: Object;
    constructor();
    constructor(total: PaymentItem);
    constructor(total: PaymentItem, displayItems: Object);

  }

  export class PaymentDetailsModifier {
    additionalDisplayItems: Object;
    jsonData: String;
    supportedMethodIds: Object;
    total: PaymentItem;
    constructor();
    constructor(supportedMethodIds: Object, total: PaymentItem);
    constructor(supportedMethodIds: Object, total: PaymentItem, additionalDisplayItems: Object);
    constructor(supportedMethodIds: Object, total: PaymentItem, additionalDisplayItems: Object, jsonData: String);

  }

  export class PaymentItem {
    pending: Boolean;
    label: String;
    amount: PaymentCurrencyAmount;
    constructor();
    constructor(label: String, amount: PaymentCurrencyAmount);

  }

  export class PaymentMediator {
    constructor();

    getSupportedMethodIdsAsync(callback: (error: Error, result: Object) => void): void ;

    submitPaymentRequestAsync(paymentRequest: PaymentRequest, callback: (error: Error, result: PaymentRequestSubmitResult) => void): void ;
    submitPaymentRequestAsync(paymentRequest: PaymentRequest, changeHandler: Object, callback: (error: Error, result: PaymentRequestSubmitResult) => void): void ;

    canMakePaymentAsync(paymentRequest: PaymentRequest, callback: (error: Error, result: PaymentCanMakePaymentResult) => void): void ;

  }

  export class PaymentMerchantInfo {
    packageFullName: String;
    uri: Object;
    constructor();
    constructor(uri: Object);

  }

  export class PaymentMethodData {
    jsonData: String;
    supportedMethodIds: Object;
    constructor();
    constructor(supportedMethodIds: Object);
    constructor(supportedMethodIds: Object, jsonData: String);

  }

  export class PaymentOptions {
    shippingType: PaymentShippingType;
    requestShipping: Boolean;
    requestPayerPhoneNumber: PaymentOptionPresence;
    requestPayerName: PaymentOptionPresence;
    requestPayerEmail: PaymentOptionPresence;
    constructor();

  }

  export class PaymentRequest {
    details: PaymentDetails;
    merchantInfo: PaymentMerchantInfo;
    methodData: Object;
    options: PaymentOptions;
    id: String;
    constructor();
    constructor(details: PaymentDetails, methodData: Object, merchantInfo: PaymentMerchantInfo, options: PaymentOptions, id: String);
    constructor(details: PaymentDetails, methodData: Object);
    constructor(details: PaymentDetails, methodData: Object, merchantInfo: PaymentMerchantInfo);
    constructor(details: PaymentDetails, methodData: Object, merchantInfo: PaymentMerchantInfo, options: PaymentOptions);

  }

  export class PaymentRequestChangedArgs {
    changeKind: PaymentRequestChangeKind;
    selectedShippingOption: PaymentShippingOption;
    shippingAddress: PaymentAddress;
    constructor();

    acknowledge(changeResult: PaymentRequestChangedResult): void;

  }

  export class PaymentRequestChangedResult {
    updatedPaymentDetails: PaymentDetails;
    message: String;
    changeAcceptedByMerchant: Boolean;
    constructor();
    constructor(changeAcceptedByMerchant: Boolean);
    constructor(changeAcceptedByMerchant: Boolean, updatedPaymentDetails: PaymentDetails);

  }

  export class PaymentRequestSubmitResult {
    response: PaymentResponse;
    status: PaymentRequestStatus;
    constructor();

  }

  export class PaymentResponse {
    payerEmail: String;
    payerName: String;
    payerPhoneNumber: String;
    paymentToken: PaymentToken;
    shippingAddress: PaymentAddress;
    shippingOption: PaymentShippingOption;
    constructor();

    completeAsync(status: PaymentRequestCompletionStatus, callback: (error: Error) => void): void ;

  }

  export class PaymentShippingOption {
    tag: String;
    label: String;
    isSelected: Boolean;
    amount: PaymentCurrencyAmount;
    constructor();
    constructor(label: String, amount: PaymentCurrencyAmount);
    constructor(label: String, amount: PaymentCurrencyAmount, selected: Boolean);
    constructor(label: String, amount: PaymentCurrencyAmount, selected: Boolean, tag: String);

  }

  export class PaymentToken {
    jsonDetails: String;
    paymentMethodId: String;
    constructor();
    constructor(paymentMethodId: String);
    constructor(paymentMethodId: String, jsonDetails: String);

  }

export const PaymentCanMakePaymentResultStatus: any;
export const PaymentOptionPresence: any;
export const PaymentRequestChangeKind: any;
export const PaymentRequestCompletionStatus: any;
export const PaymentRequestStatus: any;
export const PaymentShippingType: any;
export const PaymentAddress: any;
export const PaymentCanMakePaymentResult: any;
export const PaymentCurrencyAmount: any;
export const PaymentDetails: any;
export const PaymentDetailsModifier: any;
export const PaymentItem: any;
export const PaymentMediator: any;
export const PaymentMerchantInfo: any;
export const PaymentMethodData: any;
export const PaymentOptions: any;
export const PaymentRequest: any;
export const PaymentRequestChangedArgs: any;
export const PaymentRequestChangedResult: any;
export const PaymentRequestSubmitResult: any;
export const PaymentResponse: any;
export const PaymentShippingOption: any;
export const PaymentToken: any;
export * as provider from "./applicationmodel.payments.provider.js";
