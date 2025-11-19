import express from "express";
import router from "./router.js";
import path from "path";

const app = express();

// Phục vụ file tĩnh (css, js, image)
app.use(express.static("public"));

// Sử dụng router
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server chạy http://localhost:${PORT}`));
