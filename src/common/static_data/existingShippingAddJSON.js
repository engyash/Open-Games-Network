angular.module('existingShippingAddJSON', [])

.service('$existingShippingAddJSON', function () {
    var _shippingAddresses = {

            "shippingAddresses": [
              {
                  "ShippingAddId": "1",
                  "FirstName": "Mike",
                  "LastName": "Smith ",
                  "Address1": "1000",
                  "Address2": "San Jacinto Dr",
                  "City": "Irving",
                  "State": "TX",
                  "Zip": "75247",
                  "Country": "US",
                  "Phone": "5708521693",
                  'Email': "test@test.com"
              }
            ]
    };

    return {
        get: function () {
            return _shippingAddresses.shippingAddresses;
        }
    };
});