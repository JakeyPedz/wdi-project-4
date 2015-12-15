// Require Packages
var express        = require('express');
var router         = express.Router();
var passport       = require('passport');
var app            = express();

// Require Controllers 
var projectsController = require('../controllers/projectsController');
var authController     = require('../controllers/authenticationController');

// Project Routes
router.route('/projects')
  .get(projectsController.projectsIndex)
  .post(projectsController.projectsCreate)

router.route('/projects/:id')
  .get(projectsController.projectsShow)


// Authentication Routes
router.route('/login')
  .post(authController.login);
router.route('/register')
  .post(authController.register);

// app.get('/auth/facebook', passport.authenticate('facebook'));
// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));


module.exports = router 