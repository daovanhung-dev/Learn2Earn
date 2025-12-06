import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import student_router from "./routes/student_route.js";
import business_router from "./routes/business_route.js";
import web_router from "./routes/web_routes.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import configPassportStudent from "./middleware/passportStudent.js";
import configPassportBusiness from "./middleware/passportBusiness.js";


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);


// Cấu hình 2 loại user
configPassportStudent();
configPassportBusiness();

// Passport
app.use(passport.initialize());
app.use(passport.session());


// set view engine
app.set("view engine", "ejs");

// set views folder
app.set("views", path.join(__dirname, "views"));

// set middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cookieParser());


// set route
app.use("/", web_router);
app.use("/business", business_router);
app.use("/student", student_router);

export default app;
