const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.json({ message: "Backend is working!" });
});

// Dedicated API endpoint to avoid static index.html being served for '/'
app.get('/api', (req, res) => {
    res.json({ message: 'Backend API is working!' });
});

app.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

server.on("error", (err) => {
    if (err && err.code === "EADDRINUSE") {
        console.error(
            `Port ${PORT} is already in use. Try stopping the process using it or set PORT to a different value.`,
        );
        console.error(
            "To find the process: sudo lsof -i :3000  OR  sudo ss -tulpn | grep 3000",
        );
        process.exit(1);
    }
    console.error("Server error:", err);
    process.exit(1);
});
