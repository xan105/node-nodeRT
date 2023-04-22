  export enum NamedPolicyKind {
    invalid,
    binary,
    boolean,
    int32,
    int64,
    string,
  }

  export class NamedPolicyData {
    area: string;
    isManaged: boolean;
    isUserPolicy: boolean;
    kind: NamedPolicyKind;
    name: string;
    user: Object;
    constructor();

    getBoolean(): boolean;

    getBinary(): Object;

    getInt32(): number;

    getInt64(): number;

    getString(): string;

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class NamedPolicy {
    constructor();

    static getPolicyFromPath(area: string, name: string): NamedPolicyData;


    static getPolicyFromPathForUser(user: Object, area: string, name: string): NamedPolicyData;


  }

