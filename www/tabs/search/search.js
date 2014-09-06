angular.module('evernote.search', ['evernote.search.controller'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "tabs/search/search.html",
          controller: 'searchController'
        }
      }
    })
});
