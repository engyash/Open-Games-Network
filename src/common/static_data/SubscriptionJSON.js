angular.module('SubscriptionJSON', [])

.service('$SubscriptionJSON', function () {
    var Subscription = [
            {
                'Description': '101',
                'Status': 'A',             
                'Expire': '17/07/2013'
               
            },
             {
                 'Description': '102',
                 'Status': 'A',
                 'Expire': '17/07/2013'

             },
              {
                  'Description': '103',
                  'Status': 'A',
                  'Expire': '17/07/2013'

              }




    ];
    return {
        get: function () {
          
            return Subscription;
        }
    };
});