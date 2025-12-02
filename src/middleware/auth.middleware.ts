// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { verifyToken, TokenPayload } from "../utils/jwt.js";

export interface AuthRequest extends Request {
  user?: TokenPayload;
}

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.jwt || req.headers.authorization?.split(" ")[1];
  if (!token) {
    if (req.accepts("html")) return res.redirect("/");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = verifyToken(token);
    // gán bất kỳ vào req.user, không lỗi TS
    (req as AuthRequest).user = decoded;
    next();
  } catch (err) {
    if (req.accepts("html")) return res.redirect("/");
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
