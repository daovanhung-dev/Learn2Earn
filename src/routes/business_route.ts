// src/routes/business_route.ts
import { Router } from "express";
import * as businessCtrl from "../controllers/business_ctrl.js";

const business_router = Router();

/* ---------------------------- BUSINESS ROUTES ---------------------------- */

// Trang chính
business_router.get("/Home", businessCtrl.business_home);

// Cài đặt doanh nghiệp
business_router.get("/Setting", businessCtrl.business_setting);

// Update thông tin doanh nghiệp
business_router
  .route("/UpdateInformation")
  .get(businessCtrl.business_update_information)
  .post(businessCtrl.business_update_information_post);

// Quản lý tin tuyển dụng
business_router
  .route("/PostJob")
  .get(businessCtrl.business_post_job)
  .post(businessCtrl.business_post_job_post);

// Danh sách ứng viên apply
business_router.get("/ApplyList", businessCtrl.business_apply_list);

// Chỉnh sửa thông tin ứng viên
business_router
  .route("/EditInfoApply")
  .get(businessCtrl.business_edit_info_apply)
  .post(businessCtrl.business_edit_info_apply_post);

// Kết nối với trường đại học
business_router.get("/LinkUniversity", businessCtrl.business_link_with_university);

// Thông báo
business_router.get("/Notification", businessCtrl.business_notification);

// Tin nhắn
business_router.get("/Chat", businessCtrl.business_chat);

/* ------------------------------------------------------------------------ */

export default business_router;
