  export enum YearFormat {
    none,
    default,
    abbreviated,
    full,
  }

  export enum MonthFormat {
    none,
    default,
    abbreviated,
    full,
    numeric,
  }

  export enum DayOfWeekFormat {
    none,
    default,
    abbreviated,
    full,
  }

  export enum DayFormat {
    none,
    default,
  }

  export enum HourFormat {
    none,
    default,
  }

  export enum MinuteFormat {
    none,
    default,
  }

  export enum SecondFormat {
    none,
    default,
  }

  export class DateTimeFormatter {
    static longDate: DateTimeFormatter;
    static longTime: DateTimeFormatter;
    static shortDate: DateTimeFormatter;
    static shortTime: DateTimeFormatter;
    numeralSystem: String;
    clock: String;
    geographicRegion: String;
    includeDay: DayFormat;
    includeDayOfWeek: DayOfWeekFormat;
    includeHour: HourFormat;
    includeMinute: MinuteFormat;
    includeMonth: MonthFormat;
    includeSecond: SecondFormat;
    includeYear: YearFormat;
    languages: Object;
    calendar: String;
    patterns: Object;
    resolvedGeographicRegion: String;
    resolvedLanguage: String;
    template: String;
    constructor();
    constructor(formatTemplate: String);
    constructor(formatTemplate: String, languages: Object);
    constructor(formatTemplate: String, languages: Object, geographicRegion: String, calendar: String, clock: String);
    constructor(yearFormat: YearFormat, monthFormat: MonthFormat, dayFormat: DayFormat, dayOfWeekFormat: DayOfWeekFormat);
    constructor(hourFormat: HourFormat, minuteFormat: MinuteFormat, secondFormat: SecondFormat);
    constructor(yearFormat: YearFormat, monthFormat: MonthFormat, dayFormat: DayFormat, dayOfWeekFormat: DayOfWeekFormat, hourFormat: HourFormat, minuteFormat: MinuteFormat, secondFormat: SecondFormat, languages: Object);
    constructor(yearFormat: YearFormat, monthFormat: MonthFormat, dayFormat: DayFormat, dayOfWeekFormat: DayOfWeekFormat, hourFormat: HourFormat, minuteFormat: MinuteFormat, secondFormat: SecondFormat, languages: Object, geographicRegion: String, calendar: String, clock: String);

    format(value: Date): String;
    format(datetime: Date, timeZoneId: String): String;

  }

