  export enum NamedPolicyKind {
    invalid,
    binary,
    boolean,
    int32,
    int64,
    string,
  }

  export class NamedPolicy {
    constructor();

    static getPolicyFromPath(area: String, name: String): NamedPolicyData;


    static getPolicyFromPathForUser(user: Object, area: String, name: String): NamedPolicyData;


  }

  export class NamedPolicyData {
    area: String;
    isManaged: Boolean;
    isUserPolicy: Boolean;
    kind: NamedPolicyKind;
    name: String;
    user: Object;
    constructor();

    getBoolean(): Boolean;

    getBinary(): Object;

    getInt32(): Number;

    getInt64(): Number;

    getString(): String;

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

