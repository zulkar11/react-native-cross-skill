import axios from 'axios';

// Define the base URL for your API
const baseURL = 'https://api.gcart.com.bd';

// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL,
});

export const get = async (url, config) => {
  try {
    const response = await api.get(url, config);
    return {data: response.data, error: null};
  } catch (error) {
    console.error('API Request Failed', error);

    return {
      data: null,
      error: error.response?.data || 'Something went wrong',
    };
  }
};
