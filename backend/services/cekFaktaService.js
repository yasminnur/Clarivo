import { callPredict } from "../utils/predictClient.js";
import { searchWeb } from "../utils/searchClient.js";

export const cekFakta = async (JudulBerita, IsiBerita) => {
  const predictBody = {
    judul: JudulBerita,
    isi_berita: IsiBerita,
  };

  const predictResp = await callPredict(predictBody);

  if (!predictResp) {
    return {
      label: "UNKNOWN",
      presentaseKemiripan: "0%",
      message: "Gagal memanggil service predict.",
    };
  }

  const prediction = (predictResp.prediction || "").toUpperCase();
  const confidence = predictResp.confidence || "0%";

  const label =
    prediction === "NON-HOAX"
      ? "FAKTA"
      : prediction === "HOAX"
      ? "HOAX"
      : prediction;

  if (prediction === "HOAX") {
    const query =
      JudulBerita && JudulBerita.trim().length > 0
        ? JudulBerita
        : `${JudulBerita} ${IsiBerita}`;

    const searchData = await searchWeb(query);

    if (searchData && Array.isArray(searchData.results) && searchData.results.length > 0) {
      const first = searchData.results[0];
      const beritaSebenarnya = first.content || first.title || "Referensi berita tidak lengkap.";

      return {
        label,
        presentaseKemiripan: confidence,
        beritaSebenarnya,
      };
    } else {
      return {
        label,
        presentaseKemiripan: confidence,
        beritaSebenarnya: "Tidak ditemukan referensi berita terkait.",
      };
    }
  }

  return {
    label,
    presentaseKemiripan: confidence,
  };
};
