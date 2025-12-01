// src/routes/student_route.ts

import { Router } from "express";
import * as studentCtrl from "../controllers/student_ctrl.js"; // luôn có .js

const student_router = Router();

/* -------------------------  STUDENT ROUTES  ------------------------- */

// Trang cài đặt
student_router.get("/Setting", studentCtrl.student_setting);

// Trang hồ sơ sinh viên
student_router.get("/Profile", studentCtrl.student_profile);

// Update Profile
student_router.get("/UpdateProfile", studentCtrl.student_updateProfile);

// Tạo CV
student_router.get("/CreateCV", studentCtrl.student_createCV);

// Cập nhật CV
student_router.get("/UpdateCV", studentCtrl.student_updateCV);

// Xem các job đã đăng
student_router.get("/PostJobs", studentCtrl.student_posts_jobs);

// Apply job
student_router.get("/Apply", studentCtrl.student_apply);

// Thông báo
student_router.get("/Noti", studentCtrl.student_noti);

// Tin nhắn
student_router.get("/Chat", studentCtrl.student_chat);

// Xem TopCV
student_router.get("/TopCV", studentCtrl.student_view_topcv);

// Home Sinh Vien
student_router.get("/Home", studentCtrl.student_homeSV);

// Lich phong van
student_router.get("/Interview",studentCtrl.student_interview_schedule);

/* ------------------------------------------------------------------- */

export default student_router;
