const express = require('express');
const {
    auth_user,
    login,
    logout
} = require("./login");

const {auth} = require("../utils/auth");

const router = express.Router();
router.patch("/api/auth", auth, auth_user);
router.post("/auth/login", login);
router.post("/auth/logout", logout);

module.exports = router;