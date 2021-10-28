import { FC } from 'react'

interface Props {
  icon: string
  title: string
  description: string
}
export const Card: FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-3xl p-10 filter drop-shadow-md h-full py-12">
      <div>
        <img
          className="w-24 h-24 mb-8 object-contain"
          src={icon}
          alt="Card Icon"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
        <p className="text-gray text-base font-light">{description}</p>
      </div>
    </div>
  )
}
