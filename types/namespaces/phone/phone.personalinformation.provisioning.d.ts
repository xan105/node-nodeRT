  export class ContactPartnerProvisioningManager {
    constructor();

    static associateNetworkAccountAsync(store: Object, networkName: string, networkAccountId: string, callback: (error: Error) => void): void ;


    static importVcardToSystemAsync(stream: Object, callback: (error: Error) => void): void ;


    static associateSocialNetworkAccountAsync(store: Object, networkName: string, networkAccountId: string, callback: (error: Error) => void): void ;


  }

  export class MessagePartnerProvisioningManager {
    constructor();

    static importSmsToSystemAsync(incoming: boolean, read: boolean, body: string, sender: string, recipients: Object, deliveryTime: Date, callback: (error: Error) => void): void ;


    static importMmsToSystemAsync(incoming: boolean, read: boolean, subject: string, sender: string, recipients: Object, deliveryTime: Date, attachments: Object, callback: (error: Error) => void): void ;


  }

