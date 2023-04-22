  export enum NodeType {
    invalid,
    elementNode,
    attributeNode,
    textNode,
    dataSectionNode,
    entityReferenceNode,
    entityNode,
    processingInstructionNode,
    commentNode,
    documentNode,
    documentTypeNode,
    documentFragmentNode,
    notationNode,
  }

  export class IXmlNodeSelector {
    constructor();

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

  }

  export class XmlNodeList {
    length: number;
    constructor();

    item(index: number): IXmlNode;

    getAt(index: number): IXmlNode;

    indexOf(value: IXmlNode, index: number): boolean;

    getMany(startIndex: number, items: Array<Object>): number;

    first(): Object;

  }

  export class XmlNamedNodeMap {
    length: number;
    constructor();

    item(index: number): IXmlNode;

    getNamedItem(name: string): IXmlNode;

    setNamedItem(node: IXmlNode): IXmlNode;

    removeNamedItem(name: string): IXmlNode;

    getNamedItemNS(namespaceUri: Object, name: string): IXmlNode;

    removeNamedItemNS(namespaceUri: Object, name: string): IXmlNode;

    setNamedItemNS(node: IXmlNode): IXmlNode;

    getAt(index: number): IXmlNode;

    indexOf(value: IXmlNode, index: number): boolean;

    getMany(startIndex: number, items: Array<Object>): number;

    first(): Object;

  }

  export class XmlDocument {
    doctype: XmlDocumentType;
    documentElement: XmlElement;
    documentUri: string;
    implementation: XmlDomImplementation;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    ownerDocument: XmlDocument;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    static loadFromUriAsync(uri: Object, callback: (error: Error, result: XmlDocument) => void): void ;
    static loadFromUriAsync(uri: Object, loadSettings: XmlLoadSettings, callback: (error: Error, result: XmlDocument) => void): void ;


    static loadFromFileAsync(file: Object, callback: (error: Error, result: XmlDocument) => void): void ;
    static loadFromFileAsync(file: Object, loadSettings: XmlLoadSettings, callback: (error: Error, result: XmlDocument) => void): void ;


    saveToFileAsync(file: Object, callback: (error: Error) => void): void ;

    loadXmlFromBuffer(buffer: Object): void;
    loadXmlFromBuffer(buffer: Object, loadSettings: XmlLoadSettings): void;

    createElement(tagName: string): XmlElement;

    createDocumentFragment(): XmlDocumentFragment;

    createTextNode(data: string): XmlText;

    createComment(data: string): XmlComment;

    createProcessingInstruction(target: string, data: string): XmlProcessingInstruction;

    createAttribute(name: string): XmlAttribute;

    createEntityReference(name: string): XmlEntityReference;

    getElementsByTagName(tagName: string): XmlNodeList;

    createCDataSection(data: string): XmlCDataSection;

    createAttributeNS(namespaceUri: Object, qualifiedName: string): XmlAttribute;

    createElementNS(namespaceUri: Object, qualifiedName: string): XmlElement;

    getElementById(elementId: string): XmlElement;

    importNode(node: IXmlNode, deep: boolean): IXmlNode;

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

    loadXml(xml: string): void;
    loadXml(xml: string, loadSettings: XmlLoadSettings): void;

  }

  export class IXmlNodeSerializer {
    innerText: string;
    constructor();

    getXml(): string;

  }

  export class IXmlNode {
    attributes: XmlNamedNodeMap;
    childNodes: XmlNodeList;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    nodeValue: Object;
    ownerDocument: XmlDocument;
    parentNode: IXmlNode;
    prefix: Object;
    previousSibling: IXmlNode;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

  }

  export class XmlAttribute {
    value: string;
    specified: boolean;
    name: string;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class IXmlCharacterData {
    data: string;
    length: number;
    constructor();

    substringData(offset: number, count: number): string;

    appendData(data: string): void;

    insertData(offset: number, data: string): void;

    deleteData(offset: number, count: number): void;

    replaceData(offset: number, count: number, data: string): void;

  }

  export class IXmlText {
    constructor();

    splitText(offset: number): IXmlText;

  }

  export class XmlDocumentType {
    entities: XmlNamedNodeMap;
    name: string;
    notations: XmlNamedNodeMap;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlDomImplementation {
    constructor();

    hasFeature(feature: string, version: Object): boolean;

  }

  export class XmlElement {
    tagName: string;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    nextSibling: IXmlNode;
    namespaceUri: Object;
    nodeType: NodeType;
    nodeName: string;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    parentNode: IXmlNode;
    childNodes: XmlNodeList;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    getAttribute(attributeName: string): string;

    setAttribute(attributeName: string, attributeValue: string): void;

    removeAttribute(attributeName: string): void;

    getAttributeNode(attributeName: string): XmlAttribute;

    setAttributeNode(newAttribute: XmlAttribute): XmlAttribute;

    removeAttributeNode(attributeNode: XmlAttribute): XmlAttribute;

    getElementsByTagName(tagName: string): XmlNodeList;

    setAttributeNS(namespaceUri: Object, qualifiedName: string, value: string): void;

    getAttributeNS(namespaceUri: Object, localName: string): string;

    removeAttributeNS(namespaceUri: Object, localName: string): void;

    setAttributeNodeNS(newAttribute: XmlAttribute): XmlAttribute;

    getAttributeNodeNS(namespaceUri: Object, localName: string): XmlAttribute;

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlDocumentFragment {
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    parentNode: IXmlNode;
    childNodes: XmlNodeList;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlText {
    data: string;
    length: number;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    splitText(offset: number): IXmlText;

    substringData(offset: number, count: number): string;

    appendData(data: string): void;

    insertData(offset: number, data: string): void;

    deleteData(offset: number, count: number): void;

    replaceData(offset: number, count: number, data: string): void;

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlComment {
    data: string;
    length: number;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    substringData(offset: number, count: number): string;

    appendData(data: string): void;

    insertData(offset: number, data: string): void;

    deleteData(offset: number, count: number): void;

    replaceData(offset: number, count: number, data: string): void;

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlProcessingInstruction {
    prefix: Object;
    nodeValue: Object;
    attributes: XmlNamedNodeMap;
    firstChild: IXmlNode;
    childNodes: XmlNodeList;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    ownerDocument: XmlDocument;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    data: string;
    target: string;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlEntityReference {
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    parentNode: IXmlNode;
    childNodes: XmlNodeList;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlCDataSection {
    data: string;
    length: number;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    splitText(offset: number): IXmlText;

    substringData(offset: number, count: number): string;

    appendData(data: string): void;

    insertData(offset: number, data: string): void;

    deleteData(offset: number, count: number): void;

    replaceData(offset: number, count: number, data: string): void;

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class XmlLoadSettings {
    validateOnParse: boolean;
    resolveExternals: boolean;
    prohibitDtd: boolean;
    maxElementDepth: number;
    elementContentWhiteSpace: boolean;
    constructor();

  }

  export class DtdNotation {
    publicId: Object;
    systemId: Object;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

  export class DtdEntity {
    notationName: Object;
    publicId: Object;
    systemId: Object;
    prefix: Object;
    nodeValue: Object;
    firstChild: IXmlNode;
    lastChild: IXmlNode;
    localName: Object;
    namespaceUri: Object;
    nextSibling: IXmlNode;
    nodeName: string;
    nodeType: NodeType;
    attributes: XmlNamedNodeMap;
    ownerDocument: XmlDocument;
    childNodes: XmlNodeList;
    parentNode: IXmlNode;
    previousSibling: IXmlNode;
    innerText: string;
    constructor();

    hasChildNodes(): boolean;

    insertBefore(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    replaceChild(newChild: IXmlNode, referenceChild: IXmlNode): IXmlNode;

    removeChild(childNode: IXmlNode): IXmlNode;

    appendChild(newChild: IXmlNode): IXmlNode;

    cloneNode(deep: boolean): IXmlNode;

    normalize(): void;

    selectSingleNode(xpath: string): IXmlNode;

    selectNodes(xpath: string): XmlNodeList;

    selectSingleNodeNS(xpath: string, namespaces: Object): IXmlNode;

    selectNodesNS(xpath: string, namespaces: Object): XmlNodeList;

    getXml(): string;

  }

