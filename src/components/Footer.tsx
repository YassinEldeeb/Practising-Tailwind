import { BrighterDots } from './Icons/BrighterDots'
import { Dots } from './Icons/Dots'

export const Footer = () => {
  return (
    <div className='w-full py-10 lg:py-28 flex justify-center linearGradient relative'>
      <div className='-left-4 bottom-0 transform translate-y-5 absolute hidden xl:block'>
        <BrighterDots />
      </div>
      <div className='right-0 -top-20 transform translate-y-3 absolute xl:block -z-1'>
        <Dots />
      </div>
      <div className='w-full px-6 lg:px-12 max-w-screen-2xl flex justify-between items-start gap-7 flex-col lg:flex-row'>
        <div className='flex flex-col items-start flex-2'>
          <div className='flex justify-center items-center select-none cursor-pointer'>
            <svg
              width='41'
              height='41'
              viewBox='0 0 41 41'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41ZM13.312 15.244H19.344V31H22.724V15.244H28.782V12.488H13.312V15.244Z'
                fill='white'
              />
            </svg>
            <h1 className='ml-3 font-bold text-2xl text-white'>Trafalgar</h1>
          </div>
          <p className='text-white text-xl font-light mt-6'>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className='text-white text-xl font-light mt-10'>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className='flex flex-col items-start flex-1 text-white'>
          <h1 className='font-bold text-xl mb-5'>Company</h1>
          <a href='/#about' className='font-light text-lg mb-2'>
            About
          </a>
          <a href='/#services' className='font-light text-lg mb-2'>
            Services
          </a>
          <a href='/#testimonials' className='font-light text-lg mb-2'>
            Testimonials
          </a>
          <a href='/#articles' className='font-light text-lg mb-2'>
            Articles
          </a>
        </div>
        <div className='flex flex-col items-start flex-1 text-white'>
          <h1 className='font-bold text-xl mb-5'>Region</h1>
          <a href='/#about' className='font-light text-lg mb-2'>
            Indonesia
          </a>
          <a href='/#services' className='font-light text-lg mb-2'>
            Singapore
          </a>
          <a href='/#testimonials' className='font-light text-lg mb-2'>
            Hongkong
          </a>
          <a href='/#articles' className='font-light text-lg mb-2'>
            Canada
          </a>
        </div>
        <div className='flex flex-col items-start flex-1 text-white'>
          <h1 className='font-bold text-xl mb-5'>Help</h1>
          <a href='/#about' className='font-light text-lg mb-2'>
            Help center
          </a>
          <a href='/#services' className='font-light text-lg mb-2'>
            Contact support
          </a>
          <a href='/#testimonials' className='font-light text-lg mb-2'>
            Instructions
          </a>
          <a href='/#articles' className='font-light text-lg mb-2'>
            How it works
          </a>
        </div>
      </div>
    </div>
  )
}
