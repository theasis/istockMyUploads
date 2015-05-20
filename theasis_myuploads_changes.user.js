// ==UserScript==
// @name           Modify the iStock my_uploads family of pages, the xnet page, and add the latest download to the toolbar
// @namespace      theasis
// @match          http://*.istockphoto.com/*
// @match          https://*.istockphoto.com/*
// @version	   2.0.12
// iStockPhoto browser script (c) Martin McCarthy 2013-2015
// ==/UserScript==
// v1.0.1
// First release
// Martin McCarthy 10 Mar 2013
// v1.0.2
// Add Age Analysis graph option
// Martin McCarthy 14 Mar 2013
// v1.0.3
// Add DL Analysis graph option
// Martin McCarthy 15 Mar 2017
// v1.0.4, v1.0.5, v1.0.6, v1.0.7
// Latest sale in the toolbar
// Martin McCarthy 17 Mar 2013
// v1.0.9
// Link to latest downloads from the last sale text in the toolbar
// Martin McCarthy 18 Mar 2013
// v1.0.10, v1.0.11, v1.0.12
// Show the last 10 sales in the toolbar loupe
// Position the toolbar loupe better
// tidy up the 9 extra thumbs
// Martin McCarthy 19 Mar 2013
// v1.0.13
// Fix the Bouncing-Last-DLs bug
// Martin McCarthy 19 Mar 2013
// v1.0.14
// Instant load of the (unchecked) last sale
// Martin McCarthy 22 Mar 2013
// v1.0.15
// Show the latest EL in the toolbar
// Martin McCarthy 30 Mar 2013
// v1.0.16
// Check for inspection-lock
// Martin McCarthy 31 Mar 2013
// v1.0.17
// Option to not show latest EL in the toolbar
// Martin McCarthy 1 Apr 2013
// v1.0.18
// Collection Analysis graph
// Recognise "Value collection" and "Photo+ collection" files
// Mark Value collection files with a grey photo canister
// Load additional pages of regular sales details
// Martin McCarthy 2 Apr 2013
// v1.0.19
// Daily totals
// Martin McCarthy 3 Apr 2013
// v1.0.20
// Make unfinished uploads on the xnet page more visible and more easily cancellable
// Martin McCarthy 9 Apr 2013
// v1.0.21
// Handling of unfinished uploads can be turned off
// Make unfinished uploads even more easily cancellable
// Martin McCarthy 10 Apr 2013
// v1.0.22
// Fix a cacheing problem which sometimes prevented the mouseenter/leave handlers from being attached to the toolbar latest sale thumb
// Calculate RCs for the latest sale
// Martin McCarthy 11 Apr 2013
// v1.0.23
// Fix a bug with RCs for the latest sale where XSmall credits would always be reported for a Small sale
// Calculate RCs for all recent sales
// Martin McCarthy 12 Apr 2013
// v1.1.0
// Fix a bug with calculating RCs for video
// Resize thumbs and show loupes on the Download History page
// Check for new sales at regular intervals and update the toolbar
// Report in the toolbar if you've been logged out since you loaded the page
// Don't resize audio thumbs, because that's silly
// Martin McCarthy 18 Apr 2013
// v1.1.1
// Option to NOT report when you're logged out
// Martin McCarthy 18 Apr 2013
// v1.1.2
// Attempt to fix spurious Logged Out messages
// Martin McCarthy 19 Apr 2013
// v1.1.3
// Another attempt to fix spurious Logged Out messages
// Martin McCarthy 22 Apr 2013
// v1.1.4
// Show the original balance (from the last page refresh) when you mouse-over the balance in the toolbar
// Show any increments when you mouse-over the balance in the toolbar
// Martin McCarthy 28 Apr 2013
// v1.1.5
// Sort options on the button links to the various my_uploads pages
// Martin McCarthy 29 May 2013
// v1.1.6
// Added ApprovalDate sort order for DL page
// Martin McCarthy 4 Jun 2013
// v1.1.7 & v1.1.8
// Added a debugging mode
// Martin McCarthy 10 Jun 2013
// v1.1.9
// Collection changes
// Martin McCarthy 14 Jun 2013
// v1.1.10
// Debug Collection column
// Martin McCarthy 14 Jun 2013
// v1.1.11
// Unfinished uploads shown on My Uploads
// Martin McCarthy 15 Jun 2013
// v1.1.12
// Get royalty rates from the stats tab every 12 hours or so
// Display the price paid per credit when mouseover the latest sale details (if showing RCs)
// Pull the current balance from a relatively cheap-to-load page (sitemap). If the user had
// "don't display balance" set then it was never going to work anyway!
// Martin McCarthy 18 Jun 2013
// v1.1.13
// Handle balances that go over 999.99 (and so contain a comma)
// v1.1.14
// Martin McCarthy 13 Jul 2013
// Tell a webworker where to go if iS returns a bad status for the Stats tab
// Oh Firefox, how I hate you!
// v1.1.15
// Martin McCarthy 25 Jul 2013
// Tidy up the analysis graphs so that the labels don't split over multiple lines
// More ways to kill a webworker...murderous, murderous firefox!
// Watch for changes to views
// v1.1.16
// Martin McCarthy 10 Aug 2013
// don't install in the WYSIWYG iframe on FF23+
// v1.1.17
// Martin McCarthy 14 Aug 2013
// force base 10 on parseInt
// v1.1.18
// Martin McCarthy 22 Aug 2013
// changes to the standard iStock loupe style are affecting the ten-latest-sales loupe. Force the old style.
// v1.1.19
// Martin McCarthy 24 Oct 2013
// replace thumbs that are taller than 110px with the /3/ thumbnail
// v1.1.20
// Martin McCarthy 25 Oct 2013
// button to show the 4 top keywords for each file
// v1.1.21
// Martin McCarthy 6 Nov 2013
// style changes for the collection indicator
// option to show total royalties for an image 
// emphasise the dates for files that sold today
// v1.1.22
// Martin McCarthy 11 Nov 2013
// fix for query parameters leaking into the URLs of links for the DL/Sub/GI/Port/Etc buttons
// v1.1.23
// Martin McCarthy 13 Nov 2013
// Only show both iS and Total royalty if they're different
// v1.1.24
// Martin McCarthy 15 Nov 2013
// Style tweaks for PP and GI
// v1.1.25
// Martin McCarthy 18 Nov 2013
// Yet another attempt to fix the latest-download loupe and its occasional inaction
// Minor tweak for the latest-download loupe vertical position
// Fix the latest-download thumbnail sizing
// Resurrect the LOGGED OUT warning (if enabled)
// v1.1.26
// Martin McCarthy 19 Nov 2013
// Really fix the latest-download loupe and its occasional inaction. Really for real this time. Really! Maybe.
// v1.1.27
// Martin McCarthy 20 Nov 2013
// Better calculation of latest-download thumbnail
// v1.1.28
// Martin McCarthy 25 Nov 2013
// The LOGGED OUT warning is now a link to the sign-in page with an encoded return URL
// v1.1.29
// Martin McCarthy 10 Jan 2014
// Calculate DLs/mo based on the most recent 20 sales
// Remove the link to the now-removed lightbox_info.php
// v1.1.30
// Martin McCarthy 13 Jan 2014
// Fix some double-counting on the first page of a files sales (when there's more than one page) for the DLs/mo calculation
// v1.1.31
// Martin McCarthy 14 Jan 2014
// Tweak the loupe to look a bit more like the search results loupe
// Calculate $/mo when calculating DLs/mo
// v1.1.32
// Martin McCarthy 14 Jan 2014
// Fix the forum logo icon bug
// v1.1.33
// Martin McCarthy 15 Jan 2014
// Calculate absolute DLs and $$ over the last 12/6/3 months when calculating the DLs/mo
// v1.1.34
// Martin McCarthy 17 Jan 2014
// Fix for the vanishing yellow highlight of new sale text
// v1.1.35
// Martin McCarthy 24 Jan 2014
// Remove the Logo icon fix - no longer needed as iStock have fixed their end
// Show number of DLs for recent sales in the latest-sale loupe
// v1.1.36
// Martin McCarthy 4 Feb 2014
// hack to get the credit price of XS sales
// v1.1.37
// Martin McCarthy 27 Mar 2014
// Resurrect the tooltip that says how much the buyer paid per credit for your latest sale
// v1.1.38&.39
// Martin McCarthy 28 Mar 2014
// Catch a datastore upgrade error
// v1.1.40
// Martin McCarthy 10 Mar 2014
// Fix for changes to the table holding the credit price of files
// v1.1.41
// Martin McCarthy 29 May 2014
// Fixes for changes to the istock pages
// v1.1.42
// Martin McCarthy 31 May 2014
// Fixes for check of Locked-for-inspection
// Show the loading gif for files in the queue so it's clear when they've been checked
// v1.1.43
// Martin McCarthy 4 Jun 2014
// Indicate if files in the inspection queue have been vetta-nominated
// v1.1.44
// Martin McCarthy 20 Jun 2014
// Fix for finding the most recent ELs when loading recent DLs
// v1.1.45
// Martin McCarthy 16 Aug 2014
// Option to hide the tool-tip when mousing over thumbnails
// v1.1.46
// Martin McCarthy 13 Sep 2014
// Handle the change to istock's credit pricing
// Recognise Essentials
// v1.1.47
// Martin McCarthy 15 Sep 2014
// Redeemed fifths of a Credit!
// v1.1.48
// Martin McCarthy 25 Oct 2014
// v1.1.49
// Martin McCarthy 25 Oct 2014
// Option to not show the sale size in the toolbar
// v1.1.50
// Martin McCarthy 14 Nov 2014
// Show my_uploads details in a grid for recent subs
// v1.1.51
// Martin McCarthy 29 Nov 2014
// Sale details for subs
// v1.1.52
// Martin McCarthy 13 Jan 2015
// PP Fixes
// v2.0.0-v2.0.10
// Martin McCarthy 9 Apr 2015 - 13 May 2015
// New ADP
// v2.0.11
// Martin McCarthy 16 May 2015
// Possible fix for non-Exclusive PP page
// v2.0.12
// Martin McCarthy 20 May 2015
// Royalty on the new ADP

