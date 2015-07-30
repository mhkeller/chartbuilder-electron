'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

app.setDataPath(app.getHomeDir())

function createMainWindow () {
	const win = new BrowserWindow({
		width: 1350,
		height: 850,
		resizable: true
	});

	win.loadUrl(`file://${__dirname}/node_modules/chartbuilder/build/index.html`);
	win.on('closed', onClosed);

	return win;
}

function onClosed() {
	// deref the window
	// for multiple windows store them in an array
	mainWindow = null;
}

// prevent window being GC'd
let mainWindow;

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', function () {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', function () {
	mainWindow = createMainWindow();
});
