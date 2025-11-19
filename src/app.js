const express = require("express");
const path = require("path");
const app = express();

// phục vụ file tĩnh
app.use(express.static(path.join(__dirname, "public")));

// routes
const homeRoute = require("./routes/homeRoute");
app.use("/", homeRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server chạy http://localhost:${PORT}`));
