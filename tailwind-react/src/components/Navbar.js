import { Link } from 'react-router-dom';
export default function Navbar(){
const scrollTop=()=>{
     window.scroll(0,0)
}

    return (
    <nav class="fixed flex w-full flex-wrap from-violet-800 to-gray-200 bg-gradient-to-b opacity-90 sm:py-1 md:py-2 lg:py-4">
            <div class="flex flex-wrap w-full items-center justify-between px-3">
                <div class="ms-2">
                    <a class="text-2xl text-black font-bold dark:text-white pl-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" href="/">Kitchen</a>
                </div>
                <div class="flex space-x-4 ms-2">
                    <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-lg  hover:underline  focus:underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"  to="/" onClick={scrollTop}>Home</Link>
                    <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full  hover:underline  focus:underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"  to="/about" onClick={scrollTop}>About</Link>
                    <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full  hover:underline  focus:underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" to="/menu" onClick={scrollTop}>Menu</Link>
                    <Link class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-full  hover:underline  focus:underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" to="/contact" onClick={scrollTop}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}