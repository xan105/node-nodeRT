/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.appointments.dataprovider
  name: "windows.applicationmodel.appointments.dataprovider",
  externalReference: [
    "Windows.Foundation",
    "Windows.ApplicationModel.Appointments",
  ]
};

export const {
  AppointmentDataProviderConnection,
  AppointmentCalendarSyncManagerSyncRequestEventArgs,
  AppointmentCalendarCreateOrUpdateAppointmentRequestEventArgs,
  AppointmentCalendarCancelMeetingRequestEventArgs,
  AppointmentCalendarForwardMeetingRequestEventArgs,
  AppointmentCalendarProposeNewTimeForMeetingRequestEventArgs,
  AppointmentCalendarUpdateMeetingResponseRequestEventArgs,
  AppointmentDataProviderTriggerDetails,
  AppointmentCalendarSyncManagerSyncRequest,
  AppointmentCalendarCreateOrUpdateAppointmentRequest,
  AppointmentCalendarCancelMeetingRequest,
  AppointmentCalendarForwardMeetingRequest,
  AppointmentCalendarProposeNewTimeForMeetingRequest,
  AppointmentCalendarUpdateMeetingResponseRequest,
} = load(namespace.name);

reference(namespace.externalReference);
