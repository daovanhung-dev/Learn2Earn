// src/controllers/jdController.ts
import { Request, Response } from "express";
import JDService from "../services/jobs_services.js";

class JDController {
  // Hiển thị chi tiết JD
  async showDetail(req: Request, res: Response) {
    try {
      console.log("show Detail");
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).send("ID không hợp lệ");

      const result = await JDService.getJDById(id);
      if (!result.success) return res.status(404).render("404", { message: result.error });

      // Render EJS hiển thị chi tiết
      res.render("JD_Descrition", { jd: result.data });
    } catch (err) {
      console.log("error Detail");
      console.error(err);
      res.status(500).send("Lỗi server");
    }
  }
}

export default new JDController();
