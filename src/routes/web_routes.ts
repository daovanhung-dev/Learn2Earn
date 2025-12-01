import { Router } from "express";
import * as web_ctrl from "../controllers/web_ctrl.js";
import multer from "multer"; // import multer

const web_router = Router();

// cấu hình multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage }); // tạo upload middleware

// Route cho trang home
web_router.get("/", web_ctrl.homePage);

// Route đăng nhập
web_router.get("/signIn", web_ctrl.signIn);
web_router.post("/signInPOST", web_ctrl.loginStudentCtrl);

// Route đăng ký
web_router.get("/signUp", web_ctrl.signUp);
web_router.post("/signUp", upload.single("avt"), web_ctrl.createStudent);

export default web_router;
