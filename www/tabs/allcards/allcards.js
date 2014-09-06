angular.module('evernote.allcards', ['evernote.allcards.controller'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.allcards', {
      url: "/allcards",
      views: {
        'menuContent' :{
          templateUrl: "tabs/allcards/allcards.html",
          controller: 'allcardsController'
        }
      }
    })
});
