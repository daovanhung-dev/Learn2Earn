// src/routes/business_route.ts

import { Router } from "express";

// 
import {
  business_setting,
  business_update_information,
  business_update_information_post,
  business_post_job,
  business_post_job_post,
  business_apply_list,
  business_edit_info_apply,
  business_edit_info_apply_post,
  business_link_with_university,
  business_notification,
  business_chat,
  business_home
} from "../controllers/business_ctrl.js";

const business_router = Router();

/* -------------------------  BUSINESS ROUTES  ------------------------- */

// Trang cài đặt doanh nghiệp
business_router.get("/Setting", business_setting);

// Update thông tin
business_router.get("/UpdateInformation", business_update_information);
business_router.post("/UpdateInformation", business_update_information_post);

// Đăng tin tuyển dụng
business_router.get("/PostJob", business_post_job);
business_router.post("/PostJob", business_post_job_post);

// Danh sách ứng viên apply
business_router.get("/ApplyList", business_apply_list);

// Sửa thông tin apply
business_router.get("/EditInfoApply", business_edit_info_apply);
business_router.post("/EditInfoApply", business_edit_info_apply_post);

// Kết nối trường học
business_router.get("/LinkUniversity", business_link_with_university);

// Thông báo
business_router.get("/Notification", business_notification);

// Tin nhắn
business_router.get("/Chat", business_chat);


/* ------------------------------------------------------------------- */

export default business_router;
