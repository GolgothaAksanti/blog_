const express = require("express");
const router = express.Router();
const db = require("../models");

// create a user
router.post("/new", (req, res) => {
    db.User.create({
       username: req.body.username 
    }).then(newUser => res.send(newUser));
});

// get all users
router.get("/all", (req, res) => {
    db.User.findAll({
        include: [db.Profile, db.Post]
}).then(allUsers => res.send(allUsers));
});

module.exports = router;