import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css/navigation";

import reactjs from '../assets/icons8-react-native-480.png'
import nodejs from '../assets/icons8-nodejs-480.png';
import expressjs from '../assets/icons8-express-js-480.png';
import mongodb from '../assets/icons8-mongodb-480.png';
import figma from '../assets/icons8-figma-480.png';
import php from '../assets/icons8-php-logo-480.png';
import javascript from '../assets/icons8-javascript-480.png';
import mysql from '../assets/icons8-mysql-logo-480.png';
import wordpress from '../assets/icons8-wordpress-480.png';
import shopify from '../assets/icons8-shopify-480.png';
import tailwind from '../assets/icons8-tailwind-css-480.png';

const skills = [
    { img: reactjs, title: "React.js", sub: "" },
    { img: nodejs, title: "Node.js", sub: "" },
    { img: expressjs, title: "Express.js", sub: "" },
    { img: mongodb, title: "MongoDB", sub: "" },
    { img: javascript, title: "JavaScript", sub: "" },
    { img: tailwind, title: "Tailwind CSS", sub: "" },
    { img: wordpress, title: "WordPress", sub: "" },
    { img: shopify, title: "Shopify", sub: "" },
    { img: mysql, title: "MySQL", sub: "" },
    { img: php, title: "PHP", sub: "" },
    { img: figma, title: "Figma", sub: "" }
]

const About = () => {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const node = sectionRef.current
        if (!node) return

        // Reveal the heading block the first time the section scrolls into view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <div className='w-full min-h-screen flex justify-center items-center  bg-[#F9FAFF]'>
            <section ref={sectionRef} className='w-full py-8 md:py-12 lg:py-16 flex justify-center scroll-mt-24' id='about'>
                <div className='w-[90%] md:w-[90%] lg:w-[85%] flex flex-col justify-center items-center  bg-[#ffffff] rounded-3xl gap-2 py-14 px-6 md:px-0 md:py-14 lg:py-20 '>

                    {/* Headings */}
                    <h1
                        className={`section-sub-heading transition-all duration-700 ease-out
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        About Me
                    </h1>
                    <h1
                        className={`section-main-heading transition-all duration-700 ease-out delay-100
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        My Development Skills
                    </h1>

                    {/* Paragraph */}
                    <p
                        className={`text-[#666666] font-medium text-xl md:text-xl md:px-32 text-center leading-relaxed mt-3
                        transition-all duration-700 ease-out delay-200
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Hello there, I'm Usman — a full-stack developer passionate about crafting modern,
                        high-performance digital experiences. I specialize in building scalable web applications
                        with clean architecture, intuitive interfaces, and seamless functionality.
                    </p>

                    {/* Slider */}
                    <div
                        className={`w-full px-3 md:px-10 mt-8 md:mt-14 transition-all duration-700 ease-out delay-300
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    >
                        <style>{`
                            .skill-swiper .swiper-button-next,
                            .skill-swiper .swiper-button-prev {
                                color: #5777FF;
                                transition: transform 0.25s ease, opacity 0.25s ease;
                            }
                            .skill-swiper .swiper-button-next:hover,
                            .skill-swiper .swiper-button-prev:hover {
                                transform: scale(1.15);
                            }
                        `}</style>
                        <Swiper
                            className="skill-swiper"
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={40}
                            slidesPerView={3}
                            pagination={false}
                            autoplay={{ delay: 2000 }}
                            navigation={true}
                            loop={true}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                636: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >

                            {skills.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="group p-6 bg-[#f9faff] rounded-2xl text-center flex flex-col items-center transition-all duration-300 ease-out hover:bg-white hover:shadow-xl hover:shadow-[#5777FF]/15 hover:-translate-y-2">
                                        <img
                                            className='w-32 md:w-36 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3'
                                            src={item.img}
                                            alt={item.title}
                                        />
                                        <h2 className="text-xl font-semibold text-[#05100B] transition-colors duration-300 group-hover:text-[#5777FF]">
                                            {item.title}
                                        </h2>
                                        <p className="text-[#666] mt-2 text-sm">{item.sub}</p>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>

                </div>
            </section >
        </div >
    )
}

export default About