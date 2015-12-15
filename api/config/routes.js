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

// STILL NEED TO TIDY THIS UP


router.route('/projects')


.get(projectsController.getAll)

router.route('/projects/:title')

// GET return specific Project
.get(projectsController.getProject)




app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
module.exports = router 