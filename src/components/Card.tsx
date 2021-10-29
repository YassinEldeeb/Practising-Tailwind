import { FC } from 'react'

interface Props {
  icon: () => JSX.Element
  title: string
  description: string
}
export const Card: FC<Props> = ({ title, description, icon }) => {
  return (
    <div className='bg-white rounded-3xl p-10 filter cardShadow h-full py-10 md:py-12'>
      <div className='w-24 h-24 mb-8 object-contain'>{icon()}</div>
      <div>
        <h2 className='text-3xl font-bold text-black mb-4'>{title}</h2>
        <p className='text-gray text-base font-light'>{description}</p>
      </div>
    </div>
  )
}
