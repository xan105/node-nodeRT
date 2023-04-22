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
    numeralSystem: string;
    clock: string;
    geographicRegion: string;
    includeDay: DayFormat;
    includeDayOfWeek: DayOfWeekFormat;
    includeHour: HourFormat;
    includeMinute: MinuteFormat;
    includeMonth: MonthFormat;
    includeSecond: SecondFormat;
    includeYear: YearFormat;
    languages: Object;
    calendar: string;
    patterns: Object;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    template: string;
    constructor();
    constructor(formatTemplate: string);
    constructor(formatTemplate: string, languages: Object);
    constructor(formatTemplate: string, languages: Object, geographicRegion: string, calendar: string, clock: string);
    constructor(yearFormat: YearFormat, monthFormat: MonthFormat, dayFormat: DayFormat, dayOfWeekFormat: DayOfWeekFormat);
    constructor(hourFormat: HourFormat, minuteFormat: MinuteFormat, secondFormat: SecondFormat);
    constructor(yearFormat: YearFormat, monthFormat: MonthFormat, dayFormat: DayFormat, dayOfWeekFormat: DayOfWeekFormat, hourFormat: HourFormat, minuteFormat: MinuteFormat, secondFormat: SecondFormat, languages: Object);
    constructor(yearFormat: YearFormat, monthFormat: MonthFormat, dayFormat: DayFormat, dayOfWeekFormat: DayOfWeekFormat, hourFormat: HourFormat, minuteFormat: MinuteFormat, secondFormat: SecondFormat, languages: Object, geographicRegion: string, calendar: string, clock: string);

    format(value: Date): string;
    format(datetime: Date, timeZoneId: string): string;

  }

