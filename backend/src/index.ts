import express, { json } from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const questions = JSON.parse(fs.readFileSync("backend/data/questions.json").toString());

app.use("/assets", express.static("frontend/assets"));
app.use("/style", express.static("frontend/style"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/index.html"));
} );

app.get("/question/:index", (req, res) => {
    const questionNumber = parseInt(req.params.index);
    if(questionNumber >= questions.length || questionNumber < 0){
        res.status(400).json({
            message: "The question index is nor correct"
        });
        return;
    }
    res.status(200).json(questions[questionNumber]);
});


app.listen(port, () => {
    console.log(`server started at port: ${port}`);
});