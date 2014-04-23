angular.module('GetCustomerJSON', [])

.service('$GetCustomerJSON', function () {
    var userDetails =[
            {'CustomerID':'101',
			'FirstName':'A',
			'LastName':'B',
			'Company':'RSB',
			'Email':'ak@gmail.com',
			'Phone': '9966666666',
			'Phone2': '9966666666',
			'MobilePhone':'9966666666',
			'BirthDate':'17/07/2013',
			'MainCountry':'US',
			'MainAddress1':'Address1',
			'MainAddress2':'Address2',
			'MainCity':'City',
			'MainState':'UT',
			'MainZip':'12345'
			}

         
    ];
    return {
        get: function () {
            return userDetails;
        }
    };
});