/* global angular: false */

/*!
 * Copyright 2013 Phil DeJarnett - http://www.overzealous.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Create a module for naturalSorting
angular.module("naturalSort", [])

// The core natural service
.factory("naturalService", ["$locale", function ($locale) {
    "use strict";
    // amount of extra zeros to padd for sorting
    var padding = function (value) {
        return "00000000000000000000".slice(value.length);
    },

		// Converts a value to a string.  Null and undefined are converted to ''
toString = function (value) {
    if (value === null || value === undefined) {
        return '';
    }
    return '' + value;
},

		// Calculate the default out-of-order date format (dd/MM/yyyy vs MM/dd/yyyy)
        natDateMonthFirst = $locale.DATETIME_FORMATS.shortDate.charAt(0) === "M",
		// Replaces all suspected dates with a standardized yyyy-m-d, which is fixed below
        fixDates = function (value) {
            // first look for dd?-dd?-dddd, where "-" can be one of "-", "/", or "."
            return toString(value).replace(/(\d\d?)[-\/\.](\d\d?)[-\/\.](\d{4})/, function ($0, $m, $d, $y) {
                // temporary holder for swapping below
                var t = $d;
                // if the month is not first, we'll swap month and day...
                if (!natDateMonthFirst) {
                    // ...but only if the day value is under 13.
                    if (Number($d) < 13) {
                        $d = $m;
                        $m = t;
                    }
                } else if (Number($m) > 12) {
                    // Otherwise, we might still swap the values if the month value is currently over 12.
                    $d = $m;
                    $m = t;
                }
                // return a standardized format.
                return $y + "-" + $m + "-" + $d;
            });
        },

		// Fix numbers to be correctly padded
        fixNumbers = function (value) {
            // First, look for anything in the form of d.d or d.d.d...
            return value.replace(/(\d+)((\.\d+)+)?/g, function ($0, integer, decimal, $3) {
                // If there's more than 2 sets of numbers...
                if (decimal !== $3) {
                    // treat as a series of integers, like versioning,
                    // rather than a decimal
                    return $0.replace(/(\d+)/g, function ($d) {
                        return padding($d) + $d;
                    });
                } else {
                    // add a decimal if necessary to ensure decimal sorting
                    decimal = decimal || ".0";
                    return padding(integer) + integer + decimal + padding(decimal);
                }
            });
        },

		// Finally, this function puts it all together.
        natValue = function (value) {
            return fixNumbers(fixDates(value));
        };

    // The actual object used by this service
    return {
        naturalValue: natValue,
        naturalSort: function (a, b) {
            a = natVale(a);
            b = natValue(b);
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        }
    };
}])

// Attach a function to the rootScope so it can be accessed by "orderBy"
.run(["$rootScope", "naturalService", function ($rootScope, naturalService) {
    "use strict";
    $rootScope.natural = function (field) {
        return function (item) {
            return naturalService.naturalValue(item[field]);
        };
    };
}]);