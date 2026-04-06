"use client";
import Image from 'next/image';
import { Sparkles, Github, Linkedin, Mail,CodeXml,Laptop,Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
export default function Home() {

  return (
    <main>

      <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">
        <section id='home' className='min-h-screen flex items-center pt-20 px-6 dark:bg-gray-900 relative overflow-hidden'>
          <div className='container mx-auto'>
            <ScrollReveal>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-full'>
                    <Sparkles className='w-4 h-4 text-teal-700' />  <span className='className="text-sm text-teal-700 dark:text-teal-300'>Available for opportunities</span></div>
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
                    <a target='_blank' className='p-4 bg-gray-100 text-black dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="https://github.com/SaadkamalShaikhdev"><Github /></a>
                    <a target='_blank' className='p-4 bg-gray-100 text-black dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="https://www.linkedin.com/in/saadkamal-shaikh-887449398/"><Linkedin /></a>
                    <a target='_blank' className='p-4 bg-gray-100 text-black dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="mailto:saadkamalshaikhdev@gmail.com"><Mail /></a>
                  </div>
                </div>

                <div className='relative max-w-xl pb-10 pl-10'>
                  <div className='relative aspect-square rounded-3xl overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-2xl'>
                    <Image src="/saad.jpeg" alt="Saad Kamal" fill={true} className='object-cover' />
                  </div>
                  <div className='absolute bottom-2 left-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700'>
                    <p className='text-4xl font-black text-teal-600 dark:text-teal-400'>1+</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>Years Experience</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        <section className='py-32 px-6 dark:bg-gray-900 transition-colors relative overflow-hidden' id='About'><div className='container mx-auto relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <ScrollReveal>
              <div className='mb-20'>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">About<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">Me</span></h2>
                <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl'>I am a passionate web developer with experience in creating modern, responsive, and user-friendly web applications.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className='grid md:grid-cols-3 mb-16 gap-6'>
                <div className='group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'><div className='w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-110 transition-transform'>
                  <CodeXml />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>Clean Code</h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>I write clean, maintainable, and efficient code that follows best practices and industry standards.</p></div>
                <div className='group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'> <div className='w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-110 transition-transform'>
                  <Laptop />
                </div><h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>Responsive Design</h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>I create responsive designs that work seamlessly across all devices and screen sizes.</p></div>
                <div className='group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'> <div className='w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-11₀ transition-transform'>
                  <Zap />
                </div><h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>Fast Performance</h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>I optimize web applications for fast loading times and smooth user experiences.</p></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className='bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-4 py-10 md:p-14 rounded-3xl border border-gray-200 dark:border-gray-700'>
                <div className='flex md:justify-between flex-col md:flex-row gap-4'>
                  <div>

                  <h3 className='text-3xl font-black text-gray-900 dark:text-white mb-4'>
                    My Journey
                  </h3>
                  <div className='w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full'></div>
                  </div>
                  <div className='md:col-span-3 space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed md:max-w-2/3 lg:max-w1/2'>
                    <p>As a passionate full-stack developer, I transform ideas into reality through elegant code and intuitive design. My journey has been driven by curiosity and a desire to create meaningful digital experiences.</p>
                    <p>Through hands-on project development, I've focused on modern web technologies and best practices. Each project is an opportunity to learn and push boundaries—from e-commerce platforms to real-time collaboration tools.</p>
                    <p>I'm constantly learning and refining my craft. My portfolio showcases my ability to build full-stack applications from concept to deployment, and I'm excited to bring these skills to impactful projects and collaborative teams.</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
        </section>
        <section className='py-32 px-6 dark:bg-gray-900 transition-colors relative overflow-hidden' id='Skill'>
          <div className='container mx-auto relative z-10'>
            <div className='max-w-6xl mx-auto'>
              <ScrollReveal>
                <div className='mb-20'>
                  <h2 className='text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6'>
                    Skills &
                    <br/>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500'>Technology</span>
                  </h2>
                  <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl'>A comprehensive toolkit for building modern, scalable web applications</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8'>
                <div className='md:col-span-2 md:row-span-2 bg-black rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Framework
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-3xl'>Next.Js</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Library
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>React</h3>
                  </div>
                </div>
                 <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Language
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Typescript</h3>
                  </div>
                </div>
                 <div className='lg:col-span-2 rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Runtime
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Node.js</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Database
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>MongoDB</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Styling
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Tailwind CSS</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Architecture
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>REST APIs</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Validation
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Next-Auth</h3>
                  </div>
                </div>
                <div className='h-20'>

                </div>

                </div>
                <div className='bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>Tools & More</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Git
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Docker
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Vercel
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Postman
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      ESLint
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Express
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Figma
                    </span>
                  </div>
                </div>
                {/* Add more skill cards as needed */}
              </ScrollReveal>
            </div>
            </div>     
        </section>
        <section id="Projects"></section>
      </div>
    </main>
  );
}
