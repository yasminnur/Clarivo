import React, { useState } from 'react'
import { cekFaktaAPI } from "../../lib/api/cekFakta";


function Form({ status, setStatus, result, setResult, setBerita }) {
  const [judul, setJudul] = useState('')
  const [isi, setIsi] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [persentase, setPersentase] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleJudulChange = (e) => setJudul(e.target.value)

  const handleIsiChange = (e) => {
    const text = e.target.value
    setIsi(text)
    const words = text.trim().split(/\s+/).filter(Boolean)
    setWordCount(words.length)
  }

  const handleCheck = async () => {
    setIsLoading(true);
    if (!judul.trim() || !isi.trim()) return
    setResult('')
    setPersentase('0%')
    setStatus('checking')

    setTimeout(async () => {
      const res = await cekFaktaAPI(judul, isi);
      console.log("Response dari API cek-fakta:", res);
      console.log("Response OK:", res.ok);
      if(res.label == "FAKTA" || res.label == "HOAX") {
        setPersentase(res.presentaseKemiripan)
        setResult(res.label)
        setStatus('checked')
        if (res.label === "HOAX" && res.beritaSebenarnya) {
          setBerita(res.beritaSebenarnya)
        }
        setIsLoading(false);
        return
      }
      setPersentase('0%')
      setResult('Gagal memeriksa berita. Silakan coba lagi.')
      setStatus('checked')
      setIsLoading(false);
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
                result === 'FAKTA'
                  ? 'border-[#31BF30]'
                  : result === 'HOAX'
                  ? 'border-[#EF233C]'
                  : 'border-[#000000]'
              }`}
            >
              <img
                src={
                  result === 'FAKTA'
                    ? '/assets/icon/icon-factCheck.svg'
                    : result === 'HOAX'
                    ? '/assets/icon/icon-factCheck2.svg'
                    : '/assets/icon/icon-factCheck2.svg'
                }
                alt='icon-result'
                className='w-[28px] h-[28px]'
              />
              <p
                className={`text-[20px] font-normal ${
                  result === 'FAKTA'
                    ? 'text-[#31BF30]' 
                    : result === 'HOAX'
                    ? 'text-[#EF233C]'
                    : 'text-[#000000]'
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
                Persentase Kemiripan: {persentase}
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
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <p>Memeriksa...</p>
            </>
          ) : (
            <>
            <img
              src='/assets/icon/icon-search.svg'
              alt='icon-search'
              className='w-[24px] h-[24px]'
            />
            <p>
              'Periksa Sekarang'
            </p>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default Form
