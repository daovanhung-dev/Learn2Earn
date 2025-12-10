// services/ungvien_service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CandidateService {
  /**
   * Tạo mới một ứng viên
   * @param sinhvien_id ID sinh viên (lấy từ session)
   * @param doanhnghiep_id ID doanh nghiệp
   */
  async create(sinhvien_id: number, doanhnghiep_id: number) {
    try {
      const newUngVien = await prisma.ungVien.create({
        data: {
          sinhvien_id,
          doanhnghiep_id,
          // trangthai và created_at dùng default value trong model
        },
      });
      return newUngVien;
    } catch (error) {
      console.error("Lỗi khi tạo ứng viên:", error);
      throw error;
    }
  }

  //kiem tra ton tai
  async count(studentID: number, businessID: number) {
    try {
      const total = await prisma.ungVien.count({
        where: {
          sinhvien_id: studentID,
          doanhnghiep_id: businessID,
        },
      });
      return total;
    } catch (err) {
      return { success: false, error: "Lỗi server" };
    }
  }
  /**
   * Lấy tất cả ứng viên
   */
  async getAllUngVien() {
    return prisma.ungVien.findMany({
      include: {
        SinhVien: true,
        DoanhNghiep: true,
        JD: true,
      },
    });
  }

  /**
   * Lấy ứng viên theo ID
   */
  async getUngVienById(id: number) {
    return prisma.ungVien.findUnique({
      where: { id },
      include: { SinhVien: true, DoanhNghiep: true, JD: true },
    });
  }
}

export default new CandidateService();
