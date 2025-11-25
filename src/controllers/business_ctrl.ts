// src/controllers/userController.ts

import { Request, Response } from "express"; // import type Express
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename); 

// Route cai dat 
export const business_setting = (req: Request, res: Response) => {
  res.render("DoanhNghiep/business_setting")
};

export const chat = (req: Request, res: Response) => {
  res.render("DoanhNghiep/business_setting")
};
