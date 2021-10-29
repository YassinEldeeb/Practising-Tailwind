import { FC, useEffect, useState } from 'react'
import { Link } from './Link'
import _ from 'underscore'
import Scrollspy from 'react-scrollspy'

export const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [addBorder, setAddBorder] = useState(false)

  const OpenDrawerHandler = () => {
    setOpenDrawer(!openDrawer)
  }

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [openDrawer])

  useEffect(() => {
    let scopedAddBorder = false

    window.onscroll = _.throttle((e: Event) => {
      const offsetY = window.scrollY
      if (offsetY > 40 && !scopedAddBorder) {
        setAddBorder(true)
        scopedAddBorder = true
      } else if (offsetY <= 40 && scopedAddBorder) {
        setAddBorder(false)
        scopedAddBorder = false
      }
    }, 150)
  }, [])

  const NavLinks = () => {
    return (
      <Scrollspy
        className='flex-col lg:flex-row flex'
        items={['about', 'services', 'testimonials', 'articles']}
        currentClassName='activeLink'
      >
        <li className='mb-8 ml-10 lg:mb-0 '>
          <Link href='/#about' text='About' />
        </li>
        <li className='mb-8 ml-10 lg:mb-0 '>
          <Link href='/#services' text='Services' />
        </li>
        <li className='mb-8 ml-10 lg:mb-0 '>
          <Link href='/#testimonials' text='Testimonials' />
        </li>
        <li className='mb-8 ml-10 lg:mb-0 '>
          <Link href='/#articles' text='Articles' />
        </li>
      </Scrollspy>
    )
  }

  return (
    <header
      className={`w-full flex justify-center bg-white z-50 sticky top-0 transition duration-200 ${
        addBorder ? 'shadow-sm' : ''
      }`}
    >
      <nav
        className={`flex justify-between items-center w-full py-4 lg:py-6 max-w-screen-2xl px-6 lg:px-12`}
      >
        <a
          href='/#about'
          className='flex justify-center items-center select-none cursor-pointer'
        >
          <div className='flex justify-center items-center bg-primary w-12 h-12 rounded-full overflow-hidden'>
            <h1 className='font-bold text-white text-3xl'>T</h1>
          </div>
          <h1 className='ml-3 font-bold text-2xl'>Trafalgar</h1>
        </a>
        <div className='hidden lg:block'>
          <NavLinks />
        </div>
        <div
          onClick={OpenDrawerHandler}
          className='flex flex-col cursor-pointer p-3 pr-0 lg:hidden z-50'
        >
          {openDrawer ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 transform scale-150'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#458FF6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 transform scale-150'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#458FF6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 8h16M4 16h16'
              />
            </svg>
          )}
        </div>
        <div
          onClick={OpenDrawerHandler}
          className={`bg-opacity-50 w-full h-screen fixed top-0 right-0 flex justify-end
             lg:hidden transform transition-colors duration-150 ${
               openDrawer ? 'bg-black' : 'bg-transparent'
             } ${openDrawer ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <div
            className={`bg-white flex flex-col items-start justify-center h-full w-2/3 transform duration-300 ${
              openDrawer ? ' translate-x-0' : 'translate-x-full'
            }`}
          >
            <NavLinks />
          </div>
        </div>
      </nav>
    </header>
  )
}
