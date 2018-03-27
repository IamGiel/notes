//imports
var 
  express = require("express"),
  path = require("path"),
  favicon = require("serve-favicon"),
  logger = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require('body-parser'),
  hbs = require("express-handlebars"),

  //routes
  routes = require("./routes/index"),
  app = express();

//view engines
app.engine("hbs", hbs({extname: "hbs", defaultLayout: 'layout', layoutsDir: __dirname + "/views/layouts"}))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// un-comment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//middle-wares -
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//filtering path/routes that will handle requests
app.use("/", routes);

var PORT = process.env.PORT || 8007;


//error handling
app.use(function(req, res, next){
  var err = new Error( 'no page like that is under views - page not found');
  err.status =  404;
  next(err);
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    shout: err.shout,
    error: {}
  });
});

app.listen(PORT, function(err) {
  if (!err) console.log("Site is live on ", PORT);
  else console.log(err);
});