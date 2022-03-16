const express = require("express");
const router = express.Router();

router.post("/create", async (req,res,next) =>{
    try {
        res.send({
            message: "created"
        });
    } catch (error) {
        next(error)
    }
});

router.get("/retrive", async (req,res,next) =>{
    try {
        res.send({
            message: "retrived"
        });
    } catch (error) {
        next(error)
    }
});

router.put("/update", async (req,res,next) =>{
    try {
        res.send({
            message: "updated"
        });
    } catch (error) {
        next(error)
    }
});

router.delete("/delete", async (req,res,next) =>{
    try {
        res.send({
            message: "deleted"
        });
    } catch (error) {
        next(error)
    }
});

