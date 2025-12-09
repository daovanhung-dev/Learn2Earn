import { Router } from "express";
import * as studentCtrl from "../controllers/student_ctrl.js";
import { ensureAuthenticated, checkRole } from "../middleware/auth.middleware.js";
import JDController from "../controllers/jd_ctrl.js";
import jd_ctrl from "../controllers/jd_ctrl.js";

const student_router = Router();

student_router.use(ensureAuthenticated, checkRole("student"));
student_router.get("/Home", studentCtrl.student_homeSV);
student_router.get("/Setting", studentCtrl.student_setting);
student_router.get("/Profile", studentCtrl.student_profile);
student_router.get("/Update-Profile", studentCtrl.student_updateProfile);
student_router.get("/CreateCV", studentCtrl.student_createCV);
student_router.get("/UpdateCV", studentCtrl.student_updateCV);
student_router.get("/PostJobs", studentCtrl.student_posts_jobs);
student_router.get("/Apply", studentCtrl.student_apply);
student_router.get("/Noti", studentCtrl.student_noti);
student_router.get("/Chat", studentCtrl.student_chat);
student_router.get("/TopCV", studentCtrl.student_view_topcv);
student_router.get("/Interview", studentCtrl.student_interview_schedule);
student_router.get("/Logout", studentCtrl.student_logOut);
student_router.get("/JobDescription/:id", jd_ctrl.showDetail);

export default student_router;
