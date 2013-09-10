module.exports = function (karma) {
    karma.configure({
    // base path, that will be used to resolve files and exclude
    basePath: '../../../../Umbraco',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
       'lib/jquery/jquery-2.0.3.min.js',

       'lib/angular/1.1.5/angular.js',
       'lib/angular/1.1.5/angular-cookies.min.js',
       'lib/angular/1.1.5/angular-mocks.js',

        /* START: Chris added */
        'lib/angular/1.1.5/angular-mobile.js',
        /* END: Chris added */

        /*
        For angular 1.2:
        'lib/angular/1.2/angular.js',
        'lib/angular/1.2/angular-route.min.js',
        'lib/angular/1.2/angular-touch.min.js',
        'lib/angular/1.2/angular-cookies.min.js',
        'lib/angular/1.2/angular-animate.min.js',
        'lib/angular/1.2/angular-mocks.js',
        */

        'lib/underscore/underscore.js',
        'lib/umbraco/Extensions.js',
        'lib/yepnope/yepnope.min.js',

        //'test/config/app.unit.js',
        //'src/common/mocks/umbraco.servervariables.js',

        //'src/common/directives/*.js',
        //'src/common/filters/*.js',
        //'src/common/services/*.js',
        //'src/common/security/*.js',
        //'src/common/resources/*.js',
        //'src/common/mocks/resources/*.js',
        //'src/views/**/*.controller.js',
        //'test/unit/**/*.spec.js',
        'Js/umbraco.directives.js',
        'Js/umbraco.filters.js',
        'Js/umbraco.services.js',
        'Js/umbraco.security.js',
        'Js/umbraco.resources.js',

        'Js/app.js',
        '../App_Plugins/BwtTextboxMultipleCharacterLimited/BwtTextboxMultipleCharacterLimited.controller.js',
        '../App_Plugins/BwtTextboxMultipleCharacterLimited/test/unit/unit_01.js',
        '../App_Plugins/BwtTextboxMultipleCharacterLimited/test/unit/unit_02.js'
    ],

    // list of files to exclude
    exclude: [],

    // use dolts reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots', 'progress', 'junit', 'teamcity'
    // CLI --reporters progress
    reporters: ['progress'],

    // web server port
    // CLI --port 9876
    port: 9876,

    // cli runner port
    // CLI --runner-port 9100
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    // CLI --colors --no-colors
    colors: true,

    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    // CLI --log-level debug
    logLevel: karma.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // CLI --browsers Chrome,Firefox,Safari
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 5000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 500,

    // compile coffee scripts
    preprocessors: {
    '**/*.coffee': 'coffee'
    },

    plugins: [
    'karma-jasmine',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-phantomjs-launcher'
    ]

  });
};



