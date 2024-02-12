/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.appointments
  name: "windows.applicationmodel.appointments",
  externalReference: [
    "Windows.Foundation",
    "Windows.UI.Popups",
    "Windows.System",
  ]
};

export const {
  AppointmentBusyStatus,
  AppointmentCalendarOtherAppReadAccess,
  AppointmentCalendarOtherAppWriteAccess,
  AppointmentCalendarSyncStatus,
  AppointmentConflictType,
  AppointmentDaysOfWeek,
  AppointmentDetailsKind,
  AppointmentParticipantResponse,
  AppointmentParticipantRole,
  AppointmentRecurrenceUnit,
  AppointmentSensitivity,
  AppointmentStoreAccessType,
  AppointmentStoreChangeType,
  AppointmentSummaryCardView,
  AppointmentWeekOfMonth,
  FindAppointmentCalendarsOptions,
  RecurrenceType,
  Appointment,
  AppointmentCalendar,
  AppointmentCalendarSyncManager,
  AppointmentConflictResult,
  AppointmentException,
  AppointmentInvitee,
  AppointmentManager,
  AppointmentManagerForUser,
  AppointmentOrganizer,
  AppointmentProperties,
  AppointmentRecurrence,
  AppointmentStore,
  AppointmentStoreChange,
  AppointmentStoreChangeReader,
  AppointmentStoreChangeTracker,
  AppointmentStoreChangedDeferral,
  AppointmentStoreChangedEventArgs,
  AppointmentStoreNotificationTriggerDetails,
  FindAppointmentsOptions,
  IAppointmentParticipant,
} = load(namespace.name);

reference(namespace.externalReference);

export * as appointmentsprovider from "./applicationmodel.appointments.appointmentsprovider.js";
export * as dataprovider from "./applicationmodel.appointments.dataprovider.js";