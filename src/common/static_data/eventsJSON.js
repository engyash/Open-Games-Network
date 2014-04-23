angular.module ('eventsJSON', [])

.service('$eventsJSON', function () {

    /*{ "_id" : ObjectId("52d8eaa6e7e1c4e419d5ea20"), "eventType" : "Corporate", "eventStartDate" : "01/16/2014", "eventEndDate" : "01/17/2014", "eventStartTime" : 
    "9:00 AM", "eventEndTime" : "10:00 AM", "eventAllDay" : true, "eventTitle" : "test
ing", "eventLocation" : "<p>testing</p>", "eventSummary" : "<p>testing</p>", "eventID" : 2, "calendarRepeatOptions" : "Weekly", "calendarEventType" : "Birthday"
, "calendarTimeZone" : "Central Standard Time (CST)", "eventPersonal" : true }
{ "_id" : ObjectId("52d8eb9ce7e1c4e419d5ea21"), "eventType" : "Corporate", "even
tStartDate" : "02/12/2014", "eventEndDate" : "02/12/2014", "eventStartTime" : "9
:00 AM", "eventEndTime" : "10:00 AM", "eventTitle" : "feb", "eventLocation" : "<
p>gef</p>", "eventSummary" : "<p>feb</p>", "eventID" : 3, "calendarRepeatOptions
" : "Weekly", "calendarEventType" : "Anniversary", "calendarTimeZone" : "Malaysi
a Time (MYT)", "eventPersonal" : true }*/

    var _events = [
        {
            "eventType": "Corporate",
            "eventStartDate": "01/16/2014",
            "eventEndDate": "01/17/2014",
            "eventStartTime": "9:00 AM",
            "eventEndTime": "10:00 AM",
            "eventAllDay": false,
            "eventTitle": "non repeating event",
            "eventLocation": "<p>testing</p>",
            "eventSummary": "<p>testing</p>",
            "eventID": 2,
            "calendarRepeatOptions": "none",
            "calendarEventType": "Birthday",
            "calendarTimeZone": "Central Standard Time",
            "eventPersonal": true
        },
        {
            "eventType": "Personal",
            "eventStartDate": "01/14/2014",
            "eventEndDate": "01/14/2014",
            "eventStartTime": "9:00 AM",
            "eventEndTime": "10:00 AM",
            "eventAllDay": true,
            "eventTitle": "repeating event",
            "eventLocation": "<p>testing</p>",
            "eventSummary": "<p>testing</p>",
            "eventID": 2,
            "calendarRepeatOptions": "weekly",
            "calendarEventType": "Birthday",
            "calendarTimeZone": "Central Standard Time",
            "eventPersonal": false
        }
    ];
    return {
        get: function () {
            return _events;
        }
    };
});