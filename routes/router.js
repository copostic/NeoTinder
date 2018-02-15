const profileController = require('../controllers/profile');
module.exports = function(app, passport) {

    app.get('/', function(req, res, next) {
        res.render('index', {title: 'Express'});
    });

    app.use('/auth/facebook',
        passport.authenticate('facebook', {
            scope: ['public_profile', 'email', 'user_friends', 'user_birthday']
        }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }) , function(req,res) {
            res.render('json', {data: JSON.stringify(req.user.access_token)});
        }, function(err,req,res,next) {
            res.redirect('/auth/facebook/');
            if(err) {
                res.status(400);
                res.render('error', {message: err.message});
            }
        });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/profile', isLoggedIn, profileController.index);

    app.get('/profile/settings', isLoggedIn, profileController.settings);

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())
            return next();

        res.redirect('/auth/facebook/');
    }
};