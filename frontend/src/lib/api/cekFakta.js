export async function cekFaktaAPI(judul, isi) {
  try {
    const res = await fetch("http://localhost:8082/api/cekfakta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        JudulBerita: judul,
        IsiBerita: isi,
      }),
    });
    console.log("Response dari API cek-fakta:", res);
    return await res.json();
  } catch (err) {
    console.error("Error memanggil predict API", err.message);
    throw err;
  }
}
