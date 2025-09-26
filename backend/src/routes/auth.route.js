import express from "express";

const router = express.Router();

router.use("/signup", (req, res) => {
    res.send("Signup endpoint");
})

router.use("/login", (req, res) => {
    res.send("Login endpoint");
})

router.use("/logout", (req, res) => {
    res.send("Logout endpoint");
})

export default router;
