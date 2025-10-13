import axios from "axios";
import { SEARCH_API_URL } from "../config/serverConfig.js";

export const searchWeb = async (query) => {
  try {
    const resp = await axios.get(SEARCH_API_URL, {
      params: {
        q: query,
        format: "json",
      },
      timeout: 10_000,
    });
    return resp.data;
  } catch (err) {
    console.error("Error calling search API:", err.message || err);
    return null;
  }
};
