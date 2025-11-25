// src/router.ts
import { Router } from "express";
import { 
    business_setting
 } from "../controllers/business_ctrl.js"; // luôn có .js

const router = Router();

// Route cai dat
router.get("/Setting",business_setting);
export default router;
