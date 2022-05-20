const express = require("express");
const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/post", feedController.getPosts);
router.post("/post", feedController.createPost);
module.exports = router;
