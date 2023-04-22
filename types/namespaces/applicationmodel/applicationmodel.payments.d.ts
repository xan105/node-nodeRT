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
    packageFullName: string;
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
    jsonData: string;
    supportedMethodIds: Object;
    constructor();
    constructor(supportedMethodIds: Object);
    constructor(supportedMethodIds: Object, jsonData: string);

  }

  export class PaymentOptions {
    shippingType: PaymentShippingType;
    requestShipping: boolean;
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
    id: string;
    constructor();
    constructor(details: PaymentDetails, methodData: Object, merchantInfo: PaymentMerchantInfo, options: PaymentOptions, id: string);
    constructor(details: PaymentDetails, methodData: Object);
    constructor(details: PaymentDetails, methodData: Object, merchantInfo: PaymentMerchantInfo);
    constructor(details: PaymentDetails, methodData: Object, merchantInfo: PaymentMerchantInfo, options: PaymentOptions);

  }

  export class PaymentToken {
    jsonDetails: string;
    paymentMethodId: string;
    constructor();
    constructor(paymentMethodId: string);
    constructor(paymentMethodId: string, jsonDetails: string);

  }

  export class PaymentShippingOption {
    tag: string;
    label: string;
    isSelected: boolean;
    amount: PaymentCurrencyAmount;
    constructor();
    constructor(label: string, amount: PaymentCurrencyAmount);
    constructor(label: string, amount: PaymentCurrencyAmount, selected: boolean);
    constructor(label: string, amount: PaymentCurrencyAmount, selected: boolean, tag: string);

  }

  export class PaymentAddress {
    sortingCode: string;
    region: string;
    recipient: string;
    postalCode: string;
    phoneNumber: string;
    organization: string;
    languageCode: string;
    dependentLocality: string;
    country: string;
    city: string;
    addressLines: Object;
    properties: Object;
    constructor();

  }

  export class PaymentItem {
    pending: boolean;
    label: string;
    amount: PaymentCurrencyAmount;
    constructor();
    constructor(label: string, amount: PaymentCurrencyAmount);

  }

  export class PaymentDetailsModifier {
    additionalDisplayItems: Object;
    jsonData: string;
    supportedMethodIds: Object;
    total: PaymentItem;
    constructor();
    constructor(supportedMethodIds: Object, total: PaymentItem);
    constructor(supportedMethodIds: Object, total: PaymentItem, additionalDisplayItems: Object);
    constructor(supportedMethodIds: Object, total: PaymentItem, additionalDisplayItems: Object, jsonData: string);

  }

  export class PaymentCurrencyAmount {
    value: string;
    currencySystem: string;
    currency: string;
    constructor();
    constructor(value: string, currency: string);
    constructor(value: string, currency: string, currencySystem: string);

  }

  export class PaymentRequestChangedResult {
    updatedPaymentDetails: PaymentDetails;
    message: string;
    changeAcceptedByMerchant: boolean;
    constructor();
    constructor(changeAcceptedByMerchant: boolean);
    constructor(changeAcceptedByMerchant: boolean, updatedPaymentDetails: PaymentDetails);

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
    payerEmail: string;
    payerName: string;
    payerPhoneNumber: string;
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