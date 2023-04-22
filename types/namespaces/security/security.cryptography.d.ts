  export enum BinaryStringEncoding {
    utf8,
    utf16LE,
    utf16BE,
  }

  export class CryptographicBuffer {
    constructor();

    static compare(object1: Object, object2: Object): boolean;


    static generateRandom(length: number): Object;


    static generateRandomNumber(): number;


    static createFromByteArray(value: Array<number>): Object;


    static copyToByteArray(buffer: Object, value: Array<number>): void;


    static decodeFromHexString(value: string): Object;


    static encodeToHexString(buffer: Object): string;


    static decodeFromBase64String(value: string): Object;


    static encodeToBase64String(buffer: Object): string;


    static convertStringToBinary(value: string, encoding: BinaryStringEncoding): Object;


    static convertBinaryToString(encoding: BinaryStringEncoding, buffer: Object): string;


  }

export * as certificates from "./security.cryptography.certificates.js";
export * as core from "./security.cryptography.core.js";
export * as dataprotection from "./security.cryptography.dataprotection.js";