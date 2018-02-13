module.exports = {

    'facebookAuth' : {
        'clientID'      : '320551335017584',
        'clientSecret'  : 'b8b7475a5fc4a10dcb2f34dfe92d04bf',
        'callbackURL'   : 'http://tineo.ga/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'name','emails', 'picture.type(large)', 'about', 'gender', 'birthday', 'interested_in'],
        'enableProof'   : 'true'
    }

};