  export class PerceptionTimestamp {
    predictionAmount: Number;
    targetTime: Date;
    systemRelativeTargetTime: Number;
    constructor();

  }

  export class PerceptionTimestampHelper {
    constructor();

    static fromSystemRelativeTargetTime(targetTime: Number): PerceptionTimestamp;


    static fromHistoricalTargetTime(targetTime: Date): PerceptionTimestamp;


  }

export const PerceptionTimestamp: any;
export const PerceptionTimestampHelper: any;
export * as automation from "./perception.automation.js";
export * as people from "./perception.people.js";
export * as spatial from "./perception.spatial.js";
