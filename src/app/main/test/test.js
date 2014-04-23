angular.module('ngOgsnApps.test', ['hydraService',
    'ui.router',
  'hydraTools'])

.config(function config($stateProvider) {
    $stateProvider

    .state('test', {
        url: '/office/test',
        views: {
            "main": {
                controller: 'testCtrl',
                templateUrl: 'main/test/test.tpl.html'
            }
        },
        data: { pageTitle: 'testCart' }
    });
})

.controller('testCtrl', function ($scope) {
  
    if (localStorage) {
        console.log("Local Storage: Supported");
    }
    else {
        console.log("Local Storage: Unsupported");
    }

});