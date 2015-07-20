#!/usr/bin/env node

var fs = require('fs')
var cheerio = require('cheerio')

// Set paths
var index_path = './node_modules/chartbuilder/build/index.html',
		menu_path = './menus.html'

// Read our menu html and our index html
var menus = fs.readFileSync(menu_path, 'utf-8'),
    index = fs.readFileSync(index_path, 'utf-8');

// Read `index.html` in
var $ = cheerio.load(index)

// Add menu scripts
var $body = $('body'),
    has_menus = $body.find('script#electron-menus').length > 0;

if (!has_menus) {
	$body.append(menus)
	// Rewrite `index.html`
	fs.writeFileSync(index_path, $.html())
}
