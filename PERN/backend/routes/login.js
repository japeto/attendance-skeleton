const express = require("express");
const router = express.Router();

const loginUser = async (req, res) => {
    res.status(201).send({ 'message': 'success'});
};

const logout = async (req, res) => {
    res.status(201).send({ 'message': 'success' });
}

module.exports = {
    loginUser,
    logout
};