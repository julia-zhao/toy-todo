["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/stringformat.js"],"~:js","goog.provide(\"goog.string.format\");\ngoog.require(\"goog.string\");\n/**\n @param {string} formatString\n @param {...(string|number|undefined)} var_args\n @return {string}\n */\ngoog.string.format = function(formatString, var_args) {\n  var args = Array.prototype.slice.call(arguments);\n  var template = args.shift();\n  if (typeof template == \"undefined\") {\n    throw new Error(\"[goog.string.format] Template required\");\n  }\n  var formatRe = /%([0\\- \\+]*)(\\d+)?(\\.(\\d+))?([%sfdiu])/g;\n  /**\n   @param {string} match\n   @param {string} flags\n   @param {string} width\n   @param {string} dotp\n   @param {string} precision\n   @param {string} type\n   @param {string} offset\n   @param {string} wholeString\n   @return {string}\n   */\n  function replacerDemuxer(match, flags, width, dotp, precision, type, offset, wholeString) {\n    if (type == \"%\") {\n      return \"%\";\n    }\n    var value = args.shift();\n    if (typeof value == \"undefined\") {\n      throw new Error(\"[goog.string.format] Not enough arguments\");\n    }\n    arguments[0] = value;\n    return goog.string.format.demuxes_[type].apply(null, arguments);\n  }\n  return template.replace(formatRe, replacerDemuxer);\n};\n/** @private @type {!Object} */ goog.string.format.demuxes_ = {};\n/**\n @param {string} value\n @param {string} flags\n @param {string} width\n @param {string} dotp\n @param {string} precision\n @param {string} type\n @param {string} offset\n @param {string} wholeString\n @return {string}\n */\ngoog.string.format.demuxes_[\"s\"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {\n  var replacement = value;\n  if (isNaN(width) || width == \"\" || replacement.length >= Number(width)) {\n    return replacement;\n  }\n  if (flags.indexOf(\"-\", 0) > -1) {\n    replacement = replacement + goog.string.repeat(\" \", Number(width) - replacement.length);\n  } else {\n    replacement = goog.string.repeat(\" \", Number(width) - replacement.length) + replacement;\n  }\n  return replacement;\n};\n/**\n @param {string} value\n @param {string} flags\n @param {string} width\n @param {string} dotp\n @param {string} precision\n @param {string} type\n @param {string} offset\n @param {string} wholeString\n @return {string}\n */\ngoog.string.format.demuxes_[\"f\"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {\n  var replacement = value.toString();\n  if (!(isNaN(precision) || precision == \"\")) {\n    replacement = parseFloat(value).toFixed(precision);\n  }\n  var sign;\n  if (Number(value) < 0) {\n    sign = \"-\";\n  } else {\n    if (flags.indexOf(\"+\") >= 0) {\n      sign = \"+\";\n    } else {\n      if (flags.indexOf(\" \") >= 0) {\n        sign = \" \";\n      } else {\n        sign = \"\";\n      }\n    }\n  }\n  if (Number(value) >= 0) {\n    replacement = sign + replacement;\n  }\n  if (isNaN(width) || replacement.length >= Number(width)) {\n    return replacement;\n  }\n  replacement = isNaN(precision) ? Math.abs(Number(value)).toString() : Math.abs(Number(value)).toFixed(precision);\n  var padCount = Number(width) - replacement.length - sign.length;\n  if (flags.indexOf(\"-\", 0) >= 0) {\n    replacement = sign + replacement + goog.string.repeat(\" \", padCount);\n  } else {\n    var paddingChar = flags.indexOf(\"0\", 0) >= 0 ? \"0\" : \" \";\n    replacement = sign + goog.string.repeat(paddingChar, padCount) + replacement;\n  }\n  return replacement;\n};\n/**\n @param {string} value\n @param {string} flags\n @param {string} width\n @param {string} dotp\n @param {string} precision\n @param {string} type\n @param {string} offset\n @param {string} wholeString\n @return {string}\n */\ngoog.string.format.demuxes_[\"d\"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {\n  return goog.string.format.demuxes_[\"f\"](parseInt(value, 10), flags, width, dotp, 0, type, offset, wholeString);\n};\ngoog.string.format.demuxes_[\"i\"] = goog.string.format.demuxes_[\"d\"];\ngoog.string.format.demuxes_[\"u\"] = goog.string.format.demuxes_[\"d\"];\n","~:source","// Copyright 2008 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Implementation of sprintf-like, python-%-operator-like,\n * .NET-String.Format-like functionality. Uses JS string's replace method to\n * extract format specifiers and sends those specifiers to a handler function,\n * which then, based on conversion type part of the specifier, calls the\n * appropriate function to handle the specific conversion.\n * For specific functionality implemented, look at formatRe below, or look\n * at the tests.\n */\n\ngoog.provide('goog.string.format');\n\ngoog.require('goog.string');\n\n\n// TODO(johnlenz): goog.string.format should not accept undefined as a parameter\n/**\n * Performs sprintf-like conversion, i.e. puts the values in a template.\n * DO NOT use it instead of built-in conversions in simple cases such as\n * 'Cost: %.2f' as it would introduce unnecessary latency opposed to\n * 'Cost: ' + cost.toFixed(2).\n * @param {string} formatString Template string containing % specifiers.\n * @param {...(string|number|undefined)} var_args Values formatString is to\n *     be filled with.\n * @return {string} Formatted string.\n */\ngoog.string.format = function(formatString, var_args) {\n\n  // Convert the arguments to an array (MDC recommended way).\n  var args = Array.prototype.slice.call(arguments);\n\n  // Try to get the template.\n  var template = args.shift();\n  if (typeof template == 'undefined') {\n    throw new Error('[goog.string.format] Template required');\n  }\n\n  // This re is used for matching, it also defines what is supported.\n  var formatRe = /%([0\\-\\ \\+]*)(\\d+)?(\\.(\\d+))?([%sfdiu])/g;\n\n  /**\n   * Chooses which conversion function to call based on type conversion\n   * specifier.\n   * @param {string} match Contains the re matched string.\n   * @param {string} flags Formatting flags.\n   * @param {string} width Replacement string minimum width.\n   * @param {string} dotp Matched precision including a dot.\n   * @param {string} precision Specifies floating point precision.\n   * @param {string} type Type conversion specifier.\n   * @param {string} offset Matching location in the original string.\n   * @param {string} wholeString Has the actualString being searched.\n   * @return {string} Formatted parameter.\n   */\n  function replacerDemuxer(\n      match, flags, width, dotp, precision, type, offset, wholeString) {\n    // The % is too simple and doesn't take an argument.\n    if (type == '%') {\n      return '%';\n    }\n\n    // Try to get the actual value from parent function.\n    var value = args.shift();\n\n    // If we didn't get any arguments, fail.\n    if (typeof value == 'undefined') {\n      throw new Error('[goog.string.format] Not enough arguments');\n    }\n\n    // Patch the value argument to the beginning of our type specific call.\n    arguments[0] = value;\n\n    return goog.string.format.demuxes_[type].apply(null, arguments);\n  }\n\n  return template.replace(formatRe, replacerDemuxer);\n};\n\n\n/**\n * Contains various conversion functions (to be filled in later on).\n * @private {!Object}\n */\ngoog.string.format.demuxes_ = {};\n\n\n/**\n * Processes %s conversion specifier.\n * @param {string} value Contains the formatRe matched string.\n * @param {string} flags Formatting flags.\n * @param {string} width Replacement string minimum width.\n * @param {string} dotp Matched precision including a dot.\n * @param {string} precision Specifies floating point precision.\n * @param {string} type Type conversion specifier.\n * @param {string} offset Matching location in the original string.\n * @param {string} wholeString Has the actualString being searched.\n * @return {string} Replacement string.\n */\ngoog.string.format.demuxes_['s'] = function(\n    value, flags, width, dotp, precision, type, offset, wholeString) {\n  var replacement = value;\n  // If no padding is necessary we're done.\n  // The check for '' is necessary because Firefox incorrectly provides the\n  // empty string instead of undefined for non-participating capture groups,\n  // and isNaN('') == false.\n  if (isNaN(width) || width == '' || replacement.length >= Number(width)) {\n    return replacement;\n  }\n\n  // Otherwise we should find out where to put spaces.\n  if (flags.indexOf('-', 0) > -1) {\n    replacement = replacement +\n        goog.string.repeat(' ', Number(width) - replacement.length);\n  } else {\n    replacement = goog.string.repeat(' ', Number(width) - replacement.length) +\n        replacement;\n  }\n  return replacement;\n};\n\n\n/**\n * Processes %f conversion specifier.\n * @param {string} value Contains the formatRe matched string.\n * @param {string} flags Formatting flags.\n * @param {string} width Replacement string minimum width.\n * @param {string} dotp Matched precision including a dot.\n * @param {string} precision Specifies floating point precision.\n * @param {string} type Type conversion specifier.\n * @param {string} offset Matching location in the original string.\n * @param {string} wholeString Has the actualString being searched.\n * @return {string} Replacement string.\n */\ngoog.string.format.demuxes_['f'] = function(\n    value, flags, width, dotp, precision, type, offset, wholeString) {\n\n  var replacement = value.toString();\n\n  // The check for '' is necessary because Firefox incorrectly provides the\n  // empty string instead of undefined for non-participating capture groups,\n  // and isNaN('') == false.\n  if (!(isNaN(precision) || precision == '')) {\n    replacement = parseFloat(value).toFixed(precision);\n  }\n\n  // Generates sign string that will be attached to the replacement.\n  var sign;\n  if (Number(value) < 0) {\n    sign = '-';\n  } else if (flags.indexOf('+') >= 0) {\n    sign = '+';\n  } else if (flags.indexOf(' ') >= 0) {\n    sign = ' ';\n  } else {\n    sign = '';\n  }\n\n  if (Number(value) >= 0) {\n    replacement = sign + replacement;\n  }\n\n  // If no padding is necessary we're done.\n  if (isNaN(width) || replacement.length >= Number(width)) {\n    return replacement;\n  }\n\n  // We need a clean signless replacement to start with\n  replacement = isNaN(precision) ? Math.abs(Number(value)).toString() :\n                                   Math.abs(Number(value)).toFixed(precision);\n\n  var padCount = Number(width) - replacement.length - sign.length;\n\n  // Find out which side to pad, and if it's left side, then which character to\n  // pad, and set the sign on the left and padding in the middle.\n  if (flags.indexOf('-', 0) >= 0) {\n    replacement = sign + replacement + goog.string.repeat(' ', padCount);\n  } else {\n    // Decides which character to pad.\n    var paddingChar = (flags.indexOf('0', 0) >= 0) ? '0' : ' ';\n    replacement =\n        sign + goog.string.repeat(paddingChar, padCount) + replacement;\n  }\n\n  return replacement;\n};\n\n\n/**\n * Processes %d conversion specifier.\n * @param {string} value Contains the formatRe matched string.\n * @param {string} flags Formatting flags.\n * @param {string} width Replacement string minimum width.\n * @param {string} dotp Matched precision including a dot.\n * @param {string} precision Specifies floating point precision.\n * @param {string} type Type conversion specifier.\n * @param {string} offset Matching location in the original string.\n * @param {string} wholeString Has the actualString being searched.\n * @return {string} Replacement string.\n */\ngoog.string.format.demuxes_['d'] = function(\n    value, flags, width, dotp, precision, type, offset, wholeString) {\n  return goog.string.format.demuxes_['f'](\n      parseInt(value, 10) /* value */, flags, width, dotp, 0 /* precision */,\n      type, offset, wholeString);\n};\n\n\n// These are additional aliases, for integer conversion.\ngoog.string.format.demuxes_['i'] = goog.string.format.demuxes_['d'];\ngoog.string.format.demuxes_['u'] = goog.string.format.demuxes_['d'];\n","~:compiled-at",1589214310831,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.stringformat.js\",\n\"lineCount\":125,\n\"mappings\":\"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\",\n\"sources\":[\"goog/string/stringformat.js\"],\n\"sourcesContent\":[\"// Copyright 2008 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Implementation of sprintf-like, python-%-operator-like,\\n * .NET-String.Format-like functionality. Uses JS string's replace method to\\n * extract format specifiers and sends those specifiers to a handler function,\\n * which then, based on conversion type part of the specifier, calls the\\n * appropriate function to handle the specific conversion.\\n * For specific functionality implemented, look at formatRe below, or look\\n * at the tests.\\n */\\n\\ngoog.provide('goog.string.format');\\n\\ngoog.require('goog.string');\\n\\n\\n// TODO(johnlenz): goog.string.format should not accept undefined as a parameter\\n/**\\n * Performs sprintf-like conversion, i.e. puts the values in a template.\\n * DO NOT use it instead of built-in conversions in simple cases such as\\n * 'Cost: %.2f' as it would introduce unnecessary latency opposed to\\n * 'Cost: ' + cost.toFixed(2).\\n * @param {string} formatString Template string containing % specifiers.\\n * @param {...(string|number|undefined)} var_args Values formatString is to\\n *     be filled with.\\n * @return {string} Formatted string.\\n */\\ngoog.string.format = function(formatString, var_args) {\\n\\n  // Convert the arguments to an array (MDC recommended way).\\n  var args = Array.prototype.slice.call(arguments);\\n\\n  // Try to get the template.\\n  var template = args.shift();\\n  if (typeof template == 'undefined') {\\n    throw new Error('[goog.string.format] Template required');\\n  }\\n\\n  // This re is used for matching, it also defines what is supported.\\n  var formatRe = /%([0\\\\-\\\\ \\\\+]*)(\\\\d+)?(\\\\.(\\\\d+))?([%sfdiu])/g;\\n\\n  /**\\n   * Chooses which conversion function to call based on type conversion\\n   * specifier.\\n   * @param {string} match Contains the re matched string.\\n   * @param {string} flags Formatting flags.\\n   * @param {string} width Replacement string minimum width.\\n   * @param {string} dotp Matched precision including a dot.\\n   * @param {string} precision Specifies floating point precision.\\n   * @param {string} type Type conversion specifier.\\n   * @param {string} offset Matching location in the original string.\\n   * @param {string} wholeString Has the actualString being searched.\\n   * @return {string} Formatted parameter.\\n   */\\n  function replacerDemuxer(\\n      match, flags, width, dotp, precision, type, offset, wholeString) {\\n    // The % is too simple and doesn't take an argument.\\n    if (type == '%') {\\n      return '%';\\n    }\\n\\n    // Try to get the actual value from parent function.\\n    var value = args.shift();\\n\\n    // If we didn't get any arguments, fail.\\n    if (typeof value == 'undefined') {\\n      throw new Error('[goog.string.format] Not enough arguments');\\n    }\\n\\n    // Patch the value argument to the beginning of our type specific call.\\n    arguments[0] = value;\\n\\n    return goog.string.format.demuxes_[type].apply(null, arguments);\\n  }\\n\\n  return template.replace(formatRe, replacerDemuxer);\\n};\\n\\n\\n/**\\n * Contains various conversion functions (to be filled in later on).\\n * @private {!Object}\\n */\\ngoog.string.format.demuxes_ = {};\\n\\n\\n/**\\n * Processes %s conversion specifier.\\n * @param {string} value Contains the formatRe matched string.\\n * @param {string} flags Formatting flags.\\n * @param {string} width Replacement string minimum width.\\n * @param {string} dotp Matched precision including a dot.\\n * @param {string} precision Specifies floating point precision.\\n * @param {string} type Type conversion specifier.\\n * @param {string} offset Matching location in the original string.\\n * @param {string} wholeString Has the actualString being searched.\\n * @return {string} Replacement string.\\n */\\ngoog.string.format.demuxes_['s'] = function(\\n    value, flags, width, dotp, precision, type, offset, wholeString) {\\n  var replacement = value;\\n  // If no padding is necessary we're done.\\n  // The check for '' is necessary because Firefox incorrectly provides the\\n  // empty string instead of undefined for non-participating capture groups,\\n  // and isNaN('') == false.\\n  if (isNaN(width) || width == '' || replacement.length >= Number(width)) {\\n    return replacement;\\n  }\\n\\n  // Otherwise we should find out where to put spaces.\\n  if (flags.indexOf('-', 0) > -1) {\\n    replacement = replacement +\\n        goog.string.repeat(' ', Number(width) - replacement.length);\\n  } else {\\n    replacement = goog.string.repeat(' ', Number(width) - replacement.length) +\\n        replacement;\\n  }\\n  return replacement;\\n};\\n\\n\\n/**\\n * Processes %f conversion specifier.\\n * @param {string} value Contains the formatRe matched string.\\n * @param {string} flags Formatting flags.\\n * @param {string} width Replacement string minimum width.\\n * @param {string} dotp Matched precision including a dot.\\n * @param {string} precision Specifies floating point precision.\\n * @param {string} type Type conversion specifier.\\n * @param {string} offset Matching location in the original string.\\n * @param {string} wholeString Has the actualString being searched.\\n * @return {string} Replacement string.\\n */\\ngoog.string.format.demuxes_['f'] = function(\\n    value, flags, width, dotp, precision, type, offset, wholeString) {\\n\\n  var replacement = value.toString();\\n\\n  // The check for '' is necessary because Firefox incorrectly provides the\\n  // empty string instead of undefined for non-participating capture groups,\\n  // and isNaN('') == false.\\n  if (!(isNaN(precision) || precision == '')) {\\n    replacement = parseFloat(value).toFixed(precision);\\n  }\\n\\n  // Generates sign string that will be attached to the replacement.\\n  var sign;\\n  if (Number(value) < 0) {\\n    sign = '-';\\n  } else if (flags.indexOf('+') >= 0) {\\n    sign = '+';\\n  } else if (flags.indexOf(' ') >= 0) {\\n    sign = ' ';\\n  } else {\\n    sign = '';\\n  }\\n\\n  if (Number(value) >= 0) {\\n    replacement = sign + replacement;\\n  }\\n\\n  // If no padding is necessary we're done.\\n  if (isNaN(width) || replacement.length >= Number(width)) {\\n    return replacement;\\n  }\\n\\n  // We need a clean signless replacement to start with\\n  replacement = isNaN(precision) ? Math.abs(Number(value)).toString() :\\n                                   Math.abs(Number(value)).toFixed(precision);\\n\\n  var padCount = Number(width) - replacement.length - sign.length;\\n\\n  // Find out which side to pad, and if it's left side, then which character to\\n  // pad, and set the sign on the left and padding in the middle.\\n  if (flags.indexOf('-', 0) >= 0) {\\n    replacement = sign + replacement + goog.string.repeat(' ', padCount);\\n  } else {\\n    // Decides which character to pad.\\n    var paddingChar = (flags.indexOf('0', 0) >= 0) ? '0' : ' ';\\n    replacement =\\n        sign + goog.string.repeat(paddingChar, padCount) + replacement;\\n  }\\n\\n  return replacement;\\n};\\n\\n\\n/**\\n * Processes %d conversion specifier.\\n * @param {string} value Contains the formatRe matched string.\\n * @param {string} flags Formatting flags.\\n * @param {string} width Replacement string minimum width.\\n * @param {string} dotp Matched precision including a dot.\\n * @param {string} precision Specifies floating point precision.\\n * @param {string} type Type conversion specifier.\\n * @param {string} offset Matching location in the original string.\\n * @param {string} wholeString Has the actualString being searched.\\n * @return {string} Replacement string.\\n */\\ngoog.string.format.demuxes_['d'] = function(\\n    value, flags, width, dotp, precision, type, offset, wholeString) {\\n  return goog.string.format.demuxes_['f'](\\n      parseInt(value, 10) /* value */, flags, width, dotp, 0 /* precision */,\\n      type, offset, wholeString);\\n};\\n\\n\\n// These are additional aliases, for integer conversion.\\ngoog.string.format.demuxes_['i'] = goog.string.format.demuxes_['d'];\\ngoog.string.format.demuxes_['u'] = goog.string.format.demuxes_['d'];\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"string\",\"format\",\"goog.string.format\",\"formatString\",\"var_args\",\"args\",\"Array\",\"prototype\",\"slice\",\"call\",\"arguments\",\"template\",\"shift\",\"Error\",\"formatRe\",\"replacerDemuxer\",\"match\",\"flags\",\"width\",\"dotp\",\"precision\",\"type\",\"offset\",\"wholeString\",\"value\",\"demuxes_\",\"apply\",\"replace\",\"replacement\",\"isNaN\",\"length\",\"Number\",\"indexOf\",\"repeat\",\"toString\",\"parseFloat\",\"toFixed\",\"sign\",\"Math\",\"abs\",\"padCount\",\"paddingChar\",\"parseInt\"]\n}\n"]