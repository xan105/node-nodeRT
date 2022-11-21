/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.preview.notes
  name: "windows.applicationmodel.preview.notes",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Graphics.Imaging",
  ]
};

export const {
  NotePlacementChangedPreviewEventArgs,
  NoteVisibilityChangedPreviewEventArgs,
  NotesWindowManagerPreviewShowNoteOptions,
  NotesWindowManagerPreview,
} = load(namespace.name);

reference(namespace.externalReference);
