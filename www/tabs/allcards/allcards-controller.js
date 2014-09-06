angular.module('evernote.allcards.controller', [])
.controller('allcardsController', function($scope, noteService){

  noteService.getAll().then(function(data){
    $scope.cards = [].concat(data.due).concat(data.not_due);
  }, function(error){
    console.log(error)
  });

})
