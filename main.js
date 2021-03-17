const { resolve } = require("path");
const { app, Menu, Tray, } = require("electron");
const spawn = require("cross-spawn");
const config = require(resolve(__dirname, 'configs', 'config.js'));

if (app.dock) {
	app.dock.hide();
}

let tray = null;

let menuTemplate = config;

async function makeItems() {
	menuTemplate.push(
		{
			type: "separator",
		},
		{
			type: "normal",
			label: "Fechar Beaast Menu",
			role: "quit",
			enabled: true,
		}
	);
}

app.on("ready", async () => {
	tray = new Tray(resolve(__dirname, "assets", "menu.png"));

	await makeItems();
	const contextMenu = Menu.buildFromTemplate(menuTemplate);
	tray.setContextMenu(contextMenu);

	tray.on('click', () => {
		tray.popUpContextMenu();
	});
});