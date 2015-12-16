angular
  .module('Qrowded')
  .controller('UsersController', UserController)

UserController.$inject = ['User', 'TokenService']
function UserController(User, TokenService) {
  var self = this;

  self.all    = [];
  self.user   = {};
  self.sanityCheck = "Hello"

  function handleLogin(res) {
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    if (token) {
      console.log(res);
      self.getUsers();
      self.user = TokenService.decodeToken();
    }

    self.message = res.message;
  }

  self.login = function() {
    console.log("arrived")
    User.login(self.user, handleLogin);
  }

  self.register = function() {
    User.register(self.user, handleLogin);
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