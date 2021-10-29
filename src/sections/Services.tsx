import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Blob } from '../components/Icons/Blob'
import { Consultation } from '../components/Icons/Consultation'
import { Details } from '../components/Icons/Details'
import { Dots } from '../components/Icons/Dots'
import { Medicine } from '../components/Icons/Medicine'
import { Mids } from '../components/Icons/Mids'
import { Search } from '../components/Icons/Search'
import { Tracking } from '../components/Icons/Tracking'
import { Apps } from './Apps'

const services = [
  {
    title: 'Search doctor',
    description:
      'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    icon: Search,
  },
  {
    title: 'Online pharmacy',
    description:
      'Buy  your medicines with our mobile application with a simple delivery system',
    icon: Medicine,
  },
  {
    title: 'Consultation',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
    icon: Consultation,
  },
  {
    title: 'Details info',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
    icon: Details,
  },
  {
    title: 'Emergency care',
    description:
      'You can get 24/7 urgent care for yourself or your children and your lovely family',
    icon: Mids,
  },
  {
    title: 'Tracking',
    description: 'Track and save your medical history and health data ',
    icon: Tracking,
  },
]
export const Services = () => {
  return (
    <div className='scrollMargin-mobile lg:scrollMargin' id='services'>
      <div className='flex flex-col items-start md:items-center'>
        <h1 className='text-black text-2xl md:text-4xl font-bold mb-3 md:mb-6'>
          Our services
        </h1>
        <div className='w-12 md:w-16 h-1 bg-black rounded-full' />
        <p className='mt-5 md:mt-8 md:text-center max-w-3xl text-sm md:text-lg text-gray font-light'>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className='grid place-content-center relative'>
        <div className='absolute left-0 top-0 transform -translate-x-1/3 translate-y-5 hidden md:block'>
          <Blob />
        </div>

        <div className='absolute hidden lg:block top-1/2 right-0 transform -translate-y-10 -translate-x-1/2'>
          <Dots />
        </div>
        <div className='mt-7 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 max-w-6xl'>
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-8 md:mt-16'>
        <Button textSize='text-base' outlined>
          Learn more
        </Button>
      </div>
      <Apps />
    </div>
  )
}
