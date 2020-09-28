const passport = require('passport');
const LocalStrategy =  require('./localStrategy');
const db = require('../models');

passport.serializeUser((user, done) => {
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	db.User.findOne(
		{ _id: id },
		'name email',
		(err, user) => {
			done(null, user);
		}
	);
});

passport.use(LocalStrategy);

module.exports = passport;
