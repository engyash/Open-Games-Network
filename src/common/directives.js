/* Directives */

angular.module('ngOgsnApps.directives', ['ngOgsnApps.stepper-directive', 'ngOgsnApps.validation-directives', 'ngOgsnApps.xeditable-directives'])

.directive('zxcvbn', function () {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.focus(function () {
                $("#password2").val('');
            });
            element.keyup(function () {
                var pw = $(this).val();

                if (pw.length < 6) {
                    level = "progress-bar-danger";
                    status = "Poor";
                    pwidth = '40%';
                } else if (pw.length >= 6 && pw.length < 7) {
                    level = "progress-bar-warning";
                    status = "Ok";
                    pwidth = '60%';
                } else if (pw.length >= 7 && pw.length < 8) {
                    level = "progress-success";
                    status = "Good";
                    pwidth = '80%';
                } else if (pw.length >= 8) {
                    level = "progress-bar-success complete";
                    status = "Great";
                    pwidth = '100%';
                }

                $(".password-strength").removeClass().addClass("password-strength progress-bar " + level).css('width', pwidth);
                $(".password-status").text(status);
            });
        }
    };
})

.directive('enterclick', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.enterclick, { 'event': event });
                });
                event.preventDefault();
            }
        });
    };
})
.directive('myDownload', function ($compile, $hydraTools) {
    return {
        restrict: 'E',
        scope: { data: '=', type: '=' },
        link: function (scope, elm, attrs) {
            var btn_name = 'Download';
            if (parseInt(scope.type, 10) === 0) {
                btn_name = 'View';

            }
            else {
                btn_name = 'Download';
            }
            function getUrl() {

                //return URL.createObjectURL(new Blob([JSON.stringify(scope.data)], { type: "application/json" }));
                var ur = scope.data;
                if (parseInt(scope.type, 10) === 0) {
                    ur = scope.data;
                }
                else {
                    ur = $hydraTools.cdnUrls() +"/"+scope.data;
                }
                return ur;
            }
            elm.append($compile(
                    '<a  download=""' +
                    'href="' + getUrl() + '">' +
                    btn_name +
                    '</a>'
            )(scope));
        }
    };
})


//TODO: pwmatch needs to be integrated in form validation directive

.directive('pwmatch', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.keyup(function () {
                var currentPw = $(attrs.pw).val();
                var pwStatus = $(".password-match");
                if (currentPw == element.val()) {
                    pwStatus.text("Match").removeClass('error').addClass('success');
                } else {
                    pwStatus.text("No Match").removeClass('success').addClass('error');

                }

            });
        }
    };
})

.directive('unmaskpw', function ($translate) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var text;
            var labelSpan = element.find('span');
            var toggleBox = element.find('input');
            var check = 0;
            toggleBox.click(function () {
                check += 1;
                if (check % 2) {
                    $(attrs.unmask).attr('type', 'text');
                    text = $translate(attrs.pwmaskUpdated);
                    labelSpan.text(text);
                } else {
                    $(attrs.unmask).attr('type', 'password');
                    text = $translate(attrs.pwmaskOtext);
                    labelSpan.text(text);
                }
            });
        }
    };
})


.directive('ngFocus', function ($parse) {
    return function (scope, element, attr) {
        var fn = $parse(attr['ngFocus']);
        element.bind('focus', function (event) {
            scope.$apply(function () {
                fn(scope, { $event: event });
            });
        });
    };
})

.directive('ngBlur', function ($parse) {
    return function (scope, element, attr) {
        var fn = $parse(attr['ngBlur']);
        element.bind('blur', function (event) {
            scope.$apply(function () {
                fn(scope, { $event: event });
            });
        });
    };
})

.directive('datepickers', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            $(function () {
                element.datepicker({

                    dateFormat: 'mm/dd/yy',
                    onSelect: function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    };
})

.directive('contactdatepickers', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                $(function () {
                    element.datepicker({
                        dateFormat: 'mm/dd/yy',
                        minDate: 0,
                        onSelect: function (date) {
                            ngModelCtrl.$setViewValue(date);
                            scope.$apply();
                        }
                    });
                });
            }
        };
    })

.directive('infodatepickers', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                $(function () {
                    element.datepicker({
                        dateFormat: 'mm-dd-yy',
                        onSelect: function (date) {
                            ngModelCtrl.$setViewValue(date);
                            scope.$apply();
                        }
                    });
                });
            }
        };
})

.directive('orderdatepickers', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            $(function () {
                element.datepicker({
                    dateFormat: 'mm-dd-yy',
                    minDate: +1,
                    onSelect: function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    };
})

.directive('timepickers', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) {
                console.log('no model, returning');
                return;
            }
            element.bind('keyup change', function () {
                scope.$apply(update);
            });

            function update() {
                ngModel.$setViewValue(element.val());
            }
        }
    };
})

