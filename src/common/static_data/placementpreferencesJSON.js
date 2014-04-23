angular.module('PlacementPreferencesJSON', [])

.service('$PlacementPreferencesJSON', function () {
    var PlacementPreferences = [
        {'BuildLeft':'BuildLeft'},
        {'BuildRight':'BuildRight'},
        {'Balanced':'Balanced'},
        {'EvenFill':'EvenFill'},
        {'EvenFillLeft':'EvenFillLeft'},
        {'EvenFillRight':'EvenFillRight'}
    ];
    return {
        get: function () {
            return PlacementPreferences;
        }
    };
});