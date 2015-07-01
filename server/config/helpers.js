"use strict";

// jwt = JSON Web Token
var jwt = require("jwt-simple");
// var request = require("request");

module.exports = {
  // TODO: decide if we need these

  // errorLogger: function (error, req, res, next) {
  //   // log the error then send it to the next middleware in
  //   // middleware.js

  //   console.error(error.stack);
  //   next(error);
  // },

  // errorHandler: function (error, req, res, next) {
  //   // send error message to client
  //   // message for gracefull error handling on app
  //   res.send(500, {error: error.message});
  // },

  // used by bookApiController to format books from googleBooks
  formatBooks: function(obj){
    // TODO: what is better way to bind this context?
    var that = this;
    var resObj = JSON.parse(obj); //this is potentially many books
    var result = [];
    // iterate through each result
    resObj.docs.forEach(function(doc){
      // make sure all desired fields exist
      if(doc.isbn && doc.title_suggest && doc.author_name && doc.subject){
        var newBook = {};
        // using isbn internally but not writing to object
        var isbn = doc.isbn[1] || doc.isbn[0];
        newBook.title = doc.title_suggest;
        newBook.author = doc.author_name[0];
        // TODO filter out weird words in subject field
        newBook.genre = doc.subject[1] || doc.subject[0];
        newBook.sample = that.getBookText();
        newBook.amazonLink = "www.amazon.com/coolBook";
        newBook.image = that.getBookImage(this, isbn);
        // console.log("this: ", that);
        result.push(newBook);
    }
    });
    return result;
  },

  // TODO:
  getBookImage: function(isbn){
    return "this is an image from isbn: " + isbn;
  },

  getBookText: function(){
    var baseUrl = "http://ia700401.us.archive.org";
    console.log(baseUrl);
    return "sample";
  },

  decode: function (req, res, next) {
    var token = req.headers["x-access-token"];
    var user;

    if (!token) {
      return res.send(403); // send forbidden if a token is not provided
    }
    try {
      // decode token and attach user to the request
      // for use inside our controllers
      user = jwt.decode(token, "secret");
      req.user = user;
      next();
    } catch(error) {
      return next(error);
    }

  }
};
