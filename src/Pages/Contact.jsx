import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapPin, faPhone, faSpinner, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: faPhone,
        label: 'Phone',
        value: '+94 76 27 88 626',
        href: 'https://wa.me/94762788626',
    },
    {
        icon: faEnvelope,
        label: 'Email',
        value: 'stmusman2000@gmail.com',
        href: 'mailto:stmusman2000@gmail.com',
    },
    {
        icon: faMapPin,
        label: 'Address',
        value: 'Kurunegala, Sri Lanka',
        href: 'https://www.google.com/maps/place//@7.4595908,80.372983,18.58z?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D',
    },
]

const Contact = () => {
    const formRef = useRef();
    const sectionRef = useRef();
    const [visible, setVisible] = useState(false);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    useEffect(() => {
        const node = sectionRef.current
        if (!node) return

        // Reveal the section the first time it scrolls into view
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

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        emailjs
            .sendForm(
                "service_85ktmz5",
                "template_rblqtm6",
                formRef.current,
                "rCxY2jJzz9pgdFa48"
            )
            .then(
                () => {
                    setSending(false);
                    setStatus('success');
                    formRef.current?.reset();
                    setTimeout(() => setStatus(null), 4000);
                },
                () => {
                    setSending(false);
                    setStatus('error');
                    setTimeout(() => setStatus(null), 4000);
                }
            );
    };

    return (
        <>
            <div className='w-full min-h-screen flex justify-center items-center bg-[#F9FAFF]'>

                <section
                    ref={sectionRef}
                    className='w-full py-8 md:py-12 lg:py-16 flex justify-center contactbg scroll-mt-24'
                    id='contact'
                >
                    <div className='w-[90%] md:w-[90%] lg:w-[85%] h-screen flex flex-col md:flex-row gap-10 md:gap-5  items-center justify-start  bg-transparent'>
                        <div
                            className={`flex flex-col gap-1 w-full md:w-1/2 transition-all duration-700 ease-out
                            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        >
                            <h1 className='section-sub-heading'>Get In Touch</h1>
                            <p className='section-main-heading section-main-heading-contect'>Let's Build Together!</p>

                            <div className='flex flex-col gap-6 mt-6'>
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ transitionDelay: visible ? `${150 + index * 100}ms` : '0ms' }}
                                        className={`group flex gap-5 items-center w-fit transition-all duration-500 ease-out
                                        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                    >
                                        <span
                                            className="bg-[#5777FF] w-[60px] h-[60px] rounded-full inline-flex items-center justify-center
                                            shrink-0 transition-all duration-300 ease-out
                                            group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#5777FF]/40 group-hover:rotate-6"
                                        >
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="text-2xl text-white transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </span>
                                        <div className="flex flex-col leading-tight">
                                            <span className="font-semibold text-base">{item.label}</span>
                                            <span className="text-color text-lg relative w-fit">
                                                {item.value}
                                                <span
                                                    className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-[#5777FF] origin-left scale-x-0
                                                    transition-transform duration-300 ease-out group-hover:scale-x-100"
                                                />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                        </div>
                        <div
                            className={`w-full md:w-1/2 px-5 py-8  md:px-7 md:py-10 lg:px-14 lg:py-16  bg-[#FFFFFF] rounded-xl
                            transition-all duration-700 ease-out delay-150 shadow-sm hover:shadow-xl hover:shadow-[#5777FF]/10
                            ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
                        >
                            <div>
                                <form ref={formRef} action="" onSubmit={sendEmail} className='flex flex-col md:gap-4 lg:gap-7 gap-3'>
                                    <div className='flex gap-3 md:gap-4 lg:gap-7 justify-between'>
                                        <input
                                            name='fullname'
                                            type="text"
                                            required
                                            placeholder='Full Name'
                                            className='border-2 bg-[#F9FAFF] w-full h-14 md:h-16 rounded-md p-3 md:p-5 border-[#ECEDF2] transition-all duration-300 outline-none focus:border-[#5777FF] focus:bg-white focus:shadow-md focus:shadow-[#5777FF]/10'
                                        />
                                        <input
                                            name='email'
                                            type="text"
                                            required
                                            placeholder='Email Address'
                                            className='border-2 bg-[#F9FAFF] w-full h-14 md:h-16 rounded-md p-3 md:p-5 border-[#ECEDF2] transition-all duration-300 outline-none focus:border-[#5777FF] focus:bg-white focus:shadow-md focus:shadow-[#5777FF]/10'
                                        />
                                    </div>
                                    <div className='flex gap-3 md:gap-4 lg:gap-7 justify-between'>
                                        <input
                                            name='phone'
                                            type="text"
                                            required
                                            placeholder='Phone Number'
                                            className='border-2 bg-[#F9FAFF] w-full h-14 md:h-16 rounded-md p-3 md:p-5 border-[#ECEDF2] transition-all duration-300 outline-none focus:border-[#5777FF] focus:bg-white focus:shadow-md focus:shadow-[#5777FF]/10'
                                        />
                                        <select
                                            name="service"
                                            required
                                            className="border-2 text-[#9CA3AF] bg-[#F9FAFF] w-full h-14 md:h-16 rounded-md px-3 md:px-5 border-[#ECEDF2] transition-all duration-300 outline-none focus:border-[#5777FF] focus:bg-white focus:shadow-md focus:shadow-[#5777FF]/10"
                                        >
                                            <option value="">Choose Service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="app-development">App Development</option>
                                        </select>

                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            id=""
                                            required
                                            placeholder='Write Your Message'
                                            className='border-2 bg-[#F9FAFF] w-full h-24 md:h-40 rounded-md p-3 md:p-5 border-[#ECEDF2] transition-all duration-300 outline-none focus:border-[#5777FF] focus:bg-white focus:shadow-md focus:shadow-[#5777FF]/10'
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            type="submit"
                                            disabled={sending}
                                            className='bg-[#5777FF] px-8 py-4 rounded-full text-[#F5F5F5] text-lg font-medium duration-300 flex items-center gap-3
                                            hover:bg-[#446AFF] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5777FF]/40
                                            active:translate-y-0 active:scale-95
                                            disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0'
                                        >
                                            {sending ? (
                                                <>
                                                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-base" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <FontAwesomeIcon icon={faPaperPlane} className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </button>

                                        <span
                                            className={`text-sm font-medium transition-all duration-300 ease-out
                                            ${status ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}
                                            ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}
                                        >
                                            {status === 'success' && 'Message sent successfully!'}
                                            {status === 'error' && 'Failed to send. Please try again.'}
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact