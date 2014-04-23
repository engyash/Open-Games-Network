angular.module('services.breadcrumbs', []);
angular.module('services.breadcrumbs').factory('breadcrumbs', ['$rootScope', '$location', function ($rootScope, $location, $translate) {

    var breadcrumbs = [];
    var breadcrumbsService = {};


    //we want to update breadcrumbs only when a route is actually changed
    //as $location.path() will get updated imediatelly (even if route change fails!)
    $rootScope.$on('$stateChangeSuccess', function (event, current) {
        var pathElements = $location.path().split('/'), result = [], i;
        
        var breadcrumbPath = function (index) {           
            return '/' + (pathElements.slice(1, index + 2)).join('/');
        };


        var breadcrumbImage = function (name) {
            switch (name) {
                case "dashboard":
                    var img = "./assets/img/icon-dashboard-black.png";
                    break;
                case "organization":
                    img = "./assets/img/icon-organization-black.png";
                    break;
                case "commission":
                    img = "./assets/img/icon-commision-black.png";
                    break;
                case "rank":
                    img = "./assets/img/icon-organization-black.png";
                    break;
                case "autoships":
                    img = "./assets/img/icon-order-black.png";
                    break;
                case "orders":
                    img = "./assets/img/icon-order-black.png";
                    break;
                case "event":
                    img = "./assets/img/icon-tools-black.png";
                    break;
                case "resource-library":
                    img = "./assets/img/icon-tools-black.png";
                    break;
                case "event":
                    img = "./assets/img/icon-tools-black.png";
                    break;
                case "settings":
                    img = "./assets/img/icon-setting-black.png";
                    break;
                case "messages":
                    img = "./assets/img/icon-envelope-black.png";
                    break;
                case "customer-enquiry":
                    img = "./assets/img/icon-tools-black.png";
                    break;
                case "website":
                    img = "./assets/img/icon-tools-black.png";
                    break;
            }
            return img;
        };

        var mainMenuName = function (name) {
            switch (name) {
                case "autoships":
                    var newName = "autoships";
                    break;
                case "customer-enquiry":
                    newName = "feedback_support";
                    break;
                case "upgrade":
                    newName = "tools";
                    break;
                case "dsc-tools":
                    newName = "Dsc-Tools";
                    break;
                default:
                    newName = name;
                    break;
            }
            return newName;
        };

        var userFriendlyName = function (name) {
            switch (name) {
                case "OrganizationDetails":
                    var newName = "details";
                    break;
                case "placement-org":
                    newName ="placement";
          
                    break;
                case "RecentDownlineOrders":
                    newName ="business_activity";
              
                    break;
                case "performanceReports":
                    newName = "performance_reports";
                    break;
                case "DownlineAutoships":
                    newName = "downline_autoships";
                    break;
                case "EnrollNew":
                    newName = "enroll_new";
                    break;
                case "commissions":
                    newName = "commission_summary";
                    break;
                case "order-history":
                    newName = "order_history";
                    break; 
                case "autoship-list":
                    newName = "my_auto_refill";
                    break;
                case "autoship-product-list":
                    newName = "autoship_product_list";
                    break;
                case "autoship-cart":
                    newName = "autoship_cart";
                    break;
                case "autoship-checkout-details":
                    newName = "autoship_checkout_details";
                    break;
                case "autoship-checkout-shipping-address":
                    newName = "autoship_checkout_shipping_address";
                    break;
                case "autoship-checkout-ship-method":
                    newName = "pay_shipping_method";
                    break;
                case "autoship-checkout-payment":
                    newName = "selectors_payment";
                    break;
                case "autoship-checkout-review":
                    newName = "autoship_checkout_review";
                    break;
                case "autoship-order-complete":
                    newName = "autoship-order_complete";
                    break;
                case "autoship-invoice":
                    newName = "autoship_invoice";
                    break;
                case "newmessage":
                    newName = "new_message";
                    break;
                case "events":
                    newName = "global_events";
                    break;
                case "event-manage":
                    newName = "event_manage";
                    break;
                case "event-detail":
                    newName = "event_detail";
                    break;
                case "add-category":
                    newName = "Manage Category";
                    break;
                case "add-resource":
                    newName = "manage_resource";
                    break;
                case "notification":
                    newName = "account_nav_notifications";
                    break;
                case "upgrade":
                    newName = "premium_subscription";
                    break;
                case "upgrade-complete":
                    newName = "upgrade_complete";
                    break;
                case "upgrade-review":
                    newName = "upgrade_review";
                    break;
                case "upgrade-payment":
                    newName = "upgrade_payment";
                    break;
                case "josephs-awards-card":
                    newName = "josephs Awards Card";
                    break;
                case "page_ceo":
                    newName = "page_ceo";
                    break;
                case "page_news":
                    newName = "page_news";
                    break;
                case "page_product":
                    newName = "page_product";
                    break;
                case "page_demo":
                    newName = "page_demo";
                    break;
                case "groups":
                    newName = "group_heading";
                    break;
                case "select-recepients":
                    newName = "select_recepients";
                    break;
                
                case "dscemployee":
                    newName = "Dsc Employee";
                    break;
                case "salesorder":
                    newName = "Sales Order Report";
                    break;
                case "salesitemreport":
                    newName = "Sales Item Report";
                    break;
                default:                    
                    newName = name;
                    break;
            }
            return newName;
        };

        pathElements.shift();
        for (i = 1; i < pathElements.length; i++) {
            if (i == 2) {
                result.push({ name: userFriendlyName(pathElements[i]), path: breadcrumbPath(i), image: '' });
            }
            else {
                result.push({ name: mainMenuName(pathElements[i]), path: breadcrumbPath(i), image: breadcrumbImage(pathElements[i]) });
            }
        }

        breadcrumbs = result;

    });

    breadcrumbsService.getAll = function () {
        return breadcrumbs;
    };

    breadcrumbsService.getFirst = function () {
        return breadcrumbs[0] || {};
    };

    return breadcrumbsService;
}]);