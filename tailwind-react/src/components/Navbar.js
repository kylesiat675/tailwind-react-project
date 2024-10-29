import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
    <>
        <nav class="relative flex w-full flex-wrap items-center justify-between shadow-dark-mild dark:bg-violet-800 sm:py-1 md:py-2 lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div class="ms-2">
                <a class="text-2xl text-black font-bold dark:text-white pl-4" href="/">Kitchen</a>
            </div>
            <div class="flex space-x-4 ms-2">
                <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full active:bg-blue-400 hover:underline  focus:bg-blue-500"  to="/" >Home</Link>
                <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full active:bg-blue-400 hover:underline  focus:bg-blue-500"  to="/about" >About</Link>
                <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full active:bg-blue-400 hover:underline  focus:bg-blue-500" to="/menu">Menu</Link>
                <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full active:bg-blue-400 hover:underline  focus:bg-blue-500" to="/contact">Contact</Link>
            </div>
            </div>
        </nav>
    </>
    );
}