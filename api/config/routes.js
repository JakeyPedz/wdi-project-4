// Require Packages
var express        = require('express'),
var router         = express.Router(),
var bodyParser     = require('body-parser'), //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var passport       = require('passport');

// Require Controllers 
var projectsController = require('../controllers/projects');
var authController     = require('../controllers/auth');

// Establish 'router'
var router = express.Router();


// Front End Routes
router.route('/projects')
router.route('/projects/:title')
.get(projectsController.getProject)


// Authentication Routes
router.post('/login', authController.login);
router.post('/register', authController.register);
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
module.exports = router 