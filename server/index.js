const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");
const menuRoutes = require("./routes/menuRoutes");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

/* ===========================
   1. DATABASE CONNECTION
=========================== */
connectDB();

/* ===========================
   2. MIDDLEWARES
=========================== */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://cafe-qr-client.onrender.com" // production frontend
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ===========================
   3. SOCKET.IO SETUP
=========================== */
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://cafe-qr-client.onrender.com"
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  },
});

// Make io accessible in routes/controllers
app.set("io", io);

io.on("connection", (socket) => {
  console.log(`📡 Kitchen connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`🔌 Kitchen disconnected: ${socket.id}`);
  });
});

/* ===========================
   4. ROUTES
=========================== */
app.use("/api/orders", orderRoutes);
app.use("/api/menu", menuRoutes);

/* ===========================
   5. SERVER START
=========================== */
const PORT = process.env.PORT || 10000;
server.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
