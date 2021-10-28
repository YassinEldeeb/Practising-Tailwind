import { FC } from 'react'

interface Props {
  children: string
  className?: React.HTMLAttributes<HTMLButtonElement> | string | undefined
}
export const Button: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`px-6 lg:px-10 py-4 bg-primary text-white font-bold text-xl rounded-full 
      hover:opacity-90 focus:ring-2 
    focus:ring-primary focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  )
}
