angular.module('ngOgsnApps.validation-directives', ['pascalprecht.translate'])
.directive('validate', function ($hydraService, $translate) {
    //TODO: Create checkbox logic for enroller/sponsor ids...
    //TODO: Create animation when continue button is clicked..
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            /*--Window Blur logic---*/
            /* Note: In Chrome - if focused on an input and then you blur out of the browser ie: Click on a different application - two blurs get called
            the input blur and window.blur - the following logic addresses this use case. A check for windowBlur happens in showErr() method below... */
            var windowBlur = false;
            $(window).blur(function () { windowBlur = true; });
            $(window).focus(function () { windowBlur = false; });
            element.focus(function () {
                //on focus remove all visible error states/msgs
                element.closest('.form-group').removeClass('error');
                element.closest('.form-group').find(".error").remove();
            });
            /*---Cancel Validation Logic--*/
            var cancelBox = element.closest(".controls").find('.cancel-validation');
            cancelBox.click(function () {
                element.toggleClass('novalidate');
                if ($(this).is(":checked")) {
                    element.closest('.form-group').removeClass('error');
                    element.closest('.form-group').find(".error").remove();
                    element.closest('.form-group').hide();
                    scope.$apply(attrs.updateId);
                }
                else {
                    element.closest('.form-group').show();
                }
            });
            element.blur(function () {
                checkForm(element);
            });
            var checkForm = function (element) {
                var msg, attr;
                var value = element.val();
                /*--attrs is not used because when the continue button is clicked attrs held the value of the button and not the element we passsed in - instead
                we check the old fashioned way with jQuery to see what validation needs to be done.--*/
                //enroller/dist validation --
                //to avoid calling hydra twice on browser blur we check that here
                if (!!element.attr('hydra-profile') && !windowBlur) {
                    var idCheck = $hydraService.dist2profileBean();
                    idCheck.set_complete_cb(function (bean) {
                        removeBusyWaiting(element);
                        if (bean.data.id === null) {
                            showError('error_valid_id', element);
                        }
                    });
                    if (attrs.enrollerId) {
                        idCheck.updateInput(scope.account.enroller_id);
                        addBusyWaiting(element);
                    }
                }
                if (!!element.attr('hydra-username')) {
                    var aElement = element.closest('.form-group');
                    var userCheck = $hydraService.username2existsBean();
                    userCheck.set_complete_cb(function (bean) {
                        removeBusyWaiting(element);                     
                        if (bean.data.isvalid === "false") {
                            if (!aElement.hasClass('error')) { showError('error_username_exists', element); }
                           
                        } else if (bean.error) {
                            showError('error_processing', element);
                        }
                    });
                    userCheck.updateInput(scope.current);
                    addBusyWaiting(element);
                }

                if (!!element.attr('postal-check')) {                   
                    var eElement = element.closest('.form-group');

                    var input = {};
                    input.country = element.attr('postal-check');
                    input.zip = element.val().toUpperCase();

                    var regex = /^[a-zA-Z0-9_.-]*$/;

                    switch (input.country) {
                        case "US":
                            regex = /^\d{5}([\-]?\d{4})?$/;
                            break;
                        case "CA":
                            regex = /^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/;
                            break;
                        case "PR":
                            regex = /^[a-zA-Z0-9_.-]*$/;
                            break;
                        default:
                            regex = /^[a-zA-Z0-9_.-]*$/;
                            break;
                    }
                    if (!regex.test(input.zip)) {
                        if (!eElement.hasClass('error')) { showError('INVALID_POSTAL', element); }
                    }

                    /*   var postalCheck = $hydraService.zipCodeValidateBean(input);
                       postalCheck.set_complete_cb(function (bean) {                  
                           removeBusyWaiting(element);
   
                           if (bean.data.isvalid === false) {
                               if (!eElement.hasClass('error')) { showError('INVALID_POSTAL', element); }                            
                           } else if (bean.error) {
                               showError('error_processing', element);
                           }
                       });
                       postalCheck.updateInput(input);                
                       addBusyWaiting(element); */
                }
                //not empty validation
                if (!!element.attr('noempty')) {

                    if ($.trim(value) === '') { showError('error_required_field', element); }

                }
                //valid postal validation
                if (!!element.attr("valid-postal")) {
                    /*Initially we want to work with the existing logic. This means grabbing the current status of shipping/billing error models */
                    var validPostal;
                    /* depending on the value of attrs.validPostal determines which model(billing or shipping) to use */
                    if (attrs.validPostal === "billing") { validPostal = scope.postal2divisionsBean_billing.error; }
                    else if (attrs.validPostal === "shipping") { validPostal = scope.postal2divisionsBean_shipping.error; }
                    //When we click on continue btn sometimes validPostal would be set to null
                    if (validPostal) {
                        var pElement = element.closest('.form-group');
                        if (validPostal && !pElement.hasClass('error')) { showError('INVALID_POSTAL', element); }
                        /*this section only runs if for any reason the value of validPostal( the current error status for billing/shipping) is null*/
                    } else {
                        var checkPostal = $hydraService.postal2divisionsBean();
                        checkPostal.set_complete_cb(function (bean) {
                            if (bean.error === "VERTEX_ADDRESS_NOT_FOUND") { showError('VERTEX_ADDRESS_NOT_FOUND', element); }
                            else if (bean.error === "INVALID_POSTAL") { showError('INVALID_POSTAL', element); }
                        });
                        checkPostal.updateInput(value);
                    }
                }
                //alphanumeric validation
                if (!!element.attr('alphanum')) {
                    if (!value.match(/^[a-zA-Z0-9_-]*$/)) {
                        showError('error_alpha_num', element);
                    }
                }

                //address validation
                if (!!element.attr('pipeChar')) {
                    if (value.match(/\|/)) {
                        showError('error_pipe_char', element);
                    }
                }

                //date validation
                if (!!element.attr('date')) {
                    value = $.trim(value);
                    var dateArray = value.split("/");
                    //Date and month correction
                    if (dateArray[0].length == 1) {
                        dateArray[0] = "0" + dateArray[0];
                    }
                    if (dateArray[1] !== undefined && dateArray[1].length == 1) {
                        dateArray[1] = "0" + dateArray[1];
                    }
                    value = dateArray.join("/");
                    if (isNaN(Date.parse(value))) {
                        showError("error_valid_date", element);
                    }
                    element.val(value);
                }

                //date validation
                if (!!element.attr('past-date') && !windowBlur) {
                    value = $.trim(value);

                    var today = new Date();
                   
                    var DateArray = value.split("-");
                
                    //Date and month correction
                    if (DateArray[0].length == 1) {
                        DateArray[0] = "0" + DateArray[0];
                    }
                    if (DateArray[1] !== undefined && DateArray[1].length == 1) {
                        DateArray[1] = "0" + DateArray[1];
                    }
                    value = DateArray.join("-");

                    if (Date.parse(value) < today)  {
                        showError("error_past_date", element);
                    }

                    if (isNaN(Date.parse(value))) {
                        showError("error_valid_date", element);
                    }                    
                    element.val(value);
                }
                //min length validation
                if (!!element.attr('minlength')) {
                    attr = element.attr('minlength');
                    if (value.length < attr) {
                        showError("error_minimum_chars", element, attr);
                    }
                }
                //max length validation
                if (!!element.attr('validate-maxlength')) {
                    attr = element.attr('validate-maxlength');
                    if (value.length > attr) {
                        showError("error_maxlength_chars", element, attr);
                    }
                }
                //phone validation
                if (!!element.attr('phone')) {
                    attr = element.attr('phone');
                    var numbers = value.replace(/[^0-9]/g, "");
                    if (numbers.length < attr) {
                        showError("error_minimum_digits", element, attr);
                    }
                }
                //integer only validation
                if (!!element.attr('numeric')) {
                    if (value.match(/[A-z]/g)) {
                        showError("error_alpha_not_permitted", element);
                    }
                }
                //email validation
                if (!!element.attr('email')) {
                    if (!value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
                        showError("error_valid_email", element);
                    }
                }
                //no spaces
                if (!!element.attr('nospaces')) {
                    if (value.match(/\s/g)) {
                        showError('error_spaces_not_permitted', element);
                    }
                }
                //select validation
                if (!!element.attr('validate-select')) {
                    value = element.find('option:selected').text();
                    if (value.match(/Select a/) || value === "") {
                        showError('error_make_selection', element);
                    }
                }
                //checkbox validation
                if (!!element.attr('checkbox-validate')) {

                if(!element.is(":checked")){
                    showError('Checkbox required', element);
                }
            }


            //cc date validation
            if(!!element.attr('ccdate')){
                dateValidate(element, attrs);

            }

        };

        var showError=function(msg, element, value){
           if(!element.hasClass('novalidate') && !windowBlur){
                //create and display error message
                var container=$("<span />");
                var nextEl = element.next();

                msg = $translate(msg, { value: value });
                container.text(msg).addClass('error help-block ng-scope').attr('translate','');
                
                if(nextEl.hasClass('icon-question-sign')){nextEl.after(container);}
                else{element.after(container);}
                
                element.closest(".form-group").addClass('error');
            }
        };

        if(attrs.triggerCheck){
            element.click(function(ev){
                ev.preventDefault();
                //remove any visible errors
                $('.form-group.error').not('.ccvalidation, .sumlength').removeClass('error');
                $('.form-group').not('.ccvalidation, .sumlength').find(".error").remove();

                scope.$apply(attrs.pvCheck);

                //grab all inputs set for validation minus the button triggering the check
                var inputs = $("[validate]").not("input[trigger-check]").not('.novalidate');
                
                //loop through inputs and send them through checkForm
                inputs.each(function(i,e){
                    var element = $(e);
                    checkForm(element);
                });

                //special pw check that happens only on btn click and if pw field exists
                if($("#password1").length>0){
                    var pw1 = $("#password1");
                    var pw2 = $("#password2");
                    var ctrlGrps = pw1.closest('.controls-row').find('.form-group');
                    if(pw1.val()!==pw2.val()){
                        ctrlGrps.addClass('error');
                        $(".password-match").text("No Match").addClass('error');
                    }
                }

                //If sponsor_id isn't input, clone over enroller_id -> sponsor_id and refreshSponsor();
                if(scope.account && scope.account.enroller_id && !scope.account.sponsor_id) {
                    scope.account.sponsor_id = scope.account.enroller_id;
                    scope.refreshSponsor();
                }
                
                var errors = $(".form-group.error");
                if(errors.length ===0){
                    scope.$apply(attrs.success);
                }else{
                    var target = $(".form-group.error")[0];
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, 1000); //animate scroll to first error
                }
            });
        }


        var addBusyWaiting=function(element){
            var bw = '<p class="help-inline busywaiting"><img src="assets/img/spinner.gif"></p>';
            element.after(bw);
        };

        var removeBusyWaiting=function(element){
            element.parent().find('.busywaiting').remove();
        };


        var dateValidate=function(element, attrs){
            var selMonth, selYear, yySel, mmSel;
            
            /*---Set values for Month/Year - always used---*/
            var today = new Date();
            var thisYear = today.getYear()+1900;
            var thisMonth = today.getMonth();
            if(thisMonth < 10){thisMonth = 0+thisMonth;}

            /*-----Set values for conditional variables-----*/

            
            /*if yy-sel attr we blurred off month...
             yy-sel attr contains selector string for year select*/
            if(!!element.attr('yy-sel')){
                yySel = element.attr('yy-sel');
                selYear = parseInt($(yySel).val(), 10);
            }

            /*if mm-sel attr we blurred off year...
             mm-sel attr contains selector string for year select */
            if(!!element.attr('mm-sel')){
                mmSel = element.attr('mm-sel');
                selMonth = parseInt($(mmSel).val(), 10);
            }


            /*-----Error handling Logic----*/

            //if blurring off month and selYear === thisYear
            if(!!element.attr('ccmm') && (selYear === thisYear)){
                //get selected month value from element.val()
                selMonth = element.val();
                
                //if selMonth < thisMonth throw error
                if(selMonth < thisMonth){
                    showError('Expiration dates cannot be in the past', element);
                }

                //if blurring off year and selMonth < thisMonth
            } else if(!!element.attr('ccyy') && (selMonth < thisMonth)){
               //get selected year from element.val()
                selYear = parseInt(element.val(), 10);
                
                //if selYear === thisYear then...
                if(selYear === thisYear){
                
                    /*...check to make sure we don't already have an error displayed
                    if we dont throw error... */
                    if(!$(mmSel).closest('.form-group').hasClass('error')){
                        showError('Expiration dates cannot be in the past', $(mmSel));
                    }
                    
                }else{
                    //when you blur off the year and selYear is > thisYear then remove any errors
                    $(mmSel).closest('.form-group').removeClass('error');
                    $(mmSel).next('.error').remove();
                }

            }

        };

        }

    };
})

