const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    // Add more fields as needed
});

module.exports = mongoose.model('Order', orderSchema);
