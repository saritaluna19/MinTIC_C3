const passport = require("passport");

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID="766684918546-9fg62j6kfvfujdauteudsv6vmp55a2m2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
  //  User.findOrCreate({ googleId: profile.id }, function (err, user) {
   //   return done(err, user);
  //  });
  return done(null, profile);
  }

));

passport.serializeUser(function(user, done){
    done(null, user)
});

passport.deserializeUser(function(user, done){
    done(null, user)
});
