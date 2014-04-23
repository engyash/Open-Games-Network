angular.module('tagsJSON', [])

.service('$tagsJSON', function () {
    var tags = [
            { 'id': '1', 'name': 'Canada', selected: true, 'tagType': "Country"},
            { 'id': '2', 'name': 'United States', 'tagType': "Country" },
            { 'id': '3', 'name': 'Malaysia', 'tagType': "Country" },
            { 'id': '4', 'name': 'Canadian English', selected: true, 'tagType': "Language" },
            { 'id': '5', 'name': 'American English', 'tagType': "Language" },
            { 'id': '6', 'name': 'Malaysian', 'tagType': "Language" }
    ];
    return {
        get: function () {
            return tags;
        }
    };
});