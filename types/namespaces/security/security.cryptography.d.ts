  export enum BinaryStringEncoding {
    utf8,
    utf16LE,
    utf16BE,
  }

  export class CryptographicBuffer {
    constructor();

    static compare(object1: Object, object2: Object): Boolean;


    static generateRandom(length: Number): Object;


    static generateRandomNumber(): Number;


    static createFromByteArray(value: Array<Number>): Object;


    static copyToByteArray(buffer: Object, value: Array<Number>): void;


    static decodeFromHexString(value: String): Object;


    static encodeToHexString(buffer: Object): String;


    static decodeFromBase64String(value: String): Object;


    static encodeToBase64String(buffer: Object): String;


    static convertStringToBinary(value: String, encoding: BinaryStringEncoding): Object;


    static convertBinaryToString(encoding: BinaryStringEncoding, buffer: Object): String;


  }

export * as certificates from "./security.cryptography.certificates.js";
export * as core from "./security.cryptography.core.js";
export * as dataprotection from "./security.cryptography.dataprotection.js";