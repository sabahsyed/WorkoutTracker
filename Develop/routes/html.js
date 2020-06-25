const router = require("express").Router();
const path = require("path");

router.get("/exercise",(req,res) => {
    console.log("Inside exercise.html");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats",(req,res) => {
    console.log("Inside stats.html");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})



module.exports = router;
