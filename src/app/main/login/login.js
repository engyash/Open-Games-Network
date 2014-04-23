angular.module('ngOgsnApps.login', [
  'ui.router',
  'pascalprecht.translate'

])

.config(function config($stateProvider) {
    $stateProvider
.state('login', {
    url: '/main/login',
    views: {
        "main": {
            controller: 'loginCtrl',
            templateUrl: 'main/login/login.tpl.html'
        }
    }, data: { pageTitle: 'Login' }
});
})

.controller('loginCtrl', function loginCtrl($scope, $location, $http, supplementalApiUri) {
   
    $scope.current.login = $scope.current.login||{};
   
    $scope.login = function () {
        $scope.showMessage = false;
        $scope.loginBean = $scope.loginBean || {};
        var reqObj = { "email": $scope.current.login.userid, "password": $scope.current.login.password };
        var jdata = "email=" + $scope.current.login.userid + "&password=" + $scope.current.login.password;
        console.log(reqObj.email);
        console.log(reqObj.password);
        console.log(jdata);
        $http({
            "method":"POST",
            "url": 'https://josephsapi.herokuapp.com/',
            "data": jdata
        }).then(function (result) {
            console.log('success');
            console.log(result);
            
        }, function (result) {
            console.log('error');
            console.log(result);
        });
    };
});