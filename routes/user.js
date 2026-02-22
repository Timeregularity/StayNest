const express=require("express");
const router=express.Router();
const User=require("../DBModels/user");
const wrapAsync=require("../utils/wrapAsync.js");
const passport=require("passport");

router.get("/signUp",(req,res)=>
{
    res.render("users/signUp.ejs");
});

router.post("/signUp", wrapAsync(async (req,res)=>
{try{
    let {username,password,email}=req.body;
    const newUser=new User({username,email});
    const registeredUser=await User.register(newUser,password);
    req.flash("success","Welcome to NIVASA");
    res.redirect("/listings");
}
catch(e)
{
    req.flash("failure",e.message);
    res.redirect("/signUp");
}
}));
router.get("/login",(req,res)=>
{
    res.render("users/login.ejs");
});
router.post("/login", (req,res,next)=>{
  passport.authenticate('local', (err, user, info)=>{
    if(!user){
      req.flash("failure", info?.message || "Bad Credentials!");
      return res.redirect("/login");
    }
    req.logIn(user, (err)=>{
      if(err) return next(err);
      req.flash("success","Welcome Back to Nivasa");
      res.redirect("/listings");
    });
  })(req,res,next);
});

module.exports=router;