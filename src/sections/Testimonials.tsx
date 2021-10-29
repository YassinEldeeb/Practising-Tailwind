import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useTimer } from 'react-timer-hook'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import { Arrow } from '../components/Icons/Arrow'
import { BrighterDots } from '../components/Icons/BrighterDots'
import { Dots } from '../components/Icons/Dots'
import { Separator } from '../components/Separator'

const testimonials = [
  {
    name: 'Edward Newgate',
    job: 'Founder Circle',
    quote: `“Our dedicated patient engagement app and 
            web portal allow you to access information instantaneously (no tedeous form, long calls, 
            or administrative hassle) and securely”`,
    profilePic: Avatar1,
  },
  {
    name: 'Michelle Gross',
    job: 'Founder Triangle',
    quote: `“We were treated like royalty. Thanks for the great service. Healthcare is the most valuable business resource we have EVER purchased. We're loving it”`,
    profilePic: Avatar2,
  },

  {
    name: 'Miranda Joseph',
    job: 'Founder Rectangle',
    quote: `“Just what I was looking for. I can show it off to everyone. Thank you so much for your help. It really saves me time and effort. healthcare is exactly what our business has been lacking.”`,
    profilePic: Avatar3,
  },
  {
    name: 'Benedek Dominica',
    job: 'Founder Line',
    quote: `“Wow what great service, I love it! Healthcare has completely surpassed our expectations. I like healthcare more and more each day because it makes my life a lot easier.”`,
    profilePic: Avatar4,
  },
]
const timerSeconds = 12
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const time = new Date()
  time.setSeconds(time.getSeconds() + 60 * 60 * 60 * 60 + timerSeconds)
  const { seconds, restart } = useTimer({
    autoStart: true,
    expiryTimestamp: time,
    onExpire: () => console.warn('onExpire called'),
  })

  const Circle = ({ index }: { index: number }) => {
    return (
      <div
        className={`w-3 h-3 cursor-pointer ${
          index + 1 === testimonials.length ? '' : 'mr-5'
        } bg-primary rounded-full opacity-30 ${
          index === currentIndex ? 'opacity-100' : ''
        }`}
      />
    )
  }

  const ChangeTestimonial = (input: 'inc' | 'dec' | number) => {
    restart(time, true)
    if (typeof input === 'number') {
      setCurrentIndex(input)
    } else if (input === 'inc' && currentIndex + 1 < testimonials.length) {
      setCurrentIndex(currentIndex + 1)
    } else if (input === 'dec' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    if (seconds === 0) {
      setTimeout(() => {
        restart(time, true)
        if (currentIndex + 1 < testimonials.length) {
          setCurrentIndex(currentIndex + 1)
        } else {
          setCurrentIndex(0)
        }
      }, 1000)
    }
  }, [seconds])

  return (
    <div className='scrollMargin-mobile lg:scrollMargin' id='testimonials'>
      <Separator />
      <div className='flex flex-col items-center justify-center relative'>
        <div className='left-0 bottom-10 absolute xl:block'>
          <Dots />
        </div>
        <div className='linearGradient overflow-hidden relative flex flex-col items-start xl:items-center py-8 px-8 xl:py-20 xl:px-28 rounded-3xl w-full xl:w-11/12 z-10'>
          <div className='-right-11 top-4 absolute hidden xl:block'>
            <BrighterDots />
          </div>
          <h1 className='text-3xl xl:text-5xl font-bold text-white xl:text-center'>
            What our customer are saying
          </h1>
          <div className='w-16 h-1 bg-white rounded-full my-9' />
          <div className='flex justify-between xl:pt-6 flex-col-reverse xl:flex-row'>
            <div className='flex items-center flex-1'>
              <div className='relative p-1'>
                <CircularProgressbar
                  className='absolute left-0 top-0 w-full h-full z-10'
                  value={((timerSeconds - seconds) / timerSeconds) * 100}
                  strokeWidth={4}
                  styles={buildStyles({
                    // Colors
                    pathColor: `white`,
                    trailColor: 'transparent',
                    backgroundColor: 'transparent',
                  })}
                />
                <img
                  className='rounded-full shadow-lg w-16 xl:w-full'
                  src={testimonials[currentIndex].profilePic}
                  alt='profile'
                />
              </div>

              <div className='flex flex-col ml-3 xl:ml-9 text-white'>
                <h2 className='font-bold text-lg xl:text-3xl mb-1 xl:mb-2'>
                  {testimonials[currentIndex].name}
                </h2>
                <p className='text-base xl:text-2xl opacity-80'>
                  {testimonials[currentIndex].job}
                </p>
              </div>
            </div>
            <p className='text-white text-base xl:text-2xl flex-1 mb-5 xl:mb-0 xl:pl-14 leading-loose'>
              {testimonials[currentIndex].quote}
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center py-10'>
        <div
          onClick={() => ChangeTestimonial('dec')}
          className={`${
            currentIndex === 0 ? 'opacity-40' : ''
          } mr-10 xl:mr-20 transform -rotate-180`}
        >
          <Arrow />
        </div>
        {testimonials.map((e, i) => (
          <div key={e.name} onClick={() => ChangeTestimonial(i)}>
            <Circle index={i} />
          </div>
        ))}
        <div
          onClick={() => ChangeTestimonial('inc')}
          className={`ml-10 xl:ml-20 ${
            currentIndex === testimonials.length - 1 ? 'opacity-40' : ''
          }`}
        >
          <Arrow />
        </div>
      </div>
      <Separator />
    </div>
  )
}
