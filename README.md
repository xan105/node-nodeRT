About
=====

NodeRT but precompiled (use WinRT API directly from node).

Usage is similar to the original NodeRT package(s).
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

An internet connection is required to download the prebuilt binaries. They are [hosted on github]().

By default every NodeRT bindings will be installed.
You can choose to only keep the NodeRT bindings you _do_ need by adding a list of modules in your package.json file under the "_nodert/modules" path (similar to [nodert-npm](https://github.com/NodeRT/nodert-npm)).
For example, having the following section in your package.json will result with the installation of the "windows.devices.geolocation" and "windows.devices.sensors" modules:

```json
"_nodert" : {
  "modules" : [
	  "windows.devices.geolocation",
	  "windows.device.sensors"
	]
},
```

The latest official NodeRT scope is used as a base ([NodeRT-win10-rs4]()) and some missing new namespace might be pulled from unsupported community build such as [NodeRT-win10-20h1]().
List of namespaces can be found [here]() or in `./node_modules/@xan105/nodert/packages/`.

### ABI

NodeRT package are not using [n-api](https://nodejs.org/api/n-api.html#node-api) they must be compiled for every ABI.
As of this writing, the following ABI are provided:

+ Node (x64): 
  - 83 (v14)
  - 93 (v16)
  - 108 (v18)
+ Electron (x64): 
  - 107 (v20)
  - 109 (v21)

### Electron

Switching to electron ABI instead of Node can be done by adding the `--electron` flag or the env. variable `npm_config_runtime` set to `electron`.
Electron should already be installed in your project as electron's `packages.json` file will be read to determine electron's ABI.

⚠️ NodeRT should be loaded in the main process [NodeRT#158](https://github.com/NodeRT/NodeRT/issues/158)

API
===

⚠️  This module is only available as an ECMAScript module (ESM).


**esm import explanation + example**

⚠️ Please be warmed that ... undefined / compilation failed

Please see the NodeRT and [Microsoft]() docs for more details.