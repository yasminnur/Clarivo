import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <>
            <div className="w-full flex py-[22px] px-[80px] justify-between items-center border-b border-[#EAEAEA] bg-transparent">
                <div className="relative h-[40px] w-[128px]">
                    <Image src="assets/logo/logo-clarivo.svg" fill className="absolute top-0 left-0 object-contain" />
                    </div>
                <div className="flex gap-5 text-[#3B3B3B]">
                    <Link href="/beranda" className="cursor-pointer">Beranda</Link>
                    <Link href="/tentang" className="cursor-pointer">Tentang</Link>
                    <Link href="/cara-kerja" className="cursor-pointer">Cara Kerja</Link>
                    <Link href="/edukasi" className="cursor-pointer">Edukasi</Link>
                </div>

            </div>
        </>
    )
}