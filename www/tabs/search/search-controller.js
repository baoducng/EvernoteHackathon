angular.module('evernote.search.controller', [])
.controller('searchController', function($scope, noteService, $timeout, $state, $http){
  $scope.newCard = {front: "", back: ""};
  var data = {
    id: 'dev00',
    front: $scope.newCard.front,
    back: $scope.newCard.back,
    token: 'S=s1:U=8f613:E=14fa18711d7:C=14849d5e278:P=1cd:A=en-devtoken:V=2:H=8cb95491515dfd2a0bb42b2a94f2e372'
  };

  $scope.makeCard = function(){
    noteService.makeNote({
      id: 'dev00',
      front: $scope.newCard.front,
      back: $scope.newCard.back,
      token: 'S=s1:U=8f613:E=14fa18711d7:C=14849d5e278:P=1cd:A=en-devtoken:V=2:H=8cb95491515dfd2a0bb42b2a94f2e372'
    });
    $timeout(function(){
      $state.go('app.allcards')
    }, 3000)
  }
})

/*
POST
for UPDATE to samething /update

{id: 'dev00',
 front: 'string',
 score: '' //1 -3,
 token: 'OAuthtoken'

}
//POST
for add to samething /add

{id: 'dev00',
 front: 'string',
 back: 'string',
 token: 'OAuthtoken',
}
*/
