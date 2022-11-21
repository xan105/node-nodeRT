/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.storage.streams
  name: "windows.storage.streams",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.System",
  ]
};

export const {
  ByteOrder,
  UnicodeEncoding,
  InputStreamOptions,
  FileOpenDisposition,
  DataReaderLoadOperation,
  IDataReader,
  DataReader,
  DataWriterStoreOperation,
  IDataWriter,
  DataWriter,
  Buffer,
  IBuffer,
  IContentTypeProvider,
  IInputStream,
  IOutputStream,
  IRandomAccessStream,
  IRandomAccessStreamWithContentType,
  IRandomAccessStreamReference,
  RandomAccessStream,
  IInputStreamReference,
  RandomAccessStreamReference,
  FileRandomAccessStream,
  FileInputStream,
  FileOutputStream,
  RandomAccessStreamOverStream,
  InputStreamOverStream,
  OutputStreamOverStream,
  InMemoryRandomAccessStream,
} = load(namespace.name);

reference(namespace.externalReference);
