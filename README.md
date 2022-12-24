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
npm i @xan105/nodert
```

An internet connection is required to download the prebuilt binaries. They are [hosted on github](https://github.com/xan105/node-nodeRT/releases).

By default every NodeRT bindings will be installed.<br />
Similar to [nodert-npm](https://github.com/NodeRT/nodert-npm/) you can choose to only keep the NodeRT bindings you _do_ need by: 

- passing a comma separated list of modules as argument

```
npm i @xan105/nodert --modules="windows.ui.notifications, windows.data.xml.dom"
```

- or by adding a list of modules in your package.json file under the `_nodert/modules` path

For example, having the following section in your package.json will result with the installation of the "windows.devices.geolocation" and "windows.devices.sensors" modules:

```json
"_nodert" : {
  "modules" : [
    "windows.devices.geolocation",
    "windows.device.sensors"
  ]
},
```

The latest official NodeRT scope is used as a base ([nodert-win10-rs4](https://www.npmjs.com/search?q=@nodert-win10-rs4)).<br /> 
List of namespaces can be found [here](https://github.com/xan105/node-nodeRT/tree/main/packages).

### ABI

NodeRT package are not using [n-api](https://nodejs.org/api/n-api.html#node-api) they must be compiled for every ABI.<br />
List of provided ABI can be found [here](https://github.com/xan105/node-nodeRT/blob/main/integrity.json)

### Electron

Switching to electron ABI instead of Node can be done by adding the `--electron` flag or the env. variable `npm_config_runtime` set to `electron`.<br />

Alternatively in your package.json file under the `_nodert` path:

```json
"_nodert" : {
  "runtime": "electron",
  "modules" : [
    "windows.devices.geolocation",
    "windows.device.sensors"
  ]
},
```

Electron should already be installed in your project as electron's `packages.json` file will be read to determine electron's ABI.

⚠️ NodeRT should be loaded in the main process [NodeRT#158](https://github.com/NodeRT/NodeRT/issues/158)

API
===

> Please see the NodeRT and [Microsoft](https://learn.microsoft.com/en-us/uwp/api/) docs for more details.

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
