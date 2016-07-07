// var db = require('../config');
// var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');

// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function() {
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function() {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });

// module.exports = User;


// /////////////////


var bcrypt = require('bcrypt-nodejs');

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var User = new Schema({
  username: {type: String, required: true, unique: true},  
  password: {type: String, required: true },
  time: { type: Date, default: Date.now }
});

User.methods.comparePassword = function(password, callback) {
  console.log('Comparing password!');
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return callback(null); }
    callback(isMatch);
  });
};

var User = mongoose.model('User', User); 
module.exports = User;