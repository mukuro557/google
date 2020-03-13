const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup")
const passport = require("passport");
const cookieSession = require("cookie-session")
const key = require("./config/key")

const app = express();



app.set("view engine", "ejs");

// ========== middle ware ===========
app.use(cookieSession({
    // 1hour in ms
    maxAge: 1000 * 60 * 60,
    keys:[key.cookie.keyss]
}));
app.use(passport.initialize());
//session
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

//========== SERVICE ==============



app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname,"views/home.html"));
    res.render("home.ejs" ,{user : req.user})

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("server is number at " + PORT);
});