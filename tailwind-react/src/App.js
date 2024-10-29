import './App.css';

function App() {
  return (
    <>
      <nav class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 shadow-dark-mild dark:bg-gray-700 sm:py-1 md:py-2 lg:py-4">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div class="ms-2">
            <a class="text-2xl text-black font-bold dark:text-white pl-4 ">Kitchen</a>
          </div>
          <div class="flex space-x-4 ms-2">
            <a class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-xl hover:bg-blue-400 hover:underline  active:bg-blue-500 " href="#" >Menu</a>
            <a class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-xl" href="#">About</a>
            <a class="text-2xl font-semibold text-black dark:text-white px-4 py-2 rounded-xl" href="#">Contact</a> 
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
