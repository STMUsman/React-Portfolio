import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const projects = [
    { name: 'Canangifts Trading Website', href: 'https://canangifts.com/' },
    { name: 'Akollections E-Commerce Website', href: 'https://akollections.com/' },
    { name: 'Life Lanka Travels Website', href: 'https://lifelankatravels.com/' },
    { name: 'Tools Lanka E-Commerce Website', href: 'https://toolslanka.lk/' },
    { name: 'Shaggy Removal Service Website', href: 'http://mytestsite.42web.io/' },
    { name: 'Galaxy Store E-Commerce Platform', href: '#' },
]

const Projects = () => {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const node = sectionRef.current
        if (!node) return

        // Reveal the cards the first time the section scrolls into view
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
        <div className='w-full  min-h-screen bg-[#F9FAFF] flex justify-center items-center '>
            <section
                ref={sectionRef}
                className='w-full h-auto flex justify-center py-8 md:py-12 lg:py-16 scroll-mt-24'
                id='project'
            >
                <div className='w-[90%] md:w-[90%] lg:w-[85%] h-auto flex flex-col justify-center items-center gap-2 bg-transparent '>

                    <h1
                        className={`section-sub-heading transition-all duration-700 ease-out
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        My Work
                    </h1>
                    <h1
                        className={`section-main-heading transition-all duration-700 ease-out delay-100
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Featured Projects
                    </h1>

                    {/* Paragraph */}
                    <p
                        className={`text-[#666666] font-medium text-xl md:text-xl md:px-32 text-center leading-relaxed mt-3
                        transition-all duration-700 ease-out delay-200
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        A selection of full-stack applications and web solutions I have designed, developed, and deployed.
                    </p>

                    <div className='w-full h-auto gap-12 flex flex-col mt-8 md:mt-14'>
                        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-5 lg:gap-10 ">
                            {projects.map((project, index) => (
                                <a
                                    key={project.name}
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ transitionDelay: visible ? `${150 + index * 90}ms` : '0ms' }}
                                    className={`group relative overflow-hidden rounded-lg min-w-72 min-h-52 md:min-w-80 md:min-h-52 lg:min-w-96 lg:min-h-60
                                    my-gradient-box flex flex-col justify-center items-center gap-3 text-xl font-semibold text-center
                                    p-4 cursor-pointer transition-all duration-500 ease-out
                                    hover:-translate-y-2 hover:shadow-xl hover:shadow-[#5777FF]/20
                                    ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
                                >
                                    <span className="transition-colors duration-300 group-hover:text-[#5777FF]">
                                        {project.name}
                                    </span>

                                    <span
                                        className="flex items-center gap-2 text-sm font-medium text-[#5777FF] opacity-0 -translate-y-1
                                        transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                                    >
                                        Visit live site
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                            className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </span>

                                    {/* Subtle sheen sweep on hover */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r
                                        from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out
                                        group-hover:translate-x-full"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Projects