"use client"

import Hero from '@/components/uploadFilePage/hero/page'
import UploadFile from '@/components/uploadFilePage/uploadFile/page'
import Result from '@/components/uploadFilePage/result/page'
import Navbar from '@/components/navbar/page'
import Footer from '@/components/footer/page'
import React, { useState } from 'react'

const Upload = () => {
  const [status, setStatus] = useState("idle")
  const [result, setResult] = useState(null)
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col gap-y-[60px] font-sans'>
      <div className='flex justify-start -z-10 -mt-[60px]'>
        <img
        src="/assets/icon/icon-blue.svg"
        alt="icon-search"
        className="left-56 w-[1000px] h-[670px] blur-3xl absolute"
        />
        <img
        src="/assets/icon/icon-blue.svg"
        alt="icon-search"
        className="h-[670px] absolute"
        />
      </div>
      <div className='flex justify-end -z-10'>
        <img
        src="/assets/icon/icon-pink.svg"
        alt="icon-search"
        className="top-60 right-80 w-[1000px] h-[670px] blur-3xl absolute"
        />
        <img
        src="/assets/icon/icon-pink.svg"
        alt="icon-search"
        className="top-96 blur-3xl h-[670px] absolute"
        />
        <img
        src="/assets/icon/icon-pink.svg"
        alt="icon-search"
        className="top-32 blur-3xl h-[670px] absolute"
        />
      </div>
        <Hero/>
        <UploadFile status={status} setStatus={setStatus} result={result} setResult={setResult}/>
        <Result status={status} setStatus={setStatus} result={result} setResult={setResult}/>
        <Footer/>
    </div>
    </div>
    
  )
}

export default Upload