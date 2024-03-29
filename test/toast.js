import * as winRT from "../lib/index.js";

const template = `<toast activationType="protocol" scenario="default" launch="" duration="Short"><header id="id1" title="group" arguments="" /><visual><binding template="ToastGeneric"><image placement="appLogoOverride" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/480/winner.jpg" hint-crop="circle"/><image placement="hero" src="D:\\Documents\\GitHub\\xan105\\node-powertoast\\screenshot\\example.png"/><text><![CDATA[Dummy]]></text><text><![CDATA[Hello World]]></text><text placement="attribution"><![CDATA[Achievement]]></text><image src="" /><progress title="up" value="0.00" valueStringOverride="" status="down"/></binding></visual><actions><action content="1" placement="" imageUri="" arguments="bingmaps:?q=sushi" activationType="protocol"/><action content="2" placement="contextMenu" imageUri="" arguments="bingmaps:?q=sushi" activationType="protocol"/><action content="3" placement="" imageUri="" arguments="bingmaps:?q=sushi" activationType="protocol"/><action content="4" placement="" imageUri="" arguments="bingmaps:?q=sushi" activationType="protocol"/><action content="5" placement="" imageUri="" arguments="bingmaps:?q=sushi" activationType="protocol"/></actions><audio silent="false" src="ms-winsoundevent:Notification.Achievement"/></toast>`;

const xml = new winRT.data.xml.dom.XmlDocument();
xml.loadXml(template);
const toast = new winRT.ui.notifications.ToastNotification(xml);
const toaster = winRT.ui.notifications.ToastNotificationManager.createToastNotifier("Microsoft.WindowsStore_8wekyb3d8bbwe!App");
toaster.show(toast);

setTimeout(() => {}, 100); //Keep alive