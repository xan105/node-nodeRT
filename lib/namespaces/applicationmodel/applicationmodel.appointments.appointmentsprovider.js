/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.appointments.appointmentsprovider
  name: "windows.applicationmodel.appointments.appointmentsprovider",
  externalReference: [
    "Windows.ApplicationModel.Appointments",
  ]
};

export const {
  AppointmentsProviderLaunchActionVerbs,
  AddAppointmentOperation,
  ReplaceAppointmentOperation,
  RemoveAppointmentOperation,
} = load(namespace.name);

reference(namespace.externalReference);
