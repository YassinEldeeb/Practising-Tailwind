import { Card } from '../components/Card'
import Search from '../assets/search.svg'
import Medicine from '../assets/medicine.svg'
import Consultation from '../assets/consultation.svg'
import Details from '../assets/details.svg'
import Mids from '../assets/mids.svg'
import Tracking from '../assets/tracking.svg'

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
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-black text-2xl md:text-4xl font-bold mb-6">
          Our services
        </h1>
        <div className="w-12 md:w-16 h-1 bg-black rounded-full" />
        <p className="mt-8 text-center max-w-3xl text-sm md:text-lg text-gray font-light">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className="grid place-content-center">
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl">
          {services.map((service) => (
            <Card {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}
