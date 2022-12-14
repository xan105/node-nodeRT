  export enum TypeKind {
    primitive,
    metadata,
    custom,
  }

  export class IBindableObservableVector {
    constructor();

    addListener(type: "VectorChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VectorChanged", listener: (ev: Event) => void): void ;
    on(type: "VectorChanged", listener: (ev: Event) => void): void ;
    off(type: "VectorChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IBindableVectorView {
    size: Number;
    constructor();

    getAt(index: Number): Object;

    indexOf(value: Object, index: Number): Boolean;

  }

  export class IBindableIterator {
    current: Object;
    hasCurrent: Boolean;
    constructor();

    moveNext(): Boolean;

  }

