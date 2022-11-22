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
    iterationCount: Number;
    capi1KdfTargetAlgorithm: Capi1KdfTargetAlgorithm;
    constructor();

    static buildForCapi1Kdf(capi1KdfTargetAlgorithm: Capi1KdfTargetAlgorithm): KeyDerivationParameters;


    static buildForPbkdf2(pbkdf2Salt: Object, iterationCount: Number): KeyDerivationParameters;


    static buildForSP800108(label: Object, context: Object): KeyDerivationParameters;


    static buildForSP80056a(algorithmId: Object, partyUInfo: Object, partyVInfo: Object, suppPubInfo: Object, suppPrivInfo: Object): KeyDerivationParameters;


  }

  export class CryptographicKey {
    keySize: Number;
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

    static openKeyPairFromCertificateAsync(certificate: Object, hashAlgorithmName: String, padding: CryptographicPadding, callback: (error: Error, result: CryptographicKey) => void): void ;


    static openPublicKeyFromCertificate(certificate: Object, hashAlgorithmName: String, padding: CryptographicPadding): CryptographicKey;


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


    static verifySignatureWithHashInput(key: CryptographicKey, data: Object, signature: Object): Boolean;


    static encrypt(key: CryptographicKey, data: Object, iv: Object): Object;


    static decrypt(key: CryptographicKey, data: Object, iv: Object): Object;


    static encryptAndAuthenticate(key: CryptographicKey, data: Object, nonce: Object, authenticatedData: Object): EncryptedAndAuthenticatedData;


    static decryptAndAuthenticate(key: CryptographicKey, data: Object, nonce: Object, authenticationTag: Object, authenticatedData: Object): Object;


    static sign(key: CryptographicKey, data: Object): Object;


    static verifySignature(key: CryptographicKey, data: Object, signature: Object): Boolean;


    static deriveKeyMaterial(key: CryptographicKey, parameters: KeyDerivationParameters, desiredKeySize: Number): Object;


  }

  export class HashAlgorithmProvider {
    algorithmName: String;
    hashLength: Number;
    constructor();

    static openAlgorithm(algorithm: String): HashAlgorithmProvider;


    hashData(data: Object): Object;

    createHash(): CryptographicHash;

  }

  export class MacAlgorithmProvider {
    algorithmName: String;
    macLength: Number;
    constructor();

    static openAlgorithm(algorithm: String): MacAlgorithmProvider;


    createKey(keyMaterial: Object): CryptographicKey;

    createHash(keyMaterial: Object): CryptographicHash;

  }

  export class KeyDerivationAlgorithmProvider {
    algorithmName: String;
    constructor();

    static openAlgorithm(algorithm: String): KeyDerivationAlgorithmProvider;


    createKey(keyMaterial: Object): CryptographicKey;

  }

  export class SymmetricKeyAlgorithmProvider {
    algorithmName: String;
    blockLength: Number;
    constructor();

    static openAlgorithm(algorithm: String): SymmetricKeyAlgorithmProvider;


    createSymmetricKey(keyMaterial: Object): CryptographicKey;

  }

  export class AsymmetricKeyAlgorithmProvider {
    algorithmName: String;
    constructor();

    static openAlgorithm(algorithm: String): AsymmetricKeyAlgorithmProvider;


    createKeyPair(keySize: Number): CryptographicKey;

    importKeyPair(keyBlob: Object): CryptographicKey;
    importKeyPair(keyBlob: Object, BlobType: CryptographicPrivateKeyBlobType): CryptographicKey;

    importPublicKey(keyBlob: Object): CryptographicKey;
    importPublicKey(keyBlob: Object, BlobType: CryptographicPublicKeyBlobType): CryptographicKey;

    createKeyPairWithCurveName(curveName: String): CryptographicKey;

    createKeyPairWithCurveParameters(parameters: Array<Number>): CryptographicKey;

  }

  export class HashAlgorithmNames {
    static md5: String;
    static sha1: String;
    static sha256: String;
    static sha384: String;
    static sha512: String;
    constructor();

  }

  export class MacAlgorithmNames {
    static aesCmac: String;
    static hmacMd5: String;
    static hmacSha1: String;
    static hmacSha256: String;
    static hmacSha384: String;
    static hmacSha512: String;
    constructor();

  }

  export class SymmetricAlgorithmNames {
    static aesCbc: String;
    static aesCbcPkcs7: String;
    static aesCcm: String;
    static aesEcb: String;
    static aesEcbPkcs7: String;
    static aesGcm: String;
    static desCbc: String;
    static desCbcPkcs7: String;
    static desEcb: String;
    static desEcbPkcs7: String;
    static rc2Cbc: String;
    static rc2CbcPkcs7: String;
    static rc2Ecb: String;
    static rc2EcbPkcs7: String;
    static rc4: String;
    static tripleDesCbc: String;
    static tripleDesCbcPkcs7: String;
    static tripleDesEcb: String;
    static tripleDesEcbPkcs7: String;
    constructor();

  }

  export class AsymmetricAlgorithmNames {
    static ecdsaP521Sha512: String;
    static dsaSha1: String;
    static dsaSha256: String;
    static ecdsaP256Sha256: String;
    static ecdsaP384Sha384: String;
    static rsaSignPkcs1Sha256: String;
    static rsaOaepSha1: String;
    static rsaOaepSha256: String;
    static rsaOaepSha384: String;
    static rsaOaepSha512: String;
    static rsaPkcs1: String;
    static rsaSignPkcs1Sha1: String;
    static rsaSignPkcs1Sha384: String;
    static rsaSignPkcs1Sha512: String;
    static rsaSignPssSha1: String;
    static rsaSignPssSha256: String;
    static rsaSignPssSha384: String;
    static rsaSignPssSha512: String;
    static ecdsaSha384: String;
    static ecdsaSha512: String;
    static ecdsaSha256: String;
    constructor();

  }

  export class EccCurveNames {
    static allEccCurveNames: Object;
    static brainpoolP160r1: String;
    static brainpoolP160t1: String;
    static brainpoolP192r1: String;
    static brainpoolP192t1: String;
    static brainpoolP224r1: String;
    static brainpoolP224t1: String;
    static brainpoolP256r1: String;
    static brainpoolP256t1: String;
    static brainpoolP320r1: String;
    static brainpoolP320t1: String;
    static brainpoolP384r1: String;
    static brainpoolP384t1: String;
    static brainpoolP512r1: String;
    static brainpoolP512t1: String;
    static curve25519: String;
    static ec192wapi: String;
    static nistP192: String;
    static nistP224: String;
    static nistP256: String;
    static nistP384: String;
    static nistP521: String;
    static numsP256t1: String;
    static numsP384t1: String;
    static numsP512t1: String;
    static secP160k1: String;
    static secP160r1: String;
    static secP160r2: String;
    static secP192k1: String;
    static secP192r1: String;
    static secP224k1: String;
    static secP224r1: String;
    static secP256k1: String;
    static secP256r1: String;
    static secP384r1: String;
    static secP521r1: String;
    static wtls12: String;
    static wtls7: String;
    static wtls9: String;
    static x962P192v1: String;
    static x962P192v2: String;
    static x962P192v3: String;
    static x962P239v1: String;
    static x962P239v2: String;
    static x962P239v3: String;
    static x962P256v1: String;
    constructor();

  }

  export class KeyDerivationAlgorithmNames {
    static pbkdf2Sha256: String;
    static pbkdf2Md5: String;
    static pbkdf2Sha1: String;
    static sp800108CtrHmacSha512: String;
    static pbkdf2Sha384: String;
    static pbkdf2Sha512: String;
    static sp800108CtrHmacMd5: String;
    static sp800108CtrHmacSha1: String;
    static sp800108CtrHmacSha256: String;
    static sp800108CtrHmacSha384: String;
    static sp80056aConcatMd5: String;
    static sp80056aConcatSha1: String;
    static sp80056aConcatSha256: String;
    static sp80056aConcatSha384: String;
    static sp80056aConcatSha512: String;
    static capiKdfSha1: String;
    static capiKdfSha256: String;
    static capiKdfSha384: String;
    static capiKdfSha512: String;
    static capiKdfMd5: String;
    constructor();

  }

