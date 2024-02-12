  export enum GameServiceGameOutcome {
    none,
    win,
    loss,
    tie,
  }

  export enum GameServiceScoreKind {
    number,
    time,
  }

  export class GameService {
    static serviceUri: Object;
    constructor();

    static getGamerProfileAsync(callback: (error: Error, result: GameServicePropertyCollection) => void): void ;


    static getInstalledGameItemsAsync(callback: (error: Error, result: GameServicePropertyCollection) => void): void ;


    static getPartnerTokenAsync(audienceUri: Object, callback: (error: Error, result: String) => void): void ;


    static getPrivilegesAsync(callback: (error: Error, result: String) => void): void ;


    static notifyPartnerTokenExpired(audienceUri: Object): void;


    static getAuthenticationStatus(): Number;


    static grantAchievement(achievementId: Number): void;


    static grantAvatarAward(avatarAwardId: Number): void;


    static postResult(gameVariant: Number, scoreKind: GameServiceScoreKind, scoreValue: Number, gameOutcome: GameServiceGameOutcome, buffer: Object): void;


  }

  export class GameServicePropertyCollection {
    constructor();

    getPropertyAsync(propertyName: String, callback: (error: Error, result: Object) => void): void ;

  }

