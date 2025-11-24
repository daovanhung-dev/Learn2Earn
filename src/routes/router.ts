// src/router.ts
import { Router } from "express";
import { homePage, signIn, signUp } from "../controllers/userController.js"; // luôn có .js

const router = Router();

// Route cho trang home
router.get("/", homePage);

// Route đăng nhập
router.get("/signIn", signIn);

// Route đăng ký
router.get("/signUp", signUp);

export default router;
