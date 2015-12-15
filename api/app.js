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