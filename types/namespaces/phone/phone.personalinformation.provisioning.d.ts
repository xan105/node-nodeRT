  export class ContactPartnerProvisioningManager {
    constructor();

    static associateNetworkAccountAsync(store: Object, networkName: String, networkAccountId: String, callback: (error: Error) => void): void ;


    static importVcardToSystemAsync(stream: Object, callback: (error: Error) => void): void ;


    static associateSocialNetworkAccountAsync(store: Object, networkName: String, networkAccountId: String, callback: (error: Error) => void): void ;


  }

  export class MessagePartnerProvisioningManager {
    constructor();

    static importSmsToSystemAsync(incoming: Boolean, read: Boolean, body: String, sender: String, recipients: Object, deliveryTime: Date, callback: (error: Error) => void): void ;


    static importMmsToSystemAsync(incoming: Boolean, read: Boolean, subject: String, sender: String, recipients: Object, deliveryTime: Date, attachments: Object, callback: (error: Error) => void): void ;


  }

