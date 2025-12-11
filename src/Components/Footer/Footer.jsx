import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <div className='w-full h-auto py-10 flex flex-col gap-8 my-gradient-box'>
      <div className='w-full h-auto flex justify-center'><h1 className='text-[#05100B] font-bold text-3xl'>&lt;/&gt; | usmandev</h1></div>
      <div className='w-full h-auto flex gap-4 justify-center'>

        <a
          href="https://www.linkedin.com/in/stm-usman"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='text-3xl  text-[#5777FF] hover:text-[#446AFF]' /> </a>
        <a
          href="https://github.com/STMUsman"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='text-3xl  text-[#5777FF] hover:text-[#446AFF]' /> </a>
        <a
          href="https://x.com/StmUsman"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className='text-3xl  text-[#5777FF] hover:text-[#446AFF]' /> </a>
        <a
          href="https://wa.me/94762788626"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className='text-3xl  text-[#5777FF] hover:text-[#446AFF]' /> </a>
        {/* <a
          href="http://Instagram.com/stm_usman"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='text-3xl  text-[#5777FF] hover:text-[#446AFF]' /> </a> */}
        {/* <a
          href="https://www.facebook.com/share/1FjQuLMKbn/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className='text-3xl  text-[#5777FF] hover:text-[#446AFF]' /> </a> */}
      </div>
      <div className='w-full h-auto flex justify-center text-[#05100B] font-normal text-base'>© 2025 UsmanDev. All rights reserved.</div>
    </div>
  )
}

export default Footer
