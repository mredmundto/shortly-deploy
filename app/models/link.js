// var db = require('../config');
// var crypto = require('crypto');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;


var bcrypt = require('bcrypt-nodejs');

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;


var Link = new Schema({
  url: {type: String}, 
  baseUrl: {type: String}, 
  code: {type: String}, 
  title: {type: String}, 
  visits: {type: Number}, 
  time: { type: Date, default: Date.now }
}); 

var Link = mongoose.model('Link', Link); 
module.exports = Link;