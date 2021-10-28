import { Button } from '../components/Button'
import HeroIllustration from '../assets/illustration.png'
import Dots from '../assets/element.svg'
import { Image } from '../components/Image'

export const Hero = () => {
  return (
    <div className="flex py-10 flex-col-reverse md:flex-row">
      <img className="-left-12 absolute hidden xl:block" src={Dots} alt="" />
      <div className="flex justify-center items-start flex-col mt-10 md:mr-16 flex-1">
        <h1 className="header">Virtual healthcare for you</h1>
        <p className="text-gray text-2xl md:text-3xl font-light">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button className="mt-5 md:mt-10">Consult today</Button>
      </div>
      <div className="heroImage flex-1">
        <Image
          className="flex-1 w-full object-contain"
          src={HeroIllustration}
          placeholderBase64="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI4MTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
        />
      </div>
    </div>
  )
}
