  export class CharacterGrouping {
    first: string;
    label: string;
    constructor();

  }

  export class CharacterGroupings {
    constructor();
    constructor(language: string);

    lookup(text: string): string;

    getAt(index: number): CharacterGrouping;

    indexOf(value: CharacterGrouping, index: number): boolean;

    getMany();
    first(): Object;

  }

