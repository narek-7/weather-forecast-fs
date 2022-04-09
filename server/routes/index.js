const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/auth", require("./user.routes"));
router.use("/auth", require("./userCity.routes"));

module.exports = router;
