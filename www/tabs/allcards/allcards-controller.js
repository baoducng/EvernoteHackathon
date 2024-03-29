angular.module('evernote.allcards.controller', [])
.controller('allcardsController', function($scope, noteService){
  $scope.selected = 0;
  $scope.showAnswer = false;
  noteService.getAll().then(function(data){
    $scope.cards = [].concat(data.due).concat(data.not_due);
    console.log('get data');
    console.log(data);
  }, function(error){
    console.log(error)
  });
  $scope.zoom = function(front, back){
    $scope.selected = 1;
    $scope.zoom1 = front;
    $scope.zoom2 = back;
  };
  $scope.show = function(){
    $scope.showAnswer = !$scope.showAnswer;
  }
  $scope.reset = function(){
    $scope.selected = 0;
    $scope.showAnswer = false;
  }

})
