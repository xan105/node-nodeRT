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
  FileOpenDisposition,
  InputStreamOptions,
  UnicodeEncoding,
  Buffer,
  DataReader,
  DataReaderLoadOperation,
  DataWriter,
  DataWriterStoreOperation,
  FileInputStream,
  FileOutputStream,
  FileRandomAccessStream,
  IBuffer,
  IContentTypeProvider,
  IDataReader,
  IDataWriter,
  IInputStream,
  IInputStreamReference,
  IOutputStream,
  IPropertySetSerializer,
  IRandomAccessStream,
  IRandomAccessStreamReference,
  IRandomAccessStreamWithContentType,
  InMemoryRandomAccessStream,
  InputStreamOverStream,
  OutputStreamOverStream,
  RandomAccessStream,
  RandomAccessStreamOverStream,
  RandomAccessStreamReference,
} = load(namespace.name);

reference(namespace.externalReference);
