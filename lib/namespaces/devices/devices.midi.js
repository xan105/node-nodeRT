/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.midi
  name: "windows.devices.midi",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Devices.Enumeration",
  ]
};

export const {
  MidiMessageType,
  IMidiMessage,
  MidiNoteOffMessage,
  MidiNoteOnMessage,
  MidiPolyphonicKeyPressureMessage,
  MidiControlChangeMessage,
  MidiProgramChangeMessage,
  MidiChannelPressureMessage,
  MidiPitchBendChangeMessage,
  MidiSystemExclusiveMessage,
  MidiTimeCodeMessage,
  MidiSongPositionPointerMessage,
  MidiSongSelectMessage,
  MidiTuneRequestMessage,
  MidiTimingClockMessage,
  MidiStartMessage,
  MidiContinueMessage,
  MidiStopMessage,
  MidiActiveSensingMessage,
  MidiSystemResetMessage,
  MidiMessageReceivedEventArgs,
  MidiInPort,
  IMidiOutPort,
  MidiOutPort,
  MidiSynthesizer,
} = load(namespace.name);

reference(namespace.externalReference);
