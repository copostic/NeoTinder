const helpers = require('../utils/helpers');

exports.index = function(req, res) {
    res.render('profile', {
        title: 'Paramètres',
        user: req.user,
        userAge: helpers.calculateAge(req.user.facebook.birthday)
    });
};

exports.settings = function(req, res) {
    res.render('settings', {
        title: 'Paramètres',
        user: req.user
    });
};