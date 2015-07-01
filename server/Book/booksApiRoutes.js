"use strict";
var booksApiController = require("./booksApiController");

// these methods are not currently called within the app. however, they could be useful down the line.
module.exports = function(app){

  app.route("/getByAuthor")
   .get(booksApiController.getByAuthor);

  // app.route("/getByTitle")
  //  .get(booksApiController.getByTitle);

  app.route("/getByGenre")
   .get(booksApiController.getByGenre);

};
