import { Router } from "express";
import * as web_ctrl from "../controllers/web_ctrl.js";
import multer from "multer"; // import multer
import { auth } from "../middleware/auth.middleware.js";
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
web_router.get("/signInRole", web_ctrl.signInRole);
web_router.post("/signInPOST", web_ctrl.loginStudentCtrl);

// Route đăng ký
web_router.get("/signUp", web_ctrl.signUp);
web_router.get("/signUpRole", web_ctrl.signUpRole);
web_router.post("/signUp", upload.single("avt"), web_ctrl.createStudent);

// Route coming-soon
web_router.get("/coming-soon",web_ctrl.comingSoon); 
//test cookie
web_router.get("/test-cookie", auth, web_ctrl.testCookie);
export default web_router;
