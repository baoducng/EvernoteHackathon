angular.module('evernote.review', ['evernote.review.controller'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.review', {
      url: "/review",
      views: {
        'menuContent' :{
          templateUrl: "tabs/review/review.html",
          controller: 'reviewController'
        }
      }
    })
});
