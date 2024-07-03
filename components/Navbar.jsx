// components/Navbar.jsx
import Link from "next/link";

export default function Navbar({ title }) {

    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-[#ff5722] dark:bg-[#ff5722] shadow-md">
            <Link href={'/'}>
            <div className="text-2xl mx-20 font-semibold text-white dark:text-white">
                {title}
            </div>
            </Link>
        </nav>
    );
}
