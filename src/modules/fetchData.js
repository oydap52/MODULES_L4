const axios = require('axios');

async function fetchData(url) {
  let result = { data: [], isLoading: true, error: null };
  try {
    const response = await axios.get(url);
    result.data = response.data;
    result.isLoading = false;
  } catch (err) {
    result.error = err.message;
    result.isLoading = false;
  }
  return result;
}

module.exports = fetchData;