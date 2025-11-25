// app.ts
import express from "express"; 
import router from "./routes/web.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url); // lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename);       // lấy thư mục chứa file

//config view engine
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

//config public
app.use(express.static('public'));

app.use("/", router);

export default app;
