["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/window/window.js"],"~:js","goog.provide(\"goog.window\");\ngoog.require(\"goog.dom.TagName\");\ngoog.require(\"goog.dom.safe\");\ngoog.require(\"goog.html.SafeUrl\");\ngoog.require(\"goog.html.uncheckedconversions\");\ngoog.require(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.string\");\ngoog.require(\"goog.string.Const\");\ngoog.require(\"goog.userAgent\");\n/** @type {number} */ goog.window.DEFAULT_POPUP_HEIGHT = 500;\n/** @type {number} */ goog.window.DEFAULT_POPUP_WIDTH = 690;\n/** @type {string} */ goog.window.DEFAULT_POPUP_TARGET = \"google_popup\";\n/**\n @private\n @return {!Window}\n @suppress {checkTypes}\n */\ngoog.window.createFakeWindow_ = function() {\n  return (/** @type {!Window} */ ({}));\n};\n/**\n @param {(goog.html.SafeUrl|string|Object|null)} linkRef\n @param {?Object=} opt_options\n @param {?Window=} opt_parentWin\n @return {?Window}\n */\ngoog.window.open = function(linkRef, opt_options, opt_parentWin) {\n  if (!opt_options) {\n    opt_options = {};\n  }\n  var parentWin = opt_parentWin || window;\n  /** @type {!goog.html.SafeUrl} */ var safeLinkRef;\n  if (linkRef instanceof goog.html.SafeUrl) {\n    safeLinkRef = linkRef;\n  } else {\n    /**\n     @type {(string|!goog.string.TypedString)}\n     @suppress {missingProperties}\n     */\n    var url = typeof linkRef.href != \"undefined\" ? linkRef.href : String(linkRef);\n    safeLinkRef = goog.html.SafeUrl.sanitize(url);\n  }\n  /**\n   @suppress {strictMissingProperties}\n   */\n  var target = opt_options.target || linkRef.target;\n  var sb = [];\n  for (var option in opt_options) {\n    switch(option) {\n      case \"width\":\n      case \"height\":\n      case \"top\":\n      case \"left\":\n        sb.push(option + \"\\x3d\" + opt_options[option]);\n        break;\n      case \"target\":\n      case \"noopener\":\n      case \"noreferrer\":\n        break;\n      default:\n        sb.push(option + \"\\x3d\" + (opt_options[option] ? 1 : 0));\n    }\n  }\n  var optionString = sb.join(\",\");\n  var newWin;\n  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator && parentWin.navigator[\"standalone\"] && target && target != \"_self\") {\n    var a = /** @type {!HTMLAnchorElement} */ (parentWin.document.createElement(String(goog.dom.TagName.A)));\n    goog.dom.safe.setAnchorHref(a, safeLinkRef);\n    a.setAttribute(\"target\", target);\n    if (opt_options[\"noreferrer\"]) {\n      a.setAttribute(\"rel\", \"noreferrer\");\n    }\n    var click = /** @type {!MouseEvent} */ (document.createEvent(\"MouseEvent\"));\n    click.initMouseEvent(\"click\", true, true, parentWin, 1);\n    a.dispatchEvent(click);\n    newWin = goog.window.createFakeWindow_();\n  } else {\n    if (opt_options[\"noreferrer\"]) {\n      newWin = parentWin.open(\"\", target, optionString);\n      var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);\n      if (newWin) {\n        if (goog.userAgent.EDGE_OR_IE) {\n          if (goog.string.contains(sanitizedLinkRef, \";\")) {\n            sanitizedLinkRef = \"'\" + sanitizedLinkRef.replace(/'/g, \"%27\") + \"'\";\n          }\n        }\n        newWin.opener = null;\n        var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from(\"b/12014412, meta tag with sanitized URL\"), '\\x3cmeta name\\x3d\"referrer\" content\\x3d\"no-referrer\"\\x3e' + '\\x3cmeta http-equiv\\x3d\"refresh\" content\\x3d\"0; url\\x3d' + goog.string.htmlEscape(sanitizedLinkRef) + '\"\\x3e');\n        goog.dom.safe.documentWrite(newWin.document, safeHtml);\n        newWin.document.close();\n      }\n    } else {\n      newWin = parentWin.open(goog.html.SafeUrl.unwrap(safeLinkRef), target, optionString);\n      if (newWin && opt_options[\"noopener\"]) {\n        newWin.opener = null;\n      }\n    }\n  }\n  return newWin;\n};\n/**\n @param {string=} opt_message\n @param {?Object=} opt_options\n @param {?Window=} opt_parentWin\n @return {?Window}\n */\ngoog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {\n  var loadingMessage;\n  if (!opt_message) {\n    loadingMessage = \"\";\n  } else {\n    loadingMessage = goog.string.escapeString(goog.string.htmlEscape(opt_message));\n  }\n  var url = goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from(\"b/12014412, encoded string in javascript: URL\"), 'javascript:\"' + encodeURI(loadingMessage) + '\"');\n  return (/** @type {?Window} */ (goog.window.open(url, opt_options, opt_parentWin)));\n};\n/**\n @param {(?goog.html.SafeUrl|string|?Object)} linkRef\n @param {?Object=} opt_options\n @return {boolean}\n */\ngoog.window.popup = function(linkRef, opt_options) {\n  if (!opt_options) {\n    opt_options = {};\n  }\n  opt_options[\"target\"] = opt_options[\"target\"] || linkRef[\"target\"] || goog.window.DEFAULT_POPUP_TARGET;\n  opt_options[\"width\"] = opt_options[\"width\"] || goog.window.DEFAULT_POPUP_WIDTH;\n  opt_options[\"height\"] = opt_options[\"height\"] || goog.window.DEFAULT_POPUP_HEIGHT;\n  var newWin = goog.window.open(linkRef, opt_options);\n  if (!newWin) {\n    return true;\n  }\n  newWin.focus();\n  return false;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Utilities for window manipulation.\n */\n\n\ngoog.provide('goog.window');\n\ngoog.require('goog.dom.TagName');\ngoog.require('goog.dom.safe');\ngoog.require('goog.html.SafeUrl');\ngoog.require('goog.html.uncheckedconversions');\ngoog.require('goog.labs.userAgent.platform');\ngoog.require('goog.string');\ngoog.require('goog.string.Const');\ngoog.require('goog.userAgent');\n\n\n/**\n * Default height for popup windows\n * @type {number}\n */\ngoog.window.DEFAULT_POPUP_HEIGHT = 500;\n\n\n/**\n * Default width for popup windows\n * @type {number}\n */\ngoog.window.DEFAULT_POPUP_WIDTH = 690;\n\n\n/**\n * Default target for popup windows\n * @type {string}\n */\ngoog.window.DEFAULT_POPUP_TARGET = 'google_popup';\n\n\n/**\n * @return {!Window}\n * @suppress {checkTypes}\n * @private\n */\ngoog.window.createFakeWindow_ = function() {\n  return /** @type {!Window} */ ({});\n};\n\n/**\n * Opens a new window.\n *\n * @param {goog.html.SafeUrl|string|Object|null} linkRef If an Object with an 'href'\n *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'\n *     is used, otherwise its toString method is called. Note that if a\n *     string|Object is used, it will be sanitized with SafeUrl.sanitize().\n *\n * @param {?Object=} opt_options supports the following options:\n *  'target': (string) target (window name). If null, linkRef.target will\n *          be used.\n *  'width': (number) window width.\n *  'height': (number) window height.\n *  'top': (number) distance from top of screen\n *  'left': (number) distance from left of screen\n *  'toolbar': (boolean) show toolbar\n *  'scrollbars': (boolean) show scrollbars\n *  'location': (boolean) show location\n *  'statusbar': (boolean) show statusbar\n *  'menubar': (boolean) show menubar\n *  'resizable': (boolean) resizable\n *  'noreferrer': (boolean) whether to attempt to remove the referrer header\n *      from the request headers. Does this by opening a blank window that\n *      then redirects to the target url, so users may see some flickering.\n *\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\n *                 new window.\n *\n * @return {?Window} Returns the window object that was opened. This returns\n *                  null if a popup blocker prevented the window from being\n *                  opened. In case when a new window is opened in a different\n *                  browser sandbox (such as iOS standalone mode), the returned\n *                  object is a emulated Window object that functions as if\n *                  a cross-origin window has been opened.\n */\ngoog.window.open = function(linkRef, opt_options, opt_parentWin) {\n  if (!opt_options) {\n    opt_options = {};\n  }\n  var parentWin = opt_parentWin || window;\n\n  /** @type {!goog.html.SafeUrl} */\n  var safeLinkRef;\n\n  if (linkRef instanceof goog.html.SafeUrl) {\n    safeLinkRef = linkRef;\n  } else {\n    // HTMLAnchorElement has a toString() method with the same behavior as\n    // goog.Uri in all browsers except for Safari, which returns\n    // '[object HTMLAnchorElement]'.  We check for the href first, then\n    // assume that it's a goog.Uri or String otherwise.\n    /**\n     * @type {string|!goog.string.TypedString}\n     * @suppress {missingProperties}\n     */\n    var url =\n        typeof linkRef.href != 'undefined' ? linkRef.href : String(linkRef);\n    safeLinkRef = goog.html.SafeUrl.sanitize(url);\n  }\n\n  /** @suppress {missingProperties} loose references to 'target' */\n  /** @suppress {strictMissingProperties} */\n  var target = opt_options.target || linkRef.target;\n\n  var sb = [];\n  for (var option in opt_options) {\n    switch (option) {\n      case 'width':\n      case 'height':\n      case 'top':\n      case 'left':\n        sb.push(option + '=' + opt_options[option]);\n        break;\n      case 'target':\n      case 'noopener':\n      case 'noreferrer':\n        break;\n      default:\n        sb.push(option + '=' + (opt_options[option] ? 1 : 0));\n    }\n  }\n  var optionString = sb.join(',');\n\n  var newWin;\n  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator &&\n      parentWin.navigator['standalone'] && target && target != '_self') {\n    // iOS in standalone mode disregards \"target\" in window.open and always\n    // opens new URL in the same window. The workaround is to create an \"A\"\n    // element and send a click event to it.\n    // Notice that the \"A\" tag does NOT have to be added to the DOM.\n\n    var a = /** @type {!HTMLAnchorElement} */\n        (parentWin.document.createElement(String(goog.dom.TagName.A)));\n    goog.dom.safe.setAnchorHref(a, safeLinkRef);\n\n    a.setAttribute('target', target);\n    if (opt_options['noreferrer']) {\n      a.setAttribute('rel', 'noreferrer');\n    }\n\n    var click = /** @type {!MouseEvent} */ (document.createEvent('MouseEvent'));\n    click.initMouseEvent(\n        'click',\n        true,  // canBubble\n        true,  // cancelable\n        parentWin,\n        1);  // detail = mousebutton\n    a.dispatchEvent(click);\n    // New window is not available in this case. Instead, a fake Window object\n    // is returned. In particular, it will have window.document undefined. In\n    // general, it will appear to most of clients as a Window for a different\n    // origin. Since iOS standalone web apps are run in their own sandbox, this\n    // is the most appropriate return value.\n    newWin = goog.window.createFakeWindow_();\n  } else if (opt_options['noreferrer']) {\n    // This code used to use meta-refresh to stop the referrer from being\n    // included in the request headers. This was the only cross-browser way\n    // to remove the referrer circa 2009. However, this never worked in Chrome,\n    // and, instead newWin.opener had to be set to null on this browser. This\n    // behavior is slated to be removed in Chrome and should not be relied\n    // upon. Referrer Policy is the only spec'd and supported way of stripping\n    // referrers and works across all current browsers. This is used in\n    // addition to the aforementioned tricks.\n    //\n    // We also set the opener to be set to null in the new window, thus\n    // disallowing the opened window from navigating its opener.\n    //\n    // Detecting user agent and then using a different strategy per browser\n    // would allow the referrer to leak in case of an incorrect/missing user\n    // agent.\n    //\n    // Also note that we can't use goog.dom.safe.openInWindow here, as it\n    // requires a goog.string.Const 'name' parameter, while we're using plain\n    // strings here for target.\n    newWin = parentWin.open('', target, optionString);\n\n    var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);\n    if (newWin) {\n      if (goog.userAgent.EDGE_OR_IE) {\n        // IE/EDGE can't parse the content attribute if the url contains\n        // a semicolon. We can fix this by adding quotes around the url, but\n        // then we can't parse quotes in the URL correctly. We take a\n        // best-effort approach.\n        //\n        // If the URL has semicolons, wrap it in single quotes to protect\n        // the semicolons.\n        // If the URL has semicolons and single quotes, url-encode the single\n        // quotes as well.\n        //\n        // This is imperfect. Notice that both ' and ; are reserved characters\n        // in URIs, so this could do the wrong thing, but at least it will\n        // do the wrong thing in only rare cases.\n        // ugh.\n        if (goog.string.contains(sanitizedLinkRef, ';')) {\n          sanitizedLinkRef = \"'\" + sanitizedLinkRef.replace(/'/g, '%27') + \"'\";\n        }\n      }\n      newWin.opener = null;\n\n      // TODO(rjamet): Building proper SafeHtml with SafeHtml.createMetaRefresh\n      // pulls in a lot of compiled code, which is composed of various unneeded\n      // goog.html parts such as SafeStyle.create among others. So, for now,\n      // keep the unchecked conversion until we figure out how to make the\n      // dependencies of createSafeHtmlTagSecurityPrivateDoNotAccessOrElse less\n      // heavy.\n      var safeHtml =\n          goog.html.uncheckedconversions\n              .safeHtmlFromStringKnownToSatisfyTypeContract(\n                  goog.string.Const.from(\n                      'b/12014412, meta tag with sanitized URL'),\n                  '<meta name=\"referrer\" content=\"no-referrer\">' +\n                      '<meta http-equiv=\"refresh\" content=\"0; url=' +\n                      goog.string.htmlEscape(sanitizedLinkRef) + '\">');\n      goog.dom.safe.documentWrite(newWin.document, safeHtml);\n      newWin.document.close();\n    }\n  } else {\n    newWin = parentWin.open(\n        goog.html.SafeUrl.unwrap(safeLinkRef), target, optionString);\n    // Passing in 'noopener' into the 'windowFeatures' param of window.open(...)\n    // will yield a feature-deprived browser. This is an known issue, tracked\n    // here: https://github.com/whatwg/html/issues/1902\n    if (newWin && opt_options['noopener']) {\n      newWin.opener = null;\n    }\n  }\n  // newWin is null if a popup blocker prevented the window open.\n  return newWin;\n};\n\n\n/**\n * Opens a new window without any real content in it.\n *\n * This can be used to get around popup blockers if you need to open a window\n * in response to a user event, but need to do asynchronous work to determine\n * the URL to open, and then set the URL later.\n *\n * Example usage:\n *\n * var newWin = goog.window.openBlank('Loading...');\n * setTimeout(\n *     function() {\n *       newWin.location.href = 'http://www.google.com';\n *     }, 100);\n *\n * @param {string=} opt_message String to show in the new window. This string\n *     will be HTML-escaped to avoid XSS issues.\n * @param {?Object=} opt_options Options to open window with.\n *     {@see goog.window.open for exact option semantics}.\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\n *                 new window.\n * @return {?Window} Returns the window object that was opened. This returns\n *                  null if a popup blocker prevented the window from being\n *                  opened.\n */\ngoog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {\n  // Open up a window with the loading message and nothing else.\n  // This will be interpreted as HTML content type with a missing doctype\n  // and html/body tags, but is otherwise acceptable.\n  //\n  // IMPORTANT: The order of escaping is crucial here in order to avoid XSS.\n  // First, HTML-escaping is needed because the result of the JS expression\n  // is evaluated as HTML. Second, JS-string escaping is needed; this avoids\n  // \\u escaping from inserting HTML tags and \\ from escaping the final \".\n  // Finally, URL percent-encoding is done with encodeURI(); this\n  // avoids percent-encoding from bypassing HTML and JS escaping.\n  //\n  // Note: There are other ways the same result could be achieved but the\n  // current behavior was preserved when this code was refactored to use\n  // SafeUrl, in order to avoid breakage.\n  var loadingMessage;\n  if (!opt_message) {\n    loadingMessage = '';\n  } else {\n    loadingMessage =\n        goog.string.escapeString(goog.string.htmlEscape(opt_message));\n  }\n  var url = goog.html.uncheckedconversions\n                .safeUrlFromStringKnownToSatisfyTypeContract(\n                    goog.string.Const.from(\n                        'b/12014412, encoded string in javascript: URL'),\n                    'javascript:\"' + encodeURI(loadingMessage) + '\"');\n  return /** @type {?Window} */ (\n      goog.window.open(url, opt_options, opt_parentWin));\n};\n\n\n/**\n * Raise a help popup window, defaulting to \"Google standard\" size and name.\n *\n * (If your project is using GXPs, consider using {@link PopUpLink.gxp}.)\n *\n* @param {?goog.html.SafeUrl|string|?Object} linkRef If an Object with an 'href'\n *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'\n *     is used, otherwise  otherwise its toString method is called. Note that\n *     if a string|Object is used, it will be sanitized with SafeUrl.sanitize().\n *\n * @param {?Object=} opt_options Options to open window with.\n *     {@see goog.window.open for exact option semantics}\n *     Additional wrinkles to the options:\n *     - if 'target' field is null, linkRef.target will be used. If *that's*\n *     null, the default is \"google_popup\".\n *     - if 'width' field is not specified, the default is 690.\n *     - if 'height' field is not specified, the default is 500.\n *\n * @return {boolean} true if the window was not popped up, false if it was.\n */\ngoog.window.popup = function(linkRef, opt_options) {\n  if (!opt_options) {\n    opt_options = {};\n  }\n\n  // set default properties\n  opt_options['target'] = opt_options['target'] || linkRef['target'] ||\n      goog.window.DEFAULT_POPUP_TARGET;\n  opt_options['width'] =\n      opt_options['width'] || goog.window.DEFAULT_POPUP_WIDTH;\n  opt_options['height'] =\n      opt_options['height'] || goog.window.DEFAULT_POPUP_HEIGHT;\n\n  var newWin = goog.window.open(linkRef, opt_options);\n  if (!newWin) {\n    return true;\n  }\n  newWin.focus();\n\n  return false;\n};\n","~:compiled-at",1589213802166,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.window.window.js\",\n\"lineCount\":136,\n\"mappings\":\"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\",\n\"sources\":[\"goog/window/window.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Utilities for window manipulation.\\n */\\n\\n\\ngoog.provide('goog.window');\\n\\ngoog.require('goog.dom.TagName');\\ngoog.require('goog.dom.safe');\\ngoog.require('goog.html.SafeUrl');\\ngoog.require('goog.html.uncheckedconversions');\\ngoog.require('goog.labs.userAgent.platform');\\ngoog.require('goog.string');\\ngoog.require('goog.string.Const');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * Default height for popup windows\\n * @type {number}\\n */\\ngoog.window.DEFAULT_POPUP_HEIGHT = 500;\\n\\n\\n/**\\n * Default width for popup windows\\n * @type {number}\\n */\\ngoog.window.DEFAULT_POPUP_WIDTH = 690;\\n\\n\\n/**\\n * Default target for popup windows\\n * @type {string}\\n */\\ngoog.window.DEFAULT_POPUP_TARGET = 'google_popup';\\n\\n\\n/**\\n * @return {!Window}\\n * @suppress {checkTypes}\\n * @private\\n */\\ngoog.window.createFakeWindow_ = function() {\\n  return /** @type {!Window} */ ({});\\n};\\n\\n/**\\n * Opens a new window.\\n *\\n * @param {goog.html.SafeUrl|string|Object|null} linkRef If an Object with an 'href'\\n *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'\\n *     is used, otherwise its toString method is called. Note that if a\\n *     string|Object is used, it will be sanitized with SafeUrl.sanitize().\\n *\\n * @param {?Object=} opt_options supports the following options:\\n *  'target': (string) target (window name). If null, linkRef.target will\\n *          be used.\\n *  'width': (number) window width.\\n *  'height': (number) window height.\\n *  'top': (number) distance from top of screen\\n *  'left': (number) distance from left of screen\\n *  'toolbar': (boolean) show toolbar\\n *  'scrollbars': (boolean) show scrollbars\\n *  'location': (boolean) show location\\n *  'statusbar': (boolean) show statusbar\\n *  'menubar': (boolean) show menubar\\n *  'resizable': (boolean) resizable\\n *  'noreferrer': (boolean) whether to attempt to remove the referrer header\\n *      from the request headers. Does this by opening a blank window that\\n *      then redirects to the target url, so users may see some flickering.\\n *\\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\\n *                 new window.\\n *\\n * @return {?Window} Returns the window object that was opened. This returns\\n *                  null if a popup blocker prevented the window from being\\n *                  opened. In case when a new window is opened in a different\\n *                  browser sandbox (such as iOS standalone mode), the returned\\n *                  object is a emulated Window object that functions as if\\n *                  a cross-origin window has been opened.\\n */\\ngoog.window.open = function(linkRef, opt_options, opt_parentWin) {\\n  if (!opt_options) {\\n    opt_options = {};\\n  }\\n  var parentWin = opt_parentWin || window;\\n\\n  /** @type {!goog.html.SafeUrl} */\\n  var safeLinkRef;\\n\\n  if (linkRef instanceof goog.html.SafeUrl) {\\n    safeLinkRef = linkRef;\\n  } else {\\n    // HTMLAnchorElement has a toString() method with the same behavior as\\n    // goog.Uri in all browsers except for Safari, which returns\\n    // '[object HTMLAnchorElement]'.  We check for the href first, then\\n    // assume that it's a goog.Uri or String otherwise.\\n    /**\\n     * @type {string|!goog.string.TypedString}\\n     * @suppress {missingProperties}\\n     */\\n    var url =\\n        typeof linkRef.href != 'undefined' ? linkRef.href : String(linkRef);\\n    safeLinkRef = goog.html.SafeUrl.sanitize(url);\\n  }\\n\\n  /** @suppress {missingProperties} loose references to 'target' */\\n  /** @suppress {strictMissingProperties} */\\n  var target = opt_options.target || linkRef.target;\\n\\n  var sb = [];\\n  for (var option in opt_options) {\\n    switch (option) {\\n      case 'width':\\n      case 'height':\\n      case 'top':\\n      case 'left':\\n        sb.push(option + '=' + opt_options[option]);\\n        break;\\n      case 'target':\\n      case 'noopener':\\n      case 'noreferrer':\\n        break;\\n      default:\\n        sb.push(option + '=' + (opt_options[option] ? 1 : 0));\\n    }\\n  }\\n  var optionString = sb.join(',');\\n\\n  var newWin;\\n  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator &&\\n      parentWin.navigator['standalone'] && target && target != '_self') {\\n    // iOS in standalone mode disregards \\\"target\\\" in window.open and always\\n    // opens new URL in the same window. The workaround is to create an \\\"A\\\"\\n    // element and send a click event to it.\\n    // Notice that the \\\"A\\\" tag does NOT have to be added to the DOM.\\n\\n    var a = /** @type {!HTMLAnchorElement} */\\n        (parentWin.document.createElement(String(goog.dom.TagName.A)));\\n    goog.dom.safe.setAnchorHref(a, safeLinkRef);\\n\\n    a.setAttribute('target', target);\\n    if (opt_options['noreferrer']) {\\n      a.setAttribute('rel', 'noreferrer');\\n    }\\n\\n    var click = /** @type {!MouseEvent} */ (document.createEvent('MouseEvent'));\\n    click.initMouseEvent(\\n        'click',\\n        true,  // canBubble\\n        true,  // cancelable\\n        parentWin,\\n        1);  // detail = mousebutton\\n    a.dispatchEvent(click);\\n    // New window is not available in this case. Instead, a fake Window object\\n    // is returned. In particular, it will have window.document undefined. In\\n    // general, it will appear to most of clients as a Window for a different\\n    // origin. Since iOS standalone web apps are run in their own sandbox, this\\n    // is the most appropriate return value.\\n    newWin = goog.window.createFakeWindow_();\\n  } else if (opt_options['noreferrer']) {\\n    // This code used to use meta-refresh to stop the referrer from being\\n    // included in the request headers. This was the only cross-browser way\\n    // to remove the referrer circa 2009. However, this never worked in Chrome,\\n    // and, instead newWin.opener had to be set to null on this browser. This\\n    // behavior is slated to be removed in Chrome and should not be relied\\n    // upon. Referrer Policy is the only spec'd and supported way of stripping\\n    // referrers and works across all current browsers. This is used in\\n    // addition to the aforementioned tricks.\\n    //\\n    // We also set the opener to be set to null in the new window, thus\\n    // disallowing the opened window from navigating its opener.\\n    //\\n    // Detecting user agent and then using a different strategy per browser\\n    // would allow the referrer to leak in case of an incorrect/missing user\\n    // agent.\\n    //\\n    // Also note that we can't use goog.dom.safe.openInWindow here, as it\\n    // requires a goog.string.Const 'name' parameter, while we're using plain\\n    // strings here for target.\\n    newWin = parentWin.open('', target, optionString);\\n\\n    var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);\\n    if (newWin) {\\n      if (goog.userAgent.EDGE_OR_IE) {\\n        // IE/EDGE can't parse the content attribute if the url contains\\n        // a semicolon. We can fix this by adding quotes around the url, but\\n        // then we can't parse quotes in the URL correctly. We take a\\n        // best-effort approach.\\n        //\\n        // If the URL has semicolons, wrap it in single quotes to protect\\n        // the semicolons.\\n        // If the URL has semicolons and single quotes, url-encode the single\\n        // quotes as well.\\n        //\\n        // This is imperfect. Notice that both ' and ; are reserved characters\\n        // in URIs, so this could do the wrong thing, but at least it will\\n        // do the wrong thing in only rare cases.\\n        // ugh.\\n        if (goog.string.contains(sanitizedLinkRef, ';')) {\\n          sanitizedLinkRef = \\\"'\\\" + sanitizedLinkRef.replace(/'/g, '%27') + \\\"'\\\";\\n        }\\n      }\\n      newWin.opener = null;\\n\\n      // TODO(rjamet): Building proper SafeHtml with SafeHtml.createMetaRefresh\\n      // pulls in a lot of compiled code, which is composed of various unneeded\\n      // goog.html parts such as SafeStyle.create among others. So, for now,\\n      // keep the unchecked conversion until we figure out how to make the\\n      // dependencies of createSafeHtmlTagSecurityPrivateDoNotAccessOrElse less\\n      // heavy.\\n      var safeHtml =\\n          goog.html.uncheckedconversions\\n              .safeHtmlFromStringKnownToSatisfyTypeContract(\\n                  goog.string.Const.from(\\n                      'b/12014412, meta tag with sanitized URL'),\\n                  '<meta name=\\\"referrer\\\" content=\\\"no-referrer\\\">' +\\n                      '<meta http-equiv=\\\"refresh\\\" content=\\\"0; url=' +\\n                      goog.string.htmlEscape(sanitizedLinkRef) + '\\\">');\\n      goog.dom.safe.documentWrite(newWin.document, safeHtml);\\n      newWin.document.close();\\n    }\\n  } else {\\n    newWin = parentWin.open(\\n        goog.html.SafeUrl.unwrap(safeLinkRef), target, optionString);\\n    // Passing in 'noopener' into the 'windowFeatures' param of window.open(...)\\n    // will yield a feature-deprived browser. This is an known issue, tracked\\n    // here: https://github.com/whatwg/html/issues/1902\\n    if (newWin && opt_options['noopener']) {\\n      newWin.opener = null;\\n    }\\n  }\\n  // newWin is null if a popup blocker prevented the window open.\\n  return newWin;\\n};\\n\\n\\n/**\\n * Opens a new window without any real content in it.\\n *\\n * This can be used to get around popup blockers if you need to open a window\\n * in response to a user event, but need to do asynchronous work to determine\\n * the URL to open, and then set the URL later.\\n *\\n * Example usage:\\n *\\n * var newWin = goog.window.openBlank('Loading...');\\n * setTimeout(\\n *     function() {\\n *       newWin.location.href = 'http://www.google.com';\\n *     }, 100);\\n *\\n * @param {string=} opt_message String to show in the new window. This string\\n *     will be HTML-escaped to avoid XSS issues.\\n * @param {?Object=} opt_options Options to open window with.\\n *     {@see goog.window.open for exact option semantics}.\\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\\n *                 new window.\\n * @return {?Window} Returns the window object that was opened. This returns\\n *                  null if a popup blocker prevented the window from being\\n *                  opened.\\n */\\ngoog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {\\n  // Open up a window with the loading message and nothing else.\\n  // This will be interpreted as HTML content type with a missing doctype\\n  // and html/body tags, but is otherwise acceptable.\\n  //\\n  // IMPORTANT: The order of escaping is crucial here in order to avoid XSS.\\n  // First, HTML-escaping is needed because the result of the JS expression\\n  // is evaluated as HTML. Second, JS-string escaping is needed; this avoids\\n  // \\\\u escaping from inserting HTML tags and \\\\ from escaping the final \\\".\\n  // Finally, URL percent-encoding is done with encodeURI(); this\\n  // avoids percent-encoding from bypassing HTML and JS escaping.\\n  //\\n  // Note: There are other ways the same result could be achieved but the\\n  // current behavior was preserved when this code was refactored to use\\n  // SafeUrl, in order to avoid breakage.\\n  var loadingMessage;\\n  if (!opt_message) {\\n    loadingMessage = '';\\n  } else {\\n    loadingMessage =\\n        goog.string.escapeString(goog.string.htmlEscape(opt_message));\\n  }\\n  var url = goog.html.uncheckedconversions\\n                .safeUrlFromStringKnownToSatisfyTypeContract(\\n                    goog.string.Const.from(\\n                        'b/12014412, encoded string in javascript: URL'),\\n                    'javascript:\\\"' + encodeURI(loadingMessage) + '\\\"');\\n  return /** @type {?Window} */ (\\n      goog.window.open(url, opt_options, opt_parentWin));\\n};\\n\\n\\n/**\\n * Raise a help popup window, defaulting to \\\"Google standard\\\" size and name.\\n *\\n * (If your project is using GXPs, consider using {@link PopUpLink.gxp}.)\\n *\\n* @param {?goog.html.SafeUrl|string|?Object} linkRef If an Object with an 'href'\\n *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'\\n *     is used, otherwise  otherwise its toString method is called. Note that\\n *     if a string|Object is used, it will be sanitized with SafeUrl.sanitize().\\n *\\n * @param {?Object=} opt_options Options to open window with.\\n *     {@see goog.window.open for exact option semantics}\\n *     Additional wrinkles to the options:\\n *     - if 'target' field is null, linkRef.target will be used. If *that's*\\n *     null, the default is \\\"google_popup\\\".\\n *     - if 'width' field is not specified, the default is 690.\\n *     - if 'height' field is not specified, the default is 500.\\n *\\n * @return {boolean} true if the window was not popped up, false if it was.\\n */\\ngoog.window.popup = function(linkRef, opt_options) {\\n  if (!opt_options) {\\n    opt_options = {};\\n  }\\n\\n  // set default properties\\n  opt_options['target'] = opt_options['target'] || linkRef['target'] ||\\n      goog.window.DEFAULT_POPUP_TARGET;\\n  opt_options['width'] =\\n      opt_options['width'] || goog.window.DEFAULT_POPUP_WIDTH;\\n  opt_options['height'] =\\n      opt_options['height'] || goog.window.DEFAULT_POPUP_HEIGHT;\\n\\n  var newWin = goog.window.open(linkRef, opt_options);\\n  if (!newWin) {\\n    return true;\\n  }\\n  newWin.focus();\\n\\n  return false;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"window\",\"DEFAULT_POPUP_HEIGHT\",\"DEFAULT_POPUP_WIDTH\",\"DEFAULT_POPUP_TARGET\",\"createFakeWindow_\",\"goog.window.createFakeWindow_\",\"open\",\"goog.window.open\",\"linkRef\",\"opt_options\",\"opt_parentWin\",\"parentWin\",\"safeLinkRef\",\"html\",\"SafeUrl\",\"url\",\"href\",\"String\",\"sanitize\",\"target\",\"sb\",\"option\",\"push\",\"optionString\",\"join\",\"newWin\",\"labs\",\"userAgent\",\"platform\",\"isIos\",\"navigator\",\"a\",\"document\",\"createElement\",\"dom\",\"TagName\",\"A\",\"safe\",\"setAnchorHref\",\"setAttribute\",\"click\",\"createEvent\",\"initMouseEvent\",\"dispatchEvent\",\"sanitizedLinkRef\",\"unwrap\",\"EDGE_OR_IE\",\"string\",\"contains\",\"replace\",\"opener\",\"safeHtml\",\"uncheckedconversions\",\"safeHtmlFromStringKnownToSatisfyTypeContract\",\"Const\",\"from\",\"htmlEscape\",\"documentWrite\",\"close\",\"openBlank\",\"goog.window.openBlank\",\"opt_message\",\"loadingMessage\",\"escapeString\",\"safeUrlFromStringKnownToSatisfyTypeContract\",\"encodeURI\",\"popup\",\"goog.window.popup\",\"focus\"]\n}\n"]