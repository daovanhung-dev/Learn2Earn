// src/controllers/userController.ts

import { Request, Response } from "express"; // import type Express
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename); 
// Route Home
export const homePage = (req: Request, res: Response) => {
  res.render("home")
};

// Route Sign In
export const signIn = (req: Request, res: Response) => {
  res.render("signIn")
};

// Route Sign Up
export const signUp = (req: Request, res: Response) => {
  res.render("signUp")
};

//=================================================================SINHVIEN==========================================================================================================



//================================================================DOANHNGHIEP==========================================================================================================
// Route cai dat 
export const business_setting = (req: Request, res: Response) => {
  res.render("DoanhNghiep/business_setting")
};

export const chat = (req: Request, res: Response) => {
  res.render("DoanhNghiep/business_setting")
};
