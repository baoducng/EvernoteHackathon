angular.module('evernote.login.controller', [])
.controller('loginController', function($scope, OAuth){
  $scope.cards = "OKAY THIS SHIT IS WORKING";


  // var hostName = "http://sandbox.evernote.com";
  // var options,oauth;
  // var options = {
  //   consumerKey: 'baoducng',
  //   consumerSecret: 'fc2054b3f5790757',
  //   //what is this?
  //   callbackUrl : hostName,
  //   signatureMethod : "HMAC-SHA1",
  // };
  // oauth = OAuth(options);
  // $scope.doLogin = function(){
  //   oauth.request({
  //     'method': 'GET',
  //     'url': hostName + '/oauth',
  //     'success': function(data){
  //       $scope.cards = data;
  //     },
  //     'failure': function(error){
  //       $scope.cards = error;
  //     }});
  // }
})
