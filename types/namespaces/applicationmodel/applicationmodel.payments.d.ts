  export enum PaymentRequestStatus {
    succeeded,
    failed,
    canceled,
  }

  export enum PaymentRequestCompletionStatus {
    succeeded,
    failed,
    unknown,
  }

  export enum PaymentRequestChangeKind {
    shippingOption,
    shippingAddress,
  }

  export enum PaymentOptionPresence {
    none,
    optional,
    required,
  }

  export enum PaymentShippingType {
    shipping,
    delivery,
    pickup,
  }

  export enum PaymentCanMakePaymentResultStatus {
    unknown,
    yes,
    no,
    notAllowed,
    userNotSignedIn,
    specifiedPaymentMethodIdsNotSupported,
    noQualifyingCardOnFile,
  }

  export class PaymentMerchantInfo {
    packageFullName: String;
    uri: Object;
    constructor();
    constructor(uri: Object);

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

  export class PaymentToken {
    jsonDetails: String;
    paymentMethodId: String;
    constructor();
    constructor(paymentMethodId: String);
    constructor(paymentMethodId: String, jsonDetails: String);

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

  export class PaymentItem {
    pending: Boolean;
    label: String;
    amount: PaymentCurrencyAmount;
    constructor();
    constructor(label: String, amount: PaymentCurrencyAmount);

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

  export class PaymentCurrencyAmount {
    value: String;
    currencySystem: String;
    currency: String;
    constructor();
    constructor(value: String, currency: String);
    constructor(value: String, currency: String, currencySystem: String);

  }

  export class PaymentRequestChangedResult {
    updatedPaymentDetails: PaymentDetails;
    message: String;
    changeAcceptedByMerchant: Boolean;
    constructor();
    constructor(changeAcceptedByMerchant: Boolean);
    constructor(changeAcceptedByMerchant: Boolean, updatedPaymentDetails: PaymentDetails);

  }

  export class PaymentRequestChangedArgs {
    changeKind: PaymentRequestChangeKind;
    selectedShippingOption: PaymentShippingOption;
    shippingAddress: PaymentAddress;
    constructor();

    acknowledge(changeResult: PaymentRequestChangedResult): void;

  }

  export class PaymentRequestSubmitResult {
    response: PaymentResponse;
    status: PaymentRequestStatus;
    constructor();

  }

  export class PaymentCanMakePaymentResult {
    status: PaymentCanMakePaymentResultStatus;
    constructor();
    constructor(value: PaymentCanMakePaymentResultStatus);

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

  export class PaymentMediator {
    constructor();

    getSupportedMethodIdsAsync(callback: (error: Error, result: Object) => void): void ;

    submitPaymentRequestAsync(paymentRequest: PaymentRequest, callback: (error: Error, result: PaymentRequestSubmitResult) => void): void ;
    submitPaymentRequestAsync(paymentRequest: PaymentRequest, changeHandler: Object, callback: (error: Error, result: PaymentRequestSubmitResult) => void): void ;

    canMakePaymentAsync(paymentRequest: PaymentRequest, callback: (error: Error, result: PaymentCanMakePaymentResult) => void): void ;

  }

export * as provider from "./applicationmodel.payments.provider.js";