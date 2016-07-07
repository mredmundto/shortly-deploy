// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });
var bcrypt = require('bcrypt-nodejs');

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost/db'); 


module.exports = db;


// var User = new Schema({
//   username: {type: String, required: true, unique: true},  
//   password: {type: String, required: true },
//   time: { type: Date, default: Date.now }
// });

// User.methods.comparePassword = function(password, callback) {
//   console.log('Comparing password!');
//   bcrypt.compare(password, this.password, function(err, isMatch) {
//     if (err) { return callback(null); }
//     callback(isMatch);
//   });
// };

// var User = mongoose.model('User', User); 
// module.exports = User;

// /////////////////////////////////////////

// var june = new User ({username: 'yess', password: 'yay edmund'})
//   .save(function(err, newUser) {
//     if (err) {
//       //throw err; 
//       console.log('there was an error making user');
//     } else { 
//       console.log('CREATING', newUser);
//     }
//   }); 


// User.findOne({username: 'June'}, function(err, found) {
//   if (err) {
//     console.log('cannot find user ERROR');
//   }
//   if (found) {
//     console.log('FOUND USER', found);
//   } else {
//     console.log('cannot find user NO ERROR');
//   }
// });
