import Link from "next/link"
import Image from "next/image"
import DevSDKLogo from "@/assets/Developer SDK Logo.png"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2
    font-bold px-10 py-5">
        <div>
            <Link href="/" className="flex items-center gap-2">
                <Image
                className="rounded-full"
                src={DevSDKLogo} 
                alt="Developer SDK Logo" 
                width={50} 
                height={50} />
            <h1>Dev SDK</h1>
            </Link>
        </div>
        <div>
        <button className="bg-black text-sm md:text-base hover:bg-yellow-500 hover:text-black text-white font-bold py-2 px-4 rounded-full">
            <Link href="https://devsdk.substack.com/">Sign up for free newsletter</Link>
        </button>
        </div>
    </header>
  )
}

export default Header