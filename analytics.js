// analytics.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Your MongoDB model imports here (if using mongoose)

// Example route for Total Sales Over Time
router.get('/total-sales', async (req, res) => {
  try {
    const data = await db.shopifyOrders.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$created_at" }
          },
          totalSales: { $sum: "$total_price_set.shopify" }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add similar routes for other queries...

module.exports = router;
