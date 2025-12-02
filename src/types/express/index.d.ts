import { Request } from "express";
import { Express } from "express";

declare module "express-serve-static-core" {
  interface Request {
    file?: Express.Multer.File;
    files?: Express.Multer.File[];

    user?: {
      id: number;              
      email?: string;
      iat?: number;
      exp?: number;
    };
  }
}
