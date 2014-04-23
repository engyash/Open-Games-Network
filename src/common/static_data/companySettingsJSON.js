angular.module('companySettingsJSON', [])
.service('companySettings', function ($rootScope) {
    var _companyCountry = {
        US: {
            CurrencyCode: 'usd',
            PriceType: 1,
            WarehouseID: 1,
            WebID: 10,
            WebCategoryID: 25,
            ReturnLongDetail: true,
            RestrictToWarehouse: true,
            LanguageID: 0
            //,ItemCodes:['10122', '1002']
        },
        CA: {
            CurrencyCode: 'usd',
            PriceType: 1,
            WarehouseID: 1,
            WebID: 10,
            WebCategoryID: 25,
            ReturnLongDetail: true,
            RestrictToWarehouse: true,
            LanguageID: 0
        }
    };



    return {
        getCompany: function () {
            return {
                compName: 'ExigoDemo'
            };
        },
        getCountry: function (country, locale) {          
            lang = $.grep(country.languages, function (n, i) { return n.locale === 'en_US'; });         

            var _countrySetting = null;
            _countrySetting = _companyCountry[country.code];
            _countrySetting.LanguageID = parseInt(lang[0].id, 10);

            return _countrySetting;
        }

    };
});