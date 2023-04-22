  export class PaymentAppManager {
    static current: PaymentAppManager;
    constructor();

    registerAsync(supportedPaymentMethodIds: Object, callback: (error: Error) => void): void ;

    unregisterAsync(callback: (error: Error) => void): void ;

  }

  export class PaymentTransactionAcceptResult {
    status: number;
    constructor();

  }

  export class PaymentTransaction {
    payerPhoneNumber: string;
    payerName: string;
    payerEmail: string;
    paymentRequest: Object;
    constructor();

    static fromIdAsync(id: string, callback: (error: Error, result: PaymentTransaction) => void): void ;


    updateShippingAddressAsync(shippingAddress: Object, callback: (error: Error, result: Object) => void): void ;

    updateSelectedShippingOptionAsync(selectedShippingOption: Object, callback: (error: Error, result: Object) => void): void ;

    acceptAsync(paymentToken: Object, callback: (error: Error, result: PaymentTransactionAcceptResult) => void): void ;

    reject(): void;

  }

  export class PaymentAppCanMakePaymentTriggerDetails {
    request: Object;
    constructor();

    reportCanMakePaymentResult(value: Object): void;

  }

