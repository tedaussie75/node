import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(express.static("public"));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log(`App is running on port : ${process.env.PORT}`))