const express = require("express");
const cors = require("cors");
const transactionRoutes = require("./routes/transaction");

const app = express();
const PORT = 3001;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/transactions", transactionRoutes);

// test server
app.get("/", (req, res) => {
  res.send("Backend Web3 UAS berjalan");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});