// TZ nonsense
(function () {
  "use strict";
  var root = this;
  var timezoneJS;
  if (typeof exports !== 'undefined') {
    timezoneJS = exports;
  } else {
    timezoneJS = root.timezoneJS = {};
  }

  timezoneJS.VERSION = '0.4.4';
  var DAYS = timezoneJS.Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    , MONTHS = timezoneJS.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    , SHORT_MONTHS = {}
    , SHORT_DAYS = {}
    , EXACT_DATE_TIME = {}
    , TZ_REGEXP = new RegExp('^[a-zA-Z]+/');
  for (var i = 0; i < MONTHS.length; i++) {
    SHORT_MONTHS[MONTHS[i].substr(0, 3)] = i;
  }
  for (i = 0; i < DAYS.length; i++) {
    SHORT_DAYS[DAYS[i].substr(0, 3)] = i;
  }
  var _arrIndexOf = Array.prototype.indexOf || function (el) {
    if (this === null) {
      throw new TypeError();
    }
    var t = Object(this);
    var len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }
    var n = 0;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) { // shortcut for verifying if it's NaN
        n = 0;
      } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }
    if (n >= len) {
      return -1;
    }
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
    for (; k < len; k++) {
      if (k in t && t[k] === el) {
        return k;
      }
    }
    return -1;
  };
  var _fixWidth = function (number, digits) {
    if (typeof number !== "number") { throw "not a number: " + number; }
    var s = number.toString();
    if (number.length > digits) {
      return number.substr(number.length - digits, number.length);
    }
    while (s.length < digits) {
      s = '0' + s;
    }
    return s;
  };
  timezoneJS.Date = function () {
    var args = Array.prototype.slice.apply(arguments)
    , dt = null
    , tz = null
    , arr = [];
    if (Object.prototype.toString.call(args[0]) === '[object Array]') {
      args = args[0];
    }
    if (typeof args[args.length - 1] === 'string' && TZ_REGEXP.test(args[args.length - 1])) {
      tz = args.pop();
    }
    switch (args.length) {
      case 0:
        dt = new Date();
        break;
      case 1:
        dt = new Date(args[0]);
        break;
      default:
        for (var i = 0; i < 7; i++) {
          arr[i] = args[i] || 0;
        }
        dt = new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);
        break;
    }

    this._useCache = false;
    this._tzInfo = {};
    this._day = 0;
    this.year = 0;
    this.month = 0;
    this.date = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.timezone = tz || null;
    if (arr.length) {
       this.setFromDateObjProxy(dt);
    } else {
       this.setFromTimeProxy(dt.getTime(), tz);
    }
  };
  timezoneJS.Date.prototype = {
    getDate: function () { return this.date; },
    getDay: function () { return this._day; },
    getFullYear: function () { return this.year; },
    getMonth: function () { return this.month; },
    getYear: function () { return this.year - 1900; },
    getHours: function () { return this.hours; },
    getMilliseconds: function () { return this.milliseconds; },
    getMinutes: function () { return this.minutes; },
    getSeconds: function () { return this.seconds; },
    getUTCDate: function () { return this.getUTCDateProxy().getUTCDate(); },
    getUTCDay: function () { return this.getUTCDateProxy().getUTCDay(); },
    getUTCFullYear: function () { return this.getUTCDateProxy().getUTCFullYear(); },
    getUTCHours: function () { return this.getUTCDateProxy().getUTCHours(); },
    getUTCMilliseconds: function () { return this.getUTCDateProxy().getUTCMilliseconds(); },
    getUTCMinutes: function () { return this.getUTCDateProxy().getUTCMinutes(); },
    getUTCMonth: function () { return this.getUTCDateProxy().getUTCMonth(); },
    getUTCSeconds: function () { return this.getUTCDateProxy().getUTCSeconds(); },
    // Time adjusted to user-specified timezone
    getTime: function () {
      return this._timeProxy + (this.getTimezoneOffset() * 60 * 1000);
    },
    getTimezone: function () { return this.timezone; },
    getTimezoneOffset: function () { return this.getTimezoneInfo().tzOffset; },
    getTimezoneAbbreviation: function () { return this.getTimezoneInfo().tzAbbr; },
    getTimezoneInfo: function () {
      if (this._useCache) return this._tzInfo;
      var res;
      // If timezone is specified, get the correct timezone info based on the Date given
      if (this.timezone) {
        res = this.timezone === 'Etc/UTC' || this.timezone === 'Etc/GMT'
          ? { tzOffset: 0, tzAbbr: 'UTC' }
          : timezoneJS.timezone.getTzInfo(this._timeProxy, this.timezone);
      }
      // If no timezone was specified, use the local browser offset
      else {
        res = { tzOffset: this.getLocalOffset(), tzAbbr: null };
      }
      this._tzInfo = res;
      this._useCache = true;
      return res;
    },
    getUTCDateProxy: function () {
      var dt = new Date(this._timeProxy);
      dt.setUTCMinutes(dt.getUTCMinutes() + this.getTimezoneOffset());
      return dt;
    },
    setDate: function (date) {
      this.setAttribute('date', date);
      return this.getTime();
    },
    setFullYear: function (year, month, date) {
      if (date !== undefined) { this.setAttribute('date', 1); }
      this.setAttribute('year', year);
      if (month !== undefined) { this.setAttribute('month', month); }
      if (date !== undefined) { this.setAttribute('date', date); }
      return this.getTime();
    },
    setMonth: function (month, date) {
      this.setAttribute('month', month);
      if (date !== undefined) { this.setAttribute('date', date); }
      return this.getTime();
    },
    setYear: function (year) {
      year = Number(year);
      if (0 <= year && year <= 99) { year += 1900; }
      this.setUTCAttribute('year', year);
      return this.getTime();
    },
    setHours: function (hours, minutes, seconds, milliseconds) {
      this.setAttribute('hours', hours);
      if (minutes !== undefined) { this.setAttribute('minutes', minutes); }
      if (seconds !== undefined) { this.setAttribute('seconds', seconds); }
      if (milliseconds !== undefined) { this.setAttribute('milliseconds', milliseconds); }
      return this.getTime();
    },
    setMinutes: function (minutes, seconds, milliseconds) {
      this.setAttribute('minutes', minutes);
      if (seconds !== undefined) { this.setAttribute('seconds', seconds); }
      if (milliseconds !== undefined) { this.setAttribute('milliseconds', milliseconds); }
      return this.getTime();
    },
    setSeconds: function (seconds, milliseconds) {
      this.setAttribute('seconds', seconds);
      if (milliseconds !== undefined) { this.setAttribute('milliseconds', milliseconds); }
      return this.getTime();
    },
    setMilliseconds: function (milliseconds) {
      this.setAttribute('milliseconds', milliseconds);
      return this.getTime();
    },
    setTime: function (n) {
      if (isNaN(n)) { throw new Error('Units must be a number.'); }
      this.setFromTimeProxy(n, this.timezone);
      return this.getTime();
    },
    setUTCFullYear: function (year, month, date) {
      if (date !== undefined) { this.setUTCAttribute('date', 1); }
      this.setUTCAttribute('year', year);
      if (month !== undefined) { this.setUTCAttribute('month', month); }
      if (date !== undefined) { this.setUTCAttribute('date', date); }
      return this.getTime();
    },
    setUTCMonth: function (month, date) {
      this.setUTCAttribute('month', month);
      if (date !== undefined) { this.setUTCAttribute('date', date); }
      return this.getTime();
    },
    setUTCDate: function (date) {
      this.setUTCAttribute('date', date);
      return this.getTime();
    },
    setUTCHours: function (hours, minutes, seconds, milliseconds) {
      this.setUTCAttribute('hours', hours);
      if (minutes !== undefined) { this.setUTCAttribute('minutes', minutes); }
      if (seconds !== undefined) { this.setUTCAttribute('seconds', seconds); }
      if (milliseconds !== undefined) { this.setUTCAttribute('milliseconds', milliseconds); }
      return this.getTime();
    },
    setUTCMinutes: function (minutes, seconds, milliseconds) {
      this.setUTCAttribute('minutes', minutes);
      if (seconds !== undefined) { this.setUTCAttribute('seconds', seconds); }
      if (milliseconds !== undefined) { this.setUTCAttribute('milliseconds', milliseconds); }
      return this.getTime();
    },
    setUTCSeconds: function (seconds, milliseconds) {
      this.setUTCAttribute('seconds', seconds);
      if (milliseconds !== undefined) { this.setUTCAttribute('milliseconds', milliseconds); }
      return this.getTime();
    },
    setUTCMilliseconds: function (milliseconds) {
      this.setUTCAttribute('milliseconds', milliseconds);
      return this.getTime();
    },
    setFromDateObjProxy: function (dt) {
      this.year = dt.getFullYear();
      this.month = dt.getMonth();
      this.date = dt.getDate();
      this.hours = dt.getHours();
      this.minutes = dt.getMinutes();
      this.seconds = dt.getSeconds();
      this.milliseconds = dt.getMilliseconds();
      this._day = dt.getDay();
      this._dateProxy = dt;
      this._timeProxy = Date.UTC(this.year, this.month, this.date, this.hours, this.minutes, this.seconds, this.milliseconds);
      this._useCache = false;
    },
    setFromTimeProxy: function (utcMillis, tz) {
      var dt = new Date(utcMillis);
      var tzOffset;
      tzOffset = tz ? timezoneJS.timezone.getTzInfo(dt, tz).tzOffset : dt.getTimezoneOffset();
      dt.setTime(utcMillis + (dt.getTimezoneOffset() - tzOffset) * 60000);
      this.setFromDateObjProxy(dt);
    },
    setAttribute: function (unit, n) {
      if (isNaN(n)) { throw new Error('Units must be a number.'); }
      var dt = this._dateProxy;
      var meth = unit === 'year' ? 'FullYear' : unit.substr(0, 1).toUpperCase() + unit.substr(1);
      dt['set' + meth](n);
      this.setFromDateObjProxy(dt);
    },
    setUTCAttribute: function (unit, n) {
      if (isNaN(n)) { throw new Error('Units must be a number.'); }
      var meth = unit === 'year' ? 'FullYear' : unit.substr(0, 1).toUpperCase() + unit.substr(1);
      var dt = this.getUTCDateProxy();
      dt['setUTC' + meth](n);
      dt.setUTCMinutes(dt.getUTCMinutes() - this.getTimezoneOffset());
      this.setFromTimeProxy(dt.getTime() + this.getTimezoneOffset() * 60000, this.timezone);
    },
    setTimezone: function (tz) {
      var previousOffset = this.getTimezoneInfo().tzOffset;
      this.timezone = tz;
      this._useCache = false;
      // Set UTC minutes offsets by the delta of the two timezones
      this.setUTCMinutes(this.getUTCMinutes() - this.getTimezoneInfo().tzOffset + previousOffset);
    },
    removeTimezone: function () {
      this.timezone = null;
      this._useCache = false;
    },
    valueOf: function () { return this.getTime(); },
    clone: function () {
      return this.timezone ? new timezoneJS.Date(this.getTime(), this.timezone) : new timezoneJS.Date(this.getTime());
    },
    toGMTString: function () { return this.toString('EEE, dd MMM yyyy HH:mm:ss Z', 'Etc/GMT'); },
    toLocaleString: function () {},
    toLocaleDateString: function () {},
    toLocaleTimeString: function () {},
    toSource: function () {},
    toISOString: function () { return this.toString('yyyy-MM-ddTHH:mm:ss.SSS', 'Etc/UTC') + 'Z'; },
    toJSON: function () { return this.toISOString(); },
    // Allows different format following ISO8601 format:
    toString: function (format, tz) {
      // Default format is the same as toISOString
      if (!format) format = 'yyyy-MM-dd HH:mm:ss';
      var result = format;
      var tzInfo = tz ? timezoneJS.timezone.getTzInfo(this.getTime(), tz) : this.getTimezoneInfo();
      var _this = this;
      // If timezone is specified, get a clone of the current Date object and modify it
      if (tz) {
        _this = this.clone();
        _this.setTimezone(tz);
      }
      var hours = _this.getHours();
      return result
      // fix the same characters in Month names
      .replace(/a+/g, function () { return 'k'; })
      // `y`: year
      .replace(/y+/g, function (token) { return _fixWidth(_this.getFullYear(), token.length); })
      // `d`: date
      .replace(/d+/g, function (token) { return _fixWidth(_this.getDate(), token.length); })
      // `m`: minute
      .replace(/m+/g, function (token) { return _fixWidth(_this.getMinutes(), token.length); })
      // `s`: second
      .replace(/s+/g, function (token) { return _fixWidth(_this.getSeconds(), token.length); })
      // `S`: millisecond
      .replace(/S+/g, function (token) { return _fixWidth(_this.getMilliseconds(), token.length); })
      // `M`: month. Note: `MM` will be the numeric representation (e.g February is 02) but `MMM` will be text representation (e.g February is Feb)
      .replace(/M+/g, function (token) {
        var _month = _this.getMonth(),
        _len = token.length;
        if (_len > 3) {
          return timezoneJS.Months[_month];
        } else if (_len > 2) {
          return timezoneJS.Months[_month].substring(0, _len);
        }
        return _fixWidth(_month + 1, _len);
      })
      // `k`: AM/PM
      .replace(/k+/g, function () {
        if (hours >= 12) {
          if (hours > 12) {
            hours -= 12;
          }
          return 'PM';
        }
        return 'AM';
      })
      // `H`: hour
      .replace(/H+/g, function (token) { return _fixWidth(hours, token.length); })
      // 'h': 12 hour format
      .replace(/h+/g, function (token) { return _fixWidth( ((hours%12) === 0) ? 12 : (hours % 12), token.length); })
      // `E`: day
      .replace(/E+/g, function (token) { return DAYS[_this.getDay()].substring(0, token.length); })
      // `Z`: timezone abbreviation
      .replace(/Z+/gi, function () { return tzInfo.tzAbbr; });
    },
    toUTCString: function () { return this.toGMTString(); },
    civilToJulianDayNumber: function (y, m, d) {
      var a;
      // Adjust for zero-based JS-style array
      m++;
      if (m > 12) {
        a = parseInt(m/12, 10);
        m = m % 12;
        y += a;
      }
      if (m <= 2) {
        y -= 1;
        m += 12;
      }
      a = Math.floor(y / 100);
      var b = 2 - a + Math.floor(a / 4)
        , jDt = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + b - 1524;
      return jDt;
    },
    getLocalOffset: function () {
      return this._dateProxy.getTimezoneOffset();
    }
  };


  timezoneJS.timezone = new function () {
    var _this = this
      , regionMap = {'Etc':'etcetera','EST':'northamerica','MST':'northamerica','HST':'northamerica','EST5EDT':'northamerica','CST6CDT':'northamerica','MST7MDT':'northamerica','PST8PDT':'northamerica','America':'northamerica','Pacific':'australasia','Atlantic':'europe','Africa':'africa','Indian':'africa','Antarctica':'antarctica','Asia':'asia','Australia':'australasia','Europe':'europe','WET':'europe','CET':'europe','MET':'europe','EET':'europe'}
      , regionExceptions = {'Pacific/Honolulu':'northamerica','Atlantic/Bermuda':'northamerica','Atlantic/Cape_Verde':'africa','Atlantic/St_Helena':'africa','Indian/Kerguelen':'antarctica','Indian/Chagos':'asia','Indian/Maldives':'asia','Indian/Christmas':'australasia','Indian/Cocos':'australasia','America/Danmarkshavn':'europe','America/Scoresbysund':'europe','America/Godthab':'europe','America/Thule':'europe','Asia/Istanbul':'europe','Asia/Yekaterinburg':'europe','Asia/Omsk':'europe','Asia/Novosibirsk':'europe','Asia/Krasnoyarsk':'europe','Asia/Irkutsk':'europe','Asia/Yakutsk':'europe','Asia/Vladivostok':'europe','Asia/Sakhalin':'europe','Asia/Magadan':'europe','Asia/Kamchatka':'europe','Asia/Anadyr':'europe','Africa/Ceuta':'europe','America/Argentina/Buenos_Aires':'southamerica','America/Argentina/Cordoba':'southamerica','America/Argentina/Tucuman':'southamerica','America/Argentina/La_Rioja':'southamerica','America/Argentina/San_Juan':'southamerica','America/Argentina/Jujuy':'southamerica','America/Argentina/Catamarca':'southamerica','America/Argentina/Mendoza':'southamerica','America/Argentina/Rio_Gallegos':'southamerica','America/Argentina/Ushuaia':'southamerica','America/Aruba':'southamerica','America/La_Paz':'southamerica','America/Noronha':'southamerica','America/Belem':'southamerica','America/Fortaleza':'southamerica','America/Recife':'southamerica','America/Araguaina':'southamerica','America/Maceio':'southamerica','America/Bahia':'southamerica','America/Sao_Paulo':'southamerica','America/Campo_Grande':'southamerica','America/Cuiaba':'southamerica','America/Porto_Velho':'southamerica','America/Boa_Vista':'southamerica','America/Manaus':'southamerica','America/Eirunepe':'southamerica','America/Rio_Branco':'southamerica','America/Santiago':'southamerica','Pacific/Easter':'southamerica','America/Bogota':'southamerica','America/Curacao':'southamerica','America/Guayaquil':'southamerica','Pacific/Galapagos':'southamerica','Atlantic/Stanley':'southamerica','America/Cayenne':'southamerica','America/Guyana':'southamerica','America/Asuncion':'southamerica','America/Lima':'southamerica','Atlantic/South_Georgia':'southamerica','America/Paramaribo':'southamerica','America/Port_of_Spain':'southamerica','America/Montevideo':'southamerica','America/Caracas':'southamerica'};
    function invalidTZError(t) { throw new Error('Timezone "' + t + '" is either incorrect, or not loaded in the timezone registry.'); }
    function builtInLoadZoneFile(fileName, opts) {
        return _this.loadZoneJSONData();
      var url = _this.zoneFileBasePath + '/' + fileName;
      return !opts || !opts.async
      ? _this.parseZones(_this.transport({ url : url, async : false }))
      : _this.transport({
        async: true,
        url : url,
        success : function (str) {
          return _this.parseZones(str) && typeof opts.callback === 'function' && opts.callback();
        },
        error : function () {
          throw new Error('Error retrieving "' + url + '" zoneinfo files');
        }
      });
    }
    function getRegionForTimezone(tz) {
      var exc = regionExceptions[tz]
        , reg
        , ret;
      if (exc) return exc;
      reg = tz.split('/')[0];
      ret = regionMap[reg];
      // If there's nothing listed in the main regions for this TZ, check the 'backward' links
      if (ret) return ret;
      var link = _this.zones[tz];
      if (typeof link === 'string') {
        return getRegionForTimezone(link);
      }
      // Backward-compat file hasn't loaded yet, try looking in there
      if (!_this.loadedZones.backward) {
        // This is for obvious legacy zones (e.g., Iceland) that don't even have a prefix like "America/" that look like normal zones
        _this.loadZoneFile('backward');
        return getRegionForTimezone(tz);
      }
      invalidTZError(tz);
    }
    //str has format hh:mm, can be negative
    function parseTimeString(str) {
      var pat = /(\d+)(?::0*(\d*))?(?::0*(\d*))?([wsugz])?$/;
      var hms = str.match(pat);
      hms[1] = parseInt(hms[1], 10);
      hms[2] = hms[2] ? parseInt(hms[2], 10) : 0;
      hms[3] = hms[3] ? parseInt(hms[3], 10) : 0;
      return hms.slice(1, 5);
    }
    //z is something like `[ '-3:44:40', '-', 'LMT', '1911', 'May', '15', '' ]` or `[ '-5:00', '-', 'EST', '1974', 'Apr', '28', '2:00' ]`
    function processZone(z) {
      if (!z[3]) { return; }
      var yea = parseInt(z[3], 10)
        , mon = 11
        , dat = 31;
      //If month is there
      if (z[4]) {
        mon = SHORT_MONTHS[z[4].substr(0, 3)];
        dat = parseInt(z[5], 10) || 1;
      }
      var t = z[6] ? parseTimeString(z[6]) : [0, 0, 0];
      return [yea, mon, dat, t[0], t[1], t[2]];
    }
    function getZone(dt, tz) {
      var utcMillis = typeof dt === 'number' ? dt : new Date(dt).getTime();
      var t = tz;
      var zoneList = _this.zones[t];
      // Follow links to get to an actual zone
      while (typeof zoneList === "string") {
        t = zoneList;
        zoneList = _this.zones[t];
      }
      if (!zoneList) {
        // Backward-compat file hasn't loaded yet, try looking in there
        if (!_this.loadedZones.backward) {
          //This is for backward entries like "America/Fort_Wayne" that
          // getRegionForTimezone *thinks* it has a region file and zone
          // for (e.g., America => 'northamerica'), but in reality it's a
          // legacy zone we need the backward file for.
          _this.loadZoneFile('backward');
          return getZone(dt, tz);
        }
        invalidTZError(t);
      }
      if (zoneList.length === 0) {
        throw new Error('No Zone found for "' + tz + '" on ' + dt);
      }
      //Do backwards lookup since most use cases deal with newer dates.
      for (var i = zoneList.length - 1; i >= 0; i--) {
        var z = zoneList[i];
        if (z[3] && utcMillis > z[3]) break;
      }
      return zoneList[i+1];
    }
    function getBasicOffset(time) {
      var off = parseTimeString(time)
        , adj = time.charAt(0) === '-' ? -1 : 1;
      off = adj * (((off[0] * 60 + off[1]) * 60 + off[2]) * 1000);
      return off/60/1000;
    }
    function getRule(dt, zone, isUTC) {
      var date = typeof dt === 'number' ? new Date(dt) : dt;
      var ruleset = zone[1];
      var basicOffset = zone[0];
      var staticDstMatch = ruleset.match(/^([0-9]):([0-9][0-9])$/);
      if (staticDstMatch) {
        return [-1000000, 'max', '-', 'Jan', 1, [0, 0, 0], parseInt(staticDstMatch[1],10) * 60 + parseInt(staticDstMatch[2], 10), '-'];
      }
      var convertDateToUTC = function (date, type, rule) {
        var offset = 0;

        if (type === 'u' || type === 'g' || type === 'z') { // UTC
          offset = 0;
        } else if (type === 's') { // Standard Time
          offset = basicOffset;
        } else if (type === 'w' || !type) { // Wall Clock Time
          offset = getAdjustedOffset(basicOffset, rule);
        } else {
          throw new Error("unknown type " + type);
        }
        offset *= 60 * 1000; // to millis

        return new Date(date.getTime() + offset);
      };
      var convertRuleToExactDateAndTime = function (yearAndRule, prevRule) {
        var year = yearAndRule[0]
          , rule = yearAndRule[1];
        var hms = rule[5];
        var effectiveDate;

        if (!EXACT_DATE_TIME[year])
          EXACT_DATE_TIME[year] = {};
        if (EXACT_DATE_TIME[year][rule])
          effectiveDate = EXACT_DATE_TIME[year][rule];
        else {
          if (!isNaN(rule[4])) {
            effectiveDate = new Date(Date.UTC(year, SHORT_MONTHS[rule[3]], rule[4], hms[0], hms[1], hms[2], 0));
          }
          else {
            var targetDay
              , operator;
            if (rule[4].substr(0, 4) === "last") {
              effectiveDate = new Date(Date.UTC(year, SHORT_MONTHS[rule[3]] + 1, 1, hms[0] - 24, hms[1], hms[2], 0));
              targetDay = SHORT_DAYS[rule[4].substr(4, 3)];
              operator = "<=";
            }
            else {
              effectiveDate = new Date(Date.UTC(year, SHORT_MONTHS[rule[3]], rule[4].substr(5), hms[0], hms[1], hms[2], 0));
              targetDay = SHORT_DAYS[rule[4].substr(0, 3)];
              operator = rule[4].substr(3, 2);
            }
            var ourDay = effectiveDate.getUTCDay();
            if (operator === ">=") {
              effectiveDate.setUTCDate(effectiveDate.getUTCDate() + (targetDay - ourDay + ((targetDay < ourDay) ? 7 : 0)));
            }
            else {
              effectiveDate.setUTCDate(effectiveDate.getUTCDate() + (targetDay - ourDay - ((targetDay > ourDay) ? 7 : 0)));
            }
          }
          EXACT_DATE_TIME[year][rule] = effectiveDate;
        }
        if (prevRule) {
          effectiveDate = convertDateToUTC(effectiveDate, hms[3], prevRule);
        }
        return effectiveDate;
      };
      var findApplicableRules = function (year, ruleset) {
        var applicableRules = [];
        for (var i = 0; ruleset && i < ruleset.length; i++) {
          if (ruleset[i][0] <= year &&
              (
                ruleset[i][1] >= year ||
                  (ruleset[i][0] === year && ruleset[i][1] === "only") ||
                    ruleset[i][1] === "max"
          )
             ) {
               applicableRules.push([year, ruleset[i]]);
             }
        }
        return applicableRules;
      };

      var compareDates = function (a, b, prev) {
        var year, rule;
        if (a.constructor !== Date) {
          year = a[0];
          rule = a[1];
          a = (!prev && EXACT_DATE_TIME[year] && EXACT_DATE_TIME[year][rule])
            ? EXACT_DATE_TIME[year][rule]
            : convertRuleToExactDateAndTime(a, prev);
        } else if (prev) {
          a = convertDateToUTC(a, isUTC ? 'u' : 'w', prev);
        }
        if (b.constructor !== Date) {
          year = b[0];
          rule = b[1];
          b = (!prev && EXACT_DATE_TIME[year] && EXACT_DATE_TIME[year][rule]) ? EXACT_DATE_TIME[year][rule]
            : convertRuleToExactDateAndTime(b, prev);
        } else if (prev) {
          b = convertDateToUTC(b, isUTC ? 'u' : 'w', prev);
        }
        a = Number(a);
        b = Number(b);
        return a - b;
      };

      var year = date.getUTCFullYear();
      var applicableRules;

      applicableRules = findApplicableRules(year, _this.rules[ruleset]);
      applicableRules.push(date);
      applicableRules.sort(compareDates);
      if (_arrIndexOf.call(applicableRules, date) < 2) {
        applicableRules = applicableRules.concat(findApplicableRules(year-1, _this.rules[ruleset]));
        applicableRules.sort(compareDates);
      }
      var pinpoint = _arrIndexOf.call(applicableRules, date);
      if (pinpoint > 1 && compareDates(date, applicableRules[pinpoint-1], applicableRules[pinpoint-2][1]) < 0) {
        //The previous rule does not really apply, take the one before that.
        return applicableRules[pinpoint - 2][1];
      } else if (pinpoint > 0 && pinpoint < applicableRules.length - 1 && compareDates(date, applicableRules[pinpoint+1], applicableRules[pinpoint-1][1]) > 0) {

        //The next rule does already apply, take that one.
        return applicableRules[pinpoint + 1][1];
      } else if (pinpoint === 0) {
        //No applicable rule found in this and in previous year.
        return null;
      }
      return applicableRules[pinpoint - 1][1];
    }
    function getAdjustedOffset(off, rule) {
      return -Math.ceil(rule[6] - off);
    }
    function getAbbreviation(zone, rule) {
      var res;
      var base = zone[2];
      if (base.indexOf('%s') > -1) {
        var repl;
        if (rule) {
          repl = rule[7] === '-' ? '' : rule[7];
        }
        else {
          repl = 'S';
        }
        res = base.replace('%s', repl);
      }
      else if (base.indexOf('/') > -1) {
        //Chose one of two alternative strings.
        res = base.split("/", 2)[rule[6] ? 1 : 0];
      } else {
        res = base;
      }
      return res;
    }

    this.zoneFileBasePath = null;
    this.zoneFiles = ['africa', 'antarctica', 'asia', 'australasia', 'backward', 'etcetera', 'europe', 'northamerica', 'pacificnew', 'southamerica'];
    this.loadingSchemes = {
      PRELOAD_ALL: 'preloadAll',
      LAZY_LOAD: 'lazyLoad',
      MANUAL_LOAD: 'manualLoad'
    };
    this.loadingScheme = this.loadingSchemes.MANUAL_LOAD;
    this.loadedZones = {};
    this.zones = {};
    this.rules = {};

    this.init = function (o) {
      var opts = { async: true }
        , def = this.loadingScheme === this.loadingSchemes.PRELOAD_ALL
          ? this.zoneFiles
          : (this.defaultZoneFile || 'northamerica')
        , done = 0
        , callbackFn;
      //Override default with any passed-in opts
      for (var p in o) {
        opts[p] = o[p];
      }
      if (typeof def === 'string') {
        return this.loadZoneFile(def, opts);
      }
      //Wraps callback function in another one that makes
      // sure all files have been loaded.
      callbackFn = opts.callback;
      opts.callback = function () {
        done++;
        (done === def.length) && typeof callbackFn === 'function' && callbackFn();
      };
      for (var i = 0; i < def.length; i++) {
        this.loadZoneFile(def[i], opts);
      }
    };
    this.loadZoneFile = function (fileName, opts) {
      //Ignore already loaded zones.
      if (this.loadedZones[fileName]) {
        return;
      }
      this.loadedZones[fileName] = true;
      return builtInLoadZoneFile(fileName, opts);
    };
    this.loadZoneJSONData = function (url, sync) {
      var processData = function (data) {
        data = {"zones":{"America/Edmonton":[[453.8666666666667,"-","LMT",-1998691200000],[420,"Edm","M%sT",567907200000],[420,"Canada","M%sT",null]]},"rules":{"Edm":[[1918,1919,"-","Apr","Sun>=8",[2,0,0,null],60,"D"],[1918,"only","-","Oct","27",[2,0,0,null],0,"S"],[1919,"only","-","May","27",[2,0,0,null],0,"S"],[1920,1923,"-","Apr","lastSun",[2,0,0,null],60,"D"],[1920,"only","-","Oct","lastSun",[2,0,0,null],0,"S"],[1921,1923,"-","Sep","lastSun",[2,0,0,null],0,"S"],[1942,"only","-","Feb","9",[2,0,0,null],60,"W",""],[1945,"only","-","Aug","14",[23,0,0,"u"],60,"P",""],[1945,"only","-","Sep","lastSun",[2,0,0,null],0,"S"],[1947,"only","-","Apr","lastSun",[2,0,0,null],60,"D"],[1947,"only","-","Sep","lastSun",[2,0,0,null],0,"S"],[1967,"only","-","Apr","lastSun",[2,0,0,null],60,"D"],[1967,"only","-","Oct","lastSun",[2,0,0,null],0,"S"],[1969,"only","-","Apr","lastSun",[2,0,0,null],60,"D"],[1969,"only","-","Oct","lastSun",[2,0,0,null],0,"S"],[1972,1986,"-","Apr","lastSun",[2,0,0,null],60,"D"],[1972,2006,"-","Oct","lastSun",[2,0,0,null],0,"S"]],"Canada":[[1918,"only","-","Apr","14",[2,0,0,null],60,"D"],[1918,"only","-","Oct","27",[2,0,0,null],0,"S"],[1942,"only","-","Feb","9",[2,0,0,null],60,"W",""],[1945,"only","-","Aug","14",[23,0,0,"u"],60,"P",""],[1945,"only","-","Sep","30",[2,0,0,null],0,"S"],[1974,1986,"-","Apr","lastSun",[2,0,0,null],60,"D"],[1974,2006,"-","Oct","lastSun",[2,0,0,null],0,"S"],[1987,2006,"-","Apr","Sun>=1",[2,0,0,null],60,"D"],[2007,"max","-","Mar","Sun>=8",[2,0,0,null],60,"D"],[2007,"max","-","Nov","Sun>=1",[2,0,0,null],0,"S"]]}};
        for (var z in data.zones) {
          _this.zones[z] = data.zones[z];
        }
        for (var r in data.rules) {
          _this.rules[r] = data.rules[r];
        }
      };
      return processData();
    };
    this.loadZoneDataFromObject = function (data) {
      if (!data) { return; }
      for (var z in data.zones) {
        _this.zones[z] = data.zones[z];
      }
      for (var r in data.rules) {
        _this.rules[r] = data.rules[r];
      }
    };
    this.getAllZones = function () {
      var arr = [];
      for (var z in this.zones) { arr.push(z); }
      return arr.sort();
    };
    this.parseZones = function (str) {
      var lines = str.split('\n')
        , arr = []
        , chunk = ''
        , l
        , zone = null
        , rule = null;
      for (var i = 0; i < lines.length; i++) {
        l = lines[i];
        if (l.match(/^\s/)) {
          l = "Zone " + zone + l;
        }
        l = l.split("#")[0];
        if (l.length > 3) {
          arr = l.split(/\s+/);
          chunk = arr.shift();
          //Ignore Leap.
          switch (chunk) {
            case 'Zone':
              zone = arr.shift();
              if (!_this.zones[zone]) {
                _this.zones[zone] = [];
              }
              if (arr.length < 3) break;
              //Process zone right here and replace 3rd element with the processed array.
              arr.splice(3, arr.length, processZone(arr));
              if (arr[3]) arr[3] = Date.UTC.apply(null, arr[3]);
              arr[0] = -getBasicOffset(arr[0]);
              _this.zones[zone].push(arr);
              break;
            case 'Rule':
              rule = arr.shift();
              if (!_this.rules[rule]) {
                _this.rules[rule] = [];
              }
              //Parse int FROM year and TO year
              arr[0] = parseInt(arr[0], 10);
              arr[1] = parseInt(arr[1], 10) || arr[1];
              //Parse time string AT
              arr[5] = parseTimeString(arr[5]);
              //Parse offset SAVE
              arr[6] = getBasicOffset(arr[6]);
              _this.rules[rule].push(arr);
              break;
            case 'Link':
              //No zones for these should already exist.
              if (_this.zones[arr[1]]) {
                throw new Error('Error with Link ' + arr[1] + '. Cannot create link of a preexisted zone.');
              }
              //Create the link.
              _this.zones[arr[1]] = arr[0];
              break;
          }
        }
      }
      return true;
    };
    //Expose transport mechanism and allow overwrite.
    this.getTzInfo = function (dt, tz, isUTC) {
      var z = getZone(dt, tz);
      var off = z[0];
      //See if the offset needs adjustment.
      var rule = getRule(dt, z, isUTC);
      if (rule) {
        off = getAdjustedOffset(off, rule);
      }
      var abbr = getAbbreviation(z, rule);
      return { tzOffset: off, tzAbbr: abbr };
    };
  };
}).call(this);

