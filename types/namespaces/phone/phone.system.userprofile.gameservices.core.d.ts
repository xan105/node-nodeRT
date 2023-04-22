  export enum GameServiceScoreKind {
    number,
    time,
  }

  export enum GameServiceGameOutcome {
    none,
    win,
    loss,
    tie,
  }

  export class GameServicePropertyCollection {
    constructor();

    getPropertyAsync(propertyName: string, callback: (error: Error, result: Object) => void): void ;

  }

  export class GameService {
    static serviceUri: Object;
    constructor();

    static getGamerProfileAsync(callback: (error: Error, result: GameServicePropertyCollection) => void): void ;


    static getInstalledGameItemsAsync(callback: (error: Error, result: GameServicePropertyCollection) => void): void ;


    static getPartnerTokenAsync(audienceUri: Object, callback: (error: Error, result: string) => void): void ;


    static getPrivilegesAsync(callback: (error: Error, result: string) => void): void ;


    static notifyPartnerTokenExpired(audienceUri: Object): void;


    static getAuthenticationStatus(): number;


    static grantAchievement(achievementId: number): void;


    static grantAvatarAward(avatarAwardId: number): void;


    static postResult(gameVariant: number, scoreKind: GameServiceScoreKind, scoreValue: number, gameOutcome: GameServiceGameOutcome, buffer: Object): void;


  }

