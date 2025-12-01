import { Request, Response } from "express"; // import type Express
import path from "path";
import { fileURLToPath } from "url";
import * as jd from "../services/jobs_services.js";
import StudentService from "../services/student_service.js";
import student_router from "../routes/student_route.js";
import { Sign } from "crypto";

const __filename = fileURLToPath(import.meta.url); // lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename);
// Route Home
export const homePage = async (req: Request, res: Response) => {
  const jobs = await jd.getAllJD();
  console.log();
  return res.render("home", { jobs });
};

// Route Sign In ================================================================================================================================================
export const signIn = (req: Request, res: Response) => {
  res.render("signIn");
};
export const loginStudentCtrl = async (req: Request, res: Response) => {
  console.log("➡️ loginStudentCtrl");

  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    // 1. Kiểm tra input
    if (!email || !password) {
      console.log("❌ Thiếu dữ liệu đầu vào");
      return res.status(400).render("signIn", {
        error: "Email và mật khẩu bắt buộc",
      });
    }

    // 2. Gọi service xử lý đăng nhập
    const result = await StudentService.loginStudent(email, password);

    if (!result || !result.success) {
      console.log("❌ Sai email hoặc mật khẩu");
      return res.render("signIn", {
        error: "Email hoặc mật khẩu sai",
      });
    }

    // 3. Đăng nhập thành công
    console.log("✅ Đăng nhập thành công!");
    // req.session.user = result.data;

    return res.redirect("/student/Home");
  } catch (error) {
    console.error("💥 Lỗi login:", error);
    return res.status(500).render("signIn", {
      error: "Lỗi hệ thống",
    });
  }
};

// Route Sign Up ================================================================================================================================================
export const signUp = (req: Request, res: Response) => {
  res.render("signUp");
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { hoten, email, matkhau, chuyennganh } = req.body;
    const avt = req.file ? req.file.filename : null;

    if (!hoten || !email || !matkhau) {
      return res.status(400).send("Họ tên, email và mật khẩu bắt buộc");
    }
    console.log("create user");
    await StudentService.insertStudent(
      hoten,
      email,
      matkhau,
      chuyennganh || null,
      avt
    );

    res.redirect("/signIn");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
