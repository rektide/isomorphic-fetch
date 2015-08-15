"use strict";

var realFetch = require('node-fetch');
exports.Fetch = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

exports.polyfill = function(){
	if (!global.fetch) {
		global.fetch = module.exports;
	}
}
