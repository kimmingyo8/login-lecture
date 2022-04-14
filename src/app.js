//모듈
const express = require("express")
const app = express();

//라우팅
const home = require("./routes/home")

app.set("views","./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들웨어 등록 메서드

module.exports = app;