"use client";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Sparkles,Github, Linkedin, Mail, } from 'lucide-react';
export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main>

      <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">
        <section id='home' className='min-h-screen flex items-center pt-20 px-6 dark:bg-gray-900 relative overflow-hidden'>
          <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-6'>
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-full'>
                  <Sparkles className='w-4 h-4 text-teal-700' />  <span className='class="text-sm text-teal-700 dark:text-teal-300"'>Available for opportunities</span></div>
                <div className='space-y-2'>
                  <h1 className='text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-none'>Saad <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500'>kamal</span>
                  </h1>                <p className='text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium'>Full Stack Developer</p>
                </div>
                <p className='text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed'>Building modern web applications with Next.js. I create scalable, performant solutions with beautiful interfaces and clean architecture.</p>
                <div className='flex flex-wrap gap-4'>
                  <button className='group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg'>
                    <span className="font-semibold">View My Work</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span></button>
                  <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-400 transition-all duration-300 font-semibold">Get In Touch</button>
                </div>
                  <div className='flex gap-3 pt-2'>
                    <a target='_blank'  className='p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="https://github.com/SaadkamalShaikhdev"><Github /></a>
                    <a target='_blank' className='p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="https://www.linkedin.com/in/saadkamal-shaikh-887449398/"><Linkedin /></a>
                     <a target='_blank' className='p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="mailto:saadkamalshaikhdev@gmail.com"><Mail /></a> 
                  </div>
                </div>

              <div className='relative max-w-xl pb-10 pl-10'>
                <div className='relative aspect-square rounded-3xl overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-2xl'>
                  <Image src="/saad.jpeg" alt="Saad Kamal" fill className='object-cover' />
                </div>
                <div className='absolute bottom-2 left-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700'>
                  <p className='text-4xl font-black text-teal-600 dark:text-teal-400'>1+</p>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='h-screen p-10' id='About'>About
          <div>wc</div>
        </section>
        <section className='h-screen p-10' id='Skill'>Skills
          <div>wc</div>
        </section>
      </div>
    </main>
  );
}