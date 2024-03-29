/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.core
  name: "windows.media.core",
  externalReference: [
    "Windows.Media.MediaProperties",
    "Windows.Media.Playback",
    "Windows.Storage.Streams",
    "Windows.Media.FaceAnalysis",
    "Windows.Media.Devices.Core",
    "Windows.Graphics.Imaging",
    "Windows.Foundation",
    "Windows.Media.Streaming.Adaptive",
    "Windows.Storage",
    "Windows.Networking.BackgroundTransfer",
    "Windows.Media.Capture.Frames",
    "Windows.ApplicationModel.AppService",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Media.Protection",
    "Windows.Storage.FileProperties",
    "Windows.Media.Capture",
    "Windows.Media.Devices",
  ]
};

export const {
  AudioDecoderDegradation,
  AudioDecoderDegradationReason,
  CodecCategory,
  CodecKind,
  FaceDetectionMode,
  MediaDecoderStatus,
  MediaSourceState,
  MediaSourceStatus,
  MediaStreamSourceClosedReason,
  MediaStreamSourceErrorStatus,
  MediaTrackKind,
  MseAppendMode,
  MseEndOfStreamStatus,
  MseReadyState,
  SceneAnalysisRecommendation,
  TimedMetadataKind,
  TimedMetadataTrackErrorCode,
  TimedTextBoutenPosition,
  TimedTextBoutenType,
  TimedTextDisplayAlignment,
  TimedTextFlowDirection,
  TimedTextFontStyle,
  TimedTextLineAlignment,
  TimedTextRubyAlign,
  TimedTextRubyPosition,
  TimedTextRubyReserve,
  TimedTextScrollMode,
  TimedTextUnit,
  TimedTextWeight,
  TimedTextWrapping,
  TimedTextWritingMode,
  VideoStabilizationEffectEnabledChangedReason,
  AudioStreamDescriptor,
  AudioTrack,
  AudioTrackOpenFailedEventArgs,
  AudioTrackSupportInfo,
  ChapterCue,
  CodecInfo,
  CodecQuery,
  CodecSubtypes,
  DataCue,
  FaceDetectedEventArgs,
  FaceDetectionEffect,
  FaceDetectionEffectDefinition,
  FaceDetectionEffectFrame,
  HighDynamicRangeControl,
  HighDynamicRangeOutput,
  IMediaCue,
  IMediaSource,
  IMediaStreamDescriptor,
  IMediaStreamDescriptor2,
  IMediaTrack,
  ISingleSelectMediaTrackList,
  ITimedMetadataTrackProvider,
  ImageCue,
  InitializeMediaStreamSourceRequestedEventArgs,
  LowLightFusion,
  LowLightFusionResult,
  MediaBinder,
  MediaBindingEventArgs,
  MediaCueEventArgs,
  MediaSource,
  MediaSourceAppServiceConnection,
  MediaSourceError,
  MediaSourceOpenOperationCompletedEventArgs,
  MediaSourceStateChangedEventArgs,
  MediaStreamSample,
  MediaStreamSamplePropertySet,
  MediaStreamSampleProtectionProperties,
  MediaStreamSource,
  MediaStreamSourceClosedEventArgs,
  MediaStreamSourceClosedRequest,
  MediaStreamSourceSampleRenderedEventArgs,
  MediaStreamSourceSampleRequest,
  MediaStreamSourceSampleRequestDeferral,
  MediaStreamSourceSampleRequestedEventArgs,
  MediaStreamSourceStartingEventArgs,
  MediaStreamSourceStartingRequest,
  MediaStreamSourceStartingRequestDeferral,
  MediaStreamSourceSwitchStreamsRequest,
  MediaStreamSourceSwitchStreamsRequestDeferral,
  MediaStreamSourceSwitchStreamsRequestedEventArgs,
  MseSourceBuffer,
  MseSourceBufferList,
  MseStreamSource,
  SceneAnalysisEffect,
  SceneAnalysisEffectDefinition,
  SceneAnalysisEffectFrame,
  SceneAnalyzedEventArgs,
  SpeechCue,
  TimedMetadataStreamDescriptor,
  TimedMetadataTrack,
  TimedMetadataTrackError,
  TimedMetadataTrackFailedEventArgs,
  TimedTextBouten,
  TimedTextCue,
  TimedTextLine,
  TimedTextRegion,
  TimedTextRuby,
  TimedTextSource,
  TimedTextSourceResolveResultEventArgs,
  TimedTextStyle,
  TimedTextSubformat,
  VideoStabilizationEffect,
  VideoStabilizationEffectDefinition,
  VideoStabilizationEffectEnabledChangedEventArgs,
  VideoStreamDescriptor,
  VideoTrack,
  VideoTrackOpenFailedEventArgs,
  VideoTrackSupportInfo,
} = load(namespace.name);

reference(namespace.externalReference);
