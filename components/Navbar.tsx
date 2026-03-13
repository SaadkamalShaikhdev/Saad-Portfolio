"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Moon , Sun, Menu,X} from 'lucide-react'
import { useTheme } from 'next-themes';


const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
   <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors'>
    <nav className='max-w-7xl mx-auto flex justify-between px-6 py-4 '>
<Link
  href="/"
  className="text-2xl font-black flex items-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
>
  SK
</Link>

       <ul className='flex gap-10 items-center list-none'>
    <li className='hidden md:block'>
        <a className='text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium' href="#About">About</a>
    </li>
    <li className='hidden md:block'>
        <a className='text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium' href="#Skill">Skills</a>
    </li>
    <li className='hidden md:block'>
        <a className='text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium' href="#Projects">Projects</a>
    </li>
    <li>
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 cursor-pointer dark:hover:text-teal-400 transition-all duration-300'
        >
            {theme === 'dark' ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-black" />}
        </button>
    </li>
    <button className='block md:hidden text-gray-700 dark:text-gray-300 p-2' onClick={()=>setShowSidebar(!showSidebar)}>
        {showSidebar ? <X className="w-6 h-6 text-black dark:text-white" /> : <Menu className="w-6 h-6 text-black dark:text-white" />}
    </button>
    <li className='hidden md:block'>
        <a className='px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg' href="#Contact">Contact</a>
    </li>
</ul>
    </nav>
    <div className={showSidebar ? 'md:hidden mt-6 py-6 border-t border-gray-200 dark:border-gray-800' : 'hidden'}>
        <div className='flex flex-col gap-4 mx-6'>
    <Link href="#About" className='text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium py-2' onClick={()=>setShowSidebar(false)}>About</Link>
      <Link href="#Skill" className='text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium py-2' onClick={()=>setShowSidebar(false)}>Skills</Link>
      <Link href="#Projects" className='text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium py-2' onClick={()=>setShowSidebar(false)}>Projects</Link>
      <Link href="#Contact" className='px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg text-center' onClick={()=>setShowSidebar(false)}>Contact</Link>
        </div>
    </div>
   </header>
  )
}

export default Navbar
