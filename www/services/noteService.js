angular.module('evernote').service('noteService', function(Restangular){
  this.getAll = function(){
    return Restangular.one('S=s1:U=8f613:E=14fa18711d7:C=14849d5e278:P=1cd:A=en-devtoken:V=2:H=8cb95491515dfd2a0bb42b2a94f2e372/dev00')
            .get().then(function(data){
               return data;
             }, function(error){
               return error;
             })
  }
});
