// express standard modules
var express = require('express')
, http = require('http')
, path = require('path');

// express middleware
var bodyParser = require('body-parser')
, cookieParser = require('cookie-parser')
, static = require('serve-static')
, errorHandler = require('errorhandler');

// error handler module
var expressErrorHandler = require('express-error-handler');

// session middleware
var expressSession = require('express-session');

// file upload middleware
var multer = require('multer');
var fs = require('fs');

// ajax cors
var cors = require('cors');
