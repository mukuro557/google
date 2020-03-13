const passport  = require ("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const key = require("./key")

passport.serializeUser((user,done) =>{
    done(null, user)
});

passport.deserializeUser((id,done) => {
//    TODO: generally you must query for id DB 
    done(null,id)
});

passport.use(
new GoogleStrategy(
    {clientID:key.google.clientID ,
    clientSecret : key.google.clientSecret,
    callbackURL:"/auth/google/redirect"},
    (accessToken, refreshToken, profile, done) =>{
        // console.log(profile.displayName);
        // console.log(profile.emails[0].value);
        // console.log(profile.photos[0].value)
        // const user = {id :profile.id}
        const user = {name : profile.displayName, email :profile.emails[0].value, photo : profile.photos[0].value}
       
        done(null,user);
    })
);