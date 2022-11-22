About
=====

NodeRT but precompiled (use WinRT API directly from node).

Usage is similar to the original NodeRT package(s).<br />
For more details on NodeRT, please kindly see the corresponding NodeRT package.

📦 Scoped `@xan105` packages are for my own personal use but feel free to use them.

Example
=======

Dummy toast notification

```js

import * as winRT from "@xan105/nodert";

const xml = new winRT.data.xml.dom.XmlDocument();
xml.loadXml(xmlString);

const toast = new winRT.ui.notifications.ToastNotification(xml);
const toaster = winRT.ui.notifications.ToastNotificationManager.createToastNotifier(appID);
toaster.show(toast);

setTimeout(() => {}, 100); //Keep alive
```

💡 Interested in toast notification ? check out [powertoast](https://www.npmjs.com/package/powertoast).

Install
=======

```
npm i  @xan105/nodert
```

An internet connection is required to download the prebuilt binaries. They are [hosted on github](https://github.com/xan105/node-nodeRT/releases).

By default every NodeRT bindings will be installed.<br />
You can choose to only keep the NodeRT bindings you _do_ need by adding a list of modules in your package.json file under the "_nodert/modules" path (similar to [nodert-npm](https://github.com/NodeRT/nodert-npm)).<br />
For example, having the following section in your package.json will result with the installation of the "windows.devices.geolocation" and "windows.devices.sensors" modules:

```json
"_nodert" : {
  "modules" : [
	  "windows.devices.geolocation",
	  "windows.device.sensors"
	]
},
```

The latest official NodeRT scope is used as a base ([NodeRT-win10-rs4](https://www.npmjs.com/search?q=NodeRT-win10-rs4)) and some missing new namespace might be pulled from unsupported community build such as [NodeRT-win10-20h1](https://www.npmjs.com/search?q=NodeRT-win10-20h1).<br />
List of namespaces can be found [here](https://github.com/xan105/node-nodeRT/tree/main/packages).

### ABI

NodeRT package are not using [n-api](https://nodejs.org/api/n-api.html#node-api) they must be compiled for every ABI.<br />
As of this writing, the following ABI are provided:

+ Node (x64): 
  - 83 (v14)
  - 93 (v16)
  - 108 (v18)
+ Electron (x64): 
  - 107 (v20)
  - 109 (v21)

### Electron

Switching to electron ABI instead of Node can be done by adding the `--electron` flag or the env. variable `npm_config_runtime` set to `electron`.<br />
Electron should already be installed in your project as electron's `packages.json` file will be read to determine electron's ABI.

⚠️ NodeRT should be loaded in the main process [NodeRT#158](https://github.com/NodeRT/NodeRT/issues/158)

API
===

> Please see the NodeRT and [Microsoft]() docs for more details.

⚠️  This module is only available as an ECMAScript module (ESM).

WinRT namespaces are also under their respective namespace:

```js
import { ui } from "@xan105/nodert" 
const toast = new ui.notifications.ToastNotification(xml);

import { notifications } from "@xan105/nodert/ui" 
const toast = new notifications.ToastNotification(xml);
```

⚠️ Please be warned that in case of missing bindings the corresponding exports will be **undefined**.<br />
They are a couple of them due to compilation failure.
