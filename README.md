Chartbuilder Electron
======================

> A desktop version of Quartz's [Chartbuilder app](https://github.com/quartz/chartbuilder).

## Download

Download the latest on the [Releases](https://github.com/Quartz/Chartbuilder) page. If you're on OS X, select the `Darwin` release. Because Chartbuilder isn't on npm, it's currently pegged to the [latest commit](package.json#L31) so we can keep track of what version this was built with.

## Why

In thinking about newsroom adoption, sometimes simply having something in the dock is so much easier than navigating to a (possibly ugly internal) URL. The dock is the new bookmark.

![](assets/chartbuilder-electron.gif)

## Things to do

See the [issue tracker](https://github.com/mhkeller/chartbuilder-electron/issues) for more detail. Help welcome!

* Set up auto-updating with [electron-gh-releases](https://github.com/jenslind/electron-gh-releases) and command-line releases with [publish-release](https://github.com/remixz/publish-release).
* Figure out a way to inject the necessary menu JavaScript into the Chartbuilder JS environment per [docs](https://github.com/atom/electron/blob/master/docs/api/menu.md) without altering that repo.
* Set default download location to something other than `~/Library/Application Support/Chartbuilder/Downloads/`.

## Developing

### To install everything

````shell
npm run init
````

### To run the app locally

````shell
npm start
````

### To build out the binaries

````shell
npm run build
````

Builds the app for OS X, Linux, and Windows, using [electron-packager](https://github.com/maxogden/electron-packager).


## License

MIT © [mhkeller](http://github.com/mhkeller)
