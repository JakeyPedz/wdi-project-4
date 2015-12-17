angular
  .module('Qrowded')
  .factory('currentUser', CurrentUser);

CurrentUser.$inject = ["TokenService"]
function CurrentUser(TokenService){

  var user = null;

  return {
    getUser: function(){
      return user ? user : TokenService.decodeToken();
    },
    removeUser: function(){
      return user = null;
    }
  }

}