angular.module('evernote.settings', ['evernote.settings.controller'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent' : {
          templateUrl: "tabs/settings/settings.html",
          controller: 'settingsController'
        }
      }
    })
    .state('app.help', {
      url: "/help",
      views: {
        'menuContent' : {
          templateUrl: "tabs/settings/help.html"
        }
      }
    })
});
