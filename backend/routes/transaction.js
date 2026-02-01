const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const transactions = [
    {
      id: 1,
      from: "0x123",
      to: "0xABC",
      amount: "0.5 ETH"
    },
    {
      id: 2,
      from: "0x456",
      to: "0xDEF",
      amount: "1.2 ETH"
    }
  ];

  res.json(transactions);
});

module.exports = router;