"use strict";
// var mongoose = require("mongoose");
var request = require("request");

// in helpers you will find the function that formats the book results
var helpers = require("./../config/helpers");

// In their current form, these methods are not tied into an automatic function of the app.
module.exports = {
  //TODO: pass in author, title, instead of hard coding?

  // get a list of books by a certain author. hard coded for now in var author
  getByAuthor: function(req, res){
    var author = "dahl";
    var fullPath = ("http://openlibrary.org/search.json?author=").concat(author);
    request(fullPath, function(error, response, body){
      if(!error && response.statusCode === 200){
        var resBody = helpers.formatBooks(body);
        res.send(resBody);
      }
    });
  },

  // TODO do we want this functionality? it returns one book
  // getByTitle: function(req, res){
  //   // var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
  //   var title = "Of Mice and Men";
  //   var fullPath =("http://openlibrary.org/search.json?title=").concat(title.split(" ").join("+"));
  //   // var fullPath = "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json";
  //   request(fullPath, function(error, response, body){
  //     if(!error && response.statusCode === 200){
  //       var resBody = helpers.formatBooks(body);
  //       res.send(resBody)
  //     }
  //   });
  // },

  // get a list of books in a certain genre. currently hard coded in var genre
  getByGenre: function(req, res){
    var genre = "mystery";
    var genreConcat = genre.split(" ").join("\\");
    var fullPath = ("http://openlibrary.org/search.json?subject=").concat(genreConcat);
    request(fullPath, function(error, response, body){
      if(!error && response.statusCode === 200){
        var resBody = helpers.formatBooks(body);
        res.send(resBody);
      }
    });
  }

  //, bulkAddtoDb: function(req, res, searchType, value){
  //   console.log(req, res, searchType, value);
  //   console.log("adding stuff to db");
  // }

};
