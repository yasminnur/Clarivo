import axios from "axios";
import { PREDICT_API_URL } from "../config/serverConfig.js";

export const callPredict = async (body) => {
  try {
    const resp = await axios.post(PREDICT_API_URL, body, {
      headers: { "Content-Type": "application/json" },
      timeout: 10_000,// 10s timeout
    });
    return resp.data;
  } catch (err) {
    console.error("Error calling predict API:", err.message || err);
    return null;
  }
};
