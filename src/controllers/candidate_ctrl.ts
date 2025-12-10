// controllers/ungvien_controller.ts
import { Request, Response } from "express";
import CandidateService from "../services/candidate_services.js";
import CVService from "../services/cv_services.js";
import JDService from "../services/jobs_services.js";

class UngVienController {
  async CandidateJD(req: Request, res: Response) {
    try {
      //khai bao bien parama
      const businessID = Number(req.params.id);
      const studentID = Number((req.user as any).id);
      const count = await CandidateService.count(studentID, businessID);

      //kiem tra
      if (count != 0) {
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

  async showCandidate(req: Request, res: Response) {
    try {
      const users = req.user as any;
      const businessID = users.id;
      const data = await CandidateService.getStudentIdByBusinessId(businessID);
      if (!data || data.length === 0) {
        return res.render("Business/business_apply_list", {
          title: "Danh sách ứng viên",
          applicants: [],
          message: "Hiện chưa có ứng viên nào ứng tuyển!",
        });
      }
      return res.render("Business/business_apply_list", {
        title: "Danh sách ứng viên",
        applicants: data,
        message: null,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send("Lỗi server khi lấy danh sách ứng viên");
    }
  }
}

export default new UngVienController();
