const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // Add more fields as needed
});

module.exports = mongoose.model('Product', productSchema);
