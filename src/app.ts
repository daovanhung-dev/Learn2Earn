import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import student_router from "./routes/student_route.js";
import business_router from "./routes/business_route.js";
import web_router from "./routes/web_routes.js";
import cookieParser from "cookie-parser";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set view engine
app.set("view engine", "ejs");

// set views folder
app.set("views", path.join(__dirname, "views"));

//set middleware
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

//set public
app.use(express.static(path.join(__dirname, "../public")));

//set cookie
app.use(cookieParser());

//set route
app.use("/", web_router);
app.use("/business", business_router);
app.use("/student", student_router);

export default app;
