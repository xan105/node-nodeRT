  export enum CryptographicPrivateKeyBlobType {
    pkcs8RawPrivateKeyInfo,
    pkcs1RsaPrivateKey,
    bCryptPrivateKey,
    capi1PrivateKey,
    bCryptEccFullPrivateKey,
  }

  export enum CryptographicPublicKeyBlobType {
    x509SubjectPublicKeyInfo,
    pkcs1RsaPublicKey,
    bCryptPublicKey,
    capi1PublicKey,
    bCryptEccFullPublicKey,
  }

  export enum Capi1KdfTargetAlgorithm {
    notAes,
    aes,
  }

  export enum CryptographicPadding {
    none,
    rsaOaep,
    rsaPkcs1V15,
    rsaPss,
  }

  export class KeyDerivationParameters {
    kdfGenericBinary: Object;
    iterationCount: number;
    capi1KdfTargetAlgorithm: Capi1KdfTargetAlgorithm;
    constructor();

    static buildForCapi1Kdf(capi1KdfTargetAlgorithm: Capi1KdfTargetAlgorithm): KeyDerivationParameters;


    static buildForPbkdf2(pbkdf2Salt: Object, iterationCount: number): KeyDerivationParameters;


    static buildForSP800108(label: Object, context: Object): KeyDerivationParameters;


    static buildForSP80056a(algorithmId: Object, partyUInfo: Object, partyVInfo: Object, suppPubInfo: Object, suppPrivInfo: Object): KeyDerivationParameters;


  }

  export class CryptographicKey {
    keySize: number;
    constructor();

    export(): Object;
    export(BlobType: CryptographicPrivateKeyBlobType): Object;

    exportPublicKey(): Object;
    exportPublicKey(BlobType: CryptographicPublicKeyBlobType): Object;

  }

  export class CryptographicHash {
    constructor();

    append(data: Object): void;

    getValueAndReset(): Object;

  }

  export class PersistedKeyProvider {
    constructor();

    static openKeyPairFromCertificateAsync(certificate: Object, hashAlgorithmName: string, padding: CryptographicPadding, callback: (error: Error, result: CryptographicKey) => void): void ;


    static openPublicKeyFromCertificate(certificate: Object, hashAlgorithmName: string, padding: CryptographicPadding): CryptographicKey;


  }

  export class EncryptedAndAuthenticatedData {
    authenticationTag: Object;
    encryptedData: Object;
    constructor();

  }

  export class CryptographicEngine {
    constructor();

    static decryptAsync(key: CryptographicKey, data: Object, iv: Object, callback: (error: Error, result: Object) => void): void ;


    static signAsync(key: CryptographicKey, data: Object, callback: (error: Error, result: Object) => void): void ;


    static signHashedDataAsync(key: CryptographicKey, data: Object, callback: (error: Error, result: Object) => void): void ;


    static signHashedData(key: CryptographicKey, data: Object): Object;


    static verifySignatureWithHashInput(key: CryptographicKey, data: Object, signature: Object): boolean;


    static encrypt(key: CryptographicKey, data: Object, iv: Object): Object;


    static decrypt(key: CryptographicKey, data: Object, iv: Object): Object;


    static encryptAndAuthenticate(key: CryptographicKey, data: Object, nonce: Object, authenticatedData: Object): EncryptedAndAuthenticatedData;


    static decryptAndAuthenticate(key: CryptographicKey, data: Object, nonce: Object, authenticationTag: Object, authenticatedData: Object): Object;


    static sign(key: CryptographicKey, data: Object): Object;


    static verifySignature(key: CryptographicKey, data: Object, signature: Object): boolean;


    static deriveKeyMaterial(key: CryptographicKey, parameters: KeyDerivationParameters, desiredKeySize: number): Object;


  }

  export class HashAlgorithmProvider {
    algorithmName: string;
    hashLength: number;
    constructor();

    static openAlgorithm(algorithm: string): HashAlgorithmProvider;


    hashData(data: Object): Object;

    createHash(): CryptographicHash;

  }

  export class MacAlgorithmProvider {
    algorithmName: string;
    macLength: number;
    constructor();

    static openAlgorithm(algorithm: string): MacAlgorithmProvider;


    createKey(keyMaterial: Object): CryptographicKey;

    createHash(keyMaterial: Object): CryptographicHash;

  }

  export class KeyDerivationAlgorithmProvider {
    algorithmName: string;
    constructor();

    static openAlgorithm(algorithm: string): KeyDerivationAlgorithmProvider;


    createKey(keyMaterial: Object): CryptographicKey;

  }

  export class SymmetricKeyAlgorithmProvider {
    algorithmName: string;
    blockLength: number;
    constructor();

    static openAlgorithm(algorithm: string): SymmetricKeyAlgorithmProvider;


    createSymmetricKey(keyMaterial: Object): CryptographicKey;

  }

  export class AsymmetricKeyAlgorithmProvider {
    algorithmName: string;
    constructor();

    static openAlgorithm(algorithm: string): AsymmetricKeyAlgorithmProvider;


    createKeyPair(keySize: number): CryptographicKey;

    importKeyPair(keyBlob: Object): CryptographicKey;
    importKeyPair(keyBlob: Object, BlobType: CryptographicPrivateKeyBlobType): CryptographicKey;

    importPublicKey(keyBlob: Object): CryptographicKey;
    importPublicKey(keyBlob: Object, BlobType: CryptographicPublicKeyBlobType): CryptographicKey;

    createKeyPairWithCurveName(curveName: string): CryptographicKey;

    createKeyPairWithCurveParameters(parameters: Array<number>): CryptographicKey;

  }

  export class HashAlgorithmNames {
    static md5: string;
    static sha1: string;
    static sha256: string;
    static sha384: string;
    static sha512: string;
    constructor();

  }

  export class MacAlgorithmNames {
    static aesCmac: string;
    static hmacMd5: string;
    static hmacSha1: string;
    static hmacSha256: string;
    static hmacSha384: string;
    static hmacSha512: string;
    constructor();

  }

  export class SymmetricAlgorithmNames {
    static aesCbc: string;
    static aesCbcPkcs7: string;
    static aesCcm: string;
    static aesEcb: string;
    static aesEcbPkcs7: string;
    static aesGcm: string;
    static desCbc: string;
    static desCbcPkcs7: string;
    static desEcb: string;
    static desEcbPkcs7: string;
    static rc2Cbc: string;
    static rc2CbcPkcs7: string;
    static rc2Ecb: string;
    static rc2EcbPkcs7: string;
    static rc4: string;
    static tripleDesCbc: string;
    static tripleDesCbcPkcs7: string;
    static tripleDesEcb: string;
    static tripleDesEcbPkcs7: string;
    constructor();

  }

  export class AsymmetricAlgorithmNames {
    static ecdsaP521Sha512: string;
    static dsaSha1: string;
    static dsaSha256: string;
    static ecdsaP256Sha256: string;
    static ecdsaP384Sha384: string;
    static rsaSignPkcs1Sha256: string;
    static rsaOaepSha1: string;
    static rsaOaepSha256: string;
    static rsaOaepSha384: string;
    static rsaOaepSha512: string;
    static rsaPkcs1: string;
    static rsaSignPkcs1Sha1: string;
    static rsaSignPkcs1Sha384: string;
    static rsaSignPkcs1Sha512: string;
    static rsaSignPssSha1: string;
    static rsaSignPssSha256: string;
    static rsaSignPssSha384: string;
    static rsaSignPssSha512: string;
    static ecdsaSha384: string;
    static ecdsaSha512: string;
    static ecdsaSha256: string;
    constructor();

  }

  export class EccCurveNames {
    static allEccCurveNames: Object;
    static brainpoolP160r1: string;
    static brainpoolP160t1: string;
    static brainpoolP192r1: string;
    static brainpoolP192t1: string;
    static brainpoolP224r1: string;
    static brainpoolP224t1: string;
    static brainpoolP256r1: string;
    static brainpoolP256t1: string;
    static brainpoolP320r1: string;
    static brainpoolP320t1: string;
    static brainpoolP384r1: string;
    static brainpoolP384t1: string;
    static brainpoolP512r1: string;
    static brainpoolP512t1: string;
    static curve25519: string;
    static ec192wapi: string;
    static nistP192: string;
    static nistP224: string;
    static nistP256: string;
    static nistP384: string;
    static nistP521: string;
    static numsP256t1: string;
    static numsP384t1: string;
    static numsP512t1: string;
    static secP160k1: string;
    static secP160r1: string;
    static secP160r2: string;
    static secP192k1: string;
    static secP192r1: string;
    static secP224k1: string;
    static secP224r1: string;
    static secP256k1: string;
    static secP256r1: string;
    static secP384r1: string;
    static secP521r1: string;
    static wtls12: string;
    static wtls7: string;
    static wtls9: string;
    static x962P192v1: string;
    static x962P192v2: string;
    static x962P192v3: string;
    static x962P239v1: string;
    static x962P239v2: string;
    static x962P239v3: string;
    static x962P256v1: string;
    constructor();

  }

  export class KeyDerivationAlgorithmNames {
    static pbkdf2Sha256: string;
    static pbkdf2Md5: string;
    static pbkdf2Sha1: string;
    static sp800108CtrHmacSha512: string;
    static pbkdf2Sha384: string;
    static pbkdf2Sha512: string;
    static sp800108CtrHmacMd5: string;
    static sp800108CtrHmacSha1: string;
    static sp800108CtrHmacSha256: string;
    static sp800108CtrHmacSha384: string;
    static sp80056aConcatMd5: string;
    static sp80056aConcatSha1: string;
    static sp80056aConcatSha256: string;
    static sp80056aConcatSha384: string;
    static sp80056aConcatSha512: string;
    static capiKdfSha1: string;
    static capiKdfSha256: string;
    static capiKdfSha384: string;
    static capiKdfSha512: string;
    static capiKdfMd5: string;
    constructor();

  }

