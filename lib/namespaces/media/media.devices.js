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
    "Windows.Foundation",
    "Windows.Media.Capture",
    "Windows.Media.MediaProperties",
    "Windows.Storage.Streams",
    "Windows.Devices.Enumeration",
    "Windows.Media.Devices.Core",
  ]
};

export const {
  AdvancedPhotoMode,
  AudioDeviceRole,
  AutoFocusRange,
  CameraOcclusionKind,
  CameraStreamState,
  CaptureSceneMode,
  CaptureUse,
  ColorTemperaturePreset,
  DigitalWindowMode,
  FocusMode,
  FocusPreset,
  HdrVideoMode,
  InfraredTorchMode,
  IsoSpeedPreset,
  ManualFocusDistance,
  MediaCaptureFocusState,
  MediaCaptureOptimization,
  MediaCapturePauseBehavior,
  OpticalImageStabilizationMode,
  RegionOfInterestType,
  SendCommandStatus,
  TelephonyKey,
  VideoDeviceControllerGetDevicePropertyStatus,
  VideoDeviceControllerSetDevicePropertyStatus,
  VideoTemporalDenoisingMode,
  ZoomTransitionMode,
  AdvancedPhotoCaptureSettings,
  AdvancedPhotoControl,
  AudioDeviceController,
  AudioDeviceModule,
  AudioDeviceModuleNotificationEventArgs,
  AudioDeviceModulesManager,
  CallControl,
  CameraOcclusionInfo,
  CameraOcclusionState,
  CameraOcclusionStateChangedEventArgs,
  DefaultAudioCaptureDeviceChangedEventArgs,
  DefaultAudioRenderDeviceChangedEventArgs,
  DialRequestedEventArgs,
  DigitalWindowBounds,
  DigitalWindowCapability,
  DigitalWindowControl,
  ExposureCompensationControl,
  ExposureControl,
  ExposurePriorityVideoControl,
  FlashControl,
  FocusControl,
  FocusSettings,
  HdrVideoControl,
  IDefaultAudioDeviceChangedEventArgs,
  IMediaDeviceController,
  InfraredTorchControl,
  IsoSpeedControl,
  KeypadPressedEventArgs,
  LowLagPhotoControl,
  LowLagPhotoSequenceControl,
  MediaDevice,
  MediaDeviceControl,
  MediaDeviceControlCapabilities,
  ModuleCommandResult,
  OpticalImageStabilizationControl,
  PanelBasedOptimizationControl,
  PhotoConfirmationControl,
  RedialRequestedEventArgs,
  RegionOfInterest,
  RegionsOfInterestControl,
  SceneModeControl,
  TorchControl,
  VideoDeviceController,
  VideoDeviceControllerGetDevicePropertyResult,
  VideoTemporalDenoisingControl,
  WhiteBalanceControl,
  ZoomControl,
  ZoomSettings,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./media.devices.core.js";