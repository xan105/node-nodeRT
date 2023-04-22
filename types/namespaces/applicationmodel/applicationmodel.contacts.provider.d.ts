  export enum AddContactResult {
    added,
    alreadyAdded,
    unavailable,
  }

  export class ContactRemovedEventArgs {
    id: string;
    constructor();

  }

  export class ContactPickerUI {
    desiredFields: Object;
    selectionMode: number;
    desiredFieldsWithContactFieldType: Object;
    constructor();

    addContact(id: string, contact: Object): AddContactResult;
    addContact(contact: Object): AddContactResult;

    removeContact(id: string): void;

    containsContact(id: string): boolean;

    addListener(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    on(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    off(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

