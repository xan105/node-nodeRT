/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media
  name: "windows.media",
  externalReference: [
    "Windows.Foundation",
    "Windows.ApplicationModel.AppService",
    "Windows.Storage.Streams",
    "Windows.Storage",
    "Windows.Graphics.Imaging",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Graphics.DirectX",
  ]
};

export const {
  AudioBufferAccessMode,
  AudioProcessing,
  MediaPlaybackAutoRepeatMode,
  MediaPlaybackStatus,
  MediaPlaybackType,
  MediaTimelineControllerState,
  SoundLevel,
  SystemMediaTransportControlsButton,
  SystemMediaTransportControlsProperty,
  AudioBuffer,
  AudioFrame,
  AutoRepeatModeChangeRequestedEventArgs,
  IMediaExtension,
  IMediaFrame,
  IMediaMarker,
  IMediaMarkers,
  ImageDisplayProperties,
  MediaControl,
  MediaExtensionManager,
  MediaMarkerTypes,
  MediaProcessingTriggerDetails,
  MediaTimelineController,
  MediaTimelineControllerFailedEventArgs,
  MusicDisplayProperties,
  PlaybackPositionChangeRequestedEventArgs,
  PlaybackRateChangeRequestedEventArgs,
  ShuffleEnabledChangeRequestedEventArgs,
  SystemMediaTransportControls,
  SystemMediaTransportControlsButtonPressedEventArgs,
  SystemMediaTransportControlsDisplayUpdater,
  SystemMediaTransportControlsPropertyChangedEventArgs,
  SystemMediaTransportControlsTimelineProperties,
  VideoDisplayProperties,
  VideoEffects,
  VideoFrame,
} = load(namespace.name);

reference(namespace.externalReference);

export * as appbroadcasting from "./media.appbroadcasting.js";
export * as apprecording from "./media.apprecording.js";
export * as audio from "./media.audio.js";
export * as capture from "./media.capture.js";
export * as casting from "./media.casting.js";
export * as closedcaptioning from "./media.closedcaptioning.js";
export * as contentrestrictions from "./media.contentrestrictions.js";
export * as control from "./media.control.js";
export * as core from "./media.core.js";
export * as devices from "./media.devices.js";
export * as dialprotocol from "./media.dialprotocol.js";
export * as editing from "./media.editing.js";
export * as effects from "./media.effects.js";
export * as faceanalysis from "./media.faceanalysis.js";
export * as import from "./media.import.js";
export * as mediaproperties from "./media.mediaproperties.js";
export * as miracast from "./media.miracast.js";
export * as ocr from "./media.ocr.js";
export * as playback from "./media.playback.js";
export * as playlists from "./media.playlists.js";
export * as playto from "./media.playto.js";
export * as protection from "./media.protection.js";
export * as render from "./media.render.js";
export * as speechrecognition from "./media.speechrecognition.js";
export * as speechsynthesis from "./media.speechsynthesis.js";
export * as streaming from "./media.streaming.js";
export * as transcoding from "./media.transcoding.js";