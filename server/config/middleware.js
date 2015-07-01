"use strict";
// var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var helpers = require("./helpers.js");

module.exports = function (app, express) {

  // TODO: figure out if express.Router is still needed. mixed options online and works as is
  var userRouter = express.Router();
  var bookRouter = express.Router();
  var booksApiRouter = express.Router();

  // logs http requests
  app.use(morgan("dev"));

  // parses body of http request
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());


  app.use("/user", userRouter);
  app.use("/book", bookRouter);

  app.use("/booksApi", booksApiRouter);
  app.use("./../User", helpers.decode);

  // TODO figure out why this format breaks it:
  //   require("../User/userRoutes.js")(userRouter);

  require("./../User/userRoutes.js")(userRouter);
  require("./../Book/bookRoutes.js")(bookRouter);
  require("./../Book/booksApiRoutes.js")(booksApiRouter);

};
