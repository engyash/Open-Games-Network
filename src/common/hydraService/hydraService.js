angular.module('hydraService',
    [
  'bean',
  'converters.LoginConverter',
  'converters.SignUpConverter'
    ])
    .service('$hydraService', function ($bean, $injector) {
    return {
        postSignUp: function (inputParam) {
            var responseBean = ({
                'postSignUpResponse': null
            }, $injector.get('SignUpConverter').converter);
            responseBean.updateInput(inputParam);
            return responseBean;
        },
        postLogin: function (inputParam) {
            alert(inputParam);
            var responseBean = ({
                'postLoginResponse': null
            }, $injector.get('LoginConverter').converter);
            responseBean.updateInput(inputParam);
            return responseBean;
        }
    };
});

