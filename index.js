const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 3001;
const user = { Name: "Robert", Year: new Date().getUTCFullYear() };
const getHomePage = () => {
  app.get("/", (req, res) => {
    res.send(user);
  });
};


app.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
  getHomePage()
});
