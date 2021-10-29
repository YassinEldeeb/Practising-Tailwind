import { FC } from 'react'

interface Props {
  children: string
  className?: React.HTMLAttributes<HTMLButtonElement> | string | undefined
  outlined?: boolean
  textSize?: React.HTMLAttributes<HTMLButtonElement> | string | undefined
}
export const Button: FC<Props> = ({
  children,
  className,
  textSize,
  outlined,
}) => {
  return (
    <button
      className={`transition duration-75 px-6 lg:px-10 py-4 ${
        outlined
          ? 'text-primary border-2 border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white'
          : 'text-white bg-primary hover:opacity-90'
      }  font-bold ${textSize ? textSize : 'text-xl'} rounded-full 
      focus:ring-2 
    focus:ring-primary focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  )
}
