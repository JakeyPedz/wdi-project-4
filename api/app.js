// Require packages
var express        = require('express');
var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var cookieParser   = require("cookie-parser");
var mongoose       = require('mongoose');
var passport       = require('passport');
var methodOverride = require("method-override");
var jwt            = require('jsonwebtoken');
var expressJWT     = require('express-jwt');

// Require relative files
var config = require('./config/config');
var routes = require('./config/routes');
var secret = require('./config/config').secret; // Set up secret used by JWT
require('./config/passport')(passport);