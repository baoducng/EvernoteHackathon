angular.module('evernote.review.controller', [])
.controller('reviewController', function($scope, dummyData){
  $scope.current = 0;
  $scope.currentCard = dummyData.data[$scope.current];
  $scope.frontShowing = true;
  //if there is no cards to review, show alert
  $scope.message = 0;
  if (dummyData.data.length === 0){
    $scope.message = 1;
  }
  $scope.showBack = function(){
    $scope.frontShowing = false;
  }
  $scope.next = function(){
    $scope.current++;
    $scope.currentCard = dummyData.data[$scope.current];
    $scope.$apply();
    $scope.frontShowing = true;
    if ($scope.current === dummyData.data.length){
      $scope.message = "Finished";
    }
  }

})
