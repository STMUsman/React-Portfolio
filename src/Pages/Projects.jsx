import React from 'react'

const Projects = () => {
    return (
        <div className='w-full  min-h-screen bg-[#F9FAFF] flex justify-center items-center '>
            <section className='w-full h-auto flex justify-center py-8 md:py-12 lg:py-16' id='project'>
                <div className='w-[90%] md:w-[90%] lg:w-[85%] h-auto flex flex-col justify-center items-center gap-2 bg-transparent '>

                    <h1 className='section-sub-heading'>My Work</h1>
                    <h1 className='section-main-heading'>Featured Projects</h1>

                    {/* Paragraph */}
                    <p className='text-[#666666] font-medium text-xl md:text-xl md:px-32 text-center leading-relaxed mt-3'>
                        A selection of full-stack applications and web solutions I have designed, developed, and deployed.
                    </p>

                    <div className='w-full h-auto gap-12 flex flex-col mt-8 md:mt-14'>
                        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-5 lg:gap-10 ">
                            <div className="rounded-lg min-w-72 min-h-52 md:min-w-80 md:min-h-52 lg:min-w-96 lg:min-h-60 my-gradient-box flex justify-center items-center text-xl font-semibold">
                                E-Commerce MERN Store
                            </div>

                            <div className="rounded-lg min-w-72 min-h-52 md:min-w-80 md:min-h-52 lg:min-w-96 lg:min-h-60 my-gradient-box flex justify-center items-center text-xl font-semibold">
                                Task Management Dashboard
                            </div>

                            <div className="rounded-lg min-w-72 min-h-52 md:min-w-80 md:min-h-52 lg:min-w-96 lg:min-h-60 my-gradient-box flex justify-center items-center text-xl font-semibold">
                                Real-Time Chat Application
                            </div>
                        </div>



                    </div>
                </div>
            </section >
        </div >
    )
}

export default Projects
