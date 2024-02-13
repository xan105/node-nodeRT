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

NodeRT scope used as a base is [nodert-win11-22h2](https://www.npmjs.com/search?q=@nodert-win11-22h2).<br />
`XAML` and `*.preview` WinRT namespaces are removed.<br />
Some namespaces have been kept back to `win10-rs4` due to compilation failure (regression).

List of namespaces can be found [here](https://github.com/xan105/node-nodeRT/tree/main/packages) (GitHub).

### ABI

NodeRT package are not using [n-api](https://nodejs.org/api/n-api.html#node-api) they must be compiled for every ABI.<br />
Unless exception, expect prebuilds for current and previous Node.js LTS releases (x64).<br />
⚠️ Due to the fast Electron release cycle, do not expect this package to always keep up with the latest.

List of provided ABI can be found [here](https://github.com/xan105/node-nodeRT/blob/main/integrity.json) (GitHub) or in the corresponding GitHub release.

### Electron

Switching to Electron ABI instead of Node can be done by adding the `--electron` flag or the env. variable `npm_config_runtime` set to `electron`.<br />

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

Electron's `packages.json` file will be read to determine Electron's ABI.

⚠️ NodeRT should be loaded in the main process [NodeRT#158](https://github.com/NodeRT/NodeRT/issues/158)

API
===

> Please see the NodeRT and [Microsoft](https://learn.microsoft.com/en-us/uwp/api/) docs for more details.

⚠️  This module is only available as an ECMAScript module (ESM).

WinRT namespaces are also exported under their respective namespace:

```js
import { ui } from "@xan105/nodert" 
const toast = new ui.notifications.ToastNotification(xml);

import { notifications } from "@xan105/nodert/ui" 
const toast = new notifications.ToastNotification(xml);
```

⚠️ Please be warned that in case of missing bindings the corresponding exports will be **undefined**.<br />
They are a couple of them due to compilation failure.

🐞 NB: Provided types are those from NodeRT packages. I know they have some errors but I haven't the courage to fix them up by hand.

Build Env
=========

🆚 Visual Studio 2022:

  + Visual Studio Installer:
    - C/C++ Desktop
    - C++ ATL for latest v143
    - C++ MFC for latest v143
    - C++/CLI support for v143 build tools
    - MSVC v140 - VS 2015 C++ build tools (v14.00) //VS2015 build tools
    - Windows 11 SDK 22h2 (10.0.22621.0)
  
  + Manual:
    - [Windows 10 SDK rs4 (10.0.17134.0)](https://go.microsoft.com/fwlink/p/?linkid=870807)

    
⬢ Node.js native addon:

  - Node.js v20.11.0
  - npm v10.2.4
  - node-gyp v10.0.1
  - Python3 v3.11.3
