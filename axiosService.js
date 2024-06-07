// axiosService.js
const axios = require('axios');

// Function to make HTTP GET requests
async function get(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
}

module.exports = { get };
