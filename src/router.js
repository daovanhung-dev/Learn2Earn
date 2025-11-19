import { Router } from "express";
import { homePage } from "./controllers/userController.js";

const router = Router();

// Route cho trang home
router.get("/", homePage);

export default router;
