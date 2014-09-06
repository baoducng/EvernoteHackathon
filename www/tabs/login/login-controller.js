angular.module('evernote.login.controller', [])
.controller('loginController', function($scope){
  $scope.cards = "OKAY THIS SHIT IS WORKING";
  $scope.doLogin = function(){
    console.log($scope.loginData);
  }
})
