// src/controllers/student_ctrl.ts
import { Request, Response } from "express";

// Trang chính và các trang render
export const student_homeSV = (req: Request, res: Response) => res.render("Student/student_home");
export const student_setting = (req: Request, res: Response) => res.render("Student/student_setting");
export const student_profile = (req: Request, res: Response) => res.render("Student/student_profile");
export const student_updateProfile = (req: Request, res: Response) => res.render("Student/student_update_SV");
export const student_createCV = (req: Request, res: Response) => res.render("Student/student_create_CV");
export const student_updateCV = (req: Request, res: Response) => res.render("Student/student_update_CV");
export const student_posts_jobs = (req: Request, res: Response) => res.render("Student/student_post");
export const student_apply = (req: Request, res: Response) => res.render("Student/student_apply");
export const student_noti = (req: Request, res: Response) => res.render("Student/student_noti");
export const student_chat = (req: Request, res: Response) => res.render("Student/student_chat");
export const student_view_topcv = (req: Request, res: Response) => res.render("Student/student_view_TopCV");
export const student_interview_schedule = (req: Request, res: Response) => res.render("Student/student_interview_schedule");

// POST xử lý form
export const student_updateProfile_post = (req: Request, res: Response) => {
  console.log("Dữ liệu update:", req.body);
  res.redirect("/student/profile");
};

export const student_createCV_post = (req: Request, res: Response) => {
  console.log("Dữ liệu tạo CV:", req.body);
  res.redirect("/student/create-cv");
};

// Logout
export const student_logOut = (req: Request, res: Response) => {
  res.clearCookie("jwt", { httpOnly: true, secure: false });
  res.redirect("/home");
};
