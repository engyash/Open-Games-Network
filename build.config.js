/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    /**
     * The `build_dir` folder is where our projects are compiled during
     * development and the `compile_dir` folder is where our app resides once it's
     * completely built.
     */
    build_dir: 'build',
    compile_dir: 'bin',

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`src/common`) template HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file, `less` is our main stylesheet, `unit` contains our
     * app's unit tests, `fixture` contains $http data fixtures, and `scenario`
     * contains our app's e2e tests.
     */
    app_files: {
        js: ['src/**/*.js', '!src/**/*.spec.js', '!src/**/*.fixture.js', '!src/**/*.scenario.js'],
        jsunit: ['src/**/*.spec.js'],
        jsfixture: ['src/**/*.fixture.js'],
        jsscenario: ['src/**/*.scenario.js'],

        coffee: ['src/**/*.coffee', '!src/**/*.spec.coffee', '!src/**/*.fixture.coffee', '!src/**/*.scenario.coffee'],
        coffeeunit: ['src/**/*.spec.coffee'],
        coffeefixture: ['src/**/*.fixture.coffee'],
        coffeescenario: ['src/**/*.scenario.coffee'],

        atpl: ['src/app/**/*.tpl.html'],
        ctpl: ['src/common/**/*.tpl.html'],

        html: ['src/index.html'],
        less: ['src/less/bootstrap-editable.less',
            'src/less/main.less',
            'vendor/bootstrap/dist/css/bootstrap.css',
           'src/app/office/dashboard/dashboard.less',
           'src/app/office/dashboard/dashboardmoz.less',
           'src/app/office/dashboard/dashboardallbrowser.less',
           'src/app/office/dashboard/successtracker.less',
          
           'src/app/css/site.less',
           'src/app/css/designer.css',
            'src/app/css/font-awesome.css',
            'src/app/css/fonts.css',
            'src/app/css/designer.css',
            'src/app/css/style-responsive.css',
           'vendor/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.css',
            'src/less/calendar.less',
            'vendor/bootstrap-timepicker/less/timepicker.less',
            //'src/less/content.min.less',
            'src/less/skin.min.less',
            'src/less/jquery.qtip.less',
            'src/less/jquery-ui.less',
            // fancybox
             'vendor/fancybox/fancybox.css',
             'vendor/fancybox/fancybox-thumbs.css',
             'vendor/fancybox/fancybox-buttons.css'
        ]
    },


    /**
     * This is the same as `app_files`, except it contains patterns that
     * reference vendor code (`vendor/`) that we need to place into the build
     * process somewhere. While the `app_files` property ensures all
     * standardized files are collected for compilation, it is the user's job
     * to ensure non-standardized (i.e. vendor-related) files are handled
     * appropriately in `vendor_files.js`.
     *
     * The `vendor_files.js` property holds files to be automatically
     * concatenated and minified with our project source files.
     *
     * The `vendor_files.css` property holds any CSS files to be automatically
     * included in our app.
     *
     * The `vendor_files.dev` property holds any JS files to be included for
     * development only.
     *
     */

    vendor_files: {
        js: [
          'vendor/jquery/jquery.js',
          'vendor/jquery-ui/ui/jquery-ui.js',
          'vendor/modernizr/modernizr.js',
          'vendor/bootstrap/dist/js/bootstrap.js',
          'vendor/underscore/underscore.js',
          'vendor/angular/angular.js',
          'vendor/angular-loader/angular-loader.js',
          'vendor/angular-cookies/angular-cookies.js',
          'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
          'vendor/angular-ui/build/angular-ui.js',
          'vendor/angular-ui-utils/modules/route/route.js',
          'vendor/angular-ui-router/release/angular-ui-router.js',
          'vendor/angular-resource/angular-resource.js',
          'vendor/angular-sanitize/angular-sanitize.js',
          'vendor/angular-translate/angular-translate.js',
          'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
          'vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
          'vendor/angular-translate-storage-local/angular-translate-storage-local.js',
          'vendor/angularjs-modal-service/src/createDialog.js',
          // x-editable
          // 'vendor/x-editable/dist/bootstrap-editable/js/bootstrap-editable.js',
          'vendor/jQuery-CreditCardValidator/jquery.creditCardValidator.js',
          // Tiny MCE
          'vendor/angular-ui-tinymce/src/tinymce.js',
          'vendor/tinymce/tinymce.min.js',
          'vendor/tinymce/themes/modern/theme.min.js',
            // QTip2
          'vendor/qtip2/jquery.qtip.js',
            // DateTime Picker
          'vendor/jquery.datetimepicker/jquery.datetimepicker.js',
            // Full Calendar
          'vendor/timezone-js/src/date.js',
          'vendor/fullcalendar/fullcalendar.js',
          'src/assets/js/jqueryCalendar.js',
          'src/assets/js/tockenizer.js',
          'src/assets/js/accordion-menu/jquery.dcjqaccordion.2.7.js',
         //'src/assets/js/nicescroll/jquery.nicescroll.min.js',
          'src/assets/js/scripts.js',

         //'src/assets/js/bootstrap.min.js',
            // Used for Messanging APP
          "vendor/messaging/modules/exigo.cookies.js",
          'vendor/jquery/models/searchresult.js',
          "vendor/messaging/modules/ProtoTypes.js",
          // Fancybox
          "vendor/fancybox/fancybox.pack.js",
          "vendor/fancybox/fancybox.js",
          "vendor/fancybox/fancybox.thumbs.js",
          "vendor/fancybox/fancybox.thumbs.js",
          "vendor/fancybox/fancybox.buttons.js"
        ],
        css: [
            'vendor/angular-ui-tinymce/src/skins/lightgray/skin.min.css',
            'vendor/angular-ui-tinymce/src/skins/lightgray/content.min.css'
        ],
        dev: [
          'vendor/angular-mocks/angular-mocks.js'
        ]
    }
};
