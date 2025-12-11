import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_85ktmz5",
                "template_rblqtm6",
                formRef.current,
                "rCxY2jJzz9pgdFa48"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                },
                () => {
                    alert("Failed to send message. Try again!");
                }
            );
    };

    return (
        <>
            <div className='w-full min-h-screen flex justify-center items-center bg-[#F9FAFF]'>

                <section className='w-full py-8 md:py-12 lg:py-16 flex justify-center contactbg' id='contact'>
                    <div className='w-[90%] md:w-[90%] lg:w-[85%] h-screen flex flex-col md:flex-row gap-10 md:gap-5  items-center justify-start  bg-transparent'>
                        <div className='flex flex-col gap-1 w-full md:w-1/2'>
                            <h1 className='section-sub-heading'>Get In Touch</h1>
                            <p className='section-main-heading'>Let’s Build Together!</p>

                            <div className='flex flex-col gap-6 mt-6'>

                                <div className='flex gap-5'>
                                    <span className=" bg-[#5777FF]  w-[60px] h-[60px] rounded-full inline-flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="text-2xl text-white"
                                        />
                                    </span>
                                    <div className="flex flex-col leading-tight">
                                        <span className="font-semibold text-base">Phone</span>
                                        <a
                                            className="text-color"
                                            href="https://wa.me/94762788626"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ><span className="text-lg">+94 76 27 88 626</span></a>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <span className=" bg-[#5777FF]  w-[60px] h-[60px] rounded-full inline-flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="text-2xl text-white"
                                        />
                                    </span>
                                    <div className="flex flex-col leading-tight">
                                        <span className="font-semibold text-base">Email</span>
                                        <a
                                            className="text-color"
                                            href="mailto:stmusman2000@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ><span className="text-lg">stmusman2000@gmail.com</span></a>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <span className=" bg-[#5777FF]  w-[60px] h-[60px] rounded-full inline-flex items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={faMapPin}
                                            className="text-2xl text-white"
                                        />
                                    </span>
                                    <div className="flex flex-col leading-tight">
                                        <span className="font-semibold text-base">Address</span>
                                        <a
                                            className="text-color"
                                            href="https://www.google.com/maps/place//@7.4595908,80.372983,18.58z?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ><span className="text-lg">Kurunegala, Sri Lanka</span></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='w-full md:w-1/2 px-5 py-8  md:px-7 md:py-10 lg:px-14 lg:py-16  bg-[#FFFFFF] rounded-xl'>
                            <div>
                                <form ref={formRef} action="" onSubmit={sendEmail} className='flex flex-col md:gap-4 lg:gap-7 gap-3'>
                                    <div className='flex gap-3 md:gap-4 lg:gap-7 justify-between'>
                                        <input name='fullname' type="text" required placeholder='Full Name' className='border-2 bg-[#F9FAFF] w-full h-16 rounded-md p-5 border-[#ECEDF2]' />
                                        <input name='email' type="text" required placeholder='Email Address' className='border-2 bg-[#F9FAFF] w-full h-16 rounded-md p-5 border-[#ECEDF2]' />
                                    </div>
                                    <div className='flex gap-3 md:gap-4 lg:gap-7 justify-between'>
                                        <input name='phone' type="text" required placeholder='Phone Number' className='border-2 bg-[#F9FAFF] w-full h-16 rounded-md p-5 border-[#ECEDF2]' />
                                        <select
                                            name="service"
                                            required
                                            className="border-2 text-[#9CA3AF] bg-[#F9FAFF] w-full h-16 rounded-md px-5 border-[#ECEDF2] "
                                        >
                                            <option value="">Choose Service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="app-development">App Development</option>
                                        </select>

                                    </div>
                                    <div>
                                        <textarea name="message" id="" required placeholder='Write Your Message' className='border-2 bg-[#F9FAFF] w-full h-40 rounded-md p-5 border-[#ECEDF2]'></textarea>
                                    </div>
                                    <div><input type="submit" value="Send Message" className='bg-[#5777FF] px-8 py-4 rounded-full text-[#F5F5F5] text-lg font-medium hover:bg-[#446AFF] duration-500' /></div>
                                </form>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact
