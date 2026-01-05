import Link from "next/link"

export const Navbar = ()=>{
    return(
        <header className="flex justify-between items-center bg-gray-800 px-36">
            <nav className="bg-transparent p-4 text-white">
                <h1 className="text-2xl font-bold">My Navbar</h1>
            </nav>
            <ul className="flex">
                <Link href="/"><li className="p-2  mr-4 cursor-pointer">Home</li></Link>
                <Link href="/about"><li className="p-2  mr-4 cursor-pointer">About</li></Link>
                <Link href="/contact"><li className="p-2 mr-4 cursor-pointer">Contact</li></Link>
            </ul>
        </header>
    )
}