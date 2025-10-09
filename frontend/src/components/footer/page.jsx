import Link from "next/link";
export default function Footer() {
    return (
        <>
            
            <div className="flex px-[80px] mt-[10px] mx-[22px] py-[22px] border-t border-[#EAEAEA] justify-between">
            <p className="text-base/[160%] font-normal text-[#777777]">Clarivo © 2025. All rights reserved.</p>
                <div className="flex gap-5 text-[#777777]">
                    <Link href="#" className="cursor-pointer">Terms of Service</Link>
                    <Link href="#" className="cursor-pointer">Privacy Policy</Link>
                    <Link href="#" className="cursor-pointer">Cookie Settings</Link>
                </div>

            </div>
        </>
    )
}