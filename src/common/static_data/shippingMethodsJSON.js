angular.module('josephsShippingMethods', [])

.service('$josephsShippingMethods', function () {
    var _methods = [
    {
        id: '42',

        name: 'PR - Ground',
        price: 0,
        countries_enabled: ['PR']
    },
    {
        id: '43',
        name: 'PR - Pickup',
        price: 0,
        countries_enabled: ['PR']
    },
    {
        id: '53',
        name: 'UPS Auto-Refill',
        price: 0,
        countries_enabled: ['US']
    },

    {
        id: '59',
        name: 'UPS Three Day',
        price: 0,
        countries_enabled: ['US']
    },
    {
        id: '58',
        name: 'UPS Second Day',
        price: 0,
        countries_enabled: ['US']
    },
    {
        id: '57',
        name: 'UPS Next Day',
        price: 0,
        countries_enabled: ['US']
    },
    {
        id: '55',
        name: 'USPS - AutoRefill',
        price: 0,
        countries_enabled: ['US']
    },
    {
        id: '40',
        name: 'CA Purolator',
        price: 0,
        countries_enabled: ['CA']
    },
    {
        id: '47',
        name: 'CA-AR Purolator Signature',
        price: 0,
        countries_enabled: ['CA']
    },
    {
        id: '48',
        name: 'CA-AR Canada Post Expedited',
        price: 0,
        countries_enabled: ['CA']
    }
    ];

    return {
        getByCountry: function (country, locale) {
            return _.map(_.filter(_methods, function (method) {
                return _.contains(method.countries_enabled, country);
            }), function (method) {
                return method;
            });
        }
    };
});
