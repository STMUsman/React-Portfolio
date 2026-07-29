import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const socials = [
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/stm-usman', label: 'LinkedIn' },
  { icon: faGithub, href: 'https://github.com/STMUsman', label: 'GitHub' },
  { icon: faFacebook, href: 'https://www.facebook.com/share/1FjQuLMKbn/', label: 'Facebook' },
  { icon: faWhatsapp, href: 'https://wa.me/94762788626', label: 'WhatsApp' },
]

const Footer = () => {
  const [visible, setVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const node = footerRef.current
    if (!node) return

    // Reveal the footer the first time it scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={footerRef}
      className='w-full min-h-[30vh] py-12 flex flex-col gap-8 my-gradient-box'
    >
      <div
        className={`w-full h-auto flex justify-center transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <h1 className='text-[#05100B] font-bold text-3xl transition-transform duration-300 hover:-translate-y-0.5'>
          &lt;/&gt; | UsmanDev
        </h1>
      </div>

      <div className='w-full h-auto flex gap-4 justify-center'>
        {socials.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            style={{ transitionDelay: visible ? `${index * 80}ms` : '0ms' }}
            className={`transition-all duration-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <FontAwesomeIcon
              icon={social.icon}
              className='text-3xl text-[#5777FF] transition-all duration-300 ease-out hover:text-[#446AFF] hover:-translate-y-1.5 hover:scale-110 hover:drop-shadow-[0_4px_6px_rgba(87,119,255,0.4)]'
            />
          </a>
        ))}
      </div>

      <div
        className={`w-full h-auto flex justify-center text-[#05100B] font-medium text-base transition-all duration-700 ease-out delay-200
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        © 2025{' '}
        <a
          className="pl-1 pr-1 relative transition-colors duration-300 hover:text-blue-600
          after:content-[''] after:absolute after:left-1 after:right-1 after:-bottom-0.5 after:h-[1px]
          after:bg-blue-600 after:origin-left after:scale-x-0 after:transition-transform after:duration-300
          hover:after:scale-x-100"
          href="https://mohamed-usman.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UsmanDev.
        </a>{' '}
        All rights reserved.
      </div>
    </div>
  )
}

export default Footer