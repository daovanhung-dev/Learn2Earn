// src/middleware/passportBusiness.ts
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import prisma from "../config/prisma.config.js";

export default function configPassportBusiness() {
  // --- Cấu hình chiến lược Local cho business ---
  passport.use(
    "business-local",
    new LocalStrategy(
      { usernameField: "email", passwordField: "matkhau" },
      async (email, matkhau, done) => {
        console.log("dang nhap cho doanh nghiepppp");
        try {
          const business = await prisma.doanhNghiep.findUnique({
            where: { email },
          });
          if (!business) {
            console.log("Ko tim thay business!");
            return done(null, false, {
              message: "Không tìm thấy doanh nghiệp",
            });
          }
          if (business.matkhau !== matkhau) {
            console.log("Sai mat khau roi!!!!!");
            return done(null, false, { message: "Sai mật khẩu" });
          }
          return done(null, business);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // --- Lưu session ---
  passport.serializeUser((user: any, done) =>
    done(null, { id: Number(user.id), role: "business" })
  );

  passport.deserializeUser(async (data: { id: number; role: string }, done) => {
    try {
      if (data.role !== "business") return done(null, false);
      const business = await prisma.doanhNghiep.findUnique({
        where: { id: BigInt(data.id) },
      });
      done(null, business ?? false);
    } catch (err) {
      done(err);
    }
  });
}
