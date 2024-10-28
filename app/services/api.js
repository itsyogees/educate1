import axios from "axios";

// Ensure that the API URL is coming from environment variables or fallback to a default value.
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const api = axios.create({
  baseURL: API_URL,  // Correctly use the base URL from the environment variables
  headers: {
    "Content-Type": "application/json",
  },
});

// Error handler function
const handleApiError = (error) => {
  if (error.response) {
    console.error('API Response Error:', error.response);  // Adjusted to log error.response
    return { error: error.response.data || 'An error occurred while fetching data.' };
  } else if (error.request) {
    console.error('API Request Error:', error.request);
    return { error: 'No response from the server. Please try again later.' };
  } else {
    console.error('Error:', error.message);
    return { error: error.message };
  }
};

// Fetch data for HomePageSection1 by ID
export const fetchDataHomeById = async (id) => {
  console.log("homePageSection1",);
  try {
    const response = await api.get(`/api/public/homePageSection1/getOne/${id}`);
    return response.data;  // Return the data directly
  } catch (error) {
    return handleApiError(error);  // Handle the error properly
  }
};

export const fetchCardDataById = async (id) => {
  try {
    const response = await api.get(`/api/public/homePageSection2/getOne/${id}`);
    return response.data;  // Return the data directly
  } catch (error) {
    return handleApiError(error);  // Handle the error properly
  }
}