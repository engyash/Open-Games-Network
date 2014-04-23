angular.module('converters.LoginConverter', ['bean'])
.service('LoginConverter', function ($bean, $http, $injector, supplementalApiUri) {
    return {
        converter: function (input, bean, beanCompleteCB) {
            alert('hydra Converter');
            var jdata = JSON.stringify(input);
            
            $http({
                "method": 'POST',
                "url": supplementalApiUri + '/auth',
                "data": jdata
            }).then(function (result) {
                console.log(result);
                beanCompleteCB({
                    'postLoginResponse': result.data
                }, null);
            }, function (result) {
                beanCompleteCB(null, 'CONNECTION_ERROR');
            });
        }
    };
});