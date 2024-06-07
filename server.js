// server.js
const express = require('express');
const axiosService = require('./axiosService');
const app = express();
const PORT = process.env.PORT || 3000;

// Route to fetch product information
app.get('/product/:productId', async (req, res) => {
    const productId = req.params.productId;
    const region = req.query.region; // Assuming region is passed as a query parameter
    try {
        const productInfo = await getProductInfo(productId, region);
        res.json(productInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Function to fetch product information
async function getProductInfo(productId, region) {
    try {
        // Use Axios service to fetch product data
        const productInfo = await axiosService.get(`API_ENDPOINT/${productId}`);
        // Process and format the data
        return productInfo;
    } catch (error) {
        throw new Error('Error fetching product information:', error);
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