.directive('leftmodule', function () {
    return {
        templateUrl: 'main/event/module/leftmodule.tpl.html',
        scope: true,
        restrict: 'E'
    };
})

.directive('cart', function () {
    return {
        link: function ($scope) {
            $scope.sum_items_price = function (items) {
                var sum = 0;
                _.each(items, function (item) {
                    sum = sum + parseFloat(item.qty) * parseFloat(item.product.Price);
                });
                return sum;
            };

            $scope.sum_items_pv = function (items) {
                var sum = 0;
                _.each(items, function (item) {
                    if (item.product.BusinessVolume !== undefined) {
                        sum = sum + parseFloat(item.qty) * parseFloat(item.product.BusinessVolume);
                    }
                });
                return sum;
            };

            $scope.sum_each = function (price, qty) {
                var sum = parseFloat(price) * parseFloat(qty);
                return sum;
            };
        },
        templateUrl: 'main/shopping/module/cart.tpl.html',
        scope: true,
        restrict: 'E'
    };
})

    .directive('reviewcart', function () {
        return {
            link: function ($scope) {
                $scope.sum_items_price = function (items) {
                    var sum = 0;

                    _.each(items, function (item) {
                        sum = sum + parseFloat(item.qty) * parseFloat(item.product.Price);
                    });
                    return sum;
                };
                $scope.sum_items_pv = function (items) {
                    var sum = 0;
                    _.each(items, function (item) {
                        if (item.product.BusinessVolume !== undefined) {
                            sum = sum + parseFloat(item.qty) * parseFloat(item.product.BusinessVolume);
                        }
                    });
                    return sum;
                };
                $scope.sum_each = function (price, qty) {
                    var sum = parseFloat(price) * parseFloat(qty);
                    return sum;
                };
            },
            templateUrl: 'main/shopping/module/review-cart.tpl.html',
            scope: true,
            restrict: 'E'
        };
    })

    .directive('autoshipcart', function () {
        return {
            link: function ($scope) {
                $scope.sum_items_price = function (items) {
                    var sum = 0;
                    _.each(items, function (item) {
                        sum = sum + parseFloat(item.qty) * parseFloat(item.product.Price);
                    });
                    return sum;
                };

                $scope.sum_items_pv = function (items) {
                    var sum = 0;
                    _.each(items, function (item) {
                        if (item.product.BusinessVolume !== undefined) {
                            sum = sum + parseFloat(item.qty) * parseFloat(item.product.BusinessVolume);
                        }
                    });
                    return sum;
                };
                $scope.sum_each = function (price, qty) {
                    var sum = parseFloat(price) * parseFloat(qty);
                    return sum;
                };
            },
            templateUrl: 'main/autoships/module/autoship-cart.tpl.html',
            scope: true,
            restrict: 'E'
        };
    })

    .directive('autoshipreviewcart', function () {
        return {
            link: function ($scope) {
                $scope.sum_items_price = function (items) {
                    var sum = 0;
                    _.each(items, function (item) {
                        sum = sum + parseFloat(item.qty) * parseFloat(item.product.Price);
                    });
                    return sum;
                };

                $scope.sum_items_pv = function (items) {
                    var sum = 0;
                    _.each(items, function (item) {
                        if (item.product.BusinessVolume !== undefined) {
                            sum = sum + parseFloat(item.qty) * parseFloat(item.product.BusinessVolume);
                        }
                    });
                    return sum;
                };

                $scope.sum_each = function (price, qty) {
                    var sum = parseFloat(price) * parseFloat(qty);
                    return sum;
                };
            },
            templateUrl: 'main/autoships/module/autoship-review-cart.tpl.html',
            scope: true,
            restrict: 'E'
        };
    })

.directive('summarypanel', function () {
    return {
        link: function ($scope) {
            $scope.sum_items_price = function (items) {
                var sum = 0;
                _.each(items, function (item) {
                    sum = sum + parseFloat(item.qty) * parseFloat(item.product.price);
                });
                return sum;
            };

            $scope.sum_items_pv = function (items) {
                var sum = 0;
                _.each(items, function (item) {
                    if (item.product.pv !== undefined) {
                        sum = sum + parseFloat(item.qty) * parseFloat(item.product.pv);
                    }
                });
                return sum;
            };
        },
        templateUrl: 'enroll/module/summary.tpl.html',
        scope: true,
        restrict: 'E'
    };
})
    .directive('leftpannel', function () {
        return {
            templateUrl: 'backmain/module/left.tpl.html',
            scope: true,
            restrict: 'E'
        };
    })

.directive('t', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: "<translate ng-transclude></translate>"
    };
})
;
