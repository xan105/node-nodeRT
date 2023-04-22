  export class EnterpriseKeyCredentialRegistrationInfo {
    keyId: string;
    keyName: string;
    subject: string;
    tenantId: string;
    tenantName: string;
    constructor();

  }

  export class EnterpriseKeyCredentialRegistrationManager {
    static current: EnterpriseKeyCredentialRegistrationManager;
    constructor();

    getRegistrationsAsync(callback: (error: Error, result: Object) => void): void ;

  }

export * as core from "./security.authentication.identity.core.js";
export * as provider from "./security.authentication.identity.provider.js";