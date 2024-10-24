const express = require("express");
const app = express();

// Route for the root path
app.get("/", (req, res) => {
    res.send("Namaste from the Server");
});

// Route for "/hello"
app.get("/hello", (req, res) => {
    res.send("Hello hello helloooo");
});

// Route for "/rest"
app.get("/rest", (req, res) => {
    res.send("Hello from the Server");
});

app.post("/pello", (req, res) => {
    res.send("pello pello pelloooo");
});
// Start the server
app.listen(8000, () => {
    console.log("Server running on port 8000");
});
