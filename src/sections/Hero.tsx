import { Button } from '../components/Button'
import HeroIllustration from '../assets/illustration.png'
import Dots from '../assets/element.svg'

export const Hero = () => {
  return (
    <div className="flex py-10 flex-col-reverse md:flex-row">
      <img className="-left-12 absolute hidden xl:block" src={Dots} alt="" />
      <div className="flex justify-center items-start flex-col mt-10 md:mr-16 flex-1">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-5 md:mb-10">
          Virtual healthcare for you
        </h1>
        <p className="text-gray text-2xl md:text-3xl font-light">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button className="mt-5 md:mt-10">Consult today</Button>
      </div>
      <img
        className="flex-1 w-full object-contain"
        src={HeroIllustration}
        alt=""
      />
    </div>
  )
}
