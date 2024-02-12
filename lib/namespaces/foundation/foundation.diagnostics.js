/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.foundation.diagnostics
  name: "windows.foundation.diagnostics",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage",
  ]
};

export const {
  CausalityRelation,
  CausalitySource,
  CausalitySynchronousWork,
  CausalityTraceLevel,
  ErrorOptions,
  LoggingFieldFormat,
  LoggingLevel,
  LoggingOpcode,
  AsyncCausalityTracer,
  ErrorDetails,
  FileLoggingSession,
  IErrorReportingSettings,
  IFileLoggingSession,
  ILoggingChannel,
  ILoggingSession,
  ILoggingTarget,
  LogFileGeneratedEventArgs,
  LoggingActivity,
  LoggingChannel,
  LoggingChannelOptions,
  LoggingFields,
  LoggingOptions,
  LoggingSession,
  RuntimeBrokerErrorSettings,
  TracingStatusChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
