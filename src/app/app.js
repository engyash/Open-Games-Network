angular.module('ngOgsnApps', [
'templates-app',
'templates-common',
'Enums',
'ngOgsnApps.filters',
'ngOgsnApps.directives',
'ngOgsnApps.services',
'services.breadcrumbs',
//login

'ngOgsnApps.login',

  // translation
  'pascalprecht.translate',
  //testing
  'ngOgsnApps.test',
  'ngCookies',
  'ui.bootstrap',
  'ngOgsnApps.bootstrap',
  'ui.router',
  'hydraTools',
  'ui.tinymce'
])
.config(function ngOgsnAppsConfig($stateProvider, $urlRouterProvider, $translateProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/main/login');
    //$translateProvider.useLocalStorage();
    //$translateProvider.useStaticFilesLoader({
    //    prefix: 'assets/languages/',
    //    suffix: '.json'
    //});
    //// Tell the module what language to use by default and load this file
    
    //$translateProvider.fallbackLanguage('en_US');
})
//.run(function run(countryModel) {
//    if (!countryModel.selectedCountry) {
//        countryModel.init();
//    }
//})
.controller('HeaderCtrl', function ($scope, $location, breadcrumbs) {
    $scope.location = $location;
    $scope.breadcrumbs = breadcrumbs;
    $scope.goto = function (location) {
        $location.path("/main" + location);
    };
})
.constant('supplementalApiUri', 'https://josephsapi.herokuapp.com/api/v1')
.controller('AppCtrl', function AppCtrl($rootScope, $log, $cookies, $window, $scope, $location, $translate, countryModel, $hydraTools, Enum) {
    $rootScope.order = {};
    $rootScope.current = {};
    $scope.loginpage = $scope.loginpage || {};
    $scope.loginpage = false;
    if ($rootScope.order === {} || $rootScope.current === {}) {
        $scope.gotolocation('/main/login');
    }
    
    //if($window.localStorage.getItem('current'))
    //{
    //    if ($window.localStorage.getItem('current') === 'undefined') {
    //        $rootScope.current = {};
    //    } else {         
    //        $rootScope.current = JSON.parse($window.localStorage.getItem('current'));
    //    }
    //}
    $rootScope.$watch('current', function (new_value, old_value) {
        if (new_value !== old_value) {
            $window.localStorage.setItem('current', JSON.stringify($rootScope.current));
        }
    }, true);
    $scope.logCurrent = function () {
        $log.debug($rootScope.current);
    };

    //if ($window.localStorage.getItem('order')) {
    //    if ($window.localStorage.getItem('order') === 'undefined') {
    //        $rootScope.current = {};
    //    } else {
    //        $rootScope.order = JSON.parse($window.localStorage.getItem('order'));
    //    }
    //}
    //$rootScope.$watch('order', function (new_value, old_value) {
    //    $window.localStorage.setItem('order', JSON.stringify($rootScope.order));
    //}, true);
    //$scope.logOrder = function () {
    //    $log.debug($rootScope.order);
    //};
    //$scope.localStorage = function () {
    //    $log.debug(JSON.parse($window.localStorage.order));
    //    $log.debug(JSON.parse($window.localStorage.current));
    //};
    //$scope.order.settings = {};

    /*if locale is in localStorage, retrieve and set $scope.settings.locale*/
    //if ($window.localStorage.getItem('locale') && countryModel.selectedCountry.languages !== undefined) {
    //    var match = $.parseJSON($window.localStorage.getItem('locale'));
    //    var thisLocale = $.grep(countryModel.selectedCountry.languages, function (n, i) {
    //        return n.locale === match.locale;
    //    });
    //    $scope.order.settings.locale = thisLocale[0];        

    //    //if locale not in localStorage, set locale = first availble array item...
    //} else {
    //    $scope.order.settings.locale = countryModel.selectedCountry.languages[0];
        
    //}
    //$rootScope.exigoApi = $rootScope.exigoApi || {};
    ////$rootScope.exigoApi.url = $rootScope.exigoApi.url || 'http://localhost:3051/exigoapi';
    //$rootScope.exigoApi.url = $rootScope.exigoApi.url || 'http://192.237.223.65:3051/exigoapi';

    //$scope.order.settings.showLanguage = true; //= $location.path() == '/main/login';
    //$scope.$on('$stateChangeSuccess', function (event, toState, ToParams, fromState, fromParams) {
    //    if ($window.location.href.indexOf("login") > -1) {
    //        $scope.loginpage = false;
    //        //alert("login");
    //        $("#mainContainer").removeClass("col-lg-10 col-md-10 col-sm-10 col-xs-12");
    //        $("body").removeClass("public1");
    //        $("body").addClass("public");

    //        $("#mainContainer").addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
    //        $scope.current.login = {};
    //    }
    //    else {
    //        // alert("nonlogin");
    //        $scope.loginpage = true;
    //        $("#mainContainer").removeClass("col-lg-10 col-md-10 col-sm-10 col-xs-12");
    //        $("body").removeClass("public");
    //        $("body").addClass("public1");

    //        $("#mainContainer").addClass("col-lg-10 col-md-10 col-sm-10 col-xs-12");
    //    }
    //    if ($scope.current.login !== undefined) {
    //        if ($scope.current.login.userid !== undefined && $scope.current.login.userid !== '') {
    //        }
    //        else {
    //            if ($location.path() !== '/main/login/recover' && $location.path() !== '/main/login/forgot-password' && $location.path() !== '/main/login/create-account') {
    //                event.preventDefault();
    //                $location.path('main/login');
    //            }
    //        }
    //    }
    //    else {
         
    //        if ($location.path() !== '/main/login/recover' && $location.path() !== '/main/login/reset' && $location.path() !== '/main/login/forgot-password' && $location.path() !== '/main/login/create-account') {
    //            event.preventDefault();
    //            $location.path('main/login');
    //        }
    //    }
    //    if (angular.isDefined(toState.data.pageTitle)) {
    //        $scope.pageTitle = toState.data.pageTitle + ' | josephs Backmain';
    //    }

    //    $scope.style = function () {
    //        $scope.menuheight = $("#mainContainer").height();
    //        return {
    //            'min-height': 700 + 'px',
    //            'height': 100 + parseInt($scope.menuheight, 10) + 'px'
    //        };
    //    };
    //});
    $scope.setLocale = function (locale) {
        $translate.uses(locale.locale);
        $scope.order.settings.locale = locale;
        //save locale to local storage so it is not lost on hard refresh...
        $window.localStorage.setItem('locale', JSON.stringify($scope.order.settings.locale));
    };

    $scope.updateLocale = function () {
        $scope.setLocale($scope.order.settings.locale);
        return $scope.order.settings.locale;
    };


    //$scope.countryModel = countryModel;
    //$rootScope.order.country = $rootScope.order.country || countryModel.selectedCountry;

    // init locale after refresh   

    if ($rootScope.order.locale !== undefined) {
        $hydraTools.setLocale($rootScope.order.locale);
        $translate.uses($rootScope.order.locale);
    }

    $scope.clearLocalStorage = function () {
        $window.localStorage.clear();
        $scope = $rootScope = $window.localStorage = {};
        document.location = 'index.html';
        return false;
    };

    $scope.setBodyClass = function () {
        if ($location.path() === 'main/login') {
            return $window.localStorage.getItem('NG_TRANSLATE_LANG_KEY') + " login";
        } else {
            return $window.localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        }
    };

    $scope.gotolocation = function (location) {
        $location.path("/main/" + location);
    };

    $scope.loginCheck = function () {
        if ($location.path() === '/main/login' || $location.path() === '/main/login/recover' || $location.path() === '/main/login/reset' || $location.path() === '/main/login/forgot-password' || $location.path() === '/main/login/create-account') {
            $('#header').addClass('hide');
            $('#menu').addClass('hide');
            $('#mobile-menu').addClass('hide');
            $('#Togglebtn').addClass('hide');
            $('#Togglebtn').removeClass('hidden-xs');
            return "true";
        }
        else {
            $('#header').removeClass('hide');
            $('#menu').removeClass('hide');
            $('#menu').removeClass('hide');
            $('#Togglebtn').removeClass('hide');
            $('#Togglebtn').addClass('hidden-xs');
            return "false";
        }
    };

    $scope.logout = function (location) {
        $scope.current.login.userid = '';
        $scope.current.login.password = '';
        $scope.clearLocalStorage();
        $rootScope.order = {};
        $rootScope.current = {};
        $scope.gotolocation('/main/login');
    };
    //$scope.settings = {
    //    gotoMessageBehavior: 'event',
    //    maxStandardFolderID: 4,
    //    gotoMessageRedirectUrl: '/messages/',
    //    getmessagefoldersUrl: '/messages/getmessagefolders/',
    //    createmessagefolderUrl: '/messages/createmessagefolder/',
    //    deletefolderUrl: '/messages/deletemessagefolder/',
    //    editfolderUrl: '/messages/updatemessagefolder/',
    //    IsServiceRunning: false
    //};

    $scope.order.company = {
        Name: "josephs",
        Address: "",
        City: "",
        State: "",
        Zip: "",
        Country: "",
        Phone: "",
        Email: "info@josephs.com",
        Twitter: "josephs",
        Facebook: "platform"
    };
    $scope.Enum = Enum;
    $scope.ErrorModel = "";
});
