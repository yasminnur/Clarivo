import { searchApi } from "../utils/apiClient.js";
import { calculateSimilarity } from "../utils/similarity.js";

export const cekFakta = async (JudulBerita, IsiBerita) => {
  const query = `${JudulBerita} ${IsiBerita}`;
  const data = await searchApi(query);

  if (!data || !data.results || data.results.length === 0) {
    return {
      label: "FAKTA",
      presentaseKemiripan: 0,
    };
  }

  const results = data.results;
  const firstResult = results[0];
  const newsContent = firstResult.content || "";
  const newsTitle = firstResult.title || "";

  const similarity = calculateSimilarity(
    (IsiBerita + JudulBerita).toLowerCase(),
    (newsContent + newsTitle).toLowerCase()
  );

  const percentage = Math.round(similarity * 100);

  if (similarity >= 0.55) {
    return {
      label: "FAKTA",
      presentaseKemiripan: percentage,
    };
  } else {
    return {
      label: "HOAX",
      presentaseKemiripan: percentage,
      beritaSebenarnya: newsContent || newsTitle || "Tidak ditemukan berita sebenarnya",
    };
  }
};
