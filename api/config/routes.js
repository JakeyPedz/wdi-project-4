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