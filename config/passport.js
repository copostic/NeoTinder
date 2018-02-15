const FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../models/user.js'),
    configAuth = require('./auth.js');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    var fbStrategy = configAuth.facebookAuth;
    fbStrategy.passReqToCallback = true;
    passport.use(new FacebookStrategy(fbStrategy,

        function(req, token, refreshToken, profile, done) {
            process.nextTick(function() {
                if (!req.user) {
                    User.findOne({'facebook.id': profile.id}, function(err, user) {

                        if (err)
                            return done(err);

                        if (user) {
                            return done(null, user);
                        } else {
                            var newUser = new User();
                            newUser.facebook.id = profile.id; // set the users facebook id
                            newUser.facebook.token = token; // we will save the token that facebook provides to the user
                            newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                            newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                            newUser.facebook.photo = profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg';
                            user.facebook.birthday = profile._json.birthday;
                            user.facebook.gender = profile.gender;
                            // save our user to the database
                            newUser.save(function(err) {
                                if (err)
                                    throw err;

                                // if successful, return the new user
                                return done(null, newUser);
                            });
                        }

                    });

                }

                else {
                    var user = req.user; // pull the user out of the session

                    user.facebook.id = profile.id;
                    user.facebook.token = token;
                    user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                    user.facebook.email = (profile.emails[0].value || '').toLowerCase();
                    user.facebook.photo = profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg';
                    user.facebook.birthday = profile._json.birthday;
                    user.facebook.gender = profile.gender;
                    console.log(profile);

                    user.save(function(err) {
                        if (err)
                            return done(err);

                        return done(null, user);
                    });

                }


            });
        }));
};