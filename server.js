import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

const app = express()
const __dirname = path.resolve();

dotenv.config();
app.use(cors())


app.use(express.static("dist"));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get('/getSomeData', (req, res) => {
    res.status(200).json("I just fetched something good");
});

app.use('*', (req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(process.env.PORT || 3000, () => console.log(`App is running on port : ${process.env.PORT}`))