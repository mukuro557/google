const router = require("express").Router();

const authCheck = (req,res,next)=> {
    if(!req.user){
        res.redirect("/auth/login")
    }else{
        next();
    }
}
router.use(authCheck);

//show profile
router.get("/", (req,res) => {
    // console.log(req.user);
    res.render("profile",{user : req.user});
});

module.exports =  router;