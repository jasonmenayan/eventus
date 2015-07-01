"use strict";
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Q = require("q");
var SALT_WORK_FACTOR = 10;
// autoIncrement is used to assign a unique number to each book entering the db
var autoIncrement = require("mongoose-auto-increment");

var connection = mongoose.createConnection("mongodb://user:wemakeawesomeshit@ds051110.mongolab.com:51110/page100");
autoIncrement.initialize(connection);

// define data related to a single user
var UserSchema = new mongoose.Schema({
  email: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  filterPreferences: {type: [String], default: ["Fantasy", "Sci-fi", "Education", "Drama", "Poetry", "Fiction", "Classic", "Modernism", "Mystery", "Horror", "Historical Fiction", "Non-fiction"]},
  salt: String,
  bookPosition: {type: Number, default: 0},
  stack: [{ type: Number, ref: "Book" }]
});

UserSchema.methods.comparePasswords = function(possiblePw){
  var defer = Q.defer();
  var savedPw = this.password;
  bcrypt.compare(possiblePw, savedPw, function(err, match){
    if(err){
      defer.reject(err);
    } else {
      defer.resolve(match);
    }
  });
  return defer.promise;
};

UserSchema.pre("save", function(next){
  var user = this;

  // hash pw if modified or new
  if (!user.isModified("password")){
    return next();
  }

  // hash pw and salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(error, hash){
      if(error){
        return next(error);
      }

      // override plain pw with hashed pw
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

UserSchema.plugin(autoIncrement.plugin, "User");

module.exports = mongoose.model("users", UserSchema);
