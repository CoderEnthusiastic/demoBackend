const express = require("express");
const fs = require("fs");
const path = require("path");

const pathVar = path.resolve(__dirname, "local.json");

const app = express();

app.get("/users", (req, res) => {
  fs.readFile(pathVar, "utf8", (err, users) => {
    const data = JSON.parse(users);
  //  console.log(data);
    res.status(200).json({
      status: "success",
      data,
    });
  });
});

app.listen(8000);
