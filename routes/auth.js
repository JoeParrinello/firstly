

module.exports = function(passport) {
    var express = require('express');
    var router = express.Router();

    // route for facebook authentication and login
    router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

    // handle the callback after facebook has authenticated the user
    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // route for logging out
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;

};
//
//// route middleware to make sure a user is logged in
//function isLoggedIn(req, res, next) {
//
//    // if user is authenticated in the session, carry on
//    if (req.isAuthenticated())
//        return next();
//
//    // if they aren't redirect them to the home page
//    res.redirect('/');
//}