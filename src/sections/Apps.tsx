import HeroIllustration2 from '../assets/illustration2.png'
import HeroIllustration3 from '../assets/illustration3.png'
import { Separator } from '../components/Separator'
import { ShowOff } from '../components/ShowOff'

export const Apps = () => {
  return (
    <div>
      <Separator />
      <ShowOff
        title='Leading healthcare providers'
        description='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
          in the solutions we deliver'
        btnTitle='Learn more'
        heroImgSrc={HeroIllustration2}
        LTR
      />
      <Separator />
      <ShowOff
        last
        title='Download our mobile apps'
        description='Our dedicated patient engagement app and 
          web portal allow you to access information instantaneously (no tedeous form, long calls, 
          or administrative hassle) and securely'
        btnTitle={
          <div className='flex justify-center items-center'>
            <p className='mr-1'>Download</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        }
        heroImgSrc={HeroIllustration3}
      />
    </div>
  )
}
