import prisma from "../config/prisma.config.js";

class JDService {
  // Tạo JD mới
  async insertJD(data: {
    ten_vi_tri: string;
    phong_ban?: string;
    cap_bac?: string;
    bao_cao_cho?: string;
    nhiem_vu?: string;
    trinh_do?: string;
    kinh_nghiem?: string;
    ky_nang?: string;
    ky_nang_mem?: string;
    uu_tien?: string;
    muc_luong?: string;
    phuc_loi?: string;
    moi_truong?: string;
    dia_diem?: string;
    thoi_gian?: string;
    han_nop?: string;
    cach_ung_tuyen?: string;
    mo_ta?: string;
    doanhnghiep_id?: number | bigint;
    ten_cong_ty?: string;
    nganh?: string;
    avt?: string;
  }) {
    try {
      const jd = await prisma.jD.create({ data });
      console.log("Tạo JD thành công:", jd.id);
      return { success: true, data: jd };
    } catch (err) {
      console.error("Lỗi tạo JD:", err);
      return { success: false, error: "Không thể tạo JD" };
    }
  }

  // Lấy tất cả JD, sắp xếp theo ngày tạo mới nhất
  async getAllJD() {
  try {
    const jds = await prisma.jD.findMany({
      orderBy: { ngay_tao: "desc" }, // sắp xếp theo ngày tạo mới nhất
    });
    return jds;
  } catch (error) {
    console.error("Lỗi khi lấy JD:", error);
    throw error;
  }
}


  // Lấy JD theo ID
  async getJDById(id: number | bigint) {
    try {
      const jd = await prisma.jD.findUnique({ where: { id: BigInt(id) } });
      if (!jd) return { success: false, error: "Không tìm thấy JD" };
      return { success: true, data: jd };
    } catch (err) {
      console.error(err);
      return { success: false, error: "Lỗi server" };
    }
  }

  // Cập nhật JD
  async updateJD(
    id: number | bigint,
    data: Partial<{
      ten_vi_tri: string;
      phong_ban: string;
      cap_bac: string;
      bao_cao_cho: string;
      nhiem_vu: string;
      trinh_do: string;
      kinh_nghiem: string;
      ky_nang: string;
      ky_nang_mem: string;
      uu_tien: string;
      muc_luong: string;
      phuc_loi: string;
      moi_truong: string;
      dia_diem: string;
      thoi_gian: string;
      han_nop: string;
      cach_ung_tuyen: string;
      mo_ta: string;
      doanhnghiep_id: number | bigint;
      ten_cong_ty: string;
      nganh: string;
      avt: string;
    }>
  ) {
    try {
      const updated = await prisma.jD.update({
        where: { id: BigInt(id) },
        data,
      });
      return { success: true, data: updated };
    } catch (err) {
      console.error(err);
      return { success: false, error: "Không thể cập nhật JD" };
    }
  }

  // Xóa JD
  async deleteJD(id: number | bigint) {
    try {
      await prisma.jD.delete({ where: { id: BigInt(id) } });
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: "Không thể xóa JD" };
    }
  }
}

export default new JDService();
