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
  $scope.next = function(rating){
    $scope.current++;
    $scope.currentCard = $scope.cards[$scope.current];
    $scope.frontShowing = true;
    if ($scope.current === $scope.cards.length){
      $scope.message = "Finished";
    }
    var score = {
      id: 'dev00',
      score: rating,
      token:'S=s1:U=8f613:E=14fa18711d7:C=14849d5e278:P=1cd:A=en-devtoken:V=2:H=8cb95491515dfd2a0bb42b2a94f2e372'
    }
    noteService.update(score);
})
//
// {id: 'dev00',
//  front: 'string',
//  score: '' //1 -3,
//  token: 'OAuthtoken'
//
// }
