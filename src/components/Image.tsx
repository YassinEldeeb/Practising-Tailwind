import { FC, useState } from 'react'

interface Props {
  src: string
  placeholderBase64: string
  className?: React.HTMLAttributes<HTMLDivElement> | string | undefined
}

export const Image: FC<Props> = ({ src, placeholderBase64, className }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div>
      <div className="relative">
        <img
          className={`${className} ${loaded ? 'opacity-0' : ''}`}
          src={placeholderBase64}
          alt=""
        />
        <img
          className={`${className} absolute left-0 top-0 transition duration-75 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          src={src}
          alt=""
        />
      </div>
    </div>
  )
}
