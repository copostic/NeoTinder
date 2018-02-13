module.exports = function(app, passport) {

    app.get('/', function(req, res, next) {
        res.render('index', {title: 'Express'});
    });

    app.get('/auth/facebook',
        passport.authenticate('facebook', {
            scope: ['public_profile', 'email', 'user_friends']
        }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
            user: req.user
        });
    });

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())
            return next();

        res.redirect('/');
    }
};