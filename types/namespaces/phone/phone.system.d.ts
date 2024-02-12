  export class SystemProtection {
    static screenLocked: Boolean;
    constructor();

    static requestScreenUnlock(): void;


  }

export const SystemProtection: any;
export * as power from "./phone.system.power.js";
export * as profile from "./phone.system.profile.js";
export * as userprofile from "./phone.system.userprofile.js";
