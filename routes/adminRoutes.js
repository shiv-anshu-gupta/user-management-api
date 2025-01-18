const express = require("express");
const { loginAdmin, getAllUsers } = require("../controllers/adminController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", loginAdmin);
router.get("/users", protect, adminOnly, getAllUsers);

module.exports = router;
