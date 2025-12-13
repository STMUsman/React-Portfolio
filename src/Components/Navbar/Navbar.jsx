import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
  }


  return (

    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#a9b9ff] to-[#F9FAFF] ">

      <div className="mx-auto w-11/12 px-2 sm:px-6 lg:px-0">
        <div className="relative w-full flex h-24 items-center">
          <div className="flex flex-1 justify-start">
            <div className='w-auto h-auto '>
              <h1 className='text-[#05100B] font-bold text-2xl'>&lt;/&gt; | usmandev</h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-white ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
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
                    className={`px-3 py-2 text-lg font-semibold rounded-md transition
                    ${active === item.href
                        ? 'text-[#5777FF] font-bold'
                        : 'text-[#05100B] hover:text-[#05100B]'
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
                  <MenuButton className="bg-[#5777FF] border-2 flex items-center gap-2 border-[#5777FF] px-6 py-3.5 rounded-full text-[#F5F5F5] font-medium text-base shadow-md hover:bg-[#446AFF] hover:border-[#446AFF]  hover:text-[#222222] transition duration-300">
                    Let's Talk  <FontAwesomeIcon icon={faPhone} className=" text-lg " />
                  </MenuButton>
                </a>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel
        static
        className="sm:hidden fixed top-0 left-0 z-40 h-full w-2/3 max-w-xs transform bg-gray-800 p-4 shadow-md transition-transform duration-300 ease-in-out data-[headlessui-state=open]:translate-x-0 -translate-x-full"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <DisclosureButton className="text-white hover:text-gray-400">
            <XMarkIcon className="h-6 w-6" />
          </DisclosureButton>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              // className={classNames(
              //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              //   'block rounded-md px-3 py-2 text-base font-semibold',
              // )}
              className={`block rounded-md px-3 py-2 text-base font-semibold transition
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
      </DisclosurePanel>

    </Disclosure>
  )
}
