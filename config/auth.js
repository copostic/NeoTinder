module.exports = {

    'facebookAuth' : {
        'clientID'      : '145793879439435',
        'clientSecret'  : '499f9ad871bbd03d66828cb2b01e9f58',
        'callbackURL'   : 'http://tineo.ga/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'name','emails', 'picture.type(large)', 'about', 'gender', 'birthday', 'interested_in'],
        'enableProof'   : 'true'
    }

};