function main() {
// this part is...
// @copyright      2009, 2010 James Campos
// @license        cc-by-3.0; http://creativecommons.org/licenses/by/3.0/
  if (typeof GM_deleteValue == 'undefined') {

    GM_addStyle = function(css) {
        var style = document.createElement('style');
        style.textContent = css;
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    GM_deleteValue = function(name) {
        localStorage.removeItem(name);
    }

    GM_getValue = function(name, defaultValue) {
        var value = localStorage.getItem(name);
        if (!value)
            return defaultValue;
        var type = value[0];
        value = value.substring(1);
       switch (type) {
            case 'b':
                return value == 'true';
            case 'n':
                return Number(value);
            default:
                return value;
        }
    }

    GM_log = function(message) {
        console.log(message);
    }

    GM_openInTab = function(url) {
        return window.open(url, "_blank");
    }

     GM_registerMenuCommand = function(name, funk) {
    //todo
    }

    GM_setValue = function(name, value) {
        value = (typeof value)[0] + value;
        localStorage.setItem(name, value);
    }
  }
// end of James Campos' code

// prepare IDB
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
var DB_NAME="theasis_scripts_Database";
var DB_VIEW_STORE_NAME="views";
var DB_LBVIEW_STORE_NAME="lbviews";
var DB_VERSION=3;
var RC_MULTIPLIER=5;
var request;
var db;
var toolbarUrl="/help/site-map";
openGenericDb=function(checkFn) {
	if (!indexedDB) { return; }
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      db = this.result;
      debug("openDb DONE");
	  checkFn();
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      debug("openDb.onupgradeneeded");
	   try {
			var st = evt.currentTarget.result.createObjectStore(DB_VIEW_STORE_NAME, { keyPath: 'file_id' });
		} catch ( e ) {
			console.log("Upgrading datastore 1: " + e);
		}
	   try {
			var st = evt.currentTarget.result.createObjectStore(DB_LBVIEW_STORE_NAME, { keyPath: 'lb_id' });
		} catch ( e ) {
			console.log("Upgrading datastore 2: " + e);
		}
    };
};
openDb=function() {
	openGenericDb( checkViews );
};
openLBDb=function() {
	openGenericDb( checkLBViews );
};
getObjectStore=function(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
};
getGenericViews=function(id,store,views,now,cell,grey,success_callback,addFn) {
	debug("getViews entry id:"+id+" views:"+views+" now:"+now);
	var req = store.get(id);
    req.onsuccess = function(evt) {
      var value = evt.target.result;
      if (value) {
        success_callback(id,views,now,value.views,value.when,cell,grey,addFn);
		} else {
			addFn(id,views,now);
		}
    };
};
getViews=function(id,store,views,now,cell,grey,success_callback) {
	getGenericViews(id,store,views,now,cell,grey,success_callback,addViews);
};
getLBViews=function(id,store,views,now,cell,grey,success_callback) {
	getGenericViews(id,store,views,now,cell,grey,success_callback,addLBViews);
};
addViews=function(id,views,when) {
    var obj = { file_id: id, views: views, when: when };
	 genericAddViews(obj, DB_VIEW_STORE_NAME);
};
addLBViews=function(id,views,when) {
    var obj = { lb_id: id, views: views, when: when };
	 genericAddViews(obj, DB_LBVIEW_STORE_NAME);
};
genericAddViews=function(obj,storeName) {
    var store = getObjectStore(storeName, 'readwrite');
    var req;
    try {
      req = store.put(obj);
    } catch (e) {
       throw e;
    }
    req.onsuccess = function (evt) {
      debug("Insertion in DB successful");
    };
    req.onerror = function() {
      console.error("addViews error", this.error);
    };
};
doStyle = function () {
	var el = jQ("#theasis_myUploads_style");
	if (el.length<1) {
		jQ("<style type='text/css' id='theasis_myUploads_style'>body {padding-bottom:40px;} .theasis_myUploads_soldToday {font-weight:bold; color:#000;} .theasis_myUploads_notSoldToday {font-weight:normal; color:#666;} div.theasisEarlierSales {font-size:80%;white-space:nowrap;font-weight:normal;} div.theasisEarlierSalesDate {font-size:80%;white-space:nowrap;font-weight:bold;} #toolbar div.theasisNewSale a {color: #ef8;} .theasisReplacementToolbar {min-width: 900px; height: 43px; z-index: 5000; position: fixed; left: 25px; right: 25px; bottom: 0; background: #111; opacity: 0.9; line-height: 43px; border-radius: 5px 5px 0 0; -webkit-border-top-left-radius: 5px; -webkit-border-top-right-radius: 5px;} .theasisReplacementToolbar #tbContentLeft {float: left; margin-left: 12px;} .theasisReplacementToolbar #tbContentRight {text-align: right; margin-right: 12px;}  .theasis_toolbarSeparator {width: 0px; height: 20px; border-left: 1px dotted #666; display: inline; margin-left: 8px; margin-right: 8px;} .theasisReplacementToolbar a {color: #e3e3e3;} #theasis_myUploads_loupe {background: rgba(240,240,240,0.95); color: #333; padding: 10px; border: solid 3px rgba(180,180,180,0.5); z-index:1000; -moz-box-shadow: 4px 4px 4px rgba(0,0,0,0.6); --box-shadow: 4px 4px 4px rgba(0,0,0,0.6); box-shadow: 4px 4px 4px rgba(0,0,0,0.6); border-radius: 5px;} .theasis_loupe_title_text {font-size: 14px;} .theasis_loupe_dls_text {font-size: 12px;font-weight:bold;color:black;background:rgba(240,240,240,0.2);text-shadow:-1px -1px 1px white, 1px 1px 1px white, -1px 1px 1px white, 1px -1px 1px white;border-radius:5px;overflow:hidden;padding:4px; margin: 0;} .theasis_detailsTable { border: 1px solid #000;} .theasis_detailsTable tr { border: 1px dotted #02a388; } .theasis_detailsTable td { font-size: 85%; padding: 5px 7px 2px 7px;} .theasis_detailsTable td { font-size: 85%; padding: 5px 7px 2px 7px;} .theasis_dlDetlailsTable2_row_a { background-color:#ddd; padding: 2px; } .theasis_button { box-shadow: 0px 1px 1px 0px #1564ad; background: linear-gradient(to bottom, #a2e3d8 5%, #92d3c8 100%); background-color: #a2e3d8; border-radius:4px; border:1px solid #a2e3d8; cursor:pointer; color:#333;font-size:0.7rem;font-weight:bold;padding:4px 10px; text-decoration:none; text-shadow:0px 1px 0px #528ecc; margin-right:0.5ex;} .theasis_button:hover { background: linear-gradient(to bottom, #92d3c8 5%, #a2e3d8 100%);} .theasis_redbutton { box-shadow: 0px 1px 1px 0px #8a2a21; background: linear-gradient(to bottom, #f24437 5%, #c62d1f 100%); color:#fff; background-color: #c62d1f; border:1px solid #d02718; text-shadow:0px 1px 0px #810e05;}.theasis_redbutton:hover { background: linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);} </style>").appendTo("head");
	}
};
// processRoyaltyRates()
//
// if we don't currently have the royalty rates, or if it's been over 1 hours since we updated them,
// get the current values
var processRoyaltyRatesPeriod = 1000*60*60*1;
var processRoyaltyRates = function() {
	if ( Date.now() - GM_getValue("theasis_myUploads_royaltyRatesUpdateTime",0) > processRoyaltyRatesPeriod) {
		scrapeRoyaltyRates();
	} else {
		debug("Not scraping royalty rates");
	}
};
var scrapeRoyaltyRates = function() {
	var currentObj=JSON.parse(GM_getValue("theasis_statsTabObj_stringified",JSON.stringify({})));
	var statsObj=currentObj[userID];
	if (statsObj) {
		debug("checkBalance: statsObj is currentObj");
		getStatsTab(statsObj);
	} else {
		debug("checkBalance: statsObj is NOT currentObj");
		getStatsTabObj(true);
	}
};

var dailySalesStats = {};
var columns = {
	file:{},
	uploaded:{link:"CreationDate"},
	uploadDate:{link:"uploadDate",rest_link:"upload-date"},
	elDate:{link:"date"},
	lockedDate:{link:"LockedUntil",rest_link:"locked-until"},
	approvalDate:{link:"ApprovalTime"},
	editorial:{link:"editorial",name:"Editorial"},
	collection:{link:"collection"},
	views:{link:"Views"},
	royalties:{link:"Royalty"},
	dlsmo:{link:"AverageMonthlyDownloads"},
	dls:{link:"DownloadCount",rest_link:"downloads"},
	lastdl:{link:"LastDownload"},
	lastedl:{link:"LastEDL"},
	lasteplusdl:{link:"lasteplusdl"},
	ppdl:{link:"PartnerDownloadCount"},
	edit:{link:"fileID"}
};
var lastColumn=0;

var TAG="theasis_my_uploads_changes: ";
theasis_debug = function(data) {
	console.log(TAG+data);
};
no_debug = function(data) {};
debug = no_debug;
setDebugMode = function() {
	if (getVal("debug")) {
		debug=theasis_debug;
	} else {
		debug=no_debug;
	}
	debug("debug mode enabled");
};
getTable = function(html) {
  var restURLFormat = loc.indexOf("/my-uploads/")>-1 || loc.indexOf("/my-account/")>-1;
  var isImgSub = loc.indexOf("/my-uploads/subscriptions")>-1;
  var isPP = loc.indexOf("/my_uploads_partner_program.php")>-1;
  var selector = ".data:first";
  if (restURLFormat) {
    selector = "table:first";
  }
  if (isImgSub || isPP) {
    selector = "table:last";
  }
//  console.log("** selector: " + selector);
	var table = jQ(selector,html);
	if (table.length==0) {
 		table = jQ(".reporttable:first",html);
	}
	return table;
};

doLoupe = function(e,imgEl,addStyle,toolBar,idList) {
	addStyle=true;
	undoLoupe();
	var lImg=380;
	var lBuffer=80;
	var tSize=10+parseInt(getVal("thumbsize"),10);
	var lMax=lImg+lBuffer;
	if (!getVal("loupe")) return;
	var loupeHeight=lMax;
	var loupeWidth=lImg;
	try {
		loupeHeight = Math.min(lMax,Math.floor(lImg*imgEl.height()/imgEl.width()+lBuffer));
		loupeWidth = Math.min(lImg,Math.floor(lImg*imgEl.width()/imgEl.height()));
	} catch (err) {
		// fall back to lMax and lImg - no worries!
		debug("doLoupe: Falling back to default image sizes");
	}
	var l=toolBar ? 100 : imgEl.position().left+tSize;
	var t=toolBar ? e.pageY : imgEl.position().top-jQ(window).scrollTop();
	t=Math.max(t,lBuffer);
	if (t > jQ(window).height()-loupeHeight-43) { 
		t = jQ(window).height()-loupeHeight-43;
	}
	var imgUrl=imgEl.attr('src').replace(/\/[13]\//,'/2/');
	var style = {position:"fixed",left:l,top:t,"z-index":"15000"};
	var loupeContainer = jQ("<div id='theasis_myUploads_loupe'><table style='margin:1px;'><tr><td id='theasisLastSaleLoupeCell1' style='vertical-align:top; padding:0;'/><td id='theasisLastSaleLoupeCell2' style='vertical-align:top; padding:0;'/></tr></table></div>").css(style);
	loupeContainer.hide();
	loupeContainer.appendTo('body');
	var loupe = jQ("<img>").attr({src:imgUrl});
	loupe.appendTo(jQ("#theasisLastSaleLoupeCell1"));
	try {
		debug("doLoupe: idList length " + (idList?idList.length:"null idList"));
		if (getVal("tenThumbs") && idList && idList.length>1) {
			var extras=jQ("<table>").css({"border-width":"5px","border-spacing":"5px","border-style":"solid","border-color":"rgba(240,240,240,0.95)",margin:"0px"});
			var eRow=jQ("<tr style='vertical-align:top;'>");
			for(var i=1; i<Math.min(10,idList.length); ++i) {
				var id=idFromIdPlusType(idList[i]);
				var dls=dlsFromIdPlusType(idList[i]);
				var dlClassColour="rgba(240,240,240,0.95)";
				var dlClassStyle="solid"; 
				switch (dls) {
					case "0": dlClassStyle="ridge"; dlClassColour="rgba(20,20,20,0.95)"; break;
					case "1": dlClassStyle="ridge"; dlClassColour="rgba(240,240,20,0.95)"; break;
				}
				var dlBox=jQ("<span class='theasis_loupe_dls_text'>").text(dls);
				var imgCell = jQ("<td>").css({width:"70px",height:"70px","background":"url("+"//i.istockimg.com/file_thumbview_approve/"+id+"/1/) no-repeat center center","background-size":"cover","border-width":"5px","border-spacing":"5px","border-style":"solid","border-color":"rgba(240,240,240,0.95)",padding:"0"}).html(dlBox);
				imgCell.appendTo(eRow);
				if (i%3==0) {
					eRow.appendTo(extras);
					eRow=jQ("<tr style='vertical-align:top;'>");
				}
			}
			eRow.appendTo(extras);
			extras.appendTo(jQ("#theasisLastSaleLoupeCell2"));
			jQ("<tr><td colspan='3' class='theasis_loupe_title_text' style='text-align:right;width:225px;'>Previous DLs</td></tr>").appendTo(jQ("#theasisLastSaleLoupeCell2"));
		}
	} catch(e) {
		console.log(e.message);
	}

	if (getVal("loupeTitle")) {
		var title=imgEl.attr("title");
		if(!title) {
			title=imgEl.attr("alt");
		}
		if (!title || !title.match(/\D/)) {
			var altTitle=imgEl.closest("td").attr("title");
			if (!altTitle) altTitle=imgEl.closest("a").attr("title");
			if (altTitle) title=altTitle;
		}
		if (title && idList && idList.length>0) {
			title += ": " + dlsFromIdPlusType(idList[0]) + " DLs";
		}
		if (title) jQ("<div class='theasis_loupe_title_text'>"+title+"</div>").appendTo(loupeContainer);
	}
	if (getVal("suppressTooltips")) {
		window.suppressedTitleEl=imgEl.parent().parent().parent().data("fileid");
		window.suppressedTitle=imgEl.attr("title");
		imgEl.attr("title","");
	}
	if (getVal("loupeDescription")) {
		var desc=imgEl.parent().siblings('a[href*="file_closeup_edit"]:first').attr("title");
		if (desc) jQ("<div style='max-width:"+loupeWidth+"px;max-height:40px;'>"+imgEl.parent().siblings('a[href*="file_closeup_edit"]:first').attr("title")+"</div>").appendTo(loupeContainer);
	}
	loupeContainer.stop().show(100);
};
undoLoupe = function() {
	jQ("#theasis_myUploads_loupe").remove();
	if (getVal("suppressTooltips")) {
		var fileid=window.suppressedTitleEl;
		var imgRow=jQ("tr[data-fileid='"+fileid+"']");
		if (imgRow.length==1) {
			var imgEl=jQ("img",imgRow).first();
			imgEl.attr('title',window.suppressetTitle);
			window.suppressedTitleEl=null;
			window.suppressetTitle=null;
		}
	}
};
checkIfLargerThumbNeeded = function() {
	var thumb=jQ(this);
	if (thumb.width()<thumb.height()) {
		thumb.attr('src',thumb.attr('src').replace("/1/","/3/"));
	}
};
resizeThumbs = function(addStyle,secondColumn,html) {
	var colStr = secondColumn ? "td:eq(1)" : "td:first";
	var table = getTable(html);
	if (table.length) {
		var size = getVal("thumbsize");
		var rows = table.find("tr:gt(0)").each(function(){
			var col1=jQ(this).find(colStr);
			var thumb=col1.find("a:first").find("img:first");
			if (size>50) {
				thumb.one('load',checkIfLargerThumbNeeded).each(function(){if(this.complete) jQ(this).load();});
			}
			var src=thumb.attr("src");
			if (src.indexOf("/audio_play.png")==-1 && src.indexOf("/stock-audio-")==-1) {
				thumb.css('width',size);
			}
			thumb.mouseenter(function(e){doLoupe(e,jQ(this),addStyle);}).mouseleave(function(){undoLoupe();});
		});
  }
};
reformatDates = function(html) {
	var targetCols=["uploaded","lastdl","uploadDate","lockedDate","lastedl","approvalDate","elDate","lasteplusdl"];
	var table = getTable(html);
    if (table.length) {
		var rows = jQ("tr:gt(0)",table);
		var cols;
		rows.each(function() {
			cols = jQ(this).children('th, td');
			for (var i=0;i<targetCols.length;++i) {
				var cell=cols.eq(columns[targetCols[i]].position);
				cell.html(doFixDate(cell));
			}
			var cell=cols.eq(columns["lastdl"].origposition);
			cell.html(doFixDate(cell));
		} );
    }	
};
reformatSubsDates = function(html) {
	var targetCols=[2,5];
	var table = getTable(html);
    if (table.length) {
		var rows = jQ("tr:gt(0)",table);
		var cols;
		rows.each(function() {
			cols = jQ(this).children('th, td');
			for (var i=0;i<targetCols.length;++i) {
				var cell=cols.eq(targetCols[i]);
				cell.html(doFixDate(cell));
			}
		} );
    }	
};
doFixDate = function(dateCell) {
	var txt=dateCell.text();
	var newDate = formatDateStr(txt, true);
	if (!newDate) {
		return dateCell.html();
	} else {
		return"<span style='display:none;'>@"+newDate[0]+"@</span>"+newDate[1];
	}
};
formatDateStr = function(txt, nobreak) {
	var match = /((0?(\d{1,2}))\/(0?(\d{1,2}))\/(\d{4}))/.exec(txt);
	var match2 = /((0?(\d{1,2}))\/(0?(\d{1,2}))\/(\d{2}))/.exec(txt);
	var space = nobreak ? "&nbsp;" : " ";
	if ((!match || match.length!=7) && (!match2 || match2.length!=7)) {
		return undefined;
	}
	var newDate;
	var old,dd,d,mm,m,y;
	if (match) {
		old=match[1],dd=match[2],d=match[3], mm=match[4], m=parseInt(match[5],10), y=match[6];
	} else {
		old=match2[1],dd=match2[4],d=match2[5], mm=match2[2], m=parseInt(match2[3],10), y="20"+match2[6];
	}
	switch(getVal("dateFormat")) {
	case '0':
		newDate=m+"/"+d+"/"+y;
		break;
	default:
	case '1':
		newDate=d+"/"+m+"/"+y;
		break;
	case '2':
		newDate=months[m-1]+space+d+","+y;
		break;
	case '3':
		newDate=d+space+months[m-1]+space+y;
		break;
	case '4':
		newDate=y+"-"+mm+"-"+dd;
		break;
	}
	return [old,newDate];

};
localDateTime = function(d, noBreak) { // convert a Date to local date/time
	var date=""+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
	var hr=d.getHours();
	var ap=hr<12?'am':'pm';
	if (hr==0) hr=12;
	if (hr>12) hr-=12;
	var mins = d.getMinutes();
	if (mins<10) mins="0"+mins;
	return formatDateStr(date, noBreak)[1] + " "+hr+":"+mins + ap;
};
dateStrToDate = function(dateStr) { // parse 23/02/2009 8:16 AM MST into a local date/time
	var res=dateStr;
	var match=/(\d{2})\/(\d{2})\/(\d{4})\s+(\d+):(\d+)\s+([AP])M\s+M([DS])T/.exec(dateStr);
	if (match && match.length==8) {
		var dy=match[1];
		var mo=parseInt(match[2],10);
		var yr=match[3];
		var hr=parseInt(match[4],10);
		var mi=match[5];
		var ap=match[6];
		var ds=match[7];
		if (ap=='P' && 12>hr) hr+=12;
		if (ap=='A' && 12==hr) hr=0;
		var d = new Date();
		d.setUTCFullYear(yr,mo-1,dy);
		d.setUTCHours(hr);
		d.setUTCMinutes(mi);
		d.setHours(d.getHours()+(ds=='S'?7:6));
		res = localDateTime(d, true);
	}
	return res;
};
fixBasicTableDetails = function(html) {
	var table = getTable(html);
	table.find("td").css({"vertical-align":"top"});
};
fixSubTableDetails = function(html) {
	var table = getTable(html);
	if (jQ("#theasis_myUploads_requestSubsData").length==0) {
		jQ("<img id='theasis_myUploads_requestSubsData' src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|d42|FFF' style='padding-left:6px;padding-top:4px;cursor:pointer;' class='btnCtal'>").click(function(){loadRecentSubs();}).insertAfter(jQ("th a[href*=lastsubdl]"));
	}
};
fixTableDetails = function(html) {
	var table = getTable(html);
	table.find("th").eq(columns.lastdl.position).removeClass("w100px").css({"white-space":"nowrap"});
	if (jQ("#theasis_myUploads_requestSalesData").length==0) {
		jQ("<img id='theasis_myUploads_requestSalesData' src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|d42|FFF' style='padding-left:6px;padding-top:4px;cursor:pointer;' class='btnCtal'>").click(function(){loadRecentSales();}).insertAfter(jQ(".data:first").find("tr:first").find("a[href*=LastDownload]"));
	}
	if(getVal("showRoyaltyTotals")) {
		loadRoyaltyDetails();
	} else if (jQ("#theasis_myUploads_requestRoyaltyData").length==0) {
		jQ("<img id='theasis_myUploads_requestRoyaltyData' src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|d42|FFF' style='padding-left:6px;padding-top:4px;cursor:pointer;' class='btnCtal'>").click(function(){loadRoyaltyDetails();}).insertAfter(jQ(".data:first").find("tr:first").find("a[href*=Royalty]"));
	}
	if (jQ("#theasis_myUploads_requestDLsPerMonData").length==0) {
		var dlsmoImg = jQ("<img id='theasis_myUploads_requestDLsPerMonData' src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|d42|FFF' style='padding-left:6px;padding-top:4px;cursor:pointer;' class='btnCtal'>").click(function(){loadDLsMoDetails();});
		var dlsmoContent = jQ("<div style='white-space: nowrap;'>DLs/mo</div>").append(dlsmoImg);
		jQ(".data:first").find("tr:first").find("th:contains('DLs/mo')").html(dlsmoContent);
	}
	if (getVal("editButtons")) {
		table.find("tr:gt(0)").each(function(){jQ(this).find("td").eq(columns.file.position).find("a.btnCta3").remove();});
	}
};
fixTablePP = function() {
	var table = getTable();
	jQ("<img id='theasis_myUploads_requestPPSalesData' src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|d42|FFF' style='padding-left:6px;padding-top:4px;cursor:pointer;' class='btnCtal'>").click(function(){loadRecentOffsiteSales(table,columns.ppdl.position,columns.edit.position,'#theasis_myUploads_requestPPSalesData','PartnerProgram');}).insertAfter(table.find("tr:first").find("a[href*=PartnerDownloadCount]"));
};
fixTableGI = function() {
	var table = getTable();
	jQ("<img id='theasis_myUploads_requestGISalesData' src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|d42|FFF' style='padding-left:6px;padding-top:4px;cursor:pointer;' class='btnCtal'>").click(function(){loadRecentOffsiteSales(table,columns.dls.position,1,'#theasis_myUploads_requestGISalesData','GISales');}).insertAfter(table.find("tr:first").find("a[href*=downloads]"));
};
makeExtraLinks = function(name,extraLinks){
	var id="theasis_extraLinksDiv_"+name.replace(" ","_");
	var base = extraLinks[0];
	var arr = extraLinks[1];
	var div = jQ("<div>").css({background:"#09b",width:"160px",padding:"7px"}).attr("id",id).hide();
	for( var i=0; i<arr.length; ++i ) {
		var link = jQ("<a>").attr({href:base+arr[i][0]}).css({color:"#eec","font-weight":"bold"}).text(arr[i][1]);
		div.append(jQ("<div>").append(link)); 
	}
	return {div:div,id:id};
};
checkImageViews = function(id,nowViews,now,thenViews,then,cell,isgrey,addFn) {
	var age=(now-then)/1000;
	var ageUnits="seconds";
	if (age>120) {
		age=age/60;
		ageUnits="minutes";
		if (age>120) {
			age=age/60;
			ageUnits="hours";
			if (age>48) {
				age=age/24;
				ageUnits="days";
			}
		}
	}
	age=Math.floor(age);
	var showChanges=getVal("showViewChanges");
	if (nowViews!=thenViews) {
		if (showChanges) {
			var bg = isgrey?"#f0f0c0":"#ffffd0";
			cell.attr({title:''+age+' '+ageUnits+' ago the view count was '+thenViews}).css({"font-weight":"bold",color:"#802020","background-color":bg});
		}
		addFn(id,nowViews,now);
	} else if (showChanges) {
		cell.attr({title:'View count unchanged for at least '+age+' '+ageUnits});
	}
};
checkViews = function() {
	var now=new Date();
	var mils=now.getTime();
	var store=getObjectStore(DB_VIEW_STORE_NAME,"readonly");
	var table = getTable();
	table.find("tr:gt(0)").each(function(){
		var row=jQ(this);
		var id=row.attr('data-fileid');
		if (!id) {
			var cols = row.children("td");
			var href = cols.eq(columns.file.position).children("a:first").attr("href");
			var match = /id=(\d+)|-(\d+)-/.exec(href);
			if (match) {
				id=match[1]||match[2];
			}
		}
		if (id) {
			row.find("td").eq(columns.views.position).each(function(){
				var currentViews=parseInt(jQ(this).text(),10);
				getGenericViews(id,store,currentViews,mils,jQ(this),row.hasClass('bggrey'),checkImageViews,addViews);
			});
		}
	});
};
checkLBViews = function() {
	var now=new Date();
	var mils=now.getTime();
	var store=getObjectStore(DB_LBVIEW_STORE_NAME,"readonly");
	var table = getTable();
	table.find("tr:gt(0)").each(function(){
		var row=jQ(this);
		var cols = row.children("td");
		var href = cols.eq(0).children("a:first").attr("href");
		var match = /lightbox\/(\d+)/.exec(href);
		var id=null;
		if (match) {
			id=match[1];
		}
		if (id) {
			row.find("td").eq(3).each(function(){
				var currentLBViews=parseInt(jQ(this).text(),10);
				getGenericViews(id,store,currentLBViews,mils,jQ(this),row.hasClass('bggrey'),checkImageViews,addLBViews);
			});
		}
	});
};
updateKeywords = function(data,params) {
	var cell=params[0];
	var img=params[1];
	var html=jQ(data);
	var kws=data.keywords.slice(0,5);
	img.hide();
	cell.html("<i>"+kws.join(",<br>")+"</i>");
};
doKeywords = function() {
	table.find("tr:gt(0)").each(function() {
		var row=jQ(this);
		var id=row.attr('data-fileid');
		if (id) {
		}
	});
};
doKeywordsLinks = function() {
	var table=getTable();
	table.find("tr:gt(0)").each(function() {
		var row=jQ(this);
		var col=row.find("td:first");
		var img=col.find("img[src*=file_thumbview]:first");
		if (img.length>0) {
			var match=img.attr('src').match(/approve\/(\d+)\//);
			if (match) {
				var id=match[1];
				var kwButton = jQ("<img src='//i.istockimg.com/file-view/display/2780/26/' alt='Show main keywords' title='Show main keywords' />").css({'padding-left':'.5em',cursor:'pointer'}).click(function(){showKeywords(jQ(this),row,id);});
				row.find("td:first br:last").replaceWith(kwButton);
			}
		}
	});
};
showKeywords = function(el,row,fid) {
	var table=getTable();
	if (jQ("#theasis_myUploads_keywords_column_head").length<1) {
		table.find("tr:first").append(jQ("<th id='theasis_myUploads_keywords_column_head'>Main Keywords</th>"));
		table.find("tr:gt(0)").append(jQ("<td class='theasis_keywords'></td>"));
	}
	el.attr('src','//i.istockimg.com/static/images/loading.gif').css({width:'12px',height:'12px'});
	var kwCell = row.find("td.theasis_keywords:first");
	getFileDataThenCallback(fid,updateKeywords,[kwCell,el]);
};
addContribPageLinks = function(userID,paraText,removeText,wrapper,onDetailPage) {
	var links = {
		"DL":["/my_uploads.php",[["?order=CreationDate","Upload Date"],["?order=LastDownload","Last DL"],["?order=ApprovalDate","Approval Date"],["?order=DownloadCount","DLs"],["?order=Royalty","Royalty"],["?order=Views","Views"],["?order=AverageMonthlyDownloads","DLs/mo"]]],
    "Cr Sub":["/my_uploads_subscription.php",[["?order=DelayCount","Delayed Royalty"],["?order=LastDownload","Last DL"],["?order=DownloadCount","Sub DLs"],["?order=CreationDate","Upload Date"]]],
    "Im Sub":["/my-account/my-uploads/subscriptions",[["/1/roylties/desc","Royalty"],["/1/lastsubdl/desc","Last DL"],["/1/subdls/desc","Sub DLs"],["/1/upload/desc","Upload Date"]]],
		"EL":["/license_earnings.php",[["?order=dateDesc","EL Date"],["?order=royaltyDesc","Royalty"],["?order=fileIDDesc","File Number"]]],
		"EL Info":["/license_info.php",[["?order=royaltyDesc","Royalty"],["?order=uploadDateDesc","Upload Date"]]],
		"PP":["/my_uploads_partner_program.php",[["?order=PartnerDownloadCount","PP DLs"],["?order=Royalty","PP Royalty"],["?order=ApprovalTime","Approval Date"]]],
		"GI":["/my-account/my-uploads/gisales",[["/1/downloads/DESC","GI DLs"],["/1/royalty/DESC","GI Royalty"],["/1/upload-date/DESC","Upload Date"]]],
		"Design":"/design_info.php",
//		"LB":"/lightbox_info.php",
//		"Plus":"/my_uploads_pricepoint.php"
	};
	var head = jQ(wrapper?"#wrapper":"#mncntnt").find("h1:first");
//  console.log("Head: " + head.length);
  head.addClass("ImTheHead");
  try {
  	if (removeText) { // remove the "links have moved" text
  		if (paraText) {
  			head.parent().find("p:first").remove();
  		} else {
  			head.get(0).nextSibling.nodeValue="";
  		}
  	}
  } catch(e) {

  }
	head.parent().find('div > p > a[href*="search/portfolio"]').remove();
	var linkDiv = jQ("<div>");
	for(l in links) {
		var path=links[l];
		var extraLinks=false;
		if (jQ.isArray(path)) {
			extraLinks=makeExtraLinks(l,path);
			path=path[0];
		}
		var link = jQ("<div>").css("display","inline").appendTo(linkDiv).append(jQ("<input>").attr({type:"submit", value:l, onClick:"window.location='"+path+"';", class:"btnCta1", style:"padding:3px 7px; margin-left:0px; margin-right:4px;"}));
		if (extraLinks) {
			(function(){
				var id=extraLinks.id; 
				link
					.mouseenter(function(){var extra=jQ("#"+id); var pos = jQ(this).position(); extra.css({position:"fixed",left:pos.left,top:18+parseInt(pos.top,10)-jQ(window).scrollTop(),"z-index":20000}).show(300);})
					.mouseleave(function(){jQ("#"+id).hide();})
					.append(extraLinks.div);
			})();
		}
	}
  if (userID>0) {
		jQ("<input>").attr({type:"submit", value:"Port", onClick:"window.location='/search/portfolio/"+userID+"/?facets=%7B\"25\"%3A\"6\"%7D';", class:"btnCta1", style:"padding:3px 9px; margin-left:0px; margin-right:6px;"}).appendTo(linkDiv);
	}
	linkDiv.insertAfter(head);
};
arrayFromIdStr=function(idStr) { return idStr.split(":"); };
strFromIdArray=function(idList) { return idList.join(":"); };
var theasisMyUploadsNextPageLoadingId="theasisMyUploadsNextPageLoadingContainer";
var toolBarSaleTargetId="theasisToolbarLatestThumbnailContainer";
var toolBarSaleLoadingId="theasisToolbarLatestThumbnailLoading";
var toolBarSaleThumbFileId="theasisToolbarLatestThumbnailId";
var toolBarSaleThumbId="theasisToolbarLatestThumbnailImg";
var toolBarSaleTitleId="theasisToolbarLatestThumbnailTitle";
var toolBarSaleTextId="theasisToolbarLatestThumbnailText";
var toolBarSaleSize="theasisToolbarLatestSize";
showLatestSale = function() {
	var lastThumbFileId=arrayFromIdStr(GM_getValue(toolBarSaleThumbFileId,""));
	debug("showLatestSale: lastThumbFileId=" + lastThumbFileId);
	var lastThumbImg=GM_getValue(toolBarSaleThumbId,"");
	var lastThumbTitle=GM_getValue(toolBarSaleTitleId,"");
	debug("showLatestSale: lastThumbTitle=" + lastThumbTitle);
	var lastThumbText=GM_getValue(toolBarSaleTextId,"<a href='#'>Loading...</a>");
	var img = lastThumbImg ?
		jQ("<img>").attr({id:toolBarSaleThumbId,"src":lastThumbImg,"title":lastThumbTitle,"alt":lastThumbTitle}).css({"height":"38px","vertical-align":"middle","margin-top":"-4px"}).unbind('mouseenter').unbind('mouseleave').unbind('mouseover').unbind('mouseout').mouseenter(function(e){doLoupe(e,jQ(this),true,true,lastThumbFileId);}).mouseleave(function(){undoLoupe();}).bind('load',function(){var h=jQ(this)[0].naturalHeight;var w=jQ(this)[0].naturalWidth;var ih=38;var iw=Math.round(ih*w/h); if (iw<1) { iw=38 };jQ(this).css({width:iw,height:ih}).unbind('mouseenter').unbind('mouseleave').unbind('mouseover').unbind('mouseout').mouseenter(function(e){doLoupe(e,jQ(this),true,true,lastThumbFileId);}).mouseleave(function(){undoLoupe();});}).each(function(){if(this.complete) {jQ(this).load();}}) :
		jQ("<img>").attr({id:toolBarSaleThumbId,"src":'//i.istockimg.com/static/images/blank.gif'});
	var a = jQ("<a>").attr({href:"#"}).css({color:"#aaa","font-weight":"normal","font-size":"90%"}).append(img);
	var txt = jQ("<span>").attr({id:toolBarSaleTextId}).html(lastThumbText);
	var container=jQ("#"+toolBarSaleTargetId);
	if (!container.length) {
		jQ("#tbContentLeft").append(jQ("<img src='//i.istockimg.com/static/images/blank.gif' class='sptWhiteSeparatorVertical m'>")).append(jQ("<span><audio id='theasis_newSaleAudio' src='http://theasis.myzen.co.uk/Highwire.ogg'/>Last DL: </span>").attr({id:toolBarSaleTargetId}).css({color:"#fff"}).append(a).append(txt));
	} else {
		container.empty().html("<audio id='theasis_newSaleAudio' src='http://theasis.myzen.co.uk/Highwire.ogg'/>Last DL: ").append(a).append(txt);
	}
//	jQ("#"+toolBarSaleLoadingId).fadeOut(5000);
	jQ.ajax({
		url:"//www.istockphoto.com/my_uploads.php?page=1&order=LastDownload",
		success:processLatestSale
	});
};
// return the matching index in fileTypeLUT, or -1 if no match
var fileTypeLUT=[
	/\bphoto\b/,
	/\bvettaPhoto\b/,
	/\b(vector|illustration)\b/,
	/\bvetta(vector|illustration)\b/i,
	/\bvideo\b/,
	/\bvettaVideo\b/,
	/\baudio(Pump)?\b/,
	/\bflash\b/
];
guessFileType = function(classes) {
//	debug("guessFileType: " + classes);
	for(var i=0; i<fileTypeLUT.length; ++i) {
//		debug(fileTypeLUT[i].toString());
		if (fileTypeLUT[i].test(classes)) {
//			debug("match " + i);
			return i;
		}
	}
	debug("guessFileType: no match");
	return -1;
};
idFromIdPlusType = function(str) {
	var x = str.indexOf("x");
	if (x>0) {
		return str.substring(0,x);
	}
	return str;
};
typeFromIdPlusType = function(str) {
	var x = str.indexOf("x");
	if (x>0) {
		var y = str.indexOf("y",x);
		if (y>0) {
			return str.substring(x+1,y);
		} else {
			return str.substring(x+1);
		}
	}
	return "-1";
};
dlsFromIdPlusType = function(str) {
	var y = str.indexOf("y");
	if (y>0) {
		return str.substring(y+1);
	}
	return "-1";
};
notLoggedIn = function() {
	var returnUrl=window.btoa(encodeURIComponent(window.location));
	jQ("#"+toolBarSaleTargetId).css({color:"black","background-color":"red",border:"2px solid white","font-size":"150%","font-weight":"bold",padding:"0.3em"}).html("<a href='//www.istockphoto.com/sign-in/"+returnUrl+"'>LOGGED OUT</a>");
};
processLatestSale = function(data) {
//	jQ("#"+toolBarSaleLoadingId).stop().fadeIn(100).fadeOut(1000);
	var html=jQ(data);
	var rows=html.find(".data:first").find("tr:gt(0)");
	var fileId=[];
	var file;
	rows.each(function(){
		var col=jQ(this).find("td").eq(0);
		if (!file) file=col.find("img:first");
		var fileEditHref=col.find('a[href*="file_closeup_edit"]:first').attr("href");
		var fileIcon=col.find('img.icons:first');
		var fileClasses=fileIcon.attr("class");
		var fileType=guessFileType(fileClasses);
		var dls=jQ(this).find("a[href*='file_downloads.php']").eq(2).text();
		var match=/id=(\d+)/.exec(fileEditHref);
		if (match) {
			fileId.push(match[1]+"x"+fileType+"y"+dls);
//			debug("processLatestSale: rows.each: match: " + match[1]);
		}
	});
	var fid = idFromIdPlusType(fileId[0]);
	GM_setValue(toolBarSaleThumbFileId,strFromIdArray(fileId));
	var saleUrl="/file_downloads.php?PageSetting=&page=1&order=PurchaseTimeDESC&id="+fid;
	debug("processLatestSale: saleUrl=" + saleUrl);
	var thumbUrl = file.attr("src");
	debug("processLatestSale: thumbUrl=" + thumbUrl);
	GM_setValue(toolBarSaleThumbId,thumbUrl);
	var title = file.attr("title");
	GM_setValue(toolBarSaleTitleId,title);
	var target=jQ("#"+toolBarSaleTargetId);
	target.css({color:"rgb(170,170,170)","font-size":"90%",background:"transparent",border:"none","font-weight":"normal",padding:"0"});
	target.find("a:first").attr({href:"/stock-photo-"+fid+"-.php"});
	target.find("img:first").attr({"src":thumbUrl,"title":title,"alt":title}).css({"height":"38px","vertical-align":"middle"}).load(function(){var h=jQ(this).height();var w=jQ(this).width();var ih=Math.min(38,h);var iw=Math.round(ih*w/h);jQ(this).css({width:w,height:h}).mouseenter(function(e){doLoupe(e,jQ(this),true,true,fileId);}).mouseleave(function(){undoLoupe();});});
	jQ.ajax({
		url:saleUrl,
		success:processLatestSaleDetails
	});
};
var seenKey="theasisToolBarLatestDownloadSeenKey";
processLatestSaleDetails = function(data) {
//	jQ("#"+toolBarSaleLoadingId).stop().hide();
	var lastThumbFileId=arrayFromIdStr(GM_getValue(toolBarSaleThumbFileId,""));
	var fid=idFromIdPlusType(lastThumbFileId[0]);
	var ftype=typeFromIdPlusType(lastThumbFileId[0]);
	debug("processLatestSaleDetails: lastTFId[0] " + lastThumbFileId[0] + " ftype " + ftype);
	var target=jQ("#"+toolBarSaleTextId);
	var html = jQ(data);
	var thumbUrl=html.find('img[src*="file_thumbview_approve"]:first').attr('src');
	var table = html.find(".reporttable:first");
	var row=table.find("tr:eq(1)");
	var cols = row.find("td");
	var date = dateStrToDate(cols.eq(0).text());
	var thisSaleDate=cols.eq(0).text().substr(0,10);
	var thisSaleTime=cols.eq(0).text().substr(10,9);
	var seenval=thumbUrl+thisSaleDate+thisSaleTime;
	var sp = "&nbsp;"
	var saleSize = jQ.trim(cols.eq(1).text());
	var royalty = jQ.trim(cols.eq(3).text().replace("USD",""));
	var saleText = "<div id='theasisToolBarLatestDownloadTextContainer' style='display:inline-block;'><a id='theasisToolBarLatestDownloadTextLink' href='/my_uploads.php?page=1&order=LastDownload' style='white-space:nowrap;'>" + sp + date + sp + (getVal("showSaleSize") ? (saleSize + sp) : "") + royalty + "</a></div>";
	GM_setValue(toolBarSaleSize,saleSize);
	GM_setValue(toolBarSaleTextId,saleText);
	debug("processLatestSaleDetails: saleSize=" + saleSize);
	debug("processLatestSaleDetails: saleText=" + saleText);
	var sale = jQ(saleText);
	if (GM_getValue(seenKey,"novalue")==seenval) {
		sale.css({"font-weight":"normal","font-size":"90%","line-height":"21px"}).removeClass("theasisNewSale");
	} else {
		sale.css({"font-weight":"bold","font-size":"110%","line-height":"21px"}).addClass("theasisNewSale");
		GM_setValue(seenKey,seenval);
	}
	target.html(sale);
	if (getVal("showELInToolbar")) {
		var elUrl="//www.istockphoto.com/file_downloads.php?PageSetting=ExtendedLicense&page=1&order=Date&id="+fid;
		jQ.ajax({
			url:elUrl,
			success:processLatestELDetails
		});
	}
	if (getVal("showRCsInToolbar")) {
		getFileDataThenCallback(fid,processLatestRCDetails,[royalty.substring(1),ftype]);
	}
};
getFileDataThenCallback = function(fid,callback,params) {
	jQ.ajax({
		url:"https://rest.istockphoto.com/api/v1/assets/convert/afid/"+fid,
		dataType: "json",
		success:function(data){
			if (data && data.gettyMasterId) {
				jQ.ajax({
					url:"https://rest.istockphoto.com/api/v1/assets/"+data.gettyMasterId,
					dataType: "json",
					success:function(data){
						callback(data,params);
					}
				});
			}
		}
	});
};
processLatestELDetails = function(data) {
	var target=jQ("#theasisToolBarLatestDownloadTextContainer");
	var html = jQ(data);
	var thumbUrl=html.find('img[src*="file_thumbview_approve"]:first').attr('src');
	var table = html.find(".reporttable:first");
	var row=table.find("tr:eq(1)");
	if (row.length==0) return;
	var cols = row.find("td");
	var date = dateStrToDate(cols.eq(1).text());
	var thisSaleDate=cols.eq(1).text().substr(0,10);
	var thisSaleTime=cols.eq(1).text().substr(10,9);
	var seenval=thumbUrl+thisSaleDate+thisSaleTime;
	var sp = "&nbsp;"
	var saleText = "<br/>" + "<a href='/license_earnings.php?order=dateDesc&page=1' style='white-space:nowrap;'>" + sp + date + sp + "<i>EL</i>" + sp + jQ.trim(cols.eq(3).text().replace("USD",""));
	var sale = jQ("<span>" + saleText + "</span>").css({color:"#aaa","font-weight":"normal","line-height":"21px"});
	target.append(sale);
	target.css({"vertical-align":"top"});
};
fileRCLUT={};
loadFileRCLUT = function(fid) {
	var priceUrl="//www.istockphoto.com/manage/file-closeup/index/stock-photo-"+fid+"-.php";
		jQ.ajax({
			url:priceUrl,
			success:processFileRCDetails
		});
};
processFileRCDetails = function(data) {
	var html = jQ(data);
	var fid=jQ("#fileId",html).val();
	debug("processFileRCDetails: fid=" + fid);
	if (fid) {
		fileRCLUT[fid]=extractRCsFromFileData(data);
		debug("fileRCLUT["+fid+"]="+extractRCsFromFileData(data));
		doDailySalesStats();
	}
};
extractRCsFromFileData = function(data) {
	var match = /FilePriceInformation.*"filePriceInformation".*"priceInCredits":(\d+)/.exec(data);
	if (match) {
		return parseInt(match[1],10)*RC_MULTIPLIER;
	}
	return 0;
};
processLatestRCDetails = function(data,params) {
	var royaltyStr=params[0];
	var ftype=params[1];
	debug("ftype:"+ftype);
	ftype=parseInt(ftype,10);
	var royalty = parseFloat(royaltyStr);
	debug("ProcessLatestRCDetails: royalty " + royalty + " str " + royaltyStr);
	var numCredits=data.standardPriceInCredits*RC_MULTIPLIER;
	if (numCredits) {
		var target=jQ("#theasisToolBarLatestDownloadTextLink");
		target.text(target.text() + " " + numCredits + "RCs");
		debug("processLatestRCDetails: numCredits="+numCredits);
		var paidPerCredit=0;
		var txt="";
		var pctTxt=".";
		debug("ftype:" + ftype);
		if (ftype>=0 && ratesFileTypes[ftype][1]>0) { // TODO: access the correct file type
			var pct = ratesFileTypes[ftype][1];
			paidPerCredit=(royalty*100/pct/numCredits).toFixed(2);
			txt="Customer paid $" +paidPerCredit+ " per credit.\n";
			pctTxt = " ("+pct+"%).";
			debug(pctTxt);
		}
		var perCredit=(royalty/numCredits).toFixed(2);
		target.attr("title",txt+"You earned $" +perCredit+ " royalty per credit"+pctTxt);
	}
};
analyseSales = function() {
	if (!getVal("salesGraphs")) return;
	
	// Last DL
	var ages=[];
	var oldest=0;
	var now = new Date();
	var dNow=now.getDate();
	var mNow=now.getMonth()+1;
	var yNow=now.getFullYear();
	var rows=jQ(".data:first").find("tr:gt(0)");
	rows.each(function(){
		var cols = jQ(this).children("td");
		var ul = cols.eq(columns.uploaded.position).text();
		var match = /(\d+)\/(\d+)\/(\d+)/.exec(ul);
		if (match) {
			var dFile=parseInt(match[1],10);
			var mFile=parseInt(match[2],10);
			var yFile=parseInt(match[3],10);
			var years = yNow-yFile;
			if (mFile>mNow || (mFile==mNow && dFile>dNow)) {
				--years;
			}
			if (!ages[years]) {
				ages[years]=1;
			} else {
				++ages[years];
			}
			oldest=Math.max(years,oldest);
		}
	});
	for(var i=0;i<ages.length;++i) {
		if (!ages[i]) ages[i]=0;
	}
	var yMax=Math.max.apply(null,ages);
	var graph=jQ("<table id='theasisMyUploadsFileAgeAnalysisGraph'/>");
	var graphSize=180;
	for(var i=0;i<=oldest;++i) {
		var row=jQ("<tr>");
		row.append(jQ("<td style='text-align:right; font-size:90%; white-space:nowrap;'>"+i+"-"+(i+1)+"&nbsp;yr</td>"));
		var num = ages[i]?ages[i]:0;
		var pix = Math.round(graphSize*num/yMax);
		row.append(jQ("<td>").append(jQ("<div style='width:"+pix+"px;height:16px;background-color:#ddf;border:1px solid #88c;font-size:80%;text-align:center;vertical-align:middle;'>").attr({title:""+num}).text(num)));
		graph.append(row);
	}
	var ageDiv=jQ("<div>").append(jQ("<h1>").text("Age Analysis").css({"padding-top":"2em"})).append(graph);
	
	// DLs
	var limits=[0,3,10,30,100,300,1000];
	var dlRange=[];
	var highest=0;
	rows.each(function(){
		var cols = jQ(this).children("td");
		var dls = cols.eq(columns.dls.position).children("a").eq(0).text();
		if (dls) {
			var d=parseInt(dls,10);
			var lim=0;
			for(var i=limits.length-1;i>0;--i) {
				if (d>=limits[i]) {
					lim=i;
					break;
				}
			}
			if (!dlRange[lim]) {
				dlRange[lim]=1;
			} else {
				++dlRange[lim];
			}
			highest=Math.max(lim,highest);
		}
	});
	for(var i=0;i<dlRange.length;++i) {
		if (!dlRange[i]) dlRange[i]=0;
	}
	yMax=Math.max.apply(null,dlRange);
	graph=jQ("<table id='theasisMyUploadsFileDLAnalysisGraph'/>");
	for(var i=0;i<=highest;++i) {
		var row=jQ("<tr>");
		var label="1000+&nbsp;DL";
		if (limits[i]<1000) {
			label="" + limits[i] + "-" + (limits[i+1]-1) + "&nbsp;DL";
		}
		row.append(jQ("<td style='text-align:right; font-size:90%; white-space:nowrap;'>"+label+"</td>"));
		var num = dlRange[i]?dlRange[i]:0;
		var pix = Math.round(graphSize*num/yMax);
		row.append(jQ("<td>").append(jQ("<div style='width:"+pix+"px;height:16px;background-color:#ddf;border:1px solid #88c;font-size:80%;text-align:center;vertical-align:middle;'>").attr({title:""+num}).text(num)));
		graph.append(row);
	}
	var dlDiv=jQ("<div>").append(jQ("<h1>").text("DL Analysis").css({"padding-top":"2em"})).append(graph);
	
	// Collections
	var collection={};
	rows.each(function() {
		var cols = jQ(this).children("td");
		var cltn = cols.eq(columns.collection.position).find("span").attr("title");
		collection[cltn]=collection[cltn]?collection[cltn]+1:1;
	});
	graph=jQ("<table id='theasisMyUploadsFileCollectionAnalysisGraph'/>");
	var colKeys=Object.keys(collection).sort();
	yMax=1;
	for(var i=0;i<colKeys.length;++i) { yMax=Math.max(yMax,collection[colKeys[i]]); }
	for(var i=0;i<colKeys.length;++i) {
		var row=jQ("<tr>");
		var label=colKeys[i].replace("nature","");
		row.append(jQ("<td style='text-align:right; font-size:90%; white-space:nowrap;'>"+label+"</td>"));
		var num=collection[colKeys[i]];
		var pix = Math.round(graphSize*num/yMax);
		row.append(jQ("<td>").append(jQ("<div style='width:"+pix+"px;height:16px;background-color:#ddf;border:1px solid #88c;font-size:80%;text-align:center;vertical-align:middle;'>").attr({title:""+num}).text(num)));
		graph.append(row);
	}
	var colDiv=jQ("<div>").append(jQ("<h1>").text("Collection Analysis").css({"padding-top":"2em"})).append(graph);
	jQ("#theasis_myUploads_analysisGraphs").remove();
	jQ("#wrapper").append(jQ("<table id='theasis_myUploads_analysisGraphs'>").append(jQ("<tr>").append(jQ("<td>").append(ageDiv)).append(jQ("<td>").append(dlDiv)).append(jQ("<td>").append(colDiv))));
};
loadRecentSales = function() {
	var doELs = getVal("fetchELs");
	var doRCs = getVal("calculateRCTotals") & (getVal("numberOfDaysTotalled")>0);
	jQ("#theasis_myUploads_requestSalesData").unbind('click').attr({src:'https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|ccc|FFF'}).css({cursor:"default"});
	jQ(".data:first").find("tr:gt(0)").each(function(){
		var cols = jQ(this).children("td");
		var target = cols.eq(columns.lastdl.position);
		var a = cols.eq(columns.dls.position).children("a:first");
		var loading = jQ("<div><img src='//i.istockimg.com/static/images/loading.gif' style='width:12px;height:12px;'}/></div>");
		if (a.length==0) {
			var href = cols.eq(columns.file.position).children("a:first").attr("href");
			var match = /id=(\d+)/.exec(href);
			if (!match) return;
			loading.attr({id:"theasis_recentSales_target"+match[1]}).appendTo(target);
			checkInspectionStatus(href,match[1]);
		} else if (parseInt(a.text(),10)>0) {
			var href = a.attr("href");
			var match = /id=(\d+)/.exec(href);
			if (!match) return;
			var fid = match[1];
			loading.attr({id:"theasis_recentSales_target"+fid}).appendTo(target);
			if (doRCs) loadFileRCLUT(fid);
			loadRecentDls(a,doELs);
		}
	});	
};
loadRecentSubs = function() {
	jQ("#theasis_myUploads_requestSubsData").unbind('click').attr({src:'https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|ccc|FFF'}).css({cursor:"default"});
	jQ("table:gt(0)").find("tr:gt(0)").each(function(){
		var cols = jQ(this).children("td");
		var target = cols.eq(5);
		var fid = cols.eq(1).children("a:first").text();
		var loading = jQ("<div><img src='//i.istockimg.com/static/images/loading.gif' style='width:12px;height:12px;'}/></div>");
		if (fid) {
			var href = "/file_downloads.php?PageSetting=Subscriptions&id="+fid;
			loading.attr({id:"theasis_recentSubs_target"+fid}).appendTo(target);
			loadRecentSubsDetails(href);
		}
	});	
};
loadDLsMoDetails = function() {
	jQ("#theasis_myUploads_requestDLsPerMonData").unbind('click').attr({src:'https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|ccc|FFF'}).css({cursor:"default"}).before(" ($/mo)");
	var i=-1;
	var idx=-1;
	var cols = jQ(".data:first tr:eq(0) th");
	for(i=0;i<cols.length;++i) {
		if (cols.eq(i).text()=="DLs/mo ($/mo)") {
			idx=i;
			break;
		}
	}
	if (idx>=0) {
		jQ(".data:first").find("tr:gt(0)").each(function(){
			var cols = jQ(this).children("td");
			var dlmoCol = cols.eq(idx);
			var a = dlmoCol.children("a:first");
			if (a.length) {
				var ulDate="00000000";
				var ulSpan=cols.eq(columns.uploaded.position).find("span:first");
				if (ulSpan.length) {
					var match = /@(\d{2})\/(\d{2})\/(\d{4})@/.exec(ulSpan.text());
					if (match) {
						ulDate=""+match[3]+pad(match[2])+pad(match[1]);
					}
				}
				var href=a.attr("href");
				var match = /id=(\d+)/.exec(href);
				if (!match) return;
				var fid=match[1];
				var html = dlmoCol.html();
				var now = new Date();
				var yr0=now.getFullYear();
				var mn0=1+now.getMonth();
				var dy=pad(now.getDate());
				var mn3=mn0-3;
				var yr3=yr0;
				if (mn3<1) {
					mn3+=12;
					yr3--;
				}
				var mn6=mn0-6;
				var yr6=yr0;
				if (mn6<1) {
					mn6+=12;
					yr6--;
				}
				var today = "" + yr0 + pad(mn0) + dy;
				var then3 = "" + yr3 + pad(mn3) + dy;
				var then6 = "" + yr6 + pad(mn6) + dy;
				var then12 = "" + (yr0-1) + pad(mn0) + dy;
				
				dlmoCol.html("<div id='theasis_dlmoData_"+fid+"'>All:&nbsp;"+html+"</div>");
				jQ.ajax({
					url:href,
					success:function(data) {
						calculateDLsPerMonth(data,0,0,0,0,0,0,then12,then6,then3,ulDate,fid,2);
					}
				});
			}
		});
	}
};
calculateDLsPerMonth = function(data,total12,total6,total3,roy12,roy6,roy3,then12,then6,then3,ulDate,fid,page) {
	var href='/file_downloads.php?id='+fid+'&page='+page;
	var done=false;
	var html=jQ(data);
	var table=html.find("table.reporttable:first");
	if (table.length) {
		var rows=table.find("tr:gt(0)");
		if (rows.length) {
			rows.each(function(){
				jQ(this).find("td:first").each(function(){
					var me=jQ(this);
					var dt=me.text();
					var rt=jQ("td:last",me.parent()).text();
					var dmatch=/(\d{2})\/(\d{2})\/(\d{4})\D/.exec(dt);
					var rmatch=/\$(\d+\.\d{2})\D/.exec(rt);
					if (dmatch) {
						var saleDate=""+dmatch[3]+pad(dmatch[2])+pad(dmatch[1]);
						if (then12<=saleDate) {
							total12++;
							if (rmatch) roy12+=parseFloat(rmatch[1]);
						} else {
							done=true;
							return;
						}
						if (then6<=saleDate) {
							total6++;
							if (rmatch) roy6+=parseFloat(rmatch[1]);
						}
						if (then3<=saleDate) {
							total3++;
							if (rmatch) roy3+=parseFloat(rmatch[1]);
						}
					} else {
						done=true;
					}
				});
			});
		} else {
			done=true;
		}
	} else {
		done=true;
	}
	if (done) {
		var dlmoCell=jQ("#theasis_dlmoData_"+fid);
		var royCell=dlmoCell.parent().parent().children("td").eq(columns.royalties.position);
		var dlCell=dlmoCell.parent().parent().children("td").eq(columns.dls.position);
		var dlCellImg=dlCell.children("img").eq(0);
		var dlCellStr;
		if (then12>=ulDate) {
			dlmoCell.append("<br/>1y:&nbsp;"+((total12/12).toFixed(1))+"&nbsp;($"+((roy12/12).toFixed(2))+")");
			royCell.append("<br/>1y:&nbsp;$"+roy12.toFixed(2));
			dlCellStr="1y:&nbsp;"+total12+"<br/>";
			if (dlCellImg.length>0) {
				dlCellImg.before(dlCellStr);
			} else {
				dlCell.append("<br/>"+dlCellStr);
			}
		}
		if (then6>=ulDate) {
			dlmoCell.append("<br/>6m:&nbsp;"+((total6/6).toFixed(1))+"&nbsp;($"+((roy6/6).toFixed(2))+")");
			royCell.append("<br/>6m:&nbsp;$"+roy6.toFixed(2));
			dlCellStr="6m:&nbsp;"+total6+"<br/>";
			if (dlCellImg.length>0) {
				dlCellImg.before(dlCellStr);
			} else {
				dlCell.append(dlCellStr);
			}
		}
		if (then3>=ulDate) {
			dlmoCell.append("<br/>3m:&nbsp;"+((total3/3).toFixed(1))+"&nbsp;($"+((roy3/3).toFixed(2))+")");
			royCell.append("<br/>3m:&nbsp;$"+roy3.toFixed(2));
			dlCellStr="3m:&nbsp;"+total3+"<br/>";
			if (dlCellImg.length>0) {
				dlCellImg.before(dlCellStr);
			} else {
				dlCell.append(dlCellStr);
			}
		} else {
			dlmoCell.append("<br/><3m");
		}
	} else {
		jQ.ajax({
			url:href,
			success:function(data) {
				calculateDLsPerMonth(data,total12,total6,total3,roy12,roy6,roy3,then12,then6,then3,ulDate,fid,page+1);
			}
		});
	}
};
pad = function(n) {
  n = n + '';
  return n.length >= 2 ? n : new Array(2 - n.length + 1).join('0') + n;
}
loadRoyaltyDetails = function() {
	jQ("#theasis_myUploads_requestRoyaltyData").unbind('click').attr({src:'https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|ccc|FFF'}).css({cursor:"default"});
	jQ(".data:first").find("tr:gt(0)").each(function(){
		var cols = jQ(this).children("td");
		var royCol = cols.eq(columns.royalties.position);
		var a = royCol.children("a:first");
		if (a.length) {
			var href=a.attr("href");
			var match = /id=(\d+)/.exec(href);
			if (!match) return;
			var fid=match[1];
			var html = royCol.html();
			var match=/(\$\d+\.\d{2})/.exec(royCol.text());
			var roy=match?match[1]:"$0.00";
			royCol.html("<div id='theasis_royaltyData_"+fid+"'><span class='theasis_royType'>iS</span>:&nbsp;"+html+"</div>");
			jQ.ajax({
				url:href,
				success:function(data) {
					var html=jQ(data);
					var table=html.find("table.t:first");
					if (table.length) {
						var para=table.find("p:contains('USD'):first").text();
						var match=/(\$\d+\.\d{2})\s*USD/.exec(para);
						if (match) {
							var total=match[1];
							if (total!=roy) {
								total="<span style='font-weight:bold; background-color:#ffd; color:#633;'>"+total+"</span>";
								jQ("#theasis_royaltyData_"+fid).append("<br/>Total:&nbsp;"+total);
							} else {
								jQ("#theasis_royaltyData_"+fid+" span.theasis_royType").text("Total");
							}
						}
					}
				}
			});
		}
	});
};
checkInspectionStatus = function(href,id) {
	var target=jQ("#theasis_recentSales_target"+id);
	if (!target.length) return;
	jQ.ajax({
		url:href,
		success:function(data) {
			var html = jQ(data);
			var fullPage = html.find(".fullPage");
			if (fullPage.length) {
				if (fullPage.find("form").length==0 && fullPage.find("p").length) {
					// locked
					target.html("<img src='//i.istockimg.com/static/images/blank.gif' width='12' height='12' class='icons lock'><span>Locked</span>");
				} else {
					var vettaNomCheckbox = fullPage.find("#premiereNominationCheckbox");
					if (vettaNomCheckbox.length>0 && vettaNomCheckbox.prop('checked')) {
						target.html("<i>Vetta</i>");
					} else {
						target.html("");
					}
				}
			} else {
				target.html("");
			}
		},
		failure: function() {
			target.html("No response");
		}
	});
};
loadRecentOffsiteSales = function(table,dlcol,acol,id,setting) {
	jQ(id).unbind('click').attr({src:'https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|12|000|glyphish_download|12|ccc|FFF'}).css({cursor:"default"});
	table.find("tr:gt(0)").each(function(){
		var cols = jQ(this).children("td");
		var target = cols.eq(dlcol);
		var a = cols.eq(acol).children("a:first");
		if (parseInt(a.text(),10)>0) {
			var href = a.attr("href");
			href = href.replace("closeup_edit.php?","downloads.php?PageSetting="+setting+"&order=Date&");
			var match = /id=(\d+)/.exec(href);
			if (!match) return;
			jQ("<div>Loading...</div>").attr({id:"theasis_recentSales_target"+match[1]}).appendTo(target);
			loadRecentOffsiteDls(href);
		}
	});	
};
processOffsiteSales = function(data) {
	var html = jQ(data);
	var match = /stock-\w+-(\d+)/.exec(html.find("table.t").find('img[src*="/stock-"]:first').attr("src"));
	if (!match) return;
	var targetId=match[1];
	var target=jQ("#theasis_recentSales_target"+targetId);
	if (!target.length) return;
	target.html("");
	var tid="theasisMyUploadsSales"+targetId;
	var olderDiv=jQ("<div>").attr({"id":tid}).hide();
	var currentDiv=jQ("<div>");
	var lastSaleDate="";
	var table = html.find(".reporttable:first");
	if (table.length==0) {
		table = html.find("table").eq(1);
	}
	var saleCount=0;
	table.find("tr:gt(0)").each(function(){
		var cols = jQ(this).find("td");
		var sale = jQ("<div class='theasisEarlierSales'>" + jQ.trim(cols.eq(1).text()) + ": " + jQ.trim(cols.eq(2).text().replace("USD","")) + "</div>");
		var thisSaleDate=cols.eq(0).text().substr(0,10);
		var targetDiv = (saleCount++ <3) ? currentDiv : olderDiv;
		if (thisSaleDate!=lastSaleDate) {
			lastSaleDate=thisSaleDate;
			var fDate=thisSaleDate;
			try {
				fDate=formatDateStr(thisSaleDate, true)[1];
			} catch (e) {
				// don't care
			}
			targetDiv.append(jQ("<div class='theasisEarlierSalesDate'>" + fDate + "</div>"));
		}
		sale.appendTo(targetDiv);
	});
	currentDiv.appendTo(target);
	if (saleCount>3) {
		olderDiv.appendTo(target);
		setSalesReveal(target,tid);
	}
};
loadRecentOffsiteDls = function(href) {
	jQ.ajax({
		url:href,
		success:processOffsiteSales
	});
};
loadRecentEls = function(a) {
	jQ.ajax({
		url:a.attr("href")+"&PageSetting=ExtendedLicense&page=1&order=Date",
		success:function(data) {
			var html = jQ(data);
			var match = /-(\d+)/.exec(html.find("table.t").find('a[href*="istockphoto"]:first').attr("href"));
			if (!match) return;
			var target=jQ("#theasis_recentSales_target"+match[1]);
			if (!target.length) return;
			var targetDate = target.parent().find("span:first").text().substr(1,10);
			var table = html.find(".reporttable:first");
			table.find("tr:gt(0):lt(3)").each(function(){
				var cols = jQ(this).find("td");
				var date = jQ.trim(cols.eq(1).text()).substr(0,10);
				var royalty = jQ.trim(cols.eq(3).text().replace("USD",""));
				recordRecentSale(date,royalty);
				try {
					date = formatDateStr(date, true)[1];
				} catch (e) {
					// don't care
				}
				jQ("<div style='font-size:80%;white-space:nowrap;'>EL: " + date + ": " + royalty + "</div>").appendTo(target);
			});
		}
	});
};
loadRecentDls = function(a,doELs) {
	jQ.ajax({
		url:a.attr("href"),
		success:function(data) {
			var html = jQ(data);
			var match = /stock-\w+-(\d+)/.exec(html.find("table.t").find('img[src*="/stock-"]:first').attr("src"));
			if (!match) return;
			var targetId=match[1];
			var target=jQ("#theasis_recentSales_target"+targetId);
			if (!target.length) return;
			target.html("");
			var targetDate = target.parent().find("span:first").text().substr(1,10);
			var tid="theasisMyUploadsSales"+targetId;
			var olderDiv=jQ("<div>").attr({"id":tid}).hide();
			var currentDiv=jQ("<div>");
			var lastSaleDate="";
			var oldSaleCount=0;
			var table = html.find(".reporttable:first");
			table.find("tr:gt(0)").each(function(){
				var cols = jQ(this).find("td");
				var royalty = jQ.trim(cols.eq(3).text().replace("USD",""));
				var size = jQ.trim(cols.eq(1).text().replace(/ \([^)]+\)/,""));
				var sale = jQ("<div style='font-size:80%;white-space:nowrap;'>" + size + ": " + royalty + "</div>");
				var thisSaleDate=cols.eq(0).text().substr(0,10);
				recordRecentSale(thisSaleDate,royalty,size,targetId);
				if (thisSaleDate==targetDate) {
					sale.appendTo(currentDiv);
				} else {
					if (thisSaleDate!=lastSaleDate) {
						lastSaleDate=thisSaleDate;
						var fDate=thisSaleDate;
						try {
							fDate=formatDateStr(thisSaleDate, true)[1];
						} catch (e) {
							// don't care
						}
						olderDiv.append(jQ("<div style='font-size:80%;white-space:nowrap;font-weight:bold;'>" + fDate + "</div>"));
						oldSaleCount++;
					}
					sale.appendTo(olderDiv);
				}
			});
			currentDiv.appendTo(target);
			if (oldSaleCount) {
				olderDiv.appendTo(target);
				setSalesReveal(target,tid);
			}
			if (doELs) {
				loadRecentEls(a);
			}
		}
	});
};
loadRecentSubsDetails = function(href) {
	jQ.ajax({
		url:href,
		success:function(data) {
			var html = jQ(data);
			var match = /stock-\w+-(\d+)/.exec(html.find("table.t").find('img[src*="/stock-"]:first').attr("src"));
			if (!match) return;
			var targetId=match[1];
			var target=jQ("#theasis_recentSubs_target"+targetId);
			if (!target.length) return;
			target.html("");
			var targetDate = target.parent().find("span:first").text().substr(1,10);
			var tid="theasisMyUploadsSales"+targetId;
			var olderDiv=jQ("<div>").attr({"id":tid}).hide();
			var currentDiv=jQ("<div>");
			var lastSaleDate="";
			var oldSaleCount=0;
			var table = html.find(".reporttable:first");
			table.find("tr:gt(0)").each(function(){
				var cols = jQ(this).find("td");
				var royalty = jQ.trim(cols.eq(2).text().replace("USD",""));
				var sale = jQ("<div style='font-size:80%;white-space:nowrap;'>" + royalty + "</div>");
				var thisSaleDate=cols.eq(1).text().substr(0,10);
				if (thisSaleDate==targetDate) {
					sale.appendTo(currentDiv);
				} else {
					if (thisSaleDate!=lastSaleDate) {
						lastSaleDate=thisSaleDate;
						var fDate=thisSaleDate;
						try {
							fDate=formatDateStr(thisSaleDate, true)[1];
						} catch (e) {
							// don't care
						}
						olderDiv.append(jQ("<div style='font-size:80%;white-space:nowrap;font-weight:bold;'>" + fDate + "</div>"));
						oldSaleCount++;
					}
					sale.appendTo(olderDiv);
				}
			});
			currentDiv.appendTo(target);
			if (oldSaleCount) {
				olderDiv.appendTo(target);
				setSalesReveal(target,tid);
			}
		}
	});
};
recordRecentSale = function(saleDate,royalty,size,fid) {
	debug("recordRecentSale " + saleDate + " " + royalty + " " + size + " " + fid);
	var numDays=getVal("numberOfDaysTotalled");
	if (numDays<1) return;
	var when=saleDate.slice(6)+saleDate.slice(3,5)+saleDate.slice(0,2);
	var cents=0;
	var match=/\$(\d[\d,]*)\.(\d+)/.exec(royalty);
	if (match) {
		cents += parseInt(match[1].replace(",",""),10)*100 + parseInt(match[2],10);
	}
	var rcs;
	var pendingrcs;
	try {
		rcs=fileRCLUT[fid];
	} catch(e) {
		debug("No LUT entry");
		// no LUT entry - fall through with unrecorded credits
	}
	if (typeof rcs !== 'number' || isNaN(rcs)) {
		if (fid) {
			pendingrcs=fid;
		}
		rcs = 0;
	}
	if (dailySalesStats[when]) {
		dailySalesStats[when].dls++;
		dailySalesStats[when].cents += cents;
		dailySalesStats[when].rcs += rcs;
		if ( pendingrcs ) dailySalesStats[when].pendingrcs.push(pendingrcs);
	} else {
		dailySalesStats[when] = { dls:1, cents:cents, rcs:rcs, pendingrcs:pendingrcs?[pendingrcs]:[], fdate:formatDateStr(saleDate, true)[1] };
	}
	debug("recordRecentSale done: "+when+" dls:"+dailySalesStats[when].dls+" rcs:"+dailySalesStats[when].rcs+" pending:"+dailySalesStats[when].pendingrcs);
	doDailySalesStats();
};
doDailySalesStats = function() {
	var numDays=getVal("numberOfDaysTotalled");
	var rows="";
	var dates = Object.keys(dailySalesStats).sort();
	var downTo=Math.max(0,dates.length-numDays);
	var rcs, tmpRcs;
	for(var i=dates.length-1;i>=downTo;--i) {
		for(var p=0;p<dailySalesStats[dates[i]].pendingrcs.length;++p) {
			try {
				debug("pending dailySalesStats for "+dailySalesStats[dates[i]].pendingrcs[p]+": "+fileRCLUT[dailySalesStats[dates[i]].pendingrcs[p]]);
				dailySalesStats[dates[i]].rcs = dailySalesStats[dates[i]].rcs ? dailySalesStats[dates[i]].rcs : 0;
				tmpRcs = fileRCLUT[dailySalesStats[dates[i]].pendingrcs[p]];
				if (typeof tmpRcs === 'number' && !isNaN(tmpRcs)) {
					dailySalesStats[dates[i]].rcs += tmpRcs;
					dailySalesStats[dates[i]].pendingrcs[p]=0;
				}
				debug("dailySalesStats["+dates[i]+"] rcs is now "+dailySalesStats[dates[i]].rcs);
			} catch (e) {
				console.log("ERROR:"+e);
				// LUT hasn't been filled in yet - that's OK
			}
		}
		rcs = "<td style='text-align:right; padding:1px 4px;'>" + dailySalesStats[dates[i]].rcs + " RCs </td>";
		var roy = "$"+(dailySalesStats[dates[i]].cents/100).toFixed(2);
		rows += "<tr><td style='text-align:right; padding:1px 4px; font-weight:bold;'>"+dailySalesStats[dates[i]].fdate+"</td><td style='text-align:right; padding:1px 4px;'>"+dailySalesStats[dates[i]].dls+" DLs </td>"+rcs+"<td style='text-align:right; padding:1px 4px;'>"+roy+" </td></tr>";
	}
	var table="<table style='width:290px; background-color:#088595; color:#fff;'>"+rows+"</table>";
	var target=jQ("#theasis_myUploads_dailyTotalsContainer");
	if (!target.length) {
		var wrapper = jQ("#wrapper");
		if (!wrapper) return;
		jQ("<div id='theasis_myUploads_dailyTotalsContainer' style='float:right;'>").prependTo(wrapper);
		target=jQ("#theasis_myUploads_dailyTotalsContainer");
		if (!target.length) return;
	}
	target.html(table);
};
setSalesReveal = function(target,tid) {
	target.parent().mouseenter(function(){
		jQ("#"+tid).stop().show({duration:200,easing:"linear"});
	}).mouseleave(function(){
		jQ("#"+tid).stop().hide({duration:200,easing:"linear"});
	});
};
reformatCollections = function(html) {
	var table = getTable(html);
	var rows = jQ("tr",table);
	if (rows.eq(0).children('th').eq(3).children('a[href*="collection"]').length==0) {
		jQ('<th><a href="/my_uploads.php?order=collectionD">Collection</a></th>').insertBefore(rows.eq(0).children('th').eq(3));
		rows.not(":first").each(function(){jQ("<td>").insertBefore(jQ(this).children('td').eq(3));});
	}
	var cols;
	rows.not(":first").each(function(){
		cols=jQ(this).children('td');
		var icon = cols.eq(0).children("a:eq(1)");
		var title="?";
		var txt="?";
		var colour="#33c";
		var colText = cols.eq(3).text().trim();
		if (!cols) {
			title="cols is null";
		} else {
			title="len:"+cols.length+"; text -" +colText+"-";
		}
		if (cols.eq(3).text()=="Essentials") {
			title="Essentials";
			colour="#ddd";
			txt="E";
		} else if (cols.eq(3).text()=="Signature") {
			title="Signature";
			colour="#dff";
			txt="S";
		} else if (cols.eq(3).text()=="Signature+") {
			title="Signature+";
			colour="#ffd";
			txt="+";
		}
		var icon = jQ("<span title='"+title+"' style='color:#333 ; background-color:"+colour+"; font-size:100%; font-weight:bold; text-align:center; border:1px solid #333; padding: 0.2em 0.3em; border-radius: 0.5em;'>"+txt+"</span>");
		cols.eq(3).html(icon);
	});
};
repositionColumn = function(from,to,html) {
	var table = getTable(html);
	var rows = jQ("tr",table);
	var cols;
	rows.each(function() { cols = jQ(this).children('th, td'); cols.eq(from).detach().insertAfter(cols.eq(to)); } );
	findColumns();
};
repositionLastDl = function(html) { 
	if (!getVal("lastDlColumn")) return;
	// if we're on the original page (i.e. html is undefined) use position, else use the origposition
	repositionColumn(html?columns.lastdl.origposition:columns.lastdl.position,lastColumn,html);
};
restoreLastDl = function() {
	repositionColumn(columns.lastdl.position,columns.lastdl.origposition-1);
};
flipLastDlPos = function() {
	if (getVal("lastDlColumn")) {
		repositionLastDl();
	} else {
		restoreLastDl();
	}
};
checkAndShowColumns = function() {
	var show=JSON.parse(getVal("columns"));
	jQ("#theasisSettings_"+settings.columns.key).find("input").each(function(){
		show[jQ(this).attr("name")]=(jQ(this).prop('checked')?1:0);
	});
	setVal("columns",JSON.stringify(show));
	showColumns();
};
checkBalance = function() {
	if (!getVal("checkForNewSales")) return;
	jQ.ajax({
		url:"/help/site-map",
		success:processBalance
	});
	if (!window.theasis_dontCheckBalance) window.setTimeout(checkBalance,5*60*1000); // 5 mins
};

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var settings = {
	loupe: {
		key:"myUploads_loupeOn",
		def:true,
		type:"check",
		label:"Show loupe"
	},
	lastDlColumn: {
		key:"myUploads_moveLastDl",
		def:true,
		type:"check",
		label:"Move <b>Last DL</b> column to end",
		runOnChange:flipLastDlPos
	},
	loupeTitle: {
		key:"myUploads_showTitleInLoupe",
		def:true,
		type:"check",
		label:"Show file title in loupe"
	},
	loupeDescription: {
		key:"myUploads_showDescriptionInLoupe",
		def:false,
		type:"check",
		label:"Show file description in loupe"
	},
	suppressTooltips: {
		key:"myUploads_suppressTooltips",
		def:false,
		type:"check",
		label:"Suppress thumbnail tooltips"
	},
	fetchELs: {
		key:"myUploads_fetchELs",
		def:false,
		type:"check",
		label:"Fetch latest ELs"
	},
	salesGraphs: {
		key:"myUploads_salesGraphs",
		def:true,
		type:"check",
		label:"Show sales graphs"
	},
	showSaleInToolbar: {
		key:"myUploads_showSaleInToolbar",
		def:true,
		type:"check",
		label:"Show latest sale in the toolbar"
	},
	showRCsInToolbar: {
		key:"myUploads_showRCsInToolbar",
		def:true,
		type:"check",
		label:"Show RCs for latest sale in the toolbar"
	},
	showELInToolbar: {
		key:"myUploads_showELInToolbar",
		def:true,
		type:"check",
		label:"Show latest sale's most recent EL in the toolbar"
	},
	tenThumbs: {
		key:"myUploads_showTenThumbs",
		def:true,
		type:"check",
		label:"Latest DL loupe shows 9 previous DLs"
	},
	editButtons: {
		key:"myUploads_removeEditButtons",
		def:true,
		type:"check",
		label:"Remove <b>Edit</b> buttons"
	},
	unfinishedUploads: {
		key:"myUploads_unfinishedUploads",
		def:true,
		type:"check",
		label:"Improve <b>Unfinished Uploads</b> management"
	},
	unfinishedOnMyUploads: {
		key:"myUploads_unfinishedOnMyUploads",
		def:true,
		type:"check",
		label:"Also show <b>Unfinished Uploads</b> on the <i>My Uploads</i> first page"
	},
   thumbsize: {
		key:"myUploads_thumbnailsize",
		def:70,
		type:"spinner",
		spinnerVals:[30,50,70,90,110],
		spinnerLabels:["30px","50px","70px","90px","110px"],
		label:"Thumbnail width",
		runOnChange:resizeThumbs
    },
	columns: {
		key:"myUploads_visibleColumns",
		def:JSON.stringify({"file":1,"uploaded":1,"editorial":1,"collection":1,"views":1,"royalties":1,"dlsmo":1,"dls":1,"lastdl":1}),
		type:"columns",
		label:"Show columns",
		runOnChange:checkAndShowColumns
	},
	linkButtons: {
		key:"myUploads_visibleLinkButtons",
		def:JSON.stringify({
			details:[1,"DL","Details"],				// [  show/don't show, button label, settings label, link  ]
			subs:[1,"Sub","Subscriptions"],
			elearnings:[1,"EL","EL Earnings"],
			elinfo:[1,"EL Info","EL Info"],
			partner:[1,"PP","Partner Program"],
			getty:[1,"GI","Getty Images"],
			design:[1,"Design","Designs"],
			prints:[0,"Print","Prints"],
			lightboxes:[0,"LB","Lightboxes"],
			disambiguation:[0,"DA","Disambiguation"],
//			plus:[1,"Plus","E+/Photo+"],
			portfolio:[1,"Port","Portfolio"]
		}),
		type:"links",
		label:"Show links"
	},
	numberOfDaysTotalled: {
		key:"myUploads_numberOfDaysTotalled",
		def:3,
		type:"spinner",
		spinnerVals:[0,1,2,3,4,5,6,7,8,9,10],
		spinnerLabels:['No Totals','1 Day','2 Days','3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days','10 Days'],
		label:"Number of days' totals to show"
	},
	checkForNewSales: {
		key:"myUploads_checkForNewSales",
		def:5,
		type:"spinner",
		spinnerVals:[0,5,15,30,60],
		spinnerLabels:['Never','Every 5 minutes','Every 15 minutes','Every 30 minutes','Every hour'],
		label:"Check for new sales",
		runOnChange:checkBalance
	},
	newSalesNotification: {
		key:"myUploads_newSalesNotification",
		def:false,
		type:"check",
		label:"Play notification sound for new sales"
	},
	reportLoggedOut: {
		key:"myUploads_reportLoggedOut",
		def:true,
		type:"check",
		label:"Report if logged out (requires 'Check for new sales')"
	},
	calculateRCTotals: {
		key:"myUploads_calculateRCTotals",
		def:true,
		type:"check",
		label:"Calculate RC totals"
	},
	showViewChanges: {
		key:"myUploads_showViewChanges",
		def:true,
		type:"check",
		label:"Show when 'Views' change"
	},
	showRoyaltyTotals: {
		key:"myUploads_showRoyaltyTotals",
		def:false,
		type:"check",
		label:"Always show totals in the Royalties column"
	},
	sortLBPage: {
		key:"myUploads_sortLBPage",
		def:true,
		type:"check",
		label:"The LB page sorts by Age"
	},
	showSaleSize: {
		key:"myUploads_showSaleSize",
		def:true,
		type:"check",
		label:"Show the size of the latest sale"
	},
	debug: {
		key:"myUploads_debug",
		def:false,
		type:"check",
		label:"Debugging Mode",
		runOnChange:setDebugMode
	},
	dateFormat: {
		key:"myUploads_dateFormat",
		def:1,
		type:"spinner",
		spinnerVals:[0,1,2,3,4],
		spinnerLabels:['MM/DD/YYYY (e.g. 2/27/2013)','DD/MM/YYYY (e.g. 27/2/2013)','MON DD,YYYY (e.g. Feb 27,2013)','DD MON YYYY (e.g. 27 Feb 2013)','YYYY-MM-DD (e.g. 2013-02-27'],
		label:"Date format",
		runOnChange:reformatDates
	}
};
findColumns = function() {
	var pos=0;
	var table = getTable();
	if (table.length==0) return;
	table.find("tr:first").find("th").each(function(){
		var colName;
		if (pos==0) { // assumption: the file column is first
			colName="file";
		} else {
			var href = jQ(this).children("a").attr("href");
			if (href) {
				for(var c in columns) {
					if ( (columns[c].link && href.indexOf("order="+columns[c].link)!=-1) ||
						 (columns[c].rest_link && href.indexOf(columns[c].rest_link)!=-1) ) {
						colName=c;
						break;
					}
				}
			}
		}
		pos++;
		if (!colName) return;
		var txt = jQ(this).text();
		if (txt) columns[colName].name=txt;
		columns[colName].position=pos-1;
		if (!columns[colName].hasOwnProperty("origposition")) columns[colName].origposition=columns[colName].position;
	});
	lastColumn=pos-1;
};
showColumns = function(html) {
	var vis=JSON.parse(getVal("columns"));
	var table = getTable(html);
	var rows = jQ("tr",table);
	var cols;
	for(var c in columns) {
		if (columns[c].hasOwnProperty("position") && !(typeof vis[c] === undefined)) {
			var pos = columns[c].position;
			var show=(vis[c]==0)?"none":"table-cell";
			rows.each(function() { cols = jQ(this).children('th, td'); cols.eq(pos).css({display:show,"text-align":"center"}); } );
		}
	}
};
prepareNextPage = function(html) {
	var nextPage=jQ('a[accesskey="n"]:first',html).attr('href');
	if (nextPage) {
		var table = getTable();
		jQ("<div>").css({float:"right",clear:"both"}).insertAfter(table);
		jQ("<input>").attr({type:"submit",value:"Load More",class:"btnCta0"}).css({float:"right",clear:"both"}).click(function(){
			jQ("<div>Loading...</div>").attr({id:theasisMyUploadsNextPageLoadingId}).insertAfter(table);
			jQ.ajax({
				url:nextPage,
				success:insertNextPage
			});
			jQ(this).remove();
		}).insertAfter(table);
	}
};
insertNextPage = function(data) {
	var table = getTable();
	var html=jQ(data);
	reformatCollections(html);
	reformatDates(html);
	fixBasicTableDetails(html);
	fixTableDetails(html);
//	repositionLastDl(html);
	resizeThumbs(false,false,html);
	showColumns(html);
	var rows=html.find(".data:first").find("tr:gt(0)");
	table.append(rows);
	analyseSales();
	prepareNextPage(html);
	jQ("#"+theasisMyUploadsNextPageLoadingId).remove();
};
getVal = function(key) {
    var settingsObj=settings[key];
    var val = GM_getValue(settingsObj["key"],settingsObj.def);
    return val;
};
setVal = function(key,val) {
    var settingsObj=settings[key];
    GM_setValue(settingsObj["key"],val);
};
noGMConflict = function() {
	var ok = true;
	var text = "";
	if (jQ("#myUploads_optionsDiv").length) {
		text += "\nYou appear to have the old 'IS_myUploads_fixes' script installed.\nYou'll need to disable or uninstall that old script in order to use this new my_uploads script.\n";
		ok = false;
	}
	if (jQ(':button[name="addData"]').length) {
		var also = text.length>0 ? " also" : "";
		text += "\nYou" + also + " appear to have the old 'IS_myUploads_addData' script installed.\nYou'll need to disable or uninstall that old script in order to use this new my_uploads script.\n";
		ok = false;
	}
	if (!ok) {
		alert(text);
	}
	return ok;
};
loggedInUser = function(data) {
    var id=null;
    try {
		id = jQ("#myUploadsUserID",data).val();
    } catch(e) {
		// don't care
    }
	if ( !id && jQ("#headerLogout",data).length>0 ) {
		//don't know who we are, but we seem to be logged in!
		id = -1;
	}
	debug("loggedInUser: id="+id);
    return id;
};
addSettings=function(container,settingsKey) {
    var settingsObj = settings[settingsKey];
    var key = settingsObj.key;
    var run = settingsObj.runOnChange;
    var elId = "theasisSettings_"+key;
    var currentVal = getVal(settingsKey);
    var newEl;
    switch(settingsObj.type) {
    case "spinner":
		newEl=jQ("<select>").attr({id:elId}).change(function() {setVal(settingsKey,jQ(this).val()); if (run) run();});
		var seenCurrent=false;
		for(var i=0; i<settingsObj.spinnerVals.length; ++i) {
			var v = settingsObj.spinnerVals[i];
			var l = settingsObj.spinnerLabels[i];
			var option=jQ("<option>"+l+"</option>").val(v);
			if (v==currentVal) {
				seenCurrent=true;
				option.prop('selected',true);
			}
			option.appendTo(newEl);
		}
		if (!seenCurrent) {
			jQ("<option>"+currentVal+"</option>").val(currentVal).prop('selected',true).appendTo(newEl);
		}
		break;
	case "check":
		var chk = getVal(settingsKey);
		newEl=jQ("<input>").attr({type:"checkbox"}).prop('checked',chk).change(function() {setVal(settingsKey,jQ(this).prop('checked')); if (run) run();});
		break;
	case "columns": // really ugly special case
		var vis=JSON.parse(currentVal);
		newEl=jQ("<div>").attr({id:elId});
		for(var key in vis) {
			if (columns[key] && columns[key].name) {
				jQ("<input>").attr({type:"checkbox",name:key,value:key,checked:(vis[key]==1)}).css({"padding-left":"2em"}).change(function(){if (run) run();}).appendTo(newEl);
				jQ("<span>").text(columns[key].name).appendTo(newEl);
				jQ("<br>").appendTo(newEl);
			} else {
				console.log("No column for key "+key);
			}
		}
		break;
    }
    if (newEl) {
		var label = jQ("<span>"+settingsObj.label+": </span>");
		label.appendTo(container);
		newEl.appendTo(container);
		jQ("<br>").appendTo(container);
    }
};
addMyUploadsSettings = function(container) {
    addSettings(container,"loupe");
    addSettings(container,"loupeTitle");
    addSettings(container,"loupeDescription");
    addSettings(container,"suppressTooltips");
//    addSettings(container,"lastDlColumn");
    addSettings(container,"editButtons");
    addSettings(container,"fetchELs");
    addSettings(container,"salesGraphs");
    addSettings(container,"showSaleInToolbar");
    addSettings(container,"showRCsInToolbar");
    addSettings(container,"showELInToolbar");
    addSettings(container,"tenThumbs");
    addSettings(container,"unfinishedUploads");
    addSettings(container,"unfinishedOnMyUploads");
    addSettings(container,"showViewChanges");
    addSettings(container,"showRoyaltyTotals");
    addSettings(container,"dateFormat");
    addSettings(container,"thumbsize");
    addSettings(container,"numberOfDaysTotalled");
    addSettings(container,"calculateRCTotals");
    addSettings(container,"checkForNewSales");
    addSettings(container,"newSalesNotification");
    addSettings(container,"reportLoggedOut");
    addSettings(container,"columns");
    addSettings(container,"sortLBPage");
    addSettings(container,"showSaleSize");
    addSettings(container,"debug");
};

prepareSettingsDiv = function() {
    var settingsIcon = "https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|14|000|glyphish_gear|16|ffffff|FFF";
    //var panel = document.getElementById("panel-account");
    //panel.setAttribute("class","e_dropdownMenu navMenuHeader");
    var settingsID = "theasis_IS_Settings";
    var settingsDiv = jQ("#"+settingsID);
    if (!settingsDiv.length) {
		var settings = jQ('<img>').attr({
			id: settingsID+"Cog",
			src: settingsIcon,
			style: 'float:left; margin-right:8px; padding-top:4px; padding-bottom:4px; padding-left:6px; padding-right:0px;'
		}).click(function(e) { var l=e.pageX; var t=e.pageY-jQ(window).scrollTop();jQ('#'+settingsID).css({left:l,top:t}).stop().show('fast');}).addClass("btnCta1");
		var settingsDiv = jQ('<div><div class="h2withline" style="margin-top:-1.5em;">Settings</div></div>').attr('id',settingsID).attr( {style:'position:fixed;left:100px;top:100px;z-index:10000;background-color:#f0f8ff;border:2px solid #333;padding:4em; max-height:400px;overflow-y:scroll;'} ).stop().hide();
		var closeButtonTop = jQ('<img>').attr({
			src: "/static/images/blank.gif",
			id: settingsID+"CloseButtonTop"});
		closeButtonTop.click(function () { jQ('#'+settingsID).hide('fast'); }).addClass("modalClose").appendTo(settingsDiv);
		settingsDiv.appendTo('body');
		var wrapper = jQ("#wrapper");
		if (wrapper)
		   settings.prependTo(wrapper);
    }
    addMyUploadsSettings(settingsDiv);
}
doXnet = function() {
	if (getVal("unfinishedUploads")) {
		doUnfinishedUploads();
	}
};
doUnfinishedUploads = function(html,loc) { // look for any "Unfinished Uploads, move them to the top of the page and add a "Cancel" button
	var unfinished=jQ("div.unfinished",html);
	if (unfinished.length>0) {
		var container=unfinished.parent().parent().detach();
		container.css({width:"250px",border:"3px solid red","background-color":"#FEE",padding:"20px",margin:"10px"});
		container.find("h4").css({"font-weight":"bold","font-size":"160%"});
		unfinished.find("a.btnCta3").each(function(){
			var href = jQ(this).attr("href");
			var match = href.match(/fileID=(\d+)/);
			if (match) {
				var id=match[1];
				jQ(this).after(jQ("<span id='theasis_cancelUnfinished_"+id+"' class='btnCta0' title='Cancel upload'>Cancel</span>").css({"font-size":"0.8em","margin-left":"10px",cursor:"pointer"}).click(function(){
					var el=jQ("#theasis_cancelUnfinished_"+id);
					el.after(jQ("<img id='theasis_cancelling_"+id+"' src='//i.istockimg.com/static/images/loading.gif' title='cancelling'>"));
					el.hide();
					el.prev().hide();
					jQ.get("/file_upload.php?FormName=cancel&fileID="+id, function(data) {
						var img=jQ("#theasis_cancelling_"+id);
						img.parent().parent().hide();
					});
				}));
			}
		});
		if (loc) {
			loc.html(container);
		} else {
			jQ("#wrapper").prepend(container);
		}
	} else if (loc) {
		loc.remove();
	}
};
doUnfinishedOnMyUploads = function() {
	var unfinishedDiv=jQ("<div id='theasis_unfinishedUploadsContainer'><div><img src='//i.istockimg.com/static/images/loading.gif' width='15' height='15' title='Loading' alt='Loading'>&nbsp;Checking unfinished uploads...</div></div>");
	unfinishedDiv.insertAfter("div.paginator:first");
	jQ.ajax({
		url:"/xnet.php",
		success:function(data){ doUnfinishedUploads(jQ(data),unfinishedDiv) ; }
	});
};
getStatsTabObj = function(thenGetTab) { // thenGetTab==true -> load the stats tab after getting the Obj
	debug("getStatsTabObj: entry");
	jQ.ajax({
		url:"/user_view.php",
		success:function(data){ extractStatsTabObj(data,thenGetTab); }
	});
};
extractStatsTabObj = function(data,thenGetTab) {
	debug("extractStatsTabObj: entry");
	var html=jQ(data);
	var ft=jQ("#StatsTab",html);
	if (ft.length) {
		var match = ft.attr('onclick').match(/'StatsTab',\s+'([^']+)'/);
		if (match) {
			var tabObj=match[1];
			var currentObj=JSON.parse(GM_getValue("theasis_statsTabObj_stringified",JSON.stringify({})));
			currentObj[userID]=tabObj;
			GM_setValue("theasis_statsTabObj_stringified",JSON.stringify(currentObj));
			debug("getStatsTabObj: thenGetTab: " + thenGetTab);
			if (thenGetTab) getStatsTab();
		}
	}
};
getStatsTabOrig = function(tabObj) {
	debug("getStatsTab: entry");
	if (!tabObj) {
		var currentObj=JSON.parse(GM_getValue("theasis_statsTabObj_stringified",JSON.stringify({})));
		tabObj=currentObj[userID];
		debug("getStatsTabObj: tabObj.length:" +(tabObj?tabObj.length:"nil object"));
	}
	if (tabObj) {
		jQ.ajax({
			beforeSend: function ( xhr ) {
				xhr.overrideMimeType("text/plain; charset=x-user-defined");
			},
			type:"POST",
			url:"/ajax_tabcontroller.php",
			data:{
				CacheKey:"Info_StatsTab_EN",
				ajax_action:"GetContent",
				ContainerName:"Info",
				ShowTab:tabObj
			},
			dataType:"text",
			success:processStatsTab,
			error:processStatsTabErr
		});
	} else {
		console.log("getStatsTab: no tabObj!");
	}
};
var workerBlob= new Blob(['\
	onmessage = function(event) {\
		if (event.data) {\
			var xhr=new XMLHttpRequest();\
			xhr.onreadystatechange=function(){\
				if (xhr.readyState==4) {\
					if (xhr.status==200) {\
						postMessage("theasisWorker ready");\
						var data=xhr.responseText.trim();\
						var matchTable = data.match(/<table>(.*?)<\\\\\\\/table>/);\
						if (matchTable) {\
							postMessage("theasisWorker match table");\
							postMessage(matchTable[1]);\
						}\
						postMessage("theasisWorker done");\
						self.close();\
					} else {\
						postMessage("theasisWorker error " + xhr.status);\
						self.close();\
					}\
				}\
			};\
			var params = \
				"CacheKey=" + encodeURIComponent("Info_StatsTab_EN") +\
				"&ajax_action=" + encodeURIComponent("GetContent") +\
				"&ContainerName=" + encodeURIComponent("Info") +\
				"&ShowTab=" + encodeURIComponent(event.data);\
			xhr.open("POST","//www.istockphoto.com/ajax_tabcontroller.php",true);\
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");\
			xhr.send(params);\
			postMessage("theasisWorker sent");\
		} else {\
			self.close();\
		}\
	};\
']);
getStatsTab = function(tabObj) {
	debug("getStatsTab: entry");
	if (!tabObj) {
		var currentObj=JSON.parse(GM_getValue("theasis_statsTabObj_stringified",JSON.stringify({})));
		tabObj=currentObj[userID];
		debug("getStatsTabObj: tabObj.length:" +(tabObj?tabObj.length:"nil object"));
	}
	if (tabObj) {
		var worker = new Worker(window.URL.createObjectURL(workerBlob));
		worker.onmessage = function(e) {
			if (e.data.indexOf("theasisWorker")==0) {
				debug("Worker message: " + e.data);
				worker.terminate();
			} else {
				debug("processing Worker data");
				processStatsTab(e.data);
				worker.terminate();
			}
		};
		debug("launching worker");
		worker.postMessage(tabObj);
	} else {
		debug("getStatsTab: no tabObj!");
		worker.terminate();
	}
};
processBalance = function(data) {
	debug("processBalance");
	var html=jQ(data);
	if (getVal("reportLoggedOut") && jQ("#headerLogin",html).length>0) {
		notLoggedIn();
		return;
	}
	var container=jQ("#toolbarBalance strong",html);
	if (container.length>0) {
		var matchBalance=container.text().match(/\$(\d[\d,]*.\d+)/);
		var matchOldBalance =jQ("#toolbarBalance strong").text().match(/\$(\d[\d,]*\.\d+)/);
		debug("processBalance: matchBalance: " + (matchBalance?matchBalance[0]:"nil object"));
		debug("processBalance: matchOldBalance: " + (matchOldBalance?matchOldBalance[1]:"nil object"));
		if (matchBalance && matchOldBalance) {
			var balance = matchBalance[1].replace(",","");
			var oldBalance = matchOldBalance[1].replace(",","");
			if (balance != oldBalance) {
				var newTitle = jQ("#toolbarBalance").attr("title");
				try {
					var diffBalance = parseFloat(balance) - parseFloat(oldBalance);
					newTitle += "\n" + localDateTime(new Date()) + ": " + (diffBalance>=0 ? "+$" : "$") + diffBalance.toFixed(2);
				} catch (e) {
					debug("processBalance: number error " + e );
					// some number error, so don't bother trying
				}
				jQ("#toolbarBalance").attr({title:newTitle});
				jQ("#toolbarBalance strong").text("$"+balance).css('color','yellow');
				if (getVal("showSaleInToolbar")) {
					showLatestSale();
				}
				if (getVal("newSalesNotification")) {
					try {
						jQ("#theasis_newSaleAudio").get(0).play();
					} catch (e) {
						debug("processBalance: couldn't play New Sale audio: " + e);
					}
				}
			}
		}
	}
};
var ratesFileTypes=[
	["Photo",0],
	["Vetta Photo",0],
	["Illustration",0],
	["Vetta Illustration",0],
	["Video",0],
	["Vetta Video",0],
	["Audio",0],
	["Flash",0]
];
var ratesRegEx=/>[^<]+<\\\/h4><\\\/td><td>(\d+)%</g;
processStatsTab = function(data) {
	debug("processStatsTab: entry");
	if (data.match(/'content'\s*:\s*''/) && !window.theasis_checkedStatsTab) {
		window.theasis_checkedStatsTab=true;
		getStatsTabObj(true);
		return;
	}
	debug("processStatsTab: content: " + data);
	if (data) {
		var rates;
		var i=0;
		while ( (rates=ratesRegEx.exec(data))!=null && i<ratesFileTypes.length) {
			debug(ratesFileTypes[i][0] + ": " + rates[1]);
			ratesFileTypes[i][1]=rates[1];
			++i;
		}
		if (i>0) {
			storeRoyaltyRates();
			GM_setValue("theasis_myUploads_royaltyRatesUpdateTime",Date.now());
		}
	} else {
		GM_setValue("theasis_statsTabObj_stringified",JSON.stringify({}));
	}
};
storeRoyaltyRates = function() {
	var str="";
	for(i=0;i<ratesFileTypes.length;++i) {
		str = str + "+" + i + ":" + ratesFileTypes[i][1];
	}
	GM_setValue("theasis_myUploads_royaltyRates",str);
};
loadRoyaltyRates = function() {
	var str=GM_getValue("theasis_myUploads_royaltyRates","");
	var rates=str.split("+");
	for(var i=1; i<rates.length; ++i) {
		var rate=rates[i];
		if (rate.indexOf(":")>0) {
			var s = rate.split(":");
			ratesFileTypes[parseInt(s[0],10)][1]=parseInt(s[1],10);
		}
	}
};
noteOriginalBalance = function() {
	debug("noteOriginalBalance: entry");
	var matchOldBalance =jQ("#toolbarBalance strong").text().match(/\$(\d[\d,]*\.\d+)/);
	if (matchOldBalance) {
		debug("noteOriginalBalance: originalBalance: " + matchOldBalance[1]);
		window.theasis_originalBalance=matchOldBalance[1].replace(",","");
		jQ("#toolbarBalance").attr({title:"Original balance: $"+matchOldBalance[1]});
	}
};
markTodaysSales=function(){
	var dt = new timezoneJS.Date();
	dt.setTimezone('America/Edmonton');
	var iNow = dt.toString("dd/MM/yyyy");
	var table = getTable();
	table.find("tr:gt(0)").each(function(){
		var row=jQ(this);
		var cell=row.find("td").eq(columns.lastdl.position);
		if(iNow==cell.text()) {
			cell.addClass("theasis_myUploads_soldToday");
		} else {
			cell.addClass("theasis_myUploads_notSoldToday");
		}
	});
};
processPageForGrid=function(data,container,page,month,url_pattern,replaceStr,count){
	var finished=false;
	var seenAny=false;
	var html=jQ(data);
	jQ('tr',html).each(function(){
		var row=jQ(this);
		var cells=jQ("td",row);
		if (cells && cells.length>0) {
			var cell=cells.first().find('a:first');
			if (cell.length>0) {
				var thisMonth=cells.eq(5).text().substring(3);
				if (!month) {
					month=thisMonth;
				}
				if (month===thisMonth) {
					var obj=jQ("<div>").css({display:'inline-block',width:'120px',height:'160px',border:'2px solid white',background:'#eee',float:'left'});
					var box=jQ("<div>").css({height:'120px','text-align':'center','vertical-align':'middle'});
					jQ('img',cell).removeAttr('width').css({padding:'6px'});
					box.append(cell);
					obj.append(box);
					box=jQ("<div>").css({'float':'left','padding-left':'1ex'});
					box.text(cells.eq(3).text());
					obj.append(box);
					box=jQ("<div>").css({float:'right','padding-right':'1ex'});
					box.text(" $"+cells.eq(4).text());
					obj.append(box);
					box=jQ("<div>").css({clear:'both','text-align':'center'});
					box.text(cells.eq(5).text());
					obj.append(box);
					container.append(obj);
					seenAny=true;
					++count;
				} else {
					finished=true;
				}
			}
		}
	});
	jQ('#theasis_gridview_count').text(count+' file(s)');
	if (!finished && seenAny) {
		addPageToGrid(container,url_pattern,replaceStr,page+1,month,count);
	} else {
		jQ('#theasis_gridview_loading').hide();
	}
};
addPageToGrid=function(container,url_pattern,replaceStr,page,month,count){
	var url=url_pattern.replace(replaceStr,page);
	jQ.ajax({
		url:url,
		success:function(data){processPageForGrid(data,container,page,'',url_pattern,replaceStr,count);}
		});
};
showGridview=function(){
	var container=jQ('<div id="theasis_Gridview">');
//	jQ('#cntnt').css('width','2000px');
//	jQ('#mncntnt').css('width','');
	jQ('h1.ImTheHead').text('Image subscription - Month Gridview').after(jQ('<div><span id="theasis_gridview_count">0 files</span><img id="theasis_gridview_loading" src="//i.istockimg.com/static/images/loading.gif" width="12px" height="12px"></div>'));;
	jQ('#showGridviewButton').remove();
	jQ('div.paginator').remove();
	jQ('tr.my-uploads-row:first').parent().parent().remove();
	var formtable=jQ('#myUploadsFilter').parent().parent().parent().parent();
	formtable.before(container);
	formtable.remove();
	addPageToGrid(container,'/my-account/my-uploads/subscriptions/xxxx/lastsubdl/desc','xxxx',1,'',0);
};
showGridviewButton=function(){
	var button = jQ("<input id='showGridviewButton' type='submit' value='Month Gridview' class='btnCtal' style='padding:3px 7px; margin-left:0px; margin-right:4px; margin-bottom:4px;'>").click(showGridview);
	var target=jQ("h1.ImTheHead:first");
	target.after(button);
};
ensureToolbarExists=function(preInit){
	var toolbar = jQ("#toolbar");
	if (toolbar.length<1) {
		toolbar = jQ("<div id='toolbar' class='theasisReplacementToolbar'><div id='tbContentLeft'></div><div id='tbContentRight'><a href='/forums.php'>Forum</a><a id='toolbar-lightbox' href='/my-account/lightbox?orderBy=CreationDate&order=DESC' style='margin-left: 1em;'>LBs</a></div></div>");
		toolbar.appendTo("body");
		if (preInit) {
			jQ("#tbContentLeft").append(preInit.html());
		}
	}
};
loadDlDetails = function(dlType,dlTarget,dateTarget,id) {
	var url='//www.istockphoto.com/file_downloads.php?id='+id+'&order=Date&PageSetting='+dlType;
	jQ.ajax(url)
		.done(function(data) {
			var html=jQ(data);
			var dispText=jQ("div.paginator:first div.fl",html).text();
			var numMatch = dispText.match(/of\s+(\d+)\s+match/);
			var result=0;
			var lastSale="";
			if (numMatch) {
				result=parseInt(numMatch[1]);
				lastSale=jQ("div.rnd table tr:eq(1) td:eq(0)",html).text();
				if (lastSale.match(/^\s*$/)) {
					lastSale=jQ("div.rnd table tr:eq(1) td:eq(1)",html).text();
				}
				var match = lastSale.match(/(\d+\/\d+\/\d+)/);
				if (match) {
					lastSale=match[1];
				} else {
					lastSale="??";
				}
			}
			jQ("#"+dlTarget).text(result);
			jQ("#"+dateTarget).text(lastSale);
			var totalContainer=jQ("#theasis_dlDetails_total");
			var total=parseInt(totalContainer.text())+result;
			totalContainer.html("<b>"+total+"</b>");
			var firstTable=jQ("div.fullPage table:first",html).text();
			var royMatch = firstTable.match(/Total\s+royalties:\s*(\$\d+\.\d+)/);
			if (match) {
				jQ("#theasis_dlRoyalty_total").text(royMatch[1]);
			}
		})
		.fail(function() { jQ("#"+target).text("--"); });
};
showDlDetails = function(id,container) {
	var isVideo=loc.match(/^\/video\//)!=null;
	var isAudio=loc.match(/^\/audio\//)!=null;
	var img="<img src='//i.istockimg.com/static/images/loading.gif' style='width: 10px; height: 10px;'/>";
	var dlTable=jQ("<table id='theasis_dlDetlailsTable2' class='theasis_detailsTable'>"
				+ "<tr class='theasis_dlDetlailsTable2_row_a'><th>Sale Type</th><th>Count</th><th>Last Sale</th></tr>"
				+ "<tr class='theasis_dlDetlailsTable2_row_b'><td>Regular DLs</td><td id='theasis_dlDetails_regular'>"+img+"</td><td id='theasis_dlDetails_regular_date'></td></tr>"
				+ "<tr class='theasis_dlDetlailsTable2_row_a'><td>Subs</td><td id='theasis_dlDetails_subs'>"+img+"</td><td id='theasis_dlDetails_subs_date'></td></tr>"
				+ "<tr class='theasis_dlDetlailsTable2_row_b'><td>ELs</td><td id='theasis_dlDetails_els'>"+img+"</td><td id='theasis_dlDetails_els_date'></td></tr>"
				+ "<tr class='theasis_dlDetlailsTable2_row_a'><td>Partner</td><td id='theasis_dlDetails_pp'>"+((isVideo||isAudio)?"--":img)+"</td><td id='theasis_dlDetails_pp_date'></td></tr>"
				+ "<tr class='theasis_dlDetlailsTable2_row_b'><td>Getty</td><td id='theasis_dlDetails_gi'>"+(isAudio?"--":img)+"</td><td id='theasis_dlDetails_gi_date'></td></tr>"
				+ "<tr class='theasis_dlDetlailsTable2_row_a'><td><b style='font-size:120%'>Total</b></td><td id='theasis_dlDetails_total'>0</td><td></td></tr>"
				+ "</table>").css({"margin-bottom":"1ex"});
	container.before(dlTable);
	var royaltyTable=jQ("<table id='theasis_dlRoyaltyTable' class='theasis_detailsTable'><tr class='theasis_dlDetlailsTable2_row_a'><td><b style='font-size:110%'>Total Royalties</b></td><th id='theasis_dlRoyalty_total'>--</th></tr></table>").css({"margin-bottom":"1ex"});
	container.before(royaltyTable);
	loadDlDetails('','theasis_dlDetails_regular','theasis_dlDetails_regular_date',id);
	loadDlDetails('Subscriptions','theasis_dlDetails_subs','theasis_dlDetails_subs_date',id);
	loadDlDetails('ExtendedLicense','theasis_dlDetails_els','theasis_dlDetails_els_date',id);
	if (!isVideo && !isAudio) {
		loadDlDetails('PartnerProgram','theasis_dlDetails_pp','theasis_dlDetails_pp_date',id);
	}
	if (!isAudio) {
		loadDlDetails('GISales','theasis_dlDetails_gi','theasis_dlDetails_gi_date',id);
	}
};
var theasis_ADPScriptReloadCount=5;
var theasis_ADPScriptReloadDelay=500;
doCloseupPage=function(){
	var manageLink=jQ("#asset-administration");
	if (manageLink.length>0) {
		if (manageLink.is(":visible")) {
			addCloseupPageExtras();
		} else {
			if (theasis_ADPScriptReloadCount-->0) { // page not loaded yet?
				window.setTimeout(doCloseupPage,theasis_ADPScriptReloadDelay);
				theasis_ADPScriptReloadDelay*=2;
			}
		}
	}
};
addCloseupPageExtras=function(){
	var match = loc.match(/.*-(\d+)/);
	if (match.length>1) {
		var fid = match[1];
		var edit=jQ("<button class='theasis_button'>Edit File</button>").click(function(){location.href='/file_closeup_edit.php?id='+fid;});
		var details=jQ("<button class='theasis_button'>DL History</button>").click(function(){location.href='/file_downloads.php?id='+fid;});
		var deactivate=jQ("<button class='theasis_button theasis_redbutton'>Deactivate</button>").click(function(){location.href='/file_status_change.php?id='+fid;});
		var target=jQ("div.adp-contributor-name").parent();
		var container = jQ("<div id='theasis_adp_extras_container'/>");
		container.html(edit);
		container.append(details);
		container.append(deactivate);
		target.before(container);
		showDlDetails(fid,container);
	}
};
var loc;
doInit=function(preInit){
	var initResult=false;
	setDebugMode();
	userID=userID||loggedInUser();
	if (noGMConflict() && userID) {
		initResult=true;
		loc = window.location.pathname;

		var onDetailPage = loc.indexOf("/my_uploads.php")>-1;
	  var onSubPage = loc.indexOf("/my_uploads_subscription.php")>-1;
	  var onImgSubPage = loc.indexOf("/my-uploads/subscriptions")>-1;
		var onELPage = loc.indexOf("/license_info.php")>-1;
		var onELEarningsPage = loc.indexOf("/license_earnings.php")>-1;
		var onDesignPage = loc.indexOf("/design_info.php")>-1;
		var onLBPage = loc.indexOf("/my-account/lightbox")>-1;
	//	var onPlusPage = loc.indexOf("/my_uploads_pricepoint.php")>-1;
		var onPartnerPage = loc.indexOf("/my_uploads_partner_program.php")>-1;
		var onGettyPage = loc.indexOf("/my-uploads/gisales")>-1;
		var onOldUrlFormatPage = loc.indexOf(".php")>-1;
		var onXnetPage = loc.indexOf("/xnet.php")>-1;
		var onDLHistoryPage = loc.indexOf("/download-history")>-1;
		var onMyDLPage = loc.indexOf("/my_downloads.php")>-1;
		var onPortfolioPage = loc.indexOf("/search/portfolio/")>-1;
		var onForumsPage = loc.indexOf("/forum_messages.php")>-1;
		var onCloseupPage = /\/(photo|video|vector|audio)\//.test(loc);
		
		noteOriginalBalance();
		loadRoyaltyRates();
		if ( getVal("showRCsInToolbar")) {
			processRoyaltyRates();
		}
		
		var myUploads = onDetailPage || onSubPage || onELPage || onELEarningsPage || onDesignPage || onPartnerPage || onGettyPage || onDLHistoryPage || onMyDLPage || onImgSubPage;
		
		doStyle();
		ensureToolbarExists(preInit);
		if (getVal("sortLBPage")) {
			jQ('#toolbar-lightbox').attr("href","/my-account/lightbox?orderBy=CreationDate&order=DESC");
			jQ('#lclnv a[href$="/lightbox"').attr("href","/my-account/lightbox?orderBy=CreationDate&order=DESC");
		}
		if (myUploads) {
			if (onDetailPage) {
				reformatCollections();
				if (getVal("unfinishedOnMyUploads") && jQ(".paginator:first .currentPage:first").text()=="1") {
					doUnfinishedOnMyUploads();
				}
			}
			findColumns();
			if (onDetailPage) {
				markTodaysSales();
			}
			reformatDates();
			fixBasicTableDetails();
			if (onDetailPage) {
				openDb();
				analyseSales();
				fixTableDetails();
	//			repositionLastDl();
			}
			if (onPartnerPage) {
				fixTablePP();
			}
			if (onGettyPage) {
				fixTableGI();
			}
			resizeThumbs(onGettyPage,onMyDLPage);
			if (onDetailPage) {
				prepareSettingsDiv();
				showColumns();
				prepareNextPage();
				doKeywordsLinks();
			} 
			var paraText= (onDesignPage || onELPage) ? true : false;
			var removeText= (onGettyPage || onELEarningsPage || onDLHistoryPage || onMyDLPage) ? false : true;
			var wrapper= onGettyPage||onImgSubPage ? false : true;
			addContribPageLinks(userID,paraText,removeText,wrapper,onDetailPage);
			if (onImgSubPage) {
				reformatSubsDates();
				fixSubTableDetails();
				showGridviewButton();
			}
		}
		if (onLBPage) {
			openLBDb();
		}
		if (onXnetPage) {
			doXnet();
		}
		if (getVal("showSaleInToolbar")) {
			showLatestSale();
		}
		if (onCloseupPage) {
			doCloseupPage();
		}
		
		if (getVal("checkForNewSales")) {
			checkBalance();
		}
	}
	return initResult;
};
function getPreInitData(data) {
	var tb;
	var sepDiv=jQ('<div class="theasis_toolbarSeparator"/>');
	var html=jQ(data);
	userID=loggedInUser(html);
	var avatar=jQ("#toolbarAvatar",html);
	if (avatar.length) {
		tb=jQ("<div id='theasis_preInitData'/>");
		avatar.children().css({'padding':'4px'});
		tb.append(avatar);
		var uploadsLink=jQ('<a id="toolbarUploads" href="/my_uploads.php" style="color: rgb(238, 238, 238);"><img src="https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&amp;chld=|14|000|glyphish_toolbox|16|eeeeee|FFF" class="m" style="width: 25px; height: 13px;"></a>');
		tb.append(sepDiv.clone());
		tb.append(jQ("#toolbarSitemailSpan",html));
		tb.append(sepDiv.clone());
		tb.append(jQ("#toolbarBalance",html).css({'padding':'4px','color':'rgb(238,238,238)','font-size':'80%'}));
		tb.append(sepDiv.clone());
		tb.append(uploadsLink);
		tb.append(sepDiv.clone());
		jQ("#toolbarSitemail img",tb).attr('src','https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=|14|000|glyphish_envelope|16|eeeeee|FFF').css({width:'25px',height:'13px'});
	} else {
		doError("No toolbar");
	}
	return tb;
}
//////////////////////////////////////////////////////
var userID;
if (!doInit()){
	jQ.get(toolbarUrl)
		.done(
			function(data){doInit(getPreInitData(data));}
		);
}


////////////////////////////////////////////

}

// load jQuery and kick off the meat of the code when jQuery has finished loading
function addJQuery(callback) {
	window.jQ=jQuery.noConflict(true);
	jQ(document).ready(main);
}


addJQuery(main);





