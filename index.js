const express = require("express");
const cors = require("cors");
const app = express();
const myRoute = require('./routes/myRoute');
const createNewError = require('./errors/createNewError');
// use
app.use(cors());
app.use(myRoute)
app.use(createNewError);

const PORT = 3001;
const user = { Name: "Robert", Year: new Date().getUTCFullYear()};
const getHomePage = () =>
 {
try{
    app.get("/", (req, res) => {
        res.send(user);
      });
}catch(err){
    createNewError(err);
}
};
app.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
  getHomePage()
});
