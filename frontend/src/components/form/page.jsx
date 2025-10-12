import React, { useState } from 'react'

function Form({ status, setStatus, result, setResult }) {
  const [judul, setJudul] = useState('')
  const [isi, setIsi] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [persentase, setPersentase] = useState(0)

  const handleJudulChange = (e) => setJudul(e.target.value)

  const handleIsiChange = (e) => {
    const text = e.target.value
    setIsi(text)
    const words = text.trim().split(/\s+/).filter(Boolean)
    setWordCount(words.length)
  }

  const handleCheck = () => {
  if (!judul.trim() || !isi.trim()) return

  setResult('')
  setPersentase(0)
  setStatus('checking')

  setTimeout(() => {
    const possibleResults = [
      'Berita Ini Terverifikasi Fakta!',
      'Berita Ini Hoax!',
    ]
    const fakeResult =
      possibleResults[Math.floor(Math.random() * possibleResults.length)]
    const randomValue = Math.floor(Math.random() * 101)

    setPersentase(randomValue)
    setResult(fakeResult)
    setStatus('checked')
  }, 2000)
  }


  const canCheck = judul.trim() !== '' && isi.trim() !== ''

  return (
    <div className='flex flex-col justify-center items-center w-full max-w-[1920px] h-auto gap-6 mx-auto px-20'>
      {/* Input Judul Berita */}
      <div className='flex justify-start w-full -mb-3'>
        <p className='text-[32px] font-medium'>Judul Berita</p>
      </div>
      <input
        type='text'
        value={judul}
        onChange={handleJudulChange}
        required
        placeholder='Masukkan judul berita di sini'
        className={`w-full h-[86px] border-2 rounded-[20px] bg-white text-[24px] font-normal p-6 ${
          canCheck ? 'border-[#0101F6]' : 'border-[#DDDDDD]'
        }`}
      />

      {/* Input Isi Berita */}
      <div className='flex justify-start w-full -mb-3'>
        <p className='text-[32px] font-medium'>Isi Berita</p>
      </div>
      <div className='w-full relative -mb-6'>
        <textarea
          required
          value={isi}
          onChange={handleIsiChange}
          placeholder='Tempel berita di sini ...'
          className={`w-full h-[450px] border-2 rounded-[20px] bg-white text-[24px] font-normal p-6 resize-none transition-colors duration-300 ${
            canCheck ? 'border-[#0101F6]' : 'border-[#DDDDDD]'
          }`}
        />
        <p className='absolute bottom-6 left-6 text-[#999999] font-medium text-[20px]'>
          {wordCount} kata
        </p>
      </div>
      
      {/* Hasil Pengecekan */}
      <div className='flex justify-between items-center w-full mt-6'>
        {status === 'checked' ? (
          <div className='flex gap-3'>
            <div
              className={`flex items-center gap-[10px] h-[55px] rounded-full py-3 px-4 border ${
                result === 'Berita Ini Terverifikasi Fakta!'
                  ? 'border-[#31BF30]'
                  : 'border-[#EF233C]'
              }`}
            >
              <img
                src={
                  result === 'Berita Ini Terverifikasi Fakta!'
                    ? '/assets/icon/icon-factCheck.svg'
                    : '/assets/icon/icon-factCheck2.svg'
                }
                alt='icon-result'
                className='w-[28px] h-[28px]'
              />
              <p
                className={`text-[20px] font-normal ${
                  result === 'Berita Ini Terverifikasi Fakta!'
                    ? 'text-[#31BF30]'
                    : 'text-[#EF233C]'
                }`}
              >
                {result}
              </p>
            </div>

            <div className='flex items-center bg-[#E6E6FE] gap-[10px] h-[55px] rounded-full py-3 px-4 border border-[#0101F6]'>
              <img
                src='/assets/icon/icon-percentage.svg'
                alt='icon-percentage'
                className='w-[28px] h-[28px]'
              />
              <p className='text-[20px] font-normal text-[#0101F6]'>
                Persentase Kemiripan: {persentase}%
              </p>
            </div>
          </div>
        ) : (
          <div/>
        )}

        {/* Tombol Periksa Sekarang */}
        <button
          onClick={handleCheck}
          disabled={!canCheck}
          className={`flex items-center gap-[10px] text-[24px] font-medium h-[55px] rounded-full py-3 px-4 ${
            canCheck
              ? 'bg-[#0101F6] text-white'
              : 'bg-[#999999] text-white cursor-not-allowed'
          }`}
        >
          <img
            src='/assets/icon/icon-search.svg'
            alt='icon-search'
            className='w-[24px] h-[24px]'
          />
          Periksa Sekarang
        </button>
      </div>
    </div>
  )
}

export default Form
