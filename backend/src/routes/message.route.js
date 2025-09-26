import express from "express";
const router = express.Router();

router.use("/send", (req, res) => {
    res.send("Send message endpoint");
})

export default router;