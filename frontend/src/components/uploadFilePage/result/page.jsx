import React, { useState, useEffect } from 'react'

function Result({ result } ) {
  const [berita, setBerita] = useState("")

  useEffect(() => {
    if (result === "Berita Ini Hoax!") {
      const stringBerita =
        "Pemerintah Indonesia melalui Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan (Menko PMK) mengumumkan penetapan libur nasional dan cuti bersama Hari Raya Idul Fitri tahun ini. Penentuan tanggal libur dilakukan berdasarkan hasil rapat bersama sejumlah kementerian dan lembaga terkait. Libur nasional Idul Fitri ditetapkan sesuai ketetapan Kementerian Agama setelah sidang isbat, sedangkan jadwal cuti bersama ditetapkan melalui Surat Keputusan Bersama (SKB) tiga menteri. Pemerintah juga tengah menyiapkan sejumlah langkah untuk mendukung kelancaran arus mudik, seperti rekayasa lalu lintas di titik rawan kemacetan serta penyediaan posko kesehatan di jalur utama. Masyarakat diimbau untuk tetap memantau informasi resmi dari pemerintah dan merencanakan perjalanan mudik dengan baik agar terhindar dari kepadatan di puncak arus mudik."

      setBerita(stringBerita)
    } else {
      setBerita("")
    }
  }, [result])
  return (
    <div className={` ${
        result === "Berita Ini Hoax!"
          ? "flex flex-col items-center"
          : "hidden"
        }`}>
      <div className="flex justify-start w-[1280px] mb-5">
        <p className='text-[28px] font-medium'>Berita Sebenarnya</p>
      </div>
      <div className='w-[1280px] bg-[#F4F4F4] rounded-[20px] border-2 border-[#EAEAEA]'>
          <p className='p-6 text-[24px] font-normal'>{berita}</p>
      </div>
    </div>
  )
}

export default Result