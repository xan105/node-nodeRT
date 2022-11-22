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
    value: Array<Number>;
    objectId: String;
    isCritical: Boolean;
    constructor();

    encodeValue(value: String): void;

  }

  export class Certificate {
    friendlyName: String;
    enhancedKeyUsages: Object;
    hasPrivateKey: Boolean;
    isStronglyProtected: Boolean;
    issuer: String;
    serialNumber: Array<Number>;
    subject: String;
    validFrom: Date;
    validTo: Date;
    isSecurityDeviceBound: Boolean;
    keyAlgorithmName: String;
    keyUsages: CertificateKeyUsages;
    signatureAlgorithmName: String;
    signatureHashAlgorithmName: String;
    subjectAlternativeName: SubjectAlternativeNameInfo;
    isPerUser: Boolean;
    keyStorageProviderName: String;
    storeName: String;
    constructor();
    constructor(certBlob: Object);

    buildChainAsync(certificates: Object, callback: (error: Error, result: CertificateChain) => void): void ;
    buildChainAsync(certificates: Object, parameters: ChainBuildingParameters, callback: (error: Error, result: CertificateChain) => void): void ;

    getHashValue(): Array<Number>;
    getHashValue(hashAlgorithmName: String): Array<Number>;

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
    subject: String;
    keyUsages: EnrollKeyUsages;
    keyStorageProviderName: String;
    keySize: Number;
    exportable: ExportOption;
    keyProtectionLevel: KeyProtectionLevel;
    keyAlgorithmName: String;
    hashAlgorithmName: String;
    friendlyName: String;
    attestationCredentialCertificate: Certificate;
    signingCertificate: Certificate;
    smartcardReaderName: String;
    useExistingKey: Boolean;
    curveParameters: Array<Number>;
    curveName: String;
    containerNamePrefix: String;
    containerName: String;
    extensions: Object;
    subjectAlternativeName: SubjectAlternativeNameInfo;
    suppressedDefaults: Object;
    constructor();

  }

  export class UserCertificateEnrollmentManager {
    constructor();

    createRequestAsync(request: CertificateRequestProperties, callback: (error: Error, result: String) => void): void ;

    installCertificateAsync(certificate: String, installOption: InstallOptions, callback: (error: Error) => void): void ;

    importPfxDataAsync(pfxData: String, password: String, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: String, callback: (error: Error) => void): void ;
    importPfxDataAsync(pfxData: String, password: String, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: String, keyStorageProvider: String, callback: (error: Error) => void): void ;
    importPfxDataAsync(pfxData: String, password: String, pfxImportParameters: PfxImportParameters, callback: (error: Error) => void): void ;

  }

  export class PfxImportParameters {
    readerName: String;
    keyStorageProviderName: String;
    keyProtectionLevel: KeyProtectionLevel;
    installOptions: InstallOptions;
    friendlyName: String;
    exportable: ExportOption;
    containerNamePrefix: String;
    constructor();

  }

  export class CertificateEnrollmentManager {
    static userCertificateEnrollmentManager: UserCertificateEnrollmentManager;
    constructor();

    static importPfxDataAsync(pfxData: String, password: String, pfxImportParameters: PfxImportParameters, callback: (error: Error) => void): void ;
    static importPfxDataAsync(pfxData: String, password: String, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: String, keyStorageProvider: String, callback: (error: Error) => void): void ;
    static importPfxDataAsync(pfxData: String, password: String, exportable: ExportOption, keyProtectionLevel: KeyProtectionLevel, installOption: InstallOptions, friendlyName: String, callback: (error: Error) => void): void ;


    static createRequestAsync(request: CertificateRequestProperties, callback: (error: Error, result: String) => void): void ;


    static installCertificateAsync(certificate: String, installOption: InstallOptions, callback: (error: Error) => void): void ;


  }

  export class KeyAttestationHelper {
    constructor();

    static decryptTpmAttestationCredentialAsync(credential: String, containerName: String, callback: (error: Error, result: String) => void): void ;
    static decryptTpmAttestationCredentialAsync(credential: String, callback: (error: Error, result: String) => void): void ;


    static getTpmAttestationCredentialId(credential: String): String;


  }

  export class CertificateQuery {
    thumbprint: Array<Number>;
    issuerName: String;
    hardwareOnly: Boolean;
    friendlyName: String;
    enhancedKeyUsages: Object;
    storeName: String;
    includeExpiredCertificates: Boolean;
    includeDuplicates: Boolean;
    constructor();

  }

  export class CertificateStore {
    name: String;
    constructor();

    add(certificate: Certificate): void;

    delete(certificate: Certificate): void;

  }

  export class UserCertificateStore {
    name: String;
    constructor();

    requestAddAsync(certificate: Certificate, callback: (error: Error, result: Boolean) => void): void ;

    requestDeleteAsync(certificate: Certificate, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class CertificateStores {
    static intermediateCertificationAuthorities: CertificateStore;
    static trustedRootCertificationAuthorities: CertificateStore;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;
    static findAllAsync(query: CertificateQuery, callback: (error: Error, result: Object) => void): void ;


    static getUserStoreByName(storeName: String): UserCertificateStore;


    static getStoreByName(storeName: String): CertificateStore;


  }

  export class StandardCertificateStoreNames {
    static intermediateCertificationAuthorities: String;
    static personal: String;
    static trustedRootCertificationAuthorities: String;
    constructor();

  }

  export class KeyAlgorithmNames {
    static dsa: String;
    static ecdh256: String;
    static ecdh384: String;
    static ecdh521: String;
    static ecdsa256: String;
    static ecdsa384: String;
    static ecdsa521: String;
    static rsa: String;
    static ecdh: String;
    static ecdsa: String;
    constructor();

  }

  export class KeyStorageProviderNames {
    static platformKeyStorageProvider: String;
    static smartcardKeyStorageProvider: String;
    static softwareKeyStorageProvider: String;
    static passportKeyStorageProvider: String;
    constructor();

  }

  export class ChainBuildingParameters {
    validationTimestamp: Date;
    revocationCheckEnabled: Boolean;
    networkRetrievalEnabled: Boolean;
    currentTimeValidationEnabled: Boolean;
    authorityInformationAccessEnabled: Boolean;
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

    getCertificates(includeRoot: Boolean): Object;

  }

  export class CertificateKeyUsages {
    nonRepudiation: Boolean;
    keyEncipherment: Boolean;
    keyCertificateSign: Boolean;
    keyAgreement: Boolean;
    encipherOnly: Boolean;
    digitalSignature: Boolean;
    dataEncipherment: Boolean;
    crlSign: Boolean;
    constructor();

  }

  export class CmsTimestampInfo {
    certificates: Object;
    signingCertificate: Certificate;
    timestamp: Date;
    constructor();

  }

  export class CmsSignerInfo {
    hashAlgorithmName: String;
    certificate: Certificate;
    timestampInfo: CmsTimestampInfo;
    constructor();

  }

  export class CmsAttachedSignature {
    certificates: Object;
    content: Array<Number>;
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

