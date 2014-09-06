angular.module('evernote.review.controller', [])
.controller('reviewController', function($scope, noteService){
  $scope.current = 0;
  $scope.message = 0;
  $scope.frontShowing = true;
  noteService.getAll().then(function(data){
    $scope.cards = [].concat(data.due);
    $scope.currentCard = $scope.cards[$scope.current];
    if ($scope.cards.length === 0){
      $scope.message = 1;
    }
  }, function(error){
    console.log(error);
  });

  //if there is no cards to review, show alert
  $scope.showBack = function(){
    $scope.frontShowing = false;
  }
  $scope.next = function(){
    $scope.current++;
    $scope.currentCard = $scope.cards[$scope.current];
    $scope.frontShowing = true;
    if ($scope.current === $scope.cards.length){
      $scope.message = "Finished";
    }
  }

})
