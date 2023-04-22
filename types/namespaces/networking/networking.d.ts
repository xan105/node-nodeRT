  export enum HostNameSortOptions {
    none,
    optimizeForLongConnections,
  }

  export enum HostNameType {
    domainName,
    ipv4,
    ipv6,
    bluetooth,
  }

  export enum DomainNameType {
    suffix,
    fullyQualified,
  }

  export class HostName {
    canonicalName: string;
    displayName: string;
    iPInformation: Object;
    rawName: string;
    type: HostNameType;
    constructor();
    constructor(hostName: string);

    static compare(value1: string, value2: string): number;


    isEqual(hostName: HostName): boolean;

    toString(): string;

  }

  export class EndpointPair {
    remoteServiceName: string;
    remoteHostName: HostName;
    localServiceName: string;
    localHostName: HostName;
    constructor();
    constructor(localHostName: HostName, localServiceName: string, remoteHostName: HostName, remoteServiceName: string);

  }

export * as backgroundtransfer from "./networking.backgroundtransfer.js";
export * as connectivity from "./networking.connectivity.js";
export * as networkoperators from "./networking.networkoperators.js";
export * as proximity from "./networking.proximity.js";
export * as pushnotifications from "./networking.pushnotifications.js";
export * as servicediscovery from "./networking.servicediscovery.js";
export * as sockets from "./networking.sockets.js";
export * as vpn from "./networking.vpn.js";
export * as xboxlive from "./networking.xboxlive.js";