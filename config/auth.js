module.exports = {

    'facebookAuth' : {
        'clientID'      : '2069411000009667',
        'clientSecret'  : 'e2ede05815fef08337c29e2b7f4de2d4',
        'callbackURL'   : 'http://tineo.ga/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'name','emails', 'picture.type(large)', 'about', 'gender', 'birthday', 'interested_in'],
        'enableProof'   : 'true'
    }

};