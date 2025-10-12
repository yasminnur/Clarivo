import React from 'react'

function Hero() {
  return (
    <div className='flex justify-center'>
        <div className='gap-[20px] w-[710px]'>
            <div className='flex justify-center'>
                <div className="flex items-center justify-center gap-[10px] bg-white w-[334px] h-[40px] rounded-full border border-[#1B01A6] mb-5 py-2 px-4">
                    <img src="/assets/icon/icon-file.svg" alt="icon-file" className="w-[24px] h-[24px] bg-transparent"/>
                    <p className='flex items-center text-[#0101F6] text-[18px] font-medium text-center'>PERIKSA FAKTA PADA BERITA</p>
                </div>
            </div>
            <p className='font-medium text-[52px] text-center'>Verifikasi Berita Secara Cepat dan Akurat</p>
            <p className='mt-4 mb-10 font-normal text-[24px] text-center text-[#3B3B3B]'>Tempelkan teks atau unggah dokumen berita, dan dapatkan hasil verifikasi hanya dalam hitungan detik</p>
            
        </div>
    </div>
  )
}

export default Hero