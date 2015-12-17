angular
  .module('Qrowded')
  .controller('UsersController', UserController)

UserController.$inject = ['User', 'TokenService', '$state', 'currentUser', '$stateParams']
function UserController(User, TokenService, $state, currentUser, $stateParams) {
  var self = this;

  self.all         = [];
  self.user        = {};
  self.currentUser = currentUser.getUser();
  self.login       = login;
  self.register    = register;
  self.disappear   = disappear;
  self.getUsers    = getUsers;  
  self.getUser     = getUser;
  self.isLoggedIn  = isLoggedIn;

  if ($stateParams.id) {
    self.getUser($stateParams.id)
  }

  function handleLogin(res) {
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    if (token) {
      console.log(res);
      // self.getUsers();
      self.user = TokenService.decodeToken();
    }

    self.message = res.message;
  }

  function login() {
    console.log("arrived")
    User.login(self.user, handleLogin);
    $state.go('projects');
  }

  function register() {
    User.register(self.user, handleLogin);
    $state.go('projects');
  }

  function disappear() {
    TokenService.removeToken();
    currentUser.removeUser();
    self.all   = [];
    self.user = {}; 
  }

  function getUsers() {
    User.query(function(data) {
      self.all = data.users;
    });
  }

  function getUser(id){
    User.get({ id: id }, function(data) {
      console.log("USERS:", data)
      self.user = data.user;
    })
  }

  function isLoggedIn(){
    return !!TokenService.getToken();
  }

  if (self.isLoggedIn()) {
    self.getUsers();
    // self.user = TokenService.decodeToken();
  }

  return self;
}