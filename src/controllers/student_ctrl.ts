// src/controllers/student_ctrl.ts

import { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "../routes/student_route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===========================
   1. Trang cài đặt
=========================== */
export const student_setting = (req: Request, res: Response) => {
  res.render("Student/student_setting");
};

/* ===========================
   2. Trang hồ sơ Profile
=========================== */
export const student_profile = (req: Request, res: Response) => {
  res.render("Student/student_profile");
};

/* ===========================
   3. Trang Update Profile
=========================== */
export const student_updateProfile = (req: Request, res: Response) => {
  res.render("Student/student_update_SV");
};

/* ===========================
   4. Trang Update Profile – POST
=========================== */
export const student_updateProfile_post = (req: Request, res: Response) => {
  console.log("Dữ liệu update:", req.body);
  res.redirect("/Student/Profile");
};

/* ===========================
   5. Trang tạo CV
=========================== */
export const student_createCV = (req: Request, res: Response) => {
  res.render("Student/student_create_CV");
};

/* ===========================
   6. Trang tạo CV – POST
=========================== */
export const student_createCV_post = (req: Request, res: Response) => {
  res.render("Student/student_create_CV");
};

/* ===========================
   7. Trang cập nhật CV
=========================== */
export const student_updateCV = (req: Request, res: Response) => {
  res.render("Student/student_update_CV");
};

/* ===========================
   9. Trang tin tuyển dụng
=========================== */
export const student_posts_jobs = (req: Request, res: Response) => {
  res.render("Student/student_postJobs");
};

/* ===========================
   10. Apply Job – POST
=========================== */
export const student_apply = (req: Request, res: Response) => {
  res.render("Student/student_apply");
};

/* ===========================
   11. Trang thông báo
=========================== */
export const student_noti = (req: Request, res: Response) => {
  res.render("Student/student_noti");
};

/* ===========================
   12. Trang chat
=========================== */
export const student_chat = (req: Request, res: Response) => {
  res.render("Student/student_chat");
};

/* ===========================
   13. Trang TopCV
=========================== */
export const student_view_topcv = (req: Request, res: Response) => {
  res.render("Student/student_view_TopCV");
};

// home Sinh Vien
export const student_homeSV = (req: Request, res: Response) => {
  res.render("Student/student_home");
};

// Lich phong van 
export const student_interview_schedule = (req: Request, res: Response) => {
  res.render("Student/student_interview_schedule");
};
