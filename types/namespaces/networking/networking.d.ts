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
    canonicalName: String;
    displayName: String;
    iPInformation: Object;
    rawName: String;
    type: HostNameType;
    constructor();
    constructor(hostName: String);

    static compare(value1: String, value2: String): Number;


    isEqual(hostName: HostName): Boolean;

    toString(): String;

  }

  export class EndpointPair {
    remoteServiceName: String;
    remoteHostName: HostName;
    localServiceName: String;
    localHostName: HostName;
    constructor();
    constructor(localHostName: HostName, localServiceName: String, remoteHostName: HostName, remoteServiceName: String);

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