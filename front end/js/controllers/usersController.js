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
  // self.updateUser  = updateUser;
  self.hasInterest = hasInterest;
  self.addInterest = addInterest;
  self.removeInterest = removeInterest;

  if ($stateParams.id) {
    self.getUser($stateParams.id)
    self.params = $stateParams.id
  }

  // Interests
  self.interests = [
    "Eco Projects",
    "Debt Securities",
    "Tech",
    "Alternative",
    "Equine Equity",
    "Asian",
    "Debentures",
    "P2B Lending",
    "Funds",
    "Real Estate",
    "Pension Funds",
    "Rewards Fund",
    "American",
    "Invoice Finance",
    "Film",
    "American"
  ];

  function hasInterest(interest){
    if(self.user.interests.indexOf(interest) >= 0) return true
    return false
  }

  function addInterest(interest){
    self.user.interests.push(interest)
    User.addInterest({id: self.user._id}, {interest:interest}, function(data){
      console.log(data)
    });
  }

  function removeInterest(interest){
    var index = self.user.interests.indexOf(interest);
    self.user.interests.splice(index, 1);
    User.removeInterest({id: self.user._id}, {interest:interest}, function(data){
      console.log(data)
    });
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

  // function updateUser(id){
  //   console.log("Updating", id)
  //   // Update User
  // }

  function isLoggedIn(){
    return !!TokenService.getToken();
  }

  if (self.isLoggedIn()) {
    self.getUsers();
    // self.user = TokenService.decodeToken();
  }

  return self;
}