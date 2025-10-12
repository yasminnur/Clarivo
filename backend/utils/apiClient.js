import axios from "axios";
import { SEARCH_API_URL } from "../config/serverConfig.js";

export const searchApi = async (query) => {
  try {
    const response = await axios.get(SEARCH_API_URL, {
      params: {
        q: query,
        format: "json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from search API:", error.message);
    return null;
  }
};
