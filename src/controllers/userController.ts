// src/controllers/userController.ts
import path from "path";
import { fileURLToPath } from "url";
import { Request, Response } from "express"; // import type Express

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route Home
export const homePage = (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
};

// Route Sign In
export const signIn = (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views/signIn.html"));
};

// Route Sign Up
export const signUp = (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views/signUp.html"));
};
