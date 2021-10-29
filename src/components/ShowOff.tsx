import { Button } from './Button'
import { Image } from './Image'
import { FC } from 'react'
import { Dots } from './Icons/Dots'

interface Props {
  LTR?: boolean
  last?: boolean
  heroImgSrc: string
  title: string
  description: string
  btnTitle: any
}
export const ShowOff: FC<Props> = ({
  LTR,
  btnTitle,
  description,
  heroImgSrc,
  title,
  last,
}) => {
  return (
    <div
      className={`relative flex w-full ${
        LTR ? 'justify-start' : 'justify-end'
      }`}
    >
      {!last && (
        <div className='absolute -bottom-1/3 -right-44 transform -translate-y-10 -translate-x-1/2'>
          <Dots />
        </div>
      )}
      <div
        className={`flex md:w-11/12 flex-col-reverse ${
          LTR ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div
          className={`flex justify-center items-start flex-col mt-10 ${
            LTR ? 'md:mb-10' : 'md:mt-10'
          } flex-1 ${LTR ? 'md:ml-36' : 'md:mr-36'}`}
        >
          <h1 className='header2'>{title}</h1>
          <div className='w-14 h-2px bg-black rounded-full my-5 md:my-10' />
          <p className='text-gray text-base md:text-xl font-light'>
            {description}
          </p>
          <Button
            outlined
            className='mt-5 md:mt-10'
            textSize='text-base md:text-lg'
          >
            {btnTitle}
          </Button>
        </div>
        <div className='heroImage flex-1 flex items-center justify-center'>
          <Image
            className='flex-1 w-full object-contain'
            src={heroImgSrc}
            placeholderBase64='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI4MTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+'
          />
        </div>
      </div>
    </div>
  )
}
