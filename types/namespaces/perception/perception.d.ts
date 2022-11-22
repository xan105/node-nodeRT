  export class PerceptionTimestamp {
    predictionAmount: Number;
    targetTime: Date;
    constructor();

  }

  export class PerceptionTimestampHelper {
    constructor();

    static fromHistoricalTargetTime(targetTime: Date): PerceptionTimestamp;


  }

export * as automation from "./perception.automation.js";
export * as people from "./perception.people.js";
export * as spatial from "./perception.spatial.js";