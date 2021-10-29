import { FC } from 'react'
import { Image } from './Image'

interface Props {
  imgSrc: string
  title: string
  description: string
}
export const Article: FC<Props> = ({ title, description, imgSrc }) => {
  return (
    <div className='cursor-pointer flex flex-col max-w-sm overflow-hidden rounded-article bg-white cardShadow duration-200 hover:shadow-sm'>
      <Image
        className='object-cover'
        src={imgSrc}
        placeholderBase64='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAADwCAQAAADiQ8S7AAABzElEQVR42u3SMQ0AAAzDsJU/6aHoUcmGECUHoyIB5gXzgnkxL5gXzAvmxbxgXjAv5gXzgnnBvJgXzAvmxbxgXjAvmBfzgnnBvJgXzAvmBfNiXjAvmBfzgnnBvGBezAvmBfNiXjAvmBfMi3nBvGBezAvmBfOCeTEvmBfMC+bFvGBeMC/mBfOCecG8mBfMC+bFvGBeMC+YF/OCecG8mBfMC+YF82JeMC+YF/OCecG8YF7MC+YF82JeMC+YF8yLecG8YF7MC+YF84J5MS+YF8yLecG8YF4wL+YF84J5wbyYF8wL5sW8YF4wL5gX84J5wbyYF8wL5gXzYl4wL5gX84J5wbxgXswL5gXzYl4wL5gXzIt5wbxgXswL5gXzgnkxL5gXzIt5wbxgXjAv5gXzgnkxL5gXzAvmxbxgXjAvmBfzgnnBvJgXzAvmBfNiXjAvmBfzgnnBvGBezAvmBfNiXjAvmBfMi3nBvGBezAvmBfOCeTEvmBfMi3nBvGBeMC/mBfOCeTEvmBfMC+bFvGBeMC/mBfOCecG8mBfMC+YF82JeMC+YF/OCecG8YF7MC+YF82JeMC+YF8yLecG8YF7MC+YF84J5MS+YF8yLecG80Pb6gQDxX5EMDgAAAABJRU5ErkJggg=='
      />
      <div className='p-8 flex-1 flex flex-col justify-between items-start'>
        <div>
          <h2 className='font-bold text-black text-2xl mb-3'>{title}</h2>
          <p className='font-light text-gray mb-6'>{description}</p>
        </div>
        <div className='group flex items-center cursor-pointer hover:opacity-90'>
          <p className='font-semibold text-primary mr-3'>Read more</p>
          <svg
            className='h-6 w-6 transition duration-200 transform mt-1 group-hover:translate-x-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#458FF6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
