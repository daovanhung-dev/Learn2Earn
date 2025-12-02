import { Request, Response } from "express"; // import type Express
import path from "path";
import { fileURLToPath } from "url";
import JDService from "../services/jobs_services.js";
import StudentService from "../services/student_service.js";
import student_router from "../routes/student_route.js";
import { Sign } from "crypto";
import { signToken } from "../utils/jwt.js";
import { AuthRequest } from "../middleware/auth.middleware.js";

const __filename = fileURLToPath(import.meta.url); // lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename);
// Route Home
export const homePage = async (req: Request, res: Response) => {
  const jobs = await JDService.getAllJD();
  console.log();
  return res.render("home", { jobs });
};

// Route Sign In ================================================================================================================================================
export const signInStudentCtrl = (req: Request, res: Response) => {
  res.render("/Student/signIn");
};
export const signInBusinessCtrl = (req: Request, res: Response) => {
  res.render("/Busiess/signIn");
}

export const loginStudentCtrl = async (req: Request, res: Response) => {
  console.log("➡️ loginStudentCtrl");

  try {
    const { email, password } = req.body;

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

    const student = result.data; // Lấy thông tin sinh viên
    if (!student) {
      console.log("❌ Student không tồn tại sau khi login");
      return res.status(400).render("signIn", {
        error: "Email hoặc mật khẩu sai",
      });
    }

    // 3. Tạo JWT token
    const token = signToken({
      id: Number(student.id), // chuyển BigInt sang Number
      email: student.email || "", // đảm bảo không null
      role: "student", // hoặc lấy từ student.role nếu có
    });

    // 4. Lưu token vào cookie
    res.cookie("jwt", token, {
      httpOnly: true, // cookie không đọc được bởi JS client
      secure: false, // true nếu dùng HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
    });

    console.log("🎉 Đăng nhập thành công → Token đã lưu vào cookie!");

    // 5. Redirect sang trang chính của sinh viên
    return res.redirect("/student/Home");
  } catch (error) {
    console.error("💥 Lỗi login:", error);
    return res.status(500).render("signIn", {
      error: "Lỗi hệ thống",
    });
  }
};
export const signInRole = (req: Request, res: Response) =>
{
  res.render("sign_in_role");
};


// Route Sign Up ================================================================================================================================================
export const signUpStudentCtrl = (req: Request, res: Response) => {
  res.render("/Business/signUp");
};
export const signUpBusinessCtrl = (req: Request, res: Response) => {
  res.render("/Business/signUp")
}
export const signUpRole = (req: Request, res: Response) => {
  res.render("sign_up_role");
};
//home
export const studentHome = async (req: AuthRequest, res: Response) => {
  const student = req.user; // ✅ student từ token
  if (!student) return res.redirect("/signIn");

  // Lấy dữ liệu student từ DB nếu cần
  const studentData = await StudentService.getStudentById(student.id);

  res.render("studentHome", { student: studentData });
};

//create
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



//coming-soon
export const comingSoon = (req: Request, res: Response) => {
  res.render("coming-soon");
};

//test cookie
// Route test cookie + JWT payload
export const testCookie = (req: Request, res: Response) => {
  const authReq = req as AuthRequest; // cast sang AuthRequest
  console.log("📦 Cookies:", authReq.cookies);
  console.log("🔑 JWT cookie:", authReq.cookies?.jwt);
  console.log("👤 Payload from JWT:", authReq.user);

  res.send("✅ Check console server để xem cookie và payload JWT");
};

//business





