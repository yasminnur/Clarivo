import { cekFakta } from "../services/cekFaktaService.js";

export const cekFaktaHandler = async (req, res) => {
  try {
    const { JudulBerita, IsiBerita } = req.body;
    if (!JudulBerita || !IsiBerita) {
      return res.status(400).json({
        error: "Field 'JudulBerita' dan 'IsiBerita' wajib diisi!",
      });
    }

    const hasil = await cekFakta(JudulBerita, IsiBerita);
    res.json(hasil);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Terjadi kesalahan pada server!" });
  }
};
