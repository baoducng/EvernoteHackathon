angular.module('evernote.login', ['evernote.login.controller'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "tabs/login/login.html",
          controller: 'loginController'
        }
      }
    })
});
