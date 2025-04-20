// server.js
const express = require("express");
const path    = require("path");

const app  = express();
const PORT = process.env.PORT || 3000;

// 1) Serve everything in your current project directory (including libraries/)
app.use(express.static(path.join(__dirname)));

// 2) Fallback: serve index.html on “/”
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
