import { FC } from 'react'

interface Props {
  href: string
  text: string
  active?: boolean
}
export const Link: FC<Props> = ({ href, text, active }) => {
  const ifActive = (condition1: string, condition2: string) =>
    active ? condition1 : condition2

  return (
    <a
      href={href}
      className={`
      ${ifActive('text-black', 'text-lightBlack')} 
      ${ifActive('font-bold', 'font-normal')}
      ${ifActive('', 'opacity-50')}
      hover:underline mb-10 text-2xl ml-12 lg:text-xl`}
    >
      {text}
    </a>
  )
}
