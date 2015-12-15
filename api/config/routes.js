var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var projectsController = require('../controllers/projects');

router.route('/projects')

//GET all projects
.get(projectsController.getAll)

router.route('/projects/:title')

// GET return specific candy
.get(projectsController.getProject)

module.exports = router 

router.post('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }), authController.gitRegister);

router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), authController.gitCallback);


app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));