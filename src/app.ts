// app.ts
import express from "express";
import router from "../src/routes/router.js";

const app = express();
app.use("/", router);

export default app;
