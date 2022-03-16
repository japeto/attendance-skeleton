const express = require("express");
const router = express.Router();

router.post("/login", async (req,res,next) =>{
    try {
        res.send({
            message: "login"
        });
    } catch (error) {
        next(error)
    }
});


router.post("/logout", async (req,res,next) =>{
    try {
        res.send({
            message: "login"
        });
    } catch (error) {
        next(error)
    }
});

