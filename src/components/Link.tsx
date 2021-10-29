import { FC } from 'react'

interface Props {
  href: string
  text: string
}
export const Link: FC<Props> = ({ href, text }) => {
  return (
    <a
      className='text-lightBlack font-normal opacity-60
      hover:underline text-2xl lg:text-xl'
      href={href}
    >
      {text}
    </a>
  )
}
