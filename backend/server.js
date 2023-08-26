const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 8800;
const dotenv = require("dotenv");
dotenv.config();

app.use(cors({ credentials: true, origin: "http:// 13.124.235.1:5000" }));

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // 요청의 body를 파싱하기 위한 미들웨어

const router = require("./routes/index");
app.use("/", router);

app.get("*", (req, res) => {
  if (res.status === 400) {
    res.send("없는 라우터입니다.");
  } else {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  }
});

app.listen(PORT, () => {
  console.log(`백앤드 서버가 ${PORT}번에서 작동 중`);
});
