const express = require("express");
const app = express();
const genres = [
    { id: 1, type: "Action" },
    { id: 2, type: "Drama" },
    { id: 3, type: "Romcon" }
];
app.get("/api/genres", (req, res) => {
    res.send(genres);
})









app.listen(3000, () => {
    console.log("Server started.....");
})