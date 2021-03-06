// Require Packages
var express        = require('express');
var router         = express.Router();
var passport       = require('passport');
var app            = express();

// Require Controllers 
var projectsController = require('../controllers/projectsController');
var usersController    = require('../controllers/usersController');
var authController     = require('../controllers/authenticationController');

// Authentication Routes
router.route('/login')
  .post(authController.login);
router.route('/register')
  .post(authController.register);
  

// Project Routes
router.route('/projects')
  .get(projectsController.projectsIndex)
  .post(projectsController.projectsCreate)

router.route('/projects/:id')
  .get(projectsController.projectsShow)


router.route('/users')
  .get(usersController.usersIndex)

router.route('/users/:id')
  .get(usersController.usersShow)

router.route('/users/:id/addinterest')
  .put(usersController.usersAddInterest)

router.route('/users/:id/removeInterest')
  .put(usersController.usersRemoveInterest)




// app.get('/auth/facebook', passport.authenticate('facebook'));
// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));


module.exports = router 