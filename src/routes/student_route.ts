// src/routes/student_route.ts

import { Router } from "express";
import * as studentCtrl from "../controllers/student_ctrl.js"; // luôn có .js

const router = Router();

/* -------------------------  STUDENT ROUTES  ------------------------- */

// Trang cài đặt
router.get("/Setting", studentCtrl.student_setting);

// Trang hồ sơ sinh viên
router.get("/Profile", studentCtrl.student_profile);

// Update Profile
router.get("/UpdateProfile", studentCtrl.student_updateProfile);

// Tạo CV
router.get("/CreateCV", studentCtrl.student_createCV);

// Cập nhật CV
router.get("/UpdateCV", studentCtrl.student_updateCV);

// Xem các job đã đăng
router.get("/PostJobs", studentCtrl.student_posts_jobs);

// Apply job
router.get("/Apply", studentCtrl.student_apply);

// Thông báo
router.get("/Noti", studentCtrl.student_noti);

// Tin nhắn
router.get("/Chat", studentCtrl.student_chat);

// Xem TopCV
router.get("/TopCV", studentCtrl.student_view_topcv);

// Home Sinh Vien
router.get("/Home", studentCtrl.student_homeSV);

// Lich phong van
router.get("/Interview",studentCtrl.student_interview_schedule);

/* ------------------------------------------------------------------- */

export default router;
