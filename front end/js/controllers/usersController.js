angular
  .module('Qrowded')
  .controller('UsersController', UserController)

UserController.$inject = ['User', 'TokenService', '$state']
function UserController(User, TokenService, $state) {
  var self = this;

  self.all    = [];
  self.user   = {};

  function handleLogin(res) {
    console.log("inside handleLogin")
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    if (token) {
      console.log(res);
      // self.getUsers();
      self.user = TokenService.decodeToken();
    }

    self.message = res.message;
  }

  self.login = function() {
    console.log("arrived")
    User.login(self.user, handleLogin);
    $state.go('viewProjects');
  }

  self.register = function() {
    User.register(self.user, handleLogin);
    $state.go('viewProjects');
  }

  self.disappear = function() {
    TokenService.removeToken();
    self.all   = [];
    self.user = {}; 
  }

  self.getUsers = function() {
    self.all = User.query();
  }

  self.isLoggedIn = function(){
    return !!TokenService.getToken();
  }

  if (self.isLoggedIn()) {
    self.getUsers();
    self.user = TokenService.decodeToken();
  }

  return self;
}