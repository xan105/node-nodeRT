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
  IMidiOutPort,
  MidiActiveSensingMessage,
  MidiChannelPressureMessage,
  MidiContinueMessage,
  MidiControlChangeMessage,
  MidiInPort,
  MidiMessageReceivedEventArgs,
  MidiNoteOffMessage,
  MidiNoteOnMessage,
  MidiOutPort,
  MidiPitchBendChangeMessage,
  MidiPolyphonicKeyPressureMessage,
  MidiProgramChangeMessage,
  MidiSongPositionPointerMessage,
  MidiSongSelectMessage,
  MidiStartMessage,
  MidiStopMessage,
  MidiSynthesizer,
  MidiSystemExclusiveMessage,
  MidiSystemResetMessage,
  MidiTimeCodeMessage,
  MidiTimingClockMessage,
  MidiTuneRequestMessage,
} = load(namespace.name);

reference(namespace.externalReference);
