// src/middleware/passportStudent.ts
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import prisma from "../config/prisma.config.js";

export default function configPassportStudent() {
  // --- Cấu hình chiến lược Local cho student ---
  passport.use(
    "student-local",
    new LocalStrategy(
      { usernameField: "email", passwordField: "matkhau" },
      async (email, matkhau, done) => {
        
        try {
          const student = await prisma.sinhVien.findUnique({ where: { email } });
          if (!student) return done(null, false, { message: "Không tìm thấy student" });
          if (student.matkhau !== matkhau) return done(null, false, { message: "Sai mật khẩu" });
          return done(null, student);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // --- Lưu session ---
  passport.serializeUser((user: any, done) => done(null, { id: Number(user.id), role: "student" }));

  passport.deserializeUser(async (data: { id: number; role: string }, done) => {
    try {
      if (data.role !== "student") return done(null, false);
      const student = await prisma.sinhVien.findUnique({ where: { id: BigInt(data.id) } });
      done(null, student ?? false);
    } catch (err) {
      done(err);
    }
  });
}
