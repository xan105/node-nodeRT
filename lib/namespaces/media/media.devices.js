/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.devices
  name: "windows.media.devices",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Media.Capture",
    "Windows.Media.MediaProperties",
    "Windows.Media.Devices.Core",
  ]
};

export const {
  AudioDeviceRole,
  SendCommandStatus,
  IsoSpeedPreset,
  CaptureSceneMode,
  MediaCaptureFocusState,
  CameraStreamState,
  MediaCapturePauseBehavior,
  AdvancedPhotoMode,
  ColorTemperaturePreset,
  ZoomTransitionMode,
  FocusPreset,
  FocusMode,
  ManualFocusDistance,
  AutoFocusRange,
  RegionOfInterestType,
  HdrVideoMode,
  OpticalImageStabilizationMode,
  VideoTemporalDenoisingMode,
  CaptureUse,
  MediaCaptureOptimization,
  VideoDeviceControllerSetDevicePropertyStatus,
  VideoDeviceControllerGetDevicePropertyStatus,
  TelephonyKey,
  IDefaultAudioDeviceChangedEventArgs,
  DefaultAudioCaptureDeviceChangedEventArgs,
  DefaultAudioRenderDeviceChangedEventArgs,
  ModuleCommandResult,
  AudioDeviceModulesManager,
  AudioDeviceModuleNotificationEventArgs,
  AudioDeviceModule,
  MediaDevice,
  SceneModeControl,
  TorchControl,
  FlashControl,
  ExposureCompensationControl,
  IsoSpeedControl,
  WhiteBalanceControl,
  ExposureControl,
  ZoomSettings,
  ZoomControl,
  FocusSettings,
  FocusControl,
  RegionOfInterest,
  RegionsOfInterestControl,
  ExposurePriorityVideoControl,
  HdrVideoControl,
  AdvancedPhotoCaptureSettings,
  AdvancedPhotoControl,
  OpticalImageStabilizationControl,
  VideoTemporalDenoisingControl,
  IMediaDeviceController,
  MediaDeviceControl,
  LowLagPhotoSequenceControl,
  LowLagPhotoControl,
  PhotoConfirmationControl,
  VideoDeviceControllerGetDevicePropertyResult,
  MediaDeviceControlCapabilities,
  VideoDeviceController,
  AudioDeviceController,
  DialRequestedEventArgs,
  RedialRequestedEventArgs,
  KeypadPressedEventArgs,
  CallControl,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./media.devices.core.js";