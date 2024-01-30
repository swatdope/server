import express from "express";
import { getMe, login, register } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.get("/me", protect, getMe);

export default router;
