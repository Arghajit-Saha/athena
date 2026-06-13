const express = require("express");

const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
    res.status(200).json({
        message: "POST Register Route"
    });
});

authRouter.post("/login", (req, res) => {
    res.status(200).json({
        message: "POST Login Route"
    });
});

authRouter.post("/logout", (req, res) => {
    res.status(200).json({
        message: "POST Logout Route"
    });
});

module.exports = authRouter;