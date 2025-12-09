// src/middleware/passport.ts
import passport from "passport";

export default function configPassport() {
  passport.serializeUser((user: any, done) => {
    done(null, user); // user luôn {id, role}
  });

  passport.deserializeUser((user: any, done) => {
    done(null, user); // không query DB nữa
  });
}
