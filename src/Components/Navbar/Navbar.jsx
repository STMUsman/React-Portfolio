import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Home', href: '#hero', current: true },
  { name: 'About', href: '#about', current: false },
  // { name: 'Service', href: '#service', current: false },
  { name: 'Project', href: '#project', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

export default function Example() {

  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position to switch the navbar into its "compact" state
      setScrolled(window.scrollY > 24)

      navigation.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.href)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
  }

  return (

    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#a9b9ff] to-[#F9FAFF] transition-all duration-500 ease-out
      ${scrolled ? 'shadow-lg shadow-[#5777FF]/10 backdrop-blur-sm' : 'shadow-none'}`}
    >

      <div className="mx-auto w-11/12 px-2 sm:px-6 lg:px-0">
        <div
          className={`relative w-full flex items-center transition-all duration-500 ease-out ${scrolled ? 'h-20' : 'h-24'
            }`}
        >
          <div className="flex flex-1 justify-start">
            <div className="w-auto h-auto group cursor-default">
              <h1 className="text-[#05100B] font-bold text-2xl transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                <span className="text-[#5777FF]">&lt;/&gt;</span> | Usman
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-black transition-transform duration-200 active:scale-90">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" strokeWidth={2} className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" strokeWidth={2} className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`relative px-3 py-2 text-lg font-semibold rounded-md transition-colors duration-300
                    after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px]
                    after:bg-[#5777FF] after:origin-left after:transition-transform after:duration-300 after:ease-out
                    ${active === item.href
                        ? 'text-[#5777FF] font-bold after:scale-x-100'
                        : 'text-[#05100B] hover:text-[#5777FF] after:scale-x-0 hover:after:scale-x-100'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-center pr-2 sm:pr-0 ">
            <Menu as="div" className="relative ml-3">
              <div>
                <a href="tel:+94762788626">
                  <MenuButton
                    className="group bg-[#5777FF] border-2 flex items-center gap-2 border-[#5777FF] px-6 py-3.5 rounded-full
                    text-[#F5F5F5] font-semibold text-base shadow-md transition-all duration-300 ease-out
                    hover:bg-[#446AFF] hover:border-[#446AFF] hover:text-[#222222] hover:shadow-lg hover:shadow-[#5777FF]/40
                    hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                  >
                    Let's Talk
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-lg transition-transform duration-300 group-hover:rotate-12"
                    />
                  </MenuButton>
                </a>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for the mobile drawer */}
      <DisclosurePanel static className="sm:hidden">
        {({ open }) => (
          <>
            <div
              aria-hidden="true"
              onClick={() => document.activeElement?.blur()}
              className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ease-out
              ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />
            <div
              className={`fixed top-0 left-0 z-40 h-full w-2/3 max-w-xs transform bg-gray-800 p-4 shadow-md
              transition-transform duration-300 ease-in-out
              ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <DisclosureButton className="text-white transition-colors duration-200 hover:text-gray-400">
                  <XMarkIcon className="h-6 w-6" />
                </DisclosureButton>
              </div>

              {/* Navigation Links */}
              <div className="mt-4 space-y-1">
                {navigation.map((item, index) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    style={{ transitionDelay: open ? `${index * 60}ms` : '0ms' }}
                    className={`block rounded-md px-3 py-2 text-base font-semibold transition-all duration-300 ease-out
                    ${open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                    ${active === item.href
                        ? 'bg-[#5777FF] text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    onClick={() => setActive(item.href)}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </>
        )}
      </DisclosurePanel>

    </Disclosure>
  )
}