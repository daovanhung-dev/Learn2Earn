import prisma from "../config/prisma.config.js";

// Lấy tất cả JD
export async function getAllJD() {
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
