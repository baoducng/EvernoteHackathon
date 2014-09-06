angular.module('evernote.search.controller', [])
.controller('searchController', function($scope){
  $scope.newCard = {front: "", back: ""};
  $scope.makeCard = function(){
    console.log($scope.newCard);
  }
})
