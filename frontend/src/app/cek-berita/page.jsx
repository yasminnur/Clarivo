"use client"

import React, { useState } from 'react'
import Navbar from '@/components/navbar/page'
import Footer from '@/components/footer/page'
import Hero from '@/components/hero/page'
import Form from '@/components/form/page'
import Result from '@/components/result/page'

function CekBerita() {
    const [status, setStatus] = useState("idle")
    const [result, setResult] = useState(null)
    const [berita, setBerita] = useState("")

  return (
    <div>
      <Navbar/>
      <div className='flex flex-col gap-y-[60px] font-sans'>
      <div className='flex justify-start -z-10 -mt-[60px]'>
        <img
        src="/assets/icon/icon-blue.svg"
        alt="icon-search"
        className="left-16 w-[1000px] h-[670px] blur-3xl absolute"
        />
        <img
        src="/assets/icon/icon-blue.svg"
        alt="icon-search"
        className="top-40 h-[670px] absolute"
        />
      </div>
      <div className='flex justify-end -z-10'>
        <img
        src="/assets/icon/icon-pink.svg"
        alt="icon-search"
        className="top-72 right-40 w-[1000px] h-[670px] blur-3xl absolute"
        />
        <img
        src="/assets/icon/icon-pink.svg"
        alt="icon-search"
        className="top-96 blur-3xl h-[670px] absolute"
        />
      </div>
        <Hero/>
        <Form status={status} setStatus={setStatus} result={result} setResult={setResult} setBerita={setBerita}/>
        <Result result={result} berita={berita} setBerita={setBerita}/>
        <Footer/>
      </div>
    </div>
  )
}

export default CekBerita