// const express  = require('express');
// const aiController = require("../controller/ai.controller");
// // const { router } = require('../app'); already commented

// // const router = express.Router();

// // router.post("/get-review" , aiController.getReview)

// // module.exports = router;

// // routes.js
// const router = express.Router();

// // Add /ai prefix to match frontend
// router.post("/ai/get-review", aiController.getReview);

// module.exports = router;


const express = require('express');
const aiController = require("../controller/ai.controller");
const router = express.Router();

// Change this line (remove /ai prefix)
router.post("/get-review", aiController.getReview);

module.exports = router;