.directive('ccvalidation',function($translate){
    return function(scope, element, attrs){
        var wrapper = element.parent();
        
        element.focus(function(){
            element.addClass('active');
        });
           
       element.blur(function(){
            ccvalidate(element);
        });

       var ccvalidate=function(element){

              element.validateCreditCard(function(result){

                if(!result.length_valid || result.card_type === null){
                   if((!wrapper.hasClass('error') && !element.next().hasClass('error')) && element.hasClass('active')){
                        wrapper.removeClass('success').addClass('error');
                        msg = $translate("error_invalid_cc");
                        msgSpan = '<span class="error help-block">'+msg+"</span>";
                        element.after(msgSpan);
                    }
                }
                else{
                    wrapper.removeClass('error').addClass('success');
                    wrapper.find('.error').remove();
                }

                if(result.card_type){
                    var card = "img."+result.card_type.name;
                    $(card).addClass('selected');
                }else{
                    $("img.cc.selected").removeClass('selected');
                }
            });

       };
                
        
    };
})

.directive('sumLength', function($timeout, $translate){
    return function(scope, element, attrs){
        var combinedInputs = element.attr('combined-inputs');
        
        $(function(){
          
             $timeout(function(){

                if(element.val()!==""){
                    checkLength(element);
                }

            }, 10);


        });

        element.blur(function(){
                checkLength($(this));
        });
        
        element.focus(function(){
             $(combinedInputs).closest('.form-group').removeClass('error');
             $(combinedInputs).closest('.form-group').find(".error").remove();

        });

        var checkLength=function(element){
            var otherInput, totalLength, maxLegnth, input1, input2;
            maxLength = element.attr("sum-length-max");
            
            var inputArr = combinedInputs.split(",");
            input1 = $(inputArr[0]);
            input2 = $(inputArr[1]);
            

            totalLength=input1.val().length+input2.val().length;

            //if we've already displayed an error message on page load 
            //we don't want to do it again

            if(totalLength > maxLength && !$(combinedInputs).next().hasClass('error')){
                var msg= $translate("error_sumLength", {value: maxLength});
                var container = $("<span />");
                container.addClass('help-inline error').text(msg);
                $(combinedInputs).after(container);
                $(combinedInputs).closest('form-group').addClass('error');
            }
        };
    };
})

;
