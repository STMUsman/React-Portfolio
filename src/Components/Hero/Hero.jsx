import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import myimage from '/src/assets/usman223-removebg-preview.png'

const Hero = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Trigger the entrance animation shortly after mount
        const timer = setTimeout(() => setMounted(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='w-full bg-[#F9FAFF] overflow-hidden'>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-14px); }
                }
                .hero-float {
                    animation: float 5s ease-in-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-float { animation: none; }
                }
            `}</style>

            <section className='w-full h-[90vh] md:min-h-screen flex justify-center items-center' id='hero'>
                <div className='w-[90%] md:w-[90%] lg:w-[85%] flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-5  mt-20'>

                    {/* LEFT TEXT */}
                    <div className='w-full md:w-[60%] lg:w-[60%] flex flex-col gap-7 md:gap-5 lg:gap-8 text-center md:text-left'>
                        <h1
                            className={`text-[#05100B] font-bold text-4xl  md:text-[42px] lg:text-7xl md:leading-[50px] lg:leading-[80px]
                            transition-all duration-700 ease-out
                            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        >
                            Hi, I'm Usman <br /> Full-Stack Developer
                        </h1>

                        <p
                            className={`text-[#666666] font-normal text-xl lg:text-2xl transition-all duration-700 ease-out delay-150
                            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        >
                            I build modern, scalable web applications that deliver seamless user experiences and measurable results.
                        </p>

                        <div
                            className={`flex gap-3 lg:gap-4 md:mt-4 justify-center md:justify-start transition-all duration-700 ease-out delay-300
                            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        >
                            <a href="tel:+94762788626">
                                <button className='group bg-[#5777FF] border-2 flex items-center gap-1.5 md:gap-2 border-[#5777FF]  w-40 py-3 md:w-44 lg:w-48 lg:py-4 justify-center rounded-full text-[#F5F5F5] font-semibold text-sm shadow-md transition-all duration-300 ease-out hover:bg-[#446aff] hover:border-[#446aff] hover:text-[#F5F5F5] hover:shadow-lg hover:shadow-[#5777FF]/40 hover:-translate-y-1 active:translate-y-0 active:scale-95'>
                                    <FontAwesomeIcon icon={faEnvelope} className="text-lg transition-transform duration-300 group-hover:scale-110" /> CONTACT ME
                                </button>
                            </a>

                            <button className='group bg-transparent border-2 flex items-center gap-1.5 md:gap-2 border-[#5777FF]  w-40 py-3 md:w-44 lg:w-48 lg:py-4 justify-center rounded-full text-[#05100B] font-semibold text-sm shadow-md transition-all duration-300 ease-out hover:bg-[#446aff] hover:border-[#446aff] hover:text-[#F5F5F5] hover:shadow-lg hover:shadow-[#5777FF]/40 hover:-translate-y-1 active:translate-y-0 active:scale-95'>
                                <FontAwesomeIcon icon={faDownload} className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" /> DOWNLOAD CV
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        className={`w-full md:w-[40%] lg:w-[40%] flex justify-center md:justify-end mt-10 md:mt-0
                        transition-all duration-700 ease-out delay-200
                        ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                        <div className="hero-float rounded-br-[999px] rounded-bl-[999px] rounded-tr-none rounded-tl-[999px] p-[8px] bg-gradient-to-b from-[#5777FF] to-white w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 shadow-xl shadow-[#5777FF]/20 transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#5777FF]/30">
                            <div className="rounded-br-[999px] rounded-bl-[999px] rounded-tr-none rounded-tl-[999px] overflow-hidden w-full h-full bg-white flex justify-center items-center">
                                <img className="w-full h-full object-contain mt-4 " src={myimage} alt="Usman" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero