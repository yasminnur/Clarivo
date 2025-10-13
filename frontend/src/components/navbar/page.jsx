import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <>
            <div className="w-full flex py-[22px] px-[80px] justify-between items-center border-b border-[#EAEAEA] bg-transparent">
                <div className="relative h-[40px] w-[128px]">
                    <Image src="assets/logo/logo-clarivo.svg" fill className="absolute top-0 left-0 object-contain" />
                    </div>
             <button className="px-4 py-3 rounded-full bg-[#0101F6] text-white font-medium text-lg/[130%] tracking-tighter shadow-[0_1px_3px_rgba(1,1,185,0.12),_0_0_0_0.5px_rgba(1,1,185,1),_inset_0_1px_0_rgba(255,255,255,0.12),_inset_0_-2px_0_rgba(1,1,185,1)]
          active:translate-y-0.5 transition-transform duration-150">Coba sekarang</button>

            </div>
        </>
    )
}