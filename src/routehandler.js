const express = require("express");
const route = express();
const {adminauth} = require("./middleware/auth")
route.use("/admins", adminauth);

route.get("/admins/getdata", (req, res) => {
    res.send("send all data");
});

route.listen(7777, () => {
    console.log("Server running on port 7777");
});
