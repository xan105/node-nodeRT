/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.data.xml.dom
  name: "windows.data.xml.dom",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.Storage.Streams",
  ]
};

export const {
  NodeType,
  DtdEntity,
  DtdNotation,
  IXmlCharacterData,
  IXmlNode,
  IXmlNodeSelector,
  IXmlNodeSerializer,
  IXmlText,
  XmlAttribute,
  XmlCDataSection,
  XmlComment,
  XmlDocument,
  XmlDocumentFragment,
  XmlDocumentType,
  XmlDomImplementation,
  XmlElement,
  XmlEntityReference,
  XmlLoadSettings,
  XmlNamedNodeMap,
  XmlNodeList,
  XmlProcessingInstruction,
  XmlText,
} = load(namespace.name);

reference(namespace.externalReference);
