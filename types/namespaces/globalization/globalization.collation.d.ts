  export class CharacterGrouping {
    first: String;
    label: String;
    constructor();

  }

  export class CharacterGroupings {
    constructor();
    constructor(language: String);

    lookup(text: String): String;

    getAt(index: Number): CharacterGrouping;

    indexOf(value: CharacterGrouping, index: Number): Boolean;

    getMany();
    first(): Object;

  }

