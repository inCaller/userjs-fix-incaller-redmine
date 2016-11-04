// ==UserScript==
// @name        Fix inCaller redmine
// @description Improve inCaller's Redmine usability
// @author      Alex Efros <powerman-asdf@ya.ru>
// @run-at      document-idle
// @include     https://redmine.incaller.org/*
// @grant       none
// @version     1.0
// @downloadURL https://github.com/inCaller/userjs-fix-incaller-redmine/raw/master/fix-incaller-redmine.user.js
// @updateURL   https://github.com/inCaller/userjs-fix-incaller-redmine/raw/master/fix-incaller-redmine.user.js
// @namespace   https://incaller.org/
// ==/UserScript==

(function($){
	'use strict';

	// Prevent jquery.elastic plugin (used by redmine mentions plugin)
	// from changing textarea height on blur.
	$('textarea').unbind('blur');

})($);
