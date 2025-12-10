// controllers/ungvien_controller.ts
import { Request, Response } from "express";
import CandidateService from "../services/candidate_services.js";

class UngVienController {
  async CandidateJD(req: Request, res: Response) {
    try {
      //khai bao bien parama
      const businessID = Number(req.params.id);
      const studentID = Number((req.user as any).id);
      const count = await CandidateService.count(studentID, businessID);

      //kiem tra
        if(count != 0){
            console.log("Ban da ung tuyen roi");
            return res.send(
        `<script>alert("Bạn đã ứng tuyển vị trí của công ty này rồi!"); window.location.href="/student/home";</script>`
      );
        }

      //goi ham
      await CandidateService.create(studentID, businessID);
      console.log("Ung tuyen");
      return res.send(
        `<script>alert("Ứng tuyển thành công!"); window.location.href="/student/home";</script>`
      );
    } catch (error) {
      console.error("Lỗi tạo ứng viên:", error);
      res.status(500).json({ error: "Lỗi server" });
    }
  }

  /**
   * Lấy danh sách tất cả ứng viên
   */
  async getAllUngVien(req: Request, res: Response) {
    try {
      const list = await CandidateService.getAllUngVien();
      res.json(list);
    } catch (error) {
      console.error("Lỗi lấy danh sách ứng viên:", error);
      res.status(500).json({ error: "Lỗi server" });
    }
  }

  /**
   * Lấy 1 ứng viên theo ID
   */
  async getUngVienById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: "Thiếu ID" });

      const ungvien = await CandidateService.getUngVienById(Number(id));
      if (!ungvien)
        return res.status(404).json({ error: "Không tìm thấy ứng viên" });

      res.json(ungvien);
    } catch (error) {
      console.error("Lỗi lấy ứng viên:", error);
      res.status(500).json({ error: "Lỗi server" });
    }
  }
}

export default new UngVienController();
