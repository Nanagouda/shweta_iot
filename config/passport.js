/* config/passport.js */

var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var db = require('./database');

module.exports = passport.use('basic', new BasicStrategy((username, password, done) => {
  db.query('SELECT username, password FROM users WHERE username=$1', [username], (err, result) => {
    if (err) {
      return done(err);
    }

    if (result.rows.length > 0) {
      const user = result.rows[0];

      if (password === user.password) {
        done(null, { username: user.username });
      } else {
        done(null, false);
      }
    } else {
      done(null, false);
    }
  });
}));
