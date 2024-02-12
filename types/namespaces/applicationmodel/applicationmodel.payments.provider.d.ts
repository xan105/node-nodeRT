  export class PaymentAppCanMakePaymentTriggerDetails {
    request: Object;
    constructor();

    reportCanMakePaymentResult(value: Object): void;

  }

  export class PaymentAppManager {
    static current: PaymentAppManager;
    constructor();

    registerAsync(supportedPaymentMethodIds: Object, callback: (error: Error) => void): void ;

    unregisterAsync(callback: (error: Error) => void): void ;

  }

  export class PaymentTransaction {
    payerPhoneNumber: String;
    payerName: String;
    payerEmail: String;
    paymentRequest: Object;
    constructor();

    static fromIdAsync(id: String, callback: (error: Error, result: PaymentTransaction) => void): void ;


    updateShippingAddressAsync(shippingAddress: Object, callback: (error: Error, result: Object) => void): void ;

    updateSelectedShippingOptionAsync(selectedShippingOption: Object, callback: (error: Error, result: Object) => void): void ;

    acceptAsync(paymentToken: Object, callback: (error: Error, result: PaymentTransactionAcceptResult) => void): void ;

    reject(): void;

  }

  export class PaymentTransactionAcceptResult {
    status: Number;
    constructor();

  }

