  export enum AddContactResult {
    added,
    alreadyAdded,
    unavailable,
  }

  export class ContactRemovedEventArgs {
    id: String;
    constructor();

  }

  export class ContactPickerUI {
    desiredFields: Object;
    selectionMode: Number;
    desiredFieldsWithContactFieldType: Object;
    constructor();

    addContact(id: String, contact: Object): AddContactResult;
    addContact(contact: Object): AddContactResult;

    removeContact(id: String): void;

    containsContact(id: String): Boolean;

    addListener(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    on(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    off(type: "ContactRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

