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
  AppointmentStoreAccessType,
  AppointmentSensitivity,
  AppointmentBusyStatus,
  AppointmentParticipantResponse,
  AppointmentParticipantRole,
  AppointmentRecurrenceUnit,
  AppointmentDaysOfWeek,
  AppointmentWeekOfMonth,
  AppointmentCalendarSyncStatus,
  RecurrenceType,
  AppointmentDetailsKind,
  FindAppointmentCalendarsOptions,
  AppointmentSummaryCardView,
  AppointmentCalendarOtherAppReadAccess,
  AppointmentCalendarOtherAppWriteAccess,
  AppointmentConflictType,
  AppointmentStoreChangeType,
  Appointment,
  AppointmentStore,
  AppointmentManagerForUser,
  IAppointmentParticipant,
  AppointmentOrganizer,
  AppointmentInvitee,
  AppointmentRecurrence,
  AppointmentManager,
  FindAppointmentsOptions,
  AppointmentException,
  AppointmentCalendarSyncManager,
  AppointmentCalendar,
  AppointmentStoreChange,
  AppointmentStoreChangeReader,
  AppointmentStoreChangedDeferral,
  AppointmentStoreChangeTracker,
  AppointmentConflictResult,
  AppointmentStoreChangedEventArgs,
  AppointmentProperties,
  AppointmentStoreNotificationTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);

export * as appointmentsprovider from "./applicationmodel.appointments.appointmentsprovider.js";
export * as dataprovider from "./applicationmodel.appointments.dataprovider.js";