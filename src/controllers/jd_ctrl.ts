// src/controllers/jdController.ts
import { Request, Response } from "express";
import JDService from "../services/jobs_services.js";
import multer from "multer";

// Cấu hình multer để upload ảnh
const storage = multer.memoryStorage(); // lưu tạm trong memory, service sẽ ghi ra file
export const upload = multer({ storage });

class JDController {
  // Hiển thị chi tiết JD
  async showDetail(req: Request, res: Response) {
    try {
      console.log("show Detail");
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).send("ID không hợp lệ");

      const result = await JDService.getJDById(id);
      if (!result.success)
        return res.status(404).render("404", { message: result.error });

      // Render EJS hiển thị chi tiết
      res.render("JD_Descrition", { jd: result.data });
    } catch (err) {
      console.log("error Detail");
      console.error(err);
      res.status(500).send("Lỗi server");
    }
  }

  async PostJOB(req: Request, res: Response) {
    try {
      const data: any = req.body;

      // Validate trường bắt buộc
      if (!data.ten_vi_tri || !data.dia_diem) {
        return res.send(
          `<script>alert("Tên vị trí và Địa điểm không được để trống!"); window.history.back();</script>`
        );
      }

      // Nếu có file, lưu đường dẫn string
      if (req.file) {
        data.avt = "/uploads/" + req.file.filename; // string lưu DB
      } else {
        data.avt = null; // nếu không upload
      }

      if (req.user) {
        data.doanhnghiep_id = BigInt((req.user as any).id);
        data.ten_cong_ty = (req.user as any).ten_cong_ty;
      }

      const result = await JDService.insertJD(data);

      if (result.success)
        return res.send(
          `<script>alert("Tạo Job thành công!"); window.location.href="/";</script>`
        );
      else
        return res.send(
          `<script>alert("Tạo Job thất bại!"); window.history.back();</script>`
        );
    } catch (err) {
      console.error(err);
      return res.send(
        `<script>alert("Lỗi hệ thống!"); window.location.href="/";</script>`
      );
    }
  }
}

export default new JDController();
