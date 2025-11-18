import { users } from "../models/userModel.js";

export const getUsers = (req, res) => {
  res.json(users);
};