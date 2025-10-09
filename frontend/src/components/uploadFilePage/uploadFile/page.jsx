"use client"

import React, { useState, useRef } from "react"

function UploadFile({ status, setStatus, result, setResult}) {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)
  const [persentase, setPresentase] = useState(0)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0]
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (selectedFile) {
         if (allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setStatus("uploading")
            startFakeUpload()
            setResult("")
        } else {
            setFile(null);
            setResult("")
        }   
        console.log(selectedFile.type)
    }
  }

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setDragOver(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const droppedFile = e.dataTransfer.files?.[0]
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    if (droppedFile) {
        if (allowedTypes.includes(droppedFile.type)) {
            setFile(droppedFile);
            setStatus("uploading")
            startFakeUpload()
            setResult("")
        } else {
            setFile(null);
            setResult("")
        }
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleDelete = () => {
    setFile(null)
    setStatus("idle")
    setProgress(0)
    setResult(null)
  }

  const handleCheck = () => {
    if (!file || status !== "uploaded") return
    setStatus("checking")

    setTimeout(() => {
        const possibleResults = [
        "Berita Ini Terverifikasi Fakta!",
        "Berita Ini Hoax!"
        ];
        const fakeResult = possibleResults[Math.floor(Math.random() * possibleResults.length)];
        const randomValue = Math.floor(Math.random() * 101)
        setPresentase(randomValue)
        // const fakeResult = "Berita Ini Terverifikasi Fakta!" || "Berita Ini Hoax!"
        setResult(fakeResult)
        setStatus("checked")
    }, 2000)
  }

  const startFakeUpload = () => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setStatus("uploaded")
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 KB"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }


  return (
    <div className="flex justify-center">
      <div className="w-[1280px] h-auto gap-[24px]">
        {/* Header */}
        <div className="flex justify-center">
          <div className="flex">
            <img
              src="/assets/icon/icon-file2.svg"
              alt="icon-file"
              className="w-[40px] h-[40px]"
            />
            <p className="flex gap-3 text-[28px] text-[#0101F6] font-normal text-center mb-6">
              Unggah Dokumen Berita
            </p>
          </div>
        </div>

        {/* Drop Zone */}
        <div
          className={`flex justify-center w-[1280px] h-[280px] border-[#777777] bg-white rounded-md border-2 border-dashed ${
            dragOver ? "border-blue-700 !bg-[#E6E6FE80]" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              {/* Upload Progress */}
              {status === "uploading" ? (
                <>
                  <div className="relative w-[80px] h-[80px]">
                    <svg
                      className="absolute top-0 left-0 w-full h-full"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-gray-200"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#0101F6]"
                        strokeWidth="3"
                        strokeDasharray={`${progress}, 100`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[18px] font-medium text-black">
                      {progress}%
                    </span>
                  </div>

                  <p className="text-[18px] text-center font-medium mt-[16px]">
                    Sedang mengunggah...
                  </p>
                </>
              ) : !file ? (
                <>
                  <img
                    src="/assets/icon/icon-cloud.svg"
                    alt="icon-cloud"
                    className="w-[40px] h-[40px] bg-transparent"
                  />
                  <p className="text-[20px] text-center font-medium mt-[12px]">
                    Pilih file dari komputer atau tarik dokumen
                  </p>
                  <p className="text-[18px] text-center font-normal mt-[8px] text-[#999999]">
                    Format yang didukung: .pdf, .docx
                  </p>
                </>
              ) : (
                <>
                  <img
                    src="/assets/icon/icon-cloud.svg"
                    alt="icon-cloud"
                    className="w-[40px] h-[40px] bg-transparent"
                  />
                  <p className="text-[20px] text-center font-medium mt-[12px]">
                    Pilih file dari komputer atau tarik dokumen
                  </p>
                  <p className="text-[18px] text-center font-normal mt-[8px] text-[#999999]">
                    Format yang didukung: .pdf, .docx
                  </p>
                </>
              )}

              {/* Input file */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileChange}
                className="hidden"
              />

              <button
                onClick={handleButtonClick}
                disabled={status === "uploading"}
                className={`bg-transparent border rounded-[8px] text-[#0101F6] border-[#1B01A6] pt-[8px] pr-[20px] pb-[8px] pl-[20px] mt-[20px] ${
                  status === "uploading" ? "cursor-not-allowed" : ""
                }`}
              >
                Pilih File
              </button>
            </div>
          </div>
        </div>

        {/* File Info After Upload */} 
        {(file && (status === "uploaded" || status === "checking" || status === "checked")) && (
        <div className="mt-6 w-full flex justify-between items-center bg-[#E6E6FE]/30 border border-[#0101F6] rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-4">
            <img
                src="/assets/icon/icon-pdf.svg"
                alt="icon-pdf"
                className="w-[40px] h-[40px]"
            />
            <div>
                <p className="text-[18px] font-medium text-[#252525]">{file.name}</p>
                <p className="flex font-normal text-[16px] text-[#777777]">
                {formatBytes(file.size)} of {formatBytes(file.size)} •{" "}
                <span className="flex items-center text-[16px] text-[#292D32] font-normal">
                    <img
                    src="/assets/icon/icon-check.svg"
                    alt="icon-check"
                    className="w-[16px] h-[16px] mr-1 ml-1 bg-transparent"
                    />
                    Completed
                </span>
                </p>
            </div>
            </div>

            <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 transition"
            >
            <img
                src="/assets/icon/icon-trash.svg"
                alt="icon-trash"
                className="w-[32px] h-[32px] bg-transparent"
            />
            </button>
        </div>
        )}

        {/* Baris Hasil Periksa */}
        <div className={`flex justify-between items-center mt-6 ${
            result === "Berita Ini Terverifikasi Fakta!" 
                ? "mb-[60px]"
                : ""
            }`}>
        {status === "checked" ? (
            <div className="flex gap-3">
                <div className={`flex items-center gap-[10px] h-[50px] rounded-full py-3 px-4 border ${
                result === "Berita Ini Terverifikasi Fakta!"
                    ? "border-[#4FC94F]"
                    : "border-[#EF233C]"
                }`}>
                <img
                src={
                    result === "Berita Ini Terverifikasi Fakta!"
                    ? "/assets/icon/icon-factCheck.svg"
                    : "/assets/icon/icon-factCheck2.svg"
                }
                alt="icon-result"
                className="w-[28px] h-[28px] bg-transparent"
                />
                <p  className={`text-[20px] font-normal ${
                    result === "Berita Ini Terverifikasi Fakta!"
                    ? "text-[#4FC94F]"
                    : "text-[#EF233C]"
                }`}>
                {result}
                </p>
            </div>

            <div className="flex items-center bg-[#E6E6FE] gap-[10px] h-[50px] rounded-full py-3 px-4 border border-[#0101F6]">
                <img
                src="/assets/icon/icon-percentage.svg"
                alt="icon-percentage"
                className="w-[28px] h-[28px] bg-transparent"
                />
                <p className="text-[20px] font-normal text-[#0101F6]">
                Presentase Kemiripan: {persentase}%
                </p>
            </div>
        </div>
        ) : (
            <div></div>
        )}

        {/* Tombol periksa */}
        <button
            onClick={handleCheck}
            disabled={status !== "uploaded"}
            className={`flex items-center gap-[10px] text-[20px] font-medium h-[50px] rounded-full py-3 px-4 ${
            status === "uploaded"
                ? "bg-[#0101F6] text-white mb-[60px]"
                : "bg-[#0101F6] text-white cursor-not-allowed"
            }`}
        >
            <img
            src="/assets/icon/icon-search.svg"
            alt="icon-search"
            className="w-[24px] h-[24px] bg-transparent"
            />
            Periksa sekarang
        </button>
        </div>
      </div>
    </div>
  )
}

export default UploadFile