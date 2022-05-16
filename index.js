import express from "express";

const app = express()

app.get("/", (req, res) => res.json({msg: "Server is running 😀"}))

app.listen(process.env.PORT || 4000, () => console.log("Server is running"))
