  export enum EnrollKeyUsages {
    none,
    decryption,
    signing,
    keyAgreement,
    all,
  }

  export enum KeyProtectionLevel {
    noConsent,
    consentOnly,
    consentWithPassword,
    consentWithFingerprint,
  }

  export enum ExportOption {
    notExportable,
    exportable,
  }

  export enum KeySize {
    invalid,
    rsa2048,
    rsa4096,
  }

  export enum InstallOptions {
    none,
    deleteExpired,
  }

  export enum CertificateChainPolicy {
    base,
    ssl,
    nTAuthentication,
    microsoftRoot,
  }

  export enum ChainValidationResult {
    success,
    untrusted,
    revoked,
    expired,
    incompleteChain,
    invalidSignature,
    wrongUsage,
    invalidName,
    invalidCertificateAuthorityPolicy,
    basicConstraintsError,
    unknownCriticalExtension,
    revocationInformationMissing,
    revocationFailure,
    otherErrors,
  }

  export enum SignatureValidationResult {
    success,
    invalidParameter,
    badMessage,
    invalidSignature,
    otherErrors,
  }

  export class CertificateExtension {
    value: Array<number>;
    objectId: string;
    isCritical: boolean;
    constructor();

    encodeValue(value: string): void;

  }

  export class Certificate {
    friendlyName: string;
    enhancedKeyUsages: Object;
    hasPrivateKey: boolean;
    isStronglyProtected: boolean;
    issuer: string;
    serialNumber: Array<number>;
    subject: string;
    validFrom: Date;
    validTo: Date;
    isSecurityDeviceBound: boolean;
    keyAlgorithmName: string;
    keyUsages: CertificateKeyUsages;
    signatureAlgorithmName: string;
    signatureHashAlgorithmName: string;
    subjectAlternativeName: SubjectAlternativeNameInfo;
    isPerUser: boolean;
    keyStorageProviderName: string;
    storeName: string;
    constructor();
    constructor(certBlob: Object);

    buildChainAsync(certificates: Object, callback: (error: Error, result: CertificateChain) => void): void ;
    buildChainAsync(certificates: Object, parameters: ChainBuildingParameters, callback: (error: Error, result: CertificateChain) => void): void ;

    getHashValue(): Array<number>;
    getHashValue(hashAlgorithmName: string): Array<number>;

    getCertificateBlob(): Object;

  }

  export class SubjectAlternativeNameInfo {
    distinguishedName: Object;
    dnsName: Object;
    emailName: Object;
    iPAddress: Object;
    principalName: Object;
    url: Object;
    distinguishedNames: Object;
    dnsNames: Object;
    emailNames: Object;
    extension: CertificateExtension;
    iPAddresses: Object;
    principalNames: Object;
    urls: Object;
    constructor();

  }

  export class CertificateRequestProperties {
    subject: string;
    keyUsages: EnrollKeyUsages;
    keyStorageProviderName: string;
    keySize: number;
    exportable: ExportOption;
    keyProtectionLevel: KeyProtectionLevel;
    keyAlgorithmName: string;
    hashAlgorithmName: string;
    friendlyName: string;
    attestationCredentialCertificate: Certificate;
    signingCertificate: Certificate;
    smartcardReaderName: string;
    useExistingKey: boolean;
    curveParameters: Array<number>;
    curveName: string;
    containerNamePrefix: string;
    containerName: string;
    extensions: Object;
    subjectAlternativeName: SubjectAlternativeNameInfo;
    suppressedDefaults: Object;
    constructor();

  }

  export class UserCertificateEnrollmentManager {
    constructor();

    createRequestAsync(request: CertificateRequestProperties, callback: (error: Error, result: string) => void): void ;

    installCertificateAsync(certificate: string, installOption: InstallOptions, callback: (error: Error) => void): void ;

    importPfxDataAsync(pfxData: string, password: string, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: string, callback: (error: Error) => void): void ;
    importPfxDataAsync(pfxData: string, password: string, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: string, keyStorageProvider: string, callback: (error: Error) => void): void ;
    importPfxDataAsync(pfxData: string, password: string, pfxImportParameters: PfxImportParameters, callback: (error: Error) => void): void ;

  }

  export class PfxImportParameters {
    readerName: string;
    keyStorageProviderName: string;
    keyProtectionLevel: KeyProtectionLevel;
    installOptions: InstallOptions;
    friendlyName: string;
    exportable: ExportOption;
    containerNamePrefix: string;
    constructor();

  }

  export class CertificateEnrollmentManager {
    static userCertificateEnrollmentManager: UserCertificateEnrollmentManager;
    constructor();

    static importPfxDataAsync(pfxData: string, password: string, pfxImportParameters: PfxImportParameters, callback: (error: Error) => void): void ;
    static importPfxDataAsync(pfxData: string, password: string, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: string, keyStorageProvider: string, callback: (error: Error) => void): void ;
    static importPfxDataAsync(pfxData: string, password: string, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: string, callback: (error: Error) => void): void ;


    static createRequestAsync(request: CertificateRequestProperties, callback: (error: Error, result: string) => void): void ;


    static installCertificateAsync(certificate: string, installOption: InstallOptions, callback: (error: Error) => void): void ;


  }

  export class KeyAttestationHelper {
    constructor();

    static decryptTpmAttestationCredentialAsync(credential: string, containerName: string, callback: (error: Error, result: string) => void): void ;
    static decryptTpmAttestationCredentialAsync(credential: string, callback: (error: Error, result: string) => void): void ;


    static getTpmAttestationCredentialId(credential: string): string;


  }

  export class CertificateQuery {
    thumbprint: Array<number>;
    issuerName: string;
    hardwareOnly: boolean;
    friendlyName: string;
    enhancedKeyUsages: Object;
    storeName: string;
    includeExpiredCertificates: boolean;
    includeDuplicates: boolean;
    constructor();

  }

  export class CertificateStore {
    name: string;
    constructor();

    add(certificate: Certificate): void;

    delete(certificate: Certificate): void;

  }

  export class UserCertificateStore {
    name: string;
    constructor();

    requestAddAsync(certificate: Certificate, callback: (error: Error, result: boolean) => void): void ;

    requestDeleteAsync(certificate: Certificate, callback: (error: Error, result: boolean) => void): void ;

  }

  export class CertificateStores {
    static intermediateCertificationAuthorities: CertificateStore;
    static trustedRootCertificationAuthorities: CertificateStore;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;
    static findAllAsync(query: CertificateQuery, callback: (error: Error, result: Object) => void): void ;


    static getUserStoreByName(storeName: string): UserCertificateStore;


    static getStoreByName(storeName: string): CertificateStore;


  }

  export class StandardCertificateStoreNames {
    static intermediateCertificationAuthorities: string;
    static personal: string;
    static trustedRootCertificationAuthorities: string;
    constructor();

  }

  export class KeyAlgorithmNames {
    static dsa: string;
    static ecdh256: string;
    static ecdh384: string;
    static ecdh521: string;
    static ecdsa256: string;
    static ecdsa384: string;
    static ecdsa521: string;
    static rsa: string;
    static ecdh: string;
    static ecdsa: string;
    constructor();

  }

  export class KeyStorageProviderNames {
    static platformKeyStorageProvider: string;
    static smartcardKeyStorageProvider: string;
    static softwareKeyStorageProvider: string;
    static passportKeyStorageProvider: string;
    constructor();

  }

  export class ChainBuildingParameters {
    validationTimestamp: Date;
    revocationCheckEnabled: boolean;
    networkRetrievalEnabled: boolean;
    currentTimeValidationEnabled: boolean;
    authorityInformationAccessEnabled: boolean;
    enhancedKeyUsages: Object;
    exclusiveTrustRoots: Object;
    constructor();

  }

  export class ChainValidationParameters {
    serverDnsName: Object;
    certificateChainPolicy: CertificateChainPolicy;
    constructor();

  }

  export class CertificateChain {
    constructor();

    validate(): ChainValidationResult;
    validate(parameter: ChainValidationParameters): ChainValidationResult;

    getCertificates(includeRoot: boolean): Object;

  }

  export class CertificateKeyUsages {
    nonRepudiation: boolean;
    keyEncipherment: boolean;
    keyCertificateSign: boolean;
    keyAgreement: boolean;
    encipherOnly: boolean;
    digitalSignature: boolean;
    dataEncipherment: boolean;
    crlSign: boolean;
    constructor();

  }

  export class CmsTimestampInfo {
    certificates: Object;
    signingCertificate: Certificate;
    timestamp: Date;
    constructor();

  }

  export class CmsSignerInfo {
    hashAlgorithmName: string;
    certificate: Certificate;
    timestampInfo: CmsTimestampInfo;
    constructor();

  }

  export class CmsAttachedSignature {
    certificates: Object;
    content: Array<number>;
    signers: Object;
    constructor();
    constructor(inputBlob: Object);

    static generateSignatureAsync(data: Object, signers: Object, certificates: Object, callback: (error: Error, result: Object) => void): void ;


    verifySignature(): SignatureValidationResult;

  }

  export class CmsDetachedSignature {
    certificates: Object;
    signers: Object;
    constructor();
    constructor(inputBlob: Object);

    static generateSignatureAsync(data: Object, signers: Object, certificates: Object, callback: (error: Error, result: Object) => void): void ;


    verifySignatureAsync(data: Object, callback: (error: Error, result: SignatureValidationResult) => void): void ;

  }

