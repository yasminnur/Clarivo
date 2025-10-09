import React from 'react'

function Hero() {
  return (
    <div className='flex justify-center'>
        <div className='gap-[20px] w-[710px]'>
            <div className='flex justify-center'>
                <div className="flex justify-center bg-white w-[334px] h-[40px] rounded-full border border-[#1B01A6] mb-5 pt-[8px] pr-[16px] pb-[8px] pl-[16px]">
                    <img src="/assets/icon/icon-file.svg" alt="icon-file" className="w-[24px] h-[24px] bg-transparent"/>
                    <p className='w-[268px] h-[23px] text-[#0101F6] text-[18px] font-medium bg-white text-center bg-transparent'>PERIKSA FAKTA PADA BERITA</p>
                </div>
            </div>
            <p className='font-medium text-[52px] text-center'>Verifikasi Berita Secara Cepat dan Akurat</p>
            <p className='mt-4 mb-10 font-normal text-[24px] text-center text-[#3B3B3B]'>Tempelkan teks atau unggah dokumen berita, dan dapatkan hasil verifikasi hanya dalam hitungan detik</p>
            <div className='flex justify-center'>
                <div className='flex justify-between w-[412px] h-[62px]'>
                    <button className='bg-white w-[200px] h-[62px] rounded-full border border-[#1B01A6] text-[24px] text-[#0101F6] pt-[12px] pr-[20px] pb-[12px] pl-[20px]'>Salin Berita</button>
                    <button className='bg-[#0101F6] w-[200px] h-[62px] text-[22px] text-white rounded-full border border-[#1B01A6] pt-[12px] pr-[20px] pb-[12px] pl-[20px]'>Unggah Berita</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero