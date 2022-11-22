  export class CoreUserActivityManager {
    constructor();

    static deleteUserActivitySessionsInTimeRangeAsync(channel: Object, startTime: Date, endTime: Date, callback: (error: Error) => void): void ;


    static createUserActivitySessionInBackground(activity: Object): Object;


  }

