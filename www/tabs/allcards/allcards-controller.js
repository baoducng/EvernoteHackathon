angular.module('evernote.allcards.controller', [])
.controller('allcardsController', function($scope, dummyData){
  $scope.cards = dummyData.data;

})
