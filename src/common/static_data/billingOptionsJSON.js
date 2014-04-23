angular.module('billingOptionsJSON', [])

.service('$billingOptionsJSON', function () {
    var _billingOptions = {

            "billingOptions": 
              {
                  "PrimaryCreditCard": {
                     "CreditCardNumberDisplay" : "12345678901",
                     "ExpirationMonth" : "08",
                     "ExpirationYear" : "2015",
                     "CreditCardType" : "1",
                     "CreditCardTypeDescription": "Primary Credit Card",
                     "BillingName" : "Mike Smith",
                     "BillingAddress" : "1000 San Jacinto Dr",
                     "BillingCity" : "Irving",
                     "BillingState" : "TX",
                     "BillingZip" : "75247",
                     "BillingCountry" : "US"
                  }/*,
                  "SecondaryCreditCard": {
                     "CreditCardNumberDisplay" : "321",
                     "ExpirationMonth" : "10",
                     "ExpirationYear" : "2018",
                     "CreditCardType" : "1",
                     "CreditCardTypeDescription": "Primary Credit Card",
                     "BillingName" : "Mike Smith",
                     "BillingAddress" : "1000 San Jacinto Dr",
                     "BillingCity" : "Irving",
                     "BillingState" : "TX",
                     "BillingZip" : "75247",
                     "BillingCountry" : "US"
                  }*/
              }
            
    };

    return {
        get: function () {
            return _billingOptions.billingOptions;
        }
    };
});