import React, { useState, useEffect } from 'react'

function Result({ result, berita, setBerita } ) {


  useEffect(() => {
    if (result === "HOAX") {
      setBerita(berita)
    } else {
      setBerita("")
    }
  }, [result])
  return (
    <div className={` ${
        result === "HOAX"
          ? "flex flex-col justify-center items-center w-full max-w-[1920px] h-auto gap-6 mx-auto px-20"
          : "hidden"
        }`}>
      <div className="flex justify-start w-full">
        <p className='text-[28px] font-medium'>Berita Sebenarnya</p>
      </div>
      <div className='w-full bg-[#F4F4F4] rounded-[20px] border-2 border-[#EAEAEA]'>
          <p className='p-6 text-[24px] font-normal'>{berita}</p>
      </div>
    </div>
  )
}

export default Result