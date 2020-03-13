const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
    res.render("login.ejs",{user : req.user});
});
//Login google
router.get("/google",passport.authenticate("google",{scope: ["profile", "email"]}));

router.get("/google/redirect",passport.authenticate("google"), (req, res) => {
// res.send("Login OK, show profile");
// res.send(req.user);
res.redirect("/profile")
});

//logout
router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
});

module.exports = router;