const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3001;
const user_inform = require("./routes/user_inform");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user_inform", user_inform);

const router = require("./routes/user_inform");
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
