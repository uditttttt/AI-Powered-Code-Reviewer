const express  = require('express');
const aiController = require("../controller/ai.controller");
// const { router } = require('../app');
const router = express.Router();

router.post("/get-review" , aiController.getReview)

module.exports = router;