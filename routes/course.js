const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/course");

router.post("/add", courseCtrl.addCourse);
router.get("/students/:code", courseCtrl.getStudents);
router.put("/addStudent/:cid/:sid", courseCtrl.addStudent);
router.delete("/removeStudent/:cid/:sid", courseCtrl.removeStudent);

module.exports = router;
