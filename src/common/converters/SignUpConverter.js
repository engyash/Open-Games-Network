angular.module('converters.SignUpConverter', [])
.service('SignUpConverter', function ($http, $injector, supplementalApiUri) {
    return {
        converter: function (input, bean, beanCompleteCB) {
            var jdata = JSON.stringify(input);
            $http({
                "method": 'POST',
                "url": supplementalApiUri + '/signUp',
                "data": jdata
            }).then(function (result) {
                console.log(result);
                beanCompleteCB({
                    'postSignUpResponse': result.data
                }, null);
            }, function (result) {
                beanCompleteCB(null, 'CONNECTION_ERROR');
            });
        }
    };
});