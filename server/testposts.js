"use strict";

var User = require("./../server/User/userModel.js");
var Book = require("./../server/Book/bookModel.js");


module.exports = function() {

  function errorHandler(err) {
    if (err) {
      console.log("error saving");
      console.log(err);
    }
  }

  var user = new User({
    username: "thepurpleone",
    email: "prince@prince.org",
    password: "raspberryberet",
    filterPreferences: ["fantasy", "sci-fi"],
    stack: []
  });

  user.save(errorHandler);

  var book1 = new Book({
    title: "Yellow River",
    author: "I.P. Daley",
    genre: "drama",
    sample: "lorem ipsum",
    amazonLink: "http://www.amazon.com/1"
  });
  var book2 = new Book({
    title: "Ouch!",
    author: "A.B. Stung",
    genre: "fantasy",
    sample: "lorem ipsum",
    amazonLink: "http://www.amazon.com/2"
  });
  var book3 = new Book({
    title: "Robots",
    author: "Anne Droid",
    genre: "sci-fi",
    sample: "lorem ipsum",
    amazonLink: "http://www.amazon.com/3"
  });
  var book4 = new Book({
    title: "I Love Mathematics",
    author: "Adam Up",
    genre: "education",
    sample: "lorem ipsum",
    amazonLink: "http://www.amazon.com/4"
  });

  book1.save(errorHandler);
  book2.save(errorHandler);
  book3.save(errorHandler);
  book4.save(errorHandler);


  Book.findOne({title: "Robots"}, function(err, book) {
    if (err) {
      console.log("could not find book");
    } else {
      console.log(book);
    }
  });

};
