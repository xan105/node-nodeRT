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
  CausalityTraceLevel,
  CausalitySource,
  CausalityRelation,
  CausalitySynchronousWork,
  ErrorOptions,
  LoggingLevel,
  LoggingOpcode,
  LoggingFieldFormat,
  TracingStatusChangedEventArgs,
  AsyncCausalityTracer,
  IErrorReportingSettings,
  RuntimeBrokerErrorSettings,
  ErrorDetails,
  LoggingOptions,
  LoggingChannelOptions,
  LoggingFields,
  ILoggingTarget,
  LoggingActivity,
  ILoggingChannel,
  LoggingChannel,
  ILoggingSession,
  LoggingSession,
  LogFileGeneratedEventArgs,
  IFileLoggingSession,
  FileLoggingSession,
} = load(namespace.name);

reference(namespace.externalReference);
